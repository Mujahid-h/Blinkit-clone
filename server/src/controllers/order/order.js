import {
  Branch,
  Customer,
  DeliveryPartner,
  Order,
} from "../../models/index.js";

export const createOrder = async (req, reply) => {
  try {
    const { userId } = req.userId;
    const { items, branch, totalPrice } = req.body;

    const customerData = await Customer.findById(userId);
    const branchData = await Branch.find(branch);

    if (!customerData) {
      return reply.code(404).send({ message: "Customer not found" });
    }

    const newOrder = new Order.create({
      customer: userId,
      items: items.map((item) => ({
        id: item.id,
        item: item.item,
        count: item.count,
      })),
      totalPrice,
      branch,
      deliveryLocation: {
        latitude: customerData.liveLocation.latitude,
        longitude: customerData.liveLocation.longitude,
        address: customerData.address || "No address available",
      },
      pickupLocation: {
        latitude: branchData.location.latitude,
        longitude: branchData.location.longitude,
        address: branchData.address || "No address available",
      },
    });

    const savedOrder = await newOrder.save();

    return replystatus(201).send({
      message: "Order created successfully!",
      savedOrder,
    });
  } catch (error) {
    return reply.status(500).send({ message: "Failed to create order" });
  }
};

export const confirmOrder = async (req, reply) => {
  try {
    const { orderId } = req.params;
    const { userId } = req.user;
    const { deliveryPersonLocation } = req.body;

    const deliveryPerson = await DeliveryPartner.findById(userId);
    if (!deliveryPerson)
      return reply.status(404).send({ message: "Delivery person not found" });

    const order = await Order.findById(orderId);
    if (!order) return reply.status(404).send({ message: "Order not found" });

    if (order.status !== "available")
      return reply.status(400).send({ message: "Order not available" });

    order.status = "confirmed";

    order.deliveryPartner = userId;
    order.deliveryPersonLocation = {
      latitude: deliveryPersonLocation?.latitude,
      longitude: deliveryPersonLocation?.longitude,
      address: deliveryPersonLocation?.address || "",
    };

    await order.save();

    return reply.send(order);
  } catch (error) {
    return reply.status(500).send({ message: "Failed to create order" });
  }
};

export const updateOrderStatus = async (req, reply) => {
  try {
    const { orderId } = req.params;
    const { userId } = req.user;
    const { deliveryPersonLocation, status } = req.body;

    const deliveryPerson = await DeliveryPartner.findById(userId);
    if (!deliveryPerson)
      return reply.status(404).send({ message: "Delivery person not found" });

    const order = await Order.findById(orderId);
    if (!order) return reply.status(404).send({ message: "Order not found" });

    if (["cancelled", "delivered"].includes(order.status))
      return reply.status(400).send({ message: "Order cannot be updated" });

    if (order.deliveryPartner.toString() !== userId)
      return reply.status(403).send({ message: "unauthorized" });

    order.status = status;

    order.deliveryPersonLocation = deliveryPersonLocation;

    await order.save();

    return reply.send(order);
  } catch (error) {
    return reply.status(500).send({ message: "Failed to create order" });
  }
};

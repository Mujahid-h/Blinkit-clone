import { Customer, DeliveryPartner } from "../../models/User.js";

export const updateUser = async (req, reply) => {
  try {
    const { userId } = req.user;
    const updatedData = req.body;

    let user =
      (await Customer.findById(userId)) ||
      (await DeliveryPartner.findById(userId));

    if (!user) {
      return reply.status(404).send({ message: "User not found" });
    }

    const userModel = user.role === "Customer" ? Customer : DeliveryPartner;

    const updatedUser = await userModel.findByIdAndUpdate(
      userId,
      { $set: updatedData },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return reply.status(404).send({ message: " Updated user not found" });
    }

    return reply.send({
      message: "User updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    return reply.status(500).send({ messgae: "An error occured" });
  }
};

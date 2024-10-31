import { Customer, DeliveryPartner } from "../../models/User.js";
import jwt from "jsonwebtoken";

const generateTokens = (user) => {
  const accessToken = jwt.sign(
    { userId: user._id, role: user.role },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "1d" }
  );

  const refreshToken = jwt.sign(
    { userId: user._id, role: user.role },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: "1d" }
  );

  return { accessToken, refreshToken };
};

export const loginCustomer = async (req, reply) => {
  try {
    const { phone } = req.body;
    let customer = await Customer.findOne({ phone });

    if (!customer) {
      customer = new Customer({
        phone,
        role: "Customer",
        isActivated: true,
      });

      await customer.save();
    }

    const { accessToken, refreshToken } = generateTokens(customer);

    reply.send({
      message: customer
        ? "Login Successfully"
        : "Customer created and logged in",
      accessToken,
      refreshToken,
      customer,
    });
  } catch (error) {
    reply.status(500).send("An error occured", error);
  }
};

export const loginDeliveryPartner = async (req, reply) => {
  try {
    const { email, password } = req.body;
    let deliveryPartner = await Customer.findOne({ email });

    if (!deliveryPartner) {
      reply.status(404).send({ message: "Deivery partner  not found" });
    }

    const isMatch = password === deliveryPartner.password;

    if (!isMatch) {
      reply.status(400).send({ message: "Inavid credentials" });
    }

    const { accessToken, refreshToken } = generateTokens(deliveryPartner);

    reply.send({
      message: "Login Successfully",
      accessToken,
      refreshToken,
      deliveryPartner,
    });
  } catch (error) {
    reply.status(500).send({ message: "An error occured", error });
  }
};

export const refreshToken = async (req, reply) => {
  try {
    const { refreshToken } = req.body;
    if (!refreshToken) {
      reply.status(403).send({ message: "Refresh token required" });
    }

    const decoded = await jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );
    let user;

    if (decoded.role === "Customer") {
      user = await Customer.findOne(decoded.userId);
    } else if (decoded.role === "DeliveryPartner") {
      user = await DeliveryPartner.findOne(decode.userId);
    } else {
      return reply.status(403).send({ message: "Invalid role" });
    }

    if (!user) {
      return reply.status(403).send({ message: "Invalid refresh token " });
    }

    const { accessToken, refreshToken: newRefreshToken } = generateTokens(user);

    reply.send({
      message: "Token refreshed successfully!",
      accessToken,
      refreshToken: newRefreshToken,
      user,
    });
  } catch (error) {
    reply.status(403).send({ message: "Invalid refresh token" });
  }
};

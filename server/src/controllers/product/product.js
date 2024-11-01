import Product from "../../models/Product.js";

export const getProductsByCategoriesId = async (req, reply) => {
  try {
    const { categoryId } = req.params;

    const products = await Product.find({ category: categoryId })
      .select("-category")
      .exec();

    return reply.send({
      message: "Products fetched successfully!",
      products,
    });
  } catch (error) {
    return reply.status(500).send({ message: "An error occured" });
  }
};

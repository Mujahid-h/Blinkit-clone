import mongoose from "mongoose";
import "dotenv/config";
import { Category, Product } from "./src/models/index.js";
import { categories, products } from "./seedData.js";

// Database seed karne ka function
async function seedDatabase() {
  try {
    // MongoDB se connect ho rahe hain
    await mongoose.connect(process.env.MONGO_URI);

    // Pehle se mojood data ko delete kar rahe hain taake duplication na ho
    await Category.deleteMany({});
    await Product.deleteMany({});

    // Categories insert karte hain aur unke IDs map mein save karte hain
    const categoryDocs = await Category.insertMany(categories);

    const categoryMap = Object.fromEntries(
      categoryDocs.map((cat) => [cat.name, cat._id])
    );
    // console.log(categoryMap);

    // Products ko unki category IDs ke saath map karke insert karte hain
    const productsWithCategoryIds = products.map((product) => ({
      ...product,
      category: categoryMap[product.category], // Product ki category ko ID mein convert karte hain
    }));
    await Product.insertMany(productsWithCategoryIds);

    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Seeding error:", error);
  } finally {
    mongoose.connection.close();
  }
}

seedDatabase();

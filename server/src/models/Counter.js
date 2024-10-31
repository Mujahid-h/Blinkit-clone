import mongoose from "mongoose";

const counterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  sequence_value: { type: Number, default: 0, unique: true },
});

const Counter = mongoose.model("Counter", counterSchema);
export default Counter;

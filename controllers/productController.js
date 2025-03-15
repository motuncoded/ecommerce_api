// Product Controller

const taskModel = require("../models/taskModel");

// Create a task
const create_a_task = async (req, res, next) => {
  const { title, description, category, deadline, completed } = req.body;
  const userId = req.user._id;

  try {
    if (!Array.isArray(category) || category.length === 0) {
      return res.status(400).json({ message: "Category is required" });
    }

    // Ensure categories are unique & lowercase
    const formattedCategories = [
      ...new Set(category.map((cat) => cat.toLowerCase())),
    ];

    const newTask = new taskModel({
      title,
      description,
      category: formattedCategories,
      deadline,
      completed,
      user: userId,
    });

    await newTask.save();

    res.status(201).json({ newTask, message: "Task created successfully" });
  } catch (error) {
    next(error);
  }
};

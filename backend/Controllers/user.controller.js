import User from "../models/user.model.js";

export const getUser = async (req, res, next) => {
  try {
    const userId = req.params.id;

    const user = await User.findById(userId).select("-password");

    res.status(200).json({ user });
  } catch (error) {
    res.status(400).json({ message: error.message });
    next(error);
  }
};

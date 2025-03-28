import Role from "../models/Role.js";
import User from "../models/User.js";

export const signup = async (req, res) => {
  const role = await Role.find({ roles: "user" });

  const newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    role: role,
  });
  await newUser.save();
  return res.status(201).send("User created successfully !");
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send("Please provide email and password");
    }
    // Check if user exists in the database
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send("User not found");
    }
    // Check if password is correct
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).send("Invalid credentials");
    }
    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).send("Internal Server Error!");
  }
};

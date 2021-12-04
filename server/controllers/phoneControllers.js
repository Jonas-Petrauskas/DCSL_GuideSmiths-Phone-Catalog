const Data = require("../model/phone.model");

exports.getPhones = async (req, res) => {
  try {
    const result = await Data.find();
    res.send(result);
    res.status(200);
  } catch (err) {
    res.status(err.status || 500).send({
      error: {
        status: error.status || 500,
        message: error.message || "Internal Server Error",
      },
    });
  }
};

exports.addPhone = async (req, res) => {
  const {
    name,
    manufacturer,
    description,
    color,
    price,
    imageFileName,
    screen,
    processor,
    ram,
  } = req.body;

  if (
    !name ||
    !manufacturer ||
    !description ||
    !color ||
    !price ||
    !imageFileName ||
    !screen ||
    !processor ||
    !ram
  ) {
    return res.status(400).json({
      status: "error",
      message: "Missing required fields",
    });
  }
  try {
    const result = await Data.create(req.body);
    res.send(result);
    res.status(201);
  } catch (err) {
    return res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
};

exports.deletePhone = async (req, res) => {
  const { id } = req.params;
  try {
    await Data.findByIdAndRemove(id);
    res.send("Removed from Database successfully");
  } catch (err) {
    res.status(err.status || 500).send({
      error: {
        status: error.status || 500,
        message: error.message || "Internal Server Error",
      },
    });
  }
};

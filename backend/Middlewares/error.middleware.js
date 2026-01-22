const errorMiddeleware = (err, req, res, next) => {
  try {
    let error = { ...err };

    error.message = err.message;

    console.error(err);

    //Mongoose casting error
    if (err.name === "CastError") {
      const message = "Resource Not Found";
      error = new Error(message);
      error.statusCode = 404;
    }

    //Mongoose Vslidation Error
    if (err.name === "ValidationError") {
      const message = "";
      error = new Error(message);
      error.statusCode = 400;
    }

    //Mongoose Dublicated value error
    if (err.code === 11000) {
      const message = Object.values(err.errors).map((err) => err.message);
      error = new Error(message.joint(", "));
      error.statusCode = 400;
    }

    res.status(error.statusCode || 500).json({
      succes: false,
      error: error.message,
      errorStack: err.stack || "Server Error",
    });
  } catch (error) {
    next(error);
  }
};

export default errorMiddeleware;

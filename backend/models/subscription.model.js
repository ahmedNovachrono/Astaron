import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      enum: ["active", "canceled", "expired"],
      default: "active",
    },
    price: {
      type: Number,
      required: true,
      min: [1, "price must be grater than 0"],
    },
    frequancy: {
      type: String,
      default: "monthly",
    },
    currancy: {
      type: String,
      required: true,
      default: "USD",
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
      validate: {
        validator: function (value) {
          return value <= new Date();
        },
        message: "start Date must be in the past",
      },
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    renewalDate: {
      type: Date,
      validate: {
        validator: function (value) {
          return value > this.startDate;
        },
        message: "renwal Date must be after the start date",
      },
    },
  },
  { timestamps: true }
);

subscriptionSchema.pre("save", function (next) {
  //auto-calculate the renwal date
  if (!this.renewalDate) {
    this.renewalDate = new Date(this.startDate);

    this.renewalDate.setDate(this.renewalDate.getDate() + 30);
  }

  //auto-update renwal when time has passed
  if (this.renewalDate < new Date()) {
    this.status = "expired";
  }
  next();
});

const Subscription = mongoose.model("Subscription", subscriptionSchema);

export default Subscription;

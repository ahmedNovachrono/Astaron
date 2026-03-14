import mongoose from "mongoose";

const flashcardSchema = new mongoose.Schema({
  cardTitle: {
    type: String,
    required: true,
  },
  cardContent: {
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
      message: "start date must not be in the future",
    },
  },
  nextReviewDate: {
    type: Date,
    validate: {
      validator: function (value) {
        return value > this.startDate;
      },
      message: "next review date must be in the future after the start date",
    },
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    index: true,
    required: true,
  },
  docId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Document",
    index: true,
    required: true,
  },
});

flashcardSchema.pre("save", function () {
  if (!this.nextReviewDate) {
    this.nextReviewDate = new Date(this.startDate);
    this.nextReviewDate.setDate(this.nextReviewDate.getDate() + 7);
  }
});

const Flashcard = mongoose.model("Flashcard", flashcardSchema);

export default Flashcard;

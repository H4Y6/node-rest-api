const { Schema, model } = require("mongoose");
const Joi = require("joi");

const contactSchema = new Schema(
  {
    name: { type: String, required: [true, "Set name for contact"] },
    email: { type: String, match: /\w+@\w+\.\w+/, required: true },
    phone: { type: String, requires: true },
    favorite: { type: Boolean, default: false },
    owner: { type: Schema.Types.ObjectId, ref: "user" },
  },
  { versionKey: false, timestamps: true }
);

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean(),
});
const updateStatusSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

const schemas = { add: addSchema, udateStatus: updateStatusSchema };

const Contact = model("contact", contactSchema);
module.exports = { Contact, schemas };

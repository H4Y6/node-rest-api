const { Schema, model } = require("mongoose");

const contactsSchema = new Schema({
  name: { type: String, required: [true, "Set name for contact"] },
  email: { type: String, match: /\w+@\w+\.\w+/, required: true },
  phone: { type: String, requires: true },
});

const Comtact = model("contact", contactsSchema);
module.exports = Comtact;

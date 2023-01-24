// const fs = require("fs/promises");
// const path = require("path");
// const { nanoid } = require("nanoid");
// const contactsPath = path.join(__dirname, "contacts.json");

// const updateContacts = async (contacts) => {
//   await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
// };

// const listContacts = async () => {
//   const data = await fs.readFile(contactsPath);
//   return JSON.parse(data);
// };

// const getContactById = async (contactId) => {
//   const contacts = await listContacts();
//   const idContact = contacts.find((c) => c.id === contactId);
//   return idContact ? idContact : null;
// };

// const removeContact = async (contactId) => {
//   const contacts = await listContacts();
//   const idx = contacts.findIndex((c) => c.id === contactId);
//   if (idx !== -1) {
//     const [removedContact] = contacts.splice(idx, 1);
//     await updateContacts(contacts);
//     return removedContact;
//   }
//   return null;
// };

// const addContact = async (name, email, phone) => {
//   const contacts = await listContacts();
//   const newContact = { id: nanoid(), name, email, phone };
//   contacts.push(newContact);
//   await updateContacts(contacts);
//   return newContact;
// };

// module.exports = { listContacts, getContactById, removeContact, addContact };

const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "contacts.json");

const updateContacts = async (contacts) =>
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

const listContacts = async () => {
  const list = await fs.readFile(contactsPath);
  return JSON.parse(list);
};

const getById = async (id) => {
  const contacts = await listContacts();
  const idContact = contacts.find((c) => c.id === id);
  return idContact ? idContact : null;
};

const add = async (name, email, phone) => {
  const contacts = await listContacts();
  const newContact = {
    id: nanoid(),
    name,
    email,
    phone,
  };
  contacts.push(newContact);
  await updateContacts(contacts);
  return newContact;
};

const updateById = async (id, name, email, phone) => {
  const contacts = await listContacts();
  const newContact = { id, name, email, phone };
  const idx = contacts.findIndex((c) => c.id === id);
  if (idx === -1) {
    return null;
  }
  contacts[idx] = newContact;
  await updateContacts(contacts);
  return newContact;
};

const deleteContact = async (id) => {
  const contacts = await listContacts();
  const idx = contacts.findIndex((c) => c.id === id);
  if (idx === -1) {
    return null;
  }
  [dele] = contacts.splice(idx, 1);
  await updateContacts(contacts);
  return dele;
};

module.exports = { listContacts, getById, add, updateById, deleteContact };

/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use("db-contacts");

// db.contacts.find()
// db.contacts.drop()

// Insert a few documents into the contacts collection.
db.getCollection("contacts").insertMany([
  {
    name: "Alec Howard",
    email: "Donec.elementum@scelerisquescelerisquedui.net",
    phone: "(748) 206-2688",
    favorite: true,
  },
  {
    name: "Allen Raymond",
    email: "nulla.ante@vestibul.co.uk",
    phone: "(992) 914-3792",
    favorite: true,
  },
  {
    name: "Kennedy Lane",
    email: "mattis.Cras@nonenimMauris.net",
    phone: "(542) 451-7038",
    favorite: true,
  },
  {
    name: "Wylie Pope",
    email: "est@utquamvel.net",
    phone: "(692) 802-2949",
    favorite: true,
  },
  {
    name: "Abbot Franks",
    email: "scelerisque@magnis.org",
    phone: "(186) 568-3720",
    favorite: true,
  },
  {
    name: "Cyrus Jackson",
    email: "nibh@semsempererat.com",
    phone: "(501) 472-5218",
    favorite: true,
  },
  {
    name: "Chaim Lewis",
    email: "dui.in@egetlacus.ca",
    phone: "(294) 840-6685",
    favorite: true,
  },
  {
    name: "Thomas Lucas",
    email: "nec@Nulla.com",
    phone: "(704) 398-7993",
    favorite: true,
  },
  {
    name: "Reuben Henry",
    email: "pharetra.ut@dictum.co.uk",
    phone: "(715) 598-5792",
    favorite: true,
  },
  {
    name: "Simon Morton",
    email: "dui.Fusce.diam@Donec.com",
    phone: "(233) 738-2360",
    favorite: true,
  },
]);

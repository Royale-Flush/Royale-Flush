const newPeople = [
  { username: "Cory", password: "CoryCory1" },
  { username: "Alex", password: "AlexAlex1" },
  {
    username: "Chudiisnumber1",
    password: "ChudiChudi1",
    name: "Chudi",
    address: "1281 Hope Ct",
    email: "chudiisnumber1@Yahoo.com",
    phone: "281-330-8004",
  },
  { username: "Itcel", password: " ItcelItcel1" },
];

const newCategories = [
  { name: "Toilet", tags: "Crapper" },
  { name: "Bidet", tags: "Bougie Toilet" },
  { name: "Portable", tags: "Outhouse" },
];

const newOrder = [
  { totalAmount: "1034.56" },
  { totalAmount: "14.26" },
  { totalAmount: "8108742.99" },
];

const newProduct = [
  { name: "The Royale", price: "12.49" },
  { name: "The Deluxe", price: "10.49" },
  { name: "The King", price: "11.49" },
  { name: "The Queen", price: "7.49" },
];

const newProductOrder = [
  { quantity: "7" },
  { quantity: "6" },
  { quantity: "98" },
];

module.exports = {
  newPeople,
  newOrder,
  newProductOrder,
  newCategories,
  newProduct,
};

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
  { customerId: "1", totalAmount: "1034.56" },
  { customerId: "2", totalAmount: "14.26" },
  { customerId: "3", totalAmount: "8108742.99" },
];

const newProduct = [
  { categoryId: "1", name: "The Royale", price: "12.49" },
  { categoryId: "2", name: "The Deluxe", price: "10.49" },
  { categoryId: "3", name: "The King", price: "11.49" },
  { categoryId: "1", name: "The Queen", price: "7.49" },
];

const newProductOrder = [
  { orderId: "1", productId: "1", quantity: "7" },
  { orderId: "2", productId: "2", quantity: "6" },
  { orderId: "3", productId: "3", quantity: "98" },
];

module.exports = {
  newPeople,
  newOrder,
  newProductOrder,
  newCategories,
  newProduct,
};

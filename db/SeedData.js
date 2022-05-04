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
  { name: "Old School", tags: "Back in the day" },
];

const newOrder = [
  { customerId: "1", totalAmount: "1034.56" },
  { customerId: "2", totalAmount: "14.26" },
  { customerId: "3", totalAmount: "8108742.99" },
];

const newProduct = [
  {
    categoryId: "4",
    name: "The Royale",
    price: "120.49",
    imageUrl: "/royale.jpeg",
  },
  {
    categoryId: "2",
    name: "The Deluxe",
    price: "$100.00",
    imageUrl: "/deluxe.jpeg",
  },
  {
    categoryId: "1",
    name: "The King",
    price: "$1,400.49",
    imageUrl: "/king.jpeg",
  },
  {
    categoryId: "1",
    name: "The Queen",
    price: "$1,600.49",
    imageUrl: "/queen.jpeg",
  },
  {
    categoryId: "3",
    name: "The Main Event",
    price: "$12,000.62",
    imageUrl: "/party.jpeg",
  },
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

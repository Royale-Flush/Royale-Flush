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
  { name: "For Kids", tags: "Potty" },
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
    price: "100.00",
    imageUrl: "/deluxe.jpeg",
  },
  {
    categoryId: "1",
    name: "The King",
    price: "1400.49",
    imageUrl: "/king.jpeg",
  },
  {
    categoryId: "1",
    name: "The Queen",
    price: "1600.49",
    imageUrl: "/queen.jpeg",
  },
  {
    categoryId: "3",
    name: "The Main Event",
    price: "12000.62",
    imageUrl: "/party.jpeg",
  },
  {
    categoryId: "4",
    name: "The Old Timer",
    price: "10999.99",
    imageUrl: "/old.jpeg",
  },
  {
    categoryId: "5",
    name: "Paw Potty",
    price: "15.99",
    imageUrl: "potty.jpeg",
  },
  {
    categoryId: "2",
    name: "Wall Bidet",
    price: "345.99",
    imageUrl: "wall_bidet.webp",
  },
  {
    categoryId: "2",
    name: "Floor Bidet",
    price: "300.99",
    imageUrl: "floor_bidet.webp",
  },
  {
    categoryId: "1",
    name: "The International",
    price: "1200.99",
    imageUrl: "/international.jpeg",
  },
  {
    categoryId: "5",
    name: "Elmo's Potty",
    price: "19.99",
    imageUrl: "elmo.jpeg",
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

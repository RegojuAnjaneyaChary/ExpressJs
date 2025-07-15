const data = [ {
      productId: "p001",
      name: "Wireless Headphones",
      price: 2999,
      quantity: 1,
      imageUrl: "https://example.com/images/headphones.jpg"
    },
    {
      productId: "p002",
      name: "Smart Watch",
      price: 4999,
      quantity: 2,
      imageUrl: "https://example.com/images/smartwatch.jpg"
    }]

const getProducts = (req, res) => {
    return res.status(200).json(data);
}
module.exports = {getProducts} //20
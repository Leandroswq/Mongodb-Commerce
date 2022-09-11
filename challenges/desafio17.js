//Cria uma nova coleção resumoProdutos para armazenar a quantidade total
// de produtos

db.resumoProdutos.insertOne({
  franquia: "McDonalds",
  totalProdutos: db.produtos.countDocuments({}),
});

db.resumoProdutos.findOne({},
{ _id: false,
franquia: true,
totalProdutos: true });
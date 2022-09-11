// Insere os valores combo e tasty ao campo tags de todos os produtos e
// ordena em ordem crescente

db.produtos.updateMany({}, {
  $push: {
    tags: {
      $each: ["combo", "tasty"],
      $sort: 1,
    },
  },
});

db.produtos.find({}, {
  _id: false,
  nome: true,
  tags: true,
});
// Retorna os produtos que a quantidade de vendas esteja entre 50 e 100

db.produtos.find({
  vendidos: {
    $gte: 50,
    $lte: 100,
  },
}, {
  nome: true,
  vendidos: true,
  _id: false,
}).sort({
  vendidos: 1,
});
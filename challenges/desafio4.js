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
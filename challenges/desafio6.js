db.produtos.find({
  $and: 
    [
      { curtidas: { $gte: 10 } },
      { curtidas: { $lte: 100 } },
    ],
}, {
  nome: true,
  curtidas: true,
  _id: false,
});
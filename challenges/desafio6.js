// Retorna os nomes e curtidas dos lanches que tem mais entre 10 e 100
// curtidas

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
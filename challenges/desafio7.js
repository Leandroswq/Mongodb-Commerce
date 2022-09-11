// Retorna os nomes e vendidos dos lanches que tenham o valor vendidos
// diferente de 50 e sem o campo tags

db.produtos.find({
  $and: 
    [
      { vendidos: { $ne: 50 } },
      { tags: { $exists: false } },
    ],
}, {
  nome: true,
  vendidos: true,
  _id: false,
});
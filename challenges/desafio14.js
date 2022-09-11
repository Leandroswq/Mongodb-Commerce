// Retorna os lanches que possuem o ingrediente picles, exibindo apenas o
// nome, ingredientes e os 3 primeiros valores nutricionais

db.produtos.find({
  ingredientes: {
    $elemMatch: { $eq: "picles" },
  },
},
{
  _id: false,
  nome: true,
  ingredientes: true,
  valoresNutricionais: {
    $slice: 3,
  },
});

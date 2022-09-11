//  Retorna o nome dos lanches que tenham o percentual de proteínas entre 30
// e 40

db.produtos.find({
  valoresNutricionais: {
    $elemMatch: {
      tipo: "proteínas",
      percentual: { $gte: 30, $lte: 40 },
    } },
},
{
  _id: false,
  nome: true,
});

// Retorna o nome dos lanches com menos de 500 calorias

db.produtos.find({
  valoresNutricionais: {
    $elemMatch: {
      tipo: "calorias",
      quantidade: { $lt: 500 },
    } },
},
{
  nome: true,
  _id: false,
});
//  Retorna o nome, curtidas e vendas dos produtos diferentes de "Big Mac" e
// "McChicken"

db.produtos.find({
  nome: {
    $not: { $in: [
      "Big Mac",
      "McChicken",
    ] },
  },
},
{
  _id: false,
  nome: true,
  curtidas: true,
  vendidos: true,
});

// Adiciona o ingrediente aos lanches diferentes de "McChicken" e retorna
// todos os lanches

db.produtos.updateMany({
  nome: { $not: { $eq: "McChicken" } },
},
{
 $addToSet: {
   ingredientes: "ketchup",
  },
});

db.produtos.find({}, {
   nome: true, 
   ingredientes: true,
  _id: false });

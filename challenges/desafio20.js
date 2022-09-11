// Remove o primeiro ingrediente do produto "Quarteirão com Queijo"

db.produtos.updateOne({
  nome: "Quarteirão com Queijo",
}, {
  $pop: {
    ingredientes: -1,
  },
});

db.produtos.find({}, {
  _id: false,
  nome: true,
  ingredientes: true,
});
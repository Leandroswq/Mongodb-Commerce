// Remove o ingrediente cebola de todos os produtos

db.produtos.find();

db.produtos.updateMany({}, {
  $pull: {
    ingredientes: "cebola",
  },
});

db.produtos.find({}, {
  _id: false,
  nome: true,
  ingredientes: true,
});
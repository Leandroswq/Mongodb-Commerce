// Adiciona o campo ultimaModificacao ao Big Mac com o valor da data atual

db.produtos.updateOne({
  nome: "Big Mac",
}, {
  $set: {
    ultimaModificacao: new Date(),
  },
});

db.produtos.find({
  ultimaModificacao: { $exists: true },
}, {
  _id: false,
  nome: true,
});
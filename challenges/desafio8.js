db.produtos.remove({
  curtidas: { $lt: 50 },
});

db.produtos.find({}, { _id: false, nome: true });
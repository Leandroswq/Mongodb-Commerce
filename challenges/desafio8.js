// Deleta os lanches com menos de 50 curtidas e retorna os nomes dos que
// restaram

db.produtos.remove({
  curtidas: { $lt: 50 },
});

db.produtos.find({}, { _id: false, nome: true });
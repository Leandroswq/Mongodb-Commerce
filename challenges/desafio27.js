// Conta quantos produtos possui as letras mc no nome (case insensitive)

db.produtos.countDocuments({
  nome: {
    $regex: /mc/i,
  },
});
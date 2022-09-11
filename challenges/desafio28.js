// Conta quantos produtos tem 4 ingredientes

db.produtos.countDocuments({
  ingredientes: {
    $size: 4,
  },
});
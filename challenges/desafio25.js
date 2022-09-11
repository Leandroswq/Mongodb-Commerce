// Adiciona a tag "muito sódio" aos produtos que tem um percentual de sódio
// acima de 40

db.produtos.updateMany({
  valoresNutricionais: {
    $elemMatch: {
      tipo: "sódio",
      percentual: { $gte: 40 },
    },
  },
}, {
  $addToSet: {
    tags: {
      $each: ["muito sódio"],
    },
  },
});

db.produtos.find({}, {
  _id: false,
  nome: true,
  tags: true,
});
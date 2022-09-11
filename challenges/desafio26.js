// Adiciona a tag "contém sódio" aos produtos que possuem um percentual
// de sódio entre 20 e 40

db.produtos.updateMany({
  valoresNutricionais: {
    $elemMatch: {
      tipo: "sódio",
      percentual: { $gt: 20, $lt: 40 },
    },
  },
}, {
  $addToSet: {
    tags: {
      $each: ["contém sódio"],
    },
  },
});

db.produtos.find({}, {
  _id: false,
  nome: true,
  tags: true,
});
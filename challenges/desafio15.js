//  Adiciona o campo "avaliacao" igual a 0, incrementa o campo avliacao em
// 5 para lanches bovinos e incrementa em 3 para os lanches do tipo ave

db.produtos.updateMany({}, {
  $set: {
    avaliacao: 0,
  },
});

db.produtos.updateMany({
  tags: {
    $elemMatch: { $eq: "bovino" },
  },
}, {
  $inc: {
    avaliacao: 5,
  },
});

db.produtos.updateMany({
  tags: {
    $elemMatch: { $eq: "ave" },
  },
}, {
  $inc: {
    avaliacao: 3,
  },
});

db.produtos.find({}, {
  _id: false,
  nome: true,
  avaliacao: true,
});
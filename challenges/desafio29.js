//  Renomeia o campo "descricao" dos produtos para "descricaoSite"

db.produtos.updateMany({},
  {
    $rename: {
  descricao: "descricaoSite",
    },
  });
  
  db.produtos.find({}, {
    _id: false,
    nome: true,
    descricaoSite: true,
  });
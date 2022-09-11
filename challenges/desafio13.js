// Adiciona o campo criado com o valor "Ronald McDonald" para todos os
// produtos

db.produtos.updateMany({},
  {
   $set: {
     criadoPor: "Ronald McDonald",
    },
  });

  db.produtos.find({},
  {
    _id: false,
    nome: true,
    criadoPor: true, 
  });
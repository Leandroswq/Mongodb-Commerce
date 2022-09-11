// Retorna os nomes, curtidas e vendidos dos lanches que tem 36 curtidas ou
// 85 produtos

db.produtos.find({
  $or: 
    [
      { curtidas: 36 },
      { vendidos: 85 },
    ],
}, {
  nome: true,
  vendidos: true,
  curtidas: true,
  _id: false,
});
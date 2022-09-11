// Retorna todos os produtos ordenados pela quantidade de venda e exibe
// apenas os campos "nome" e "vendidos"

db.produtos.find({}, {
  nome: true,
  vendidos: true,
  _id: false,
}).sort({
  vendidos: 1,
});
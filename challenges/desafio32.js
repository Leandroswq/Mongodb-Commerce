// Retorna o nome e as vendas dos produtos que tenha a quantidade de  vendas
//múltiplo por 5

db.produtos.find({
  vendidos: {
    $mod: [5, 0],
  },
}, {
  _id: false,
  nome: true,
  vendidos: true,
});
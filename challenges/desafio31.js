//  Retorna o nome dos produtos que as curtidas forem maiores que as vendas

function func() {
  return this.curtidas > this.vendidos;
}

db.produtos.find({
  $where: func,
}, {
  _id: false,
  nome: true,
});

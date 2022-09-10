function func() {
  return this.curtidas > this.vendidos;
}

db.produtos.find({
  $where: func,
}, {
  _id: false,
  nome: true,
});

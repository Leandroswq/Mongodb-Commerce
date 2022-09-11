//  Remove os campos curtidas do produto "Big Mac"

db.produtos.updateMany({
  nome: "Big Mac",
},
{
  $unset: {
    curtidas: "",
  },
});

db.produtos.find({}, {
  _id: false,
  nome: true,
  curtidas: true,
});
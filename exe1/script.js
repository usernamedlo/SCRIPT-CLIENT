const cata = [{
    name: 'Casque',
    price: 100,
    isInstock: true},
    {name: 'T-shirt',
    price: 50,
    isInstock: true},
    {name: 'Pantalon',
    price: 150,
    isInstock: false},
];

for (const product of cata) {
    document.write(`<h1>${product.name} - price : ${product.price}</h1>`);}

console.log(console.table(cata));

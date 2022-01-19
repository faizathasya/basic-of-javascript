let barang = [
    {nama: "beras", harga:10000},
    {nama: "gula", harga:14000},
    {nama: "telur", harga:20000},
    {nama: "minyak goreng", harga:9000}
]
let jumlah = [5,5,2,10]
let total = 0
for (let i = 0; i < barang.length; i++) {
    total += harga[i]*jumlah[i]
}

console.log(`total:${total}`)

const productos = [{
    id: '1',
    tittle: 'Planta Monstera',
    price: 2000,
    image: 'https://t2.ev.ltmcdn.com/es/posts/6/8/6/potus_o_poto_cuidados_686_600.jpg',
},
{
    id: '2',
    tittle: 'Planta Potus',
    price: '2500',
    image: 'https://t2.ev.ltmcdn.com/es/posts/6/8/6/potus_o_poto_cuidados_686_600.jpg',
}];


const getData = () => {
    const retProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000);
    });
    return retProducts;
}

export default getData
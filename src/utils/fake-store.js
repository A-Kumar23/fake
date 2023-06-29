// const products = async () => {
//     const response = await fetch(`'https://fakestoreapi.com/products`)
//     const data = await response.json()
//     return data;
// }


// export async function products(){
//     const response = await fetch('https://fakestoreapi.com/products')
//     const data = await response.json()
//     return data;
// }

export async function fetchData() {
    // You can await here
    const products = await fetch("https://fakestoreapi.com/products");
    const data = await products.json();
    return data;
    // ...
}

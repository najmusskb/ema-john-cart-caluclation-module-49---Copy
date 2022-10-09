import { getStoredCart } from "../utilities/fakedb";

export const ProductsAndCurtsLoaders = async () => {

    // get data products

    const ProductsData = await fetch('products.json');
    const products = await ProductsData.json();

    // get cart 
    const savedcart = getStoredCart();
    const initialCart = []
    // console.log(products)

    for (const id in savedcart) {
        // console.log(id)
        const addedproduct = products.find(product => product.id === id);
        // console.log(id, addedproduct)
        if (addedproduct) {
            const quantity = savedcart[id];
            // console.log(id, quantity)
            addedproduct.quantity = quantity;
            initialCart.push(addedproduct);
            // console.log(ok)
            // console.log(ok)
            // console.log(ok)
        }
    }


    return { products, initialCart };
}
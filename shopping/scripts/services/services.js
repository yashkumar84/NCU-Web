import { ProductModel } from "../model/model.js";

export const productService = {
    url : 'https://fakestoreapi.com/products',
    async fetchData(){
        const response = await fetch(this.url);
        let data = await response.json();
        data = data.map((product)=>new ProductModel(product));
        console.log(data);
        return data;
    }
}
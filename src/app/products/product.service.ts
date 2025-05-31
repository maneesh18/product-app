import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

import { Product } from "../shared/models/product.model";

@Injectable({
    providedIn: 'root'
})
export class ProductService{
    private products : Product[] = [
        {
            id: 1,
            name: 'Smart Phone',
            price: 599.99,
            description: ' With new foldable feature',
            imageUrl: 'https://i5.walmartimages.com/seo/Samsung-Galaxy-A16-5G-A-Series-128GB-Unlocked-Android-Cell-Phone-with-50MP-Camera-Blue-Black_fa9b7f7d-6e5a-4926-9cd8-4f91079cf042.73d9bce99fd7a10b75e95a85d390803e.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF'
        },
        {
            id: 2,
            name: 'Laptop',
            price: 999.99,
            description: ' powerful for Gaming',
            imageUrl: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSyL5JnzG-j2Bt3Y6ce6jf-OyKKBKRPXfm9uFqNV2_tU-KbXfRFwJYzfAsO1Zz7MOztCEVrBCDxO3fDhZ9LlsohnXGyMw8Nsux9Hs33_82w9-WM4NV3-Zhimg'
        },
        {
            id: 3,
            name: 'Headphones',
            price: 199.99,
            description: ' Noice cancelation wireless headphones ',
            imageUrl: 'https://www.energysistem.com/cdn/shop/files/principal_2000_25c52149-651d-46ff-94a2-a017c3c3c350.jpg?v=1748012652&width=1000'
        },
        {
            id: 5,
            name: 'Laptop',
            price: 999.99,
            description: ' powerful for Gaming',
            imageUrl: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSyL5JnzG-j2Bt3Y6ce6jf-OyKKBKRPXfm9uFqNV2_tU-KbXfRFwJYzfAsO1Zz7MOztCEVrBCDxO3fDhZ9LlsohnXGyMw8Nsux9Hs33_82w9-WM4NV3-Zhimg'
        },
        {
            id: 4,
            name: 'Phone',
            price: 599.99,
            description: ' With new foldable feature',
            imageUrl: 'https://i5.walmartimages.com/seo/Samsung-Galaxy-A16-5G-A-Series-128GB-Unlocked-Android-Cell-Phone-with-50MP-Camera-Blue-Black_fa9b7f7d-6e5a-4926-9cd8-4f91079cf042.73d9bce99fd7a10b75e95a85d390803e.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF'
        },
        {
            id: 6,
            name: 'Headphones',
            price: 199.99,
            description: ' Noice cancelation wireless headphones ',
            imageUrl: 'https://www.energysistem.com/cdn/shop/files/principal_2000_25c52149-651d-46ff-94a2-a017c3c3c350.jpg?v=1748012652&width=1000'
        },
        {
            id: 7,
            name: 'Smart Phone',
            price: 599.99,
            description: ' With new foldable feature',
            imageUrl: 'https://i5.walmartimages.com/seo/Samsung-Galaxy-A16-5G-A-Series-128GB-Unlocked-Android-Cell-Phone-with-50MP-Camera-Blue-Black_fa9b7f7d-6e5a-4926-9cd8-4f91079cf042.73d9bce99fd7a10b75e95a85d390803e.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF'
        },
        {
            id: 8,
            name: 'Laptop',
            price: 999.99,
            description: ' powerful for Gaming',
            imageUrl: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSyL5JnzG-j2Bt3Y6ce6jf-OyKKBKRPXfm9uFqNV2_tU-KbXfRFwJYzfAsO1Zz7MOztCEVrBCDxO3fDhZ9LlsohnXGyMw8Nsux9Hs33_82w9-WM4NV3-Zhimg'
        },
        {
            id: 9,
            name: 'Headphones',
            price: 199.99,
            description: ' Noice cancelation wireless headphones ',
            imageUrl: 'https://www.energysistem.com/cdn/shop/files/principal_2000_25c52149-651d-46ff-94a2-a017c3c3c350.jpg?v=1748012652&width=1000'
        },
        {
            id: 10,
            name: 'Smart Phone',
            price: 599.99,
            description: ' With new foldable feature',
            imageUrl: 'https://i5.walmartimages.com/seo/Samsung-Galaxy-A16-5G-A-Series-128GB-Unlocked-Android-Cell-Phone-with-50MP-Camera-Blue-Black_fa9b7f7d-6e5a-4926-9cd8-4f91079cf042.73d9bce99fd7a10b75e95a85d390803e.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF'
        },
        {
            id: 12,
            name: 'Headphones',
            price: 199.99,
            description: ' Noice cancelation wireless headphones ',
            imageUrl: 'https://www.energysistem.com/cdn/shop/files/principal_2000_25c52149-651d-46ff-94a2-a017c3c3c350.jpg?v=1748012652&width=1000'
        },
        {
            id: 11,
            name: 'Laptop',
            price: 999.99,
            description: ' powerful for Gaming',
            imageUrl: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSyL5JnzG-j2Bt3Y6ce6jf-OyKKBKRPXfm9uFqNV2_tU-KbXfRFwJYzfAsO1Zz7MOztCEVrBCDxO3fDhZ9LlsohnXGyMw8Nsux9Hs33_82w9-WM4NV3-Zhimg'
        },
    ];
    constructor(){}

    getProducts() : Observable<Product[]>{
        return of(this.products);
    }

    getProductById(id: number): Observable<Product | undefined>{
        const product = this.products.find( p => p.id == id);
        return of(product);
    }
}
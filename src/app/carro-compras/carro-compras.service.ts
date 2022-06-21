import { Injectable } from "@angular/core";
import { CartItem } from "./cart-item";


@Injectable({
    providedIn: 'root', 
})
export class CarroComprasService{
    items : CartItem[] = [
        {
          imageUrl : 'img1.png',
          name : 'Excel Básico',
          price : 150000,
        },
        {
          imageUrl : 'img2.png',
          name : 'Excel Intermedio',
          price : 300000,
        },
        {
          imageUrl : 'img3.jpg',
          name : 'Excel Avanzado',
          price : 550000,
        },
      ];
    
      get total(): number {
        return this.items.reduce((acc, { price }) => (acc += price), 0);
      }

      deleteItem(itemToDelete: CartItem):void{
        this.items = this.items.filter((item) => item !== itemToDelete);
      }
}
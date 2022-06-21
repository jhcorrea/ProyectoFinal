import { CarroComprasService } from './carro-compras.service';
import { CartItem } from './cart-item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carro-compras',
  templateUrl: './carro-compras.component.html',
  styleUrls: ['./carro-compras.component.css']
})
export class CarroComprasComponent implements OnInit {
  get cartItems(): CartItem[] {
    return this.carroComprasService.items;
  }

  get total(): number {
    return this.carroComprasService.total;
  }


  constructor(private carroComprasService: CarroComprasService) { }

  ngOnInit(): void {}

  deleteItem(itemToDelete: CartItem):void{
    this.carroComprasService.deleteItem(itemToDelete);
  }

}

import { CartItem } from './cart-item';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item-carro-compras',
  templateUrl: './item-carro-compras.component.html',
  styleUrls: ['./item-carro-compras.component.css']
})
export class ItemCarroComprasComponent implements OnInit {
  @Input() cartItem! : CartItem;
  @Output() cartItemDelete = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {  }

  OnDeleteClicked(): void {
    this.cartItemDelete.emit();
  }

}

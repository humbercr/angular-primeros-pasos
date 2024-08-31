import { Component, EventEmitter, Output } from '@angular/core';
import { Producto } from '../../interfaces/productos.interface';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

  @Output()
  public onNewProducto: EventEmitter<Producto> = new EventEmitter();

  public producto: Producto = {
    nombre: '',
    precio: 0
  };

  emitProducto():void {
    if (this.producto.nombre.length === 0 ) return;
    this.onNewProducto.emit(this.producto);
    this.producto = {nombre: '', precio: 0};
  }

}



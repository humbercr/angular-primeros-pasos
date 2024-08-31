import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Producto } from '../../interfaces/productos.interface';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrl: './listado-productos.component.css'
})
export class ListadoProductosComponent {

  @Input()
  public productList: Producto[] = [{
    nombre: 'crema1',
    precio: 12000
  }]

  @Output()
  public onDelete: EventEmitter<number> = new EventEmitter();

  onDeleteProducto(index:number):void {
    this.onDelete.emit( index );
  }


}

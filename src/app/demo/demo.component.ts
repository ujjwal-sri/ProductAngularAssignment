import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
sname:string = "";
obj:Product;
pid:string;
pname:string;
price:number;
stock:number;
prodList:Product[]=[];
  constructor() {
    this.obj = new Product();
   }

  ngOnInit(): void {
  }
  Add()
  {
    // this.obj.pid = this.pid;//right hand side is from user
    // this.obj.pname = this.pname;
    // this.obj.price = this.price;
    // this.obj.stock = this.stock;
    // we can also use JSON Syntax
    this.obj={
      pid:this.pid,
      pname:this.pname,
      price:this.price,
      stock:this.stock
    }
    this.prodList.push(this.obj);
  }
}

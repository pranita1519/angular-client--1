import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products :any;
  constructor(private  service : DataService) 
  { }

  ngOnInit() 
  {
    var observableResult = this.service.Select();
    observableResult.subscribe((result)=>{
      this.products = result;
    })
  }

}

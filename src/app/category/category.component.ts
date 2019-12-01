import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  category :any;
  constructor(private  service : DataService) { }

  ngOnInit() {
    var observableResult = this.service.SelectForCat();
    observableResult.subscribe((result)=>{
      this.category = result;
    })
  }

}

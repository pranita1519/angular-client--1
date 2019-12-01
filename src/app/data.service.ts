import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : HttpClient) 
  { }

  Select()
  {
    return this.http.get("http://192.168.2.19:9898/product");
  }

  SelectForCat()
  {
    return this.http.get("http://192.168.2.19:9898/category");
  }
}

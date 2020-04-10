import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AppAPIService {

  constructor( public http:HttpClient) { }

  getMainCategory()
  {
    return this.http.get("http://playbox99.com/CityGuide/GetMainCategory.php");
  }
}

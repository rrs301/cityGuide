import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class AppAPIService {

  constructor( public http:HttpClient) { }

  getMainCategory()
  {
    return this.http.get("https://playbox99.com/CityGuide/GetMainCategory.php");
  }
  getSubCategory(cid:any)
  {
    return this.http.get("https://playbox99.com/CityGuide/GetSubCategory.php?cid="+cid);
  }
  getBusinessList(cid:any)
  {
    return this.http.get("https://playbox99.com/CityGuide/GetBusinessList.php?cid="+cid);
  }
  getBusineesById(id:any)
  {
    return this.http.get("https://playbox99.com/CityGuide/getBusinessById.php?id="+id);
  }
  getSlider()
  {
    return this.http.get("https://playbox99.com/CityGuide/GetSlider.php");

  }

  getAddress()
  {
    return this.http.get("http://www.ip-api.com/json");
  }
 
  showLoader()
  {
    swal.showLoading();
  
  }
  dismissLoader()
  {
    swal.close();
  }
}

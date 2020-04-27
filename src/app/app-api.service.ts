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
    return this.http.get("https://playbox99.com/CityGuide/getLocation.php");
  }
 
  getSettingList()
  {
    return this.http.get("https://playbox99.com/CityGuide/getSettings.php")
  }
  showLoader()
  {
    swal.showLoading();
  
  }
  dismissLoader()
  {
    swal.close();
  }
  ShowWelcomePopup()
  {
    this.http.get("http://playbox99.com/CityGuide/getPopUpImage.php").subscribe(data=>{
    console.log(data);
      swal.fire({
        title: data[0].title,
        text: data[0].text,
        imageUrl: data[0].image,
        imageWidth: 400,
        imageHeight: 400,
        imageAlt: 'Custom image',
      })
    })
    
  }
}

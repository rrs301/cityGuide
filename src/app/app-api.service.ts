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
  getNews()
  {
     return this.http.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=4f0fb2df2b4247aabf5f97478a749be4");
  }
  ShowWelcomePopup()
  {
    this.http.get("https://playbox99.com/CityGuide/getPopUpImage.php").subscribe(data=>{
    console.log(data);
    if(data)
    {
    
    swal.fire({
      title: data[0].title,
      text: data[0].text,
      imageUrl: data[0].image,
      imageWidth: 400,
      imageHeight: 400,
      imageAlt: 'Custom image',
    }) 
    }
    })
    
  }
}

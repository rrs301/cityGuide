import { Component, OnInit } from '@angular/core';
import { AppAPIService } from '../app-api.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  MainCategoryData:any=[];
  cat_row=[];
  loop=[0,1,2];
  slider:any=[];
  AllSubCat:any=[];  
  AllSubCatFilter:any=[];
  UserAddress:any=[];
  constructor(public appApi:AppAPIService,private route:Router,private storage:Storage) {
  //  this.getMainCategory();
  }

  ngOnInit(): void {
   // this.checkLogin();
    this.appApi.showLoader();
    this.getMainCategory();
    this.getSlider();
    this.getAddress();
    this.appApi.dismissLoader();

    setTimeout(()=>(this.appApi.ShowWelcomePopup(),20000))
    
  }
  checkLogin()
  {
    this.storage.get('UserLogin').then((val) => {
      console.log('Your age is', val);
      if(val!="true")
      {
        this.route.navigate(['userLogin']);
      }
      
    });
  //  this.storage.clear();
  }
  getAddress()
  {
    this.appApi.getAddress().subscribe(data=>{
      this.UserAddress=data;
    })

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
  } else {
      alert("Geolocation is not supported by this browser.");
   }
  }
 showPosition(position) {
    console.log("Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude); 
 }
  getMainCategory()
  {
    this.appApi.getMainCategory().subscribe(data=>{
      
      this.MainCategoryData=data;
      console.log(this.MainCategoryData);
      let tempData=this.MainCategoryData.length/3;
     
      let flag=0;
      for(let i=0;i<Math.ceil(tempData);i++)
      {

          this.cat_row.push(flag);
          flag+=3;
      }
      console.log(this.cat_row);
     
      //this.cat_row.push(this.MainCategoryData/3)
    });

    this.appApi.getSubCategory("0").subscribe(data=>{
        this.AllSubCat=data;
    })

  }

  getSlider()
  {
    this.appApi.getSlider().subscribe(data=>{
        this.slider=data;
        console.log(this.slider);
    })
  }

  NextScreen(id:any,subcat:any)
  {
    console.log(subcat);
    if(subcat!=0)
    {
      this.route.navigate(['subcategory'],{
        queryParams:
        {
          cid:id
        }
      });
    }

    }
    
    filterList(evt) {
    console.log("Here");
      const searchTerm = evt.srcElement.value;
      
      if (!searchTerm) {
        this.AllSubCatFilter.length=0;
        return;
      }
    
      this.AllSubCatFilter = this.AllSubCat.filter(data => {
        console.log(data);
        if (data.name && searchTerm) {
          if (data.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
            return true;
          }
        
          return false;
        }
      });
     // this.AllSubCatFilter.subscribe(console.log);
    }

    BusinessList(id:any,catName:string)
    {
      let cid="sc"+id;
      this.route.navigate(['businessList'],{
        queryParams:{
          cid:cid,
          catName:catName
        }
      })
      
    }

}

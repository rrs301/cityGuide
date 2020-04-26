import { Component, OnInit } from '@angular/core';
import { AppAPIService } from '../app-api.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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
  constructor(public appApi:AppAPIService,private route:Router) {
  //  this.getMainCategory();
  }

  ngOnInit(): void {
    
    
    this.getMainCategory();
    this.getSlider();
    this.getAddress();
  }
  getAddress()
  {
    this.appApi.getAddress().subscribe(data=>{
      this.UserAddress=data;
    })
  }
  getMainCategory()
  {
    this.appApi.getMainCategory().subscribe(data=>{
      Swal.fire('Please wait...')
      Swal.showLoading()
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
      Swal.close();
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

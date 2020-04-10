import { Component, OnInit } from '@angular/core';
import { AppAPIService } from '../app-api.service';
import { Router } from '@angular/router';

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
  
  constructor(public appApi:AppAPIService,private route:Router) {
  //  this.getMainCategory();
  }

  ngOnInit(): void {
    
    
    this.getMainCategory();
    this.getSlider();
  }
  getMainCategory()
  {
    this.appApi.getMainCategory().subscribe(data=>{
      this.appApi.showLoader();
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
      this.appApi.dismissLoader();
      //this.cat_row.push(this.MainCategoryData/3)
    });

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
    


}

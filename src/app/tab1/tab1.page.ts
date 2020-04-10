import { Component, OnInit } from '@angular/core';
import { AppAPIService } from '../app-api.service';

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
  constructor(public appApi:AppAPIService) {
    this.getMainCategory();
  }

  ngOnInit(): void {
    
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

  }


}

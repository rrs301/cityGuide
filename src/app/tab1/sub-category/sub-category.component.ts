import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppAPIService } from 'src/app/app-api.service';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.scss'],
})
export class SubCategoryComponent implements OnInit {

  cid:any;
  SubCatList:any=[];
  constructor(private route:ActivatedRoute,private api:AppAPIService) 
  {
 
   }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.api.showLoader();
      this.cid = params['cid'];
      this.getSubCategory(this.cid);
      this.api.dismissLoader();
  });
  console.log(this.cid);
  }

  getSubCategory(cid:any)
  {
      this.api.getSubCategory(cid).subscribe(data=>{
          this.SubCatList=data;
      })
  }

  BusinessList(id:any)
  {
    console.log(id);
  }

  

}

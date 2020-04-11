import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppAPIService } from 'src/app/app-api.service';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.scss'],
})
export class SubCategoryComponent implements OnInit {

  cid:any;
  SubCatList:any=[];
  constructor(private route:ActivatedRoute,private api:AppAPIService,private router:Router) 
  {
 
   }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.api.showLoader();
      this.cid = params['cid'];
      this.getSubCategory(this.cid);
      this.api.dismissLoader();
  });
 // console.log(this.cid);
  }

  getSubCategory(cid:any)
  {
      this.api.getSubCategory(cid).subscribe(data=>{
          this.SubCatList=data;
      })
  }

  BusinessList(id:any)
  {
    let cid="00"+id;
    this.router.navigate(['BusinessList'],{
      queryParams:{
        cid:cid
      }
    })
    
  }

  

}

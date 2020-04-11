import { Component, OnInit } from '@angular/core';
import { AppAPIService } from 'src/app/app-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-business-list',
  templateUrl: './business-list.component.html',
  styleUrls: ['./business-list.component.scss'],
})
export class BusinessListComponent implements OnInit {

  BusinessList:any=[];
  constructor(private api:AppAPIService,private route:ActivatedRoute,private router:Router) {

   }

  ngOnInit() {
  this.route.queryParams.subscribe(params => {
      this.api.showLoader();
      
      this.getBusinessList(params['cid']);
   
      this.api.dismissLoader();
  });
    
  }

  getBusinessList(cid:any)
  {
    this.api.getBusinessList(cid).subscribe(data=>{
      console.log(data);
      this.BusinessList=data;
    })
  }

  BusinessDetail(id:any)
  {
    console.log(id);
    this.router.navigate(['BusinessDetails'],{
      queryParams:{
        cid:id
      }
    })
  }
}

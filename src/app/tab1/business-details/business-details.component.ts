import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppAPIService } from 'src/app/app-api.service';

@Component({
  selector: 'app-business-details',
  templateUrl: './business-details.component.html',
  styleUrls: ['./business-details.component.scss'],
})
export class BusinessDetailsComponent implements OnInit {

  BusinessDetail:any=[];
  constructor(private route:ActivatedRoute,private api:AppAPIService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.api.showLoader();
      
      this.getBusinessById(params['id']);
   
      this.api.dismissLoader();
  });
  }

  getBusinessById(id:any)
  {
    console.log(id);
      this.api.getBusineesById(id).subscribe(data=>{
        console.log(data);
        this.BusinessDetail=data;
      })
  }

}

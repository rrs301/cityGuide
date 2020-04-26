import { Component, OnInit } from '@angular/core';
import { AppAPIService } from 'src/app/app-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-business-list',
  templateUrl: './business-list.component.html',
  styleUrls: ['./business-list.component.scss'],
})
export class BusinessListComponent implements OnInit {

  BusinessList:any=[];
  catName:string;
  addressInput:string;
  businessListFilter:any=[];
  constructor(private api:AppAPIService,private route:ActivatedRoute,private router:Router) {

   }

  ngOnInit() {
  this.route.queryParams.subscribe(params => {
      
      this.catName=params['catName'];
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
    this.router.navigate(['businessDetails'],{
      queryParams:{
        id:id,
        catName:this.catName,
      }
    })
  }

  // filterList(evt) {
  //   console.log("Here");
  //     const searchTerm = evt.srcElement.value;
    
  //     if (!searchTerm) {
  //       return;
  //     }
    
  //     this.businessListFilter = this.BusinessList.filter(data => {
  //       console.log(data);
  //       if (data.address && searchTerm) {
  //         if (data.address.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
  //           return true;
  //         }
  //         return false;
  //       }
  //     });
  //    // this.AllSubCatFilter.subscribe(console.log);
  //   }

  changed(event:any)
  {
    console.log(this.addressInput);
    console.log(event.target.value);
  }

//   getGeoLocation(address: string): Observable<any> {
//     console.log('Getting address: ', address);
//     let geocoder = new google.maps.Geocode();
//     return Observable.create(observer => {
//         geocoder.geocode({
//             'address': address
//         }, (results, status) => {
//             if (status == google.maps.GeocoderStatus.OK) {
//                 observer.next(results[0].geometry.location);
//                 observer.complete();
//             } else {
//                 console.log('Error: ', results, ' & Status: ', status);
//                 observer.error();
//             }
//         });
//     });
// }
}

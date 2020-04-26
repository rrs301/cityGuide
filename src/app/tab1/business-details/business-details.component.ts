import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppAPIService } from 'src/app/app-api.service';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-business-details',
  templateUrl: './business-details.component.html',
  styleUrls: ['./business-details.component.scss'],
})
export class BusinessDetailsComponent implements OnInit {

  BusinessDetail: any = [];
  catName: string;
  constructor(private route: ActivatedRoute, private api: AppAPIService, private share: SocialSharing
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.api.showLoader();
      this.catName = params['catName'];
      this.getBusinessById(params['id']);

      this.api.dismissLoader();
    });
  }

  getBusinessById(id: any) {
    console.log(id);
    this.api.getBusineesById(id).subscribe(data => {
      console.log(data);
      this.BusinessDetail = data;
    })
  }

  Call(mobile: any) {
    //   console.log(mobile);
    //   this.callNumber.callNumber(mobile, true)
    // .then(res => console.log('Launched dialer!', res))
    // .catch(err => console.log('Error launching dialer', err));

    window.open("tel:"+mobile, "_blank");
  }
  shareBtn() {
    // Check if sharing via email is supported
    

    // Share via email
    this.share.shareVia('Download City Gude app', 'This.is a Subject', "Dont know").then(() => {
      // Success!
    }).catch(() => {
      // Error!
    });
  }
  whatsApp(whatsapp: any) {
    let url = "https://wa.me/" + whatsapp + "?&amp;text=Hi,We found your business in City Guide App, Want to talk about your service.";
    window.open(url, "_blank");
    console.log(whatsapp);
  }

}

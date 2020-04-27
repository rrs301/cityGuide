import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppAPIService } from 'src/app/app-api.service';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-business-details',
  templateUrl: './business-details.component.html',
  styleUrls: ['./business-details.component.scss'],
})
export class BusinessDetailsComponent implements OnInit {

  BusinessDetail: any = [];
  catName: string;
  constructor(private route: ActivatedRoute,public actionSheetController: ActionSheetController, private api: AppAPIService, private share: SocialSharing
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

  async ShareBtnActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Share',
      buttons: [{
        text: 'Whatsapp',
        icon: 'logo-whatsapp',
        handler: () => {
          console.log('Delete clicked');
          window.open("whatsapp://send?text=Visit%20Koparagaon%20City%20and%20get%20service%20near%20you.%20https%3A%2F%2Fcitytalk-89ada.web.app%2Ftabs%2Ftab1","_blank");
        }
      }, {
        text: 'Facebook',
        icon: 'logo-facebook',
        handler: () => {
          window.open("https://facebook.com/sharer/sharer.php?u=https%3A%2F%2Fcitytalk-89ada.web.app%2Ftabs%2Ftab1","_blank")
        }
      }, {
        text: 'Twitter',
        icon: 'logo-twitter',
        handler: () => {
          console.log('Play clicked');
          window.open("https://twitter.com/intent/tweet/?text=Visit%20Koparagaon%20City%20and%20get%20service%20near%20you.&amp;url=https%3A%2F%2Fcitytalk-89ada.web.app%2Ftabs%2Ftab1","_blank");
        }
      }, {
        text: 'Mail',
        icon: 'mail',
        handler: () => {
          console.log('Favorite clicked');
          window.open("mailto:?subject=Visit%20Koparagaon%20City%20and%20get%20service%20near%20you.&amp;body=https%3A%2F%2Fcitytalk-89ada.web.app%2Ftabs%2Ftab1","_blank");
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }




  whatsApp(whatsapp: any) {
    let url = "https://wa.me/" + whatsapp + "?&amp;text=Hi,We found your business in City Guide App, Want to talk about your service.";
    window.open(url, "_blank");
    console.log(whatsapp);
  }

  OpenGoogleMapApp(address:string)
  {
    window.open("https://www.google.com/maps/place/"+address+"/" , '_system');
   // https://www.google.pt/maps/dir//latitude,longitude/@latitude,longitude,733m/data=!3m1!1e3!4m4!4m3!1m0!1m1!4e1?hl=en
  }

}

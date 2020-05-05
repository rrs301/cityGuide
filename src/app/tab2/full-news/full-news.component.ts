import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-full-news',
  templateUrl: './full-news.component.html',
  styleUrls: ['./full-news.component.scss'],
})
export class FullNewsComponent implements OnInit {

  title:string;
  description:string;
  image:string;
  author:string;
  url:string;
  constructor(private route:ActivatedRoute,public actionSheetController: ActionSheetController) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
     
      this.title = params['title'];
      this.description = params['description'];
      this.image = params['image'];
      this.author = params['author'];
      this.url = params['url'];
      console.log(this.description);
  });
 // console.log(this.cid);
  }
  fullNews()
  {
    window.open(this.url, '_system');
  }

  async ShareBtnActionSheet() {
    let body=this.title+"\nRead More At-"+this.url
    const actionSheet = await this.actionSheetController.create({
      header: 'Share',
      buttons: [{
        text: 'Whatsapp',
        icon: 'logo-whatsapp',
        handler: () => {
          console.log('Delete clicked');
          window.open("whatsapp://send?text="+body,"_blank");
        }
      }, {
        text: 'Facebook',
        icon: 'logo-facebook',
        handler: () => {
          window.open("https://facebook.com/sharer/sharer.php?u="+body,"_blank")
        }
      }, {
        text: 'Twitter',
        icon: 'logo-twitter',
        handler: () => {
          console.log('Play clicked');
          window.open("https://twitter.com/intent/tweet/?text=V"+body,"_blank");
        }
      }, {
        text: 'Mail',
        icon: 'mail',
        handler: () => {
          console.log('Favorite clicked');
          window.open("mailto:?subject="+body,"_blank");
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


}

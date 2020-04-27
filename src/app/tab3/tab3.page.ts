import { Component, OnInit } from '@angular/core';
import { AppAPIService } from '../app-api.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
 
settings:any=[];
  constructor(private api:AppAPIService) {}
  ngOnInit(): void {
    this.api.showLoader();
    this.api.getSettingList().subscribe(data=>{
      this.settings=data;
      this.api.dismissLoader();
    })
  }

  OpenSetting(url)
  {
    window.open(url, '_system');
  }

}

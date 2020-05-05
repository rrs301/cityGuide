import { Component, OnInit } from '@angular/core';
import { AppAPIService } from '../app-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page  implements OnInit{
 

  newsData:any=[];
  constructor(private api:AppAPIService,private route:Router) {}
  ngOnInit(): void {
    this.getNewsData();
  }
  getNewsData()
  {
    this.api.getNews().subscribe(data=>{
      this.newsData=data['articles'];
      console.log(this.newsData);
    })
  }

  ReadNews(title,description,image,author,url)
  {
      this.route.navigate(['fullNews'],{
        queryParams:{
          title:title,
          description:description,
          image:image,
          author:author,
          url:url
        }
      });
  }
}

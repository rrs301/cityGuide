import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SubCategoryComponent } from './tab1/sub-category/sub-category.component';
import { BusinessListComponent } from './tab1/business-list/business-list.component';
import { BusinessDetailsComponent } from './tab1/business-details/business-details.component';
import { FormsModule } from '@angular/forms';

import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { OneSignal } from '@ionic-native/onesignal/ngx';

import { AngularFireModule } from '@angular/fire';

import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { UserLoginComponent } from './user-login/user-login.component';
import { IonicStorageModule } from '@ionic/storage';
import { FullNewsComponent } from './tab2/full-news/full-news.component';
@NgModule({
  declarations: [AppComponent,SubCategoryComponent,BusinessListComponent,BusinessDetailsComponent,UserLoginComponent,FullNewsComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), 
    AppRoutingModule,FormsModule,
    IonicStorageModule.forRoot(),
    HttpClientModule,AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireMessagingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })],
  providers: [
    StatusBar,
    SplashScreen,
    SocialSharing,
    OneSignal,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
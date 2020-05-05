import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { AngularFireMessaging } from '@angular/fire/messaging';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent {
 
  showBtn: boolean = false;
  deferredPrompt;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private oneSignal: OneSignal,
    private afMessaging: AngularFireMessaging
  ) {
   // this.initializeApp();
  }

//   requestPermission() {
    
//     this.afMessaging.requestToken
//       .subscribe(
//       (token) => { console.log(token); },
//       (error) => { console.error(error); }
//     );
//   }

//   initializeApp() {

//     this.requestPermission();
//     this.platform.ready().then(() => {
//       this.statusBar.styleDefault();
//       this.splashScreen.hide();
//     });

//     this.oneSignal.startInit('d409f845-f11d-4131-b613-dd5103b7d26d', '162930780439');

// this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

// this.oneSignal.handleNotificationReceived().subscribe(() => {
//  // do something when notification is received
// });

// this.oneSignal.handleNotificationOpened().subscribe(() => {
//   // do something when a notification is opened
// });

// this.oneSignal.endInit();

//     this.ionViewWillEnter();
//   }
//   ionViewWillEnter(){
//     window.addEventListener('beforeinstallprompt', (e) => {
//       // Prevent Chrome 67 and earlier from automatically showing the prompt
//       e.preventDefault();
//       // Stash the event so it can be triggered later on the button event.
//       this.deferredPrompt = e;
       
//     // Update UI by showing a button to notify the user they can add to home screen
//       this.showBtn = true;
//     });
//   }
     
//     //button click event to show the promt
             
//     add_to_home(e){
//       debugger
//       // hide our user interface that shows our button
//       // Show the prompt
//       this.deferredPrompt.prompt();
//       // Wait for the user to respond to the prompt
//       this.deferredPrompt.userChoice
//         .then((choiceResult) => {
//           if (choiceResult.outcome === 'accepted') {
//             alert('User accepted the prompt');
//           } else {
//             alert('User dismissed the prompt');
//           }
//           this.deferredPrompt = null;
//         });
//     }
  
//   showInstallBanner() {
//     if (this.deferredPrompt !== undefined && this.deferredPrompt !== null) {
//       // Show the prompt
//       this.deferredPrompt.prompt();
//       // Wait for the user to respond to the prompt
//       this.deferredPrompt.userChoice
//       .then((choiceResult) => {
//         if (choiceResult.outcome === 'accepted') {
//           console.log('User accepted the A2HS prompt');
//         } else {
//           console.log('User dismissed the A2HS prompt');
//         }
//         // We no longer need the prompt.  Clear it up.
//         this.deferredPrompt = null;
//       });
//     }
//   }
}

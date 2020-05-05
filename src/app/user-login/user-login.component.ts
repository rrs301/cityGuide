import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { WindowService } from '../window.service';
import { environment } from 'src/environments/environment.prod';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
export class PhoneNumber {
  country: string;
  area: string;
  prefix: string;
  line: string;

  // format phone numbers as E.164
  get e164() {
    const num = this.country + this.area + this.prefix + this.line
    return `+${num}`
  }

}
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent implements OnInit {
  windowRef: any;

  phoneNumber = new PhoneNumber()

  verificationCode: string;

  user: any;

  constructor(private win: WindowService,private storage:Storage,private route:Router) { }

  ngOnInit() {
    this.storage.get('UserLogin').then((val) => {
      console.log('Your age is', val);
      if(val=="true")
      {
        this.route.navigate(['home']);
      }
    });
    firebase.initializeApp(environment.firebaseConfig);
    this.windowRef = this.win.windowRef
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container')

    this.windowRef.recaptchaVerifier.render()
  }


  sendLoginCode() {

    const appVerifier = this.windowRef.recaptchaVerifier;

    const num = this.phoneNumber.e164;

    console.log(num);
    firebase.auth().signInWithPhoneNumber(num, appVerifier)
            .then(result => {

                this.windowRef.confirmationResult = result;

            })
            .catch( error => console.log(error) );

  }

  verifyLoginCode() {
    this.windowRef.confirmationResult
                  .confirm(this.verificationCode)
                  .then( result => {
                    this.storage.set("UserLogin","true");
                    
                    this.user = result.user;
                    this.storage.set("UserId",this.user.uid);
                    this.route.navigate(['home']);
    })
    .catch( error => console.log(error, "Incorrect code entered?"));
  }


}

import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    loginGoogle( event: any ) {
        if ( !environment.production ) {
            console.log("loginGoogle");
        }
    }
    loginFacebook( event: any ) {
        if ( !environment.production ) {
            console.log("loginFacebook");
        }
    }
    loginTwitter( event: any ) {
        if ( !environment.production ) {
            console.log("loginTwitter");
        }
    }
    loginGithub( event: any ) {
        if ( !environment.production ) {
            console.log("loginGithub");
        }
    }
}

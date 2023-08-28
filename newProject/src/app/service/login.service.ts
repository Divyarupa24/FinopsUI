// import { Injectable, reflectComponentType } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { BehaviorSubject, Observable } from 'rxjs';


// //import{GetAllEmployeeResponse} from '../Models/api-models/getallstudentresponse.models'

// @Injectable({
//   providedIn: 'root',
// })
// export class loginService {

//   constructor(private httpClient: HttpClient) {}
//   currentUser: BehaviorSubject<any> = new BehaviorSubject(null);

//   baseApiUrl = 'https://localhost:7170/api/';

//   //constructor(private httpClient: HttpClient) {}


//   SignUpUser(user: any) {
//     debugger;
//     return this.httpClient.post(
//       this.baseApiUrl + 'Login/SignUp',
//       {

//         Name: user[0],
//         EmailId: user[1],
//         Password: user[2],
//         Role: user[3],
//       },
//       {
//         responseType: 'text',
//       }
//     );
//   }

//   login(model: any){
//      debugger;
//      return this.httpClient.post (this.baseApiUrl + 'Login/LoginAsync',model);
//   }

//  loginUser(loginInfo:Array<String>){
//  debugger;
//     return this.httpClient.post(

//       this.baseApiUrl + 'Login/LoginAsync',

//       {
//          EmailId: loginInfo[0],
//          Password: loginInfo[1]

//        },
//       {
//          responseType: 'text',
//        }

//       );
//  }



// sendEmail(email:any){
//   return this.httpClient.post<any>(
//     this.baseApiUrl + 'Email', email
//   )
// }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class loginService {
  currentUser: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

  baseApiUrl = 'https://localhost:7170/api/';

  constructor(private httpClient: HttpClient) {}

  SignUpUser(user: any) {
    // debugger;
    return this.httpClient.post(
      this.baseApiUrl + 'Login/SignUp',
      {
        Name: user[0],
        EmailId: user[1],
        Password: user[2],
        Role: user[3],
      },
      {
        responseType: 'text',
      }
    );
  }

  login(model: any) {
    return this.httpClient.post(this.baseApiUrl + 'Login/LoginAsync', model, {
      responseType: 'text',
    });
  }

  loginUser(loginInfo: string[]) {
    return this.httpClient.post(
      this.baseApiUrl + 'Login/LoginAsync',
      {
        EmailId: loginInfo[0],
        Password: loginInfo[1],
      },
      {
        responseType: 'text',
      }
    );
  }

  sendEmail(email: any) {
    return this.httpClient.post<any>(
      this.baseApiUrl + 'Email',
      email
    );
  }


  // Add this method to set the logged-in user's username and store it in local storage
  setUsername(username: string) {''
    this.currentUser.next(username);
    localStorage.setItem('UserName', username);
    console.log('Username set:', username);

  }
  getUsername(): string | null {
    const username = localStorage.getItem('EmailId');
    return username ? JSON.parse(username) : null;
  }
}



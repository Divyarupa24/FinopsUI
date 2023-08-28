// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { SignupComponent } from '../signup/signup.component';
// import { loginService } from '../service/login.service'; // Import the loginService

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent implements OnInit {
//   constructor(private router: Router) {}
//   ngOnInit(): void {//     throw new Error('Method not implemented.');
//   }

//   // Method to handle user logout
//   logout() {
//     // Remove the token and user-related information from local storage
//     localStorage.removeItem('token');
//     localStorage.removeItem('EmailId');
//     localStorage.removeItem('Role');

//     // Navigate the user back to the login page or any other desired route
//     this.router.navigate(['']); // You can specify the login page route here
//   }
// }


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loginService } from '../service/login.service'; // Import the loginService

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username: string | null=null; // Add a property to hold the username

  constructor(
    private router: Router,
    private loginService: loginService // Inject the loginService
  ) {}

  ngOnInit(): void {
    // Get the username from the loginService
    this.username = this.loginService.getUsername();
    // console.log('Retrieved username:', this.username);

  }

  // Method to handle user logout
  logout() {
    // Remove the token and user-related information from local storage
    localStorage.removeItem('token');
    localStorage.removeItem('UserName'); // Updated  to  'UserName'
    localStorage.removeItem('Role');

    // Navigate the user back to the login page or any other desired route
    this.router.navigate(['']); // You can specify the login page route here
  }
}


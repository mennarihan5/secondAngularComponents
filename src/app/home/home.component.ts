import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
email = "Please enter your email address:";
password = "Please enter your password:";
privacyText = "We'll never share your email with anyone else.";
checkout = "Check me out";
submitBtn = "Submit";
}

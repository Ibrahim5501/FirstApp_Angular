import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private As: AuthService, private router: Router) {}

  email: string="";
  password: string="";

  Login(){
    console.log(this.email, this.password)
    // appel du service => envoyer JWT
    this.As.signInWithEmailAndPassword(this.email, this.password)
    .then(() => {
      this.router.navigate(['/dashboard']);
    })
  }
}

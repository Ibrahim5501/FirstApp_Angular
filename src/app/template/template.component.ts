import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/Services/auth.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {

  constructor(private As: AuthService, private router: Router) {}

  Logout(){
    this.As.signOut().then(() => {
      this.router.navigate(['/login']);
    })
  }
}

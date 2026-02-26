import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { MemberService } from '../../Services/member.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit {
  form!: FormGroup;

  constructor(private MS: MemberService, private router: Router) { }

  // initialize the form with form controls
  ngOnInit() {
    this.form = new FormGroup({
      cin: new FormControl(null, [Validators.required]),
      name: new FormControl(null),
      type: new FormControl(null),
      createdDate: new FormControl(null),
    });
  }

  sub(){
    // log the form value to the console
    // console.log(this.form.value);

    // call the AddMember method of the MemberService and subscribe to the response
    this.MS.AddMember(this.form.value).subscribe(() => {
      // redirect to the member list page after successfully adding a member
      this.router.navigate(['']);
    });
  }


}

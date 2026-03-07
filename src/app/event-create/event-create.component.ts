import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { EventService } from 'src/Services/event.service';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<EventCreateComponent>, private ES: EventService) { }

  form!: FormGroup;

  ngOnInit() {
    // initialize the form with form controls
    this.form = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      datedebut: new FormControl(null),
      datefin: new FormControl(null),
      place: new FormControl(null),
    });
  }

  save() {
    // Handle save logic here
    this.ES.AddEvent(this.form.value).subscribe(() => {
      // After saving, close the dialog
      this.dialogRef.close();
      // Optionally, you can also refresh the event list in the parent component
    });
  }

  close() {
    
    this.dialogRef.close();
  }
}

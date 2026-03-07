import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Evt } from 'src/Modeles/Evt';
import { ConfirmComponent } from '../confirm/confirm.component';
import { EventService } from 'src/Services/event.service';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ViewChild } from '@angular/core';
import { EventCreateComponent } from '../event-create/event-create.component';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})

export class EventComponent implements AfterViewInit, OnInit {

  displayedColumns: string[] = ['id', 'title', 'datedebut', 'datefin', 'place', 'actions'];
  dataSource: MatTableDataSource<Evt> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private eventService: EventService, private dialog: MatDialog) {}

  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit(): void {
    this.fetchAll();
  }

  fetchAll() {
    //appeler le service et attendre la reponse
    this.eventService.GetAllEvents().subscribe((data) => {
      this.dataSource.data = data;
    });
  }

  deleteEvent(id: string) {

    // lancer la boite de dialogue de confirmation
    let x = this.dialog.open(ConfirmComponent)

    // attendre la reponse de la boite de dialogue
    x.afterClosed().subscribe((result) => {
      if (result) {
        // si la reponse est positive, alors supprimer l'evenement
        this.eventService.DeleteEvent(id).subscribe(() => {
          // Remove the deleted event from the dataSource array
          // this.dataSource = this.dataSource.filter(event => event.id !== id);

          // Alternatively, you can refresh the event list by calling GetAllEvents again
          this.eventService.GetAllEvents().subscribe((data) => {
            this.dataSource.data = data;
          });
        });
      }
    });
  }

  create(){
    this.dialog.open(EventCreateComponent);
  }
}
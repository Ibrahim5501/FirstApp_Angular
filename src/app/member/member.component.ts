import { Component } from '@angular/core';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent {
  dataSource: any[] = [
    { id: 1, cin: '12345678', name: 'John Doe', type: 'member', createdDate: '2123'},
    { id: 2, cin: '87654321', name: 'Jane Smith', type: 'member', createdDate: '2123'},
  ];
  displayedColumns: string[] = ['id', 'cin', 'name', 'type', 'createdDate', 'actions'];
}
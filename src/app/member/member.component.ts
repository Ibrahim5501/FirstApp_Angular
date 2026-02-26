import { Component, OnInit } from '@angular/core';
import { Member } from 'src/Modeles/Member';
import { MemberService } from '../../Services/member.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  //injec de dependances
  constructor(private memberService: MemberService) { }
  //declarer le tableau
  dataSource: Member[] = [];
  displayedColumns: string[] = ['id', 'cin', 'name', 'type', 'createdDate', 'actions'];
  ngOnInit(): void {
    //appeler le service et attendre la reponse
    this.memberService.GetAllMembers().subscribe((data) => {  
      this.dataSource = data;
    });
  }

  deleteMember(id: string) {
    this.memberService.DeleteMember(id).subscribe(() => {
      // Remove the deleted member from the dataSource array
      // this.dataSource = this.dataSource.filter(member => member.id !== id);

      // Alternatively, you can refresh the member list by calling GetAllMembers again
      this.memberService.GetAllMembers().subscribe((data) => {
        this.dataSource = data;
      });
    });
  }
}
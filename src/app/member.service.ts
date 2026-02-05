import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'; // This import statement is used to import the Injectable decorator from the @angular/core package. The Injectable decorator is used to mark a class as available to be provided and injected as a dependency in Angular's dependency injection system.
import { Observable } from 'rxjs';
import { Member } from 'src/Modeles/Member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private httpClient:HttpClient) { }

  GetAllMembers():Observable<Member[]>{
    // generer une requte http
    // en mode GET
    return this.httpClient.get<Member[]>('http://localhost:3000/members');
  }

  AddMember(member: Member): Observable<void> {
    return this.httpClient.post<void>('http://localhost:3000/members', member);
  }

  UpdateMember(id: string, member: Member): Observable<void> {
    return this.httpClient.put<void>(`http://localhost:3000/members/${id}`, member);
  }

  DeleteMember(id: string): Observable<void> {
    return this.httpClient.delete<void>(`http://localhost:3000/members/${id}`);
  }
}

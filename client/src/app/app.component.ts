import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Dating App';
  users: any;

  constructor(private http: HttpClient) {}
  
  ngOnInit(){
    this.getUsers();
  }

  getUsers() {
    this.http.get('http://localhost:5149/api/users').subscribe(res => {
      this.users = res;
      console.log(res);
  }, error=> {
    console.log(error);
    })
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  
  //hold login logout string.
  login:string="Login";
  c:Boolean=false;
  constructor() { }

  ngOnInit(): void {
    // if token is present then change login to logout
    if(sessionStorage.getItem("token")){
      this.login="Logout";
      this.c=true;

    }
  }
  doLogin(){
    if(sessionStorage.getItem("token")){
      sessionStorage.removeItem("token");
      window.location.href="/";
    }
    else{
      window.location.href="/login";
    }
  }

}

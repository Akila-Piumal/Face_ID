import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  elem: HTMLElement;

  events: string[] = [];
  opened: boolean=false;

  isExpanded = false;

  slideBarLinks = [
    {
      id:1,
      name: 'Home',
      link: 'home',
      icon: 'casino',
    },
    {
      id:2,
      name: 'leaves',
      link: 'leaves',
      icon: 'content_paste_go',
    },
    {
      id:3,
      name: 'My Attendance',
      link: 'my-attendance',
      icon: 'group',
    },
    {
      id:4,
      name: 'Profile',
      link: 'profile',
      icon: 'payment',
    },
  ]

  constructor(private router: Router,@Inject(DOCUMENT) private document: any,){
    this.elem = document.documentElement;
  }

  openFullscreen(){
    console.log("Full Screen");
    if (this.elem.requestFullscreen) {
      this.elem.requestFullscreen();
    }
    if (this.document.exitFullscreen) {
      this.document.exitFullscreen();
    }
  }

  viewUser() {
    console.log("View User")
  }

  logout(){
    // sessionStorage.clear();
    this.router.navigate(['/']);
  }

  openleftsidebar(){
    this.opened = !this.opened
    this.isExpanded = !this.isExpanded;
  }

  onList(id: any) {
    // this.viewID = id;
    // console.log(this.viewID);
  }



  
}

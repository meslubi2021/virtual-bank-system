import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';


declare const $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
}) 

export class NavbarComponent implements OnInit {

  isMobileView: boolean;

  constructor(private authService: AuthService) {
    this.isMobileView = window.innerWidth <= 768;
   }

  ngOnInit() {
    window.onresize = () => this.isMobileView = window.innerWidth <= 768;
  }
  
}

import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'exchange', title: 'Exchange',  icon: 'pe-7s-user', class: '' },
    { path: 'coin', title: 'Coin',  icon: 'pe-7s-user', class: '' },
    { path: 'trade', title: 'Trade',  icon: 'pe-7s-user', class: '' },
    { path: 'user', title: 'User Profile',  icon: 'pe-7s-user', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}

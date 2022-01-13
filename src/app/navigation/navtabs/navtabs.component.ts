import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navtabs',
  templateUrl: './navtabs.component.html',
  styleUrls: ['./navtabs.component.css'],
})
export class NavtabsComponent implements OnInit {
  tabLinks: any[] = [
    {
      name: 'Home',
      route: '/',
    },
    {
      name: 'Accommodations',
      route: '/accommodation',
    },
    {
      name: 'Food and Beberage',
      route: 'foodandbeverage',
    },
    {
      name: 'Celebrations',
      route: 'celebrations',
    },
    {
      name: 'Lifestyle',
      route: 'lifestyle',
    },
    {
      name: 'Offers',
      route: 'offers',
    },
  ];

  activeLink = this.tabLinks[0].name;
  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css'],
})
export class SidenavListComponent implements OnInit {
  @Output() sideNavToggleEvent = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onToggleClose(): void {
    this.sideNavToggleEvent.emit();
  }
}

import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: ``
})
export class MenuComponent implements OnInit {

  menuItems: MenuItem[] = [];

  ngOnInit(): void {
    this.menuItems = [
      {
        label: 'New',
        icon: 'pi pi-plus'
      },
      {
        label: 'Search',
        icon: 'pi pi-search'
      },
      {
        label: 'Logout',
        icon: 'pi pi-sign-out'
      }
    ]
  }

}

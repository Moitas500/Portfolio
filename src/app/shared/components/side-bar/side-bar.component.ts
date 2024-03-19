import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

interface Option {
  route: string,
  title: string,
  icon: string,
  selected: boolean
}

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {

  public listOptions: Option[] = [
    {
      icon: 'home',
      route: '/home',
      title: 'Home',
      selected: true,
    },
    {
      icon: 'person',
      route: '/profile',
      title: 'Profile',
      selected: false,
    },
    {
      icon: 'folder_open',
      route: '/portfolio',
      title: 'Portfolio',
      selected: false,
    },
    {
      icon: 'mail',
      route: '/contact',
      title: 'Contact',
      selected: false,
    }
  ] 

  private _router = inject( Router )

  navigateTo( item: Option ) {
    this.listOptions.forEach( option => option === item ? option.selected = true : option.selected = false )

    this._router.navigate([item.route])
  }

}

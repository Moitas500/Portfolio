import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

interface Options {
  route: string,
  title: string,
  icon: string
}

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {

  public listOptions: Options[] = [
    {
      icon: 'home',
      route: '/home',
      title: 'Home'
    },
    {
      icon: 'person',
      route: '/profile',
      title: 'Profile'
    },
    {
      icon: 'folder_open',
      route: '/portfolio',
      title: 'Portfolio'
    },
    {
      icon: 'mail',
      route: '/contact',
      title: 'Contact'
    }
  ] 

  private _router = inject( Router )

  navigateTo( route: string ) {
    this._router.navigate([route])
  }

}

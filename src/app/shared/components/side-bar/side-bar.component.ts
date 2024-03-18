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
      icon: '',
      route: '/home',
      title: 'Home'
    },
    {
      icon: '',
      route: '/profile',
      title: 'Profile'
    },
    {
      icon: '',
      route: '/portfolio',
      title: 'Portfolio'
    },
    {
      icon: '',
      route: '/contact',
      title: 'Contact'
    }
  ] 

  private _router = inject( Router )

  navigateTo( route: string ) {
    this._router.navigate([route])
  }

}

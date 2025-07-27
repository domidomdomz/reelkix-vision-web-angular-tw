import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { NgIconComponent } from '@ng-icons/core';
import { LayoutService } from '../../../core/layout.service';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [NgIconComponent, AsyncPipe],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css'
})
export class TopbarComponent {
  isDark = true;

  constructor(public layout: LayoutService) {}

  toggleTheme() {
    console.log('Toggle theme', this.isDark);
    this.isDark = !this.isDark; 
    document.documentElement.classList.toggle('dark', this.isDark);
  } 

}

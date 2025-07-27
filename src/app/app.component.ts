import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { TopbarComponent } from './components/layout/topbar/topbar.component';
import { LayoutService } from './core/layout.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopbarComponent, SidebarComponent, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(public layout: LayoutService) {}

  protected readonly title = signal('reelkix-vision-web-angular-tw');

  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}

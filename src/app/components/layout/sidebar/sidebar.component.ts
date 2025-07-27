import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIconComponent } from '@ng-icons/core';
import { LayoutService } from '../../../core/layout.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule,NgIconComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  constructor(public layout: LayoutService) {}

  menuItems = [
    { label: 'Upload Shoe', icon: 'heroPlusSolid', route: '/' },
    { label: 'Facebook',   icon: 'heroPlusSolid', route: '/facebook' },
    { label: 'Instagram',  icon: 'heroPlusSolid', route: '/instagram' },
    { label: 'TikTok',     icon: 'heroPlusSolid', route: '/tiktok' }
  ];

  isDark = true;
  toggleTheme() { 
    console.log('Toggle theme', this.isDark);
    this.isDark = !this.isDark; 
    document.documentElement.classList.toggle('dark', this.isDark);
  }
}

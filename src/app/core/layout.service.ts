import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LayoutService {
    private sidebarOpen$ = new BehaviorSubject<boolean>(false);
    readonly isSidebarOpen$ = this.sidebarOpen$.asObservable();

    openSidebar() { 
        this.sidebarOpen$.next(true); 
    }
    
    closeSidebar() { 
        this.sidebarOpen$.next(false); 
    }
    
    toggleSidebar() { 
        this.sidebarOpen$.next(!this.sidebarOpen$.value); 
    }
}

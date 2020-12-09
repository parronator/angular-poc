import {Injectable, Input} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  isCollapsed = false;

  toggle(): void{
    this.isCollapsed = !this.isCollapsed;
  }
}

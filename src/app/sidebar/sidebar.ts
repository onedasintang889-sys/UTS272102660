import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.html',
})
export class Sidebar {
  closeSidebar() {
    document.body.classList.remove('sidebar-open');
  }
}


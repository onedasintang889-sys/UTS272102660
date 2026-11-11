import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
})
export class Header {
  toggleSidebar(e: Event) {
    e.preventDefault();
    const cls = window.innerWidth < 992 ? 'sidebar-open' : 'sidebar-collapse';
    document.body.classList.toggle(cls);
  }
}
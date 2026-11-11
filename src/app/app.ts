import { Component } from '@angular/core';
import { Header } from './header/header';
import { Sidebar } from './sidebar/sidebar';
import { Chat } from './chat/chat';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, Sidebar, Chat, Footer],
  templateUrl: './app.html',
})
export class App {}

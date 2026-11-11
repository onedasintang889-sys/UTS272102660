import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Message { text: string; time: string; mine: boolean; }

@Component({
  selector: 'app-chat',
  imports: [FormsModule],
  templateUrl: './chat.html',
})
export class Chat {
  newMessage = '';
  messages: Message[] = [
    { text: 'Just finished going through it. Overall really solid – the new motion primitives are great', time: '10:40 AM', mine: true },
    { text: 'Glad you like them. Any concerns?', time: '10:40 AM', mine: false },
    { text: 'Two small things: the success state on form inputs feels light, and the focus ring is barely visible on dark theme.', time: '10:41 AM', mine: true },
    { text: "Yeah, that focus ring issue has been bugging me too. I'll bump the contrast and ping you for another look.", time: '10:42 AM', mine: false },
    { text: 'Sounds good. Otherwise, ship it!', time: '10:42 AM', mine: true },
  ];

  send() {
    const t = this.newMessage.trim();
    if (!t) return;
    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    this.messages.push({ text: t, time: now, mine: true });
    this.newMessage = '';
  }
}

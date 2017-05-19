import { Component } from '@angular/core';

@Component({
  selector: 'joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.scss']
})

export class JokeListComponent {
  jokes: Object[];

  constructor() {
    this.jokes = [
      {
        setup: "What did the cheese say when it looked in the mirror?",
        punchline: "Hallou-me (Hallomi)",
        hide: true
      },
      {
        setup: "What kind of cheese do you use to disguise a small horse?",
        punchline: "Mask-a-pony (Mascarpone)",
        hide: true
      },
      {
        setup: "A kid threw a lump of cheddar at me",
        punchline: "I thought ‘That’s not very mature’",
        hide: true
      }
    ];
  }

  toggle(joke) {
    joke.hide = !joke.hide;
  }
}

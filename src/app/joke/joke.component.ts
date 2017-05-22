import { Component, Input } from '@angular/core';
import { Joke } from "../share/joke";

@Component({
  selector: 'joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent {
  @Input() joke: Joke;
}

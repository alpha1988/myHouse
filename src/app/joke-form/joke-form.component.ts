import { Component, Output, EventEmitter } from '@angular/core';
import { Joke } from "../share/joke";

@Component({
  selector: 'joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.scss']
})
export class JokeFormComponent {
  @Output() jokeCreated = new EventEmitter<Joke>();

  createJoke(setup:string, punchline:string) {
    this.jokeCreated.emit(new Joke(setup, punchline));
  }
}

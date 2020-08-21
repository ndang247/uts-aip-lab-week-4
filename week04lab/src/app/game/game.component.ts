import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {

  status = 'Please enter your guess';
  guess = 'enter your guess here';
  answers = [];


  check(){
    if (this.guess.toLocaleLowerCase() === 'angular') {
      this.status = 'Your answer is correct';
    } else {
      this.status = 'Your guess is incorrect';
      this.answers.push(this.guess);
    }
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  randomText : string = lorem.sentence();
  enteredText : string = '';
  successMessage = "";

  onInput(event: Event){
    const target = event.target as HTMLInputElement;
    this.enteredText = target.value;
    console.log(target.value);
  }

  compare(randomLetter: string, enteredLetter: string){
    if(!enteredLetter){
      return 'pending';
    }

    return randomLetter === enteredLetter ? 'correct':'incorrect';
  }
}

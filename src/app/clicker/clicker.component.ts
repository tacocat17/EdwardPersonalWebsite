import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-clicker',
  standalone: true,
    imports: [
        MatButton
    ],
  templateUrl: './clicker.component.html',
  styleUrl: './clicker.component.css'
})
export class ClickerComponent {
  numOfClicks = 0

  constructor() {
    this.numOfClicks = 10
  }
  click(){
    this.numOfClicks++
  }
}

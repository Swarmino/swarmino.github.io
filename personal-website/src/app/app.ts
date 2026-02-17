import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProceduralBgComponent } from "./procedural-bg/procedural-bg";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProceduralBgComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('personal-website');
}

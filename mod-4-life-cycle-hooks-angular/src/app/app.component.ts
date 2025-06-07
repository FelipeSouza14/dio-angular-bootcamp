import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TitleComponent } from "./title/title.component";
import { CheckSampleComponent } from "./check-sample/check-sample.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TitleComponent, CheckSampleComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mod-4-life-cycle-hooks-angular';
  isAliveCheckedSample: boolean = true

  disposeCheckSample() {
    this.isAliveCheckedSample = false
  }
}

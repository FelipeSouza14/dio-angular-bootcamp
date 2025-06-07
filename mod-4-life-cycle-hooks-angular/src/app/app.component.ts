import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitleComponent } from "./title/title.component";
import { CheckSampleComponent } from "./check-sample/check-sample.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TitleComponent, CheckSampleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mod-4-life-cycle-hooks-angular';
}

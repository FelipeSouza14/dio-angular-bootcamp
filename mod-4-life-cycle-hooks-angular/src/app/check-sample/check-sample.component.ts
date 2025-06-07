import { 
  Component, 
  OnInit,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit 
} from '@angular/core';

@Component({
  selector: 'app-check-sample',
  imports: [],
  templateUrl: './check-sample.component.html',
  styleUrl: './check-sample.component.css'
})
export class CheckSampleComponent implements 
  OnInit,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit 
  {
    constructor() {

    }

    ngOnInit(): void {
      console.log(`OnInit`)
    }
    ngDoCheck(): void {
      console.log(`DoCheck`)
    }
    ngAfterContentChecked(): void {
      console.log(`AfterContentChecked`)
    }
    ngAfterContentInit(): void {
      console.log(`AfterContentInit`)
    }
    ngAfterViewChecked(): void {
      console.log(`AfterViewChecked`)
    }
    ngAfterViewInit(): void {
      console.log(`AfterViewInit`)
    }

  }

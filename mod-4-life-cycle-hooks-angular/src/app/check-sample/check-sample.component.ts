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
    quantidade:number = 0

    constructor() {

    }

    adicionar() {
      this.quantidade += 1
    }

    decrementar() {
      this.quantidade -= 1
    }

    ngOnInit(): void {
      console.log(`OnInit`)
    }
    ngDoCheck(): void {
      console.log(`DoCheck`)
    }
    // Inicia quando o primeiro conteudo é iniciado
    ngAfterContentInit(): void {
        console.log(`AfterContentInit`)
    }
    // Inicia depois da inicialização da view
    ngAfterViewInit(): void {
      console.log(`AfterViewInit`)
    }
    // Após alguma alteração, verifica o conteudo
    ngAfterContentChecked(): void {
      console.log(`AfterContentChecked`)
    }
    // Após alguma alteração, verifica a view
    ngAfterViewChecked(): void {
      console.log(`AfterViewChecked`)
    }

  }

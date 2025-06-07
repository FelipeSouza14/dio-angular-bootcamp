import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent implements OnInit {
    nome:string = 'Felipe'

    constructor() {
        console.log(`Constructor ${this.nome}`)
    }

    ngOnInit(): void {
        this.nome = `Ola ${this.nome}`
    }

}

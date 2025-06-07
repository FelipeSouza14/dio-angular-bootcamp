import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent implements OnInit, OnChanges {

    @Input() nome:string = ''

    constructor() {
        console.log(`Constructor ${this.nome}`)
    }

    ngOnChanges(): void {
        console.log(`OnChange ${this.nome}`)
    }

    ngOnInit(): void {
        console.log(`OnInit ${this.nome}`)
    }

}

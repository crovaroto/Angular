import { UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-example',
  templateUrl: './pipes-example.component.html',
  styleUrls: ['./pipes-example.component.css']
})
export class PipesExampleComponent implements OnInit {
  number = 0;
  text= 'Hello world!';
  date = new Date;
  pessoa = {
    nome: 'Cássio',
    idade: 37,
    profissao: 'Analista de Sistemas'
  }

  nomes =  ['Cássio'];

  constructor(private upperCasePipe: UpperCasePipe) {}

  ngOnInit(): void {
    this.text = this.upperCasePipe.transform(this.text);
  }

  mudaValor(){
    this.number = 123456789;
  }

  add(text: string) {
    this.nomes.push(text);
  }
}


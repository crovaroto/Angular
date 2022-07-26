import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  text = 'Cássio Rovaroto';
  imgUrl = 'https://picsum.photos/300/300';
  buttonText = 'Clique aqui';
  textRed = false;
  bgColor = 'green';
  textInput='';
  number = 0;
  destroy = false;

  constructor() { }

  ngOnInit(): void {
  }

  retornaNome(){
    return this.text;
  }

  clicou() {
    this.text = 'Teste';
    console.log('Clicou aqui');
    this.textRed = true;
  }

  clicouNoFilho(text: any) {
    console.log(text)
  }

  incremento() {
    this.number++;
  }

  destroyComponent(){
    this.destroy = true;
  }

}

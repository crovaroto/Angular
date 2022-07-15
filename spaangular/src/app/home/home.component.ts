import { Component, OnInit, Input } from '@angular/core';
import { alunos } from '../model/alunos';

@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  valor: number = 0;
  exibeTabela: boolean = false;

  listaAlunos: alunos[] = [
    { nome : 'Cássio', idade: 37, email: 'cassio@email.com', curso: 'Desenvolvimento de Sistemas' },
    { nome : 'Teste 1', idade: 37, email: 'teste1@email.com', curso: 'História' },
    { nome : 'Teste 2', idade: 20, email: 'teste2@email.com', curso: 'Georgrafia' },
    { nome : 'Teste 3', idade: 35, email: 'teste3@email.com', curso: 'Marketing' },
    { nome : 'teste 4', idade: 42, email: 'teste4@email.com', curso: 'Gerenciamento de Projetos' },
  ];

  displayedColumns: string[] = ['Nome', 'Idade', 'E-Mail', 'Curso'];

  ngOnInit(): void {
    this.valor = 5;
  }

  mudarValor() {
    this.valor++;
  }

  reiniciarValor() {
    this.valor = 0;
  }

  exibirTabela() {
    this.exibeTabela = true;
  }

}

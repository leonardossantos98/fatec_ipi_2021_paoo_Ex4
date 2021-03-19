import { Component, Output, EventEmitter } from '@angular/core';
import { Livro } from '../livro.model';

@Component({
  selector: 'app-livro-inserir',
  templateUrl: './livro-inserir.component.html',
  styleUrls: ['./livro-inserir.component.css']
})
export class LivroInserirComponent{
  @Output() livroAdicionado = new EventEmitter();
  titulo: string;
  id: string;
  autor: string;
  numeroPaginas: string;

  onAdicionarLivro(){
    const livro: Livro = {
      titulo: this.titulo,
      id: this.id,
      autor: this.autor,
      numeroPaginas: this.numeroPaginas
    };
    this.livroAdicionado.emit(livro);
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotesService} from '../../services/notes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  notas:any[] = []
  termino:string;

  constructor( private activatedRoute:ActivatedRoute, private _notasService:NotesService) {
    this.termino = '';
  }

  ngOnInit() {

    this.activatedRoute.params.subscribe( params => {
      this.termino = params['termino'];
      this.notas = this._notasService.buscarNotas( params['termino'] );
      console.log( this.notas );
    });

  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-nota',
  templateUrl: './nota.component.html'
})
export class NotaComponent {

  nota:any = {};


  constructor( private activatedRoute: ActivatedRoute,
               private _notasService: NotesService
    ){

    this.activatedRoute.params.subscribe( params =>{
        this.nota = this._notasService.getNota( params['id'] );
        // console.log(this.heroe);
    });

  }

}

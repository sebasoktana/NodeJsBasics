import { Component, OnInit } from '@angular/core';
import { Nota, NotesService } from '../../services/notes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html'
})
export class NotasComponent implements OnInit {

  notas:Nota[] = [];

  constructor( private _notasService:NotesService,
               private router:Router
                ) {
    // console.log("constructor");
  }

  ngOnInit() {
    this.notas = this._notasService.getNotas();
    // console.log( this.heroes );
  }

  verNota( idx:number ){
    this.router.navigate( ['/nota',idx] );
  }

}

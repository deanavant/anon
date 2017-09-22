import { AnoteService } from './anote.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myTitle = 'Anonymous Notes';
  note = {
  	desc: '',
  	created_on: null,
  }
  constructor(private _anotes: AnoteService){}

  onSubmit(){
  	console.log(this.note.desc);
    this._anotes.postNote( {desc:this.note.desc } );
    console.log('*** sent to _anotes.postNote()' + this.note);
    // this.note.desc = '';
    // this.note.created_on = null;
  }
}

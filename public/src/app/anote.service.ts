import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
@Injectable()
export class AnoteService {
  notes = [];
  constructor(private _http: Http) { }

  getNotes()
  {
    return this._http.get('/notes').subscribe(
      (response) => 
      { 
        this.notes = response.json();
        this.mySort();
        console.log('***_AnoteService.getNotes() got a response');
      },
      (err) => 
      {
        console.log('***_http.get: ' + err);
      }
    );
  }

  postNote(note){
    console.log('****AnoteService.postNote():' + note);
    return this._http.post('/notes', note).subscribe(
      (response) => 
      { 
        this.notes = response.json();
        this.mySort();
        console.log('***_AnoteService.postNote() got a response');
      },
      (err) => 
      {
        console.log('***_AnoteService.postNote(): ' + err);
      }
    );
  }

  mySort(){
    this.notes.sort(function(a,b){
      return new Date(b.created_on).getTime() - new Date(a.created_on).getTime();
    });
  }
}

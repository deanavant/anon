import { Component, OnInit } from '@angular/core';
import { AnoteService } from '../anote.service';

@Component({
  selector: 'app-notelist',
  templateUrl: './notelist.component.html',
  styleUrls: ['./notelist.component.css']
})
export class NotelistComponent implements OnInit {
  constructor(private _anotes:AnoteService) {
  	this._anotes.getNotes();
  }

  ngOnInit() {
  }

}

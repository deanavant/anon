import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotelistComponent } from './notelist/notelist.component';
import { AnoteService } from './anote.service';

@NgModule({
  declarations: [
    AppComponent,
    NotelistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [AnoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }

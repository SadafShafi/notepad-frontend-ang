import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NoteViewComponent } from './note-view/note-view.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoteHeadsComponent } from './note-heads/note-heads.component';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule,routingComponents  } from './app-routing.module';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NewNoteComponent } from './new-note/new-note.component';
@NgModule({
  declarations: [
    AppComponent,
    NoteViewComponent,
    NoteHeadsComponent,
    NewNoteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'',component:NoteHeadsComponent},
      {path:'notesview/:id',component:NoteViewComponent} ,
      {path:'new',component:NewNoteComponent} 
    ]),
  ],
  providers: [
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { NoteViewComponent } from './note-view/note-view.component';
import { NoteHeadsComponent } from './note-heads/note-heads.component';


const routes: Routes = [
    {path:'',component:NoteHeadsComponent},
    {path:'notesview/:id',component:NoteViewComponent} 
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}


export const routingComponents = [NoteHeadsComponent,NoteViewComponent]










import { Component, OnInit } from '@angular/core';


import { FormBuilder,FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { CRUDServiceService } from '../crudservice.service';
import { MatFormField } from '@angular/material/form-field';
@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.css']
})
export class NoteViewComponent implements OnInit {
  

  constructor(
    private Cruder:CRUDServiceService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    ) { }

  note = {
    id:1,
    heading:"",
    note:""
  }
  myTextarea = "";
  routeParams:any;
  NotesForm:FormGroup;

  ngOnInit() {

    this.routeParams = this.route.snapshot.paramMap;
    console.log(this.routeParams.params.id);
    this.showNote();

  }

  Lister = {id:[],head:[] }
  dat:any;
  presentNote = false
  id;

  getHeadings(){
    this.Cruder.getAll().subscribe(data=>{
      this.dat = data;
    })
  }

  showNote(){
    this.id = this.routeParams.params.id;
    this.Cruder.getId(this.id).subscribe((data)=>{

      // console.log(data);
      this.note.id = this.id;
      this.note.heading = data[0].heading;
      this.note.note = data[0].note;

      this.NotesForm = this.formBuilder.group({
        Heading: this.note.heading,
        Note: this.note.note
      });
    })
  }


  saveEdit(){
    console.log("Using Put to store ");
    console.log(this.NotesForm.value.Heading,this.NotesForm.value.Note);
    this.Cruder.update(this.id,{heading:this.NotesForm.value.Heading,note:this.NotesForm.value.Note})
    .subscribe(result=>{
      console.warn(result);
    });
  }

  deleteNote(){
    this.Cruder.delete(this.id).subscribe(result=>{
      console.warn(result);
    });

    console.log("Deleting Note of Id  ",this.id);

  }



}

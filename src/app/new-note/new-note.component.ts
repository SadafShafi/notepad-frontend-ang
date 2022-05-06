import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CRUDServiceService } from '../crudservice.service';
import { MatFormField } from '@angular/material/form-field';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent implements OnInit {

  constructor(
    private Cruder:CRUDServiceService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
  }

  // NotesForm:FormGroup;
  NotesForm = this.formBuilder.group({
    Heading: "",
    Note: ""
  });

  saveEdit(){
    console.log("Using Post to store ");
    this.Cruder.post({heading:this.NotesForm.value.Heading,note:this.NotesForm.value.Note})
    .subscribe((result)=>{
      console.warn(result);
    })
    // console.log(this.NotesForm.value.Heading,this.NotesForm.value.Note);
  }

}

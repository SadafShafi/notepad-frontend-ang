import { Component, OnInit } from '@angular/core';
import { CRUDServiceService } from '../crudservice.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-note-heads', 
  templateUrl: './note-heads.component.html',
  styleUrls: ['./note-heads.component.css']
})
export class NoteHeadsComponent implements OnInit {

  constructor(private Cruder:CRUDServiceService, private route: ActivatedRoute) { 
    
    this.getHeadings()
  }

  ngOnInit() { 
  }

  dat:any;

  getHeadings(){
    console.log("getting headings")
    this.Cruder.getAll().subscribe(data=>{
      this.dat = data;
    })
  }

  



}

import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';  
import { InmatesService } from '../inmates.service'; 

@Component({
  selector: 'app-inmate-add',
  templateUrl: './inmate-add.component.html',
  styleUrls: ['./inmate-add.component.css']
})
export class InmateAddComponent implements OnInit {

  angForm: FormGroup;

  constructor(private fb: FormBuilder, private is: InmatesService) {
    this.createForm();
   }
   createForm() {  
    this.angForm = this.fb.group({  
      InmateName: ['', Validators.required ],  
      ImateDateOfBirth: ['', Validators.required ],  
      InmateCellNumber: ['', Validators.required ],  
      InmateLocation: ['', Validators.required ]  
    });  
  }
  addInmate(InmateName, InmateDateOfBirth, InmateCellNumber, InmateLocation) {  
    this.is.addInmate(InmateName, InmateDateOfBirth, InmateCellNumber, InmateLocation);  
  }   

  ngOnInit() {
  }

}

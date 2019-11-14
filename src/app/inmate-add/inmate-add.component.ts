import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';  
import { InmatesService } from '../inmates.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-inmate-add',
  templateUrl: './inmate-add.component.html',
  styleUrls: ['./inmate-add.component.css']
})
export class InmateAddComponent implements OnInit {

  angForm: FormGroup;

  constructor(private fb: FormBuilder, private is: InmatesService, private router: Router,) {
    this.createForm();
   }
   createForm() {  
    this.angForm = this.fb.group({  
      InmateName: ['', Validators.required ],  
      InmateDateOfBirth: ['', Validators.required ],
      InmateCellNumber: ['', Validators.required ],  
      InmateIntakeDateTime: ['', Validators.required ],  
      InmateLocation: ['', Validators.required ]  
    });  
  }
  addInmate(InmateName, InmateDateOfBirth, InmateCellNumber, InmateIntakeDateTime,  InmateLocation) {  
    this.is.addInmate(InmateName, InmateDateOfBirth, InmateCellNumber, InmateIntakeDateTime, InmateLocation); 
    this.router.navigate(['inmates']);  
  }   

  ngOnInit() {
  }

}

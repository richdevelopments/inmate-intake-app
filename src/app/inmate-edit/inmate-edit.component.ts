import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';  
import { ActivatedRoute, Router } from '@angular/router';  
import { InmatesService } from '../inmates.service';  

@Component({
  selector: 'app-inmate-edit',
  templateUrl: './inmate-edit.component.html',
  styleUrls: ['./inmate-edit.component.css']
})
export class InmateEditComponent implements OnInit {
  angForm: FormGroup; 
  inmate: any = {}; 

  constructor(private route: ActivatedRoute, private router: Router, private is: InmatesService, private fb: FormBuilder) {  
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
  ngOnInit() {  
    this.route.params.subscribe(params => {  
        this.is.editInmates(params['id']).subscribe(res => {  
          this.inmate = res;  
      });  
    });  
  } 
  
  updateInmates(InmateName, InmateDateOfBirth, InmateCellNumber, InmateIntakeDateTime, InmateLocation, id) {  
    this.route.params.subscribe(params => {  
      this.is.updateInmates(InmateName, InmateDateOfBirth, InmateCellNumber, InmateIntakeDateTime, InmateLocation, params.id);  
      this.router.navigate(['inmates']);  
    });  
  }  
}

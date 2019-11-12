import { Component, OnInit } from '@angular/core';
import Inmate from '../Inmate';  
import { InmatesService } from '../inmates.service'; 

@Component({
  selector: 'app-inmate-get',
  templateUrl: './inmate-get.component.html',
  styleUrls: ['./inmate-get.component.css']
})
export class InmateGetComponent implements OnInit {
  inmates: Inmate[];

  constructor(private is: InmatesService) { }

  ngOnInit() {
    this.is.getInmates().subscribe((data: Inmate[]) => {  
        this.inmates = data;  
    });  
  }

}

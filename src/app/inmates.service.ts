import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class InmatesService {
  uri = 'http://localhost:4000/inmates';

  constructor(private http: HttpClient) { }

  addInmate(InmateName, InmateDateOfBirth, InmateCellNumber, InmateIntakeDateTime, InmateLocation) {  
    const obj = {  
      InmateName,  
      InmateDateOfBirth,
      InmateCellNumber, 
      InmateIntakeDateTime, 
      InmateLocation 
    };  
    console.log(obj);  // check the data in the console
    this.http.post(`${this.uri}/add`, obj).subscribe(res => console.log('Done'));  
  }  

  getInmates() {  
    return this.http.get(`${this.uri}`);  
  } 

  editInmates(id) {  
    return this.http.get(`${this.uri}/edit/${id}`);  
  } 
  
  updateInmates(InmateName, InmateDateOfBirth, InmateCellNumber, InmateIntakeDateTime, InmateLocation, id) {  
    const obj = {  
      InmateName,  
      InmateDateOfBirth,  
      InmateCellNumber,
      InmateIntakeDateTime,
      InmateLocation  
    };  
    this.http.post(`${this.uri}/update/${id}`, obj).subscribe(res => console.log('Done'));  
  }  

  deleteInmate(id) {  
    return this.http.get(`${this.uri}/delete/${id}`);  
  }
}

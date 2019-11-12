import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class InmatesService {
  uri = 'http://localhost:4000/inmates';

  constructor(private http: HttpClient) { }

  addInmate(InmateName, InmateDateOfBirth, InmateCellNumber, InmateLocation) {  
    const obj = {  
      InmateName,  
      InmateDateOfBirth,  
      InmateCellNumber,
      InmateLocation 
    };  
    console.log(obj);  
    this.http.post(`${this.uri}/add`, obj)  
        .subscribe(res => console.log('Done'));  
  }  

  getInmates() {  
    return this.http.get(`${this.uri}`);  
  } 
}

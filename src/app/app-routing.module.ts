import { NgModule } from '@angular/core';  
import { Routes, RouterModule } from '@angular/router';  
import { InmateAddComponent } from './inmate-add/inmate-add.component';  
import { InmateEditComponent } from './inmate-edit/inmate-edit.component';  
import { InmateGetComponent } from './inmate-get/inmate-get.component'; 
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';   

const routes: Routes = [
  {  
    path: 'inmate/create',  
    component: InmateAddComponent  
  },  
  {  
    path: 'edit/:id',  
    component: InmateEditComponent  
  },  
  {  
    path: 'inmates',  
    component: InmateGetComponent  
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            SlimLoadingBarModule ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

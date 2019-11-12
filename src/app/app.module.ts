import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InmateAddComponent } from './inmate-add/inmate-add.component';
import { InmateGetComponent } from './inmate-get/inmate-get.component';
import { InmateEditComponent } from './inmate-edit/inmate-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms'; 
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { HttpClientModule } from '@angular/common/http'; 
import { InmatesService } from './inmates.service'; 

@NgModule({
  declarations: [
    AppComponent,
    InmateAddComponent,
    InmateGetComponent,
    InmateEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    SlimLoadingBarModule.forRoot(),
    HttpClientModule 
  ],
  providers: [InmatesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NamesComponent } from './names/names.component';

import { HttpClientModule } from '@angular/common/http';
import { AddnamesComponent } from './addnames/addnames.component'
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NamesComponent,
    AddnamesComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

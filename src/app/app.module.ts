import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageComponent } from './page/page.component';





@NgModule({
  declarations: [
    AppComponent,
   
    HeaderComponent,
    FooterComponent,
    PageComponent,
    
   

   
       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule ,
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

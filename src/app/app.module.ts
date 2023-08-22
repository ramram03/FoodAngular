import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTooltipModule} from '@angular/material/tooltip';
import { NgModule } from '@angular/core';
import { CustomMaterialModule } from './core/material.module';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { MatToolbarModule} from '@angular/material/toolbar';
import {  ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {MatSelectModule} from '@angular/material/select'
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {  MatSnackBarModule } from '@angular/material/snack-bar';
//import {MatSnackBarConfig} from '@angular/material/snack-bar'
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { ShopsComponent } from './shops/shops.component';
import {MatChipsModule} from '@angular/material/chips';
import{MatRadioModule} from '@angular/material/radio'

import { MatStepperModule } from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from "@angular/flex-layout";
import { NoidaComponent } from './noida/noida.component';
import { BangaloreComponent } from './bangalore/bangalore.component'; 
import { HyderabadComponent } from './hyderabad/hyderabad.component';
import { HttpClientModule } from '@angular/common/http';
import { ChennaiComponent } from './chennai/chennai.component';
import { ListComponent } from './list/list.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ShopsComponent,
    ChennaiComponent,
   // ChennaiComponent,
    NoidaComponent,
    BangaloreComponent,
    HyderabadComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    MatChipsModule,
    FormsModule,
    
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CustomMaterialModule,
    FormsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatStepperModule,
    MatTooltipModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    MatSnackBarModule,
    HttpClientModule,
    MatRadioModule,
    MatSelectModule
  
    
 
    
  ],
  providers: [{provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}}],

  bootstrap: [AppComponent]
})
export class AppModule { }
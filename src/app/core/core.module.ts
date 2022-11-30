import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { httpInterceptorProviders } from './interceptors';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent
  ],
  providers:[
    {provide:LOCALE_ID, useValue: 'fr-FR' },
    httpInterceptorProviders
  ]
})
export class CoreModule { }

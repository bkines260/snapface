import { AuthModule } from './auth/auth.module';
import { LandingPageModule } from './landing-page/landing-page.module';
import { FaceSnapsModule } from './face-snaps/face-snaps.module';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing-modules';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  {registerLocaleData} from '@angular/common' ;
import * as fr from '@angular/common/locales/fr';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    LandingPageModule,
    AuthModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    registerLocaleData(fr.default)
  }
 }

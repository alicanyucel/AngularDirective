import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RenklendirDirective } from './renklendir.directive';
import { MyroutingDirective } from './myrouting.directive';
import { C1Component } from './components/c1/c1.component';
import { C2Component } from './components/c2/c2.component';
import { RouterModule } from '@angular/router';
import { ValidDirective } from './valid.directive';

@NgModule({
  declarations: [
    AppComponent,
    RenklendirDirective,
    MyroutingDirective,
    C1Component,
    C2Component,
    ValidDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      [
   {
    path:"c1",
    component:C1Component
   },
   {
    path:"c2",

   }
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

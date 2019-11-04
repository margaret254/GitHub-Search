import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { HttpService } from './services/http.service';

import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HighlightDirective } from './highlight.directive';
import { DateCountPipe } from './date-count.pipe';



@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HighlightDirective,
    DateCountPipe,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

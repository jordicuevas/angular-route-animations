import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './routes/about/about.component';
import { RightComponent } from './routes/right/right.component';
import { LeftComponent } from './routes/left/left.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    RightComponent,
    LeftComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

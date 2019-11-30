import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FooterComponent} from './footer/footer.component';
import {FlowerDetailsComponent} from './flower-details/flower-details.component';
import {FlowerListComponent} from './flower-list/flower-list.component';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    FlowerDetailsComponent,
    FlowerListComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

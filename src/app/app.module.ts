import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

//Pages
import { AppComponent } from './app.component';
import { ListingComponent } from './listing/listing.component';
import { CarComponent } from './car/car.component';

import { routing, appRoutingProviders } from './app.component.route';

@NgModule({
  declarations: [
    AppComponent,
    ListingComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

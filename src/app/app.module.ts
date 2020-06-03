import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

// import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { JocuriComponent } from './jocuri/jocuri.component';
import { TarifeBarComponent } from './tarife-bar/tarife-bar.component';
import { ProdusSearchComponent } from './produs-search/produs-search.component';
import { TarifeBarUVComponent } from './tarife-bar-uv/tarife-bar-uv.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    JocuriComponent,
    TarifeBarComponent,
    ProdusSearchComponent,
    TarifeBarUVComponent,
    ContactComponent,
    // ReactiveFormsModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

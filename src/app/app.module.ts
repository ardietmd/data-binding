import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent} from './contact/contact.component';
import { DashboardComponent } from './contact/dashboard/dashboard.component';
import { DetailContactComponent } from './contact/detail/detail-contact.componen';
import { ContactListComponent } from './contact/list/contact-list.component';
import { AlamatComponent } from './alamat/alamat.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    DashboardComponent,
    ContactListComponent,
    DetailContactComponent,
    AlamatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

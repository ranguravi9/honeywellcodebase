import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginComponent} from "./login/login.component";
import {ContentComponent} from "./content/content.component";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import { SidebarComponent } from './sidebar/sidebar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CoreModule} from "./core/core.module";
import { ToastrModule } from 'ngx-toastr';
import {AgmCoreModule} from "@agm/core";
import { AgmDirectionModule } from 'agm-direction';
import { environment } from './../environments/environment';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContentComponent,
    HeaderComponent,
    FooterComponent,
      SidebarComponent,
      PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      HttpClientModule,
      BrowserAnimationsModule,
      ToastrModule.forRoot(),
      FormsModule,
      ReactiveFormsModule,
      CoreModule,
      AgmCoreModule.forRoot({
          apiKey: environment.apiKey
      }),
      AgmDirectionModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CookieService } from 'ngx-cookie-service';
import { InjectSessionInterceptor } from '@core/interceptors/inject-session.interceptor';
import { HistorypageComponent } from '@modules/history/pages/historypage/historypage.component';


@NgModule({
  declarations: [
    AppComponent
    
   
  ],
  imports: [        
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [CookieService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: InjectSessionInterceptor,
    multi:true

  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

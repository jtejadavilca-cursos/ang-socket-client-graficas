import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { ChartsModule } from 'ng2-charts';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GraficaComponent } from './components/grafica/grafica.component';

const config: SocketIoConfig = { url: 'http://localhost:5000', options: {} };
@NgModule({
  declarations: [
    AppComponent,
    GraficaComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    HttpClientModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

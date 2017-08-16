import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import { BackendApiService } from './services/backendApi/backend-api.service';
import { ChartComponent } from './components/chart/chart.component';
import { CenterComponent } from './components/center/center.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ChartComponent,
    CenterComponent
  ],
  imports: [
    BrowserModule,HttpModule, BsDropdownModule.forRoot()
  ],
  bootstrap: [AppComponent],
  providers: [BackendApiService]
})
export class AppModule { }

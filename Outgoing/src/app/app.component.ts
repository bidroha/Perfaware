import { Component } from '@angular/core';

import {HeaderComponent} from './components/header/header.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {CenterComponent} from './components/center/center.component';
import {ChartComponent} from './components/chart/chart.component';
import {BackendApiService} from './services/backendApi/backend-api.service';
import {SharedService}     from './services/shared/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [BackendApiService, SharedService]
})

export class AppComponent {
  title = 'app';
}

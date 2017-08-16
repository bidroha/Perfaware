import { Component, OnInit } from '@angular/core';
import{ SharedService} from '../../services/shared/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _shservice: SharedService ) {}

  ngOnInit() {
    console.log("Inside onInnit of headercomp");
    var reportId:Number;
    reportId = 2;
    this._shservice.reportno=reportId;
     this._shservice.publishData(reportId);
     console.log("Data published to",this._shservice.reportId);
      console.log("Data set to",this._shservice.reportno);

  }

    // toggleSidebar() {
    //     const dom: any = document.querySelector('body');
    //     dom.classList.toggle('push-right');
    // }

}

import { Component, Input, OnInit } from '@angular/core';
import {IMajor} from '../../Interfaces/Major';
import{BackendApiService} from '../../services/backendApi/backend-api.service'
import{SharedService} from '../../services/shared/shared.service'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  providers: [BackendApiService, SharedService]
})

export class SidebarComponent implements OnInit {

  @Input() reportid:number;

  //Menu:Array<IMajor>;
  Menu:any;
  reportId: Number;

  constructor(public apiServiceProvider: BackendApiService, private _shservice: SharedService) { 
    console.log("inside backend service constructor");
    setTimeout(5000);

     this._shservice.reportId$.subscribe(
            (data:any) => {
                console.log('data received from header: ' + data);
                this.reportId = data;
            },
            err => {
              console.log("error happend in backend service constru",err)
            }
          );
  }

  ngOnInit() {
  setTimeout(5000);
    this.reportId = this._shservice.reportno;
    //var reportNumber = 1;
    console.log("report id read in sidebar is", this.reportId);
     this.reportId = 2;
    this.fgetCategories(this.reportId);
  }
 

fgetCategories(reportNumber){
 console.log("calling api service with report no", reportNumber);
  this.apiServiceProvider.fGetCategory(reportNumber).subscribe((data:any) =>{
    console.log("data sent from api", data);
    console.log("response array", data.response);
    console.log("length is", data.response.length);

    if ((data.code == 0) && (data.response.length > 1) ){
      this.Menu= data.response;
      console.log("First item of the Menu is = ",this.Menu[0]);
      console.log("Name is", this.Menu[0].menuname);
    }
    else if (data.length == 1){
        if (data[0].ReturnCode == '0') {
              console.log("Error sent from api", data)
        }
        else {
          console.log("Nothing found");
        }
    }
    },
    err =>{
      console.log("error" , err);  
    }

  )
}

}

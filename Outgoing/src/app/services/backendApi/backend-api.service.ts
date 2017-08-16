import { Injectable } from '@angular/core';
import { Http,HttpModule, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';


@Injectable()
export class BackendApiService {
  apiurl: string;
  getCategoryurl: string;

  constructor(public http: Http) { 
    this.apiurl = 'http://snigdha.co.in/insights/webservices/getcatmenuandsubmenu/'
    console.log('Hello from service Provider');
  }


  fGetCategory(reportNumber): any{
    
    this.getCategoryurl = this.apiurl+reportNumber;
    console.log("Calling Url", this.getCategoryurl);

    return  this.http.get(this.getCategoryurl)
        .map((res:Response) => {
          console.log("Response status is", res.status);
          console.log("Response body is", res.json());
               if (res) {
                    if (res.status === 200) {
                      console.log("returning");  
                      return res.json();
                        
                    }
                    else{
                      console.log("Server Error"+res.status);
                    }
                }
                else{
                  console.log("Nothing returned from API call to file");
                }
            }
        )
        
    }
}

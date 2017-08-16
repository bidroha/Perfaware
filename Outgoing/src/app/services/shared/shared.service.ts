import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()

export class SharedService {
    //private caseNumber: any;

     constructor() { }

    // Observable string sources
  public reportId = new Subject<Number>();   
  public reportno : Number; 
  // Observable string streams
  reportId$ = this.reportId.asObservable();

    // Service message commands
  publishData(data: Number ) {
    this.reportId.next(data);
  }
}

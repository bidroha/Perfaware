import {IMinor} from './Minor';

export interface IMajor {
   id: Number,
   report_id: Number,
   menu_name: string ,
   submenus: Array<IMinor>
}


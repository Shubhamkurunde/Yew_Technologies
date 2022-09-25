import { Component, OnInit } from '@angular/core';
import { RestService } from '../sevices/rest.service';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit {
  datas:any[]=[]

  constructor( public _rest:RestService) { }

  ngOnInit(): void {
this.get_all_info();
  }
  get_all_info(){
    this._rest.get_all_info().subscribe(data=>{
      this.datas=(data as any)['data']
    },err=>{
      console.log(err);
    })
  }

}

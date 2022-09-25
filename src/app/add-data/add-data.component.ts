import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RestService } from '../sevices/rest.service';
import { StateService } from '../sevices/state.service';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {
    //  add_data: FormGroup;
  constructor(private _rest:RestService, public _state:StateService, private _router:Router) {
  //  GST_NO: new FormControl('',[validators.required, validators.GST_NO]),
  //  Name : new FormControl('',[validators.required, validators.Name]),


   }


  ngOnInit(): void {
  }

  // add_data(){
  //   this._rest.add_data().subscribe((data)=>{
  //      console.log(data);
  //       this._state.data = (data as any).data;
  //   },err=>{
  //         alert(err.error.message);
  //         console.log(err);
  //   })

  //   }
  // }


}

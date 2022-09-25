import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestService } from '../sevices/rest.service';
import { StateService } from '../sevices/state.service';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {
     add: FormGroup;
  constructor(private _rest:RestService, public _state:StateService, private _router:Router) {
    this.add = new FormGroup({
      GSTNo: new FormControl('',[Validators.required]),
      Name: new FormControl(''),
      CountryId: new FormControl(''),
      Latitude: new FormControl(''),
      PANNo: new FormControl(''),
      Address: new FormControl(''),
      StateId: new FormControl(''),
      MobileNo: new FormControl(''),
      Longitude: new FormControl(''),
      Code: new FormControl(''),
      Pincode: new FormControl(''),
      CityId: new FormControl(''),
      Email: new FormControl(''),
      Currency: new FormControl(''),
    })
   }
  ngOnInit(): void {
  }

  add_data(){
this._rest.add_data(this.add.value).subscribe((data)=>{
  console.log(data);
  alert('data Added');
},err=>{
  console.log(err);
  alert('something went wrong');
});
  }

}

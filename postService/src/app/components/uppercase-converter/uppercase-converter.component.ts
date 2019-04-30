import { Component, OnInit } from '@angular/core';
import {UppercaseConverterService} from '../../services/uppercase-converter.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-uppercase-converter',
  templateUrl: './uppercase-converter.component.html',
  styleUrls: ['./uppercase-converter.component.css']
})
export class UppercaseConverterComponent implements OnInit {

  private result:any;

  constructor(private _service:UppercaseConverterService) { }

  ngOnInit() {
  }
  public convert(obj):any {
    this._service.convertToUppercase(obj).subscribe(
      res=>this.result=res,
      (err:HttpErrorResponse) =>{
        console.error(err);
        console.log(this.result);
      }
    )
  }
}

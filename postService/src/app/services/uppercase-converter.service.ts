import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UppercaseConverterService {

  constructor(private _http: Http) { }

  public convertToUppercase(obj): any {
    return this._http.post("http://test-routes.herokuapp.com/test/uppercase", obj).pipe(
      map(res => {
        return res.json;
      },
        err => {
          this.handleError(err);
        })
    );
  }

  handleError(err) {
    console.error(err);
    return Observable.throw(err || "Internal server error");
  }
}

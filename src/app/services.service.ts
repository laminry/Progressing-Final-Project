import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()

export class ServicesService {

  constructor(private _http) {

  }
addNewuser(info) {
  return this._http.post('../assets/server.php', info).map(() => '');
}

}

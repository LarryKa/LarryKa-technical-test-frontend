import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { GetContacts } from '../interfaces/get-contact.interface';


@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {
  private url:string = environment.baseUrl;

  constructor(
    private _http:HttpClient
  ) { }
  
  getContacts(word:string, page:number):Observable<GetContacts>{
    return this._http.get<GetContacts>(`${this.url}/api/search/${word}?page=${page}`);
  }

}

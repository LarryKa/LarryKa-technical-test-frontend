import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { GetContacts } from '../interfaces/get-contact.interface';
import { GetContactByID } from '../interfaces/get-contact-by-id.interface';
import { AddContact } from '../interfaces/add-contact.interface';
import { DeleteContact } from '../interfaces/delete-contact.interface';
import { UopdateContact } from '../interfaces/update-contact.interface';


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

  getContactById(contact_id:number):Observable<GetContactByID>{
    return this._http.get<GetContactByID>(`${this.url}/api/contact/${contact_id}`);
  }
  
  addContact(contactData: any): Observable<AddContact> {
    return this._http.post<AddContact>(`${this.url}/api/contact`, contactData);
  }

  deleteContact(contact_id:number):Observable<DeleteContact>{
    return this._http.delete<DeleteContact>(`${this.url}/api/contact/${contact_id}`);
  }

  updateContact(contact_id:number, contactData: any):Observable<UopdateContact>{
    return this._http.put<UopdateContact>(`${this.url}/api/contact/${contact_id}`, contactData);
  }

}

import { Component } from '@angular/core';
import { ContactServiceService } from '../services/contact-service.service';
import { Contact } from '../interfaces/get-contact.interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {
  show:boolean = false;
  word:string = ' ';
  contacts:Contact[] = [];
  currentPage: number = 1;
  total!:number;

  constructor(
    public _contactServiceService:ContactServiceService,
    private _router: Router
  ){
    this.getContacts();
  }

  getContacts():void{
    this._contactServiceService.getContacts(this.word, this.currentPage).subscribe({
      next:({code, status, contacts}) => {
        if(code == 200 && status == "success"){
          this.contacts = contacts.data;
          this.total = contacts.total;          
          this.show = true;
        }
      }
    })
  }

  goToPage(page:number):void {

  }

  search(valor: string) {  
    if( valor == ""){
      valor = " ";
    }  
    this.word = valor;
    this.currentPage = 1;
    this.getContacts();
  }


  previousPage():void{
    this.currentPage = this.currentPage - 1;
    this.getContacts()
  }
  
  nextPage():void{
    this.currentPage = this.currentPage + 1;
    this.getContacts()
  }

  eliminar(contact_id:number){

  }

  verDetalle(contact_id:number){    
    this._router.navigate([`/contacts/detail/${contact_id}`]);
  }

  add(){
    this._router.navigate([`/contacts/add`]);
  }
}

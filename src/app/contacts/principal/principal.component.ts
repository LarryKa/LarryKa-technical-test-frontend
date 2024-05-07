import { Component } from '@angular/core';
import { ContactServiceService } from '../services/contact-service.service';
import { Contact } from '../interfaces/get-contact.interface';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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
    this.show = false
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
    Swal.fire({
      title: "Quieres eliminar este contacto?",      
      showCancelButton: true,
      confirmButtonText: "Eliminar",      
    }).then((result) => {      
      if (result.isConfirmed) {
        this._contactServiceService.deleteContact(contact_id).subscribe({
          next:({status, code, message}) => {
            if( status == "success" && code == 200){
              Swal.fire({
                position: "center",
                icon: "success",
                title: message,
                showConfirmButton: false,
                timer: 1500
              });
              this.getContacts();
            }
          }
        })
      }
    });    
  }

  verDetalle(contact_id:number){    
    this._router.navigate([`/contacts/detail/${contact_id}`]);
  }

  actualizar(contact_id:number){
    this._router.navigate([`/contacts/update/${contact_id}`]);
  }

  add(){
    this._router.navigate([`/contacts/add`]);
  }
}

import { Component } from '@angular/core';
import { ContactServiceService } from '../services/contact-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../interfaces/get-contact-by-id.interface';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  show:boolean = false;
  contact_id!:number;
  contact!:Contact;

  constructor(
    public _contactServiceService:ContactServiceService,
    private _router: Router,
    private route: ActivatedRoute
  ){    
    this.getContactById();
  }

  getContactById():void {
    this.contact_id = this.route.snapshot.params['contact_id'];
    
    this._contactServiceService.getContactById( this.contact_id ).subscribe({
      next:({status, code, contact}) => {
        if( status == "success" && code == 200) {
          this.contact = contact;
          this.show = true;
        }
      }
    })
  }
}

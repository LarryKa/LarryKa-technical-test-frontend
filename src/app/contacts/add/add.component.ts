import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, AbstractControl } from '@angular/forms';
import { ContactServiceService } from '../services/contact-service.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{

  constructor(
    private fb: FormBuilder,
    public _contactServiceService:ContactServiceService
  ) { }

  contactForm!: FormGroup;
  emailsArray: AbstractControl[] = [];
  phonesArray: AbstractControl[] = [];
  addressesArray: AbstractControl[] = [];
  show:boolean = false;

  ngOnInit(): void {
    
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      city: ['', Validators.required],
      emails: this.fb.array([]),
      phones: this.fb.array([]),
      addresses: this.fb.array([])
    });    

    this.emailsArray = (this.contactForm.get('emails') as FormArray).controls;
    this.phonesArray = (this.contactForm.get('phones') as FormArray).controls;
    this.addressesArray = (this.contactForm.get('addresses') as FormArray).controls;
    this.show = true;
  }


  addAddress() {
    const addresses = this.contactForm.get('addresses') as FormArray;
    addresses.push(this.fb.control('', Validators.required)); 
  }

  
  addEmail() {
    const emails = this.contactForm.get('emails') as FormArray;
    emails.push(this.fb.control('', [Validators.required, Validators.email])); 
  }

  
  addPhone() {
    const phones = this.contactForm.get('phones') as FormArray;
    phones.push(this.fb.control('', [Validators.required, Validators.pattern(/^\d{10}$/)])); 
  }

  submitForm() {
    if (this.contactForm.valid) {
      this._contactServiceService.addContact(this.contactForm.value).subscribe({
        next: ({status, code, message, contact}) => {
          if( status == 'success' && code == 200 ){
            alert(message);
            this.contactForm.reset();
          }
        }
      })
    }
  }
}

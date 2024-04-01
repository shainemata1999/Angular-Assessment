import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IContact } from '../model/contact.model';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  contact: IContact = {
    id: '',
    name: '',
    email: '',
    contact: '',
  };

  constructor(
    private contactService: ContactService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log(this.router.snapshot.params['id']);
    this.contactService
      .getContact(this.router.snapshot.params['id'])
      .subscribe((data) => {
        this.contact = data as IContact;
      });
  }
}

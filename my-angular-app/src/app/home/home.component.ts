import { Component, OnInit } from '@angular/core';
import { IContact } from '../model/contact.model';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  myContacts: IContact[] = [];
  current: IContact | null = null;
  action: string = 'add';
  currentId: string = '';

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.getContacts();
  }

  getContacts() {
    this.contactService.getContacts().subscribe((data) => {
      console.log('data!!!', data);
      this.myContacts = data as IContact[];
    });
  }

  handleSubmit(contact: IContact) {
    this.contactService.addContact(contact).subscribe((data) => {
      this.getContacts();
    });
  }

  handleEdit(data: { id: string; contact: IContact }) {
    this.current = data.contact;
    this.action = 'update';
    this.currentId = data.id;
  }

  handleUpdate(contact: IContact) {
    console.log({ contact });
    this.contactService
      .updateContact(this.currentId, contact)
      .subscribe((data) => {
        this.getContacts();
      });
    this.action = 'add';
    this.current = null;
  }

  handleDelete(id: string) {
    this.contactService.deleteContact(id).subscribe((data) => {
      this.getContacts();
    });
  }
}

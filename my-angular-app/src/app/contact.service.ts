import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IContact } from './model/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) {}

  getContacts() {
    return this.http.get('http://localhost:3001/contacts');
  }

  getContact(id: string) {
    return this.http.get('http://localhost:3001/contacts/' + id);
  }

  addContact(contact: IContact) {
    return this.http.post('http://localhost:3001/contacts', contact);
  }

  deleteContact(id: string) {
    return this.http.delete('http://localhost:3001/contacts/' + id);
  }

  updateContact(id: string, contact: IContact) {
    return this.http.put('http://localhost:3001/contacts/' + id, contact);
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IContact } from '../model/contact.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {
  @Input() contacts : IContact[] = [];
  @Output() onEditEvent = new EventEmitter<{id: string, contact: IContact}>();
  @Output() onDeleteEvent = new EventEmitter<string>();

  onEditContact(id: string, contact: IContact) {
    this.onEditEvent.emit({id, contact});
  }

  onDeleteContact(id: string) {
    this.onDeleteEvent.emit(id);
  }
}


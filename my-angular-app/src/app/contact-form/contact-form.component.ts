import { Component, EventEmitter, Input, Output, OnInit, OnChanges, SimpleChanges, } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IContact } from '../model/contact.model';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements OnInit, OnChanges {
  @Input() contact: IContact | null = null;
  @Input() action: string = 'add';
  @Output() onSubmitEvent = new EventEmitter<IContact>();
  @Output() onUpdateEvent = new EventEmitter<IContact>();

  ContactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('',[Validators.required]),
    contact: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    const form = {
      name: this.contact?.name,
      email: this.contact?.email,
      contact: this.contact?.contact,
    };
    console.log('OnInit');
    this.ContactForm.patchValue(form);
    console.log('changes');
  }

  onSubmit() {
    if (this.action == 'add') {
      this.onSubmitEvent.emit(this.ContactForm.value as IContact);
    } else {
      this.onUpdateEvent.emit(this.ContactForm.value as IContact);
    }
    this.ContactForm.reset();
  }
}

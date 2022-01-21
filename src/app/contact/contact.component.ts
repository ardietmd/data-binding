import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Contact from './contact';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {


  display= 'detail';
  contacts:Contact[] = [
    {
      id: 1,
      name: "agus",
      email: "agus@gnmail.com",
      phone: "08123456789"
    },
    {
      id: 2,
      name: "budi",
      email: "budi@gnmail.com",
      phone: "08123456789"
    },
    {
      id: 3,
      name: "charli",
      email: "charli@gnmail.com",
      phone: "08123456789"
    }
  ];
  contact!:Contact;
  index = -1;

  constructor() {
    this.contact = {id: 0, name: '', email: '', phone: ''}
   }

  ngOnInit() { }

  onMenuClick= (display: string) => {
    this.display = display;
  }

  onSelect= (contact:Contact) => {
    this.index = this.contacts.indexOf(contact);
    this.contact = {...contact};
    this.display = 'detail';
  }

  onSave = (contact:Contact) => {
    this.display = 'list';
    if (this.index > -1 ) {
      this.contacts[this.index] = contact
    } else {
      this.contacts.push(contact);
    }
  }

  onCancel = () => {
    this.display = 'list';
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Contact from '../contact';

@Component({
  selector: 'contact-detail',
  templateUrl: './detail-contact.component.html',
  styleUrls: ['./detail-contact.componen.css']
})

export class DetailContactComponent implements OnInit {
  @Input() contact:Contact = {id:0, name: '', email: '', phone: ''};
  @Output() onSave = new EventEmitter<Contact>();
  @Output() onCancel = new EventEmitter();
  constructor() { }


  ngOnInit() { }

  onSaveContact = () => {
    this.onSave.emit(this.contact);
  }

  onCancelSave = () => {
    this.onCancel.emit();
  }
}

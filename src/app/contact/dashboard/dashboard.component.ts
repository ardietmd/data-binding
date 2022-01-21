import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import Contact from '../contact';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html'
})

export class DashboardComponent implements OnInit {
  @Input() contacts: Contact[] = [];
  @Output() select = new EventEmitter<Contact>();

  constructor() { }

  ngOnInit() { }

  onSelect = (contact:Contact) => {
    console.log('selected contact', contact);
    this.select.emit(contact);
  }
}

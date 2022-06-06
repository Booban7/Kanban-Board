import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  @Input() ticket: any;
  @Output() emitText: EventEmitter<{ id: number; text: string }> = new EventEmitter();
  @Output() emitTicket: EventEmitter<{ ticket: any; increase: boolean }> = new EventEmitter();
  @Output() emitDeleteTicket: EventEmitter<number> = new EventEmitter();
  

  constructor() { }

  ngOnInit(): void {}





  onTicketEmit(ticket: any, increase: boolean) {
    this.emitTicket.emit({ ticket, increase });
  }

  onTicketDelete(id: number) {
    this.emitDeleteTicket.emit(id)
  }
}

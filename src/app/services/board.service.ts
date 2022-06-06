import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Column } from '../models/column.model';
import { Ticket } from '../models/ticket.model';
import { InitialBoard } from '../mocks/mockedTickets.model'

@Injectable({
  providedIn: 'root'
})
export class BoardService {


  private board: Column[] = InitialBoard;
  private board$ = new BehaviorSubject<Column[]>(InitialBoard);

  getBoard$() {
    return this.board$.asObservable();
  }

  addTicket(text: string, columnId: number) {
    const newTicket: Ticket = {
      id: Date.now(),
      text
    };
    
    this.board = this.board.map((column: Column) => {
      if (column.id === columnId) {
        column.list = [newTicket, ...column.list];
      }
      return column
    });

    this.board$.next([...this.board]);

  };

  deleteTicket(ticketId: number, columnId: number) {
    this.board = this.board.map((column: Column) => {
      if (column.id === columnId) {
        column.list = column.list.filter((ticket: Ticket) => ticket.id !== ticketId);
      }
      return column;
    });

    this.board$.next([...this.board]);
  };


  constructor() { }
}

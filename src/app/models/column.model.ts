  import { Ticket } from '../models/ticket.model'
   
  export interface Column { 
    id: number,
    title: string,
    list: Ticket[]
  }


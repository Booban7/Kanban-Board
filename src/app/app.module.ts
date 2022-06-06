import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';


import { BoardComponent } from './components/board/board/board.component';
import { ColumnComponent } from './components/board/column/column.component';
import { TicketComponent } from './components/board/ticket/ticket.component';
import { DialogComponent } from './components/dialog/dialog/dialog.component';
import { DialogBodyComponent } from './components/dialog/dialog-body/dialog-body.component';


@NgModule({
  declarations: [
    AppComponent,
 
    BoardComponent,
    ColumnComponent,
    TicketComponent,
    DialogComponent,
    DialogBodyComponent,
   
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatButtonModule,
    MatIconModule,
    MatNativeDateModule,
    MatMenuModule,
    MatInputModule,
    MatExpansionModule,
    MatDialogModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

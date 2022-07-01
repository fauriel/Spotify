import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import { HistorypageComponent } from './pages/historypage/historypage.component';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    HistorypageComponent,
    SearchComponent,
    
  ],
  imports: [
    CommonModule,
    HistoryRoutingModule,
    FormsModule,
    SharedModule
   
  ]
})
export class HistoryModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UtilsModule } from './utils/utils.module';

import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bugTracker/bugTracker.component';
import { BugStatsComponent } from './bugTracker/views/BugStats.component';
import { BugEditComponent } from './bugTracker/views/BugEdit.component';

import { BugOperationsService } from './bugTracker/services/bugOperations.service';
import { BugStorageService } from './bugTracker/services/bugStorage.service';


import { ClosedCountPipe } from './bugTracker/pipes/closedCount.pipe';

import { StoreModule } from '@ngrx/store';
import { appReducers } from './bugTracker/reducers/index';


@NgModule({
  declarations: [
    AppComponent,
    BugTrackerComponent,
    BugStatsComponent,
    BugEditComponent,
    ClosedCountPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UtilsModule,
    StoreModule.forRoot(appReducers),
  ],
  providers: [
  	BugOperationsService,
    BugStorageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

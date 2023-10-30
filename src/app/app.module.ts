import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbButtonModule, NbCardModule, NbListModule, NbInputModule, NbSidebarModule, NbSidebarService, NbIconModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { EncounterComponent } from './components/encounter/encounter.component';

@NgModule({
  declarations: [
    AppComponent,
    EncounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbIconModule,
    NbButtonModule,
    NbCardModule,
    NbListModule,
    NbInputModule,
    NbSidebarModule,
  ],
  providers: [
    NbSidebarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

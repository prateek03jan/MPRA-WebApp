import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { FooterComponent } from './component/footer/footer.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LeftMenuComponent } from './component/left-menu/left-menu.component';
import { NoticeComponent } from './component/notice/notice.component';
import { GalleryComponent } from './component/gallery/gallery.component';
import { EventsComponent } from './component/events/events.component';
import { ComplaintsComponent } from './component/complaints/complaints.component';
import { OldDocumentsComponent } from './component/old-documents/old-documents.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { PersonInformationCardComponent } from './component/person-information-card/person-information-card.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeComponent,
    FooterComponent,
    DashboardComponent,
    LeftMenuComponent,
    NoticeComponent,
    GalleryComponent,
    EventsComponent,
    ComplaintsComponent,
    OldDocumentsComponent,
    AboutUsComponent,
    PersonInformationCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

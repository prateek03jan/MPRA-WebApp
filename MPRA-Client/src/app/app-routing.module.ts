import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import components
import { WelcomeComponent } from './component/welcome/welcome.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { NoticeComponent } from './component/notice/notice.component';
import { GalleryComponent } from './component/gallery/gallery.component';
import { EventsComponent } from './component/events/events.component';
import { ComplaintsComponent } from './component/complaints/complaints.component';
import { OldDocumentsComponent } from './component/old-documents/old-documents.component';
import { AboutUsComponent } from './component/about-us/about-us.component';


const appRoutes: Routes = [
    {
        path: 'dashboard', component: DashboardComponent, children: [
            { path: 'notices', component: NoticeComponent },
            { path: 'gallery', component: GalleryComponent },
            { path: 'events', component: EventsComponent },
            { path: 'complaints', component: ComplaintsComponent },
            { path: 'archive', component: OldDocumentsComponent },
            { path: 'about', component: AboutUsComponent },
            { path: '', redirectTo: '/dashboard/notices', pathMatch: 'full' },
            { path: '**', redirectTo: '/dashboard/notices', pathMatch: 'full' }
        ]
    },
    { path: '**', component: WelcomeComponent },
    { path: 'home', component: WelcomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }

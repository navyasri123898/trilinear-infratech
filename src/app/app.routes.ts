import { Routes } from '@angular/router';
import { HomePage } from './pages/home.page';
import { AboutPage } from './pages/about.page';
import { ServicesPage } from './pages/services.page';
import { ProjectsPage } from './pages/projects.page';
import { ApproachPage } from './pages/approach.page';
import { ClientsPage } from './pages/clients.page';
import { ContactPage } from './pages/contact.page';

export const routes: Routes = [
  { path: '', component: HomePage, title: 'Trilinear Infratech' },
  { path: 'about', component: AboutPage, title: 'About – Trilinear Infratech' },
  { path: 'services', component: ServicesPage, title: 'Services – Trilinear Infratech' },
  { path: 'projects', component: ProjectsPage, title: 'Projects – Trilinear Infratech' },
  { path: 'approach', component: ApproachPage, title: 'Approach – Trilinear Infratech' },
  { path: 'clients', component: ClientsPage, title: 'Clients – Trilinear Infratech' },
  { path: 'contact', component: ContactPage, title: 'Contact – Trilinear Infratech' },
  { path: '**', redirectTo: '' }
];

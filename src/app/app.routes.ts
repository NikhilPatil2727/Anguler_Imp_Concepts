import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path:'login',
    component:LoginComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  //iskio last route hamesha 404 page ke liye hota hai
  {path:'**',component:PageNotFoundComponent}

];

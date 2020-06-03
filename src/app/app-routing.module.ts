import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JocuriComponent } from './jocuri/jocuri.component';
import { TarifeBarComponent } from './tarife-bar/tarife-bar.component';
import { TarifeBarUVComponent } from './tarife-bar-uv/tarife-bar-uv.component';
// import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: 'jocuri', component: JocuriComponent},
  { path: 'tarife-bar', component: TarifeBarComponent },
  { path: 'tarife-bar-uv', component: TarifeBarUVComponent },
  // { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/jocuri', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

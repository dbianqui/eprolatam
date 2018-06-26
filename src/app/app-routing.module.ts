import { NgModule } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [
        RouterModule.forRoot(routes)
  ],
  declarations: []
})

@NgModule({
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}

import { NgModule } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
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

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopheadingComponent } from './topheading/topheading.component';
import { TechnologyComponent } from './technology/technology.component';
import { BusinessComponent } from './business/business.component';

const routes: Routes = [
  { path:'', component: TopheadingComponent},
  { path:'topheading', component: TopheadingComponent},
  { path:'technology', component: TechnologyComponent},
  { path:'business', component: BusinessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

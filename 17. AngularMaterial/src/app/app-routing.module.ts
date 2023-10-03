import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/Layout/home/home.component';
import { ButtonsComponent } from './Components/Pages/buttons/buttons.component';
import { ToggleComponent } from './Components/Pages/toggle/toggle.component';

const routes: Routes = [
  {
    path : '',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path : 'home',
    component : HomeComponent
  },
  {
    path : 'buttons',
    component : ButtonsComponent
  },
  {
    path : 'toggle',
    component : ToggleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
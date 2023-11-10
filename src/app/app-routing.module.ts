import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DesembolsosComponent } from './components/desembolsos/desembolsos.component';

const routes: Routes = [
  
  { path: '', component: LoginComponent },
  {path: 'desembolsos', component: DesembolsosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './auth/login/login.component';


const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'logout', component:LoginComponent},
  {path:'home', component:HomeComponent},
  
  {path:'',pathMatch:'full',redirectTo:'login'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

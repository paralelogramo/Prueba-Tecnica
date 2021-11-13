import { NgModule } from '@angular/core';
import { ErrorComponent } from './error/error.component';
import { RouterModule, Routes, Router } from '@angular/router';
import { StorylistComponent } from './storylist/storylist.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '404'},
  { path: '404', component: ErrorComponent },
  { path: 'top', component: StorylistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router){
    this.router.errorHandler = (error: any) => {
      this.router.navigate(['404']);
    }
  }
 }

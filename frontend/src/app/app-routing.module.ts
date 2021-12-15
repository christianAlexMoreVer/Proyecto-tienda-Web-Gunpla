import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'seeker',
    loadChildren: () => import('./seeker/seeker.module').then( m => m.SeekerPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then( m => m.UserPageModule)
  },
  {
    path: 'modal-registration-success',
    loadChildren: () => import('./modal-registration-success/modal-registration-success.module').then( m => m.ModalRegistrationSuccessPageModule)
  },
  {
    path: 'modal-gunpla-view',
    loadChildren: () => import('./modal-gunpla-view/modal-gunpla-view.module').then( m => m.ModalGunplaViewPageModule)
  },
  {
    path: 'tables-admin',
    loadChildren: () => import('./tables-admin/tables-admin.module').then( m => m.TablesAdminPageModule)
  },  {
    path: 'modal-option-admin',
    loadChildren: () => import('./modal-option-admin/modal-option-admin.module').then( m => m.ModalOptionAdminPageModule)
  },
  {
    path: 'modal-add-maqueta',
    loadChildren: () => import('./modal-add-maqueta/modal-add-maqueta.module').then( m => m.ModalAddMaquetaPageModule)
  },
  {
    path: 'modal-add-admin',
    loadChildren: () => import('./modal-add-admin/modal-add-admin.module').then( m => m.ModalAddAdminPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

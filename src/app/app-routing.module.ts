import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SubCategoryComponent } from './tab1/sub-category/sub-category.component';
import { BusinessListComponent } from './tab1/business-list/business-list.component';
import { BusinessDetailsComponent } from './tab1/business-details/business-details.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { FullNewsComponent } from './tab2/full-news/full-news.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'subcategory',
    component:SubCategoryComponent
  },
  {
    path: 'businessList',
    component:BusinessListComponent
  },
  {
    path:"businessDetails",
    component:BusinessDetailsComponent
  },
  {
    path: 'userLogin',
    component:UserLoginComponent
  },
  {
    path: 'fullNews',
    component:FullNewsComponent
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

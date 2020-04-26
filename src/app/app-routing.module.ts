import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SubCategoryComponent } from './tab1/sub-category/sub-category.component';
import { BusinessListComponent } from './tab1/business-list/business-list.component';
import { BusinessDetailsComponent } from './tab1/business-details/business-details.component';

const routes: Routes = [
  {
    path: '',
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
  }
  // {
  //   path: 'businessDetails',
  //   component:BusinessDetailsComponent
  // },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

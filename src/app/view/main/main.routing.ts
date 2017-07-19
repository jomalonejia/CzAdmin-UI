import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {MainComponent} from "app/view/main";
import {AuthGuardService} from "app/theme/service/routerActive";

export const routes : Routes = [
  {
    path:'',
    /*canActivate:[AuthGuardService],*/
    component:MainComponent
  }
]

export const routing : ModuleWithProviders = RouterModule.forChild(routes);

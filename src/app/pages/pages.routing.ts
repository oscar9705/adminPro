import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { PromesasComponent } from './promesas/promesas.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const routes: Routes = [
    {
        path: 'dashboard',
        component: PagesComponent,
        children: [
            { path: '', component: DashboardComponent, data: {titulo: 'Dashboard'} },
            { path: 'progress', component: ProgressComponent, data: {titulo: 'Dashboard'} },
            { path: 'grafica1', component: Grafica1Component, data: {titulo: 'graficas'} },
            { path: 'account-settings', component: AccountSettingsComponent, data: {titulo: 'tema'} },
            { path: 'promesas', component: PromesasComponent, data: {titulo: 'promesas'} },
            { path: 'rxjs', component: RxjsComponent, data: {titulo: 'Rxjs'} },
        ]
    },
];
@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class PagesRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';


//Module Services
import { DigitDataService } from './services/digit.service';
import { MultiplierService } from './services/multiplier.service';
import { ToleranceService } from './services/tolerance.service';
import { ResistanceCalculator } from './components/home/resistance-calculator';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent
       
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ],
    providers: [
        DigitDataService,
        MultiplierService,
        ToleranceService,
        ResistanceCalculator
    ]
})
export class AppModuleShared {
}

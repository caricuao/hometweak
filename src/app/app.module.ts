import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule, MatCheckboxModule, 
        MatToolbarModule, MatIconModule, 
        MatCardModule, MatGridListModule,
        MatSidenavModule } from '@angular/material';
        
import { HeaderComponent } from './components/header/header.component';
import { RightSidenavComponent } from './components/right-sidenav/right-sidenav.component';
import { LeftSidenavComponent } from './components/left-sidenav/left-sidenav.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { TosComponent } from './components/tos/tos.component';



    const routes: Routes = [
        {path: '', component: LandingPageComponent},
        {path: 'tos', component: TosComponent},
        
    ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RightSidenavComponent,
    LeftSidenavComponent,
    SidenavComponent,
    LandingPageComponent,
    TosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    FormsModule,
    MatButtonModule, MatCheckboxModule, 
    MatToolbarModule, MatIconModule, 
    MatCardModule, MatGridListModule,
    MatSidenavModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

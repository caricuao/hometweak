import { Component, ViewChild, OnInit } from '@angular/core';
import { SidenavService } from './services/sidenav.service';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  implements OnInit {
    title = 'HomeTweak.me';

    @ViewChild('sidenav') public sidenav: MatSidenav;

    constructor(private sidenavService: SidenavService) {	}

    ngOnInit(): void {
        this.sidenavService.setSidenav(this.sidenav);
    }
}
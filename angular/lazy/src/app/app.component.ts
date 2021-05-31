import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showHeader: boolean = true;
  subscriptions: Subscription;
  constructor(private router: Router, activatedRoute: ActivatedRoute) {
    this.subscriptions = router.events.subscribe((event) => {
      //3 instacias: NavigationStart, NavigationError, NavigationEnd

      /*if (event instanceof NavigationEnd) {
        const data = activatedRoute.snapshot.firstChild.data;
        console.log(activatedRoute.firstChild.snapshot.data);
        this.showHeader = data.showHeader;
      }*/
    })
  }
}

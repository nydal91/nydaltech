import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

    items: FirebaseObjectObservable<any>;
    constructor(af: AngularFire) {
	        this.items = af.database.object('/items');
		 
    
    }



 

  ngOnInit() {
  }

}

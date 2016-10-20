import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
///
import { ReactiveFormsModule } from '@angular/forms';

////
import { AngularFireModule } from 'angularfire2';

//////
import {MdToolbarModule} from '@angular2-material/toolbar/toolbar';
import {MdSidenavModule} from '@angular2-material/sidenav/sidenav';
import {MdListModule} from '@angular2-material/list/list';
import {MdButtonModule} from '@angular2-material/button/button';
import {MdMenuModule} from '@angular2-material/menu/menu';
import {MdIconModule} from '@angular2-material/icon/icon';
import {MdCardModule} from '@angular2-material/card/card';
import {MdTabsModule} from '@angular2-material/tabs/tabs';
import {MdInputModule} from '@angular2-material/input/input';  


import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { AboutComponent } from './about/about.component';

import { routing } from './app.routing';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';

// Must export the config
export const firebaseConfig = {
	  
 apiKey: 
     authDomain: 
         databaseURL: 
	     storageBucket: 

};




@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    YoutubeComponent,
    AboutComponent,
    FooterComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
ReactiveFormsModule,
 MdSidenavModule.forRoot(),
      MdListModule.forRoot(),
      MdButtonModule.forRoot(),
    MdToolbarModule.forRoot(),
 MdInputModule.forRoot(),
  MdCardModule.forRoot(),
          MdTabsModule.forRoot(),
 MdIconModule.forRoot(),
    MdMenuModule.forRoot(), 
 AngularFireModule.initializeApp(firebaseConfig),   
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

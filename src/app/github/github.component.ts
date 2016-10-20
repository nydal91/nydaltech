import { Component, OnInit } from '@angular/core';
import {GithubService} from '../github.service';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2'; 


@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css'],
  providers: [GithubService]
})
export class GithubComponent implements OnInit {

	      errorMessage: string;

user:any;      
repos:any;
index: FirebaseObjectObservable<any>; 

  constructor( private _githubService: GithubService, af: AngularFire) {
 
 this.index = af.database.object('/index'); 
  }





  ngOnInit() { this.getUser(), this.getRepos();} 
  

getUser(){
this._githubService.getUser().subscribe(user => 
//console.log(user);	
this.user = user,
error => this.errorMessage = <any>error
				       );}


getRepos(){
this._githubService.getRepos().subscribe(repos => 
					 
//console.log(repos);
this.repos = repos, error => this.errorMessage =
<any>error
					 );}




}

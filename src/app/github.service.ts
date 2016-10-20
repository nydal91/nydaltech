import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map'; 



@Injectable()
export class GithubService {

   constructor(private _http:Http) {
	    console.log('Github Service Init...');
	      }




	        getUser(){
			return  this._http.get('https://api.github.com/users/nydal91')
			.map(res => res.json());
			  }


			    getRepos(){
				    	  return  this._http.get('https://api.github.com/users/nydal91/repos')
					  	  .map(res => res.json());
						  	    }




}

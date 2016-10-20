import { Injectable } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Ytube} from './video';
import { Observable } from 'rxjs';
import { YoutubeComponent } from './youtube/youtube.component';


@Injectable()
export class YoutubeService {

  
   constructor (private http: Http){}

   	        private ytubeURL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCawWymaUsPb5PW8DuGKPrKQ&maxResults=50&order=date&key=AIzaSyCeHtt_GzJwkjRwWutAbhEDxCan0Ws8yME';
				    getVideos() {
					    			            return this.http.get(this.ytubeURL)
									    				                .map(res => <Ytube[]> res.json().items)
																					            .do(data => console.log(data))
																						    							                .catch(this.errorHandler);
																																								    }
																																								    									        private errorHandler (error: Response) {
																																																														        console.error(error);
																																																																											        return Observable.throw(error.json().error || 'Server error');
																																																																																									    }



}

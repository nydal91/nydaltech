import { Component, OnInit, Injectable } from '@angular/core';
import {YoutubeService} from '../youtube.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import {Ytube} from '../video';


@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css'],
providers:[YoutubeService]
})
export class YoutubeComponent implements OnInit {




		      errorMessage: string;
		      	          videos: Ytube[];
				  		     

				  	     constructor(private _youtubeService: YoutubeService, private sanitizer: DomSanitizer) {
						     		       

						     			   }



									   																			 
									    
									   							   
									   							
									   							
									   															  ngOnInit() { this.getVideos();}

																								  							           getVideos() {
																																	   									           this._youtubeService.getVideos()
																																											   										               .subscribe(
																																																							       												                       videos => this.videos = videos,
																																																																						       															                       error => this.errorMessage = <any>error
																																																																					       														                   );

																																																																																					   																       }



}

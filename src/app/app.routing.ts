
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GithubComponent } from './github/github.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { AboutComponent } from './about/about.component';





const appRoutes: Routes = [



		  {
			  		      path: 'videos',
					      		          component: YoutubeComponent
								  			    },



											    			    {
															    				        path: '',
																									    redirectTo: '/hi',
																									    					        pathMatch: 'full'
																																					  },


																																					  						  {
																																																																																										    			    
																																																																							    			    path: 'about',
																																																																										    			    component: AboutComponent
																																																																													    			    
																																																																													    			    },
																																																																										{path: 'hi', 
																																																																											component: GithubComponent}
		     
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

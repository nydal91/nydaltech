import { Component, OnInit } from '@angular/core';
import {ValidatorFn,AbstractControl,FormBuilder,FormGroup,Validators, ReactiveFormsModule,FormControl} from '@angular/forms';
import { ContactService } from '../form.service';
import {Router, ActivatedRoute} from "@angular/router";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import {Contact} from "../contact";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
	providers: [ContactService],
  
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
 private isNew = true;
   taskForm:FormGroup;
     key=null;

       contact:any[];
         constructor(private  fb:FormBuilder
		         ,private contactSrv:ContactService
		     ,private route:ActivatedRoute
	         , private  router:Router) {
	     this.taskForm = fb.group({
		           "name" : ["",Validators.required],
			         "email" :  ["",Validators.required],
				       "subject" :  ["",Validators.required],
				             "message" :  ["",Validators.required]
					         });
						   }

						     ngOnInit() {



							       }

							         submitForm(){
									     const client = new Contact(this.taskForm.value.name,this.taskForm.value.email,this.taskForm.value.subject, this.taskForm.value.message);


									           this.contactSrv.storeContactForm(client);


 alert('Thanks for messages'); this.taskForm.reset();
										     }

										       private navigateBack(){
											           this.router.navigate(['../']);

												     }

												       onCancel(){
													           this.navigateBack();
														     }



}

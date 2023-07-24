import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contactschema } from 'src/model/contact-schema';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  allGroups: any = []
  contact: Contactschema = {}
  constructor(private editRoute: ActivatedRoute, private api: ApiService, private navigate:Router) { }

  ngOnInit(): void {
    //get parameter from url
    this.editRoute.params.subscribe({
      next: (parameter: any) => {
        console.log(parameter);
        //destructure the parameter
        const { id } = parameter
        console.log(id);
        //make a call to service to get contact
        this.api.ViewContact(id).subscribe({
          next: (response: any) => {
            console.log(response);
            this.contact = response

          }
        })
        //make call to get all groups
        this.api.getGroups().subscribe({
          next: (response: any) => {
            this.allGroups = response
          }
        })


      }
    })


  }
updatecontact(id:any,contact:any){
  //make a call to service
  this.api.editcontact(id,contact).subscribe({
    next:(response:any)=>{
      alert("successfully updated")
      this.navigate.navigateByUrl("")

    }
  })
}


}
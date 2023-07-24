import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-all-contact',
  templateUrl: './all-contact.component.html',
  styleUrls: ['./all-contact.component.css']
})
export class AllContactComponent implements OnInit {
  searchkey:string=""
  allcontact: any = []

  isLoading:boolean=true
  errorMsg: any;

  //array.length=zero

  constructor(private api:ApiService){}

  //ngOnInit()-for view content of compnt while load page(before clicking any button)

  ngOnInit(): void {
    this.getAllcontact()
  }

  getAllcontact(){
    this.api.getAllContact().subscribe({


      next: (response: any) => {
        //console.log(response);
        setTimeout(() => {
          this.allcontact=response
        this.isLoading=false
          
        },2000);
        
      },
      error: (err: any) => {
        console.log(err.message);
        
        this.errorMsg=err.message
        this,this.isLoading=false
        
      }

    })
  }
  deleteContact(id:any){
    this.api.deleteContact(id).subscribe({
     
      next: (response: any) => {
        this.getAllcontact();

      }
    })
  }
}

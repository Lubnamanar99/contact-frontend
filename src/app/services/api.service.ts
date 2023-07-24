import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Contactschema } from 'src/model/contact-schema';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  BASE_URL= 'http://localhost:3000'

  //service constructor

  constructor(private http: HttpClient) { }

  //function for error handling
handleError(error:HttpErrorResponse){
  let errorMsg:string=''

  if(error.error){

    //client error

    errorMsg=`Error:${error.message}`

  }
  else{
    errorMsg:`status:${error.status}\n
    Error:${error.message}`
    
  }
  return throwError(()=>errorMsg)
}
  //api call

  //create a function in apiservice.ts

  //get all contact api
  getAllContact(){

    //url:http://localhost:3000/contacts    req:get

    //this.http.get('http://localhost:3000/contacts')

    return this.http.get(`${this.BASE_URL}/contacts`)


    

  }

  //view component

  ViewContact(id:any){

    //api call url:http://localhost:4200/view-contact/:ca1  req:get

    return this.http.get(`${this.BASE_URL}/contacts/${id}`)

  }

  //api call for getting perticular grp

  getGroup(id:any){

    return this.http.get(`${this.BASE_URL}/groups/${id}`)

  }
//api call to get groups
  getGroups(){
    return this.http.get(`${this.BASE_URL}/groups`)
  }
   
  //POST API
  //to add contact api- POST

  addContact(contact:Contactschema){

    return this.http.post(`${this.BASE_URL}/contacts`,contact)


  }

//
  deleteContact(id:any){
    return this.http.delete(`${this.BASE_URL}/contacts/${id}`)
  }

  //edit contact
  editcontact(id:any,body:Contactschema){
    return this.http.put(`${this.BASE_URL}/contacts/${id}`,body)
  }

}





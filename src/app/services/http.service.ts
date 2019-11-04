import { Injectable } from '@angular/core';

import { HttpClient , HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private username:string;
  private clientid = '6bf5b6e408f4e23c52a9';
  private clientsecret = '3efb5f9c2f4c0c4e5816db30f12e4eb640c1d41d';

  constructor(private http:HttpClient) {
    console.log("Service is now ready.");
    this.username = 'margaret254';
   }

   getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret);
   }

   getProfileRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret);

   }

   updateProfile(username:string ){
    this.username = username;
   }
}

import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  profile: any;
  repos: any;

  constructor(private httpService:HttpService){
    this.httpService.getProfileInfo().subscribe(profile => this.profile = profile);

    this.httpService.getProfileRepos().subscribe(repos => this.repos = repos);
  }

  ngOnInit() {

  }

}

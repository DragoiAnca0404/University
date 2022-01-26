import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  username:any;
  users:any;

  constructor(
    public authService: AuthService
  ) { 
    const params = {
      username:localStorage.getItem('username'),
    };


    this.authService.displayDetails(params).subscribe(data=>{
    console.log("data",data);
    this.users=data
  }) }

  ngOnInit(): void {
    this.username = localStorage.getItem('username');
  }

}

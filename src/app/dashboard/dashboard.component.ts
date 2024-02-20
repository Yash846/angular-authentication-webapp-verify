import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private userService: UserService,
  ) { }
  userData: any; 
  statsData: any;
  loading = false;
  header = [
    {
      config: 'ProjectId'
    },
    {
      config: 'Project Name'
    },
    {
      config: 'Project Desc'
    },
    {
      config: 'Project owner'
    }
  ]

  async ngOnInit() {
    let token = localStorage.getItem('login_access_token') || '';
    let id = ''
    const response = await this.userService.getUserData(token);
    this.userData = response.data

    // const res = await this.userService.getStats();
    // console.log('res', res)

    this.userService.getStats().subscribe(
      (data: any)=>{
        this.statsData = data
      },
      (error)=>{
        this.loading = false;
        alert(error.error.errMessage);
      }
    )
  }

}

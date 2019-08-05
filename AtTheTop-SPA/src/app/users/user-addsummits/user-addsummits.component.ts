import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { Summit } from 'src/app/_models/summit';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-user-addsummits',
  templateUrl: './user-addsummits.component.html',
  styleUrls: ['./user-addsummits.component.scss']
})
export class UserAddsummitsComponent implements OnInit {
  user: User;
  summit: Summit;

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  addSummit() {
    console.log('szczyt dodany!');
  }

}

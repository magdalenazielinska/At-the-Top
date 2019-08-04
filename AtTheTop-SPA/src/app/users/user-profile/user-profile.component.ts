import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { Summit } from 'src/app/_models/summit';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  user: User;
  summits: Summit[];

  constructor(private route: ActivatedRoute, private authService: AuthService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data['user'];
    });

    this.summits = this.getSummits();
    console.log(this.summits);
  }

  checkProfileOwner() {
    if (+this.authService.decodedToken.nameid === this.user.id) {
      return true;
    } else {
      return false;
    }
  }

  getSummits() {
    const summitsList = [];
    for (let i = 0; i < this.user.summits.length; i++) {
      summitsList.push(this.user.summits[i]);
    }
    return summitsList;
  }

}

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
  minAlt: number[];

  constructor(private route: ActivatedRoute, private authService: AuthService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data['user'];
    });

    this.summits = this.getSummits();
    this.minAlt = [8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000, 0];
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

  checkAltitude(min: number, max: number) {
    const summitsAltitudes = [];
    let wantedAltitudes = [];

    this.summits.map(summit => {
      summitsAltitudes.push(summit.altitude);
    });
    wantedAltitudes = summitsAltitudes.filter(el => {
      return el >= min && el < max;
    });

    if (wantedAltitudes.length > 0) {
      return true;
    }
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})
export class TeamComponent implements OnInit {
  team = [
    {
      image: '../assets/images/team/t1.jpg',
      name: 'Micah Jackson',
      designation: 'Title',
      comment:
        'Short blurb',
      followOn: [
        'fab fa-facebook-f',
        'fab fa-twitter',
        'fab fa-instagram',
      ],
    },
    {
      image: '../assets/images/team/t2.jpg',
      name: 'Tye Jackson',
      designation: 'Title',
      comment:
        'Short blurb',
      followOn: [
        'fab fa-facebook-f',
        'fab fa-twitter',
        'fab fa-instagram',
      ],
    },

  ];

  constructor() {}

  ngOnInit(): void {}
}

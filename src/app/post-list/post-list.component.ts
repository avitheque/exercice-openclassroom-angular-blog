import {Component, Input, OnInit} from '@angular/core';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() postList: Post[];

  constructor() {
    // Initialisation de la collection des Posts
    this.postList = [
      // Post n°1
      new Post(
        'Mon premier post',
        'Lorem ipsum dolor sit amet, ex nam eirmod appetere, ex pri purto sonet temporibus.',
        '2020-01-05 13:00:00',
        1
      ),
      // Post n°2
      new Post(
        'Mon deuxième post',
        'Lorem ipsum dolor sit amet, ex nam eirmod appetere, ex pri purto sonet temporibus.',
        '2020-01-05 13:30:00',
        -1
      ),
      // Post n°4
      new Post(
        'Encore un post',
        'Lorem ipsum dolor sit amet, ex nam eirmod appetere, ex pri purto sonet temporibus.',
        '2020-01-05 14:00:00',
        0
      )
    ];
  }

  ngOnInit() {
  }

}

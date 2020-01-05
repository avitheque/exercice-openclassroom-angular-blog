import {Component, Input, OnInit} from '@angular/core';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;
  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postCreatedAt: string;   // Manipulation de la date au format ISO
  @Input() postLoveIts: number;

  constructor() { }

  ngOnInit() {
  }

  /**
   * @brief Récupère le titre du Post
   * @return string
   */
  getTitle() {
    return this.postTitle;
  }

  /**
   * @brief Récupère le contenu du Post
   * @return string
   */
  getContent() {
    return this.postContent;
  }

  /**
   * @brief   Récupère la date de création du Post.
   * @remark  Convertion de la chaîne de caractères en objet Date
   * @return  date
   */
  getDateCreation() {
    // Le paramètre doit être une chaîne de caractères au format ISO [Y-m-d H:i:s] ou être un Timestamp
    return new Date(this.postCreatedAt);
  }

  /**
   * @brief Test si le poste est aimé.
   * @return boolean
   */
  isLiked() {
    return this.postLoveIts > 0;
  }

  /**
   * @brief Test si le poste est haï.
   * @return boolean
   */
  isDisliked() {
    return this.postLoveIts < 0;
  }

  /**
   * @brief Coloration du Post selon le nombre de LoveIt.
   * @param boolean bText : si la couleur est relative au texte, sinon à l'arrière plan
   * @return string
   */
  getColor(bText = false) {
    let color = bText ? 'black' : 'white';
    if (this.isLiked()) {
      color = 'green';
    } else if (this.isDisliked()) {
      color = 'red';
    }
    return color;
  }

  /**
   * @brief Ajout de LoveIt (+1)
   * @return void
   */
  addLoveIt() {
    ++this.postLoveIts;
  }

  /**
   * @brief Retrait de LoveIt (-1)
   * @return void
   */
  removeLoveIt() {
    --this.postLoveIts;
  }

}

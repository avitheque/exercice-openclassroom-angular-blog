/**
 * @brief Modèle des Posts issus de la base de données (Mock)
 */
export class Post {

  title: string;
  content: string;
  loveIts: number;
  createdAt: string;            // Manipulation de la date au format [Y-m-d H:i:s]

  /**
   * @brief Constructeur du Post
   * @param string  title       : titre du Post
   * @param string  content     : texte du Post
   * @param string  createdAt   : (optionnel) date de création au format [Y-m-d H:i:s] (supposé enregistrée en base de donnée)
   * @param number  loveIts     : (optionnel) nombre de 'Likes'
   */
  constructor(title: string,  content: string, createdAt?: string,  loveIts?: number) {
    this.title      = title;
    this.content    = content;
    this.loveIts    = loveIts;
    this.createdAt  = createdAt;
  }
}

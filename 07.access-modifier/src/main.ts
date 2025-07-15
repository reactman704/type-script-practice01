
class Post {
  constructor( 
    protected id:number, 
    protected title: string
  ){ }

  getPost() {
    return `postId ${this.id}, posttitle: ${this.title}`
  }
}


class PostB extends Post {
  getPost2():number {
    return this.id;
  }
}

const post: Post = new Post(1,"title 1");


console.log(post.title);
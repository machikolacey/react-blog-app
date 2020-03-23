import React from 'react';
import { getPosts }  from '../services/postsService';
import { getCommentsbyPostId, saveComment } from '../services/commentsService';
import Joi from "joi-browser";
import Form from "./common/form";
import Moment from 'react-moment';
import DownArrow from '../images/arrow-down.jpg';
import "../App.css";
import "../ViewPost.css";


class viewPost extends Form {
state = {
    post:{},
    comments:[],
   data: {
    name: "",
    comment: ""
  },
  errors: {}
};

schema = {
  name: Joi.string()
    .required()
    .label("Name"),
  comment: Joi.string()
    .required()
    .label("Comment")
};

populatePost() {
    try {
      const postId = this.props.match.params.id;
      let post = getPosts().filter(item => item.id == postId);
      post = post[0];
      this.setState({post:post});
      
      const comments = getCommentsbyPostId(post.id);
      this.setState({comments:comments});

    } catch (ex) {
       if (ex.response && ex.response.status === 404)
         console.log(ex.response);
    }
  }
 
  


componentDidMount() {
  
    this.populatePost();

}
doSubmit =  () => {
  let comment = this.state.data;
 const  postId = this.props.match.params.id;
  console.log(this.state.post);
  //return saveCommentsbyPostId(comment);
  comment.postId = postId;
  console.log(comment);
  const comments = saveComment(comment).filter(item => item.postId == postId);
 this.setState({comments:comments}); 
 this.state.post.comments++;
 //console.log(this.state.post);
 // this.props.history.push("/movies");
};

    
render() { 
  const{ post } = this.state;
  const date = new Date();
let isComments = true;
if(post.comments==0){isComments = false;}

  return ( 
  <React.Fragment>
    <img src={post.image} 
    srcSet={`${post.smallImage} 300w, 
    ${post.smallImage} 768w, 
    ${post.largeImage} 1280w`} 
    onLoad={this.onLoad} />
   <h1>{post.title}</h1>
   <p>{post.body}</p>
  {isComments && 
      <div  isComments={true}  className="list-group list-comment">
      <p>Comments  <img src={DownArrow} alt=""/></p>
      { this.state.comments.map(comment => (
    <div key={comment.name} className="comment" >  
    <p>by {comment.name} <Moment fromNow>{comment.updated}</Moment></p>
    <p>{comment.comment}</p> 

    </div>
      ))}
  </div>
  }
  

    <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Name")}
          {this.renderTextarea("comment", "Comment")}
          {this.renderButton("Post")}
          {this.renderHidden("postId", "", post.id)}
          {this.renderHidden("updated", "", date)}
        </form>

  </React.Fragment>
     );
    }
}
 
export default viewPost;
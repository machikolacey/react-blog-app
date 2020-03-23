import React, { Component } from "react";
import { getCategories } from "../services/categoryService";
import { Link } from "react-router-dom";
import { getPosts }  from '../services/postsService';
import SearchBox from '../components/common/searchBox';
import Moment from 'react-moment';
import "../App.css";


class Home extends Component {
  state = {
    posts: [],
    categories : [],
    keywords : [],
    searchQuery: "",
    selectedCategory: null,
    imageSrc: ""
  };

handleImage = image => {
   return require(image);
};

componentDidMount() {
  const posts = [...getPosts()];
  this.setState({posts});
  const categories = [{ _id: "", name: "All Categories" }, ...getCategories()];
  this.setState({categories});

}
handleSearch = query => {
  this.setState({searchQuery:query, selectedCategory:null});
  this.loadPageData();
}

handleCategorySelect = category => {
  const category_id = category.target.value;
  const{ selectedCategory } = this.state;
  const posts = [...getPosts()];
  let filtered = [...getPosts()];

  this.setState({searchQuery:"", selectedCategory:category_id});
  console.log(selectedCategory);

    if(category_id && category_id != "All Categories") {
        filtered = posts.filter(
          p => p.category_id == category_id 
        );
      }else{
        filtered = [...getPosts()];
    }

  this.setState({posts:filtered});
}

loadPageData(){
  const{searchQuery} = this.state;
  const posts = [...getPosts()];
  let filtered = [...getPosts()];

  if(searchQuery){
    filtered = posts.filter(
      p => p.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }
  this.setState({posts:filtered});
}

  render() {

    const { searchQuery, selectedCategory } = this.state;
    const date = new Date();
    console.log(date);
    return (
      <React.Fragment>
        <div class="row">
        <div class="col-sm-6">
        <div class="form-group">
            <select  class="form-control" value={selectedCategory}
            onChange={this.handleCategorySelect}>
            {
                this.state.categories.map(function (item) {
                    return <option value={item.id } >{item.name}</option>;
                })
            }
            </select>
          </div>
        </div>
        <div class="col-sm-6">
        <SearchBox value={searchQuery} onChange={this.handleSearch} />
        </div>
        </div>
        <div class="row">
          {this.state.posts.map(post => (
                <div class="col-lg-4 col-sm-6 col-xs-12" key={post.id}> 
                  <div class="post-wrapper">
                  <Link to={`/viewpost/${post.id}`}>
                    <img src={post.image} 
                        srcSet={`${post.smallImage} 300w, 
                        ${post.smallImage} 768w, 
                        ${post.middleImage} 1280w`} 
                        onLoad={this.onLoad} />
                    <h4>{post.title}</h4>
                    </Link>   
                    <ul class='ul-inline'><li>Posted 
                      <Moment fromNow>{post.updated}</Moment></li>
                      <li class="text-right">{post.comments} comments</li>
                    </ul>
                  </div>
                </div>
              ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
export const posts = [
    {
      "id": 1,
      "userId": 1,
        "category_id":4,
        "image":require("../images/_resized_768.jpg"),
        "largeImage":require("../images/_resized_1280.jpg"),
        "middleImage":require("../images/_resized_768.jpg"),
        "smallImage":require("../images/_resized_300.jpg"),        
        "updated" : "Mon Mar 24 2020 09:01:51 GMT+0000 (Greenwich Mean Time)",
        "title": "Natural history TV 'boosts species awareness",
        "comments": 0,
       "body":
        "Programmes, such as Sir David Attenborough's Planet Earth II series, boost people's awareness and interest in species, a study has suggested. Despite lacking an overt conservation message, the programmes stimulated people to find out more about the species featured in the broadcasts."
    },
    {
      "id": 2,
      "userId": 1,
      "category_id":3,
      "image":require("../images/_resized_768.jpg"),
      "largeImage":require("../images/_resized_1280.jpg"),
      "middleImage":require("../images/_resized_768.jpg"),
      "smallImage":require("../images/_resized_300.jpg"), 
      "updated" : "Mon Mar 15 2020 09:01:51 GMT+0000 (Greenwich Mean Time)",
      "title": "Climate change: Will planting millions of?",
      "comments": 0,
      "body": "The UK government has pledged to plant millions a year while other countries have schemes running into billions. But are these grand ambitions achievable? How much carbon dioxide do trees really pull in from the atmosphere? And what happens to a forest, planted amid a fanfare, over the following decades?"
    },
    {
      "id": 3,
      "userId": 1,
      "category_id":2,
      "image":require("../images/_resized_768.jpg"),
      "largeImage":require("../images/_resized_1280.jpg"),
      "middleImage":require("../images/_resized_768.jpg"),
      "smallImage":require("../images/_resized_300.jpg"), 
      "updated" : "Mon Mar 05 2020 09:01:51 GMT+0000 (Greenwich Mean Time)",
      "title": "Ancient tsunami may have struck Falkland Islands",
      "comments": 0,
      "body": "The Falkland Islands may at some point in the future face a major tsunami. Scientists have found evidence of ancient slope failures on the seafloor to the south of the British Overseas Territory."
    },
    {
      "id": 4,
      "userId": 1,
      "category_id":1,
      "image":require("../images/_resized_768.jpg"),
      "largeImage":require("../images/_resized_1280.jpg"),
      "middleImage":require("../images/_resized_768.jpg"),
      "smallImage":require("../images/_resized_300.jpg"), 
      "updated" : "Mon Mar 10 2020 09:01:51 GMT+0000 (Greenwich Mean Time)",
      "title": "The Cashmere crisis in the Himalayan ice deserte",
      "comments": 1,
      "body": "Andrew Newey spent two conditions in Ladakh, in Indian-administered Kashmir. To accompany his photo series, Newey also learned about the history of Pashmina wool production, and the threats to the nomadic shepherds' way of life and traditions."
    },
    {
      "id": 5,
      "userId": 1,
      "category_id":4,
      "image":require("../images/_resized_768.jpg"),
      "largeImage":require("../images/_resized_1280.jpg"),
      "middleImage":require("../images/_resized_768.jpg"),
      "smallImage":require("../images/_resized_300.jpg"), 
      "updated" : "Mon Mar 03 2020 09:01:51 GMT+0000 (Greenwich Mean Time)",
      "allcomments":[{'name':'kim', 'comment': 'this is my comment'},{'name':'kim', 'comment': 'this is my comment'} ],
      "title": "Game-playing robot admits mistakes, plus other news",
      "comments": 2,
      "body": "The UK government rules Chinese firm Huawei will be allowed to be used in non-sensitive areas of the country’s 5G mobile network Yale University develops a game-playing robot capable of admitting its mistakes to help humans communicate better"
    },
    {
      "id": 6,
      "userId": 1,
      "category_id":3,
      "image":require("../images/_resized_768.jpg"),
      "largeImage":require("../images/_resized_1280.jpg"),
      "middleImage":require("../images/_resized_768.jpg"),
      "smallImage":require("../images/_resized_300.jpg"), 
      "updated" : "Mon Mar 03 2020 09:01:51 GMT+0000 (Greenwich Mean Time)",
      "title": "Reducing brain damage in losing the thrills",
      "comments": 0,
      "body": "When Olympic gold medallist Shona McCallin was hit on the side of her head by a seemingly innocuous shoulder challenge, she suffered what was originally thought to be a concussion."
    }
  ];
  
  export function getKeywords() {
    return posts.filter(g => g);
  }
  
  export function getPosts() {
    return posts;
  }
  
  export function getPost(id) {
    return posts.find(m => m._id === id);
  }
  
export function savePost(post,comment) {
 
// let post = this.getPost(id);
//post['comments'].push(comment);
console.log(post.comments);
//post.comments.push(comment);
console.log(post);
return post;
}




  

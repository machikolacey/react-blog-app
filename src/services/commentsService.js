export const comments = [
    {
        "postId": 5,
        "name" : "George",
        "comment" : "This is my comment",
        "updated" : "Mon Mar 20 2020 11:55:46 GMT+0000 (Greenwich Mean Time)"  
    },
    {
           "postId" : 5,
          "name" : "Linda",
          "comment" : "This is my comment 2",
          "updated" : "Mon Mar 21 2020 11:55:46 GMT+0000 (Greenwich Mean Time)"      
    },
    {
           "postId" : 4,
          "name" : "me",
          "comment" : "This is my comment 3" ,
          "updated" : "Mon Mar 22 2020 11:55:46 GMT+0000 (Greenwich Mean Time)"     
    }
  ];
  

  export function getCommentsbyPostId(postId) {
    return comments.filter(m => m.postId === postId);
  }
  
export function saveComment(comment) {
 console.log('saveComments');
 comments.push(comment);
 console.log(comments);
return comments;

}


export function countComments(postId){
  return comments.filter(m => m.postId === postId).length();
}


  

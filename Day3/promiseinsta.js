async function CommentCode(){
    return new Promise((CommentPosted)=>{
        CommentPosted("Comment has Posted")
    })
}
async function likeCode(){
    return new Promise((Like)=>{
        Like("Liked the Post Successfully")
    })
}
async function createPost(){
    var post = new Promise((cPost)=>{
        cPost("Post Created Successfully")
    })
    var[posts, comments, likes] = await Promise.all([post, CommentCode(), likeCode()])
    console.log(posts);
    console.log(comments);
    console.log(likes);
}
createPost()
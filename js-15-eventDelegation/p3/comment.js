// Initially the textbox and reply is visible
// Whenever we click on "Comment"
// Check if there is any comment
// if there is, add a comment element to the CommentsContainer
// That element should contain a couple of things
// Comment Text
// Reply Button
// Replycontainer
// Add an event listener to the "Reply" button of each comment
// Whenever I click on reply
// Check if anything is present in reply textarea
// Add a reply element in the replyContainer

const submitButton=document.getElementById("submitComment")
const commentInput=document.getElementById("commentInput")
const commentsContainer=document.getElementById("commentsContainer")

submitButton.addEventListener('click',function(){
    const commentText=(commentInput.value).trim()
    if(commentText){
        addComment(commentInput.value)
        commentInput.value=""
    }
})
function addComment(text){
    const commentElement=document.createElement("div")
    commentElement.setAttribute("class","comment")
    commentElement.innerHTML=`
        <p>${text}</p>
        <button class="replyBtn" type="button">Reply</button>
        <div class="repliesContainer">
            
        </div>
        <textarea class="replyInput" value="initial value" placeholder="write a reply..."></textarea>
    `
    addReply(commentElement)

    commentsContainer.appendChild(commentElement)
}

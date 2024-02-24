document.addEventListener('DOMContentLoaded', function () {
    var likeBtn = document.getElementById('likeBtn');
    var likeCount = document.getElementById('likeCount');
    var liketext = document.getElementById('like-text');

    var numberOfLikes = 0;

    if(numberOfLikes === 0){
        likeCount.textContent = "Be the first one to like this!";
    }

    likeBtn.addEventListener('click', function () {
        numberOfLikes++;
        updateLikeCount();
    });

    function updateLikeCount() {
        likeCount.textContent = numberOfLikes === 1 ? '1 person likes this' : numberOfLikes + ' people like this!';
        liketext.textContent = 'Liked';
    }
});



// Get reference to the comment input field and the comment button
const commentInput = document.getElementById('commentInput');
const commentButton = document.getElementById('commentBtn');

// Get reference to the comment area
const commentArea = document.getElementById('commentsList');

// Add event listener to the comment button
commentButton.addEventListener('click', function(event) {
    event.preventDefault();
    // Get the value of the comment input
    const commentText = commentInput.value.trim();

    // If the comment input is not empty
    if (commentText) {
        // Create a new paragraph element for the comment
        const newComment = document.createElement('p');
        newComment.textContent = commentText;

        // Insert the new comment at the beginning of the comment area
        commentArea.prepend(newComment);

        // Clear the comment input field
        commentInput.value = '';
    }
});

//This is for the edit mode on and off
document.addEventListener('DOMContentLoaded', function () {
    var postTitle = document.querySelector('.title');
    var postText = document.querySelector('.post-text');
    var editBtn = document.getElementById('editBtn');

    editBtn.addEventListener('click', function () {
        if (editBtn.textContent.includes('Edit')) {
            // Enter Edit Mode
            postTitle.contentEditable = true;
            postText.contentEditable = true;
            postTitle.style.border = '2px solid #ff69b4';
            postText.style.border = '2px solid #ff69b4';
            editBtn.innerHTML = 'Save <i class="fa-solid fa-floppy-disk"></i>';
        } else {
            // Exit Edit Mode and Save Changes
            postTitle.contentEditable = false;
            postText.contentEditable = false;
            postTitle.style.border = '2px solid transparent';
            postText.style.border = '2px solid transparent';
            editBtn.innerHTML = 'Edit <i class="fas fa-pen-to-square fa-xs"></i>';
        }
    });
});



document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const postTitle = urlParams.get('title');
    const postContent = urlParams.get('content');
    const authorName = urlParams.get('author');

    // Set the title, content, and author name of the post
    const postTitleElement = document.querySelector('.post-title h2');
    const postText = document.querySelector('.post-content p');
    const authorInfo = document.querySelector('.username-post span');

    postTitleElement.textContent = postTitle;
    postText.textContent = postContent;
    authorInfo.textContent = authorName;
});






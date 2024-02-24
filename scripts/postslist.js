//This is for delete post icon
var deletePostModals = document.querySelector(".delete-post-modal");

document.querySelectorAll(".delete-icon").forEach(item =>{
    item.addEventListener('click' , event => {
        deletePostModals.style.display = 'block';
    });
});

document.querySelector('.no-btn').addEventListener('click',function(){
    deletePostModals.style.display = 'none';
});

//This is for the edit icon which will going to open the another page
document.querySelectorAll(".edit-btn").forEach(item =>{
    item.addEventListener('click' , event => {
        window.location.href = "../html/post.html";
    });
});


document.addEventListener("DOMContentLoaded", function() {
    // Select all delete buttons
    const deleteButtons = document.querySelectorAll('.delete-icon');
    
    // Loop through each delete button
    deleteButtons.forEach(function(button) {
        // Add click event listener to each delete button
        button.addEventListener('click', function() {
            // Show the delete confirmation overlay
            document.querySelector('.delete-post-modal').style.display = 'block';
            
            // Get the post container associated with the delete button
            const postContainer = button.closest('.post');
            
            // Yes button event listener
            document.querySelector('.yes-btn').addEventListener('click', function() {
                // Remove the post container
                postContainer.remove();
                // Hide the delete confirmation overlay
                document.querySelector('.delete-post-modal').style.display = 'none';
            });
        });
    });
});



document.addEventListener('DOMContentLoaded', function () {
    const editIcons = document.querySelectorAll('.edit-btn');

    editIcons.forEach(icon => {
        icon.addEventListener('click', function () {
            const postContainer = icon.closest('.post');
            const postTitle = postContainer.querySelector('.title-section p').textContent;
            const postContent = postContainer.querySelector('.discription-section p').textContent;
            const authorName = postContainer.querySelector('.author-info p').textContent;

            // Redirect to post.html with query parameters
            window.location.href = `post.html?title=${encodeURIComponent(postTitle)}&content=${encodeURIComponent(postContent)}&author=${encodeURIComponent(authorName)}`;
        });
    });
});




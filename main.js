function togglePostContent(id) {
    const content = document.getElementById('content' + id);
    const button = content.previousElementSibling;

    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        button.textContent = 'Show Less';
    } else {
        content.classList.add('hidden');
        button.textContent = 'Read More';
    }
}

let posts = []

function renderPosts() {
    const postContainer = document.getElementById('post-container');

    posts.forEach((post, index) => {
        const postElement = document.createElement('article');
        postElement.classList.add('post');


        postElement.innerHTML = `
            <h2 class="post-title">${post.title}</h2>
            <p class="post-date">Posted on ${post.date}</p>
            <p class="post-excerpt">${post.excerpt}</p>
            <button class="read-more" data-id="button${index}" onclick="togglePostContent(${index})">Read More</button>
            <div class="full-content" id="content${index}" style="display: none;">
                <p>${post.fullContent}</p>
            </div>
        `;

        postContainer.prepend(postElement);
    });
}


document.getElementById('post-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    if (!title || !content) {
        alert("Please enter a title and content before posting.");
        return;
    }


    const newPost = {
        title: title,

        date: new Date().toLocaleDateString(),
        excerpt: content.slice(0, 100) + '...',
        fullContent: content
    };


    posts.unshift(newPost);


    document.getElementById('title').value = '';
    document.getElementById('image').value = '';
    document.getElementById('content').value = '';


    renderPosts();
});




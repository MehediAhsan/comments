fetch('https://jsonplaceholder.typicode.com/comments')
  .then(response => response.json())
  .then(data => displayComment(data.slice(0,100)))

const displayComment = (comments) => {
    let count = 1;
    comments.forEach(comment => {
        const tableBody = document.getElementById('table-body');
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <th>${count++}</th>
        <td>${comment.name.slice(0,10)}</td>
        <td>${comment.email}</td>
        <td>${comment.body.slice(0,40)}...</td>
        <td><label onclick="loadPost(${comment.id})" for="my-modal-4" class="btn btn-link modal-button">Detail</label></td>
        `
        tableBody.appendChild(tr)
    });
}

const loadPost = count => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${count}`)
    .then(response => response.json())
    .then(data => displayPost(data))
}

const displayPost = post => {
    const postDetail = document.getElementById('post-detail');
    postDetail.innerHTML = `
    <label class="modal-box relative" for="">
    <h3 class="text-lg font-bold">${post.title}</h3>
    <p class="py-4">${post.body}</p>
    </label>
    `
}



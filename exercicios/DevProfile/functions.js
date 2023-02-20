async function loadProfile() {
    const response = await fetch ('https://api.github.com/users/rodrigopieritz')
    const data = await response.json()
    console.log (data)
    document.getElementById('image').innerHTML = `<img id="profileImg" src="${data.avatar_url}">`;
    document.getElementById('name').innerHTML = `<h1>${data?.name}</h1>`;
    document.getElementById('bio').innerHTML = `<h3>${data?.bio}</h3>`;
    document.getElementById('login').innerHTML = `<p> Github: ${data?.login}</p>`;
    document.getElementById('location').innerHTML = `<p>${data?.location}</p>`;
}
loadProfile()
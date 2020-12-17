export const fetchPosts = () => {
    fetch('http://localhost:3001/posts')
    .then(resp => resp.json())
    .then(json => console.log(json))
}
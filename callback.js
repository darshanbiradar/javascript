function getData(url,callback){
    fetch(url)
    .then(response=>response.json())
    .then(data=>callback(data))
}
getData('https://jsonplaceholder.typicode.com/posts',function(posts){
    console.log(posts);
})
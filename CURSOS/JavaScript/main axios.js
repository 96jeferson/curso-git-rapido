axios.get('https://api.github.com/users/diego3g')

minhaPromise()
.then(function(response){
    console.log(response);
})

.catch(function(error){
    console.warn(error);
    
});


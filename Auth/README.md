#Auth Example    
Routes    

localhost:3090/signup   
localhost:3090/signin    


## Example post for signup and sign in    
```   
{
	"email": "completeuser@example.com",
	"password": "1234"
}   
````     

For this to work create a config.js file    
```
// Hold application secrets and config
module.exports = {
  secret: ''
};

```

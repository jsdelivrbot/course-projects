#Auth Example    

### This uses mondogb   
### Install MongoDB
Brew update
Brew install mongodb
### Run MongoDB
Create the data directory
    Mkdir -p /data/db
Set permissions on directory
    sudo chown -R $USER /data/db

### To start Mongo  
Open a terminal and type mongod


## Routes   
localhost:3090/signup    --- generates a jwt token
localhost:3090/signin    -- needs a token you get from signup route


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

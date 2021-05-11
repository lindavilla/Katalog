# Katalog
Module 2 Project

​
##  Description
A web application where users can create and manage their daily artistic content. ​
​
## User stories (MVP)
​
*Complete with your own functionalities for the MVP (remember, be realistic!)
​
**404** - As a user I want to see a 404 page with an error message stating I have made a mistake. I want the chance to be redirected in this 404. 
​
**500** - As a user I want to see a proper error message that indicates I have no control of this error. I want the chance to be redirected in this 500. 
​
**Homepage** - As a user I want to be able to access the homepage where I see a preview of the app and I can be taken to the login or signup.
​
**Sign up** - As a user I want to create a profile with an email and password. 

**Sign up** - As a user , if I enter an email that is already in use, I can see a message that this profile already exists with a link to Log in.
​
**Log in** - As a user I want to return to my profile by logging in with my credentials (username and password)

**Log in** - As a user , if I place the wrong email or password, I can see a message that the email / password is incorrect and I am prompted to try again
​
**Log out** - As a user I want to be able to log out from the webpage and be sure no one will access my account
​
**Profile** - As a user I want to be able to see my profile and edit it

**Profile** - As a user I can edit my profile image

**Profile** - As a user I can edit my profile name

**Profile** - As a user I can edit my profile bio

**Content Management** - As a user I can update the description of each post 

**Content Management** - As a user I can not update the date of each post

**Content Management** - As a user I can update the theme and creator of each post

**Content Management** - As a user I can not change the image

**Content Management** - As a user I can delete a post 


​
## Backlog / Nice to have
​
*If you finished your MVP, what other functionalities would you like to add to your app? (User stories).
​
**Theme** - As a user I want to be able to choose from a dark or light theme for my app

**Feed** - As a user I can see live feed of other users and their public posts 

**Chat** - As a user I can chat with other users

**Location** - As a user I can log in the geolocation of the post and see all my posts through maps

**Images** - As a user I want to upload images and add a date, description, theme, and creator.

**Images_requirements** - As a user uploading an image, I can see that the image upload, date and description will be required fields 

**Image_upload** - As a user I can see a confirmation that the image has been uploaded successfully 

​
​
## Routes
​
| Name            | Method | Endpoint                      | Description                                      | Body                                  | Redirects       |
| --------------- | ------ | ----------------------------- | ------------------------------------------------ | ------------------------------------- | ------------	|
| Home            | GET    | /                             | See the log in and sign up                       |                                       |                 |
| Log in          | POST   | /login                        | Log in the user                                  | {mail, password}                      | /username       |
| Sign Up form    | GET    | /signup                       | See the form to sign up                          |                                       |                 |
| Sign Up         | POST   | /signup                       | Sign up a user                                   | {mail, password}                      | /login           |
| My Posts        | GET    | /userName                     | See all posts and profile			      | {} 
    |
| Create Post     | GET    | /userName/create 	 	   | See inputs for post creation 		      | {image, name, description, date,
														theme, creator}
| Create Post     | POST   | /userName/create 	 	   | See inputs for post creation  		      | {image, name, description, date,      | /username
														theme, creator}	                
| Edit Post 	  | GET    |/userName/postName 	 	   | See content of existing post		      | {}				      | 
    |
| Edit Post	  | POST   | /userName/postName 	   | See content of existing post  	    	      | {}  	 			      | /userName
    |
| Edit Profile	  | GET    | /userName/edit		   | Edit profile of logged in user 	    	      | {firstName, lastName, email, 	      | 
    |														password, age} 			      
| Edit Profile    | POST   | //userName/edit		   | Submit changes to profile			      | {firstName, lastName, email,	      | /userName
														password, age}

 --
​
## Models
​
User model
​
```js
{
    firstName: String,
    lastName: String,
    email: String,
    hashedPassword: String,
    age: Number
}

Post model
​

{ 
	userID: Number,
	image: String,
	name: String ,
	description: String,
	date: Number,
	theme: String,
	creator: String,

}
```
​
## Links
​
### Github kanban
​
[Link to my project]()
​
### Github repository
​
[Link Repo]()
​
### Project deploy
​
[Link Deploy]()
​
### Wireframes
​
see files
​
### Slides
​
URls for the project presentation
[Link Slides.com]()

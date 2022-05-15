# flipCards
deployed to koar.me
## :computer: How to deploy to github pages 
* If you working with Vite : add base url to Vite.config.js
* go to pages in github and choose the branch contains built directory
* create a sub-folder to deploy :  git subtree push --prefix dist origin deployed 
* give it a shot ! 
* if there are issues with displaying images in the production mode : add 
window.location.origin + "directory-name" + "meant-folder"


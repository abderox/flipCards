# flipCards
deployed to [koar.me](http://koar.me/flipCards/)
## :computer: How to deploy to github pages 
* If you working with Vite : add base url to Vite.config.js
* edit your .gitignore , remove dist 
* add all then push to the working branch
* create a sub-folder to deploy :  git subtree push --prefix dist origin deployed 
* go to settings --> pages in github and choose the branch that contains dist folders (assets , images , index.html) --> save
* give it a shot ! 
* if there are issues with displaying images in the production mode : add 
window.location.origin + "repo-name" + "images"

## :keyboard: Author Abdelhadi Mouzafir


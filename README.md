# IT SPA

It's the first diploma project which I will prepare for my postgraduate studies "frontend with React". This project was prepared using vanilla js without any js framework. For styling I used a little of a bootstrap with custom scss styling. Even I used pure js I tried to be quite close to modern frontend technologies so I tried to write as much as I can in vanilla js / minimazing HTML. Structure of the project is similar to React projects deiveded on components.

## How it works
![](spaIT.gif)

## Getting Started
1. git clone 
2. npm install
3. npm run start:dev - run the project
4. json-server database.json - run database

After finishing this orders you can display webpage on your device

Used technologies:
 1. Vanilla js without any framework with ES6+ standard
 2. scss and bootstrap for styling
 3. json server as database
 4. axios for data fetching
 5. uuid for id generating
 6. webpack and babel as a bundler and transpiler
 7. prettier and eslint for static code anlizing

Implemented solutions

 1. Rooms displayed in grid view
 2. Treatments displayed in grid view
 3. Detail view of rooms and Treatments with possibility to add product to the cart
 3. Cart funcionality
  - add to cart
  - delete from cart
  - change rooms and treatments quantity
  - clear the cart
  - complete the order
  - total sum of the cart
  - you can choose visit start-date and end-date. Start date can't be eariler that actual day, end date can't be sooner that year after start-date.
 4. Carousel on main page
 5. LocalStorage funcionality to memorize added rooms and treatments
 6. Responsive views for mobiles, tablets and laptops
 7. Real time data fetching from json.server
 8. Register and login funcionality
 9. Register validation: 
  - min 8 password characters 
  - empty field validation
  - "@" symbol validation in email
  - password equality
  - email has to be unique in database
 10. Quick cart summarize view of ordered products - on hover
 11. Smooth scrolling
 12. Loader

### Project architecture

Project is diveded on a few categories - similar to modern technologies like React
 1. assets - all images
 2. components - smaller parts of code that build all views and main page components like navigation, footer etc.
 3. css - all styles
 4. views - all views that you can switch in navigation component  
 5. helper functions - all functions that are universal and you can use in any part of project
 6. root files: index.js, index.html
 7. configuration files: eslint, gitigore, package.json etc.

### How did I create this project?

Project was prepared based on my own vanilla js template with custom webpack configuration

## Plan for future dvelopment
Unit tests in progress...

## Prettier and Eslint configuration
Project has implemented static code formaters

## Authors

* **Mateusz Grzejszczyk** - *Initial work* -

## License
Free licence

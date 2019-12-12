// JavaScript Document

//Step One - create variables that store a reference to header and section elements 
let header = document.querySelector('header');
let section = document.querySelector('section');

//Step Two - create a variable to store request URL 
let requestURL = "https://Nix1020.github.io/assignment3/assignment3/js/nProducts.json";

// Step Three - create a new XHR object 
let request = new XMLHttpRequest(); 

//Step Four - open a new request, using the open method 
request.open('GET', requestURL);

//Step Five - set up the request to accept JSON

request.responseType = 'json';

//Step Six - send the request using the send method 

request.send();


// Step Seven - adding an event handler that listens for onload event of the JSON file/object 
request.onload = function() {
  let iScreamInc = request.response; 
  console.log(iScreamInc);
  populateHeader(iScreamInc); 
  Product(iScreamInc);  
}

// Step Eight - set up populateHeader function to fill in the header function 
function populateHeader(jsonObj) {
  
  // grab the company name from JSON object and then create a new element, adding text and appending to the header
  
  let headerH1 = document.createElement('h1'); 
  headerH1.textContent = jsonObj['companyName'];
  header.appendChild(headerH1);
  
  //grab the company info and established date and add a new paragraph to your HTML that displays this info 
  
  let headerPara = document.createElement('p');
  headerPara.textContent = 'Head Office: ' + jsonObj['headOffice'] + ' , Established:  ' + jsonObj['established'];
  header.appendChild(headerPara);
}

// define the Product function to show the flavours

function Product(jsonObj) {
  
  //bind top flavours object to a variables 
  let Product = jsonObj['Product'];
  
  for (let i = 0; i < Product.length; i++) {
    //create a few different elements 
    let article = document.createElement('article');
    let h2 = document.createElement('h2');
    let img = document.createElement('img');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let list = document.createElement('ul');
    
    //grab the data associated with image to set the src and alt attribute
    img.setAttribute('src', 'https://Nix1020.github.io/assignment3/assignment3/images/' + Product[i].image);
    img.setAttribute('alt', Product[i].image );
    
    h2.textContent = Product[i].name; 
    p1.textContent = 'Calories: ' + Product[i].calories;
    p2.textContent = 'Type: ' + Product[i].type;
    
    let discription = Product[i].discription;
    for(let j = 0; j < discription.length; j++ ) {
      let listItem = document.createElement('li'); 
      listItem.textContent = discription[j];
      list.appendChild(listItem); 
    }
    
    // Append each element to article, then append article to section 
    
    article.appendChild(img); 
    article.appendChild(h2);
    article.appendChild(p1); 
    article.appendChild(p2);
    article.appendChild(list);
    section.appendChild(article); 
     
  }

}


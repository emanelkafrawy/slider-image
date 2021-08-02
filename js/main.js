//get slider items |array.from[Es6 feature]

let SliderItem = Array.from(document.querySelectorAll('.slider-container img'));  //bring array from these img

//get number of slides
let SlidesCount = SliderItem.length;

//current index to get the index wanted
let currentSlide = 1;

//Slide num string element
let SlideNumElem = document.getElementById('slide-number');

//prev and next buttons
let nextButton = document.getElementById('next'),
    prevButton = document.getElementById('prev');

//handle on click button
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

//create the main Ul element
let paginationElement = document.createElement('ul');

//set id on paginationElement
paginationElement.setAttribute('id','pagination-ul');

//create li based on array length
for (let i = 1; i <= SlidesCount; i++) {
    //create the li
    let paginationItem = document.createElement('li');

    //set attribute of data index
    paginationItem.setAttribute('data-index', i);

    //set item content
    paginationItem.appendChild(document.createTextNode(i));

    //append items to the main ul list
    paginationElement.appendChild(paginationItem);

}

//append the ul to the page
document.getElementById('indicators').appendChild(paginationElement);

//get the new ul created 
let paginationCreatedUl = document.getElementById('pagination-ul');

//get pagination item
let paginationBullets = Array.from(document.querySelectorAll('#pagination-ul li'));  //bring array from these pagination ul

//loop through bulltes item
for (let i=0;i<paginationBullets.length;i++) {
    paginationBullets[i].onclick =function() {
        currentSlide =parseInt(this.getAttribute('data-index'));//عشان يحول الاسترنج الي راجع يخليه انتجر
        TheChecker();
    }
}
//treger the checker function 
TheChecker();

//function next lide
function nextSlide() {
 if(nextButton.classList.contains('disabled')){

    //do nothing
    return false ;
    
} else {

    currentSlide++;

    TheChecker();
}    


}
//function prev lide
function prevSlide() {
    if(prevButton.classList.contains('disabled')){

        //do nothing
        return false ;
        
    } else {
    
        currentSlide--;
    
        TheChecker();
    }    
    
}    

//create the checker function 
function TheChecker() {
    //set the slide number 
    SlideNumElem.textContent = `Slide # ${currentSlide} of ${SlidesCount}`;
    
    RemoveAllActive();

    //set active class on current slide
    SliderItem[currentSlide-1].classList.add('active');

    //set active class on current pagination item
    paginationCreatedUl.children[currentSlide-1].classList.add('active');
    
    //check if the current class is the first
    if(currentSlide == SlidesCount){
          //add disable class to the prev button
          nextButton.classList.add('disabled'); 
    } else {
        //remove disable class forn button
        nextButton.classList.remove('disabled'); 
    }
     //check if the current class is the latest
     if(currentSlide == 1){
        //add disable class to the prev button
        prevButton.classList.add('disabled'); 
  } else {
      //remove disable class forn button
      prevButton.classList.remove('disabled'); 
  }
}

//remove all active classes from all pagination or image
function RemoveAllActive( ) {

    //loop through image to remove active
   SliderItem.forEach(function(img ) {

       img.classList.remove('active');
   });

    //loop through paginationbullets to remove active 
    paginationBullets.forEach(function(bullet ) {

        bullet.classList.remove('active');
    });

}

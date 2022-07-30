// Arrays

var id = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var titles = ['Project One', 'Project Two', 'Pen Three', 'Project Four', 'Project Five',
              'Project Six', 'Project Seven', 'Project Eight', 'Project Nine', 'Project Ten'];

var images = ['imgs/pen1.jpg', 'imgs/pen2.jpg', 'imgs/pen3.jpg', 'imgs/pen4.jpg', 
              'imgs/pen5.jpg', 'imgs/pen6.jpg', 'imgs/pen7.jpg', 'imgs/pen8.jpg', 
              'imgs/pen9.jpg', 'imgs/pen10.jpg'];

var years = [2003, 2005, 2010, 2013, 2017, 2014, 2011, 2007, 2005, 2020];

// get elements

var imgProject = document.querySelector('.img-project');
var i;
var modalContainer = document.querySelector('.modal-container');
var imgModal = document.querySelector('.img-modal');
var closeDOM = document.querySelector('.close');
var titleDOM = document.getElementById("title");
var yearDOM = document.getElementById("year");


// function to display details of the element
function displayDetails(item){

    for(i = 0; i < id.length ; i++){
        if(id[i] == item){
            modalContainer.style.transform = "scale(1)";
            imgModal.src = images[i];
            titleDOM.innerHTML = "<span>Title : </span> " + titles[i];
            yearDOM.innerHTML = "<span>year : </span> " + years[i];
        }
    }

}

// function to close modal box
closeDOM.onclick = function(){
    modalContainer.style.transform = "scale(0)";
}
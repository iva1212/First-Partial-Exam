var userName;
var comment;
var submit;
function init (){
  username = document.querySelector(".userName");
  comment = document.querySelector("#userComment");
  submit = document.querySelector("#submit");

  createMessage();
};

function createMessage(){
   submit.addEventListener( 'click' , (event) =>{

    event.preventDefault();

    let container = document.querySelector(".seccionComments");
    container.innerHTML+=`

        <p class="comName">${username.value}</p>
        <p class="comComment">${comment.value}</p>
        <button class="">DELET</button>
    
    
    `;
    
    
    
    
    




   })
};



init();
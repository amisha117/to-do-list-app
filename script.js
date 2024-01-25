let inputBox=document.querySelector('.inputBox')
let addButton=document.querySelector('.addButton')
let taskList=document.querySelector('.taskList')

addButton.addEventListener('click',()=>{ // when we click the add button the folowing things will happen-----------------------

    if(inputBox.value==""){
        alert("you must write someting");// if input box on the left side of add button is empty alert will be shown --------------------
    }
    else{

        let inputValue = inputBox.value; // ---STEP 1) inputbox's value will be saved in inputValue variable

   
    

    let task=document.createElement('li'); // ---STEP 2) a list will be created and stored in the variable task 
    task.innerHTML='<i class="fa-regular fa-circle"></i>' + inputValue + '<i class="fa-solid fa-xmark " ></i>';// inner text of the list
    taskList.appendChild(task) // ---STEP 3) the list is now appended in the parent element tasklist and now it will be shown on the screen
    
    
  let cancel=task.querySelector('.fa-solid.fa-xmark')
   if (cancel) {
        cancel.classList.add('cancel');  
        cancel.addEventListener('click',()=>{
            task.remove();
        })
    
    
    
    
    
    }


    task.addEventListener('click',()=>{
        task.innerHTML= '<i class="fa-solid fa-circle-check"></i>' + inputValue + '<i class="fa-solid fa-xmark " ></i>';
        task.style.textDecoration='line-through'
        
        let cancel=task.querySelector('.fa-solid.fa-xmark')
   if (cancel) {
        cancel.classList.add('cancel');  
        cancel.addEventListener('click',()=>{
            task.remove();
        })
    
    
    
    
    
    }
    })

}
inputBox.value="";


})













    

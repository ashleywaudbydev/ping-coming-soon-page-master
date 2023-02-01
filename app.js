//variables\\

const submitButton = document.querySelector(".btn").addEventListener("click", function(e){
    e.preventDefault()
    const emailField = document.querySelector(".email");
    
    validateEmail(emailField)
    
})
    //validate email function\\
    function validateEmail(emailField){
      var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
     
      const errorText = document.querySelector("small");
      
      if (reg.test(emailField.value) == false) 
      {
        emailField.classList.add("error-border")
        errorText.classList.add("error-text")
        
        
      }else{
        emailField.classList.remove("error-border")
        errorText.classList.remove("error-text")
        emailField.value = "";
      }
    }
    




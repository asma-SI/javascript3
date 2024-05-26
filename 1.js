let buttonHtml = document.getElementById('button')

    buttonHtml.addEventListener('click', (e) => {
        e.preventDefault();
     

          let username = document.getElementById("username");
          let password = document.getElementById("password");
        
          if (username.value == "" || password.value == ""){
            alert("Not Successful");
          } else {
            alert("Successfull");
        } 
    });
        
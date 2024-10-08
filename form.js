
const form=document.querySelector('#form')
const username=document.querySelector('#username');
const email=document.querySelector("#email");
const password=document.querySelector('#password');
const cpassword=document.querySelector('#cpassword');

form.addEventListener('submit',(e)=>
    {
        if (!validateInputs()) 
        {
          e.preventDefault();
        }
        if(validateInputs())
        {
            alert('Congratulations! You have Logged In Successfully!');
            window.location.assign('index.html');
        }
    })

    function validateInputs()
    {
        const usernameVal=username.value.trim();
        const emailVal=email.value.trim();
        const passwordVal=password.value.trim();
        const cpasswordVal=cpassword.value.trim();
        let success=true;

        if(usernameVal==='')
        {
            success=false;
            setError(username,'*Username is required*');
        }
        else
        {
            setSuccess(username);
        }

        if(emailVal==='')
        {
            success=false;
            setError(email,'*Email is required*');
        }
        else if(!validateEmail(emailVal))
        {
            success=false;
            setError(email,'*Please Enter a valid Email*');  
        }
        else
        {
            setSuccess(email);
        }

        if(passwordVal==='')

            {
                success=false;
                setError(password,'*Password is required*')
            }
            else if(passwordVal.length<8)
            {
                success=false;
                setError(password,'*Password must be atleast in 8 chracters*')
            }
            else
            {
                setSuccess(password);
            }
        if(cpasswordVal==='')
            {
                success=false;
                setError(cpassword,'*Confirm password is required*')

            }
            else if(cpasswordVal!==passwordVal)
            {
                success=false;
                setError(cpassword,'*Password does not match*');
            }
            else
            {
                setSuccess(cpassword);
            }
            return success;
    }
 
    function setError(element,message)
    {
        const inputGroup = element.parentElement;
        const errorElement = inputGroup.querySelector('#display')
        errorElement.innerHTML= message;
        inputGroup.classList.add('error');
        inputGroup.classList.remove('success');
    }
    

    function setSuccess(element)
    {
        const inputGroup = element.parentElement;
        const errorElement = inputGroup.querySelector('#display');
        errorElement.innerHTML='';
        inputGroup.classList.add('success');
        inputGroup.classList.remove('error');     
    }

    const validateEmail = (email) => {
      return String(email)
        .toLowerCase()
        .match("^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,})$");
    };
    



    
    
    



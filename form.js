
function validateForm()
{
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    var mail = document.getElementById('email').value;
    var UserId = document.getElementById('userid').value;
    var password = document.getElementById('psw').value;
    let cpassword = document.getElementById('cpsw').value;   
  
    let fnamehide = checkEmpty('fname','fnameMsg');
    let lnamehide = checkEmpty('lname','lnameMsg');
    let emailhide = checkEmpty('email','emailMsg');
    let useridhide = checkEmpty('userid','useridMsg');
    let pswhide = checkEmpty('psw','pswMsg');
    let cpswhide = checkEmpty('cpsw','cpswMsg');
    let emailreg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let pswreg = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    let useridreg = /^\w+$/;
    let msg = document.getElementById('emailerror');
    let psw = document.getElementById('pswerror');
    let user = document.getElementById('usererror');
  if(!(emailreg.test(mail)) && emailhide)
  {
    msg.style.display = 'block';
    document.getElementById('emailerror').innerHTML= mail+" is not a valid email";
  }
  else
  {
    msg.style.display = 'none';
  }
  if(!(pswreg.test(password)) && pswhide)
  {
      psw.style.display = 'block';
      document.getElementById('pswerror').innerHTML="password must be more than 6 characters & contain at least one digit, one lowercase character and one uppercase character";
  }
  else{
    psw.style.display = 'none';
  }
  if(!(useridreg.test(UserId)) && useridhide)
  {
    user.style.display = 'block';
    document.getElementById('usererror').innerHTML="Enter valid user Id";
  }
  else{
    user.style.display = 'none';
  }
}


function checkEmpty(fieldId,msgId)
{
    var value =document.getElementById(fieldId).value;
    var messageBody = document.getElementById(msgId);
    var flag = true;
    if(value == '' || value == null){
        flag = false;
    }
    return showMsgOrHide(messageBody,flag,fieldId,msgId);

}

function showMsgOrHide(messageBody,flag,fieldId,msgId) 
{
    if(!flag){
        messageBody.style.display = 'block';
        var name =selectMessage(fieldId);
        document.getElementById(msgId).innerHTML =name;
    }else{
        messageBody.style.display = 'none';
    }
    return flag;
}

function selectMessage(fieldId){
    var message;
    switch(fieldId){
        case 'fname':
        message ='Please Enter your first name!';
        break;
        case 'lname':
        message ='Please Enter your last name!';
        break;
        case 'email':
        message ='Please Enter your email!';
        break;
        case 'userid':
        message ='Please Enter your user id!';
        break;
        case 'psw':
        message ='Please Enter your password!';
        break;
        case 'cpsw':
        message ='Please confirm your password!';
        break;
        default:
        message ='';
        break;
    }
    return message;
}

function isCharacterKey(evt)
{
    evt = (evt) ? evt : window.event
    var charCode = (evt.which) ? evt.which : event.keyCode
    if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123)) 
    {
        return true;
    }
    return false;
}

function check()
{
    var password = document.getElementById('psw').value;
    var cpassword = document.getElementById('cpsw').value;
    let msg;
    if(password===cpassword)
    {  
        color='green';msg="Matching";
	}  
    else
    {  
       color='red';msg="Not Matching" ; 
    } 
    document.getElementById('message').innerHTML = '<span style="color: '+color+'">' +msg+ " </span>"; 
}
function hover()
{
    var modal = document.getElementById('myModal');

    var btn = document.getElementById("myBtn");
    
    var span = document.getElementsByClassName("close")[0];
    
    btn.onmouseover= function() {
      modal.style.display = "block";
    }
    
    span.onclick = function() {
      modal.style.display = "none";
    }
    
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }

}
}


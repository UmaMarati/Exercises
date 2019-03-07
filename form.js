
function validateForm()
{
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var mail = document.getElementById('email').value;
    var UserId = document.getElementById('userid').value;
    var password = document.getElementById('psw').value;
    var cpassword = document.getElementById('cpsw').value;   
  var fnamehide = checkEmpty('fname','fnameMsg');
  var lnamehide = checkEmpty('lname','lnameMsg');
  var emailhide = checkEmpty('email','emailMsg');
  var useridhide = checkEmpty('userid','useridMsg');
  var pswhide = checkEmpty('psw','pswMsg');
  var cpswhide = checkEmpty('cpsw','cpswMsg');
  
if(fnamehide && lnamehide && emailhide && useridhide && pswhide && cpswhide)
{
    alert("Success!!");
}
if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)))
  {
      alert("Enter valid email");
  }
}

function checkEmpty(fieldId,msgId)
{
    var value =document.getElementById(fieldId).value;
    var messageBody = document.getElementById(msgId);
    var flag;
    if(value == '' || value == null){
        flag = false;
    }else{
        flag = true;
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
    if(password==cpassword)
    {  
        document.getElementById('message').style.color = 'green';
        document.getElementById('message').innerHTML = 'matching';  
	}  
    else
    {  
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').innerHTML = 'Not matching';  
	}  
}
function hover()
{
        var popup = document.getElementById("myPopup");
        popup.classList.toggle("show");

}

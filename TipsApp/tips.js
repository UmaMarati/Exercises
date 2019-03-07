function checkEmpty(fieldId,msgId){
    var emptyMessage = ' cannot be empty';
    var value =document.getElementById(fieldId).value;
    var messageBody = document.getElementById(msgId);
    var flag;
    if(value == '' || value == null){
        flag = false;
    }else{
        flag = true;
    }
    return showMsgOrHide(messageBody,emptyMessage,flag,fieldId,msgId);
}

function checkZero(fieldId,msgId){
    var value =document.getElementById(fieldId).value;
    var messageBody = document.getElementById(msgId);
    var greaterThanZeroMsg =' should be greater than zero';
    var flag;
    if(value == '0' ){
        flag = false;
    }else{
        flag = true;
    }
    return showMsgOrHide(messageBody,greaterThanZeroMsg,flag,fieldId,msgId);
}

function showMsgOrHide(messageBody,message,flag,fieldId,msgId){
    if(!flag){
        messageBody.style.display = 'block';
        var name =selectMessage(fieldId);
        document.getElementById(msgId).innerHTML =name+message;
        clearData();
    }else{
        messageBody.style.display = 'none';
    }
    return flag;
}

function selectMessage(fieldId){
    var message;
    switch(fieldId){
        case 'billAmount':
        message ='Bill amount';
        break;
        case 'service':
        message ='Service type';
        break;
        case 'numOfPeople':
        message ='Number of people';
        break;
        default:
        message ='';
        break;
    }
    return message;
}

function isNumberKey(evt)
{
    evt = (evt) ? evt : window.event
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57)) 
    {
        return false;
    }
    return true;
}
function clearData(){
    document.getElementById('totalTipAmount').innerHTML ='';
    document.getElementById('totalAmount').innerHTML ='';
    document.getElementById('totalPerPerson').innerHTML ='';
}

function calculateTips()
{
    clearData();
    var billAmount = document.getElementById('billAmount').value;
    var service = document.getElementById('service').value;
    var numOfPeople = document.getElementById('numOfPeople').value; 
    var totalHide = checkEmpty('billAmount','showBillMsg');
    var serviceHide = checkEmpty('service','showServiceMsg');
    var numOfPeopleHide = checkEmpty('numOfPeople','showPeopleMsg');
    if(totalHide){
    totalHide = checkZero('billAmount','showBillMsg');
    }
   if(numOfPeopleHide){
    numOfPeopleHide = checkZero('numOfPeople','showPeopleMsg');
   }
   
   if(totalHide && serviceHide && numOfPeopleHide)
        {
            var amountDetailsDiv = document.getElementById('amountDetailsDiv');
            amountDetailsDiv.style.display = 'block';
            var tipPer = tipsBasedOnService(service);
            var totalTip = billAmount*(tipPer/100);
            var totalAmount = parseInt(billAmount) + parseInt(totalTip);
           // var tipPerPerson = totalTip/numOfPeople;
            var totalPerPerson = totalAmount / numOfPeople;
            document.getElementById('totalTipAmount').innerHTML =totalTip.toFixed(2);
            document.getElementById('totalAmount').innerHTML =totalAmount.toFixed(2);
            document.getElementById('totalPerPerson').innerHTML =totalPerPerson.toFixed(2);
        }
}

function tipsBasedOnService(service)
{
    var tipPercnetage ;
        switch(service)
        {
            case '1': tipPercnetage = 10;
                    break;
            case '2': tipPercnetage = 6;
                    break;
            case '3': tipPercnetage = 4;
                    break;
            case '4': tipPercnetage = 0;
                    break;
            default:  tipPercnetage = 0;
                    break;
        }  
    return tipPercnetage;
}
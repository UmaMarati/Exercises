function showOrHide()
{
    var flag1 = true,flag2 = true,flag3 = true;
    var billAmount = document.getElementById('billAmount').value;
    var showBillMsg = document.getElementById('showBillMsg');
   
        if(billAmount == '' || billAmount == null)
        {
            showBillMsg.style.display = 'block';
            document.getElementById('showBillMsg').innerHTML ='Please enter bill amount';
            flag1 = false;
        }
        else
        {
            if(billAmount == '0' )
            {
                showBillMsg.style.display = 'block';
                document.getElementById('showBillMsg').innerHTML ='Amount should be greater than zero';
                flag1 = false;
            }
            else
            {
                showBillMsg.style.display = 'none';
                flag1 =  true;
            }
        }
        var service = document.getElementById('service').value;
        var showServiceMsg = document.getElementById('showServiceMsg');

        if(service == '' || service == null)
        {
            showServiceMsg.style.display = 'block';
            document.getElementById('showServiceMsg').innerHTML ='Please select service type';
            flag2 = false;
        }
        else
        {
            showServiceMsg.style.display = 'none';
            flag2 = true;
        }
        var showPeopleMsg = document.getElementById('showPeopleMsg');
        var numOfPeople = document.getElementById('numOfPeople').value; 
  
        if(numOfPeople == '' || numOfPeople == null)
        {
            showPeopleMsg.style.display = 'block';
            document.getElementById('showPeopleMsg').innerHTML ='Please enter number of people';
            flag3 = false;
        }
        else
        {
            if(numOfPeople == '0' ){
                showPeopleMsg.style.display = 'block';
                document.getElementById('showPeopleMsg').innerHTML ='People number should be greater than zero';
                flag3 = false;
            }
            else
            {
                showPeopleMsg.style.display = 'none';
                flag3 = true;
            }
        }
        if(flag1 == true && flag2 == true && flag3 == true)
        {
            return true;
        }
        else
        {
            return false;
        }
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

function calculateTips()
{
    document.getElementById('totalTipAmount').innerHTML ='';
    document.getElementById('totalAmount').innerHTML ='';
    document.getElementById('totalPerPerson').innerHTML ='';
    var billAmount = document.getElementById('billAmount').value;
    var service = document.getElementById('service').value;
    var numOfPeople = document.getElementById('numOfPeople').value; 
    var totalHide = showOrHide();
   
        if(totalHide)
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
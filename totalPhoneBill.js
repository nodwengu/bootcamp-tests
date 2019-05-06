
function totalPhoneBill(callsAndSms) {
    var callsAndSmsArr = callsAndSms.split(", ");
    // console.log(callsAndSmsArr);
    
    var callsCounter = 0;
    var smsCounter = 0;
    for(var i = 0; i < callsAndSmsArr.length; i++) {
        if(callsAndSmsArr[i] == "sms") {
            smsCounter++;	
      } else {
          callsCounter++;
      }
  }
    return "R"+ (callsCounter * 2.75 + smsCounter * 0.65).toFixed(2);
}

console.log(totalPhoneBill("call, sms, call, sms, sms"));
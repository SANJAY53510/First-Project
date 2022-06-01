

function exit(){
    
let message = document.getElementById('message');
message.style.display='none';
}


function submit(){

let mobile = document.getElementById('phone').value;
let mobileError = document.getElementById('mobileError');

let mobileErrorFlag = false;

let aadhar = document.getElementById('aadhar').value;
let aadharError = document.getElementById('aadharError');
let aadharErrorFlag = false;

let studentname = document.getElementById('studentname').value;
let studentnameError = document.getElementById('studentnameError');
let studentnameErrorFlag = false;

let fathername = document.getElementById('fathername').value;
let fathernameError = document.getElementById('fathernameError');
let fathernameErrorFlag = false;

let mothername = document.getElementById('mothername').value;
let mothernameError = document.getElementById('mothernameError');
let mothernameErrorFlag = false;




if(aadhar.length == 0){
    
aadharError.innerHTML="Aadhar no. should not be empty";
aadharErrorFlag = true;

} else if( aadhar.length < 12){
aadharError.innerHTML="Enter a valid Aadhar number"; aadharErrorFlag = true;
}  else if( aadhar.length > 12){
    aadharError.innerHTML="Enter a valid Aadhar number"; aadharErrorFlag = true;
    }
 else{
aadharError.innerHTML="";
 aadharErrorFlag = false;
}

if(mobile.length == 0){
    
    mobileError.innerHTML="Mobile no. should not be empty";
    mobileErrorFlag =true;

} else if( mobile.length < 10){
    mobileError.innerHTML="Enter a valid mobile number";
    mobileErrorFlag =true;
} else{
    mobileError.innerHTML="";
    mobileErrorFlag =false;
}


if(studentname.length == 0 ){

studentnameError.innerHTML = ' Write your full name';
studentnameErrorFlag = true;
}
else if(studentname.length < 4){
    studentnameError.innerHTML = ' Write minimum 4 car';
    studentnameErrorFlag = true;
} else{
    studentnameError.innerHTML = "";
    studentnameErrorFlag = false;
} 


if(fathername.length == 0 ){

    fathernameError.innerHTML = ' Write your father name';
    fathernameErrorFlag = true;
    }
    else if(fathername.length < 4){
        fathernameError.innerHTML = ' Write minimum 4 car';
        fathernameErrorFlag = true;
    } else{
        fathernameError.innerHTML = "";
        fathernameErrorFlag = false;
    }
    

    if(mothername.length == 0 ){

        mothernameError.innerHTML = ' Write your mother name';
        mothernameErrorFlag = true;
        }
        else if(mothername.length < 4){
            mothernameError.innerHTML = ' Write minimum 4 car';
            mothernameErrorFlag = true;
        } else{
            mothernameError.innerHTML = "";
            mothernameErrorFlag = false;
        }
        









let message = document.getElementById('message');


let addmissionNumber =Math.floor(Math.random()*12412)+1234;

if ((aadharErrorFlag == false) && (mobileErrorFlag == false)){

    message.style.display = 'block';
    alert(`Your addmission number is ${addmissionNumber} please save it for future references. `);
   
}else{
    console.log(aadharErrorFlag); 
}


}













// EXERCISE 1

var input=prompt("ENTER A NUMBER")

var output=0
for (var counter=1; counter<=input; counter++){
    console.log ("counter:",counter);
    output+=counter;
    console.log("output:",output);

} 




// EXERCISE 2

alert(output)


var YesorNO;
var output="";
do{
    if(output==""){
    YesorNO=prompt("DO YOU WANT TO PLAY?");

    }else {

    YesorNO=prompt("DO YOU WANT TO PLAY AGAIN?");
    
    }
 
    if(YesorNO=="yes"){
         input=prompt("enter a word")
         output+=" "+input;


    }



// EXERCISE 3

}while(YesorNO=="yes")

alert(output);


var YesorNO=prompt ("WOULD YOU LIKE TO PRINT YOUR NAME?")
var output="hello my name is adam"

while(YesorNO=="yes"){

	alert(output)

	YesorNO=prompt ("WOULD YOU LIKE TO PRINT YOUR NAME?")

	if(YesorNO=="yes"){
		output+="!";
	}


}





// EXERCISE 4


var text;


var TimeOfDay=prompt("WHAT TIME OF DAY IS IT?")
switch(TimeOfDay){
	case "morning":
    	text= "Since it is morning, you should be eating breakfast. We suggest eggs and toast.";
    	break; 

    case "noon":
    	text= "Since it is noon, you should be eating lunch. We suggest a salad.";
    	break; 

    case "evening":
    	text= "Since it is evening, you should be eating dinner. We suggest a chicken and rice.";
    	break;

    default:
       text="you must either morning noon or evening";
}     
console.log(text)



















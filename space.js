var spacer = function (input) {
    var result = '' ;
    var inputArray = input.split('');
    var length = inputArray.length;
    var resultSize = Math.pow(2,length-1);
    for(var i = 0 ; i< resultSize ; i++){
        for(var j=0;j<length;j++){
            result += inputArray[j];
            if((i & (1<<j))>0){ 
                result += ' ' ;
            }
        }
        result += '\n' ;
    }
    return result;
}
console.log(spacer("WORD"))
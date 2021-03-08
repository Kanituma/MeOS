

function detype(name,text1,text2){
    if(text1!==undefined){
        t1 = text1;
        t2 = text2;
        index=text1.length
        n=name;
        // time=300;
    }
    $(n).addClass("bar")
    // time+=10
    console.log(text1)
    var letter = t1.slice(0,index);
    index=index-1
    $(n).html(letter);
    dto=setTimeout(detype,30)
    console.log(letter.length)
    if(letter.length === 0){
        // index=0;
        clearTimeout(dto)
        type(name,text2)
    } 
    console.log(index)
    
}
function type(name,text){
    if(text!==undefined){
        t=text
        n=name
    }
    var letter = t2.slice(0,++index);
    $(n).html(letter);
    console.log(text)
    // time=time+100
    to=setTimeout(type,50)
    if(letter.length === t2.length){
        index=0;
        clearTimeout(to)
        setTimeout(function(){$(n).removeClass("bar")},500)
    } 
    // console.log(t+letter)  
}

function typeChange(name,t1,t2){
    var t,t1,t2;
    var n;
    // var letter;
    var time=300;
    var index
    detype(name,t1,t2)
    // if(index==0){
    //     type(name,t2)
    // }
    // tco = setTimeout()
}
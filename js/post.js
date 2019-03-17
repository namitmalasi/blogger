$('#save').hide();

$('#editButton').click(function(){
 $('#editable').focus();
$('#editButton').hide();
$('#save').show();
});


$('#save').click(function(){
$('#editButton').show();
$('#save').hide();
});




function addComments(id){
        var addEventName = id.value +'<br>';
        var a = document.getElementById('userComments');
        document.getElementById('addEventNames').innerHTML += '<p>'+addEventName+'</p>';          
        a.value=a.defaultValue;
    }
var cnt=0;
    function CountFn(){
    	document.getElementById("likeBlog").value="Liked";
     cnt=parseInt(cnt)+parseInt(1);
     var divData=document.getElementById("likeCount");
     if(cnt == 1){
     	divData.innerHTML= cnt +" Person like this!";
     }else{
     	divData.innerHTML= cnt +" Person have liked this!";//this part has been edited
     }
    }




function addComments(id){
        var addEventName = id.value +'<br>';
        var a = document.getElementById('userComments');
        document.getElementById('addEventNames').innerHTML += '<p id="commentDisplay">'+addEventName+'</p>';          
        a.value=a.defaultValue;
    }

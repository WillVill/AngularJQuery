$.ajax({
    url:'http://localhost:8080/EP_Angular_JQuery/api/data',
    type: 'GET',
    dataType: "json",
    success: function(response){
        var trHTML ='';
        var friendsHTML = '';
        $.each(response, function(i,item){
            friendsHTML ='';
        $.each(item.friends,function(i, friend){
            friendsHTML += '<td>'+friend.id+'</td>';
        })
            trHTML +='<tr><td>'+item.id+'</td><td>'+item.age
            +'</td><td>'+ item.eyeColor+'</td><td>'+item.name
            +'</td><td>'+ item.email +'</td>'+friendsHTML+'</td></tr>';
        });
        $('#table').append(trHTML)
    }
});
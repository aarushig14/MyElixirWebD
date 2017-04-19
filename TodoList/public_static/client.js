/**
 * Created by a.gupta1409 on 15-04-2017.
 */

$(function () {
    $('#btn').click(function () {

        $.post('/addtodo',{task:$('#newtodo').value()},
        function (data) {
            let list ="";

            for(todo of data){      //todo of data gives only object string of data array

                list += "<li>"+todo+"</li>";
            }
            $('#list').append(list);
        })


    })
})
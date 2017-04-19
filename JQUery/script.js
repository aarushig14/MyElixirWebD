/**
 * Created by a.gupta1409 on 08-04-2017.
 */

$(function (){
    console.log('$ ready');
    $('#addtodo').click(function () {

        let newtodo = "<li>" + $('#newtodo').val()+"</li>";
        $('#todolist').append(newtodo);
    })

    String.prototype.appendTo = function(str){
        $(this.valueOf()).appendTo(str);
    }


});

console.log('script ran');
$(document).ready(function(){
    $('#image').click(function(){
        console.log('button clicked')
        $('#images').animate( {
            width: 'toggle'
        })
    })
    $('#button').click(function(){
        // console.log('button clicked')
        // alert("API disabled while deployed vie github pages to keep api key hidden")
        $('#img').animate( {
            width: 'toggle'
        })
    })
    $('#allUsers').click(function(){
        $('#allTheUsers').animate( {
            width: 'toggle'
        }).css({
            display: 'flex'
        })
    })
    $('#allImgs').click(function(){
        $('#allTheImgs').animate({
            width: 'toggle'
        }).css({
            display: 'flex'
        })
    })
    $('#allTemps').click(function(){
        $('#allTheTemps').animate({
            width: 'toggle'
        }).css({
            display: 'flex'
        })
    })
})


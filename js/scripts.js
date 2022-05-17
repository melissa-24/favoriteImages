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
    $('#flaskUsers').click(function(){
        $('#theFlaskUsers').animate( {
            width: 'toggle'
        }).css({
            display: 'flex'
        })
    })
    $('#flaskImgs').click(function(){
        $('#theFlaskImgs').animate({
            width: 'toggle'
        }).css({
            display: 'flex'
        })
    })
})


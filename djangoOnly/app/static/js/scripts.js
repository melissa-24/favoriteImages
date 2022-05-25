$(document).ready(function(){
    $('#image').click(function(){
        console.log('button clicked')
        $('#images').animate( {
            width: 'toggle'
        })
    })
    $('#button').click(function(){
        console.log('button clicked')
        $('#img').animate( {
            width: 'toggle'
        })
    })
})
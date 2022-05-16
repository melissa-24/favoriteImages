var flaskUsers = 'http://flask-only.dojo-ninja.com/api/users/'
var flaskImgs = 'http://flask-only.dojo-ninja.com/api/imgs/'

$(document).ready(function() {
    $('#flaskUsers').click(function(){
        $('#theFlaskUsers').animate( {
            width: 'toggle'
        })
    })
    // $.get(flaskUsers, function(res) {
    //     console.log(res)
    // })
    $('#flaskImgs').click(function(){
        $('#theFlaskImgs').animate({
            width: 'toggle'
        })
    })
    // $.get(flaskImgs, function(res) {
    //     console.log(res)
    // })
})
async function getFlaskUsers() {
    var response = await fetch(`${flaskUsers}`)
    var data = await response.json()
    console.log("flask users: ", data.users[0])
    d = data.users
    for (var i = 0; i < d.length; i++) {
        console.log(d)
    }
}

async function getFlaskImgs() {
    var response = await fetch(`${flaskImgs}`)
    var data = await response.json()
    // console.log("flask imgs: ", data.imgs)
    d = data.imgs
    for (var i = 0; i < d.length; i++) {
        // console.log(d)
        var node = document.createElement('div')
        var img = new Image()
        var h2 = document.createElement('h2')
        var name = document.createTextNode(d[i].name)
        // console.log(name)
        img.src = `${d[i].img}`
        img.alt = name
        h2.appendChild(name)
        node.appendChild(img)
        node.appendChild(h2)
        document.getElementById('theFlaskImgs').appendChild(node)
    }
}
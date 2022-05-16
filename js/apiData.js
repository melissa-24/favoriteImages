var flaskUsers = 'http://flask-only.dojo-ninja.com/api/users/'
var flaskImgs = 'http://flask-only.dojo-ninja.com/api/imgs/'

$(document).ready(function() {
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
async function getFlaskUsers() {
    var response = await fetch(`${flaskUsers}`)
    var data = await response.json()
    console.log("flask users: ", data.users[0])
    d = data.users
    for (var i = 0; i < d.length; i++) {
        // console.log(d)
        var node = document.createElement('div')
        var h2Name = document.createElement('h2')
        var h2User = document.createElement('h2')
        var namelable = document.createTextNode('Name: ')
        var fname = document.createTextNode(d[i].firstName)
        var userlable = document.createTextNode("Username: ")
        var user = document.createTextNode(d[i].username)
        h2Name.appendChild(namelable)
        h2Name.appendChild(fname)
        h2User.appendChild(userlable)
        h2User.appendChild(user)
        node.appendChild(h2Name)
        node.appendChild(h2User)
        document.getElementById('theFlaskUsers').appendChild(node)
    }
}

async function getFlaskImgs() {
    var response = await fetch(`${flaskImgs}`)
    var data = await response.json()
    console.log("flask imgs: ", data.imgs)
    d = data.imgs
    for (var i = 0; i < d.length; i++) {
        // console.log(d)
        var node = document.createElement('div')
        var img = new Image()
        var h2 = document.createElement('h2')
        var h3 = document.createElement('h3')
        var name = document.createTextNode(d[i].name)
        var username = document.createTextNode(d[i].user)
        var userLabel = document.createTextNode("Added by: ")
        // console.log(name)
        img.src = `${d[i].imgUrl}`
        img.alt = `${d[i].name}`
        h2.appendChild(name)
        h3.appendChild(userLabel)
        h3.appendChild(username)
        node.appendChild(img)
        node.appendChild(h2)
        node.appendChild(h3)
        document.getElementById('theFlaskImgs').appendChild(node)
    }
}
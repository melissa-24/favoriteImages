// var flaskOnly = 'https://flask-only.dojo-ninja.com/api/'
var flaskOnly = 'http://127.0.0.1:5000/api/'

async function getFlaskUsers() {
    var response = await fetch(`${flaskOnly}users/`)
    var data = await response.json()
    console.log("flask users: ", data.users[0])
    d = data.users
    for (var i = 0; i < d.length; i++) {
        // console.log(d)
        var node = document.createElement('div')
        var h2Name = document.createElement('h2')
        var h2User = document.createElement('h2')
        var h4 = document.createElement('h4')
        var namelable = document.createTextNode('Name: ')
        var fname = document.createTextNode(d[i].firstName)
        var userlable = document.createTextNode("Username: ")
        var user = document.createTextNode(d[i].username)
        var app = document.createTextNode(d[i].app)
        var appLable = document.createTextNode("Created in: ")
        h2Name.appendChild(namelable)
        h2Name.appendChild(fname)
        h2User.appendChild(userlable)
        h2User.appendChild(user)
        h4.appendChild(appLable)
        h4.appendChild(app)
        node.appendChild(h2Name)
        node.appendChild(h2User)
        node.appendChild(h4)
        document.getElementById('theFlaskUsers').appendChild(node)
    }
}

async function getFlaskImgs() {
    var response = await fetch(`${flaskOnly}imgs/`)
    var data = await response.json()
    console.log("flask imgs: ", data.imgs)
    d = data.imgs
    for (var i = 0; i < d.length; i++) {
        // console.log(d)
        var node = document.createElement('div')
        var img = new Image()
        var h2 = document.createElement('h2')
        var h3 = document.createElement('h3')
        var h4 = document.createElement('h4')
        var name = document.createTextNode(d[i].name)
        var username = document.createTextNode(d[i].user)
        var userLabel = document.createTextNode("Added by: ")
        var app = document.createTextNode(d[i].app)
        var appLable = document.createTextNode("Created in: ")
        // console.log(name)
        img.src = `${d[i].imgUrl}`
        img.alt = `${d[i].name}`
        h2.appendChild(name)
        h3.appendChild(userLabel)
        h3.appendChild(username)
        h4.appendChild(appLable)
        h4.appendChild(app)
        node.appendChild(img)
        node.appendChild(h2)
        node.appendChild(h3)
        node.appendChild(h4)
        document.getElementById('theFlaskImgs').appendChild(node)
    }
}
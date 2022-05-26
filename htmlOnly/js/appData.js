// var flaskOnly = 'http://127.0.0.1:5000/api/'
// var djangoOnly = 'http://127.0.0.1:8000/api/'
var flaskOnly = 'https://flask-only.dojo-ninja.com/api/'
var djangoOnly = 'https://django-only.dojo-ninja.com/api/'
var origApp = 'https://dojofun.navyladyveteran.com/api/'
// var origApp = 'http://127.0.0.1:5000/api/'

allUsers = []
allImages = []
allTemps = []

async function getUsers() {
    var flaskRes = await fetch(`${flaskOnly}users/`)
    var djangoRes = await fetch(`${djangoOnly}users/`)
    var origRes = await fetch(`${origApp}users/`)
    // console.log("r from django", djangoRes)
    var djangoData = await djangoRes.json()
    var flaskData = await flaskRes.json()
    var origData = await origRes.json()
    // console.log("flask users: ", flaskData.users[0])
    // console.log("Django Users:", djangoData)
    console.log("Orig User Data: ", origData)
    for (var i=0; i < flaskData.users.length; i++) {
        allUsers.push(flaskData.users[i])
    }
    for (var i=0; i < djangoData.length; i++) {
        allUsers.push(djangoData[i])
    }
    for (var i=0; i < origData.users.length; i++) {
        allUsers.push(origData.users[i])
    }
    // console.log("allUsers after push:", allUsers)
    d = allUsers
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
        document.getElementById('allTheUsers').appendChild(node)
    }
}

async function getImgs() {
    var flaskRes = await fetch(`${flaskOnly}imgs/`)
    var djangoRes = await fetch(`${djangoOnly}imgs/`)
    var origRes = await fetch(`${origApp}imgs/`)
    var flaskData = await flaskRes.json()
    var djangoData = await djangoRes.json()
    var origData = await origRes.json()
    // console.log("flask imgs: ", data.imgs)
    console.log("Orig Img Data: ", origData)
    for (var i=0; i < flaskData.imgs.length; i++) {
        allImages.push(flaskData.imgs[i])
    }
    for (var i=0; i < djangoData.length; i++) {
        allImages.push(djangoData[i])
    }
    for (var i=0; i < origData.imgs.length; i++) {
        allImages.push(origData.imgs[i])
    }
    // console.log("all images after push: ", allImages)
    d = allImages
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
        document.getElementById('allTheImgs').appendChild(node)
    }
}

async function getTemps() {
    var origRes = await fetch(`${origApp}weather/`)
    var origData = await origRes.json()
    console.log("Weather Data: ", origData)
    for (var i = 0; i < origData.temps.length; i++) {
        allTemps.push(origData.temps[i])
    }
    var d = allTemps
    var node = document.createElement('table')
    var trHead = document.createElement('tr')
    var th01 = document.createElement('th')
    var th02 = document.createElement('th')
    var th03 = document.createElement('th')
    var th04 = document.createElement('th')
    var th05 = document.createElement('th')
    var th06 = document.createElement('th')
    var thName = document.createTextNode('User')
    var thApp = document.createTextNode('App')
    var thTemp = document.createTextNode('Temp')
    var thConditions = document.createTextNode('Conditions')
    var thDate = document.createTextNode('Date Logged')
    var thCity = document.createTextNode('City')
    th01.appendChild(thName)
    th02.appendChild(thCity)
    th03.appendChild(thConditions)
    th04.appendChild(thTemp)
    th05.appendChild(thDate)
    th06.appendChild(thApp)
    trHead.appendChild(th01)
    trHead.appendChild(th02)
    trHead.appendChild(th03)
    trHead.appendChild(th04)
    trHead.appendChild(th05)
    trHead.appendChild(th06)
    node.appendChild(trHead)
    for (var i = 0; i < d.length; i++) {
        var trData = document.createElement('tr')
        var td01 = document.createElement('td')
        var td02 = document.createElement('td')
        var td03 = document.createElement('td')
        var td04 = document.createElement('td')
        var td05 = document.createElement('td')
        var td06 = document.createElement('td')
        var tdName = document.createTextNode(d[i].user)
        var tdApp = document.createTextNode(d[i].app)
        var tdTemp = document.createTextNode(d[i].temp)
        var tdConditions = document.createTextNode(d[i].conditions)
        var tdDate = document.createTextNode(d[i].date)
        var tdCity = document.createTextNode(d[i].city)
        td01.appendChild(tdName)
        td02.appendChild(tdCity)
        td03.appendChild(tdConditions)
        td04.appendChild(tdTemp)
        td05.appendChild(tdDate)
        td06.appendChild(tdApp)
        trData.appendChild(td01)
        trData.appendChild(td02)
        trData.appendChild(td03)
        trData.appendChild(td04)
        trData.appendChild(td05)
        trData.appendChild(td06)
        node.appendChild(trData)
    }
    document.getElementById('allTheTemps').appendChild(node)
}
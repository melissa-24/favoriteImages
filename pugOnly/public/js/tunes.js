var toons = 'https://dojo.navyladyveteran.com/characters/'
// var squish = 'https://dojo.navyladyveteran.com/squishies/'

async function getTunes() {
    var response = await fetch(`${toons}`)
    var data = await response.json()
    console.log("full tune api data:", data)
    for (var i = 0; i < data.length; i++) {
       // console.log(data[i])
        var node = document.createElement('div')
        var h2 = document.createElement('h2')
        var h3 = document.createElement('h3')
        var img = new Image()
        img.src = `${data[i].img}`
        img.alt = `${data[i].name}`
        var name = document.createTextNode(data[i].name)
        h2.appendChild(name)
        var birth = document.createTextNode(data[i].birthDay)
        h3.appendChild(birth)
        node.appendChild(h2)
        node.appendChild(h3)
        node.appendChild(img)
        document.getElementById('tune').appendChild(node)
    }
}
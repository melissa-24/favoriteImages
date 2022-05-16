// var nasa = keys.NASAKEY
var toons = 'https://dojo.navyladyveteran.com/characters/'
var squish = 'https://dojo.navyladyveteran.com/squishies/'


$(document).ready(function(){
    $('#image').click(function(){
        console.log('button clicked')
        $('#images').animate( {
            width: 'toggle'
        })
    })

    // nasaurl = `https://api.nasa.gov/planetary/apod?api_key=${nasa}`

    // $.get(nasaurl, function(res) {
    //     console.log(res)
    //     var html_str = ""
    //     html_str +="<img id='img' src='" + res.url + "' alt='Nasa Photo'>"
    //     $(".photo").html(html_str)
    //     // html_str +="<form action='/images/create/' method='post'> <input type='hidden' name='name' value='" + res.title +"'><input type='hidden' name='img' value='" + res.url +"'> <button>Save Img to Database</button></form>"
    //     // $(".photo").html(html_str)
    // }, 'json')
    $('#button').click(function(){
        console.log('button clicked')
        alert("API disabled while deployed vie github pages to keep api key hidden")
        $('#img').animate( {
            width: 'toggle'
        })
    })
    $.get(toons, function(res) {
        console.log(res)
    })
})

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
var nasa = keys.NASAKEY

var dataName = ''
var dataImg = ''

$(document).ready(function() {
    nasaurl = `https://api.nasa.gov/planetary/apod?api_key=${nasa}`

    $.get(nasaurl, function(res) {
        console.log(res)
        console.log("pre change",dataName)
        dataName = res.title
        dataImg = res.url
        var html_str = ""
        html_str +="<img id='img' src='" + res.url + "' alt='Nasa Photo'>"
        $(".photo").html(html_str)
        console.log("post change", dataName)
        var form_str = ""
        form_str += "<input type='hidden' name='name' value='" + res.title +"'><input type='hidden' name='img' value='" + res.url +"'> <button>Save Img to Database</button>"
        $(".nasaForm").html(form_str)
    }, 'json')
    
})

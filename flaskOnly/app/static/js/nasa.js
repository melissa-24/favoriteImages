var nasa = keys.NASAKEY

$(document).ready(function() {
    nasaurl = `https://api.nasa.gov/planetary/apod?api_key=${nasa}`

    $.get(nasaurl, function(res) {
        console.log(res)
        var html_str = ""
        html_str +="<img id='img' src='" + res.url + "' alt='Nasa Photo'>"
        $(".photo").html(html_str)
        var form_str
        form_str +="<input type='hidden' name='name' value='" + res.title +"'><input type='hidden' name='img' value='" + res.url +"'> <button>Save Img to Database</button>"
        $(".nasaForm").html(form_str)
    }, 'json')
})
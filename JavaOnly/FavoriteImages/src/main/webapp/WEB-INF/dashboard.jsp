<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!-- for forms -->
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix = "fmt" uri = "http://java.sun.com/jsp/jstl/fmt" %>
<!-- for validation -->
<%@ page isErrorPage="true" %>


<!DOCTYPE html>
<html>
<head>
<!-- Bootstrap CSS -->
<!-- <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css"> -->
<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
<!-- My CSS -->
<link rel='stylesheet' href='/css/styles.css'>
<!-- JS for Bootstrap / jQuery -->
<script src='/webjars/jquery/jquery.min.js'></script>
<!-- <script src='/webjars/bootstrap/js/boostrap.min.js'></script> -->
<!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
<!-- My JS -->
<script type = "text/javascript" src='/js/scripts.js'></script>
<meta charset="UTF-8">
<title>Favorite Images</title>
</head>
<body>
	<header>
		<h1>Favorite Images App</h1>
		<nav>
			<a href="https://dojo-ninja.com" target="_blank">Main Site</a>
			<a href="/dashboard/">Dashboard</a>
	        <a href="/images/nasa/">Nasa</a>
	        <a href="/images/looneyToones">Looney Toones</a>
	        <a href="/users/">Other User Logs</a>
	        <a href="/logout/">Logout</a>
		</nav>
	</header>
	<main>
		<h1>Welcome ${ user.fullName() }</h1>
        <div class="row">
<!--             <button><a href="/images/add/">Add Images</a></button>
            <button><a href="/profile/">View/Edit your information</a></button> -->
        </div>
        <button id="image">Show your Images</button>
        <div class="row">
            <div id="images">
                <div class="row">
                	<c:forEach items="${ allImgs }" var="img">
                		<div class="column">
                			<img src="${ img.img }" alt="${ img.name }" />
                			<h4>${ img.name }</h4>
               			</div>
                	</c:forEach>
                </div>
            </div>
        </div>
	</main>
	<footer>
	
	</footer>
</body>
</html>
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
		<h1>Welcome to our Favorite Images App</h1>
        <h2>The Java Only Full Stack Version</h2>
		<nav>
			<a href="https://dojo-ninja.com" target="_blank">Main Site</a>
		</nav>
	</header>
	<main>
		<div class="theRow">
				<form:form action="/register" method="POST" modelAttribute="newUser">
					<section>
						<form:label path="firstName">First Name</form:label>
						<form:input type="text" class="input" path="firstName" />
						<form:errors path="firstName" class="text-warning" />
					</section>
					<section>
						<form:label path="lastName">Last Name</form:label>
						<form:input class="input" path="lastName" />
						<form:errors type="text" path="lastName" class="text-warning" />
					</section>
					<section>
						<form:label path="email">Email</form:label>
						<form:input type="email" class="input" path="email" />
						<form:errors path="email" class="text-warning" />
					</section>
					<section>
						<form:label path="username">Username</form:label>
						<form:input type="text" class="input" path="username" />
						<form:errors path="username" class="text-warning" />
					</section>
					<section>
						<form:label path="password">Password</form:label>
						<form:input type="password" class="input" path="password" />
						<form:errors path="password" class="text-warning" />
					</section>
					<section>
						<form:label path="confirm">Confirm Password</form:label>
						<form:input type="password" class="input" path="confirm" />
						<form:errors path="confirm" class="text-warning" />
					</section>
					<button>Register and Login</button>
				</form:form>
				<form:form action="/login" method="POST" modelAttribute="newLogin">
					<section>
						<form:label path="email">Email</form:label>
						<form:input type="email" class="input" path="email" />
						<form:errors path="email" class="text-danger" />
					</section>
					<section>
						<form:label path="password">Password</form:label>
						<form:input type="password" class="input" path="password" />
						<form:errors path="password" class="text-danger" />
					</section>
					<button>Login</button>
				</form:form>
		</div>
	</main>
	<footer>
	
	</footer>
</body>
</html>
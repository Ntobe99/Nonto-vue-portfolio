<template>
	<div class="form">
    <form action="https://formspree.io/f/xvononpq"
    method="POST">
    <ul class="flex-outer">
			<li>
				<label for="name">Name</label>
				<input type="text" id="first-name" placeholder="Enter your name here" required>
			</li>
			<li>
				<label for="Surname">Surname</label>
				<input type="text" id="last-name" placeholder="Enter your  Surname here" required>
			</li>
			<li>
				<label for="email">Email</label>
				<input type="email" id="email" placeholder="Enter your email here" required>
			</li>
			
			<li>
				<label for="message">Message</label>
				<textarea id="message" placeholder="Enter your message here"></textarea>
			</li>
            <li>
				<button type="submit">Submit</button>
			</li>
            </ul>
            </form>
		</div>
    

    </template>
<script>


   

    
</script>

<style  scoped>
.form{
	margin-left: 300px;
	margin-bottom: 20px;
	padding: 0;
	align-items: center !important;;
}
form {
	margin-top: 210px;
	max-width: 900px;
	background-color: white;
	padding: 40px;
	
}

ul {
	padding: 0;
}

.flex-outer li
 {
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-flex-wrap: wrap;
	-ms-flex-wrap: wrap;
	flex-wrap: wrap;
	-webkit-box-align: center;
	-webkit-align-items: center;
	-ms-flex-align: center;
	align-items: center;
}

.flex-outer>li>label,
.flex-outer li p {
	-webkit-box-flex: 1;
	-webkit-flex: 1 0 120px;
	-ms-flex: 1 0 120px;
	flex: 1 0 120px;
	max-width: 220px;
}

.flex-outer>li>label +*
 {
	-webkit-box-flex: 1;
	-webkit-flex: 1 0 220px;
	-ms-flex: 1 0 220px;
	flex: 1 0 220px;
}

.flex-outer li {
	padding: 10px;
}

.flex-outer li input,
.flex-outer li textarea {
	padding: 10px;
}

.flex-outer li button {
	margin-left: auto;
	padding: 8px 16px;
	border: black;
    border-radius:30px;
	background-color: #333;
	color: #f2f2f2;
	text-transform: uppercase;
	letter-spacing: .09em;
	border-radius: 2px;
	-webkit-transition: .5s box-shadow;
	transition: .5s box-shadow;
}

.flex-outer li button:hover {
	box-shadow: 0px 0px 75px black;
}


input,
textarea {
	border: none;
	background: #f2f2f2;
}
@media screen and (max-width: 850px) {
  form {
    grid-template-columns: 1fr;
    margin: 0px;
    padding-top: auto;
	width: 90%;
  }
}



</style>
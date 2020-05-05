<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" import="studentSurvey_swe642.DataBean" import = "studentSurvey_swe642.StudentBean" %>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>You Win</title>
<link rel="stylesheet" href="style.css">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inconsolata">
<script type="text/javascript" src="index.js"></script>
</head>
<body>
<header>
    <nav>
        <div class="flex">
            <div>
                <img src="image/biglogo.jpg" alt="GMULogo" id="bigLogo">
            </div>
            <div id="headline">
                <h2>Department of</h2>
                <h1>COMPUTER SCIENCE</h1>
            </div>
            <div id="button">
                <button id="surveyButton"><a href="../hw1/index.html">Back to CS Department</a></button>
            </div>
        </div>
    </nav>
</header>
<div id="surveyPage"></div>
<div id="surveyTitle">
    <h1 class="bigSurvey" id="congrats" >CONGRATULATIONS!</h1>
    <h4>You are the winner of 2(two) movie tickets!!</h4>   
</div>
<br>
<br>
<div class="dataPresent">
	<h4>Your data has been saved.</h4>
	<br>
	<br>
	<h4>Here is the calculation result of 10 numbers you've entered.</h4>
	<br>
	<div>The Mean of the Numbers is </div>
	<div>${dBean.mean}</div>
	<div>The Standard Deviation is </div>
	<div>${dBean.standDev}</div>
</div>
<div class="student_id">
	<h4>Student Survey List</h4>
	<ul>
		<c:forEach var="student" items = "${students}">
			<li>
				<a href="student.jsp?ID=${student.studentID}" name = "id">${student.studentID}</a>
			</li>
        	
    	</c:forEach>
	</ul>
</div>

 
  
</body>
</html>
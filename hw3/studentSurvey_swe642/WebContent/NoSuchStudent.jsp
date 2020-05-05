<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" import = "studentSurvey_swe642.StudentBean"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>No Such Student</title>
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
    <h1 class="bigSurvey" id="thank">Error!</h1>
    <h4>No student matching the StudentID </h4>   
</div>
<footer class="footer">
    <div>
    	<div id="groupMember">
            <div>Group Member: Hsin-Ping Hsu</div>
            <div>Group Member: Yuxi Miao</div>
        </div>
    </div>
    <div id="footNode">
        <p>Department of Computer Science</p>
        <p>Nguyen Engineering Building</p>
        <p>4400 University Drive</p>
        <p>Fairfax, VA 22030</p>
    </div>
    <div id="footerLogo">
        <a href="https://www2.gmu.edu/"><img src="image/biglogo.jpg" height="150" alt="GMUlogo"></a>
    </div>
</footer> 

</body>
</html>
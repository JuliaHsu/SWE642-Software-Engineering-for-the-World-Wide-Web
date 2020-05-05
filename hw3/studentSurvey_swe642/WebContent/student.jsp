<%@ page language="java" contentType="text/html; charset=UTF-8" import="java.util.*"  import= "java.text.SimpleDateFormat"
    pageEncoding="UTF-8" import = "studentSurvey_swe642.StudentBean"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>CS Department Survey</title>
<link rel="stylesheet" href="style.css">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inconsolata">
<script type="text/javascript" src="index.js"></script>
</head>
<body>
	<%! String id=""; %>
	<%! int stdID = 0; %>
	<%! String fullName, streetAdd, city, state, zip, phone, email, url, hearFrom, recommend, feedback, todayDate, gradMonth, gradYear; %>
	<%! String[] likeMost = new String[6]; %>
	<%! List<Integer> idList = new ArrayList<Integer>(); %>
	
	<% id =request.getParameter("ID");%>
	
	
	<%
	ArrayList<StudentBean> students = (ArrayList<StudentBean>)request.getSession().getAttribute("students"); 
	
	for(StudentBean s: students){
		idList.add(s.getStudentID());
	}
	//to handle the situation of no such student
	if(!idList.contains(Integer.parseInt(id))){
		response.sendRedirect("NoSuchStudent.jsp");
	}
	
	for(StudentBean s: students){
		if(s.getStudentID() == Integer.parseInt(id)){
			stdID = s.getStudentID();
			fullName = s.getFullName();
			streetAdd = s.getStreetAdd();
			city = s.getCity();
			state = s.getState();
			zip = s.getZip();
			phone = s.getPhone();
			email = s.getEmail();
			url = s.getUrl();
			hearFrom = s.getHearFrom();
            recommend = s.getRecommend();
           	feedback = s.getFeedback();
			likeMost = s.getLikeMost();
            SimpleDateFormat dateFormat=new SimpleDateFormat("yyyy-MM-dd");  
            todayDate = dateFormat.format(s.getTodayDate());
            gradMonth = s.getGradMonth();
            gradYear = s.getGradYear();
		%>
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
    <h1 class="bigSurvey" id="thank">Information</h1>
    <h4>Please see detailed information for id# <%= stdID %></h4>   
</div>
<br>
<br>
	<div id="studentDisplay">
			<ul id="studentInfo">
				<li class="studentItem">Student ID: <%= stdID %></li>
				<li class="studentItem">Full Name: <%= fullName %></li>
				<li class="studentItem">Street Address: <%= streetAdd %></li>
				<li class="studentItem">City: <%= city %></li>
				<li class="studentItem">State: <%= state %></li>
				<li class="studentItem">Zip Code: <%= zip %></li>
				<li class="studentItem">Phone Number: <%= phone %></li>
				<li class="studentItem">Email Address: <%= email %></li>
				<li class="studentItem">URL: <a href = "<%= url %>"><%= url %></a></li>
				<li class="studentItem">Heard us from: <%= hearFrom %></li>
				<li class="studentItem">Would recommend: <%= recommend %></li>
				<li class="studentItem">Feedback: <%= feedback %></li>
				<li class="studentItem">What do you like most about the campus?
				<% for(String like: likeMost){%>
					<ul>
						<li><%= like %>
					</ul>
				<%} %>
				</li>
				<li class="studentItem">Today's Date: <%= todayDate %></li>
				<li class="studentItem">High school graduation time: <%= gradMonth %>, <%= gradYear %></li>
			</ul>
	</div>
		<% }
	}
	%>
	
	
	<%-- <c:forEach var="student" items = "${students}">
		<li>${student.studentID}
		</li>
	</c:forEach> --%>
  
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
### SWE 642: Assignment 3 Servlet, JSPs, MVC & Database I/O

#### Group Member:
1. Hsin-Ping Hsu (G01167652)
2. Yuxi Miao (G01226012)

#### Connect to the GMU VPN
* To access the GMU Oracle Database, please make sure to connect to the GMU VPN 

#### Access Student Survey Form
<http://localhost:8080/studentSurvey_swe642/index.html>

#### Tomcat Server
* To run the dynamic web project, please configure Tomcat 9.0 to your IDE

#### War file and Additional Packages 
* studentSurvey_swe642.war
* All additional packages are stored at: studentSurvey_swe642/WebContent/WEB-INF/lib/
* Packages that we used
	1. ojdbc8.jar
	2. taglibs-standard-impl-1.2.5.jar
	3. taglibs-standard-spec-1.2.5.jar

#### Survey form
* Student ID: must be integer
* If the student enters an ID that exists in the database, the system will update all the student information and answer of the survey to the database

#### Acknowledgement JSP
* SimpleAcknowdedgement JSP (thank.jsp):  
	1. Thanks the user for completing the survey
	2. Shows the mean and standard deviation
	3. Displays an unordered list of hyperlinks of all students who have submitted the survey with their IDs 
* WinnerAcknowdedgement JSP (win.jsp):
	1. Announces that the user is a raffle winner of two movie tickets
	2. Shows the mean and standard deviation
	3. Display an unordered list of hyperlinks of all students who have submitted the survey with their IDs

#### Student JSP
* Displays all student information in a read only format

#### No Such Student JSP
* Informs the user that no student was found with matching StudentID






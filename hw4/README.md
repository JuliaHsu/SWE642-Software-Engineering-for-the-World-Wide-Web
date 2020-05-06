### SWE 642 Assignment4 Angular 8, RESTful Web Services, and JPA

#### Group Member:
1. Hsin-Ping Hsu (G01167652)
2. Yuxi Miao (G01226012)

### Introduction:
* In this assignment, we built the Restful Web Services with JPA on Eclipse EE, and the front end with Angular 8 

* In surveyAngular, there are 4 main components: Form, Result, show-survey-list and survey-details and one studentSurvey interface service

* In RestfulWS, there are one entity class: studentSurvey.java and one resource class: studentSurveyResource.java

* All the survey inforamtion are stored at GMU Oracle Database

### To Run the Project:

##### Connect to the GMU VPN
* To access the GMU Oracle Database, please make sure to connect to the GMU VPN 

##### Access Student Survey Form (frontend)
* To verify node.js and npm are properly installed, 
  run node -v to check node.js version,
  then run mpn -v to check npm version.
* To install the Angular CLI globally, please run npm install -g @angular/cli
* To access the student survey form on your local machine, please run ng serve --open, and access the survey form at:
<http://localhost:4200/>

##### Restful web service (backend)
* The Restful web service is built in Eclipse EE IDE.
* Please install and run the program on Tomcat 9.0 server.
* The server is located at <http://localhost:8080/RestfulWS/>

##### War file and Additional Packages 
* RestfulWS.war
* All additional packages are saved at: RestfulWS/WebContent/WEB-INF/lib/



##### Other
* Student ID: must be integer








package studentSurvey_swe642;

import java.io.IOException;
import java.io.PrintWriter;
import java.math.BigDecimal;
import java.sql.SQLException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebServlet("/new")
public class NewServlet extends HttpServlet {
	
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
		
		//get the client input from the data column in student survey form
		String data = request.getParameter("data");
		String[] strArr = data.split(",");
		//set the 10 input numbers in an array of int 
		int[] arr = new int[strArr.length];
		for(int i = 0 ; i < strArr.length ; i++){
		   arr[i] = Integer.parseInt(strArr[i]);
		}
		// do the calculation
		DataProcessor dp = new DataProcessor();
		dp.calculate(arr);

		
		//create a DataBean to store the calculation result of mean and standDev
		DataBean dBean = new DataBean();
	
		dBean.setMean(dp.mean);
		dBean.setStandDev(dp.standDev); 
		
		//store bean to a request object
		request.setAttribute("dBean", dBean);
		
		// save student survey form
		String fullName = request.getParameter("name");
		int studentID = Integer.parseInt(request.getParameter("studentId"));
		String streetAdd = request.getParameter("streetAdd");
		String city = request.getParameter("city");
		String state = request.getParameter("state");
		String zip = request.getParameter("zip_code");
		String phone = request.getParameter("phone_num");
		String email = request.getParameter("email");
		String url = request.getParameter("url");
		String hearFrom = request.getParameter("howBecomeInterested");
		String recommend = request.getParameter("likely");
		String feedback = request.getParameter("message");
		String likeMost[]=request.getParameterValues("likeMost"); 
		String date = request.getParameter("date");
		SimpleDateFormat dateFormat=new SimpleDateFormat("yyyy-MM-dd");  
		Date todayDate= new Date();
		try {
			todayDate=dateFormat.parse(date);
		} catch (ParseException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
	    String gradMonth = request.getParameter("DOBMonth");
	    String gradYear = request.getParameter("graduationYear");

		StudentBean student = new StudentBean(studentID, fullName, streetAdd, city, state, zip, phone, email, url, hearFrom, recommend, feedback, likeMost
				,todayDate, gradMonth, gradYear);
		int status = StudentDAO.saveStudentSurvey(student);
//		System.out.println("status: "+ status);
		
//		System.out.println("get student list");
		if(status>=0){
			ArrayList<StudentBean> students = new ArrayList<StudentBean>();
			try {
				// get list of students' ids
//				System.out.println("get student survey: ");
				students = StudentDAO.getStudentSurvey();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			HttpSession session = request.getSession();
			session.setAttribute("students", students);
			
			//if mean is greater or equal to 90, go to the win page
			if(dp.mean.compareTo(new BigDecimal(90)) >= 0 ) {
				RequestDispatcher rd1 = request.getRequestDispatcher("win.jsp");
				rd1.forward(request, response);
			}
			//otherwise go to the regular thank you page
		
			RequestDispatcher rd2 = request.getRequestDispatcher("thank.jsp");
			rd2.forward(request, response);
			
			RequestDispatcher rd3 = request.getRequestDispatcher("student.jsp");
			rd3.forward(request, response);

		}
		else{
			System.out.println("falied to saved student survey!");
		}
		
		
		
		
		
		
	}
}

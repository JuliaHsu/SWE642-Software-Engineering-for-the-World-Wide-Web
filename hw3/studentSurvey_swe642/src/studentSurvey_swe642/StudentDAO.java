package studentSurvey_swe642;
import java.sql.*;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;

public class StudentDAO {
	
	public static int saveStudentSurvey(StudentBean student){
		int status = 0;
		Connection conn  = null;
		String sqlUpdate = "UPDATE STUDENTSURVEY SET FULL_NAME = ?, STREET_ADD = ?, CITY = ? , STATE = ?, ZIP = ?, PHONE = ?, EMAIL = ?, URL = ?, HEARFROM = ?, RECOMMEND = ?, FEEDBACK = ?, LIKEMOST = ? , TODAYDATE = ?, GRADMONTH= ?, GRADYEAR = ? WHERE STUDENT_ID = ?";
		String sqlInsert= "INSERT INTO STUDENTSURVEY"+"(STUDENT_ID, FULL_NAME, STREET_ADD, CITY, STATE, ZIP, PHONE, EMAIL, URL,HEARFROM,RECOMMEND,FEEDBACK, LIKEMOST, TODAYDATE, GRADMONTH, GRADYEAR)" + "VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
		String sqlCheckID = "SELECT * FROM STUDENTSURVEY WHERE STUDENT_ID=?";
		try {
			// register JDBC driver
            Class.forName("oracle.jdbc.driver.OracleDriver");
//            System.out.println("registered successfully!");
            conn = DriverManager.getConnection("jdbc:oracle:thin:@artemis.vsnet.gmu.edu:1521/vse18c.vsnet.gmu.edu","hhsu2","ugloogla");
           // drop table
//            Statement stmt = conn.createStatement();
//    	    String sqlDrop = "DROP TABLE STUDENTSURVEY ";
//    	    stmt.executeUpdate(sqlDrop);
    	    
            try{
            	String sqlCreateTable  = "CREATE TABLE STUDENTSURVEY "+
						"(STUDENT_ID INTEGER NOT NULL, "+
						"FULL_NAME VARCHAR(255), "+
						"STREET_ADD VARCHAR(255), "+
						"CITY VARCHAR(32), "+
						"STATE VARCHAR(32), "+
						"ZIP VARCHAR(10), " +
						"PHONE VARCHAR(16), "+
						"EMAIL VARCHAR(255), "+
						"URL VARCHAR(255), "+
						"HEARFROM VARCHAR(64), "+
						"RECOMMEND VARCHAR(32), "+
						"FEEDBACK VARCHAR(255), "+
						"LIKEMOST VARCHAR(255), "+
						"TODAYDATE VARCHAR(32), "+
						"GRADMONTH VARCHAR(32), "+
						"GRADYEAR VARCHAR(32))";
				PreparedStatement preStmt = conn.prepareStatement(sqlCreateTable);
				preStmt.executeUpdate();
//				System.out.println("Created table in given database...");
				//sqlInsert = "INSERT INTO STUDENTSURVEY"+"(STUDENT_ID, FULL_NAME, STREET_ADD, CITY, STATE, ZIP, PHONE, EMAIL, URL, LIKEMOST)" + "VALUES(?,?,?,?,?,?,?,?,?,?)";
            } //end try create table
            catch(SQLException e){
            	if(e.getErrorCode( ) ==  955){
//            		System.out.println("table exists");
            		//sqlInsert = "INSERT INTO STUDENTSURVEY"+"(STUDENT_ID, FULL_NAME, STREET_ADD, CITY, STATE, ZIP, PHONE, EMAIL, URL)" + "VALUES(?,?,?,?,?,?,?,?,?)";  
            	}
            	else{
            		System.err.format("SQL State: %s\n%s", e.getErrorCode(), e.getMessage());
            	}
            }// end catch create table
            try{
            	int stdID  = student.getStudentID();
            	
            	PreparedStatement preStmt2 = conn.prepareStatement(sqlCheckID);
            	String[] likeMostCheckedArr;
            	String likeMostChecked="";
            	SimpleDateFormat dateFormat=new SimpleDateFormat("yyyy-MM-dd"); 
            	preStmt2.setInt(1,stdID);
            	ResultSet rs = preStmt2.executeQuery();
            	if(rs.next()){
            		preStmt2.close();
                	preStmt2 = conn.prepareStatement(sqlUpdate);
                	preStmt2.setInt(16, stdID);
                	
                    preStmt2.setString(1, student.getFullName());
                    preStmt2.setString(2, student.getStreetAdd());
                    preStmt2.setString(3, student.getCity());
                    preStmt2.setString(4, student.getState());
                    preStmt2.setString(5, student.getZip());
                    preStmt2.setString(6, student.getPhone());
                    preStmt2.setString(7, student.getEmail());
                    preStmt2.setString(8, student.getUrl());
                    preStmt2.setString(9, student.getHearFrom());
                    preStmt2.setString(10, student.getRecommend());
                    preStmt2.setString(11, student.getFeedback());
                    	
                    likeMostCheckedArr = student.getLikeMost();
                    likeMostChecked="";
                    for (int i = 0;i< likeMostCheckedArr.length;i++){
                    	likeMostChecked+=likeMostCheckedArr[i] +",";
                    }
                    preStmt2.setString(12,likeMostChecked);
                    preStmt2.setString(13, dateFormat.format(student.getTodayDate()));
                    preStmt2.setString(14, student.getGradMonth());
                    preStmt2.setString(15, student.getGradYear());
        
                    status = preStmt2.executeUpdate();  
//                    PreparedStatement preStmt3 = conn.prepareStatement("SELECT * FROM STUDENTSURVEY ");
//                    ResultSet rs3 = preStmt3.executeQuery();
//                    rs3.next();
//                    System.out.println("update: " + rs3.getString("TODAYDATE"));
            	} // end if

            	else{
            		preStmt2.close();
                	preStmt2 = conn.prepareStatement(sqlInsert);
                    preStmt2.setInt(1, student.getStudentID());
                    preStmt2.setString(2, student.getFullName());
                    preStmt2.setString(3, student.getStreetAdd());
                    preStmt2.setString(4, student.getCity());
                    preStmt2.setString(5, student.getState());
                    preStmt2.setString(6, student.getZip());
                    preStmt2.setString(7, student.getPhone());
                    preStmt2.setString(8, student.getEmail());
                    preStmt2.setString(9, student.getUrl());
                    preStmt2.setString(10, student.getHearFrom());
                    preStmt2.setString(11, student.getRecommend());
                    preStmt2.setString(12, student.getFeedback());
                    likeMostCheckedArr = student.getLikeMost();
                    likeMostChecked="";
                    for (int i = 0;i< likeMostCheckedArr.length;i++){
                    	likeMostChecked+=likeMostCheckedArr[i] +",";
                    }
                    preStmt2.setString(13,likeMostChecked); 
                    preStmt2.setString(14, dateFormat.format(student.getTodayDate()));
                    preStmt2.setString(15, student.getGradMonth());
                    preStmt2.setString(16, student.getGradYear());
                    status = preStmt2.executeUpdate();  
                } // end else
            	try{
        			preStmt2.close();
        		}// end try preStmt2.close()
        		catch (SQLException e){
        	        System.err.format("SQL State: %s\n%s", e.getSQLState(), e.getMessage());
        	    }// end preStmt2.close()
            	
            }// end try select dup id
            catch (SQLException e){
            	System.err.format("SQL State: %s\n%s", e.getSQLState(), e.getMessage());
            }// end select dup id
            
        } // end try register driver
		catch (SQLException e) {
			
			System.err.format("SQL State: %s\n%s", e.getSQLState(), e.getMessage());
        	
        } //end catch
        catch (Exception e) {
        	e.printStackTrace();
        } // end catch
		try{
			if(conn != null){
				conn.close();
			}
		}
		catch (SQLException e){
	        System.err.format("SQL State: %s\n%s", e.getSQLState(), e.getMessage());
	    }
		
		return status;
	}
	
	
	public static ArrayList<StudentBean> getStudentSurvey() throws SQLException{
		Connection conn = null;
		Statement stmt = null;
		
		try{
			Class.forName("oracle.jdbc.driver.OracleDriver");
            conn = DriverManager.getConnection("jdbc:oracle:thin:@artemis.vsnet.gmu.edu:1521/vse18c.vsnet.gmu.edu","hhsu2","ugloogla");
            stmt = conn.createStatement();
		}
		catch (SQLException e) {
        	System.err.format("SQL State: %s\n%s", e.getSQLState(), e.getMessage());
        }
        catch (Exception e) {
        	e.printStackTrace();
        }
		ArrayList<StudentBean> studentsArr = new ArrayList<StudentBean>();
		
		String sqlString = "SELECT * FROM STUDENTSURVEY ";
		ResultSet res = stmt.executeQuery(sqlString);
		
		while(res.next()){
			StudentBean s = new StudentBean();
			s.setStudentID(res.getInt("STUDENT_ID"));
			s.setFullName(res.getString("FULL_NAME"));
			s.setStreetAdd(res.getString("STREET_ADD"));
			s.setCity(res.getString("CITY"));
			s.setState(res.getString("STATE"));
			s.setZip(res.getString("ZIP"));
			s.setPhone(res.getString("PHONE"));
			s.setEmail(res.getString("EMAIL"));
			s.setUrl(res.getString("URL"));
			s.setHearFrom(res.getString("HEARFROM"));
			s.setRecommend(res.getString("RECOMMEND"));
			s.setFeedbcak(res.getString("FEEDBACK"));
			String likeMostChecked  = res.getString("LIKEMOST");
			String[] likeMostCheckedArr = likeMostChecked.split(",");
			s.setLikeMost(likeMostCheckedArr);      
			SimpleDateFormat dateFormat=new SimpleDateFormat("yyyy-MM-dd");  
			Date todayDate= new Date();
			String date = res.getString("TODAYDATE");
			try {
				todayDate=dateFormat.parse(date);
			} catch (ParseException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}
			s.setTodayDate(todayDate);
			s.setGradMonth(res.getString("GRADMONTH"));
			s.setGradYear(res.getString("GRADYEAR"));
			studentsArr.add(s);
			
		}
		
		return studentsArr;
	}

}

package studentSurvey_swe642;
import java.util.ArrayList;
import java.util.Date;
public class StudentBean {
	private String fullName, streetAdd, city, state, zip, phone, email, url, hearFrom,recommend, feedback, gradMonth, gradYear;
	private int studentID;
	private Date todayDate = new Date();
	private String[] likeMost = new String[6];

	
	public StudentBean( int studentID,String fullName, String streetAdd, String city, String state, String zip,
			String phone, String email, String url,String hearFrom, String recommend, String feedback, String[] likeMost
			,Date todayDate, String gradMonth, String gradYear){
		this.studentID = studentID;
		this.fullName = fullName;
		this.streetAdd = streetAdd;
		this.city = city;
		this.state = state;
		this.zip = zip;
		this.phone = phone;
		this.email = email;
		this.url = url;
		this.hearFrom = hearFrom;
		this.recommend = recommend;
		this.feedback = feedback;
		this.likeMost = likeMost;
		this.todayDate = todayDate;
		this.gradMonth = gradMonth;
		this.gradYear = gradYear;
		
	}
	
	public StudentBean() {
		// TODO Auto-generated constructor stub
	}

	public void setStudentID(int studentID){
		this.studentID = studentID;
	}
	
	public int getStudentID(){
		return this.studentID;
	}
	
	public void setFullName(String fullName){
		this.fullName  = fullName;
	}
	public String getFullName(){
		return this.fullName;
	}
	
	public void setStreetAdd(String streetAdd){
		this.streetAdd = streetAdd;
	}
	public String getStreetAdd(){
		return this.streetAdd;
	}
	
	public void setState(String state){
		this.state = state;
	}
	public String getState(){
		return this.state;
	}
	
	public void setCity(String city){
		this.city = city;
	}
	public String getCity(){
		return this.city;
	}
	
	public void setZip(String zip){
		this.zip = zip;
	}
	public String getZip(){
		return this.zip;
	}
	
	public void setPhone(String phone){
		this.phone = phone;
	}
	public String getPhone(){
		return this.phone;
	}

	public void setEmail(String email){
		this.email = email;
	}
	public String getEmail(){
		return this.email;
	}
	
	public void setUrl(String url){
		this.url = url;
	}
	public String getUrl(){
		return this.url;
	}
	
	public void setHearFrom(String hearFrom){
		this.hearFrom = hearFrom;
	}
	public String getHearFrom(){
		return this.hearFrom;
	}
	
	public void setRecommend(String recommend){
		this.recommend = recommend;
	}
	public String getRecommend(){
		return this.recommend;
	}
	
	public void setFeedbcak(String feedback){
		this.feedback = feedback;
	}
	public String getFeedback(){
		return this.feedback;
	}
	
	public void setLikeMost(String[] likeMost){
		this.likeMost = likeMost;
	}
	
	public String[] getLikeMost(){
		return this.likeMost;
	}
	
	public void setTodayDate(Date date){
		this.todayDate = date;
	}
	public Date getTodayDate(){
		return this.todayDate;
	}
	
	public void setGradMonth(String month){
		this.gradMonth = month;
	}
	public String getGradMonth(){
		return this.gradMonth;
	}
	
	public void setGradYear(String year){
		this.gradYear = year;
	}
	public String getGradYear(){
		return this.gradYear;
	}
	

	
}

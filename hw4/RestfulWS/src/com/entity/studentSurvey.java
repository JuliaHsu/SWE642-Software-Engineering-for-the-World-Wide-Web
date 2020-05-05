package com.entity;
import java.io.Serializable;
import java.io.StringWriter;
import java.math.BigDecimal;

import javax.ws.rs.*;
import javax.xml.bind.annotation.XmlRootElement;
import javax.persistence.*;
import javax.xml.bind.JAXB;
import java.util.Date;


@Entity
@Table(name = "studentSurvey")
// XmlRootElement allowing conversion between Java and XML
@XmlRootElement
@NamedQueries({
	@NamedQuery(name="studentSurvey.findAll",query="SELECT s FROM studentSurvey s")
//	@NamedQuery(name="Survey.findAddress",query="SELECT s FROM SUR_TBL WHERE s.address=:address") 
})
public class studentSurvey implements Serializable{
	private static final long serialVersionUID = 1L;
    @Id
    @Basic (optional = false)
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    @Column(name = "SURVEY_ID", updatable = false, nullable = false)
////    @GeneratedValue
//    private BigDecimal SURVEY_ID;
//	private Long surveyId;
//    public void setSurveuId(Long surveyId){
//    	this.surveyId = surveyId;
//    }
//    public Long getSurveyId(){
//    	return surveyId;
//    }
	@Column(name = "STUDENT_ID",length=32, nullable = false)
	private String studentId;
	public void setStudentId(String studentId) {
		this.studentId = studentId;
	}
	public String getStudentId() {
		return studentId;
	}
	@Column(name="FULL_NAME",length=255,nullable=false)
	private String fullName;
	public void setFullName(String s) {
		this.fullName = s;
	}
	public String getFullName() {
		return fullName;
	}
	
	
	@Column(name="STREET_ADD",length=255 ,nullable=false)
	private String address;
	public void setAddress(String s) {
		this.address = s;
	}
	public String getAddress() {
		return address;
	}

	@Column(name="CITY",length=255 ,nullable=false)
	private String city;
	public void setCity(String s) {
		this.city = s;
	}
	public String getCity() {
		return city;
	}

	@Column(name="STATE",length=255 ,nullable=false)
	private String state;
	public void setState(String s) {
		this.state = s;
	}
	public String getState() {
		return state;
	}
	
	@Column(name="ZIP",length=255 ,nullable=false)
	private String zip;
	public void setZip(String s) {
		this.zip = s;
	}
	public String getZip() {
		return zip;
	}
	
	
	@Column(name="PHONE",length=255 ,nullable=false)
	private String phone;
	public void setPhone(String s) {
		this.phone = s;
	}
	public String getPhone() {
		return phone;
	}

	@Column(name="EMAIL",length=255 ,nullable=false)
	private String email;
	public void setEmail(String s) {
		this.email = s;
	}
	public String getEmail() {
		return this.email;
	}

	@Column(name="URL",length=255 ,nullable=false)
	private String url;
	public void setUrl(String s) {
		this.url = s;
	}
	public String getUrl() {
		return this.url;
	}
	
	@Column(name="HEARFROM",length=64 ,nullable=false)
	private String hearFrom;
	public void setHearFrom(String s) {
		this.hearFrom = s;
	}
	public String getHearFrom() {
		return this.hearFrom;
	}
	
	@Column(name="RECOMMEND",length=32 ,nullable=false)
	private String recommend;
	public void setRecommend(String s) {
		this.recommend = s;
	}
	public String getRecommend() {
		return this.recommend;
	}
	
	@Column(name="FEEDBACK",length=255 ,nullable=false)
	private String feedback;
	public void setFeedback(String s) {
		this.feedback = s;
	}
	public String getFeedback() {
		return this.feedback;
	}
	
	@Column(name="LIKEMOST",length=255 ,nullable=false)
	private String likeMost;
	public void setLikeMost(String s) {
		this.likeMost = s;
	}
	public String getLikeMost() {
		return this.likeMost;
	}
	
	@Column(name="TODAYDATE",length=32 ,nullable=false)
	private String todayDate;
	public void setTodayDate(String date) {
		this.todayDate = date;
	}
	public String getTodayDate() {
		return this.todayDate;
	}
	
	@Column(name="GRADMONTH",length=32 ,nullable=false)
	private String gradMonth;
	public void setGradMonth(String month) {
		this.gradMonth = month;
	}
	public String getGradMonth() {
		return this.gradMonth;
	}
	
	@Column(name="GRADYEAR",length=32 ,nullable=false)
	private String gradYear;
	public void setGradYear(String year) {
		this.gradYear = year;
	}
	public String getGradYear() {
		return this.gradYear;
	}
	
	
	@Override 
	public int hashCode(){
		int hash = 0;
		hash += (studentId!=null? studentId.hashCode():0);
		return hash;
	}
	
	
	
	


	
}

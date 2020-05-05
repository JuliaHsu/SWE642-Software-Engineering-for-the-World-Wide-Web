package studentSurvey_swe642;

import java.math.BigDecimal;

public class DataBean {
	
	private BigDecimal mean;
	private BigDecimal standDev;
	
	public DataBean  () {
		super();
	}
	
	public BigDecimal getMean() {
		return mean;
	}
	public void setMean(BigDecimal mean) {
		this.mean = mean;
	}
	public BigDecimal getStandDev() {
		return standDev;
	}
	public void setStandDev(BigDecimal standDev) {
		this.standDev = standDev;
	}
	
	
}

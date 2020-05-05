package studentSurvey_swe642;

import java.math.BigDecimal;

public class DataProcessor {
	BigDecimal mean = null;
	BigDecimal standDev = null;
	
	public void calculate(int[] arr) {
		int sum = 0;
		for(int number : arr) {
			sum = sum + number;
		}
		mean = new BigDecimal(sum).divide(new BigDecimal(arr.length));
		
		int sum2 = 0;
		for(int num : arr) {
			sum2 = (int) (sum2 + Math.pow((num - mean.intValue()), 2));
		}
		standDev = new BigDecimal(Math.sqrt(sum2 / arr.length));
	}
	

}

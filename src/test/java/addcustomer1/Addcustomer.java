package addcustomer1;

import java.util.List;
import java.util.Map;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;
import junit.framework.Assert;

public class Addcustomer {
	public static void main(String[] args) {

	}

	public static WebDriver driver;

	@Given("launch and direct to url")
	public void launch_and_direct_to_url() {

		System.setProperty("webdriver.chrome.driver",
				"D:\\software\\eclipse\\sudharsan\\addcustomer\\drivers\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("http://demo.guru99.com/telecom/index.html");

		// throw new cucumber.api.PendingException();
	}

	@When("click the add customer")
	public void click_the_add_customer() {
		driver.findElement(By.xpath("//a[text()='Add Customer'][1]")).click();
		// throw new cucumber.api.PendingException();
	}

	/*@When("enter the details and submit")
	public void enter_the_details_and_submit() {
		driver.findElement(By.xpath("//label[text()='Done']")).click();
		driver.findElement(By.id("fname")).sendKeys("saravana");
		driver.findElement(By.id("lname")).sendKeys("saravana");
		driver.findElement(By.name("emailid")).sendKeys("saravana.@dei.com");
		driver.findElement(By.xpath("//textarea[@id='message']")).sendKeys("dhbvhsdb");
		driver.findElement(By.name("telephoneno")).sendKeys("787465541");
		driver.findElement(By.name("submit")).click();
		
		// throw new cucumber.api.PendingException();
	}
*/
//	@When("enter the details and submitt")
//	public void enter_the_details_and_submitt(DataTable dataTable1) {
//List<List<String>> cusdetails = dataTable1.asLists();
//		driver.findElement(By.xpath("//label[text()='Done']")).click();
//		driver.findElement(By.id("fname")).sendKeys(cusdetails.get(0).get(0));
//		driver.findElement(By.id("lname")).sendKeys(cusdetails.get(1).get(1));
//		driver.findElement(By.name("emailid")).sendKeys(cusdetails.get(1).get(2));
//		driver.findElement(By.xpath("//textarea[@id='message']")).sendKeys(cusdetails.get(0).get(3));
//		driver.findElement(By.name("telephoneno")).sendKeys(cusdetails.get(0).get(4));
//		driver.findElement(By.name("submit")).click();
//		
//	}
//	
	@When("enter the details and submit")
	public void enter_the_details_and_submit(DataTable dataTable) {
		 List<Map<String, String>> cusdetails = dataTable.asMaps(String.class, String.class);
		driver.findElement(By.xpath("//label[text()='Done']")).click();
		driver.findElement(By.id("fname")).sendKeys(cusdetails.get(0).get("fname"));
		driver.findElement(By.id("lname")).sendKeys(cusdetails.get(1).get("lname"));
		driver.findElement(By.name("emailid")).sendKeys(cusdetails.get(1).get("email"));
		
		driver.findElement(By.xpath("//textarea[@id='message']")).sendKeys(cusdetails.get(0).get("add"));
		driver.findElement(By.name("telephoneno")).sendKeys(cusdetails.get(0).get("pho"));
		driver.findElement(By.name("submit")).click();
		
	    	}


	 

	@Then("generate a id")
	public void generate_a_id() {
		Assert.assertTrue(driver.getCurrentUrl(), true);
		driver.findElement(By.tagName("h3"));
		// throw new cucumber.api.PendingException();
	}

}

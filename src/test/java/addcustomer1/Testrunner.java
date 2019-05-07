package addcustomer1;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources/",glue= {"addcustomer1"},plugin= {"html:target"})
public class Testrunner {
	

}

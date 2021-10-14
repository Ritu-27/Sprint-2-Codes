package TestRunner;



import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="src/test/java/Features"
		,glue= {"StepDefination","Hooks2"},
		dryRun = false,
		monochrome = true,
		tags= {"~@activetestcase" },
		//tags= {"~@Sanity"}, //single tag
		//tags= {"@Smoke" , "@Regression"}, //And condition
	    //tags= {"@Smoke , @Regression"}, // or condition
	   // tags= {"~@Smoke"}, //skip tag
		
	 plugin = {"pretty" , "html:target/cucumber-pretty" , "json:target/jsonreport.json" , "junit:target/report.xml"}
		)

public class testrunner {
	

}

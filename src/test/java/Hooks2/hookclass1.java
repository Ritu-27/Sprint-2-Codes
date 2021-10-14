package Hooks2;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class hookclass1 {
public static WebDriver driver;
	
	
	@Before
	public void initialization()
	{
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\HP\\Documents\\CapgeminiJSworkspace\\Capgemini-Day1\\driver\\chromedriver.exe");
		 driver = new ChromeDriver();
		driver.get("http://uniformm1.upskills.in/admin");
	
	}
	
	@After
	public void closedriver()
	{
		System.out.println("Bowser is closing now");
		driver.quit();
	}




}

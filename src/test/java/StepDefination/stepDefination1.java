package StepDefination;

import java.util.List;
import java.util.NoSuchElementException;


import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.RemoteWebElement;

import Hooks2.hookclass1;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class stepDefination1 {
	WebDriver driver = hookclass1.driver;
	
	@Given("Admin is on login page of uniformstore application")
	public void admin_is_on_login_page_of_uniformstore_application() {
		try {
		
		
		String expectedtext2 = "Administration";
		String actualtext2 = driver.getTitle();	
		Assert.assertEquals(expectedtext2, actualtext2);
		System.out.println(actualtext2);
		}
		catch(Exception e) {
			System.out.println("Not on the login page"+e);
	    	Assert.fail();
		}
	}

	@When("Admin enters the username and password")
	public void admin_enters_the_username_and_password() {
		try {
			driver.findElement(By.xpath("//*[@id='input-username']")).sendKeys("admin");
			Thread.sleep(2000);
			driver.findElement(By.xpath("//*[@id='input-password']")).sendKeys("admin@123");
			Thread.sleep(2000);
			System.out.println("Entered Username and Password");
		}
		catch(Exception e) {
			System.out.println("Not able to enter the username and password"+e);
	    	Assert.fail();
		}
	    
	}

	@When("Clicks on login button")
	public void clicks_on_login_button() {
	    try {
	    	driver.findElement(By.xpath("//button[@type='submit']")).click();
	    	System.out.println("Clicked on login button");
	    }
	    catch(Exception e) {
			System.out.println("Not able to click on the login button"+e);
	    	Assert.fail();
		}
	     
	}

	@Then("Admin navigates to the dashboard page of the uniformstore")
	public void admin_navigates_to_the_dashboard_page_of_the_uniformstore() {
		try {
	  // Assert.assertTrue(driver.findElement(By.xpath("//*[@id=\"content\"]/div[1]/div/h1")).isDisplayed());
			//Boolean Display = driver.findElement(By.xpath("//*[@id=\"content\"]/div[1]/div/h1")).isDisplayed();
	   //System.out.println("Element displayed is :"+Display);
			
			String actualtext5 = driver.findElement(By.xpath("//*[@id='content']/div[1]/div/h1")).getText();
			String expectedtext5 = "Dashboard";
			Assert.assertEquals(actualtext5, expectedtext5);
			System.out.println(driver.getTitle());
			
	    
		}
		catch(Exception e) {
			System.out.println("Not able to navigate to the Dashboard page"+e);
	    	Assert.fail();
		}
	     
	}

	@When("Admin clicks on the Catalog option")
	public void admin_clicks_on_the_Catalog_option() {
	    try {
	    	//driver.findElement(By.xpath("//*[@id=\"catalog\"]/a/span")).click();
	    	driver.findElement(By.id("button-menu")).click();
            System.out.println("Menu Bar");
            Thread.sleep(3000);
            driver.findElement(By.xpath("//span[text()='Catalog']")).click();
            Thread.sleep(3000);
            System.out.println("Catalog");
	    }
	    catch(Exception e) {
			System.out.println("Not able to click on the Catalog"+e);
	    	Assert.fail();
		}
	     
	}

	@Then("Admin clicks on the Manufacturers option")
	public void admin_clicks_on_the_Manufacturers_option() {
		try {
		driver.findElement(By.xpath("//a[text()='Manufacturers']/..")).click();
		System.out.println("Clicked on the Manufacturers option");
		}
		catch(Exception e) {
			System.out.println("Not able to click on the Manufacturers"+e);
	    	Assert.fail();
		}
	}

	@Then("Admin navigates to the Manufacturers page")
	public void admin_navigates_to_the_Manufacturers_page() {
	    try {
	    	//Boolean Display = driver.findElement(By.xpath("//*[@id=\"content\"]/div[1]/div/h1")).isDisplayed();
	 	   //System.out.println("Element displayed is :"+Display);
	    	String actualtext6 = driver.findElement(By.xpath("//*[@id='content']/div[1]/div/h1")).getText();
			String expectedtext6 = "Manufacturers";
			Assert.assertEquals(actualtext6, expectedtext6);
			System.out.println("Admin is on the:" + driver.getTitle());
	    	
	    }
	    catch(Exception e) {
			System.out.println("Not able to navigate to the Manufacturers page"+e);
	    	Assert.fail();
	    }
	}

	//ADD NEW Button Verification
	@Given("Admin is on the Manufacturers page")
	public void admin_is_on_the_Manufacturers_page() {
		try {
	    	//Boolean Display = driver.findElement(By.xpath("//*[@id=\"content\"]/div[1]/div/h1")).isDisplayed();
	 	   //System.out.println("Element displayed is :"+Display);
			String actualtext7 = driver.findElement(By.xpath("//*[@id='content']/div[1]/div/h1")).getText();
			String expectedtext7 = "Manufacturers";
			Assert.assertEquals(actualtext7, expectedtext7);
			System.out.println(driver.getTitle());
	    }
	    catch(Exception e) {
			System.out.println("Not on the Manufacturers page"+e);
	    	Assert.fail();
	    }
	}

	@When("Admin clicks on the Add New button")
	public void admin_clicks_on_the_Add_New_button() {
	    try {
	    	driver.findElement(By.xpath("//i[@class='fa fa-plus']")).click();
	    	System.out.println("Clicked on the Add New button");
	    }
	    catch(Exception e) {
			System.out.println("Not able to click on the Add New button"+e);
	    	Assert.fail();
	    }
	}

	@Then("Admin navigates to the Add Manufacturers page")
	public void admin_navigates_to_the_Add_Manufacturers_page() {
	   try {
		  
		   
		   String actualtext15 = driver.findElement(By.xpath("//*[@id='content']/div[2]/div/div[1]/h3")).getText();
			String expectedtext15 = "Add Manufacturer";
			Assert.assertEquals(actualtext15, expectedtext15);
			System.out.println("Admin is on the:" + actualtext15);
		   
	   }
	   catch(Exception e) {
			System.out.println("Not able to navigate to the Add Manufacturers page"+e);
	    	Assert.fail();
	    }
	}

	@When("Admin enters the {string} in the Manufacturers name field")
	public void admin_enters_the_in_the_Manufacturers_name_field(String name) {
	    try {
	    	driver.findElement(By.xpath("//input[@name='name']")).sendKeys(name);
	    	Thread.sleep(1000);
	    	System.out.println("Entered name");
	    }
	    catch(Exception e) {
			System.out.println("Not able to enter the name"+e);
	    	Assert.fail();
	    }
	    
	}

	@When("checks that Stores field is default checked or not")
	public void checks_that_Stores_field_is_default_checked_or_not() {
	    try {
	    	boolean result = driver.findElement(By.xpath("//input[@type='checkbox']")).isSelected();
	    	if (result)
	    		{
	    			System.out.println("Checkbox is default checked");
	    		
	    		}
	    		else
	    			System.out.println("Checkbox is default not checked");
	    }
	    catch(Exception e) {
			System.out.println("Checkbox is default not checked"+e);
	    	Assert.fail();
	    }
	    
	}

	@When("enters the {string} in the sort order field")
	public void enters_the_in_the_sort_order_field(String sort) {
	    try {
	    	driver.findElement(By.xpath("//input[@name='sort_order']")).sendKeys(sort);
	    	Thread.sleep(1000);
	    	System.out.println("Entered Sort Order"); 
	    }
	    catch(Exception e) {
			System.out.println("Not able to enter the sort order"+e);
	    	//Assert.fail();
	    }
	}

	@When("clicks on the Save button")
	public void clicks_on_the_Save_button() {
	    try {
	    	driver.findElement(By.xpath("//i[@class='fa fa-save']")).click();
	    	 System.out.println("Clicked on Save Button"); 
	    }
	    catch(Exception e) {
			System.out.println("Not able to click on the save button"+e);
	    	Assert.fail();
	    }
	}

	@Then("Admin will able to see the validationmessage")
	public void admin_will_able_to_see_the_validationmessage() {
	   
		  
		   
		   try {
			  // WebElement element = driver.findElement(By.xpath("//*[contains(text(),'Success')]"));
			   
			   //boolean flag = driver.findElement(By.xpath("//*[contains(text(),'Success')]")).isDisplayed();
			  // System.out.println(flag);
		  if(isDisplayed())
		  {
			   System.out.println("Valid Message");
		  }
		 
		  else 
		  {
			  String actualtext14 = driver.findElement(By.xpath("//div[@class='text-danger']")).getText();
   			System.out.println(actualtext14);
   			
		  }
		   }
		
	   
		
		
	   catch(Exception e) {
			System.out.println(e);
	   Assert.fail();
	    }
	}
		   public boolean isDisplayed() {
		        try {
		        	WebElement element = driver.findElement(By.xpath("//*[contains(text(),'Success')]"));
		        	boolean flag = element.isDisplayed();
		        	return flag;
		        	
		            
		        } catch (Exception e) {
		            return false;
		        }
		    
		
	}
	
	
	@When("Admin clicks on the Image field")
	public void admin_clicks_on_the_Image_field() {
		try {
			Thread.sleep(2000);
		driver.findElement(By.xpath("//*[@id='thumb-image']/img")).click(); 
		Thread.sleep(2000);
		System.out.println("Clicked on the Image field");
		}
		catch(Exception e) {
			System.out.println("Not able to click on the Image field"+e);
	    	Assert.fail();
	    }
	}

	@When("clicks on the Edit icon")
	public void clicks_on_the_Edit_icon() {
	    try {
	    	driver.findElement(By.xpath("//*[@id='button-image']")).click();
	    	Thread.sleep(2000);
	    	System.out.println("Clicked on the Edit Icon");
	    }
	    catch(Exception e) {
			System.out.println("Not able to click on the Image field"+e);
	    	Assert.fail();
	    }
	}

	@Then("Admin navigates to the Image Manager page")
	public void admin_navigates_to_the_Image_Manager_page() {          //h4[@class='modal-title']
		try {
			String actualtext9 = driver.findElement(By.xpath("//*[@id='modal-image']/div/div/div[1]/h4")).getText();
			String expectedtext9 = "Image Manager";
			Assert.assertEquals(actualtext9, expectedtext9);
			System.out.println("Admin is on the:" + actualtext9);
		   
	   }
	   catch(Exception e) {
			System.out.println("Not able to navigate to the Image Manager page"+e);
	    	Assert.fail();
	    
		}
			
		
	}

	@Then("clicks on the Refresh button")
	public void clicks_on_the_Refresh_button() {
	    try {
	    	driver.findElement(By.xpath("//*[@id='button-refresh']/i")).click();
	    	Thread.sleep(2000);
	    	System.out.println("Clicked on the Refresh button");
	    }
	    catch(Exception e) {
			System.out.println("Not able to click on the Image field"+e);
	    	Assert.fail();
	}
	}
	
	@When("Admin clicks on the New Folder icon")
	public void admin_clicks_on_the_New_Folder_icon() {
		 try {
		    	driver.findElement(By.xpath("//*[@id='button-folder']/i")).click();
		    	Thread.sleep(2000);
		    	System.out.println("Clicked on the New Folder icon");
		    }
		 catch(Exception e) {
				System.out.println("Not able to click on the New Folder icon"+e);
		    	Assert.fail();
		}
	}

	@When("Enters the foldername {string}")
	public void enters_the_foldername(String name1) {
		try {
			driver.findElement(By.xpath("//*[@name='folder']")).sendKeys(name1);
	    	Thread.sleep(1000);
	    	System.out.println("Entered the Folder Name");
		}
		 catch(Exception e) {
				System.out.println("Not able to enter the folder name"+e);
		    	Assert.fail();
		}
	}

	@When("Clicks on the Add icon")
	public void clicks_on_the_Add_icon() {
	   try {
		   driver.findElement(By.xpath("//*[@id='button-create']/i")).click();
	    	Thread.sleep(2000);
	    	System.out.println("Clicked on the Add icon");
	   }
	   catch(Exception e) {
			System.out.println("Not able to click on the add icon"+e);
	    	Assert.fail();
	}
	}

	@Then("Admin accepts the alert")
	public void admin_accepts_the_alert() {
		try {
		Alert alert1=driver.switchTo().alert();
		String message1=alert1.getText();
		System.out.println(message1);
		Thread.sleep(5000);
		alert1.accept();
		System.out.println("Accepted the alert");
		}
		catch(Exception e) {
			System.out.println("Not able to accept the alert"+e);
	    	Assert.fail();
	}
	}

	@When("Admin enters the foldername or imagename {string} in the search field")
	public void admin_enters_the_foldername_or_imagename_in_the_search_field(String name1) {
		try {
			Thread.sleep(3000);
			driver.findElement(By.xpath("//*[@name='search']")).sendKeys(name1);
	    	//Thread.sleep(3000);
	    	System.out.println("Entered the folder or image name in the Search field");
		}
		catch(Exception e) {
			System.out.println("Not able to enter the folder name"+e);
	    	Assert.fail();
	}
	    
	}
	@When("clicks on the search icon")
	public void clicks_on_the_search_icon() {
	
	    try {
	    	Thread.sleep(2000);
	    	driver.findElement(By.xpath("//*[@id='button-search']")).click();
	    	Thread.sleep(2000);
	    	System.out.println("Clicked on the Search icon");
	    }
	    catch(Exception e) {
			System.out.println("Not able to click on the search icon"+e);
	    	Assert.fail();
	}
	}
	
	@Then("Admin able to see the searched folder or image on the page")
	public void admin_able_to_see_the_searched_folder_or_image_on_the_page() {
	   try {
		 boolean display1 = driver.findElement(By.xpath("//*[@id='modal-image']/div/div/div[2]/div[2]/div/label")).isDisplayed();
		
		 if(display1)
		 {
			 System.out.println("Able to see the searched folder on the image page");	 
		 }
		
	   }
		 catch(Exception e) {
				System.out.println("Not able to see the searched folder or image on the page"+e);
		    	Assert.fail();
		}
	   
	}

	@Then("clicks on the Parent button to return to the parent page")
	public void clicks_on_the_Parent_button_to_return_to_the_parent_page() {
	   try {
		   driver.findElement(By.xpath("//*[@id='button-parent']/i")).click();
	    	Thread.sleep(1000); 
	    	System.out.println("Clicked on the Parent button");
	   }
	   catch(Exception e) {
			System.out.println("Not able to click on the search icon"+e);
	    	Assert.fail();
	} 
	}

	@When("Admin selects the foldername or imagename")
	public void admin_selects_the_foldername_or_imagename() {
		try {
		//driver.findElement(By.xpath("//input[@value='catalog/Gloves']")).click();	
		//Thread.sleep(1000); 
		driver.findElement(By.xpath("//*[@id='modal-image']/div/div/div[2]/div[2]/div[2]/label")).click();
		Thread.sleep(1000); 
		System.out.println("Selected the folder name");
	}
		 catch(Exception e) {
				System.out.println("Not able to select the foldername or imagename"+e);
		    	Assert.fail();
		} 
	}
	

	@When("clicks on Delete button")
	public void clicks_on_Delete_button() {
		try {
			driver.findElement(By.xpath("//*[@id='button-delete']/i")).click();
			Thread.sleep(1000); 
			System.out.println("Clicked on the Delete button");
		}
			 catch(Exception e) {
					System.out.println("Not able to click on Delete button"+e);
			    	Assert.fail();
			} 
	    
	}
	
	@When("accepts the alert")
	public void accepts_the_alert1() {
		try {
			Alert alert=driver.switchTo().alert();
			String message=alert.getText();
			System.out.println(message);
			Thread.sleep(2000);
			alert.accept();
			System.out.println("Accepted the first alert");
			
			
			}
			catch(Exception e) {
				System.out.println("Not able to accept the alert"+e);
		    	Assert.fail();
		}
	    
	}
	
	@Then("Admin Again accepts the success alert")
	public void admin_Again_accepts_the_success_alert() {
		try {
			Thread.sleep(4000);
			Alert alert2=driver.switchTo().alert();
			String message2=alert2.getText();
			System.out.println(message2);
			Thread.sleep(2000);
			alert2.accept();
			System.out.println("Accepted second alert");
			
			}
			catch(Exception e) {
				System.out.println("Not able to accept the alert"+e);
		    	Assert.fail();
		}
		}
	    


	
// Pagination 
	@When("Admin checks for the pagination")
	public void admin_checks_for_the_pagination() {
		try {
			Thread.sleep(5000);
		
			
			List<WebElement> pagination6 =driver.findElements(By.xpath("//*[@id='modal-image']/div/div/div[3]/ul"));
		if(pagination6.size()>0)
		{
			System.out.println("Pagination Exists");	
		}
		
		
		
		}
		catch(Exception e) {
			System.out.println("Pagination does not exists"+e);
	    	Assert.fail();
	    }
	}

	@When("Clicks on the forward arrow of pagination")
	public void clicks_on_the_forward_arrow_of_pagination() {
		try {
			driver.findElement(By.xpath("//*[@id='modal-image']/div/div/div[3]/ul/li[3]/a")).click();
			Thread.sleep(5000);
			System.out.println("Clicked on the forward arrow");
		
		}
		catch(Exception e) {
			System.out.println("Not able to click on the forward arrow"+e);
	    	Assert.fail();
	    }	  
	}

	@Then("Admin navigates to the next page of the Image Manager")
	public void admin_navigates_to_the_next_page_of_the_Image_Manager() {
		try {
			boolean pagination11 = driver.findElement(By.xpath("//*[@id='modal-image']/div/div/div[3]/ul/li[4]/span")).isDisplayed(); 
			if(pagination11)
			{
			System.out.println("Navigated to the next page");
			}
		}
		
			catch(Exception e) {
				System.out.println("Not able to navigate to the next page"+e);
		    	Assert.fail();
		    }	
		    
	}

	@Then("Clicks on the backward arrow of pagination")
	public void clicks_on_the_backward_arrow_of_pagination() {
		try {
			driver.findElement(By.xpath("//*[@id='modal-image']/div/div/div[3]/ul/li[2]/a")).click();
			Thread.sleep(5000);
			System.out.println("Clicked on the backward arrow");
		}

			catch(Exception e) {
				System.out.println("Not able to click on the backward arrow"+e);
		    	Assert.fail();
		    }	  
	}

	@Then("Admin navigates to the previous page of the Image Manager")
	public void admin_navigates_to_the_previous_page_of_the_Image_Manager() {
try {
			
			boolean pagination10 = driver.findElement(By.xpath("//*[@id='modal-image']/div/div/div[3]/ul/li[1]/span")).isDisplayed(); 
			if(pagination10)
			{
			System.out.println("Navigated to the previous page");
			}
			
			}
			catch(Exception e) {
				System.out.println("Not able to navigate to the previous page"+e);
		    	Assert.fail();
		    }	   
	}


	

	@When("Admin clicks on the Manufacturers name heading")
	public void admin_clicks_on_the_Manufacturers_name_heading() {
		try {
			Thread.sleep(5000);
			driver.findElement(By.xpath("//*[@id='form-manufacturer']/div/table/thead/tr/td[2]/a")).click();
			System.out.println("Clicked on the Manufacturers name heading");
			
			}
			 catch(Exception e) {
					System.out.println("Not able to click on the Manufacturers name heading"+e);
			    	Assert.fail();
			} 
	 
	}

	@Then("Names should be arranges in descending order")  ////a[@class='asc'] //td[text()='xyz1']
	public void names_should_be_arranges_in_descending_order1() throws InterruptedException {
		try {
	   String expected1 = "Zwxy";
	   
	   String actual1 = driver.findElement(By.xpath("//*[@id='form-manufacturer']/div/table/tbody/tr[1]/td[2]")).getText();
	  Assert.assertEquals(expected1, actual1);
	  
	   System.out.println("The text is: "+actual1);
	   System.out.println("Arranged in descending order");
		}
		
		
	  
	  
		catch(Exception e) {
			System.out.println("Not arranged in descending order"+e);
	    	Assert.fail();
	} 

	}

	@Then("Again clicks on the Manufacturers name heading")
	public void again_clicks_on_the_Manufacturers_name_heading() {
		try {
			Thread.sleep(5000);
			driver.findElement(By.xpath("//*[@id='form-manufacturer']/div/table/thead/tr/td[2]/a")).click();
			System.out.println("Again clicked on the Manufacturers name heading");
			
			}
			 catch(Exception e) {
					System.out.println("Not able to click on the Manufacturers name heading"+e);
			    	Assert.fail();
			} 

	}

	@Then("Names should be arranges in ascending order")    ////a[@class='desc'] ////td[text()='abc']
	public void names_should_be_arranges_in_ascending_order() {
		try {
			   String expected2 = "123";
			   
			   String actual2 = driver.findElement(By.xpath("//*[@id='form-manufacturer']/div/table/tbody/tr[1]/td[2]")).getText();
			  Assert.assertEquals(expected2, actual2);
			  
			   System.out.println("The text is: "+actual2);
			   System.out.println("Arranged in ascending order");
				}
				
			
				catch(Exception e) {
					System.out.println("Not arranged in ascending order"+e);//*[@id=\"form-manufacturer\"]/div/table/tbody/tr[1]/td[2]
			    	Assert.fail();
			} 
	}

	@When("Admin clicks Sort Order heading")
	public void admin_clicks_Sort_Order_heading() {
		try {
		Thread.sleep(5000);
		driver.findElement(By.xpath("//*[@id='form-manufacturer']/div/table/thead/tr/td[3]/a")).click();
		System.out.println("Clicked on the Sort Order heading");
		//Thread.sleep(1000);
		}
		 catch(Exception e) {
				System.out.println("Not able to click on the Sort Order heading"+e);
		    	Assert.fail();
		}   
	}

	@Then("Order should be arranges in descending order")   ////a[@class='asc']
	public void order_should_be_arranges_in_descending_order1() {
		try {
			  
			   
			   String actualval1 = driver.findElement(By.xpath("//*[@id='form-manufacturer']/div/table/tbody/tr[1]/td[3]")).getText();
			   int actualval2 = Integer.parseInt(actualval1);
			   String actualval3 = driver.findElement(By.xpath("//*[@id='form-manufacturer']/div/table/tbody/tr[2]/td[3]")).getText();
			   int actualval4 = Integer.parseInt(actualval3);
			  if(actualval2>=actualval4)
			  {
			  
			   System.out.println(" Sort Order is arranged in descending order");
				}
		}
				
				
				
				catch(Exception e) {
					System.out.println("Not arranged in descending order"+e);//*[@id=\"form-manufacturer\"]/div/table/tbody/tr[1]/td[2]
			    	Assert.fail();
			} 
	}

	@Then("Again clicks on the Sort Order heading")
	public void again_clicks_on_the_Sort_Order_heading() {
		try {
			Thread.sleep(5000);
			driver.findElement(By.xpath("//*[@id='form-manufacturer']/div/table/thead/tr/td[3]/a")).click();
			System.out.println("Again clicked on the Sort Order heading");
			//Thread.sleep(1000);
			}
			 catch(Exception e) {
					System.out.println("Not able to click on the Sort Order heading"+e);
			    	Assert.fail();
			}   
	}

	@Then("Order should be arranges in ascending order")    //a[@class='desc']
	public void order_should_be_arranges_in_ascending_order() {
		try {
			   String actualval5 = driver.findElement(By.xpath("//*[@id='form-manufacturer']/div/table/tbody/tr[1]/td[3]")).getText();
			   int actualval6 = Integer.parseInt(actualval5);
			   
			   String actualval7 = driver.findElement(By.xpath("//*[@id='form-manufacturer']/div/table/tbody/tr[2]/td[3]")).getText();
			   int actualval8 = Integer.parseInt(actualval7);
			   if(actualval6<=actualval8)
			   {
				   System.out.println("Sort order is arranged in ascending order");  
			   }
			 
				}
				
				
				catch(Exception e) {
					System.out.println("Not arranged in ascending order"+e);
			    	Assert.fail();
			} 
	}

	//Edit Button & Save Button
	@When("Admin clicks on the Edit icon")
	public void admin_clicks_on_the_Edit_icon() {
		try {
		driver.findElement(By.xpath("//*[@id='form-manufacturer']/div/table/tbody/tr[2]/td[4]/a/i")).click();
		Thread.sleep(2000);
		System.out.println("Clicked on the Edit icon");
		}
		 catch(Exception e) {
				System.out.println("Not able to click on edit icon"+e);
		    	Assert.fail();
		}   
	}
	@Then("Admin navigates to the Edit Manufacturers page")
	public void admin_navigates_to_the_Edit_Manufacturers_page() {
	   try {
		   String actualtext20 = driver.findElement(By.xpath("//*[@id='content']/div[2]/div/div[1]/h3")).getText();
			String expectedtext20 = "Edit Manufacturer";
			Assert.assertEquals(actualtext20, expectedtext20);
			System.out.println("Admin is on the:" + actualtext20);
		   
	   }
	   catch(Exception e) {
			System.out.println("Not able to navigate to the Edit Manufacturers page"+e);
	    	Assert.fail();
	    } 
	   }
	


	@When("Admin modifies the {string},{string}")
	public void admin_modifies_the(String name, String sortorder) {
	    try {
	    	driver.findElement(By.xpath("//*[@id='input-name']")).clear();
	    	Thread.sleep(2000);
	    	driver.findElement(By.xpath("//*[@id='input-name']")).sendKeys(name);
	    	Thread.sleep(2000);
	    	driver.findElement(By.xpath("//*[@id='input-sort-order']")).clear();
	    	Thread.sleep(2000);
	    	driver.findElement(By.xpath("//*[@id='input-sort-order']")).sendKeys(sortorder);
	    	System.out.println("Entered the data");
	    }
	    catch(Exception e) {
			System.out.println("Not able to modify the fields"+e);
	    	Assert.fail();
	}   
	}

	

	@When("Clicks on the Save button")
	public void clicks_on_the_Save_button1() {
		try {
			Thread.sleep(3000);
	    	driver.findElement(By.xpath("//i[@class='fa fa-save']")).click();
	    	 System.out.println("Clicked on Save Button"); 
	    }
	    catch(Exception e) {
			System.out.println("Not able to click on the save button"+e);
	    	Assert.fail();
	    }
		   
	   
	}
	
	//Cancel Button
	@When("Clicks on the cancel button")
	public void clicks_on_the_cancel_button() {
		try {
	    	driver.findElement(By.xpath("//*[@id='content']/div[1]/div/div/a/i")).click();
	    	 System.out.println("Clicked on Cancel button"); 
	    }
	    catch(Exception e) {
			System.out.println("Not able to click on the cancel button"+e);
	    	Assert.fail();
	    }
		    
	}

	@Then("Admin navigates back to the Manufacturers page")
	public void admin_navigates_back_to_the_Manufacturers_page() {
		 try {
			 String actualtext4 = driver.findElement(By.xpath("//*[@id='content']/div[1]/div/h1")).getText();
				String expectedtext4 = "Manufacturers";
				Assert.assertEquals(actualtext4, expectedtext4);
				System.out.println("Admin is on the:" + driver.getTitle());
		    	
			    
		   }
		   catch(Exception e) {
				System.out.println("Not able to navigate to the Add Manufacturers page"+e);
		    	Assert.fail();
		    }
	    
	}
	
	//Pagination
	@Given("Checks for the pagination")
	public void checks_for_the_pagination() {
		try {
			Thread.sleep(5000);
		//boolean pagination = driver.findElement(By.xpath("//*[@id='content']/div[2]/div/div[2]/div/div[1]")).isDisplayed();
			
			List<WebElement> pagination =driver.findElements(By.xpath("//*[@id='content']/div[2]/div/div[2]/div/div[1]"));
			
				
		if(pagination.size()>0)
		{
			System.out.println("Pagination Exists");	
		}
		
		//System.out.println("Navigated to the next page");
		
		}
		catch(Exception e) {
			System.out.println("Pagination does not exists"+e);
	    	Assert.fail();
	    }
    
	}

	

	@When("Admin clicks on the forward arrow")
	public void admin_clicks_on_the_forward_arrow() {
		try {
			driver.findElement(By.xpath("//*[@id='content']/div[2]/div/div[2]/div/div[1]/ul/li[10]/a")).click();
			Thread.sleep(5000);
			System.out.println("Clicked on the forward arrow");
		
		}
		catch(Exception e) {
			System.out.println("Not able to click on the forward arrow"+e);
	    	Assert.fail();
	    }	
	   
	}

	

	@Then("Admin navigates to the next page")
	public void admin_navigates_to_the_next_page() {
		try {
			
		boolean pagination1 = driver.findElement(By.xpath("//*[@id='content']/div[2]/div/div[2]/div/div[1]/ul/li[4]/span")).isDisplayed(); 
		if(pagination1)
		{
		System.out.println("Navigated to the next page");
		}
		
		}
		catch(Exception e) {
			System.out.println("Not able to navigate to the next page"+e);
	    	Assert.fail();
	    }	
	   
	}

	
	@Then("Clicks on the backward arrow")
	public void clicks_on_the_backward_arrow() {
	
		try {
			Thread.sleep(5000);
		driver.findElement(By.xpath("//*[@id='content']/div[2]/div/div[2]/div/div[1]/ul/li[2]/a")).click(); 
		Thread.sleep(5000);
		System.out.println("Clicked on the backward arrow");
		
		}
		catch(Exception e) {
			System.out.println("Not able to click backward arrow"+e);
	    	Assert.fail();
	    }	
	}
	@Then("Admin navigates to the previous page")
	public void admin_navigates_to_the_previous_page() {
		try {
			boolean pagination2 = driver.findElement(By.xpath("//*[@id=\"content\"]/div[2]/div/div[2]/div/div[1]/ul/li[3]/a")).isDisplayed(); 
			if(pagination2)
			{
				System.out.println("Navigated to the previous page");
			}
			
			
			}
			catch(Exception e) {
				System.out.println("Not able to navigate to the previous page"+e);
		    	Assert.fail();
		    }	
		}
	    
	

	


	//Bulk Action and Delete Button
	@When("Admin clicks on the checkbox in the title bar and all checkboxes should be selected")
	public void admin_clicks_on_the_checkbox_in_the_title_bar_and_all_checkboxes_should_be_selected() {
		try {
			driver.findElement(By.xpath("//*[@id='form-manufacturer']/div/table/thead/tr/td[1]/input")).click(); 
			Thread.sleep(3000);
			System.out.println("Clicked on the checkbox in the title bar");
			driver.findElement(By.xpath("//*[@id='form-manufacturer']/div/table/thead/tr/td[1]/input")).isSelected();
			Thread.sleep(3000);
			System.out.println("Checkboxes are selected");
		}
		catch(Exception e) {
			System.out.println("Not able to click on the checkbox in the title bar"+e);
	    	Assert.fail();
	    }	
	}
	@When("Again clicks on the checkbox in the title bar and all checkboxes should be deselected")
	public void again_clicks_on_the_checkbox_in_the_title_bar_and_all_checkboxes_should_be_deselected() {
		try {
			//Thread.sleep(3000);
			driver.findElement(By.xpath("//*[@id='form-manufacturer']/div/table/thead/tr/td[1]/input")).click(); 
			Thread.sleep(3000);
			System.out.println("All checkboxes deselected");
		}
		catch(Exception e) {
			System.out.println("Not able to click on the checkbox in the title bar"+e);
	    	Assert.fail();
	    }	 
	}

	@When("Admin clicks on one or more checkboxes in the Manufacturers list")
	public void admin_clicks_on_one_or_more_checkboxes_in_the_Manufacturers_list() {
		try {
		//Thread.sleep(5000);
		driver.findElement(By.xpath("//*[@id='form-manufacturer']/div/table/tbody/tr[2]/td[1]/input")).click(); 
		Thread.sleep(3000);
		driver.findElement(By.xpath("//*[@id='form-manufacturer']/div/table/tbody/tr[3]/td[1]/input")).click(); 
		Thread.sleep(3000);
		
		System.out.println("Clicked on one or more checkboxes");
		
		}
		catch(Exception e) {
			System.out.println("Not able to click on the one or more checkboxes"+e);
	    	Assert.fail();
	    }	  
	}
	
	@Then("Checkboxes should be selected")
	public void checkboxes_should_be_selected() {
		try {
		driver.findElement(By.xpath("//*[@id='form-manufacturer']/div/table/tbody/tr[2]/td[1]/input")).isSelected();
		Thread.sleep(3000);
		driver.findElement(By.xpath("//*[@id='form-manufacturer']/div/table/tbody/tr[3]/td[1]/input")).isSelected();
		Thread.sleep(3000);
		System.out.println("Checkboxes are selected");
		}
		catch(Exception e) {
			System.out.println("Not able to select the one or more checkboxes"+e);
	    	Assert.fail();
	    }	
		
	}

	@When("Clicks on the delete button")
	public void clicks_on_the_delete_button() {
		try {
			//Thread.sleep(5000);
			driver.findElement(By.xpath("//*[@id='content']/div[1]/div/div/button")).click(); 
			Thread.sleep(3000);
			
			System.out.println("Clicked on the delete button");
			
			}
			catch(Exception e) {
				System.out.println("Not able to click on the delete button"+e);
		    	Assert.fail();
		    }	  
	}

	@When("Accepts the alert")
	public void accepts_the_alert() {
	    try {
	    	Alert alert3=driver.switchTo().alert();
			String message=alert3.getText();
			System.out.println(message);
			Thread.sleep(2000);
			alert3.accept();
			System.out.println("Accepted the alert");
	    }
	    catch(Exception e) {
			System.out.println("Not able to accept the alert"+e);
	    	Assert.fail();
	    }	  
	}
	
	
	@Then("Admin will able to see the validation message of Modification")
	public void admin_will_able_to_see_the_validation_message_of_Modification() {
		try {
		String actual5 = driver.findElement(By.xpath("//*[@id='content']/div[2]/div[1]")).getText();
		//System.out.println(actual5);
		String expected5 = "Success: You have modified manufacturers!";
		System.out.println(actual5);
		Assert.assertTrue(actual5.contains(expected5));
		//Assert.assertTrue(expected5.contains(actual5));
		//System.out.println(actual5); 
		}
		  catch(Exception e) {
				System.out.println("Not able to see the validation message"+e);
		    	Assert.fail();
		    }	
	}




}
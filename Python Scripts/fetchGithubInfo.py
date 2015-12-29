import urllib
import time
from selenium import webdriver 
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

#Open up phantomJS and fetch Github repo information

driver = webdriver.PhantomJS('phantomjs.exe')
driver.get("https://github.com/shstyoo?tab=repositories")

#Wait for page to load in JS until "repo-list" has been rendered
#If page fails to find item in time throw exception 

printMessage = ""

try:
	option3 = WebDriverWait(driver, 15).until(EC.presence_of_element_located((By.CLASS_NAME, "repo-list")))
except:
	print("\nCould not find element in time.\n")
	printMessage = "FAILED TO RETREIVE INFO"

text_file = open("Output.txt", "w")

elem = driver.find_element_by_class_name("repo-list")
items = elem.find_elements_by_tag_name("li")
for items in items: 
	text = items.text
	#print(text, file=text_file)
	print(text)
	
driver.quit()

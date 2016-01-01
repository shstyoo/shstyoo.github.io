import urllib
import time
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

#Open up phantomJS and fetch Github repo information

driver = webdriver.PhantomJS('C:/Users/steve/Documents/GitHub/shstyoo.github.io/pyScripts/phantomjs.exe')
driver.get("https://github.com/shstyoo?tab=repositories")

#Wait for page to load in JS until "repo-list" has been rendered
#If page fails to find item in time throw exception

printMessage = ""

try:
	option3 = WebDriverWait(driver, 15).until(EC.presence_of_element_located((By.CLASS_NAME, "repo-list")))
except:
	print("\nCould not find element in time.\n")
	printMessage = "FAILED TO RETREIVE INFO"

#elem = driver.find_element_by_class_name("repo-list")
#items = elem.find_elements_by_tag_name("li")
h3item = driver.find_elements_by_class_name("repo-list-name")
pitem = driver.find_elements_by_class_name("repo-list-description")
numItem = str(len(pitem))

#Iterate and write only H3 elements to text file
text_file = open("Outputh3.txt", "w")
for items in h3item:
	text = items.text
	print(text)
	text_file.write(text)
	text_file.write("\n")
text_file.close()

#Iterate and write only P elements to text file
text_file2 = open("Outputp.txt", "w")
for items in pitem:
	text = items.text
	print(text)
	text_file2.write(text)
	text_file2.write("\n")
text_file2.close()

text_file3 = open("NumOfItem.txt", "w")
text_file3.write(numItem)
print(numItem)
text_file3.close()

#DEBUG OUTPUT
fp = open("Outputh3.txt")
for i, line in enumerate(fp):
	print(i+1)
	print(line)

fp.close()

fp = open("Outputp.txt")
for i, line in enumerate(fp):
	print(i+1)
	print(line)

fp.close()

driver.quit()

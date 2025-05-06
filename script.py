from flask import Flask, render_template
from selenium import webdriver
from selenium.webdriver.common.by import By
import time

app = Flask(__name__, static_folder="static")

def get_streak():
    driver = webdriver.Chrome()
    driver.get("https://leetcode.com/u/etanh/")
    time.sleep(3)  
    elements = driver.find_elements(By.CSS_SELECTOR, "span.font-medium.text-label-2.dark\\:text-dark-label-2")
    streak = elements[1].text if len(elements) > 1 else "N/A"
    driver.quit()
    return streak

@app.route("/")
def home():
    s = get_streak()
    print("Streak is:", s)
    return render_template(
        "index.html", 
        streak=s
    )

if __name__ == "__main__":
    app.run()

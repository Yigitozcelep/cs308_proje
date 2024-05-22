import unittest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select, WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

class FlightListAdminTests(unittest.TestCase):

    @classmethod
    def setUpClass(cls):
        cls.driver = webdriver.Chrome()
        cls.driver.get("http://127.0.0.1:5500/flightListAdmin/flightListAdmin.html")  # Replace with the path to your HTML file

    @classmethod
    def tearDownClass(cls):
        cls.driver.quit()

    def test_language_change(self):
        # Test the language change functionality
        language_select = Select(self.driver.find_element(By.ID, "language"))

        # Change to Turkish and verify
        language_select.select_by_value("turkish")

        self.assertEqual(self.driver.find_element(By.ID, "signOut").text, "Çıkış", "Language change to Turkish failed")

        # Change back to English and verify
        language_select.select_by_value("english")
        time.sleep(1)
        self.assertEqual(self.driver.find_element(By.ID, "signOut").text, "Sign Out", "Language change to English failed")

    def test_add_flight_button(self):
        self.driver.get("http://127.0.0.1:5500/flightListAdmin/flightListAdmin.html")
        # Test the "Add Flight" button functionality
        add_flight_button = self.driver.find_element(By.ID, "addFlight")
        add_flight_button.click()
        
        # Wait for the new page to load
        WebDriverWait(self.driver, 5).until(EC.url_contains("http://127.0.0.1:5500/flightListAdmin/add_flight.html"))
        
        self.assertIn("add_flight.html", self.driver.current_url, "Add Flight button did not redirect correctly")

    def test_filter_flights(self):
        # Test the filter functionality
        departure_date_search = self.driver.find_element(By.ID, "departureDate-search")
        departure_date_search.send_keys("Tue Jun 11 2024")  # Replace with a valid date
        apply_button = self.driver.find_element(By.ID, "apply")
        apply_button.click()
        
        
        table_body = self.driver.find_element(By.ID, "table-body")
        rows = table_body.find_elements(By.TAG_NAME, "tr")
        self.assertGreater(len(rows), 0, "No rows displayed after applying filter")

    def test_delete_flight(self):
        # Test the delete flight functionality
        delete_buttons = self.driver.find_elements(By.CLASS_NAME, "delete-row")
        
        if delete_buttons:
            initial_row_count = len(self.driver.find_elements(By.TAG_NAME, "tr"))
            delete_buttons[0].click()

            
            final_row_count = len(self.driver.find_elements(By.TAG_NAME, "tr"))
            self.assertEqual(final_row_count, initial_row_count - 1, "Row count did not decrease after deletion")

    def test_sorting_by_flight_id(self):
        # Click on the FlightNo table header to sort by Flight ID
        flight_no_header = self.driver.find_element(By.ID, "flightNo")
        flight_no_header.click()
        # Wait for the table to be sorted
        WebDriverWait(self.driver, 10).until(
            EC.presence_of_element_located((By.ID, "table-body"))
        )
        # Get the first row after sorting
        first_row_flight_id = self.driver.find_element(By.XPATH, "//tbody/tr[1]/td[1]").text
        # Get the second row after sorting
        second_row_flight_id = self.driver.find_element(By.XPATH, "//tbody/tr[2]/td[1]").text
    
        # Extract numeric parts of the Flight IDs
        first_row_numeric_part = int(first_row_flight_id[2:])
        second_row_numeric_part = int(second_row_flight_id[2:])
    
        # Assert that the first row has a smaller Flight ID than the second row, ignoring the first two characters
        self.assertLess(first_row_numeric_part, second_row_numeric_part)
    def test_update_flight(self):
        # Step 1: Click the first select button to choose a flight
        select_buttons = self.driver.find_elements(By.CLASS_NAME, "select-row")
        if not select_buttons:
            print("No select buttons found.")
            return
        select_buttons[0].click()

        # Step 2: Wait for the selection popup to appear
        WebDriverWait(self.driver, 10).until(EC.visibility_of_element_located((By.ID, "selectPopup")))

        # Extract the flight ID of the selected flight
        selected_row = select_buttons[0].find_element(By.XPATH, "./ancestor::tr")
        flight_id = selected_row.find_element(By.TAG_NAME, "td").text
        print(f"Selected flight ID: {flight_id}")

        # Step 3: Click the update button to trigger the update popup
        update_button = self.driver.find_element(By.ID, "button4")
        update_button.click()

        # Step 4: Wait for the update popup to be visible
        WebDriverWait(self.driver, 10).until(EC.visibility_of_element_located((By.ID, "updatePopup")))

        # Step 5: Fill in the update form
        self.driver.find_element(By.ID, "newPlaneId").send_keys("NewPlane123")

        time.sleep(4)

        # Step 6: Submit the update form
        self.driver.find_element(By.ID, "updateForm").submit()

        # Step 7: Wait for the update popup to close
        WebDriverWait(self.driver, 10).until(EC.invisibility_of_element_located((By.ID, "updatePopup")))

        # Step 8: Verify the update was successful
        WebDriverWait(self.driver, 10).until(EC.visibility_of_element_located((By.ID, "table-body")))
        time.sleep(4)

        # Verify that the update has been applied
        table_body = self.driver.find_element(By.ID, "table-body")
        rows = table_body.find_elements(By.TAG_NAME, "tr")
        for row in rows:
            cells = row.find_elements(By.TAG_NAME, "td")
            if cells[0].text == flight_id:  # Check the updated row by flight ID
                self.assertEqual(cells[1].text, "NewPlane123")
                break
        else:
            self.fail("Updated flight not found in the table")
def suite():
    suite = unittest.TestSuite()
    suite.addTest(FlightListAdminTests('test_language_change'))
    suite.addTest(FlightListAdminTests('test_filter_flights'))
    suite.addTest(FlightListAdminTests('test_delete_flight'))
    suite.addTest(FlightListAdminTests('test_sorting_by_flight_id'))
    suite.addTest(FlightListAdminTests('test_update_flight'))
    suite.addTest(FlightListAdminTests('test_add_flight_button'))
    
    return suite

if __name__ == '__main__':
    runner = unittest.TextTestRunner()
    test_suite = suite()
    runner.run(test_suite)

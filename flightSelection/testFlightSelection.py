import unittest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time

class FlightSelectionTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.driver = webdriver.Chrome()

        cls.driver.get('http://127.0.0.1:5500/flightSelection/flightSelection.html')

    @classmethod
    def tearDownClass(cls):
        cls.driver.quit()

    def test_search_type_change(self):
        search_type_dropdown = self.driver.find_element(By.ID, 'searchType')
        search_type_dropdown.send_keys(Keys.ENTER)

        selected_option = search_type_dropdown.get_attribute('value')
        input_fields = self.driver.find_elements(By.CLASS_NAME, 'input-field')

        for input_field in input_fields:
            if input_field.get_attribute('id') == f'{selected_option}Input':
                self.assertTrue(input_field.is_displayed(), f"{selected_option}Input should be displayed")
            else:
                self.assertFalse(input_field.is_displayed(), f"{input_field.get_attribute('id')} should not be displayed")
    def test_invalid_input_alert(self):
        self.driver.get('http://127.0.0.1:5500/flightSelection/flightSelection.html')

        # Select 'flightNo' for this test
        search_type_dropdown = self.driver.find_element(By.ID, 'searchType')
        search_type_dropdown.send_keys('flightNo')
        time.sleep(1)

        # Input an invalid flight number
        flight_no_input = self.driver.find_element(By.ID, 'flightNoPHolder')
        flight_no_input.send_keys('InvalidFlightNo')

        time.sleep(1)

        # Submit the form
        form = self.driver.find_element(By.TAG_NAME, 'form')
        form.submit()
        time.sleep(2)


        alert = self.driver.switch_to.alert
        self.assertIn("No flights found for the given criteria.", alert.text, "Alert message does not match expected")
        alert.accept()


    def test_form_submission(self):
        search_type_dropdown = self.driver.find_element(By.ID, 'searchType')
        search_type_dropdown.send_keys('flightNo')  # Selecting 'flightNo' for this test
        time.sleep(2)
        flight_no_input = self.driver.find_element(By.ID, 'flightNoPHolder')
        flight_no_input.send_keys('TK1')  # Example flight number
        time.sleep(2)
        form = self.driver.find_element(By.TAG_NAME, 'form')
        form.submit()
        time.sleep(2)

        expected_url = '/flightListPassenger/flightListPassenger.html?searchType=flightNo&flightNo=TK1'
        self.assertTrue(self.driver.current_url.endswith(expected_url), "Form submission did not redirect to the correct URL")


    def test_help_popup(self):
        self.driver.get('http://127.0.0.1:5500/flightSelection/flightSelection.html')
        help_button = self.driver.find_element(By.ID, 'helpButton')
        help_button.click()

        help_popup = self.driver.find_element(By.ID, 'helpPopup')
        self.assertTrue(help_popup.is_displayed(), "Help popup should be displayed when the help button is clicked")

        close_button = self.driver.find_element(By.CLASS_NAME, 'close')
        close_button.click()

        self.assertFalse(help_popup.is_displayed(), "Help popup should be hidden after clicking the close button")

    def test_quit_button(self):
        self.driver.get('http://127.0.0.1:5500/flightSelection/flightSelection.html')

        quit_button = self.driver.find_element(By.ID, 'signOut')
        quit_button.click()

        expected_url = 'http://127.0.0.1:5500/start_screen/index.html'
        self.assertEqual(self.driver.current_url, expected_url, "Browser should be redirected to /start_screen/index.html after clicking the quit button")
    def test_my_flights_button(self):
        self.driver.get('http://127.0.0.1:5500/flightSelection/flightSelection.html')

        my_flights_button = self.driver.find_element(By.ID, 'myFlights')
        my_flights_button.click()

        expected_url = 'http://127.0.0.1:5500/myFlightsPassenger/myFlightsPassenger.html'
        self.assertEqual(self.driver.current_url, expected_url, "Browser should be redirected to My Flights page after clicking the My Flights button")    
    def test_language_change(self):
        self.driver.get('http://127.0.0.1:5500/flightSelection/flightSelection.html')

        language_dropdown = self.driver.find_element(By.ID, 'language')

        language_dropdown.send_keys('TR')

        time.sleep(2)

        text_element = self.driver.find_element(By.ID, 'flightSelectionTable')
        self.assertEqual(text_element.text, "UÇUŞ ARAMA", "Language change to Turkish failed")
    def test_go_to_personal_information(self):

        self.driver.get('http://127.0.0.1:5500/flightSelection/flightSelection.html')


        # Click on the personal information link
        profile_icon = self.driver.find_element(By.ID, 'profileIcon')
        profile_icon.click()

        expected_url = 'http://127.0.0.1:5500/personal_info_psngr/personal_info_psngr.html'
        self.assertEqual(self.driver.current_url, expected_url, "Browser should be redirected to Personal Information page")
  
if __name__ == '__main__':
    suite = unittest.TestSuite()

    
    suite.addTest(FlightSelectionTests('test_search_type_change'))
    suite.addTest(FlightSelectionTests('test_form_submission'))
    suite.addTest(FlightSelectionTests('test_help_popup'))
    suite.addTest(FlightSelectionTests('test_quit_button'))
    suite.addTest(FlightSelectionTests('test_my_flights_button'))
    suite.addTest(FlightSelectionTests('test_language_change'))
    suite.addTest(FlightSelectionTests('test_invalid_input_alert'))
    suite.addTest(FlightSelectionTests('test_go_to_personal_information'))

  
    unittest.TextTestRunner().run(suite)
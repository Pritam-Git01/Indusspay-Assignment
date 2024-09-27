Responsive React Project with Bootstrap and GSAP Animations
This is a fully responsive project built with React and Bootstrap, ensuring compatibility across devices. The project features smooth animations powered by GSAP and includes a contact form that allows users to submit their details, which are then saved to a database. A toast notification is displayed upon successful form submission.

Features
Responsive Design: The application is fully responsive, ensuring a seamless experience on devices of all sizes.
Bootstrap: Used for styling and layout, ensuring mobile-first design and ease of use.
GSAP Animations: Smooth animations for enhanced user experience.
Contact Form: Users can submit their information, and the data is saved to a database using Axios. A toast notification is displayed on successful submission.
Toast Notification: Upon successful form submission, users receive a visual confirmation via a toast.
Technologies Used
React
Bootstrap (for responsive styling)
GSAP (for animations)
Axios (for API calls)
React Hook Form (for form handling)
Zod (for validation)
Toastify (for displaying toast notifications)
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-repo-name.git
cd your-repo-name
Install dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm start
The application will be running at http://localhost:3000.

Usage
Animations
The project utilizes GSAP for animations. You'll find animations applied to various components, ensuring a smooth and engaging user experience. GSAP helps make elements appear with transitions such as fade-ins, slide-ins, and other effects.

Contact Form
The contact form allows users to submit their details. On submission:

Validation: The form is validated using Zod.
Data Submission: Upon passing validation, the data is sent to the backend using Axios.
Toast Notification: A success toast message is displayed to the user, confirming their submission.
Saving Data to the Database
The contact form is wired to save data in a mock API (or your database). It uses Axios to POST the form data to an endpoint, saving the information securely.

Code Snippet (for Contact Form Submission)
javascript
Copy code
import axios from 'axios';

function onSubmit(values) {
  axios.post('https://your-database-url/api/contact', values)
    .then(response => {
      console.log('Data submitted:', response.data);
      // Show toast on success
      toast.success('Form submitted successfully!');
    })
    .catch(error => {
      console.error('Error submitting form:', error);
      toast.error('Failed to submit the form.');
    });
}
Dependencies
Make sure you have the following dependencies installed:

react
react-bootstrap
gsap
axios
react-hook-form
zod
react-toastify
Install them using the following command:

bash
Copy code
npm install react-bootstrap gsap axios react-hook-form zod react-toastify
License
This project is licensed under the MIT License.
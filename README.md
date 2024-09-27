<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>README - Responsive React Project</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      background-color: #f4f4f4;
      padding: 20px;
    }
    h1, h2 {
      color: #333;
    }
    ul {
      padding-left: 20px;
    }
    code {
      background-color: #e6e6e6;
      padding: 2px 6px;
      border-radius: 4px;
    }
    .code-block {
      background-color: #e6e6e6;
      padding: 15px;
      border-radius: 5px;
      font-family: monospace;
    }
    .code-block pre {
      margin: 0;
    }
    .install-steps {
      background-color: #fff;
      padding: 20px;
      border-radius: 5px;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
      margin-bottom: 20px;
    }
    footer {
      margin-top: 20px;
      font-size: 0.9em;
      color: #666;
    }
  </style>
</head>
<body>

  <h1>Responsive React Project with Bootstrap and GSAP Animations</h1>
  
  <p>
    This is a fully responsive project built with <strong>React</strong> and <strong>Bootstrap</strong>, ensuring compatibility across devices. 
    The project features smooth animations powered by <strong>GSAP</strong> and includes a <strong>contact form</strong> that allows users 
    to submit their details, which are then saved to a database. A toast notification is displayed upon successful form submission.
  </p>

  <h2>Features</h2>
  <ul>
    <li><strong>Responsive Design:</strong> Ensures a seamless experience on devices of all sizes.</li>
    <li><strong>Bootstrap:</strong> Used for styling and layout, ensuring mobile-first design and ease of use.</li>
    <li><strong>GSAP Animations:</strong> Smooth animations for enhanced user experience.</li>
    <li><strong>Contact Form:</strong> Users can submit their information, and the data is saved to a database using Axios. A toast notification is displayed on successful submission.</li>
    <li><strong>Toast Notification:</strong> Users receive a visual confirmation upon successful form submission.</li>
  </ul>

  <h2>Technologies Used</h2>
  <ul>
    <li>React</li>
    <li>Bootstrap (for responsive styling)</li>
    <li>GSAP (for animations)</li>
    <li>Axios (for API calls)</li>
    <li>React Hook Form (for form handling)</li>
    <li>Zod (for validation)</li>
    <li>Toastify (for displaying toast notifications)</li>
  </ul>

  <h2>Installation</h2>
  <div class="install-steps">
    <h3>Clone the repository:</h3>
    <pre class="code-block">git clone https://github.com/your-repo-name.git <br>cd your-repo-name</pre>
    
    <h3>Install dependencies:</h3>
    <pre class="code-block">npm install</pre>

    <h3>Start the development server:</h3>
    <pre class="code-block">npm start</pre>

    <p>The application will be running at <code>http://localhost:3000</code>.</p>
  </div>

  <h2>Usage</h2>

  <h3>Animations</h3>
  <p>
    The project utilizes <strong>GSAP</strong> for animations. You'll find animations applied to various components, ensuring a smooth and engaging user experience.
    GSAP helps make elements appear with transitions such as fade-ins, slide-ins, and other effects.
  </p>

  <h3>Contact Form</h3>
  <p>The contact form allows users to submit their details. On submission:</p>
  <ul>
    <li><strong>Validation:</strong> The form is validated using <strong>Zod</strong>.</li>
    <li><strong>Data Submission:</strong> Upon passing validation, the data is sent to the backend using <strong>Axios</strong>.</li>
    <li><strong>Toast Notification:</strong> A success toast message is displayed to the user, confirming their submission.</li>
  </ul>

  <h3>Saving Data to the Database</h3>
  <p>
    The contact form is wired to save data in a mock API (or your database). It uses Axios to POST the form data to an endpoint, saving the information securely.
  </p>

  <h2>Code Snippet (for Contact Form Submission)</h2>
  <div class="code-block">
    <pre>
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
    </pre>
  </div>

  <h2>Dependencies</h2>
  <p>Make sure you have the following dependencies installed:</p>
  <ul>
    <li>react</li>
    <li>react-bootstrap</li>
    <li>gsap</li>
    <li>axios</li>
    <li>react-hook-form</li>
    <li>zod</li>
    <li>react-toastify</li>
  </ul>

  <h3>Install them using the following command:</h3>
  <pre class="code-block">npm install react-bootstrap gsap axios react-hook-form zod react-toastify</pre>

  <footer>
    <p>This project is licensed under the MIT License.</p>
  </footer>

</body>
</html>

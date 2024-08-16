<!-- Rule Engine with AST (MERN Stack) -->
This application is a simple rule engine built using the MERN stack (MongoDB, Express, React, Node.js). It allows users to create, combine, and evaluate rules based on various conditions, represented as Abstract Syntax Trees (AST).

<!-- Features -->
Create Complex Rules: Use a simple string representation to define complex rules.
Combine Rules: Combine multiple rules into a single AST for more complex rule definitions.
Evaluate Rules: Evaluate rules against user data to determine eligibility based on dynamic conditions.
Visualize Rules: Visualize and manage the rules created in a user-friendly interface.

<!-- Getting Started -->
Prerequisites
Node.js: Ensure you have Node.js installed. Download Node.js
MongoDB: Make sure MongoDB is installed and running. Download MongoDB

<!-- Installation -->
Clone the Repository:

git clone https://github.com/tropnicates/rule-engine.git
cd rule-engine

<!-- Install Dependencies: -->

# Backend:

 cd backend
npm install


# Frontend

 cd frontend
npm install

# Create a .env file in the backend directory and set the following variables:

.env

MONGODB_URI=  mongodb+srv://tropnicates:BQZ7PIxJHKdroqex@fullstack-blog-project.otgvrqz.mongodb.net/?retryWrites=true&w=majority
PORT=5000
Adjust the MongoDB URI and port as necessary.
Run the Application:

# Start Backend Server:

cd backend
npm start
Start Frontend Server:


cd frontend
npm start


The backend server will run on port 5000 by default, and the frontend server will run on port 3000.

Access the Application:
Open your browser and go to http://localhost:3000 to access the rule engine application.

Usage
Creating Rules
Navigate to the Rules section in the application.
Use the provided form to create new rules by entering a string representation of the rule.
Save the rule, and it will be stored in the database.
Combining Rules
Go to the Rule Combiner section.
Select multiple existing rules to combine them into a single AST.
Save the combined rule for future evaluations.
Evaluating Rules
Access the Rule Evaluator section.
Input user data and select the rule to evaluate.
The system will determine if the user meets the criteria defined by the rule.
Visualizing Rules
Visit the Rule Visualizer to see the AST representation of your rules.
View and manage existing rules through an intuitive interface.
Folder Structure
backend/: Contains the server-side code.

config/: Configuration files, including database connection settings.
models/: Mongoose models for MongoDB.
routes/: Express routes for handling API requests.
controllers/: Business logic and rule handling.
utils/: Utility functions, including AST-related operations.
server.js: Entry point for the backend application.
frontend/: Contains the client-side code.

src/components/: React components for UI.
src/pages/: Page components for different sections of the application.
src/api/: API calls and configurations.
src/App.js: Entry point for the React application.
Contributing
Feel free to fork the repository and submit pull requests. For bug reports or feature requests, open an issue on the GitHub repository.


<!-- Acknowledgements -->
# MERN Stack for providing a powerful and flexible stack for building web applications.
# Abstract Syntax Tree (AST) for enabling complex rule definitions and evaluations.

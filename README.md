# Campus Lifestyle and Student Well-being Survey

This project is a google survey form to gather insights into campus lifestyle and student well-being. It uses HTML, CSS, JavaScript, and a MySQL database to handle form submissions.

## Project Setup

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- [MySQL](https://dev.mysql.com/downloads/) installed
- A MySQL database created for this project

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/ishitapradhan19/university-survey.git
   cd university-survey
   
2. **Create a .env File**

   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_password_here
   DB_NAME=your_database_name_here
   PORT=5000
   Replace your_password_here and your_database_name_here with your MySQL password and database name, respectively.

3. **Install Dependencies**

Ensure you have npm installed, then run: npm install

4. **Create the MySQL Database**

   CREATE TABLE responses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fullName VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    yearOfStudy VARCHAR(255) NOT NULL,
    studyHours VARCHAR(255) NOT NULL,
    sleepHours VARCHAR(255) NOT NULL
);

5. **Run the Server**

   Start the server using: **node server.js**

   The server will be accessible at **http://localhost:5000**.

### Contributing ###
    If you want to contribute to this project, please fork the repository and submit a pull request.

### License ###
   This project is licensed under the **MIT License**.

### Contact ###
    For any questions or issues, please contact ishita.pradhan3010@gmail.com.

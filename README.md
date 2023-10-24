# Book Collection Web Application

**Overview:**

Book Collection is a web application designed for book enthusiasts to review and rate books. Built using Express.js and MySQL, this application allows users to interact with a database of books, add new books for review, rate existing books, leave review comments, and perform various filters based on book ratings and titles.

**Goals:**

The primary goals of this web application are as follows:

1. **Viewing Book List:** Users can view a comprehensive list of books stored in the database.

2. **Filtering Book List:** Users have the option to filter the book list based on book ratings, titles, and other criteria, enhancing their browsing experience.

3. **Adding a Book for Review:** Users can add new books to the database, ensuring that the collection stays up-to-date and diverse.

4. **Interactions:** Users can rate books and leave review comments, fostering a sense of community and interaction among users.

5. **Deleting a Book:** Users have the ability to delete books from the database. Once deleted, the book will no longer appear in the list of available books.

**Features:**

- **View Book List:** Browse through an extensive collection of books.
  
- **Sort Books:** Utilize sort to refine the book list based on titles.

- **Add New Books:** Contribute to the database by adding new books for review.

- **Rate Books:** Assign ratings to books based on personal preferences and experiences.

- **Leave Comments:** Share thoughts and opinions by leaving review comments on specific books.

- **Delete Books:** Remove books from the database, ensuring the content remains relevant and high-quality.

**Getting Started:**

To get started with the Book Collection web application, follow these steps:

1. **Clone the Repository:**
   ```
   git clone https://github.com/your-username/book-collection.git
   ```

2. **Install Dependencies:**
   ```
   cd book-collection
   npm install
   ```

3. **Database Setup:**
   - Create a MySQL database named `book_collection`.
   - Import the database schema and sample data from the `database.sql` file provided in the repository.

4. **Configure Environment Variables:**
   - Create a `.env` file in the project root.
   - Define the following environment variables:
     ```
     DB_HOST=localhost
     DB_USER=your_mysql_username
     DB_PASSWORD=your_mysql_password
     DB_DATABASE=book_collection
     ```

5. **Run the Application:**
   ```
   npm start
   ```

6. **Access the Application:**
   Open a web browser and visit `http://localhost:3000` to access the Book Collection web application.

**Contributing:**

Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or create a pull request.

## Running the Laravel Project

To get your Laravel project up and running, follow these steps:

### 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/adeellaradev/test-task.git
cd <test-task>

2. Install Dependencies
    Make sure you have Composer and Node.js installed. Install PHP dependencies and JavaScript dependencies:
    composer install
    npm install

3. Configure CRONOFY  Variables
    Sign Up at  "https://app.cronofy.com/" as developer and get the below keys
    CRONOFY_CLIENT_ID
    CRONOFY_CLIENT_SECRET

4. Configure Stripe  Variables
    Sign Up at  "https://dashboard.stripe.com/login" as developer and get the below keys
    STRIPE_SECRET
    STRIPE_KEY

5. Configure Environment Variables
    Copy the .env.example file to create your own .env file and update it with your configuration settings:
    cp .env.example .env

6. Generate Application Key
    Generate a new application key for Laravel:
    php artisan key:generate

7. Run Database Migrations
    Run the migrations to set up your database schema:
    php artisan migrate

8. Seed the Database (Optional)
    If you have database seeders, run them to populate your database with initial data:
        php artisan db:seed
        php artisan db:seed

9. Compile Assets
    Compile the front-end assets using Laravel Mix:
        npm run dev

For production, use:
    npm run production  or  npm run build


10. Start the Development Server
    Start the Laravel development server:
    php artisan serve


11. Configure Stripe and Inertia.js
    Ensure that you have set up your Stripe account and have configured it correctly in your .env file. For Inertia.js, ensure that your Vue.js components are properly set up and that you are using the @inertiajs/inertia and @inertiajs/inertia-vue3 packages if you are using Vue 3.

12. Access the Application
    Open your web browser and navigate to http://localhost:8000 to access the application.

 












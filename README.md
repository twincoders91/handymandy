# Project Title
HandyMandy is a full stack application for on demand handyman services. Think of it like grab but for handyman services.

# Project Description:
HandyMandy app provides users with on-demand handyman services via a web/mobile app, by connecting the 2 main types of accounts, a general user and a handyman user. HandyMandy has an in-app instant messaging feature that allows simple communication between users and handymans. In a summarised format,
<li>handyman users create services which will be displayed on the application.</li>
<li>Users can view and select services that appeal to them, the app then creates a job request. </li>
<li>Handyman users can choose to accept job requests which will be converted into jobs. </li>
<li>Once a job is completed, users can provide constructive reviews which will be displayed on the handyman's profile. </li>

# User stories
A user story used for presentation. Ignore if not interested. 
It was 4am, and it was a cold dark night. I woke up and had to use the toilet urgently. The light was busted and not working, the pipes and toilet were clogged. I was not able to use the toilet in the dark and worst of all I did not know how to fix the problem. Thankfully, I remembered I had HandyMandy, a one stop application to engage a competent handyman to fix my home problems.

# Technologies used
Handyman app is built on PERN stack (Postgresql, Express, React and NodeJs) with its own backend and frontend. The application is a complete product, which is usable from head-to-tail.
## Technologies used to build frontend:
React.js 
Vanilla CSS
Github repo: https://github.com/twincoders91/shareable
## Technologies used to build backend:
Express.js
Postgresql
BCrypt is used for the hashing of passwords
Backend server name : handymandy
Github repo: https://github.com/twincoders91/handymandybackend
## Cloud Technologies used:
AWS S3 bucket cloud service.

# Application Structure

--> Root (/)
    |--> login page (/)
      |--> User login page (/login)
        |--> Login Error Modal
      |--> Create account Main (/signup)
        |--> Create account 1 
          |--> Create account error modal
        |--> Character select
        |--> Create account 2 user
          |--> Create account error modal
        |--> Create account 2 handyman
          |--> Create account error modal
    |--> Account Creation (/create-account)
         |--> User Account Creation - Generic account creation, tags the type of account (i.e. migrant worker, donor or volunteer)
         |--> Profile Creation - Only for migrant workers, to facilitate delivery of items
    |--> Home (/home)
         |--> Homepage - Separate views for migrant workers and donors
         |--> Application - Separate views for migrant workers and donors
    |--> Donate (/donate)
         |--> Donate homepage
              |--> Modals components (donate information)
         |--> Donate dashboard
              |--> Item status information (modal)
              |--> Donate top 4 Category component - map and display donate categories (dynamic dataset)
              |--> In-need of item Card (dynamic dataset with sorting functionality)
              |--> How to donate instruction (modal)
         |--> Donate location selection
              |--> Navbar (Donate items) 
              |--> Drop Menu Area selection (select NSEW states)
              |--> Maps NSEW (pick location to drop off items, and filter volunteer data to areas)
                   |--> Drop off information - Map and display filtered volunteer information such as available time and contact details (dynamic dataset)
         |--> Donate items 1
              |--> Donate Category (Generic Layer ) - map and display donate categories in the form of icons and words (dynamic data set)
         |--> Donate items 2
              |--> Donate Category Detailed (Detailed Layer) - Filter data based on Donate Items 1 selection. Map and display filtered donate categories
              |--> Donate Item Description - Create backend data through POST method. Users will define item details through onclick buttons which set the states for required body values.
                   |--> Upload photo - Currently hardcoded the photo upload to pull specific images from imgur, based on what user has selected.
         |--> Donate confirmation - Page to confirm submission, as well as option to donate a new item or view overall application.
         |--> Donate Application - Overview of items donated through image and texts
              |--> Donate Application Card - Users will be able to see all their donated items by fetching the data from the backend. Users can delete specific item data in the Backend through the DELETE method. Subsequently mapping and displaying the data through text and photo.
 
 
    |--> Item Request (/item-request)
         |--> Item Category
              |--> Pre-set Items
              |--> Other requests - Through text inputs or photo inputs
         |--> Item Cart
         |--> Delivery Methods - Delivery to the migrant worker's dormitory or self-pickup


Technical Requirements
Your app must:

Implement thoughtful user stories that are significant enough to help you know which features to build and which to scrap
Implement full CRUD the app has to be able to create, read, update and delete data from the database
Have at least 2 types of login, mainly user and admin, the different types should have difference accesses to the APIs and Webpages
Implement at least 10 API endpoints for all CRUD functions, e.g. 1 endpoint for Create, 1 for Read and so on
Your app should:

Use a database or a way to store your data, whether that's one we've covered in class or one you want to learn
Have an interactive front-end
Note: front-end does not mean javascript in the browser. Front-end can also mean HTML and CSS.

Necessary Deliverables
A git repository hosted on Github, with a link to your hosted project, and FREQUENT commits dating back to the very beginning of the project
A README.md file with:
An embedded screenshot of the app
Explanations of the technologies used
A couple paragraphs about the general approach you took
Installation instructions for any dependencies
Link to your user stories – who are your users, what do they want, and why?
Link to your wireframes – sketches of major views / interfaces in your application
Descriptions of any unsolved problems or major hurdles you had to overcome
A presentation of 10 minutes or less to demo your app
If an SQL database is used, an SQL file for creating the SQL tables.

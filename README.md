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

```
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
     |--> Home Page Main
        |--> Home Page (user)
            |--> Featured services card
        |--> Home Page Handyman
            |--> Home Page 2 handyman
            |--> Home Page 3 handyman 
                |--> Handyman services cards
     |--> Services
                

```

# Amazon S3 Bucket, Cloud Service setup
## Creating profile images for users as primary example
```                
------Front End------ 
const updateProfileImage = async (event) => {
    try {
      const file = event.target.files[0];
      
      // GET SECURE URL FROM OUR SERVER TO ACCESS S3 BUCKET
      const { url } = await fetch("http://localhost:8001/s3url").then((res) =>
        res.json()
      );
      console.log(url);

      // POST THE IMAGE DIRECTLY TO THE S3 BUCKET
      await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: file,
      });

      const imageUrl = url.split("?")[0];
      // setProfile_image(imageUrl);
      // POST REQUEST TO MY SERVER TO STORE ANY EXTRA
      
      if (userDetails.image_url === null || !userDetails.image_url) {
        try {
          const res = await fetch("http://127.0.0.1:8001/profileimage/", {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({
              image_url: imageUrl,
              user_id: user_id,
            }),
          });
          console.log(res);
          retreiveUserInfo();
        } catch (e) {
          console.error(e);
        }
      } else {
        try {
          const res = await fetch("http://127.0.0.1:8001/profileimage/", {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            method: "PUT",
            body: JSON.stringify({
              user_id: user_id,
              image_url: imageUrl,
            }),
          });
          console.log(res);
          retreiveUserInfo();
        } catch (e) {
          console.error(e);
        }
      }
    } catch (e) {
      console.error(e);
    }
  };

------Backend------
const s3 = require("./s3");

app.use(express.static("front"));
app.use(cors());

app.get("/s3Url", async (req, res) => {
  const url = await s3.generateUploadURL();
  res.send({ url });
});
```


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


# Screenshots
1) Login/Signup Page =====> <img width="676" alt="Screenshot 2022-11-18 at 5 07 54 PM" src="https://user-images.githubusercontent.com/115208112/202664641-b1f1f435-3192-4d76-9401-2032cab50c2f.png">
2) Create Account Page 1 =====> <img width="587" alt="Screenshot 2022-11-18 at 5 14 38 PM" src="https://user-images.githubusercontent.com/115208112/202666046-889f2651-8c69-47cd-8009-1090affc09b2.png">
3) Create Account Page 2 =====> <img width="500" alt="Screenshot 2022-11-18 at 5 20 46 PM" src="https://user-images.githubusercontent.com/115208112/202666952-3f3b4125-480d-4a4f-8404-dd6fa71e6353.png">
4) Create Account Page 3 User =====> <img width="503" alt="Screenshot 2022-11-18 at 5 22 03 PM" src="https://user-images.githubusercontent.com/115208112/202667194-59712e27-a8c2-48e8-8a6c-083e2dfaacc8.png">
5) Create Account Page 3 Handyman =====> <img width="422" alt="Screenshot 2022-11-18 at 5 23 45 PM" src="https://user-images.githubusercontent.com/115208112/202667486-fea2a5e5-e041-46d5-8e53-895eff8ca3c1.png">
6) Login Page =====> <img width="542" alt="Screenshot 2022-11-18 at 5 15 34 PM" src="https://user-images.githubusercontent.com/115208112/202666491-a0dcd29d-9a1b-4172-ab81-86b945b8bdec.png">
7) Create Account Page =====> <img width="587" alt="Screenshot 2022-11-18 at 5 14 38 PM" src="https://user-images.githubusercontent.com/115208112/202666046-889f2651-8c69-47cd-8009-1090affc09b2.png">
8) Handyman Home Page =====> <img width="493" alt="Screenshot 2022-11-18 at 5 25 10 PM" src="https://user-images.githubusercontent.com/115208112/202667931-e0a95fb2-3960-4358-b400-67b21ebfb3e9.png">
9) User Home Page =====> <img width="664" alt="Screenshot 2022-11-18 at 5 27 11 PM" src="https://user-images.githubusercontent.com/115208112/202668263-3f1d9e46-8221-4570-af58-f1a542c63919.png">
10) User Profile Page =====> <img width="714" alt="Screenshot 2022-11-18 at 5 28 20 PM" src="https://user-images.githubusercontent.com/115208112/202668500-004ebbf4-f654-4b0c-bcb5-10c31ebbcfda.png">
11) Handyman Profile Page =====> <img width="573" alt="Screenshot 2022-11-18 at 5 29 32 PM" src="https://user-images.githubusercontent.com/115208112/202668765-3917fc24-74b6-4a5c-a589-3bfc13a669c0.png">
12) View Handyman Profile Page =====> <img width="414" alt="Screenshot 2022-11-18 at 7 30 14 PM" src="https://user-images.githubusercontent.com/115208112/202695807-ec3a369b-4ed1-4ee6-8333-3366be045f7b.png">
13) User notifications Page =====> <img width="568" alt="Screenshot 2022-11-18 at 5 50 43 PM" src="https://user-images.githubusercontent.com/115208112/202673087-2c6f3acc-8e3e-443f-8b42-5e3a31de037c.png">
14) Handyman notifications Page =====> <img width="513" alt="Screenshot 2022-11-18 at 5 32 38 PM" src="https://user-images.githubusercontent.com/115208112/202669449-1149f86a-779d-4f5c-a6d8-ac7bca3fb5a1.png">
15) Handyman Job's Page =====> <img width="482" alt="Screenshot 2022-11-18 at 5 44 25 PM" src="https://user-images.githubusercontent.com/115208112/202671749-d87cd018-5655-42ec-8a46-c8a80330edff.png">
16) Handyman Approve Job Page =====> <img width="401" alt="Screenshot 2022-11-18 at 5 46 16 PM" src="https://user-images.githubusercontent.com/115208112/202672138-6c258c07-4350-4e18-b0a2-7253384cf143.png">
17) User Job's Page =====> <img width="548" alt="Screenshot 2022-11-18 at 5 47 51 PM" src="https://user-images.githubusercontent.com/115208112/202672458-083c98f8-1805-4aed-8291-1d7d2bb3bb6b.png">
18) User Complete Job's Page =====> <img width="557" alt="Screenshot 2022-11-18 at 5 49 34 PM" src="https://user-images.githubusercontent.com/115208112/202672916-afa226ca-5bc2-4944-85cb-97b3a67e7cd6.png">
19) User Cancel Job's Page =====> <img width="565" alt="Screenshot 2022-11-18 at 5 49 49 PM" src="https://user-images.githubusercontent.com/115208112/202672942-d438470c-3171-45ee-87e2-799b25dc87f0.png">
20) User + Handyman's Chat Function =====> <img width="535" alt="Screenshot 2022-11-18 at 7 22 05 PM" src="https://user-images.githubusercontent.com/115208112/202694440-7d57c1dd-5997-484f-9f73-330c3deb48ba.png">
21) User Review Page =====> <img width="498" alt="Screenshot 2022-11-18 at 7 27 52 PM" src="https://user-images.githubusercontent.com/115208112/202695365-118ea61f-58cd-4bb2-ac3c-daf40230b5cc.png">
22) Handyman Profile Page with Review =====> <img width="489" alt="Screenshot 2022-11-18 at 7 28 15 PM" src="https://user-images.githubusercontent.com/115208112/202695472-84edd3fb-a641-4de5-9bc7-c85bf27f5e06.png">

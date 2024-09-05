**MERN Real Estate Application**

A full-stack real estate application built using the MERN stack (MongoDB, Express.js, React.js, Node.js).
This app allows users to list properties for sale or rent and connect with interested buyers or renters.

**Features**

**1. User Features**
1. Property Listings: Users can browse properties available for sale or rent.
2. Post Properties: Users can create listings for their properties, including details like price, location, and property type.
3. Contact Property Owners: Interested users can contact property owners directly through the platform.
4. Search & Filter: Users can search for properties based on location, price range, and other criteria.
5. Responsive Design: Tailored for mobile and desktop, providing a smooth experience across devices.

**2. Admin Features**
1. Dashboard Overview: Admins can view key statistics like:
2. Total properties listed.
3. Recent listings and user activity.
4. Manage Listings: Admins can moderate property listings and remove inappropriate content.
5. User Management: Admins can view and manage registered users.

**3. UI/UX**
1. Tailwind CSS: Used for a modern and responsive design.

**Tech Stack**

**1. Frontend**
1. React.js: For building the user interface.
2. Tailwind CSS: For responsive and modern styling.
3. Axios: For making API requests.

**2. Backend**
1. Node.js & Express.js: For server-side logic and API creation.
2. MongoDB & Mongoose: For managing the database.

**3. Authentication & Authorization**
1. JWT (JSON Web Token): Secure user authentication.
2. Gooogle OAuth using Firebase.

**Setup Instructions**

**Prerequisites**
1. Node.js installed.
2. MongoDB installed and running.

**Installation**
1. Clone the repository:
   
bash
git clone https://github.com/prashantagrawal2107/mern-real-estate-app.git
cd mern-real-estate-app

2. Install dependencies:

bash
npm install

3. Set up environment variables:

Create a .env file in the root directory with the following:
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret

4. Run the development server:

bash
npm run dev

Open your browser and navigate to http://localhost:3000.

_**HOSTED LINK**_ : https://mern-estate-app-pk.onrender.com

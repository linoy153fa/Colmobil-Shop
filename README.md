
/////////////////////////////////////////////////////////////////////////////////////////////////////

#Colmobil Club with Next.js

This project is designed with a focus on performance,SEO,and scalability.  
Styling is based on pre-designed templates to enable rapid UI development while maintaining consistent design patterns across the application.

##Dynamic SEO
I use Next.js’s `generateMetadata` function on every route,including product detail pages and filtered search pages.This allows me to:  
*Dynamically generate relevant titles and descriptions based on user context,such as search terms or selected categories  
*Improve search engine indexing and increase click through rates.  
*Avoid manual or static `<head>` management, reducing errors and improving maintainability.  
This dynamic SEO strategy aligns with best practices for discoverability and managing dynamic content effectively.

##App Router Architecture
The project leverages Next.js’s modern App Router (`/app` directory), which provides:  
*Layouts and templates->`layout.js`  
*Segment based rendering for modular route management  
*Support for Server Components to improve performance  
*Built-in loading and error boundaries for smooth UX  
Choosing the App Router improves performance, simplifies routing logic, and offers native support for suspense, metadata handling, and nested layouts.

##Server-Side Data Fetching and ISR
Data fetching happens server-side using the native `fetch()` API, combined with Next.js’s ISR (`next.revalidate`):  
*Delivers up-to-date content with fast load times by caching API responses for 1 hour using ISR (`revalidate: 3600`).
*Applies filtering logic server-side to avoid unnecessary client-side rendering  
*Centralizes the base API URL and uses reusable API modules for maintainability    
Fetching data server-side benefits SEO,reduces client complexity,and keeps filtering logic secure and consistent.

##Filtering Logic
I implemented two main filtering options on product listing pages:  
*Text matching against product title.  
*Category filtering, including a default "All" option.  
Filters are passed through `searchParams` and applied before page rendering, maintaining fast, SEO-friendly user experiences.  
Instead of using local state to manage filters on the client side, I chose to reflect filter selections directly in the URL using searchParams.
This approach offers several advantages:
SEO indexing:Each filter combination generates a unique URL that can be crawled and indexed by search engines, improving visibility and discoverability.
Consistent server rendering: By applying filters server-side based on the URL, the page is rendered with the correct data on initial load, improving performance and user experience.
Avoids client-side logic:Filtering happens before rendering, so there's no need to wait for client-side JavaScript to load and execute before showing results.
This method aligns with best practices for dynamic, SEO-friendly web applications.


##Error and Loading Management
To deliver a reliable user experience, I included:  
*A `loading.jsx` component for loading states.  
*Usage of `notFound()` to trigger 404 pages for invalid product IDs. 
*An `error.jsx` component to catch and display unexpected errors.  
This layered error and loading strategy ensures users always receive helpful feedback and smooth navigation.

To run the project locally:

npm install
npm run dev

Open [http://localhost:3000](http://localhost:3000) with your browser to see the project.

/////////////////////////////////////////////////////////////////////////////////////////////////////
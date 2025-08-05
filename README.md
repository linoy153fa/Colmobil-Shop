# Colmobil Shop - Next.js Product Catalog

A product catalog built with Next.js that fetches data from FakeStoreAPI.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Features

- Home page with "Hello World" display
- Products catalog with search and filtering
- Individual product detail pages
- Responsive design
- Loading states and error handling
- SEO optimized with dynamic metadata

## Technical Decisions & Rendering Strategy

### Why I Chose Next.js App Router

I decided to use Next.js App Router instead of the older Pages Router because:
**Server Components**: Better performance by rendering components on the server
**Built-in SEO**: Easier metadata management with `generateMetadata`
**Simpler routing**: File-based routing is more intuitive
**Better error handling**: Built-in error boundaries and loading states

### Data Fetching Strategy

I fetch all data server-side using the native `fetch()` API with ISR (Incremental Static Regeneration):

```javascript
// Example from getProducts.js
const response = await fetch(`${BASE_URL}/products`, {
  next: { revalidate: 3600 } // Cache for 1 hour
});
```

**Why server-side fetching?**
- Better SEO (search engines can see the content)
- Faster initial page loads
- Reduced client-side JavaScript bundle
- More secure (API keys stay on server)

### Rendering Strategy for Each Page

#### 1. Home Page (`/`)
**Strategy**: Static rendering
**Reason**: Simple content that doesn't change often
**SEO Impact**: Fast loading, easily crawlable

#### 2. Products Catalog (`/products`)
**Strategy**: Server-side rendering with ISR
**Reason**: Product data changes occasionally, but not constantly
**SEO Impact**: Fresh content with good performance
**Filtering**: Applied server-side before rendering

#### 3. Individual Product Pages (`/products/[id]`)
**Strategy**: Server-side rendering with ISR
**Reason**: Product details are stable but need to be updated
**SEO Impact**: Each product gets its own crawlable URL
**Error Handling**: Returns 404 for invalid product IDs

### Search & Filtering Implementation

I chose to implement filtering server-side rather than client-side:

**Server-side approach benefits:**
 **SEO friendly**: Each filter combination gets a unique URL
 **Faster initial load**: No waiting for client-side JavaScript
**Consistent with server rendering**: No hydration mismatches

**How it works:**
1. User submits search/filter form
2. URL updates with search parameters
3. Server fetches data and applies filters
4. Page renders with filtered results
5. Search engines can index each filtered view

### Error Handling Strategy

I implemented a layered approach:
**Loading states**: Show spinner while data loads
**Error boundaries**: Catch unexpected errors gracefully
**404 handling**: Proper "not found" pages for invalid routes.
**API error handling**: Graceful fallbacks when API fails.

### Performance Considerations

**ISR caching**: 1 hour cache reduces API calls
**Image optimization**: Using Next.js Image component
**Code splitting**: Automatic with App Router
**Minimal client-side JavaScript**: Server components reduce bundle size

## What I Learned

This project strengthened my understanding of
- How server-side rendering improves SEO and performance
- Why URL-based state is better than client-side state for filters
- The importance of proper error handling in production apps
- How to structure a Next.js app for maintainability

## Future Improvements

If I had more time, I would add:
- TypeScript for better type safety
- Unit tests for critical functions
- Product image lazy loading
---

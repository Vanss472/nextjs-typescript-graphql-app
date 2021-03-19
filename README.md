## Intro
Fetching data with Next.js and Apollo Client using 3 different ways:
  - Static rendering
  - Server-side rendering
  - Client-side rendering

### Static rendering
Pages are generated at build time and serbed as static HTML file.

---

### Server-side rendering
Pages are generated dynamically for each incoming request.

---

### Client-side rendering
Typically how react app works, the browser requests the app -> page loads -> then render react data to the user. No bueno for SEO crawlers.

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Resources
[Apollo Blog](https://www.apollographql.com/blog/getting-started-with-apollo-client-in-next-js/)

[https://morioh.com/p/fe7efd51f22f](https://morioh.com/p/fe7efd51f22f)

[GraphQL Code Generator](https://www.graphql-code-generator.com/docs/getting-started/installation)

[Apollo Docs](https://www.apollographql.com/docs/react/get-started/)

[Next.js Types](https://nextjs.org/learn/excel/typescript/nextjs-types)

[LogRocket Tutorial](https://blog.logrocket.com/build-a-graphql-react-app-with-typescript/)
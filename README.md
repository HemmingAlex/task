This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).



## Decisions for the task - alex hemming mostly frontend.

The use of react-dnd-beutiful was discounted due to it being depricated

a modern version of it was used instead

the use of Redux was initially avoided due to it being depricated, instead i used redux toolkit as recommended by redux.

The use of prop drilling was used for the establishment of the to do list, because it was fast, though this could have been doen throuhg redux it would have been less efficient. Instead redux is only for saving the board, so that multiple boards could be used. An expmple of how this can be used is in the button for "second page"

The use of multiple boards was not introduced due to suggested time restraints.

For testing jest and react testing library was added but only one simple test was made, which can be tested with npm run test.

For styles, tailwind was used as it is faster, but inline styles have been used due to incompatibility with the insides of the drag and drop elements.

The use of supabase was used for the database as it is quick and easy to set up, free and uses SQL type systems. however, for this situation no row level securtiy was used due to time restraints.

An api endpoint is in the standard nextjs/api folder, under the title "SaveBoard"

The website has been deployed on vercel using this link you can view it:



Difficulties :
react-dnd-beutiful being depricated caused difficulties in initial setup.
reduxtoolkit, has a different folder structure to redux, so transitioning over caused redundent code to be deleted,

it should be noted that Math.random() would not be a normal method for creating original Id's and keys.

Time taken in total is a rough estimate of 3 hours including breaks and slightly spread over two days.









## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

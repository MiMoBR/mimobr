This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
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

------- MiMoBR Setup ---------
npx create-next-app YOUR_PROJECT_NAME with-typescript next-typescript-ga
yarn add -D @types/gtag.js


yarn add react-gtm-module --save


## GTM
1 - Download react-gtm-module

2 - import TagManager from "react-gtm-module"; at _app.tsx

3 - TagManager.initialize({ gtmId: 'GTM-WV45BL3' });

4 - Declare at tsconfig.json 
4.1 - Add 
    {
    "compilerOptions": {
        "typeRoots": ["./src/types", "./node_modules/@types"]
    },
    "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx","src/types/**/*.d.ts"],
    }

5 - At globals.d.ts has to declare global datalayer
5.1 - Add
    declare global {
        interface Window {
        dataLayer: Record<string, any>[];
        }
    }
    
    export {}; 

6 - Create a sample, just to test
6.1 at index.tsx
    const handleClick = () => {
        if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
            event: 'click Cta Next',
            category: 'aHref Click',
            action: 'Follow Link',
            label: 'Clink Event',
            value: 1981
        });
        } else {
        console.warn('dataLayer is not defined');
        }
    };

  return (
    <>
      <NavBar/>
          <a href='#' onClick={ () => handleClick()}>CLICK Event</a>
      </main>
    </>
  )

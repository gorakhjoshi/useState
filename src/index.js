import React from 'react';
import ReactDOM from 'react-dom';

/*
  Instructions:
    Given the array of "posts", recreate the functionality for this app. 
    By default, each post preview is cut off until the user clicks "Open". 
    Only one post can be "Open" at a time.
*/

function App({ posts }) {
  return <div>{JSON.stringify(posts, null, 2)}</div>;
}

const rootElement = document.getElementById('root');
ReactDOM.render(
  <App
    posts={[
      {
        id: 0,
        img: 'https://res.cloudinary.com/gorakhjoshi-com/image/upload/v1643684133/gorakhjoshi.com/JS_k0akkh.png',
        text: "With this course you are going to learn beyond just the basics. You won't just learn patterns, techniques and best practices. You are going to understand the 'why' of the toughest part of the language, to the point that when you get asked any question about Javascript in an interview or in a meeting, you will be able to explain concepts that would truly make people see that you are a senior javascript programmer. Whether you are a web developer, a React, Angular, Vue.js developer (frontend developer), or a Node.js backend developer, you will benefit from this course because Javascript is at the core of these professions.",
      },
      {
        id: 1,
        img: 'This project based live session will introduce you to all of the modern toolchain of a React developer in 2022. Along the way, we will build a massive e-commerce application similar to Shopify using React, Redux, React Hooks, React Suspense, React Router, GraphQL, Context API, Firebase, Redux-Saga, Stripe + more. This is going to be a full stack app (MERN stack), using Firebase.',
      },
      {
        id: 2,
        img: 'https://res.cloudinary.com/gorakhjoshi-com/image/upload/v1643684431/gorakhjoshi.com/node_b2u953.png',
        text: "In this course, we'll build an entire project and you will learn how these different MongoDB, Express.js, React.js and Node.js technologies work together step by step. We'll first have a look at all the individual building blocks, so that we then can also combine them all into one amazing application by the end of the course.",
      },
    ]}
  />,
  rootElement
);

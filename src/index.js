import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

function App({ posts }) {
  const [openIndex, setOpenIndex] = React.useState(0);

  return (
    <ul>
      {posts.map(({ id, img, text }, index) => {
        const isOpen = openIndex === index;

        const textToShow = isOpen ? text : text.substring(0, 100) + '...';

        return (
          <li key={id} style={{ border: isOpen ? '1px solid black' : 'none' }}>
            <img src={img} alt='Post avatar' />
            <p>{textToShow}</p>
            {!isOpen && (
              <button onClick={() => setOpenIndex(index)}>Open</button>
            )}
          </li>
        );
      })}
    </ul>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(
  <App
    posts={[
      {
        id: 0,
        img: 'https://res.cloudinary.com/gorakhjoshi-com/image/upload/v1643684133/gorakhjoshi.com/JS_k0akkh.png',
        text: 'This project based live session will introduce you to all of the modern toolchain of a React developer in 2022. Along the way, we will build a massive e-commerce application similar to Shopify using React, Redux, React Hooks, React Suspense, React Router, GraphQL, Context API, Firebase, Redux-Saga, Stripe + more. This is going to be a full stack app (MERN stack), using Firebase.',
      },
      {
        id: 1,
        img: 'https://res.cloudinary.com/gorakhjoshi-com/image/upload/v1643683670/gorakhjoshi.com/React_Hook_mjea3c.png',
        text: 'This project based live session will introduce you to all of the modern toolchain of a React developer in 2022. Along the way, we will build a massive e-commerce application similar to Shopify using React, Redux, React Hooks, React Suspense, React Router, GraphQL, Context API, Firebase, Redux-Saga, React Testing Library + more. This is going to be a full stack app (MERN stack), using Firebase.',
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

import React from "react";

import Pdf from "react-to-pdf";
const ref = React.createRef();

const Blog = () => {
  return (
    <div className="container mx-auto min-h-screen mt-10 px-5">
      <div className="text-center my-10">
        <Pdf targetRef={ref} filename="generated.pdf">
          {({ toPdf }) => (
            <button
              onClick={toPdf}
              className="bg-primary py-2 px-4 rounded text-white"
            >
              Generate Pdf
            </button>
          )}
        </Pdf>
      </div>
      <div ref={ref}>
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            Tell us the differences between uncontrolled and controlled
            components.
          </div>
          <div className="collapse-content">
            <p>
              In the context of a software application, uncontrolled components
              and controlled components refer to the way in which data is
              managed and updated in the user interface. Uncontrolled components
              are components whose data is managed by the DOM (Document Object
              Model) and not by the component itself. This means that the
              component does not control the value of the input, and any updates
              made to the value are made directly to the DOM. Uncontrolled
              components are typically used for simple input fields like text
              boxes or checkboxes, where the user input is not critical for the
              application is logic. Controlled components, on the other hand,
              are components whose data is managed by the component itself. This
              means that the component controls the value of the input, and any
              updates made to the value are handled by the component is state.
              Controlled components are typically used for more complex input
              fields like dropdown menus or date pickers, where the user input
              is critical for the application is logic. The main difference
              between uncontrolled and controlled components is the way in which
              data is managed and updated. Uncontrolled components allow for
              simpler code and faster development time but provide less control
              over the data. Controlled components provide more control over the
              data but require more complex code and can be slower to develop.
            </p>
          </div>
        </div>

        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            How to validate React props using PropTypes
          </div>
          <div className="collapse-content">
            <p>
              In React, PropTypes is a built-in validation library used to
              ensure that the props passed to a component are of the expected
              type. Here is how to use PropTypes to validate React props:
              <br />
              1.Import the PropTypes library:
              <br />
              2. Define the propTypes for the component by creating a static
              propTypes object inside the component:
              <br />
              3. Define the expected type of each prop using the PropTypes
              library. PropTypes supports a variety of data types such as
              string, number, bool, arrayOf, and shape. You can also define
              multiple valid types using the oneOfType method.
              <br />
              3. Add the isRequired validator if the prop is required. This will
              ensure that an error is thrown if the required prop is not
              provided.
              <br />
              4. Use the component and pass in the props as usual. PropTypes
              will automatically validate the props and provide error messages
              in the console if any of the props fail validation.
              <br />
              Note that PropTypes is a development-time only tool and does not
              affect the performance of the application in production. Also,
              PropTypes is being deprecated in favor of TypeScript, which offers
              more powerful type-checking capabilities.
            </p>
          </div>
        </div>

        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            Tell us the difference between nodejs and express js.
          </div>
          <div className="collapse-content">
            <p>
              Node.js and Express.js are both popular tools used in web
              development, but they serve different purposes. Here are the main
              differences between Node.js and Express.js:
              <br />
              <br />
              Node.js:
              <br />
              1. Node.js is a JavaScript runtime that allows developers to run
              JavaScript on the server-side.
              <br />
              2. Node.js provides a built-in set of modules that can be used for
              various tasks, such as reading and writing files, networking, and
              handling HTTP requests.
              <br />
              3. Node.js is not a web framework but rather a runtime
              environment, so it can be used to build a wide variety of
              applications, not just web applications.
              <br />
              <br />
              Express.js:
              <br />
              1. Express.js is a web framework built on top of Node.js that
              provides a set of tools for building web applications, such as
              routing, middleware, and templates.
              <br />
              2. Express.js simplifies the process of building web applications
              by providing a set of standard tools and conventions.
              <br />
              3. Express.js is highly modular and customizable, allowing
              developers to pick and choose which components they want to use
              and how they want to use them.
              <br />
              <br />
              In summary, Node.js is a JavaScript runtime that can be used to
              build a wide range of applications, while Express.js is a web
              framework built on top of Node.js that simplifies the process of
              building web applications. Node.js provides the underlying
              functionality for Express.js to work with, and Express.js adds
              additional tools and conventions specifically for building web
              applications.
            </p>
          </div>
        </div>

        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            What is a custom hook, and why will you create a custom hook?
          </div>
          <div className="collapse-content">
            <p>
              In React, a custom hook is a JavaScript function that starts with
              the prefix use and allows developers to reuse stateful logic
              across multiple components. Custom hooks are a way to extract and
              reuse stateful logic from a component, allowing for better
              separation of concerns and more reusable code.
              <br />
              <br />
              A custom hook can be used to encapsulate a specific behavior, such
              as fetching data from an API or subscribing to a WebSocket. The
              custom hook can be used by any component that needs that specific
              behavior, allowing for better code reuse and easier maintenance.
              <br />
              <br />
              There are several reasons why you might want to create a custom
              hook:
              <br />
              1. Reusability: Custom hooks allow you to reuse stateful logic
              across multiple components without duplicating code.
              <br />
              2. Separation of Concerns: Custom hooks allow you to separate
              concerns, making it easier to reason about and test your code.
              <br />
              3. Encapsulation: Custom hooks allow you to encapsulate complex
              logic, making it easier to use and understand.
              <br />
              4. Abstraction: Custom hooks can abstract away complex
              implementation details, making it easier to use the hook in
              different contexts.
              <br />
              <br />
              Overall, custom hooks are a powerful tool for building reusable
              and maintainable code in React. By encapsulating complex stateful
              logic in a custom hook, you can create more modular, testable, and
              composable code.
            </p>
          </div>
        </div>
        {/* End */}
      </div>
    </div>
  );
};

export default Blog;

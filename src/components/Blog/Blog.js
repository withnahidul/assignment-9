import React from "react";

const Blog = () => {
  return (
    <div>
      <h2 className="text-4xl">What is Context API?</h2>
      <p className="text-2xl">
        The Context Api is a React Structure its solve props drilling problems.
        Its first step is create a context and then its provide two component
        context provider and context consumer. second step wrap parent with
        context provider. third step provide a value of the context as prop.
        four step Warp child with context consumer. five step consumer follows
        the render prop pattern.
      </p>
      <h2 className="text-4xl">What is Semantic tag?</h2>
      <p className="text-2xl">text goes here...</p>
      <h2 className="text-4xl">
        3.Diffrence between Block elements and inline Elements?
      </h2>
      <p className="text-2xl">
        A block-level element always starts on a new line A block-level element
        always takes up the full width available. In a block element we can use
        break line by force. An Inline elements doesnot start on a new line. An
        Inline elements only takes up as much width as necessary. In an Inline
        elements we cant use break line by force.
      </p>
    </div>
  );
};

export default Blog;

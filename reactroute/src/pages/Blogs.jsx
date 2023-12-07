import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link component
import { DataBlogs } from "../DataBlogs";

function Blogs() {
  const [blogs, setVlogs] = useState(DataBlogs);
  const trruncateString = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + " ... ";
    } else {
      return str;
    }
  };
  return (
    <div>
      <h1 className=" text-2xl text-center">Bloags Page</h1>
      <section className="grid grid-cols-3 gap-4 p-3">
        {blogs.map((blog) => {
          const { id, title, body } = blog;
          return (
            <article key={id}>
              <h3 className=" text-3xl p-3">{title}</h3>
              <p>{trruncateString(body, 100)}</p>
              <Link to={title}>Learn More</Link>
            </article>
          );
        })}
      </section>
    </div>
  );
}

export default Blogs;

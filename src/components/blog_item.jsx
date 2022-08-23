import React from 'react';

const BlogList = (props) => {
  return (
    <div>
      <h1>{props.data.slug}</h1>
      <p>Blog summary</p>
      <img src={props.data.image} class="max-height= 10px" />
      <p>{props.data.date}</p>
    </div>
  );
};
export default BlogList;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { doubleNumber } from '../store/actions';

const BlogList = (props) => {
  const data = useSelector((state) => state.reg);
  const dispatch = useDispatch();
  console.log('counter', data);
  return (
    <div>
      <h1>{props.data.slug}</h1>
      <p>Blog summary</p>
      <button onClick={() => dispatch(doubleNumber())}> + </button>
      <p>xx {data.counter}</p>
      <img src={props.data.image} className="max-height= 10px" />
      <p>{props.data.date}</p>
    </div>
  );
};
export default BlogList;

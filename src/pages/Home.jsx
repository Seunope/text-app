import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import BlogItem from '../components/blog_item';

const HomePage = (props) => {
  const [loading, setLoading] = useState(false);
  const [resData, setResData] = useState(null);

  useEffect(() => {
    remoteCall();
  }, []);

  const remoteCall = async () => {
    let response = null;
    setLoading(true);
    try {
      const res = await axios.get(
        ' https://wp.newborntoolkit.org/wp-json/nest360/v1/news'
      );
      console.log('response', res.data.data.posts);
      setResData(res.data.data.posts);
      response = res.data;
    } catch (err) {
      response = err.message;
    }
    setLoading(false);
    return response;

    console.log('response', response);
  };

  const mapBlogData = () => {
    return resData.map((element) => {
      console.log('element', element);
      return <BlogItem data={element} />;
    });
  };

  return (
    <div>
      {!loading ? resData ? mapBlogData() : null : <p>Fetching data</p>}
    </div>
  );
};
export default HomePage;

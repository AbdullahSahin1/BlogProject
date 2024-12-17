import React, {useState} from 'react';

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  const [blogpost, setBlogpost] = useState([
    {title: 'React Native'},
    {title: 'Javascirpt'}
  ])
  const addBlogPost = () => {
    setBlogpost([...blogPosts,{title:'Flutter'}])
  }
  const blogPosts = [{ title: 'React Native' }, { title: 'Javascript' }];
  return (
    <BlogContext.Provider value={{data:blogPosts,addBlogPost}}>{children}</BlogContext.Provider>
  );
};

export default BlogContext;

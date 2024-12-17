import React, { useState, useReducer } from "react";
import CreateDataContext from "./CreateDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_blogpost":
      return [
        ...state,
        {
          id: Math.floor(Math.random()*999),
          title: "Vue Js",
        },
      ];
      case "delete_blogpost":
      return state.filter ((blogPost)=>blogPost.id !== action.payload)
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: "add_blogpost" });
  };
};

const deleteBlockPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete_blogpost",payload: id });
  };
};
export const { Context, Provider } = CreateDataContext(
  blogReducer,
  { addBlogPost,deleteBlockPost },
  []
);

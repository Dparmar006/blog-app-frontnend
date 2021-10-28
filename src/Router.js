import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AuthorInfo from "./pages/AuthorInfo";
import Home from "./pages/Home";
import MostCommentedPosts from "./pages/MostCommentedPost";
import MostLikedPosts from "./pages/MostLikedPosts";
import Post from "./pages/Post";
const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/author/:id" component={AuthorInfo} />
        <Route exact path="/post/:id" component={Post} />
        <Route exact path="/most-liked" component={MostLikedPosts} />
        <Route exact path="/most-commented" component={MostCommentedPosts} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;

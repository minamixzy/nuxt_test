<template lang="">
<div class="home-page">

  <div class="banner">
    <div class="container">
      <h1 class="logo-font">conduit</h1>
      <p>A place to share your knowledge.</p>
    </div>
  </div>

  <div class="container page">
    <div class="row">

      <div class="col-md-9">
        <div class="feed-toggle">
          <ul class="nav nav-pills outline-active">
            <li class="nav-item">
              <a class="nav-link disabled" href="">Your Feed</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="">Global Feed</a>
            </li>
          </ul>
        </div>

        <div class="article-preview" v-for="article in articles">
          <div class="article-meta">
            <nuxt-link :to="{
              name:'profile',
              params:{
                username:article.author.username
              }
            }">
            <img :src="article.author.image" /></nuxt-link>
            <div class="info">
              <a href="" class="author">{{article.author.username}}</a>
              <span class="date">January 20th</span>
            </div>
            <button class="btn btn-outline-primary btn-sm pull-xs-right" :class="{active:article.favorited}">
              <i class="ion-heart"></i> {{article.favoritesCount}}
            </button>
          </div>
          <a href="" class="preview-link">
            <h1>{{article.title}}</h1>
            <p>{{article.body}}</p>
            <span>Read more...</span>
          </a>
        </div>


      </div>

      <div class="col-md-3">
        <div class="sidebar">
          <p>Popular Tags</p>

          <div class="tag-list">
            <a href="" class="tag-pill tag-default">programming</a>
            <a href="" class="tag-pill tag-default">javascript</a>
            <a href="" class="tag-pill tag-default">emberjs</a>
            <a href="" class="tag-pill tag-default">angularjs</a>
            <a href="" class="tag-pill tag-default">react</a>
            <a href="" class="tag-pill tag-default">mean</a>
            <a href="" class="tag-pill tag-default">node</a>
            <a href="" class="tag-pill tag-default">rails</a>
          </div>
        </div>
      </div>

    </div>
  </div>

</div>
</template>

<script>
import { getArticles } from "@/api/article";
export default {
  name: "homePage",
  /**
   * 获取文章列表
   */
  async asyncData({
    isDev,
    route,
    store,
    env,
    params,
    query,
    req,
    res,
    redirect,
    error,
  }) {
    const { data } = await getArticles();

    console.log(data)

    return {
      articles: data.articles,
      articlesCount: data.articlesCount,
    };
  },

  data() {
    return {};
  },
};
</script>
<script lang="ts" setup>
import { GLOBAL } from "@/lib/constants.ts";
import { getCollection } from "astro:content";
import ArticleSnippet from "src/components/ArticleSnippet.vue";
import Anchor from "src/components/common/Anchor.vue";

const posts = await getCollection("blogs");
const featuredPosts = posts.filter((post) => post.data.isFeatured);
</script>

<template>
  <div class="flex justify-between items-center w-full">
    <h3 class="font-display text-lg sm:text-xl leading-loose">{{ GLOBAL.articles.title }}</h3>
    <Anchor ariaLabel="View All" class="text-base" url="/blogs">View All</Anchor>
  </div>
  <ul class="my-8">
    <li
      v-for="(post, index) in featuredPosts"
      :key="index"
    >
      <ArticleSnippet
        :description="post.data.description"
        :duration="post.data.readTime"
        :timestamp="post.data.timestamp"
        :title="post.data.title"
        :url="`${post.collection}/${post.id}`"
      />
    </li>
  </ul>
</template>

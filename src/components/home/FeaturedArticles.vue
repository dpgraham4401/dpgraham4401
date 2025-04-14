<script lang="ts" setup>
import type {ArticleFrontmatter} from "@/lib/types";
import ArticleSnippet from "src/components/ArticleSnippet.vue";
import Anchor from "src/components/common/Anchor.vue";

type Props = {
  articles: Array<ArticleFrontmatter>;
}

defineProps<Props>();

</script>

<template>
  <div class="flex justify-between items-center w-full">
    <h3 class="font-display text-lg sm:text-xl leading-loose">{GLOBAL.articlesName}</h3>
    <Anchor ariaLabel="View All" class="text-base" url="/blog">{GLOBAL.viewAll}</Anchor>
  </div>
  <ul class="my-8">
    <li
      v-for="(article, index) in articles"
      :key="index"
    >
      <ArticleSnippet
        :description="article.description"
        :duration="`${article.time} min`"
        :timestamp="article.timestamp"
        :title="article.title"
        :url="article.filename"
      />
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { GLOBAL } from "@/lib/constants.ts";
import { getCollection } from "astro:content";
import Anchor from "src/components/common/Anchor.vue";
import ProjectSnippet from "src/components/ProjectSnippet.vue";

const posts = await getCollection("projects");
const featuredProjects = posts.filter((post) => post.data.isFeatured);
</script>

<template>
  <div class="flex justify-between items-center w-full">
    <!-- Display the heading and link from GLOBAL -->
    <h3 class="font-display text-lg sm:text-xl leading-loose">
      {{ GLOBAL.projects.title }}
    </h3>
    <Anchor ariaLabel="view all" class="text-base" url="/projects">
      View All
    </Anchor>
  </div>

  <ul class="my-8">
    <!-- Show a fallback message if no projects are found -->
    <p v-if="featuredProjects.length === 0">
      No Featured Projects Found
    </p>

    <!-- Otherwise, iterate through the featuredProjects array -->
    <template v-else>
      <li
        v-for="(project, index) in featuredProjects"
        :key="index"
      >
        <!-- Pass project props into the ProjectSnippet component -->
        <ProjectSnippet
          :description="project.data.description"
          :githubUrl="project.data. githubUrl"
          :liveUrl="project.data.liveUrl"
          :tags="project.data. tags ?? []"
          :title="project.data. title"
          :url="`${project.collection}/${project.id}`"
        />
      </li>
    </template>
  </ul>
</template>


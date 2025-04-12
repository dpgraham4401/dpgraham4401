<template>
  <div class="flex justify-between items-center w-full">
    <!-- Display the heading and link from GLOBAL -->
    <h3 class="font-display text-lg sm:text-xl leading-loose">
      {{ GLOBAL.projectsName }}
    </h3>
    <Anchor class="text-base" url="/projects">
      {{ GLOBAL.viewAll }}
    </Anchor>
  </div>

  <ul class="my-8">
    <!-- Show a fallback message if no projects are found -->
    <p v-if="featuredProjects.length === 0">
      {{ GLOBAL.noProjects }}
    </p>

    <!-- Otherwise, iterate through the featuredProjects array -->
    <template v-else>
      <li
        v-for="(project, index) in featuredProjects"
        :key="index"
      >
        <!-- Pass project props into the ProjectSnippet component -->
        <ProjectSnippet
          :description="project.description"
          :githubUrl="project.githubUrl"
          :liveUrl="project.liveUrl"
          :tags="project.tags ?? []"
          :title="project.title"
          :url="project.filename"
        />
      </li>
    </template>
  </ul>
</template>

<script lang="ts" setup>
import type { ProjectFrontmatter } from "@/lib/types";
import { GLOBAL } from "@/lib/variables";
import Anchor from "src/components/common/Anchor.vue";
import ProjectSnippet from "src/components/ProjectSnippet.vue";

// Define the prop type using an interface (or type alias)
interface Props {
  featuredProjects: Array<ProjectFrontmatter>;
}

// Use defineProps from the composition API
defineProps<Props>();
</script>

<template>
  <nav>
    <a v-for="(link, index) in links" :href="link.href" :key="index">
      {{
      link.name
      }}
    </a>
  </nav>
</template>

<script>
export default {
  props: ["links"]
};
</script>

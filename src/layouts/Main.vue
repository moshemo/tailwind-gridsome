<template>
  <div>
    <Header />
    <Hero v-if="hero" />

    <main>
      <Content />
      <Sidebar v-if="sidebar" />
    </main>

    <Footer>
      <template #footer> </template>
    </Footer>
  </div>
</template>

<script>
import Header from "./main/header";
import Hero from "./main/Hero";
import Content from "./main/Content";
import Sidebar from "./main/Sidebar";
import Footer from "./main/Footer";

export default {
  components: {
    Header,
    Hero,
    Content,
    Sidebar,
    Footer
  },
  props: ["hero", "sidebar"]
};
</script>
<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style></style>

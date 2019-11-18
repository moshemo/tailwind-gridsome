<template>
  <header
    class="bg-blue-600 flex items-center justify-between py-4 px-16 relative"
  >
    <Logo />
    <nav class="font-semibold text-base text-gray-100 uppercase">
      <!-- prettier-ignore -->
      <a 
        v-for="(link, index) in links" 
        :href="link.href"
        :key="index" 
      >
        {{ link.name }}
      </a>
    </nav>
    <MenuIcon />
    <div>
      <nav
        class="bg-gray-800 font-semibold text-base text-gray-100 uppercase absolute inset-0 h-screen w-screen"
      >
        <!-- prettier-ignore -->
        <a 
        v-for="(link, index) in links" 
        :href="link.href"
        :key="index" 
        class="block"
      >
        {{ link.name }}
      </a>
      </nav>
    </div>
  </header>
</template>

<style>
nav a {
  @apply mr-10;
}

nav a:last-child {
  margin-right: 0;
}
</style>

<script>
import Logo from "./logo";
import MenuIcon from "./menu-icon";

export default {
  components: {
    MenuIcon,
    Logo
  },
  data() {
    return {
      links: [
        { href: "/", name: "Home" },
        { href: "/news", name: "News" },
        { href: "/advertise", name: "Advertise" },
        { href: "/about", name: "About" },
        { href: "/newsletter", name: "Newsletter" },
        { href: "/contact", name: "Contact" }
      ]
    };
  }
};
</script>

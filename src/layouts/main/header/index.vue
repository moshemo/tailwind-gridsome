<template>
  <header class="header">
    <Logo />
    <div class="flex">
      <Nav class="nav-links" :links="links" />

      <button @click="isOpen = !isOpen" type="button" class="toggle-icon">
        <MenuIcon  :isOpen="isOpen" />
      </button>

      <Nav 
        :class="isOpen ? 'menu-opened' : 'menu-closed'" 
        class="nav-links--mobile" 
        :links="links" 
      />

    </div>
  </header>
</template>

<style src="./styles.css" />

<script>
import Logo from "./logo";
import MenuIcon from "./menu-icon";
import Nav from "./nav";

export default {
  components: {
    Logo,
    MenuIcon,
    Nav
  },
  data() {
    return {
      isOpen: false,
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

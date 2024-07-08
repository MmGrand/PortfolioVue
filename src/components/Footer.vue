<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__wrapper">
        <ul class="social">
          <li class="social__item">
            <a href="https://vk.com/maksimzarubin" target="_blank"
              ><img src="../assets/img/icons/vk.svg" alt="vk icon"
            /></a>
          </li>
          <li class="social__item">
            <a href="https://instagram.com/__mmgrand__" target="_blank"
              ><img
                src="../assets/img/icons/instagram.svg"
                alt="instagram icon"
            /></a>
          </li>
          <li class="social__item">
            <a href="https://github.com/MmGrand" target="_blank"
              ><img src="../assets/img/icons/gitHub.svg" alt="gitHub icon"
            /></a>
          </li>
        </ul>
        <div class="copyright">
          <p>© {{ currentYear }} mmgrand-dev.com</p>
        </div>
      </div>
    </div>
  </footer>
</template>

 <script setup>
import { ref } from "vue";
const currentYear = ref(new Date().getFullYear());
</script>
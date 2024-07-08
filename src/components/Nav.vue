<template>
  <nav class="nav">
    <div class="container">
      <div class="nav-row">
        <router-link to="/" class="logo"
          ><strong>MmGrand</strong> portfolio</router-link
        >
        <button
          @click="toggleDarkMode"
          class="dark-mode-btn"
          :class="{ 'dark-mode-btn--active': isDarkMode }"
        >
          <img
            src="../assets/img/icons/sun.svg"
            alt="sun icon"
            class="dark-mode-btn__icon"
          />
          <img
            src="../assets/img/icons/moon.svg"
            alt="moon icon"
            class="dark-mode-btn__icon"
          />
        </button>
        <ul class="nav-list">
          <li class="nav-list__item">
            <router-link
              to="/"
              class="nav-list__link"
              active-class="nav-list__link--active"
              >Проекты</router-link
            >
          </li>
          <router-link
            to="/skills"
            class="nav-list__link"
            active-class="nav-list__link--active"
            >Навыки</router-link
          >
          <router-link
            to="/contacts"
            class="nav-list__link"
            active-class="nav-list__link--active"
            >Контакты</router-link
          >
        </ul>
      </div>
    </div>
  </nav>
</template>

 <script setup>
import { ref, onMounted } from "vue";

const isDarkMode = ref(false);

// Функции для добавления и удаления темной темы
const addDarkTheme = () => {
  document.body.classList.add("dark");
};

const removeDarkTheme = () => {
  document.body.classList.remove("dark");
};

// Функция для переключения темы
const toggleDarkMode = () => {
	isDarkMode.value = !isDarkMode.value;
	if(isDarkMode.value) {
		addDarkTheme();
    localStorage.setItem("darkMode", "dark");
	} else {
		removeDarkTheme();
    localStorage.setItem("darkMode", "light");
	}
}

// Проверка системных настроек и localStorage при монтировании компонента
onMounted(() => {
	if(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
		addDarkTheme();
    isDarkMode.value = true;
	}

	const storedTheme = localStorage.getItem('darkMode');
	if (storedTheme === 'dark') {
    addDarkTheme();
    localStorage.setItem("darkMode", "dark");
    isDarkMode.value = true;
  } else if (storedTheme === 'light') {
    removeDarkTheme();
    localStorage.setItem("darkMode", "light");
    isDarkMode.value = false;
  }

	// Отслеживание изменений системных настроек
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
    const newColorScheme = event.matches ? "dark" : "light";
    if (newColorScheme === 'dark') {
      addDarkTheme();
      isDarkMode.value = true;
    } else {
      removeDarkTheme();
      isDarkMode.value = false;
    }
  });
})
</script>
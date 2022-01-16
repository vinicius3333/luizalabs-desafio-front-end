<template>
  <header>
    <div class="header-wrapper">
      <h1 class="header-title">
        <router-link to="/"> MagaNets </router-link>
      </h1>

      <div class="header-container">
        <ul class="header-container-wrapper-items">
          <li v-for="item in items" :key="item.text" class="item">
            <Component :is="item.icon" size="20" />
            <p>
              {{ item.text }}
            </p>
          </li>
        </ul>
        <div class="header-container-wrapper-input">
          <SearchIcon />
          <input type="text" placeholder="Busca" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import "./Header.scss";
import {
  MapPinIcon,
  PhoneIcon,
  HeartIcon,
  SearchIcon,
} from "vue-feather-icons";

export default {
  components: {
    MapPinIcon,
    PhoneIcon,
    HeartIcon,
    SearchIcon,
  },
  data() {
    return {
      items: [
        {
          icon: MapPinIcon,
          text: "Cidade: São Paulo",
        },
        {
          icon: PhoneIcon,
          text: "Central de atendimento",
        },
        {
          icon: HeartIcon,
          text: "Lista de desejos",
        },
      ],
    };
  },
};
</script>

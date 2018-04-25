<template>
  <div class="sidebar" :class="{ active: active }">
    <nav>
      <ul>
        <li v-for="(item, index)  in items" :key="index">
          <router-link :to="{ 'name': item.route }">{{ item.title }}</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script src="./Sidebar.js"></script>

<style lang="scss" src="./Sidebar.scss"></style>

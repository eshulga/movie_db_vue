<template>
  <md-drawer :md-active.sync="active">
      <md-toolbar class="md-transparent" md-elevation="0">
        <span class="md-title">My App name</span>
      </md-toolbar>
    <nav>
      <ul>
        <li v-for="(item, index)  in items" :key="index" @click="toggleSidebar()">
          <router-link :to="{ 'name': item.route }">{{ item.title }}</router-link>
        </li>
      </ul>
    </nav>
  </md-drawer>
</template>

<script src="./Sidebar.js"></script>

<style lang="scss" src="./Sidebar.scss"></style>

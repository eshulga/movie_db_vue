<template>
  <div class="sidebar" :class="{ active: active }">
    <nav>
      <ul>
        <li v-for="(item, index)  in items" :key="index">{{ item.title }}</li>
          </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'sidebar',

  data: function () {
    return {
      active: false,
      items: [
        {
          title: 'Главная',
          route: 'home'
        },
        {
          title: 'Избранное',
          route: 'favorite'
        }
      ]
    }
  },

  mounted: function () {
    this.$parent.$on('toggleSidebar', () => {
      this.active = !this.active
    })
  }
}
</script>

<style lang="scss">
    .sidebar {
        position: absolute;
        z-index: 99;
        background-color: #fff;
        padding: 50px 50px;
        min-width: 250px;
        min-height: calc(100vh - 105px);
        -webkit-box-shadow: 3px 1px 5px 0px rgba(0,0,0,0.35);
        -moz-box-shadow: 3px 1px 5px 0px rgba(0,0,0,0.35);
        box-shadow: 3px 1px 5px 0px rgba(0,0,0,0.35);
        transition: all 0.5s;
        transform: translate(-105%);

        &.active {
            transform: translate(0);
        }

        ul li {
            padding: 15px 0;
            list-style: none;
            text-align: left;
            text-transform: uppercase;
            cursor: pointer;
        }
    }
</style>

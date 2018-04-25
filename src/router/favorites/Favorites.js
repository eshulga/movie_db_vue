import ShortCard from '../../components/ShortCard/shortCard.vue'

const Favorites = {
  name: 'Favorites',

  components: {
    ShortCard: ShortCard
  },

  data () {
    return {
      key: this.$root.config.apiKey,
      itemsColection: []
    }
  },

  mounted () {
    console.log('mounted', this)
  },

  watch: {

  },

  methods: {
  }
}

export default Favorites

import Layout from '../../components/Layout/Layout.vue'
import MovieTable from './components/MovieTable/MovieTable.vue'

const Home = {
  name: 'Home',
  components: {
    Layout,
    MovieTable
  },

  props: ['initSearch']
}

export default Home

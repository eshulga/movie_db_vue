import Header from '../Header/header.vue'
import MovieTable from '../../router/home/components/MovieTable/MovieTable.vue'
const Layout =  {
  name: 'Layout',
  components: {
    Header,
    MovieTable
  },
  props: ['childComponent']
}

export default Layout
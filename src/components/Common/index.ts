import BaseTable from './BaseTable/index.vue'
import SimpleSearch from './SimpleSearch/index.vue'
// import BaseButton from './BaseButton'
import TableLayout from './TableLayout/index.vue'
// import DrawerLayout from './DrawerLayout'
import SearchItem from './SearchItem/index.vue'
// import TableColTool from './TableColTool'
const components = [
  SimpleSearch,
  SearchItem,
  TableLayout,
  BaseTable
]

const install = function(Vue: any) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default {
  install
}

import { computed } from 'vue'
import { useStore } from 'vuex'

export default () => {
  const store = useStore()
  store.dispatch('robot/getParts')

  const parts = computed(() => {
    return (
      store.state.robots.parts || {
        heads: [],
        arms: [],
        torsos: [],
        bases: [],
      }
    )
  })

  return { parts }
}

import { computed } from 'vue'
import { useStore } from 'vuex'

export default () => {
  const store = useStore()
  store.dispatch('getParts')

  const parts = computed(() => {
    return (
      store.state.parts || {
        heads: [],
        arms: [],
        torsos: [],
        bases: [],
      }
    )
  })

  return parts
}

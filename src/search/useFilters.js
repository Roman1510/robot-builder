import { ref, computed } from 'vue'

function filterResults(results, filters) {
  let finalResult = []

  filters.value.forEach((filter) => {
    const filteredResults = results.value.filter((part) => {
      const filterKey = Object.keys(filter)[0]
      const filterValue = filter[filterKey]
      return part[filterKey] === filterValue
    })
    finalResult = finalResult.concat(filteredResults)
  })
  return finalResult.length ? finalResult : results.value
}

export default function useFilters(searchResults) {
  const filters = ref([])

  const applyFilters = (filter) => filters.value.push(filter)
  const clearFilters = () => {
    filters.value = []
  }

  const filteredResults = computed(() => filterResults(searchResults, filters))

  return {
    filters,
    applyFilters,
    clearFilters,
    filteredResults,
  }
}

<template>
  <div>
    <nav>
      <router-link class="spacing" v-for="routes in links" 
      v-bind:key="routes.id"
      :to="`${routes.page}`">{{routes.text}}</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      links: [
        {
          id: 0,
          text: 'About',
          page:'/About'
        },
        {
          id: 1,
          text: 'FurtherReading',
          page:'/FurtherReading'
        },
        {
          id: 2,
          text: 'FinancialPlanningTool',
          page:'/FinancialPlanningTool'
        },
        {
          id: 3,
          text: 'FurtherResource',
          page:'/FurtherResource'
        }
      ]
    }
  }
}
</script>
<style>
.spacing {
  margin-right: 10px;
}
</style>

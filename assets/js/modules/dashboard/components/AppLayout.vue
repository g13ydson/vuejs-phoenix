<template>
  <div>
    <AppToolbar />

    <v-container grid-list-md>
      <v-layout>
        <v-flex xs12>
          <slot />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import AppToolbar from "./AppToolbar.vue";

export default {
  name: "AppLayout",
  components: {
    AppToolbar
  }
};
</script>

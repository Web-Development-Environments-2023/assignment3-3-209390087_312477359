<template>
  <b-container fluid>
    <h3>
      {{ title }}:
      <slot></slot>
    </h3>
    <b-row>
      <b-col v-for="r in recipesList" :key="r.id">
        <RecipePreview :recipe="r" />
      </b-col>
    </b-row>
    <b-row v-if="showButton">
      <b-button variant="primary" @click="getRecipes" class="ml-auto"
        >Generate 3 random recipes</b-button
      >
    </b-row>
  </b-container>
</template>

<script>
import RecipePreview from "./RecipePreview.vue";
export default {
  name: "RecipePreviewList",
  components: {
    RecipePreview,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    showButton: {
      type: Boolean,
      required: false,
    },
    recipesList: {
      type: Array,
      required: true,
    },
    fetchRecipes: {
      type: Function,
      required: false,
    },
  },
  // data() {
  //   return {
  //     recipes: this.recipesList,
  //   };
  // },
  // computed: {
  //   getRecipesList() {
  //     return this.recipesList;
  //   },
  // },
  methods: {
    getRecipes() {
      if (this.showButton && typeof this.fetchRecipes === "function") {
        this.fetchRecipes();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  button {
    z-index: 1;
  }
}
</style>

"use strict";(self["webpackChunkassignment_3_3"]=self["webpackChunkassignment_3_3"]||[]).push([[479],{6479:(t,e,s)=>{s.r(e),s.d(e,{default:()=>_});var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[s("v-row",{attrs:{justify:"center"}},[s("v-col",{attrs:{cols:"8"}},[s("v-card",{staticClass:"elevation-12 d-flex flex-column"},[s("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[s("v-toolbar-title",{staticClass:"d-block text-center text-uppercase"},[s("v-icon",{attrs:{large:""}},[t._v("mdi-pot")]),t._v(" "+t._s(t.recipe.title)+" ")],1)],1),s("v-card-text",{staticClass:"d-flex flex-column card"},[s("transition",{attrs:{name:"fade",mode:"out-in"}},[t.loading?s("v-row",[s("v-col",{staticClass:"text-center"},[s("v-progress-circular",{attrs:{color:"primary",indeterminate:""}})],1)],1):s("v-row",[s("v-col",{attrs:{cols:"4"}},[s("v-img",{staticClass:"elevation-2 mb-2",attrs:{src:t.recipe.image}}),s("RecipeInfo",{staticClass:"float-left",attrs:{hideWatched:"true",recipe:t.recipe}}),s("RecipeRating",{staticClass:"rating-container float-right",attrs:{rating:t.recipe.aggregate_likes}}),s("div",{staticClass:"d-inline-flex ml-2 mt-8"},[s("v-btn",{staticClass:"small white--text",attrs:{color:"primary",fab:"",outlined:"","x-small":"",title:"Multiply Counts"},on:{click:t.multiply}},[s("v-icon",{attrs:{dark:""}},[t._v("mdi-format-superscript")])],1),s("v-btn",{staticClass:"small ml-2 white--text",attrs:{color:"primary",outlined:"",fab:"","x-small":"",title:"Divide Counts"},on:{click:t.divide}},[s("v-icon",{attrs:{dark:""}},[t._v("mdi-square-root")])],1)],1)],1),s("v-col",{attrs:{cols:"8"}},[s("div",{staticClass:"position-relative fill-height"},[s("h3",{staticClass:"mb-2"},[t._v("Ingredients")]),s("ul",{attrs:{id:"ingredientList"}},t._l(t.recipe.extended_ingredients,(function(e){return s("li",{key:e.id,staticClass:"text--text"},[s("span",{staticClass:"ingredient-name"},[t._v(" "+t._s(e.name)+" ")]),t._v(" ( "),s("span",{domProps:{innerHTML:t._s(t.$options.filters.fraction(e.amount))}}),e.unit?s("span",[t._v(" "+t._s(e.unit))]):t._e(),t._v(") ")])})),0),s("h3",{staticClass:"my-2"},[t._v("Instructions")]),s("ol",{attrs:{id:"instructions"}},t._l(t.recipe.instructions,(function(e,r){return s("div",{key:e,staticClass:"text--text align-center d-flex"},[s("v-checkbox",{staticClass:"mr-5",attrs:{light:"",required:""},on:{click:function(e){return e.stopPropagation(),t.updateProgress(r+1)}},model:{value:t.completeInstructionsArray[r],callback:function(e){t.$set(t.completeInstructionsArray,r,e)},expression:"completeInstructionsArray[index]"}}),s("li",{staticClass:"mt-3"},[t._v(t._s(e))])],1)})),0)])]),s("v-progress-linear",{staticClass:"ml-7 black--text font-weight-bold",staticStyle:{"max-width":"49em"},attrs:{color:"light-green darken-4","buffer-value":t.progress+10,value:t.progress,height:"25",striped:"",stream:""}},[t._v(t._s(Math.ceil(t.progress)||0)+"%")]),s("v-btn",{staticClass:"ma-3 small white--text",attrs:{to:"/meal",color:"success",fab:"",outlined:"",small:"",title:"Back To My Meal"}},[s("v-icon",{attrs:{dark:""}},[t._v("mdi-keyboard-backspace")])],1),s("v-btn",{staticClass:"ma-3 small white--text",attrs:{to:"/",color:"success",fab:"",outlined:"",small:"",title:"Back Home"}},[s("v-icon",{attrs:{dark:""}},[t._v("mdi-home")])],1)],1)],1)],1)],1)],1)],1)],1)},i=[],a=(s(9753),s(3748));function n(t){if(Array.isArray(t))return(0,a.Z)(t)}s(2526),s(1817),s(1539),s(2165),s(8783),s(3948),s(1038);function o(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var c=s(8936);s(1703),s(6647);function l(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t){return n(t)||o(t)||(0,c.Z)(t)||l()}s(1249);var d=s(2552),p=s(1397),m=s(2630);const v={name:"RecipeCook",components:{RecipeInfo:p.Z,RecipeRating:m.Z},data:function(){return{loading:!0,instructionProgress:-1,completeInstructionsArray:[],progress:0,step:0,recipe:{}}},mounted:function(){var t=this,e=this.$route.params.id;d.Z.getRecipe(e).then((function(s){t.recipe=s.data,t.step=100/t.recipe.instructions.length,t.loading=!1,s.watched||(t.recipe.watched=!0,d.Z.setWatched(e).then()),t.updateProgressLocal(t.$store.getters.mealProgress[t.recipe.id])}))},methods:{multiply:function(){this.recipe.serving*=2,this.recipe.extended_ingredients=this.recipe.extended_ingredients.map((function(t){return t.amount*=2,t}))},divide:function(){this.recipe.serving/=2,this.recipe.extended_ingredients=this.recipe.extended_ingredients.map((function(t){return t.amount/=2,t}))},updateProgressLocal:function(t){var e=this;"number"!==typeof t&&(t=0);var s=this.recipe.instructions.length;t<=this.instructionProgress&&(t-=1),this.instructionProgress=t,this.completeInstructionsArray=u(Array(s).keys()).map((function(t){return t<e.instructionProgress})),this.progress=Math.floor(this.instructionProgress/s*100)},updateProgress:function(t){this.updateProgressLocal(t),this.$store.dispatch("updateRecipeCookProgress",{recipeId:this.recipe.id,progress:this.instructionProgress})}}},g=v;var f=s(1001),h=(0,f.Z)(g,r,i,!1,null,"0f32ad39",null);const _=h.exports}}]);
//# sourceMappingURL=479.6e0d57a5.js.map
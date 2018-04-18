<template>
    <div>
        <md-dialog-prompt
                :md-active.sync="active"
                v-model="value"
                md-title="What's your name?"
                md-input-maxlength="30"
                md-input-placeholder="Type your name..."
                md-confirm-text="Done" />

        <md-button class="md-primary md-raised" @click="active = true">Prompt</md-button>
        <span v-if="value">Value: {{ value }}</span>
    </div>
</template>

<script>
  import Vue from 'vue'
  import VueMaterial from 'vue-material'
  Vue.use(VueMaterial)

  export default {
    name: 'DialogPrompt',
    data: () => ({
      active: true,
      value: null
    }),
    components: {
      MdDialogPromt,
      MdButton
    }
  }
</script>
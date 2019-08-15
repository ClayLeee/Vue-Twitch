<template>
  <div class="row mx-auto my-0 w-75 rounded">
    <div class="col mx-auto col-lg-4 col-md-6 col-sm-10 mb-4 mr-4" v-for="(result, index) in results">
      <a :href="result.channel.url">
        <div class="preview">
          <img class="h-100" :src="result.preview.medium" />
        </div>
        <div class="bottom p-2 bt-0 w-100 d-flex align-items-center">
          <div class="avatar mr-2 p-1">
            <img alt="Avatar" class="md-avatar rounded-circle" :src="result.channel.logo" />
          </div>
          <div class="intro">
            <div class="owner_name mb-2 pr-1">
              {{ result.channel.status }}
            </div>
            <div class="channel_name">
              {{ result.channel.display_name }}
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    results: {
      required: true
    }
  }
}
</script>

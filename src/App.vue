<template>
  <div>Hello from Consumer</div>
  <remote-async-data-fetcher></remote-async-data-fetcher>
</template>

<script setup>
import { defineComponent, defineAsyncComponent } from "vue";
import UserFetcher from "remoteApp/UserFetcher";

defineComponent({
  components: UserFetcher,
});

const RemoteAsyncDataFetcher = defineAsyncComponent(() => import("remoteApp/UserFetcher"));
</script>

<style scoped></style>

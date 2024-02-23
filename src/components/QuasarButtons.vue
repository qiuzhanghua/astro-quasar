<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn color="white" text-color="black" label="Standard" />
    <q-btn color="primary" label="Primary" @click="onClick" />
    <q-btn color="secondary" label="Secondary" />
    <q-btn color="amber" glossy label="Amber" />
    <q-btn color="brown-5" label="Brown 5" />
    <q-btn color="deep-orange" glossy label="Deep Orange" />
    <q-btn color="purple" label="Purple" />
    <q-btn color="black" label="Black" />
  </div>
  <div class="q-gutter-md row items-start">
    <q-date v-model="date" />
  </div>
  <div class="q-mt-md q-gutter-md">
    <q-icon name="font_download" color="primary" size="32px" />
    <q-icon name="warning" color="warning" size="4rem" />
    <q-icon name="format_size" style="color: #ccc; font-size: 1.4em" />
    <q-icon name="print" color="teal" size="4.4em" />
    <q-icon name="today" class="text-orange" size="2em" />
    <q-icon name="style" size="3em" />
  </div>
</template>

<script setup lang="ts">
import "quasar/dist/quasar.css";
import { useQuasar, QBtn } from "quasar";
import { ref } from "vue";
import iconSet from "quasar/icon-set/material-icons.mjs";
// import '@quasar/extras'
// import mdiIconSet from 'quasar/icon-set/mdi-v7.js'

let date = ref(new Date());
// const $q = useQuasar()
// $q.iconSet.set(iconSet)

function onClick(event: MouseEvent) {
  alert("hello from Quasar");
}
</script>
```

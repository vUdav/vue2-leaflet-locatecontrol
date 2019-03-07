<template>
  <v-map :zoom="10" :center="initialLocation">
    <v-tilelayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></v-tilelayer>
    <v-locatecontrol/>
  </v-map>
</template>

<script>
import { LMap, LTileLayer } from "vue2-leaflet";
import { latLng, Icon, icon } from 'leaflet';
import Vue2LeafletLocatecontrol from './Vue2LeafletLocatecontrol';

export default {
  components: {
    "v-map": LMap,
    "v-tilelayer": LTileLayer,
    "v-locatecontrol": Vue2LeafletLocatecontrol
  },

  data() {
    return {
      initialLocation: [59.93428, 30.335098]
    }
  }
}
</script>

<style>
@import "~leaflet/dist/leaflet.css";
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
html,
body {
  height: 100%;
  margin: 0;
}
</style>

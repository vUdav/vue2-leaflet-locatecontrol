<template>
  <v-map :zoom="10" :center="initialLocation">
    <v-tilelayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png"></v-tilelayer>
    <v-locatecontrol/>
  </v-map>
</template>

<script>
import { Icon, latLng } from 'leaflet';
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
import Vue2LeafletLocatecontrol from './Vue2LeafletLocatecontrol';

// Icon fix
delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

export default {
  components: {
    "v-map": LMap,
    "v-tilelayer": LTileLayer,
    "v-marker": LMarker,
    "v-locatecontrol": Vue2LeafletLocatecontrol,
  },

  data() {
    return {
      initialLocation: latLng(59.93428, 30.335098)
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

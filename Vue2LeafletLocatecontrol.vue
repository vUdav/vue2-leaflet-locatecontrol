<template>
  <div style="display: none;">
    <slot v-if="ready"></slot>
  </div>
</template>

<script>
import { DomEvent } from 'leaflet';
import { findRealParent, propsBinder } from 'vue2-leaflet';
import Locatecontrol from "leaflet.locatecontrol";

const props = {
  options: {
    type: Object,
    default() { return {}; },
  },
  visible: {
    type: Boolean,
    custom: true,
    default: true
  }
}

export default {
  name: "Vue2LeafletLocatecontrol",

  props,

  data() {
    return {
      ready: false
    }
  },

  beforeDestroy() {
    this.parentContainer.removeLayer(this);
  },

  mounted() {
    this.mapObject = new Locatecontrol(this.options);
    DomEvent.on(this.mapObject, this.$listeners);
    propsBinder(this, this.mapObject, props);
    this.ready = true;
    this.parentContainer = findRealParent(this.$parent);
    this.mapObject.addTo(this.parentContainer.mapObject, !this.visible);

    this.$nextTick(() => {
      this.$emit('ready', this.mapObject);
    });
  }
}
</script>

<style>
@import "~leaflet.locatecontrol/dist/L.Control.Locate.css";
</style>

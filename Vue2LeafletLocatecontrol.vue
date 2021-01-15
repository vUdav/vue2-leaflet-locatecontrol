<template>
  <div style="display: none;">
    <slot v-if="ready"></slot>
  </div>
</template>

<script>
import L, { DomEvent } from 'leaflet';
import { findRealParent, propsBinder } from 'vue2-leaflet';
import "leaflet.locatecontrol";

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

  props: props,

  data() {
    return {
      ready: false
    }
  },

  beforeDestroy() {
    this.$parent.mapObject.removeControl(this.mapObject);
  },

  mounted() {
    this.mapObject = L.control.locate(this.options);
    DomEvent.on(this.mapObject, this.$listeners);
    propsBinder(this, this.mapObject, props);
    this.ready = true;
    this.parentContainer = findRealParent(this.$parent);
    if (this.$parent._isMounted) {
      this.$parent.mapObject.addControl(this.mapObject);
    }
  }
}
</script>

<style>
@import "~leaflet.locatecontrol/dist/L.Control.Locate.css";
</style>

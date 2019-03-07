# vue2-leaflet-locatecontrol

This is a [locatecontrol plugin](https://github.com/domoritz/leaflet-locatecontrol) extension for [vue2-leaflet package](https://github.com/KoRiGaN/Vue2Leaflet)

## Install

    npm install --save vue2-leaflet-locatecontrol

## Demo

    git clone git@github.com:vUdav/vue2-leaflet-locatecontrol.git
    cd vue2-leaflet-locatecontrol
    yarn
    yarn example

    # or alternatively using npm
    npm install
    npm run example

Then you should be able to navigate with your browser and see the demo in http://localhost:4000/

You can see the demo code in the file [example.vue](example.vue)

## Usage

### on &lt;template&gt; add

something like this

    <template>
      <v-map :zoom="10" :center="initialLocation">
        <v-tilelayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></v-tilelayer>
        <v-locatecontrol/>
      </v-map>
    </template>

### on &lt;script&gt; add

#### option 1

In the same template file, at `<script>` part, this will make the component available only to the template in this file

    import Vue2LeafletLocatecontrol from 'vue2-leaflet-locatecontrol'
    ...
    export default {
      ...
      components: {
        'v-locatecontrol': Vue2LeafletLocatecontrol
        ...
      },
      ...
    }

#### option 2

At main Vue configuration, this will make the component available to all templates in your app

    import Vue from 'vue'
    import Vue2LeafletLocatecontrol from 'vue2-leaflet-locatecontrol'
    ...
    Vue.component('v-locatecontrol': Vue2LeafletLocatecontrol)

### on &lt;style&gt; add

    @import "~leaflet/dist/leaflet.css";
    @import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";

## Develop and build

    npm install
    npm run build

## Author

[Valery Liubimov](http://vudav.ru/)

## License

MIT

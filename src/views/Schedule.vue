<template>
  <div class="schedule">
    <nav class="nav-cities">
      <a
        class="link-city"
        v-for="(el, key) in cities"
        :key="key"
        @click="city = key"
        >{{ el.name }} {{ el.flag }}</a
      >
    </nav>
    <header>
      <h1>Доступное время</h1>
      <h2>{{ cities[city].flag }} {{ cities[city].name }} время (GMT+3)</h2>
    </header>
    <iframe
      v-if="city == 'barcelona'"
      class="google-calendar"
      src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=2&amp;bgcolor=%23343434&amp;ctz=Europe%2FMadrid&amp;src=MDlpaDVwNm0wdThxcjc3MWkxZjY2N2dnajBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23009688&amp;showNav=0&amp;showTitle=0&amp;showPrint=0&amp;showCalendars=0&amp;showTabs=0&amp;showDate=0&amp;mode=AGENDA&amp;showTz=0"
      frameborder="0"
      scrolling="no"
    ></iframe>
    <iframe
      v-else-if="city == 'dubai'"
      class="google-calendar"
      src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=2&amp;bgcolor=%23343434&amp;ctz=Asia%2FDubai&amp;src=MDlpaDVwNm0wdThxcjc3MWkxZjY2N2dnajBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23009688&amp;showNav=0&amp;showTitle=0&amp;showPrint=0&amp;showCalendars=0&amp;showTabs=0&amp;showDate=0&amp;mode=AGENDA&amp;showTz=0"
      frameborder="0"
      scrolling="no"
    ></iframe>
    <iframe
      v-else-if="city == 'tallinn'"
      class="google-calendar"
      src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=2&amp;bgcolor=%23343434&amp;ctz=Europe%2FTallinn&amp;src=MDlpaDVwNm0wdThxcjc3MWkxZjY2N2dnajBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23009688&amp;showNav=0&amp;showTitle=0&amp;showPrint=0&amp;showCalendars=0&amp;showTabs=0&amp;showDate=0&amp;mode=AGENDA&amp;showTz=0"
      frameborder="0"
      scrolling="no"
    ></iframe>
    <iframe
      v-else-if="city == 'toronto'"
      class="google-calendar"
      src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=2&amp;bgcolor=%23343434&amp;ctz=America%2FToronto&amp;src=MDlpaDVwNm0wdThxcjc3MWkxZjY2N2dnajBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23009688&amp;showNav=0&amp;showTitle=0&amp;showPrint=0&amp;showCalendars=0&amp;showTabs=0&amp;showDate=0&amp;mode=AGENDA&amp;showTz=0"
      frameborder="0"
      scrolling="no"
    ></iframe>

    <iframe
      v-else
      class="google-calendar"
      src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=2&amp;bgcolor=%23343434&amp;ctz=Europe%2FMoscow&amp;src=MDlpaDVwNm0wdThxcjc3MWkxZjY2N2dnajBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23009688&amp;showNav=0&amp;showTitle=0&amp;showPrint=0&amp;showCalendars=0&amp;showTabs=0&amp;showDate=0&amp;mode=AGENDA&amp;showTz=0"
      frameborder="0"
      scrolling="no"
    ></iframe>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

class City {
  name: string;
  flag: string;

  constructor(name: string, flag: string) {
    this.name = name;
    this.flag = flag;
  }
}

export default defineComponent({
  data() {
    return {
      city: "moscow",
      cities: {
        moscow: new City("Moscow", "🇷🇺"),
        barcelona: new City("Barcelona", "🇪🇸"),
        dubai: new City("Dubai", "🇦🇪"),
        tallinn: new City("Tallinn", "🇪🇪"),
        toronto: new City("Toronto", "🇨🇦")
      }
    };
  }
});
</script>

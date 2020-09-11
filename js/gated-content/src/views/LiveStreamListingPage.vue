<template>
  <div class="live-stream-listing-page">
    <EventListing
      :title="config.components.live_stream.title"
      :withDateFilter="true"
      :msg="'No Live streams scheduled for this date.'"
    />
  </div>
</template>

<script>
import EventListing from '@/components/event/EventListing.vue';
import { SettingsMixin } from '@/mixins/SettingsMixin';
import { NavigationTrackingMixin } from '@/mixins/NavigationTrackingMixin';

export default {
  name: 'LiveStreamListingPage',
  mixins: [SettingsMixin, NavigationTrackingMixin],
  components: {
    EventListing,
  },
  computed: {
    navigationTitle() {
      return this.config.components.live_stream.title;
    },
  },
};
</script>

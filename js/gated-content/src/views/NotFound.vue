<template>
  <h2>404: Not Found</h2>
</template>

<script>
import { NavigationTrackingMixin } from '@/mixins/NavigationTrackingMixin';

export default {
  name: 'NotFound',
  mixins: [NavigationTrackingMixin],
  computed: {
    navigationTitle() {
      return 'Not Found';
    },
  },
};
</script>

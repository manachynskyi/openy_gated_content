export const NavigationTrackingMixin = {
  mounted() {
    this.trackNavigation();
  },
  methods: {
    trackNavigation() {
      this.$log.trackNavigation({
        route: this.$route.name,
        path: this.$route.fullPath,
        title: this.navigationTitle,
      });
    },
  },
};

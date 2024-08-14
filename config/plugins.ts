export default ({ env }) => ({
  "soft-delete": {
    enabled: true,
  },
  "protected-populate": {
    enabled: true,
    config: {
      ["auto-populate"]: true,
    },
  },
});

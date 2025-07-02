app.get('/sdk/v1/default', (req, res) => {
  const { platformId } = req.query;

  if (platformId !== 'WIN') {
    return res.status(400).json({ error: "Unsupported platform" });
  }

  res.json({
    config: {
      productId: "6f95c6ada4bf4ed4808d4e3db9d9b4ae",
      sandboxId: "de6a3441761d4ccc86715273fee7fec2",
      deploymentId: "4cd8129ffffe418c8e266b34b9034a72",
      clientId: "xyza7891P6e5bm65GfRilwBOpLc9oHob",
      clientSecret: "ms9Y5SUwrs0MOwN6P8Z7UbgapwMq1XJ9xmquaV1Ac9Q",
      applicationName: "LQM",
      organizationId: "o-vmstalfvelg6tu3qjyd992mxe8lmbq",
      environment: "prod"
    },
    service_urls: {
      auth: "https://api.epicgames.dev/auth/v1/oauth/token",
      telemetry: "https://api.epicgames.dev/telemetry/data"
    },
    success: true
  });
});

const express = require('express');
const app = express();

app.get('/sdk/v1/default', (req, res) => {
  const platformId = req.query.platformId;

  if (platformId === 'WIN') {
    res.json({
      success: true,
      config: {
        gameVersion: "1.0.0",
        apiKey: "abc123",
        featureFlags: []
      }
    });
  } else {
    res.status(400).json({ error: "Unsupported platform" });
  }
});

// для перевірки, що сервер працює
app.get('/', (req, res) => {
  res.json({ hello: "world" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API працює на порту ${PORT}`);
});

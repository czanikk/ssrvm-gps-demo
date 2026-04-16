const express = require('express');
const cors = require('cors');
const path = require('path');
const { startSimulator, getBusLocations, getBusById } = require('./simulator');

const app = express();

app.use(cors());
app.use(express.json());

// Serve frontend files
app.use('/parent',  express.static(path.join(__dirname, '../parent-app')));
app.use('/admin',   express.static(path.join(__dirname, '../admin-app')));
app.use('/driver',  express.static(path.join(__dirname, '../driver-app')));

// Root → parent login
app.get('/', (req, res) => {
  res.redirect('/parent/login.html');
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', buses: getBusLocations().length });
});

// ── REST: Get all buses (for admin dashboard) ──────────────────
app.get('/api/buses', (req, res) => {
  res.json({ success: true, buses: getBusLocations() });
});

// ── REST: Get one bus (for parent tracking page) ───────────────
app.get('/api/buses/:busId', (req, res) => {
  const bus = getBusById(req.params.busId);
  if (!bus) return res.status(404).json({ success: false, message: 'Bus not found' });
  res.json({ success: true, bus });
});

// ── SSE: Real-time updates for a specific bus ──────────────────
app.get('/api/track/:busId', (req, res) => {
  const { busId } = req.params;

  res.writeHead(200, {
    'Content-Type':                'text/event-stream',
    'Cache-Control':               'no-cache',
    'Connection':                  'keep-alive',
    'X-Accel-Buffering':           'no',
    'Access-Control-Allow-Origin': '*'
  });

  res.write(':connected\n\n');

  const bus = getBusById(busId);
  if (bus) {
    res.write(`data: ${JSON.stringify({ type: 'LOCATION_UPDATE', data: bus })}\n\n`);
  }

  const interval = setInterval(() => {
    const updated = getBusById(busId);
    if (updated) {
      res.write(`data: ${JSON.stringify({ type: 'LOCATION_UPDATE', data: updated })}\n\n`);
    }
  }, 3000);

  const heartbeat = setInterval(() => {
    res.write(':heartbeat\n\n');
  }, 20000);

  req.on('close', () => {
    clearInterval(interval);
    clearInterval(heartbeat);
  });
});

// ── SSE: Admin — all buses stream ─────────────────────────────
app.get('/api/track-all', (req, res) => {
  res.writeHead(200, {
    'Content-Type':                'text/event-stream',
    'Cache-Control':               'no-cache',
    'Connection':                  'keep-alive',
    'X-Accel-Buffering':           'no',
    'Access-Control-Allow-Origin': '*'
  });

  res.write(':connected\n\n');

  const interval = setInterval(() => {
    const buses = getBusLocations();
    res.write(`data: ${JSON.stringify({ type: 'ALL_BUSES', data: buses })}\n\n`);
  }, 3000);

  const heartbeat = setInterval(() => res.write(':heartbeat\n\n'), 20000);

  req.on('close', () => {
    clearInterval(interval);
    clearInterval(heartbeat);
  });
});

// ── Demo login (no real OTP needed) ───────────────────────────
app.post('/api/auth/demo-login', (req, res) => {
  const { phone } = req.body;
  const { DEMO_PARENTS, DEMO_ADMIN } = require('./demoData');

  // Check admin
  if (phone === DEMO_ADMIN.phone) {
    return res.json({
      success: true,
      token: 'demo-token-admin',
      user: DEMO_ADMIN
    });
  }

  const parent = DEMO_PARENTS.find(p => p.phone === phone);

  if (!parent) {
    return res.status(404).json({
      success: false,
      message: 'Phone not registered. Try: 9876543210'
    });
  }

  res.json({
    success: true,
    token: 'demo-token-' + parent.id,
    user: parent
  });
});

// Start simulator
startSimulator();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`
╔══════════════════════════════════════════╗
║   SSRVM GPS DEMO SERVER                  ║
║   http://localhost:${PORT}                   ║
║                                          ║
║   Parent App:  /parent/login.html        ║
║   Admin Panel: /admin                    ║
║   Driver App:  /driver                   ║
╚══════════════════════════════════════════╝
  `);
});

// backend/simulator.js
// Makes buses move realistically around Guwahati

const { BUSES, ROUTES } = require('./demoData');

let busStates = BUSES.map(bus => ({
  ...bus,
  lat:           ROUTES[bus.routeId][0].lat,
  lng:           ROUTES[bus.routeId][0].lng,
  speed:         0,
  heading:       0,
  status:        'active',
  waypointIndex: 0,
  progress:      0,
  pathHistory:   [[ROUTES[bus.routeId][0].lat, ROUTES[bus.routeId][0].lng]],
  lastUpdate:    new Date().toISOString()
}));

const startSimulator = () => {
  setInterval(() => {
    busStates = busStates.map(bus => moveBus(bus));
  }, 2000);

  console.log('🚌 GPS Simulator started — 27 buses moving');
};

const moveBus = (bus) => {
  const route = ROUTES[bus.routeId];
  if (!route || route.length < 2) return bus;

  const current  = route[bus.waypointIndex];
  const nextIdx  = (bus.waypointIndex + 1) % route.length;
  const next     = route[nextIdx];

  const baseSpeed = 25;
  const speedVariance = (Math.random() - 0.5) * 10;
  const speed = Math.max(10, Math.min(45, baseSpeed + speedVariance));

  const distanceMoved = (speed / 3600) * 2;

  const totalDist = haversineDistance(
    current.lat, current.lng,
    next.lat, next.lng
  );

  const progressIncrement = totalDist > 0 ? distanceMoved / totalDist : 0.1;
  let newProgress = bus.progress + progressIncrement;

  let newWaypointIndex = bus.waypointIndex;
  let newLat, newLng;

  if (newProgress >= 1) {
    newProgress = 0;
    newWaypointIndex = nextIdx;
    newLat = next.lat;
    newLng = next.lng;
  } else {
    newLat = current.lat + (next.lat - current.lat) * newProgress;
    newLng = current.lng + (next.lng - current.lng) * newProgress;
  }

  const heading = calculateHeading(bus.lat, bus.lng, newLat, newLng);
  const stopped = Math.random() < 0.05;

  const pathHistory = [...bus.pathHistory, [newLat, newLng]].slice(-100);

  return {
    ...bus,
    lat:           newLat,
    lng:           newLng,
    speed:         stopped ? 0 : Math.round(speed),
    heading:       Math.round(heading),
    status:        stopped ? 'stopped' : 'active',
    waypointIndex: newWaypointIndex,
    progress:      newProgress,
    pathHistory,
    lastUpdate:    new Date().toISOString()
  };
};

const calculateHeading = (lat1, lng1, lat2, lng2) => {
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const lat1R = lat1 * Math.PI / 180;
  const lat2R = lat2 * Math.PI / 180;
  const y = Math.sin(dLng) * Math.cos(lat2R);
  const x = Math.cos(lat1R) * Math.sin(lat2R) -
             Math.sin(lat1R) * Math.cos(lat2R) * Math.cos(dLng);
  return ((Math.atan2(y, x) * 180 / Math.PI) + 360) % 360;
};

const haversineDistance = (lat1, lng1, lat2, lng2) => {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a =
    Math.sin(dLat/2) ** 2 +
    Math.cos(lat1 * Math.PI / 180) *
    Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLng/2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
};

const getBusLocations = () => busStates.map(b => ({
  id:          b.id,
  busNumber:   b.busNumber,
  routeName:   b.routeName,
  lat:         b.lat,
  lng:         b.lng,
  speed:       b.speed,
  heading:     b.heading,
  status:      b.status,
  driverName:  b.driverName,
  driverPhone: b.driverPhone,
  pathHistory: b.pathHistory,
  lastUpdate:  b.lastUpdate
}));

const getBusById = (busId) => {
  const bus = busStates.find(b => b.id === busId);
  if (!bus) return null;
  return {
    id:           bus.id,
    busNumber:    bus.busNumber,
    routeName:    bus.routeName,
    lat:          bus.lat,
    lng:          bus.lng,
    speed:        bus.speed,
    heading:      bus.heading,
    status:       bus.status,
    driverName:   bus.driverName,
    driverPhone:  bus.driverPhone,
    pathHistory:  bus.pathHistory,
    lastUpdate:   bus.lastUpdate
  };
};

module.exports = { startSimulator, getBusLocations, getBusById };

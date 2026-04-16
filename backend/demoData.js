// backend/demoData.js
// Real coordinates around SSRVM Guwahati area

const SCHOOL_LAT = 26.1445;  // ← PUT ACTUAL SCHOOL LAT HERE
const SCHOOL_LNG = 91.7362;  // ← PUT ACTUAL SCHOOL LNG HERE

const BUSES = [
  { id: 'bus-01', busNumber: 1,  routeName: 'Jalukbari Route',     routeId: 'route-01', driverName: 'Rajesh Kumar',   driverPhone: '9876501001' },
  { id: 'bus-02', busNumber: 2,  routeName: 'Dispur Route',        routeId: 'route-02', driverName: 'Mohan Das',      driverPhone: '9876501002' },
  { id: 'bus-03', busNumber: 3,  routeName: 'Noonmati Route',      routeId: 'route-03', driverName: 'Bikash Nath',    driverPhone: '9876501003' },
  { id: 'bus-04', busNumber: 4,  routeName: 'Maligaon Route',      routeId: 'route-04', driverName: 'Dilip Baruah',   driverPhone: '9876501004' },
  { id: 'bus-05', busNumber: 5,  routeName: 'Chandmari Route',     routeId: 'route-05', driverName: 'Hemanta Das',    driverPhone: '9876501005' },
  { id: 'bus-06', busNumber: 6,  routeName: 'Guwahati Club Route', routeId: 'route-06', driverName: 'Pradip Saikia',  driverPhone: '9876501006' },
  { id: 'bus-07', busNumber: 7,  routeName: 'Zoo Road Route',      routeId: 'route-07', driverName: 'Biren Kalita',   driverPhone: '9876501007' },
  { id: 'bus-08', busNumber: 8,  routeName: 'Sixmile Route',       routeId: 'route-08', driverName: 'Anil Borah',     driverPhone: '9876501008' },
  { id: 'bus-09', busNumber: 9,  routeName: 'Narengi Route',       routeId: 'route-09', driverName: 'Sanjay Gogoi',   driverPhone: '9876501009' },
  { id: 'bus-10', busNumber: 10, routeName: 'Basistha Route',      routeId: 'route-10', driverName: 'Raju Medhi',     driverPhone: '9876501010' },
  { id: 'bus-11', busNumber: 11, routeName: 'Sonapur Route',       routeId: 'route-11', driverName: 'Dimple Sarma',   driverPhone: '9876501011' },
  { id: 'bus-12', busNumber: 12, routeName: 'Khanapara Route',     routeId: 'route-12', driverName: 'Tulsi Chetry',   driverPhone: '9876501012' },
  { id: 'bus-13', busNumber: 13, routeName: 'Hatigaon Route',      routeId: 'route-13', driverName: 'Gopal Roy',      driverPhone: '9876501013' },
  { id: 'bus-14', busNumber: 14, routeName: 'Lokhra Route',        routeId: 'route-14', driverName: 'Mithun Deka',    driverPhone: '9876501014' },
  { id: 'bus-15', busNumber: 15, routeName: 'VIP Road Route',      routeId: 'route-15', driverName: 'Babul Ali',      driverPhone: '9876501015' },
  { id: 'bus-16', busNumber: 16, routeName: 'GS Road Route',       routeId: 'route-16', driverName: 'Partha Dey',     driverPhone: '9876501016' },
  { id: 'bus-17', busNumber: 17, routeName: 'Ulubari Route',       routeId: 'route-17', driverName: 'Suresh Nath',    driverPhone: '9876501017' },
  { id: 'bus-18', busNumber: 18, routeName: 'Fancy Bazar Route',   routeId: 'route-18', driverName: 'Kamal Hazarika', driverPhone: '9876501018' },
  { id: 'bus-19', busNumber: 19, routeName: 'Paltan Bazar Route',  routeId: 'route-19', driverName: 'Nirmal Dutta',   driverPhone: '9876501019' },
  { id: 'bus-20', busNumber: 20, routeName: 'Panbazar Route',      routeId: 'route-20', driverName: 'Uttam Sharma',   driverPhone: '9876501020' },
  { id: 'bus-21', busNumber: 21, routeName: 'Athgaon Route',       routeId: 'route-21', driverName: 'Chandan Paul',   driverPhone: '9876501021' },
  { id: 'bus-22', busNumber: 22, routeName: 'Rukminigaon Route',   routeId: 'route-22', driverName: 'Tapan Bora',     driverPhone: '9876501022' },
  { id: 'bus-23', busNumber: 23, routeName: 'Azara Route',         routeId: 'route-23', driverName: 'Mantu Saikia',   driverPhone: '9876501023' },
  { id: 'bus-24', busNumber: 24, routeName: 'Kahilipara Route',    routeId: 'route-24', driverName: 'Bhupen Deka',    driverPhone: '9876501024' },
  { id: 'bus-25', busNumber: 25, routeName: 'Satgaon Route',       routeId: 'route-25', driverName: 'Polash Borah',   driverPhone: '9876501025' },
  { id: 'bus-26', busNumber: 26, routeName: 'Baihata Route',       routeId: 'route-26', driverName: 'Mintu Talukdar', driverPhone: '9876501026' },
  { id: 'bus-27', busNumber: 27, routeName: 'Mirza Route',         routeId: 'route-27', driverName: 'Ratan Kalita',   driverPhone: '9876501027' },
];

const ROUTES = {
  'route-01': [
    { lat: 26.1200, lng: 91.6800, name: 'Jalukbari' },
    { lat: 26.1250, lng: 91.6920, name: 'IIT Gate' },
    { lat: 26.1300, lng: 91.7050, name: 'Maligaon Chariali' },
    { lat: 26.1350, lng: 91.7150, name: 'Chandmari' },
    { lat: 26.1400, lng: 91.7250, name: 'GNB Road' },
    { lat: 26.1445, lng: 91.7362, name: 'SSRVM School' },
    { lat: 26.1400, lng: 91.7250, name: 'GNB Road' },
    { lat: 26.1350, lng: 91.7150, name: 'Chandmari' },
    { lat: 26.1300, lng: 91.7050, name: 'Maligaon Chariali' },
    { lat: 26.1250, lng: 91.6920, name: 'IIT Gate' },
  ],
  'route-02': [
    { lat: 26.1350, lng: 91.7800, name: 'Dispur Last Gate' },
    { lat: 26.1380, lng: 91.7700, name: 'Ganeshguri' },
    { lat: 26.1400, lng: 91.7600, name: 'Beltola' },
    { lat: 26.1420, lng: 91.7500, name: 'Hatigaon' },
    { lat: 26.1445, lng: 91.7362, name: 'SSRVM School' },
    { lat: 26.1420, lng: 91.7500, name: 'Hatigaon' },
    { lat: 26.1400, lng: 91.7600, name: 'Beltola' },
    { lat: 26.1380, lng: 91.7700, name: 'Ganeshguri' },
  ],
  'route-03': [
    { lat: 26.1600, lng: 91.7362, name: 'Noonmati' },
    { lat: 26.1550, lng: 91.7362, name: 'Christianbasti' },
    { lat: 26.1500, lng: 91.7362, name: 'Sixmile' },
    { lat: 26.1480, lng: 91.7362, name: 'Khanapara' },
    { lat: 26.1445, lng: 91.7362, name: 'SSRVM School' },
    { lat: 26.1480, lng: 91.7362, name: 'Khanapara' },
    { lat: 26.1500, lng: 91.7362, name: 'Sixmile' },
    { lat: 26.1550, lng: 91.7362, name: 'Christianbasti' },
  ],
  'route-04': [
    { lat: 26.1500, lng: 91.6900, name: 'Maligaon' },
    { lat: 26.1480, lng: 91.7000, name: 'Adabari' },
    { lat: 26.1460, lng: 91.7100, name: 'Ulubari' },
    { lat: 26.1450, lng: 91.7200, name: 'Lakhtokia' },
    { lat: 26.1445, lng: 91.7362, name: 'SSRVM School' },
    { lat: 26.1450, lng: 91.7200, name: 'Lakhtokia' },
    { lat: 26.1460, lng: 91.7100, name: 'Ulubari' },
    { lat: 26.1480, lng: 91.7000, name: 'Adabari' },
  ],
};

// Auto-generate routes 05-27 with slight offsets so buses don't overlap
for (let i = 5; i <= 27; i++) {
  const routeKey = `route-${String(i).padStart(2, '0')}`;
  const baseRouteKey = `route-0${((i - 1) % 4) + 1}`;
  const baseRoute = ROUTES[baseRouteKey];
  const latOffset = (((i * 7) % 20) - 10) * 0.001;
  const lngOffset = (((i * 13) % 20) - 10) * 0.001;

  ROUTES[routeKey] = baseRoute.map(wp => ({
    ...wp,
    lat: wp.name === 'SSRVM School' ? wp.lat : wp.lat + latOffset,
    lng: wp.name === 'SSRVM School' ? wp.lng : wp.lng + lngOffset
  }));
}

const DEMO_PARENTS = [
  {
    id: 'parent-01',
    name: 'Rahul Sharma',
    phone: '9876543210',
    role: 'parent',
    student: {
      name:        'Arjun Sharma',
      class:       'VI',
      section:     'A',
      busId:       'bus-07',
      busNumber:   7,
      routeName:   'Zoo Road Route',
      pickupStop:  'Zoo Road Junction',
      pickupLat:   26.1420,
      pickupLng:   91.7320,
      driverName:  'Biren Kalita',
      driverPhone: '9876501007'
    }
  },
  {
    id: 'parent-02',
    name: 'Priya Devi',
    phone: '9876543211',
    role: 'parent',
    student: {
      name:        'Sneha Devi',
      class:       'IV',
      section:     'B',
      busId:       'bus-03',
      busNumber:   3,
      routeName:   'Noonmati Route',
      pickupStop:  'Sixmile Junction',
      pickupLat:   26.1500,
      pickupLng:   91.7362,
      driverName:  'Bikash Nath',
      driverPhone: '9876501003'
    }
  },
  {
    id: 'parent-03',
    name: 'Amit Gogoi',
    phone: '9876543212',
    role: 'parent',
    student: {
      name:        'Rohan Gogoi',
      class:       'VIII',
      section:     'A',
      busId:       'bus-12',
      busNumber:   12,
      routeName:   'Khanapara Route',
      pickupStop:  'Khanapara',
      pickupLat:   26.1480,
      pickupLng:   91.7362,
      driverName:  'Tulsi Chetry',
      driverPhone: '9876501012'
    }
  }
];

const DEMO_ADMIN = {
  id:    'admin-01',
  name:  'Kamal Sutradhar',
  phone: '9774598668',
  role:  'admin'
};

module.exports = { BUSES, ROUTES, DEMO_PARENTS, DEMO_ADMIN };

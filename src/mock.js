function getRandomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

function getRandomInt(min, max) {  
  return Math.floor(min + Math.random() * (max + 1 - min));
};

const generateFlights = (count) => {
  return new Array(count).fill(``).map(generateFlight);
};

const generateFlight = () => ({
  dateFlight: getRandomDate(new Date(2010, 0, 1), new Date()),
  flight: `AB-33${getRandomInt(10,80)}`,
  pinType: `B-757-${getRandomInt(100,200)}`,
  pin: `XXXAK`,
  timeFlight: getRandomInt(25000,26000),
  timeBlock: getRandomInt(27000,28000),
  timeNight: getRandomInt(15000,16000),
  timeBiologicalNight: getRandomInt(28000,29000),
  timeWork: getRandomInt(37000,38000),
  type: getRandomInt(0,1),
  takeoff: {
    name: `Томск(Богашево)-${getRandomInt(1,9)}`,
    lat: 56.55,
    long: 85.2,
  },
  landing: {
    name: `Нячанг(Камрань Интл)`,
    lat: 11.99805555,
    long: 109.21944444,
  },
});

export const flights = generateFlights(20).sort((a,b)=>b.dateFlight - a.dateFlight);

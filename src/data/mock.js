/**
 * Datos de prueba (mock) de Nomadix.
 * Imágenes servidas desde Unsplash (URLs estables verificadas).
 * En una app real, este módulo se reemplazaría por una API.
 */

const img = (id, w = 900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

export const destinations = [
  {
    id: 'cancun-oasis',
    title: 'Grand Oasis Cancún',
    location: 'Cancún, Quintana Roo',
    category: 'paquete',
    priceFrom: 14129,
    discount: 48,
    rating: 4.7,
    reviews: 326,
    duration: '7 días / 6 noches',
    featured: true,
    image: img('photo-1507525428034-b723cf961d3e'),
    images: [
      img('photo-1507525428034-b723cf961d3e', 1400),
      img('photo-1510414842594-a61c69b5ae57'),
      img('photo-1544551763-46a013bb70d5'),
    ],
    description:
      'Resort todo incluido frente al mar Caribe: playas de arena blanca, spa de lujo, entretenimiento nocturno y actividades acuáticas para toda la familia.',
    itinerary: [
      { day: 'Día 1', title: 'Llegada y check-in', text: 'Recepción con bebida de bienvenida, alboroto del resort y cena de inauguração en el bufé principal.' },
      { day: 'Día 2', title: 'Playa y actividades acuáticas', text: 'Mañana de kayak y snorkel en la laguna, tarde libre en la piscina de olas y show nocturno.' },
      { day: 'Día 3', title: 'Isla Mujeres', text: 'Excursión en lancha a Isla Mujeres, snorkel en arrecife y comida de mar en el muelle.' },
      { day: 'Día 4-6', title: 'Relajo total', text: 'Spa, gastronomía a la carta, cenotes opcionales y noches de karaoke y música en vivo.' },
      { day: 'Día 7', title: 'Regreso', text: 'Desayuno temprano, checkout y traslado de vuelta al aeropuerto de Cancún.' },
    ],
    includes: ['Vuelos ida y vuelta', 'Traslados aeropuerto–hotel', 'Hospedaje todo incluido', 'Cena romántica', 'Seguro de viaje', 'Guía en español'],
  },
  {
    id: 'ixtapa-barcelo',
    title: 'Barceló Ixtapa',
    location: 'Ixtapa, Guerrero',
    category: 'paquete',
    priceFrom: 9000,
    discount: 30,
    rating: 4.5,
    reviews: 184,
    duration: '5 días / 4 noches',
    featured: true,
    image: img('photo-1519046904884-53103b34b206'),
    images: [
      img('photo-1519046904884-53103b34b206', 1400),
      img('photo-1509233725247-49e657c54213'),
      img('photo-1518548419970-58e3b4079ab2'),
    ],
    description:
      'Escapada al Pacífico mexicano con playa privada, 4 piscinas, kids club y cena bajo las estrellas frente a la bahía de Ixtapa.',
    itinerary: [
      { day: 'Día 1', title: 'Bienvenida al Pacífico', text: 'Aterrizaje en Ixtapa, traslado privado y tarde de exploración del malecón.' },
      { day: 'Día 2', title: 'Playa principal', text: 'Palapas, deportes de vela y ceviche de la casa en el restaurante de playa.' },
      { day: 'Día 3', title: 'Tour de pueblos', text: 'Visita a Troncones y la cascada de Salulita con almuerzo típico.' },
      { day: 'Día 4', title: 'Spa y atardecer', text: 'Masaje de 60 minutos y velada con música en vivo en la terraza.' },
      { day: 'Día 5', title: 'Hasta pronto', text: 'Desayuno buffet y traslado al aeropuerto.' },
    ],
    includes: ['Vuelos ida y vuelta', 'Hospedaje 4 noches', 'Desayuno y cena', 'Traslados', '1 día de tour incluido'],
  },
  {
    id: 'sandos-caracol',
    title: 'Sandos Caracol Eco Resort',
    location: 'Playa del Carmen, Quintana Roo',
    category: 'paquete',
    priceFrom: 10677,
    discount: 28,
    rating: 4.6,
    reviews: 251,
    duration: '6 días / 5 noches',
    featured: true,
    image: img('photo-1526392060635-9d6019884377'),
    images: [
      img('photo-1526392060635-9d6019884377', 1400),
      img('photo-1467377791767-c929b5dc9a23'),
      img('photo-1493558103817-58b2924bce98'),
    ],
    description:
      'Resort ecológico en la selva maya con lagunas naturales, eco-parque, show cultural mexicano y acceso a la Quinta Avenida.',
    itinerary: [
      { day: 'Día 1', title: 'Selva y mar', text: 'Llegada, bienvenida con cohete maya y recorrido por el eco-parque.' },
      { day: 'Día 2', title: 'Xcaret a diario', text: 'Día libre con acceso a lagunas, paseo en balsa y jardín de orquídeas.' },
      { day: 'Día 3', title: 'Playa Punta Esmeralda', text: 'Snorkel en arrecife y almuerzo de mariscos frente al mar.' },
      { day: 'Día 4', title: 'Quinta Avenida', text: 'Tarde libre en Playa del Carmen: compras, cafés y artesanías.' },
      { day: 'Día 5-6', title: 'Cierre del viaje', text: 'Show de fuego, cena mexicana y traslado al aeropuerto.' },
    ],
    includes: ['Vuelos ida y vuelta', 'Todo incluido 5 noches', 'Eco-parque', 'Traslados', 'Show cultural', 'Guía local'],
  },
  {
    id: 'tulum-cenotes',
    title: 'Tulum y Cenotes Escondidos',
    location: 'Tulum, Quintana Roo',
    category: 'tour',
    priceFrom: 1450,
    discount: 15,
    rating: 4.8,
    reviews: 412,
    duration: '1 día',
    featured: false,
    image: img('photo-1476514525535-07fb3b4ae5f1'),
    images: [
      img('photo-1476514525535-07fb3b4ae5f1', 1400),
      img('photo-1503220317375-aaad61436b1b'),
      img('photo-1516815231560-8f41ec531527'),
    ],
    description:
      'Recorrido guiado por las ruinas de Tulum sobre el acantilado y baños en tres cenotes de agua turquesa escondidos en la selva.',
    itinerary: [
      { day: '08:00', title: 'Salida desde el hotel', text: 'Recolección en comodobús con aire y agua a bordo.' },
      { day: '10:00', title: 'Ruinas de Tulum', text: 'Recorrido de 90 minutos con guía certificado por INAH.' },
      { day: '13:00', title: 'Comida en la selva', text: 'Buffet de cocina yucateca: cochinita, papadzules y agua fresca.' },
      { day: '15:00', title: 'Cenotes', text: 'Natación en dos cenotes sagrados con equipo de seguridad incluido.' },
      { day: '18:30', title: 'Regreso', text: 'Devolución a hoteles de Cancún, Playa del Carmen y Tulum.' },
    ],
    includes: ['Transporte ida y vuelta', 'Guía bilingüe', 'Entrada a ruinas', 'Almuerzo', 'Equipo de snorkel'],
  },
  {
    id: 'europa-paris-venecia',
    title: 'Europa: París y Venecia',
    location: 'Francia e Italia',
    category: 'paquete',
    priceFrom: 22900,
    discount: 12,
    rating: 4.9,
    reviews: 97,
    duration: '10 días / 9 noches',
    featured: false,
    image: img('photo-1502602898657-3e91760cbb34'),
    images: [
      img('photo-1502602898657-3e91760cbb34', 1400),
      img('photo-1499856871958-5b9627545d1a'),
      img('photo-1523906834658-6e24ef2386f9'),
    ],
    description:
      'Itinerario clásico por dos ciudades eternas: la Torre Eiffel, el Louvre, los canales de Venecia y un paseo en gondola al atardecer.',
    itinerary: [
      { day: 'Día 1-4', title: 'París', text: 'Louvre, Montmartre, crucero por el Sena y cena en el Barrio Latino.' },
      { day: 'Día 5', title: 'Tren a Venecia', text: 'Eurostar y TGV con asiento reservado y paisajes de los Alpes.' },
      { day: 'Día 6-8', title: 'Venecia', text: 'Plaza San Marcos, islas de Murano y Burano, y gondola al atardecer.' },
      { day: 'Día 9', title: 'Día libre', text: 'Compras en la Via Dante y última cena de mariscos en Rialto.' },
      { day: 'Día 10', title: 'Vuelta a casa', text: 'Traslado al aeropuerto de Marco Polo y vuelo de regreso.' },
    ],
    includes: ['Vuelos internacionales', 'Tren París–Venecia', 'Hoteles 4 estrellas', 'Desayunos', 'Tours guiados', 'Seguro de viaje'],
  },
  {
    id: 'catamaran-riviera',
    title: 'Catamarán Riviera Maya',
    location: 'Puerto Aventuras, Quintana Roo',
    category: 'tour',
    priceFrom: 2350,
    discount: 20,
    rating: 4.7,
    reviews: 289,
    duration: '1 día',
    featured: false,
    image: img('photo-1544644181-1484b3fdfc62'),
    images: [
      img('photo-1544644181-1484b3fdfc62', 1400),
      img('photo-1533105079780-92b9be482077'),
      img('photo-1493558103817-58b2924bce98'),
    ],
    description:
      'Navegación todo el día en catamarán con barra libre, parada en arrecife para snorkel y comida caliente a bordo.',
    itinerary: [
      { day: '10:00', title: 'Abordaje', text: 'Bienvenida con mimosas y salida desde el muelle de Puerto Aventuras.' },
      { day: '11:30', title: 'Arrecife', text: 'Parada de 45 minutos para snorkel en la segunda barrera del Caribe.' },
      { day: '13:30', title: 'Comida a bordo', text: 'Parrilla de mariscos, postres tropicales y barra libre de refrescos.' },
      { day: '16:00', title: 'Regreso', text: 'Regreso con música y atardecer frente a la costa.' },
    ],
    includes: ['Barra libre', 'Equipo de snorkel', 'Comida a bordo', 'Seguro de navegación', 'Música en vivo'],
  },
  {
    id: 'vuelo-cdmx-cancun',
    title: 'Vuelo CDMX ↔ Cancún',
    location: 'Ciudad de México',
    category: 'vuelo',
    priceFrom: 1980,
    discount: 10,
    rating: 4.4,
    reviews: 528,
    duration: '2 h 30 min',
    featured: false,
    image: img('photo-1488646953014-85cb44e25828'),
    images: [
      img('photo-1488646953014-85cb44e25828', 1400),
      img('photo-1470071459604-3b5ec3a7fe05'),
      img('photo-1519681393784-d120267933ba'),
    ],
    description:
      'Tarifa redonda directa con equipaje de mano incluido, selección de asiento gratis y cambio de fecha sin penalización.',
    itinerary: [
      { day: '07:15', title: 'Check-in en AICM', text: 'Módulo dedicado y acceso preferente a seguridad.' },
      { day: '08:00', title: 'Despegue', text: 'Vuelo directo con servicio de bebidas a bordo.' },
      { day: '10:30', title: 'Aterrizaje', text: 'Llegada al aeropuerto de Cancún con equipaje facturado.' },
    ],
    includes: ['Equipaje de mano 10 kg', 'Selección de asiento', 'Cambios sin cargo', 'Check-in prioritario'],
  },
]

export const featuredDestinations = destinations.filter((d) => d.featured)

export const categories = [
  { value: 'paquete', label: 'Paquetes' },
  { value: 'tour', label: 'Tours' },
  { value: 'vuelo', label: 'Vuelos' },
]

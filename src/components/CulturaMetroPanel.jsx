import React from 'react';
import { 
  Heart, 
  Users, 
  Sparkles, 
  ShieldCheck, 
  Footprints, 
  Clock, 
  DoorOpen, 
  AlertTriangle, 
  Train, 
  Radio, 
  CheckCircle2, 
  Compass, 
  Info, 
  ExternalLink 
} from 'lucide-react';
import { playComicPop } from '../utils/audioFX';

export function CulturaMetroPanel({ onSelectItem }) {
  const decalogo = [
    {
      id: 'dm-1',
      number: '01',
      title: 'CAMINA POR LA DERECHA',
      tagline: '¡Flujo ordenado y ágil en todo momento!',
      description: 'Circula siempre por tu carril derecho en escaleras fijas, pasarelas, corredores y andenes. Esto evita choques y permite una evacuación o circulación fluida y sin tropiezos.',
      icon: '👉',
      comicBadge: '¡CIRCULACIÓN FLUIDA!',
      color: 'bg-emerald-600 text-white'
    },
    {
      id: 'dm-2',
      number: '02',
      title: 'CAMINAR ES MEJOR QUE CORRER',
      tagline: '¡Tu seguridad es lo primero!',
      description: 'Dentro de las estaciones y trenes no es necesario correr. Los trenes pasan con una frecuencia de 3 a 5 minutos. Correr en escaleras o andenes genera caídas y riesgos graves.',
      icon: '🚶‍♂️',
      comicBadge: '¡PASO SEGURO!',
      color: 'bg-amber-500 text-black'
    },
    {
      id: 'dm-3',
      number: '03',
      title: 'RESPETA LA LÍNEA AMARILLA',
      tagline: '¡La franja podotáctil salva vidas!',
      description: 'Permanece siempre detrás de la franja amarilla de seguridad hasta que el tren se haya detenido por completo. Jamás asomes la cabeza o cuerpo hacia la vía férrea.',
      icon: '⚠️',
      comicBadge: '¡ZONA SEGURA!',
      color: 'bg-[#FFD100] text-black'
    },
    {
      id: 'dm-4',
      number: '04',
      title: 'DEJAR SALIR ANTES DE ENTRAR',
      tagline: '¡Cortesía y rapidez para todos!',
      description: 'Ubícate a los costados de las puertas del tren. Permite que todos los viajeros que van a descender salgan primero antes de intentar ingresar al vagón.',
      icon: '🚪',
      comicBadge: '¡CIVISMO PURO!',
      color: 'bg-[#0070BA] text-white'
    },
    {
      id: 'dm-5',
      number: '05',
      title: 'NO FORZAR LAS PUERTAS',
      tagline: '¡El próximo tren viene en camino!',
      description: 'Si suena el aviso acústico de cierre de puertas o las luces rojas parpadean, espera el próximo tren. Forzar las puertas bloquea el sistema neumático y retrasa toda la línea.',
      icon: '🛑',
      comicBadge: '¡TIEMPO PRECISO!',
      color: 'bg-[#E52521] text-white'
    },
    {
      id: 'dm-6',
      number: '06',
      title: 'CEDER EL PUESTO PREFERENCIAL',
      tagline: '¡Empatía y amabilidad paisa!',
      description: 'Ofrece voluntariamente los asientos a mujeres embarazadas, personas mayores, personas con discapacidad motriz o niños. La solidaridad es el corazón del Metro.',
      icon: '🪑',
      comicBadge: '¡GRAN CORAZÓN!',
      color: 'bg-purple-600 text-white'
    },
    {
      id: 'dm-7',
      number: '07',
      title: 'DESPEJAR LA ZONA DE PUERTAS',
      tagline: '¡Avanza hacia el interior del vagón!',
      description: 'Al ingresar al tren, avanza hacia el pasillo central y no te quedes en el umbral de las puertas. Quítate la mochila o morral y llévalo en la mano para no incomodar.',
      icon: '🎒',
      comicBadge: '¡ESPACIO CÓMODO!',
      color: 'bg-teal-600 text-white'
    }
  ];

  const officialImages = [
    {
      title: 'Flota de Trenes Modernizados',
      category: 'MATERIAL RODANTE',
      url: 'https://www.metrodemedellin.gov.co/hs-fs/hubfs/MODERNIZADO%203.jpg',
      caption: 'Unidades de trenes modernizadas en talleres de Bello con tracción trifásica y sistemas de frenado regenerativo.'
    },
    {
      title: 'Operadora y Personal de Estación',
      category: 'TALENTO HUMANO',
      url: 'https://www.metrodemedellin.gov.co/hubfs/metrocable-arvi-operadora-de-estacion-1.webp',
      caption: 'Personal capacitado en servicio al cliente, primeros auxilios y protocolos de evacuación segura.'
    },
    {
      title: 'Metrocable en el Valle de Aburrá',
      category: 'CABLE AÉREO',
      url: 'https://www.metrodemedellin.gov.co/hubfs/metrocable%20%281%29.webp',
      caption: 'Pioneros en integración de transporte urbano por teleférico: Líneas K, J, L, H, M y P.'
    },
    {
      title: 'Tranvía de Ayacucho (Línea T)',
      category: 'TRANVÍA MODERNO',
      url: 'https://www.metrodemedellin.gov.co/hubfs/tranvia%20%281%29.webp',
      caption: 'Sistema tranviario Translohr sobre neumático que asciende por la Calle Ayacucho hasta el oriente.'
    }
  ];

  const sitvaLines = [
    { line: 'LÍNEA A', name: 'Niquía ↔ La Estrella', mode: 'Tren Metropolitano', color: 'bg-blue-600 text-white', status: '🟢 OPERANDO NORMAL' },
    { line: 'LÍNEA B', name: 'San Antonio ↔ San Javier', mode: 'Tren Metropolitano', color: 'bg-orange-600 text-white', status: '🟢 OPERANDO NORMAL' },
    { line: 'LÍNEA T', name: 'San Antonio ↔ Oriente', mode: 'Tranvía de Ayacucho', color: 'bg-emerald-600 text-white', status: '🟢 OPERANDO NORMAL' },
    { line: 'LÍNEA K', name: 'Acevedo ↔ Santo Domingo', mode: 'Metrocable', color: 'bg-green-700 text-white', status: '🟢 OPERANDO NORMAL' },
    { line: 'LÍNEA J', name: 'San Javier ↔ La Aurora', mode: 'Metrocable', color: 'bg-yellow-500 text-black', status: '🟢 OPERANDO NORMAL' },
    { line: 'LÍNEA P', name: 'Acevedo ↔ El Progreso', mode: 'Metrocable Picacho', color: 'bg-red-600 text-white', status: '🟢 OPERANDO NORMAL' },
    { line: 'LÍNEA L', name: 'Santo Domingo ↔ Arví', mode: 'Cable Ecoturístico', color: 'bg-amber-800 text-white', status: '🟢 OPERANDO NORMAL' },
    { line: 'LÍNEA H', name: 'Oriente ↔ Villa Sierra', mode: 'Metrocable', color: 'bg-pink-600 text-white', status: '🟢 OPERANDO NORMAL' },
    { line: 'LÍNEA M', name: 'Miraflores ↔ 13 de Noviembre', mode: 'Metrocable', color: 'bg-purple-600 text-white', status: '🟢 OPERANDO NORMAL' },
    { line: 'METROPLÚS', name: 'Líneas 1, 2 y O (Buses Eléctricos)', mode: 'Buses Rápidos BRT', color: 'bg-teal-700 text-white', status: '🟢 OPERANDO NORMAL' }
  ];

  return (
    <div className="space-y-8">
      {/* Hero Banner Cultura Metro */}
      <div className="bg-[#FFFDF0] border-4 border-black comic-shadow-lg p-5 sm:p-6 rounded-2xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className="bg-[#008752] text-white font-bangers text-xs px-2.5 py-0.5 border-2 border-black rotate-[-2deg]">
                MODELO DE GESTIÓN SOCIAL Y CIUDADANA
              </span>
              <span className="bg-[#FFD100] text-black font-bangers text-xs px-2.5 py-0.5 border-2 border-black rotate-1">
                METRO DE MEDELLÍN
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bangers text-[#111111] leading-none">
              LA CULTURA METRO: COMPROMISO, CIVISMO Y SEGURIDAD
            </h2>
            <p className="text-xs sm:text-sm font-comic text-gray-700 max-w-2xl leading-relaxed">
              La Cultura Metro es la construcción de <strong>modos de relación positivos</strong> fundamentados en tres dimensiones: 
              <span className="text-[#008752] font-bold"> conmigo mismo</span>, 
              <span className="text-[#0070BA] font-bold"> con los otros</span> y 
              <span className="text-[#D97706] font-bold"> con el entorno</span>. Es el pilar que permite que millones de personas viajen con respeto y tranquilidad cada día.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto shrink-0">
            <div className="bg-white border-3 border-black comic-shadow-sm p-3 rounded-xl text-center">
              <span className="text-[10px] font-bangers text-gray-500 block uppercase">ORIGEN OFICIAL</span>
              <span className="text-2xl font-bangers text-[#008752]">30 NOV 1995</span>
              <span className="text-[10px] font-comic text-gray-600 block">Más de 30 años de civismo</span>
            </div>
            <a
              href="https://www.metrodemedellin.gov.co"
              target="_blank"
              rel="noreferrer"
              className="comic-btn bg-[#FFD100] text-black font-bangers text-xs px-3 py-2 flex items-center justify-center gap-1.5 hover:bg-yellow-400"
            >
              <span>PORTAL OFICIAL METRO</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Las 3 Dimensiones Relacionales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 pt-5 border-t-3 border-black">
          <div className="bg-emerald-50 border-2 border-black p-4 rounded-xl space-y-1">
            <div className="flex items-center gap-2 text-sm font-bangers text-emerald-800">
              <Heart className="w-4 h-4 text-emerald-600" />
              <span>1. CONMIGO MISMO</span>
            </div>
            <p className="text-xs font-comic text-gray-700">
              Cuidado de mi propia vida, respeto por mis tiempos, calma al transitar y cumplimiento voluntario de las normas de seguridad.
            </p>
          </div>

          <div className="bg-blue-50 border-2 border-black p-4 rounded-xl space-y-1">
            <div className="flex items-center gap-2 text-sm font-bangers text-blue-800">
              <Users className="w-4 h-4 text-blue-600" />
              <span>2. CON LOS OTROS</span>
            </div>
            <p className="text-xs font-comic text-gray-700">
              Empatía, solidaridad con personas con discapacidad, amabilidad paisa, ceder el paso y escuchar sin incomodar con ruidos.
            </p>
          </div>

          <div className="bg-amber-50 border-2 border-black p-4 rounded-xl space-y-1">
            <div className="flex items-center gap-2 text-sm font-bangers text-amber-800">
              <Compass className="w-4 h-4 text-amber-600" />
              <span>3. CON EL ENTORNO</span>
            </div>
            <p className="text-xs font-comic text-gray-700">
              Protección de los trenes, no rayar ni ensuciar estaciones, cuidar las zonas verdes bajo viaductos y valorar el bien público común.
            </p>
          </div>
        </div>
      </div>

      {/* Decálogo Ilustrado en Cómic */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl sm:text-3xl font-bangers text-black flex items-center gap-2">
            <span>🦸‍♂️</span>
            <span>DECÁLOGO ILUSTRADO: REGLAS DE ORO EN ANDENES Y TRENES</span>
          </h3>
          <span className="text-xs font-mono font-bold text-gray-500 hidden sm:inline">
            7 PAUTAS PRÁCTICAS
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {decalogo.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                playComicPop();
                onSelectItem({
                  name: item.title,
                  code: item.number,
                  level: 'Norma Cultura Metro',
                  description: item.description,
                  specs: `Pauta oficial de comportamiento cívico y seguridad en andenes del Metro de Medellín: "${item.tagline}"`,
                  verified: true
                });
              }}
              className="bg-[#FFFDF0] border-4 border-black comic-shadow rounded-2xl p-4 flex flex-col justify-between hover:-translate-y-1.5 transition-transform cursor-pointer group"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl">{item.icon}</span>
                  <span className={`text-[10px] font-bangers px-2 py-0.5 border-2 border-black rounded ${item.color}`}>
                    REGLA {item.number}
                  </span>
                </div>

                <h4 className="text-lg font-bangers text-[#111111] group-hover:text-[#008752] transition-colors leading-tight mb-1">
                  {item.title}
                </h4>

                <p className="text-[11px] font-bangers text-[#E52521] uppercase mb-2">
                  "{item.tagline}"
                </p>

                <p className="text-xs font-comic text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t-2 border-dashed border-gray-300 flex items-center justify-between text-xs font-bangers text-[#008752]">
                <span>CONSULTAR EN VIÑETA</span>
                <span className="text-sm">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Galería Fotográfica Oficial de la Marca */}
      <div className="bg-[#FFFDF0] border-4 border-black comic-shadow p-5 sm:p-6 rounded-2xl space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="bg-[#111111] text-[#FFD100] text-xs font-bangers px-2 py-0.5 border border-black">
                IDENTIDAD VISUAL OFICIAL
              </span>
              <span className="text-xs font-mono font-bold text-gray-500">
                PORTAL METRODEMEDELLIN.GOV.CO
              </span>
            </div>
            <h3 className="text-2xl font-bangers text-black mt-1">
              GALERÍA DE FLOTA, CABLE, TRANVÍA Y TALENTO HUMANO
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {officialImages.map((img, i) => (
            <div
              key={i}
              className="bg-white border-3 border-black comic-shadow-sm rounded-xl overflow-hidden group hover:-translate-y-1 transition-transform"
            >
              <div className="relative h-44 overflow-hidden bg-gray-100 border-b-2 border-black">
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <span className="absolute top-2 left-2 bg-[#111111] text-[#FFD100] text-[10px] font-bangers px-2 py-0.5 border border-black rounded">
                  {img.category}
                </span>
              </div>
              <div className="p-3">
                <h5 className="font-bangers text-sm text-[#111111] mb-1">{img.title}</h5>
                <p className="text-[11px] font-comic text-gray-600 line-clamp-2 leading-tight">
                  {img.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Semáforo en Vivo de la Red SITVA */}
      <div className="bg-[#111111] text-white border-4 border-black comic-shadow-lg p-5 sm:p-6 rounded-2xl space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-gray-700 pb-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
              <h3 className="text-xl font-bangers text-[#FFD100] tracking-wider">
                SEMÁFORO DE OPERACIÓN DE LA RED METRO (SITVA)
              </h3>
            </div>
            <p className="text-xs font-comic text-gray-300">
              Monitoreo continuo de todas las líneas férreas, cables aéreos y tranvía del Valle de Aburrá.
            </p>
          </div>
          <span className="bg-[#008752] text-white text-xs font-bangers px-2.5 py-1 rounded border border-white">
            10/10 LÍNEAS ACTIVAS
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {sitvaLines.map((line, idx) => (
            <div
              key={idx}
              className="bg-gray-900 border-2 border-gray-700 p-2.5 rounded-lg space-y-1 hover:border-[#FFD100] transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className={`text-[10px] font-bangers px-1.5 py-0.2 rounded ${line.color}`}>
                  {line.line}
                </span>
                <span className="text-[9px] font-mono text-emerald-400">100% OK</span>
              </div>
              <p className="text-xs font-bangers text-white leading-tight">{line.name}</p>
              <p className="text-[10px] font-comic text-gray-400">{line.mode}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

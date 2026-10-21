// Datos detallados y realistas del Metro de Medellín para la aplicación interactiva Cómic

export const METRO_STATIONS = [
  {
    id: 'san-antonio',
    name: 'San Antonio',
    line: 'Línea A, Línea B & Tranvía T-A',
    badgeColor: 'bg-green-600 text-white',
    accentColor: '#008752',
    lineBadge: 'LÍNEAS A / B / T',
    type: 'Estación de Transferencia Multimodal (Viaducto & Superficie)',
    heroTagline: '¡El corazón palpitante y núcleo de transferencia de todo el Valle de Aburrá!',
    heroSpeech: '¡Bienvenido a San Antonio! Aquí confluyen la Línea A (Norte-Sur), la Línea B (Centro-Occidente) y el Tranvía de Ayacucho. Por su altísimo flujo, el plan de emergencias e inventario debe estar al 100% operativo.',
    locativeFeatures: {
      structureType: 'Viaducto Elevado de Concreto Postensado (Nivel 2) + Estación de Superficie (Nivel 1)',
      levels: '3 Niveles: Andenes Línea A (Nivel +2), Mezanina y Distribución (Nivel +1), Andén Línea B y Acceso Tranvía (Nivel Calle)',
      platformsType: 'Andenes Laterales en Línea A (142 m de longitud) y Andén Central en Línea B',
      ventilation: 'Ventilación Natural Cruzada en andenes elevados + Extracción Mecánica Forzada en mezaninas y cuartos técnicos',
      capacity: 'Aforo dinámico de hasta 65.000 pasajeros en hora pico',
      fireSuppression: 'Red Húmeda Siamesa 2.5", gabinetes interiores Clase II con mangueras sintéticas de 30 m y rociadores en cuartos de alta carga térmica',
      emergencyExitsCount: 6,
      flooring: 'Piso de granito de alta resistencia con acabado antideslizante R11'
    },
    meetingPoints: [
      {
        id: 'mp-sa-1',
        name: 'Plazoleta Central San Antonio (Costado Carabobo)',
        locationDescription: 'Costado Oriental sobre el paseo peatonal Carabobo entre Calles Maturín y Amador.',
        safeCapacity: '3.500 personas',
        evacuationRoute: 'Descenso por escaleras de emergencia 1 y 2 de Mezanina hacia plazoleta abierta exterior.',
        estimatedTime: '2.5 minutos',
        icon: 'ShieldCheck',
        status: 'Despejado y Señalizado'
      },
      {
        id: 'mp-sa-2',
        name: 'Plaza de las Esculturas (Costado Maturín / Tranvía)',
        locationDescription: 'Costado Sur-Occidental, sobre el inicio de la plataforma del Tranvía de Ayacucho.',
        safeCapacity: '2.200 personas',
        evacuationRoute: 'Salida directa por compuertas de emergencia nivel calle sin desnivel de escaleras.',
        estimatedTime: '1.5 minutos',
        icon: 'MapPin',
        status: 'Ruta Libre de Obstáculos'
      },
      {
        id: 'mp-sa-3',
        name: 'Bajo Viaducto Calle Pichincha',
        locationDescription: 'Área abierta pavimentada bajo las vigas cajón del viaducto con Calle Pichincha.',
        safeCapacity: '1.800 personas',
        evacuationRoute: 'Escaleras mecánicas detenidas en modo fijo + rampa norte de evacuación.',
        estimatedTime: '3 minutos',
        icon: 'AlertCircle',
        status: 'Monitoreado por CCTV'
      }
    ],
    technicalRooms: [
      {
        id: 'tr-sa-1',
        name: 'Puesto de Mando Local (PML)',
        code: 'PML-SA-01',
        level: 'Nivel Mezanina (+1)',
        exactLocation: 'Sector central junto a Taquilla Principal, con ventana blindada de visión 180°',
        accessLevel: 'Restringido - Personal Operativo Metro',
        description: 'Centro neurálgico de la estación. Integra consolas SCADA de tracción, monitoreo de 48 cámaras CCTV, perifoneo de emergencia PA y botón de parada de emergencia general.',
        safetyEquipment: 'Extintor Solkaflam 123 (3.7 kg), botón de alarma contra atraco e incendio, botiquín táctico.'
      },
      {
        id: 'tr-sa-2',
        name: 'Subestación Eléctrica de Tracción (SET)',
        code: 'SET-1500-SA',
        level: 'Nivel Calle / Bajo Viaducto',
        exactLocation: 'Costado Sur-Oriental, módulo blindado con puertas cortafuego RF-120',
        accessLevel: 'Exclusivo - Ingenieros de Energía y Tracción',
        description: 'Transforma y rectifica energía de media tensión (13.2 kV AC) a 1500 V DC para alimentar la catenaria de Línea A y Línea B. Dispone de interruptores ultrarrápidos de corriente continua.',
        safetyEquipment: '2 Extintores CO2 de 20 lbs, alfombra dieléctrica 30 kV, pértiga de rescate eléctrico, ducha lavaojos de emergencia.'
      },
      {
        id: 'tr-sa-3',
        name: 'Cuarto de Telecomunicaciones y Enclavamiento',
        code: 'TEL-ENC-SA',
        level: 'Nivel Mezanina (+1)',
        exactLocation: 'Ala Norte, acceso contiguo a escalera técnica No. 3',
        accessLevel: 'Restringido - Señalización y Sistemas',
        description: 'Aloja racks de fibra óptica, controladores de enclavamiento electrónico de cambio de vías (Agujas) y servidores de telecomunicación TETRA.',
        safetyEquipment: 'Sistema de extinción por gas limpio FM-200 / Novec 1230 automático, detector óptico de humo precoz VESDA.'
      },
      {
        id: 'tr-sa-4',
        name: 'Cuarto de Primeros Auxilios / Enfermería',
        code: 'ENF-SA-01',
        level: 'Nivel Mezanina (+1)',
        exactLocation: 'Costado Oriental junto a acceso PMR y ascensor No. 1',
        accessLevel: 'Personal APH (Atención Prehospitalaria)',
        description: 'Espacio climatizado equipado con camilla gineco-traumatológica, monitor de signos vitales, cilindro de oxígeno medicinal y kit de inmovilización espinal.',
        safetyEquipment: 'Desfibrilador DEA ZOLL, Botiquín Reglamentario Tipo B, Lavamanos quirúrgico con pedal.'
      },
      {
        id: 'tr-sa-5',
        name: 'Cuarto de Bombas Red Contra Incendio (SCI)',
        code: 'SCI-BOM-01',
        level: 'Sótano Técnico Nivel -1',
        exactLocation: 'Bajo rampa de acceso Carabobo con cisterna de 80.000 litros',
        accessLevel: 'Mantenimiento Hidráulico',
        description: 'Bomba principal diesel de 500 GPM + electrobomba jockey para mantener presurizada la red de mangueras y rociadores a 120 PSI.',
        safetyEquipment: 'Extintor ABC de 20 lbs, tablero de presostatos con alarma acústica conectada al PML.'
      },
      {
        id: 'tr-sa-6',
        name: 'Cuarto de Aseo y Almacenamiento Técnico',
        code: 'ASO-SA-02',
        level: 'Nivel Mezanina (+1)',
        exactLocation: 'Pasillo de servicios costado occidental',
        accessLevel: 'Personal de Aseo y Servicios Generales',
        description: 'Almacenamiento de insumos químicos biodegradables, máquinas pulidoras de piso y kit de contingencia para derrames de fluidos biológicos.',
        safetyEquipment: 'Ducha lavaojos de pared, extintor ABC 10 lbs, hojas de seguridad MSDS visibles.'
      }
    ],
    accessibility: {
      elevatorsCount: 4,
      elevatorsDetails: '4 Ascensores electromecánicos panorámicos con capacidad de 1000 kg (13 personas), sintetizador de voz con anuncios en español/inglés, botoneras en Braille a 90 cm de altura y puertas con sensor fotocélula infrarroja de cortina completa.',
      podotactileCoverage: '100% de la estación con huellas podotáctiles en relieve: franjas direccionales amarillas de avance continuo y baldosas de botones de alerta antes de escaleras, desniveles y a 60 cm del borde de andén.',
      tactileStrips: 'Franja amarilla de advertencia de 30 cm de ancho con textura táctil en todos los bordes de plataforma.',
      wheelchairRamps: '3 Rampas exteriores con pendiente del 7.2% con pasamanos dobles tubulares en acero inoxidable a 70 cm y 90 cm de altura.',
      accessibleGatesCount: 6,
      accessibleGatesDetails: 'Torniquetes preferenciales tipo batiente con ancho de paso libre de 92 cm, sensor de validación rápida Cívica y botón de apertura remota desde taquilla.',
      audioAssistance: 'Interfonos de emergencia y auxilio en cada mezanina y andén colocados a 100 cm del piso con señal acústica y baliza estroboscópica azul para personas sordas.',
      brailleSignage: 'Planos hápticos táctiles en braille ubicados al ingreso de los accesos principales que describen la distribución de la estación.'
    },
    accesses: [
      {
        id: 'acc-sa-1',
        name: 'Acceso Norte (Calle Pichincha / Colombia)',
        streetReference: 'Calle 48 (Pichincha) con Carrera 51 (Bolívar)',
        operationalHours: '04:30 - 23:00 (Lunes a Sábado) / 05:00 - 22:00 (Dom y Fest)',
        standardTurnstilesEntry: 8,
        standardTurnstilesExit: 8,
        pmrTurnstilesEntry: 2,
        pmrTurnstilesExit: 2,
        totalTurnstiles: 20,
        mraMachines: {
          count: 5,
          type: 'Máquinas de Recarga Automática Cívica',
          paymentMethods: 'Efectivo (Billetes de $2k a $50k), Cívica Pay, Tarjetas Débito/Crédito y Código QR Nequi/Bancolombia',
          status: '5/5 Operativas'
        },
        civicaTicketBooth: {
          count: 3,
          type: 'Taquilla Blindada con Cajero Humano',
          services: 'Recarga Cívica Eventual/Personalizada, Venta de boletos de integración, Información y atención PMR'
        },
        civicaAppQRTotems: 4,
        emergencyGateWithPanicBar: '2 Puertas dobles de 1.80 m con barra antipánico y desbloqueo electromagnético automático por señal de incendio'
      },
      {
        id: 'acc-sa-2',
        name: 'Acceso Sur (Calle Maturín / Amador)',
        streetReference: 'Calle 46 (Maturín) con Carrera 51',
        operationalHours: '04:30 - 23:00',
        standardTurnstilesEntry: 6,
        standardTurnstilesExit: 6,
        pmrTurnstilesEntry: 1,
        pmrTurnstilesExit: 1,
        totalTurnstiles: 14,
        mraMachines: {
          count: 4,
          type: 'Máquinas de Recarga Automática Cívica',
          paymentMethods: 'Efectivo y Dinero Digital (QR / NFC)',
          status: '4/4 Operativas'
        },
        civicaTicketBooth: {
          count: 2,
          type: 'Taquilla con Cajero Humano',
          services: 'Recarga y desbloqueo de perfiles Cívica'
        },
        civicaAppQRTotems: 3,
        emergencyGateWithPanicBar: '1 Puerta doble de 1.80 m con barra antipánico'
      },
      {
        id: 'acc-sa-3',
        name: 'Acceso Oriental (Paseo Peatonal Carabobo)',
        streetReference: 'Carrera 52 (Carabobo) frente al Edificio Henry',
        operationalHours: '04:30 - 23:00',
        standardTurnstilesEntry: 6,
        standardTurnstilesExit: 6,
        pmrTurnstilesEntry: 2,
        pmrTurnstilesExit: 2,
        totalTurnstiles: 16,
        mraMachines: {
          count: 4,
          type: 'Máquinas de Recarga Automática Cívica',
          paymentMethods: 'Efectivo, Tarjeta Chip y QR Cívica',
          status: '4/4 Operativas'
        },
        civicaTicketBooth: {
          count: 2,
          type: 'Taquilla con Cajero Humano y Punto Cívica',
          services: 'Personalización de Tarjeta Cívica con foto, Tarifas Preferenciales (Estudiantes, Adulto Mayor, PMR)'
        },
        civicaAppQRTotems: 4,
        emergencyGateWithPanicBar: '2 Puertas de emergencia con salida rápida a plazoleta'
      },
      {
        id: 'acc-sa-4',
        name: 'Conexión Tranvía T-A (Plataforma a Nivel)',
        streetReference: 'Calle 49 (Ayacucho) con Carrera 50',
        operationalHours: '04:30 - 23:00',
        standardTurnstilesEntry: 4,
        standardTurnstilesExit: 4,
        pmrTurnstilesEntry: 1,
        pmrTurnstilesExit: 1,
        totalTurnstiles: 10,
        mraMachines: {
          count: 3,
          type: 'Tótem MRA Exterior Antivandálico',
          paymentMethods: 'Monedas, Billetes y Tarjetas Contactless',
          status: '3/3 Operativas'
        },
        civicaTicketBooth: {
          count: 1,
          type: 'Módulo de Información al Viajero',
          services: 'Guía turística y transbordos Tranvía'
        },
        civicaAppQRTotems: 2,
        emergencyGateWithPanicBar: 'Paso libre controlado por semaforización peatonal tranviaria'
      }
    ],
    emergencyInventory: [
      {
        id: 'inv-sa-1',
        code: 'EXT-ABC-01',
        name: 'Extintor Multipropósito ABC (20 lbs)',
        category: 'extintor',
        location: 'Mezanina Central - Columna M-4 junto a taquilla',
        exactPosition: 'Gabinete metálico con chapa plástica de fácil rotura a 1.20 m de altura',
        level: 'Mezanina',
        expiryDate: '2027-04-15',
        status: 'Operativo',
        specs: 'Polvo Químico Seco (Fosfato Monoamónico 90%). Presión 195 PSI en manómetro (Zona Verde).',
        lastInspected: '2026-09-10',
        verified: true
      },
      {
        id: 'inv-sa-2',
        code: 'EXT-CO2-02',
        name: 'Extintor CO2 Dióxido de Carbono (15 lbs)',
        category: 'extintor',
        location: 'Puesto de Mando Local (PML) - Pasillo Interior',
        exactPosition: 'Fijado al muro con soporte de pared y pasador precintado',
        level: 'Mezanina',
        expiryDate: '2027-02-28',
        status: 'Operativo',
        specs: 'Agente limpio no conductor de electricidad para tableros electrónicos y servidores.',
        lastInspected: '2026-09-12',
        verified: true
      },
      {
        id: 'inv-sa-3',
        code: 'EXT-SOL-03',
        name: 'Extintor Solkaflam 123 Halotron (3700 g)',
        category: 'extintor',
        location: 'Cuarto de Telecomunicaciones y Enclavamiento',
        exactPosition: 'Entrada del cuarto junto a rack principal',
        level: 'Mezanina',
        expiryDate: '2027-05-30',
        status: 'Operativo',
        specs: 'Agente gas limpio sin residuos para equipos de telecomunicación sensible.',
        lastInspected: '2026-08-20',
        verified: true
      },
      {
        id: 'inv-sa-4',
        code: 'DEA-01',
        name: 'Desfibrilador Externo Automático (DEA)',
        category: 'dea',
        location: 'Mezanina Central - Frente a Línea de Torniquetes Norte',
        exactPosition: 'Gabinete con alarma sonora local al abrir la puerta y luz estroboscópica roja',
        level: 'Mezanina',
        expiryDate: '2027-11-20',
        status: 'Operativo',
        specs: 'Marca ZOLL AED Plus con retroalimentación de RCP en tiempo real y parches para adulto y pediátrico. Baterías al 98%.',
        lastInspected: '2026-10-01',
        verified: true
      },
      {
        id: 'inv-sa-5',
        code: 'BOT-B-01',
        name: 'Botiquín de Primeros Auxilios Tipo B',
        category: 'botiquin',
        location: 'Puesto de Mando Local (PML)',
        exactPosition: 'Maletín de lona impermeable de asalto rápido con velcro reflectivo',
        level: 'Mezanina',
        expiryDate: '2027-08-15',
        status: 'Operativo',
        specs: 'Cumple Norma Distrital/Nacional: Apósitos estériles, vendas elásticas, suero fisiológico, férulas inflables, cánulas de Guedel, tensiómetro, oxímetro.',
        lastInspected: '2026-09-25',
        verified: false
      },
      {
        id: 'inv-sa-6',
        code: 'CAM-MIL-01',
        name: 'Camilla Espinal Rígida Plástica Tipo Miller',
        category: 'camilla',
        location: 'Andén 1 (Sentido Niquía - Sur a Norte)',
        exactPosition: 'Soporte vertical acrílico transparente junto al poste de megafonía No. 6',
        level: 'Andenes Línea A',
        expiryDate: 'N/A (Inspección Visual Anual)',
        status: 'Operativo',
        specs: 'Polietileno de alta densidad sin partes metálicas (traslúcida a rayos X), arnés de araña de 10 puntos y sujetador de cráneo inmovilizador cervical.',
        lastInspected: '2026-07-15',
        verified: true
      },
      {
        id: 'inv-sa-7',
        code: 'CAM-MIL-02',
        name: 'Camilla Espinal Rígida con Inmovilizadores',
        category: 'camilla',
        location: 'Andén 2 (Sentido La Estrella - Norte a Sur)',
        exactPosition: 'Cabecera sur de andén junto a escalera de emergencia',
        level: 'Andenes Línea A',
        expiryDate: 'N/A',
        status: 'Operativo',
        specs: 'Capacidad de carga 180 kg con flotabilidad en agua y correas de fijación rápida con hebilla plástica.',
        lastInspected: '2026-07-15',
        verified: false
      },
      {
        id: 'inv-sa-8',
        code: 'GAB-INC-01',
        name: 'Gabinete de Manguera Contra Incendio Clase II',
        category: 'gabinete',
        location: 'Andén Central Línea B',
        exactPosition: 'Incrustado en muro cabecera occidente, rotulado en rojo fotoluminiscente',
        level: 'Andén Línea B',
        expiryDate: '2027-06-10',
        status: 'Operativo',
        specs: 'Manguera de 30 metros de 1.5 pulgadas de fibra poliéster con boquilla reguladora de chorro y niebla, válvula de compuerta y hacha pico de bombero dieléctrica.',
        lastInspected: '2026-09-02',
        verified: true
      },
      {
        id: 'inv-sa-9',
        code: 'LUC-EMG-04',
        name: 'Banco de Luces de Emergencia LED Doble Foco',
        category: 'luces',
        location: 'Túnel de Conexión Andén Línea A y Línea B',
        exactPosition: 'Montado a 2.80 m de altura con baliza orientada hacia escaleras',
        level: 'Mezanina Intermedia',
        expiryDate: '2027-03-12',
        status: 'Operativo',
        specs: 'Autonomía de 120 minutos con batería de níquel-cadmio y encendido instantáneo en corte de energía de catenaria.',
        lastInspected: '2026-08-30',
        verified: true
      },
      {
        id: 'inv-sa-10',
        code: 'MEG-EVAC-01',
        name: 'Megáfono Portátil de Evacuación con Sirena',
        category: 'megafono',
        location: 'Puesto de Mando Local (PML)',
        exactPosition: 'Estante de contingencia junto a linternas tácticas',
        level: 'Mezanina',
        expiryDate: 'Baterías Nuevas',
        status: 'Operativo',
        specs: 'Potencia 25 Watts con alcance acústico de 500 metros, modo sirena de alarma y batería recargable de litio.',
        lastInspected: '2026-10-05',
        verified: true
      }
    ]
  },
  {
    id: 'parque-berrio',
    name: 'Parque Berrío (BER)',
    line: 'Línea A',
    badgeColor: 'bg-emerald-600 text-white',
    accentColor: '#059669',
    lineBadge: 'LÍNEA A // CÓDIGO BER',
    type: 'Estación en Viaducto • Terminal Temporal Intermedia (DR0292)',
    heroTagline: '¡Libreta Oficial DR0292 Versión 4: Gestión de Servicio, Emergencias y Evacuación!',
    heroSpeech: '¡Bienvenido a la estación Parque Berrío (BER)! Toda la información locativa, inventario de emergencia, accesos, cuartos técnicos y puntos de encuentro está sincronizada al 100% con la Libreta de Estación oficial DR0292 de Metro de Medellín.',
    locativeFeatures: {
      structureType: 'Viaducto Elevado de Hormigón Armado • Sin Tablero de Mando Central (Telemandada desde PCC)',
      levels: '2 Niveles Férreos: Mezanines Suspendidos (Norte-Norte, Norte-Centro, Sur-Centro, Sur-Sur) y Plataformas Laterales A y B (Nivel +2)',
      platformsType: 'Plataformas Laterales de 142 m: Plataforma A (Ascendente / Sentido Sur) y Plataforma B (Descendente / Sentido Norte)',
      ventilation: '100% Ventilación Natural de diseño abierto con celosías metálicas cortaviento',
      capacity: 'Terminal Temporal Intermedia con alta afluencia comercial • Conexión con 2 plazoletas externas y 32 locales comerciales',
      fireSuppression: 'Red Seca para bomberos con 4 hidrantes exteriores + Extintores ABC en cada mezanine y CO2 en cuartos técnicos',
      emergencyExitsCount: 4,
      flooring: 'Piso de baldosa granítica prensada antideslizante con remates de caucho y 42 pasamanos metálicos reglamentarios',
      officialCode: 'DR0292 - Versión 4',
      geographicLocation: 'BER Norte: Carrera 52 No. 50-26 | BER Sur: Carrera 52 No. 50-70 • Barrio La Candelaria, Comuna 10, Medellín',
      urbanFurniture: '32 Locales comerciales, 16 Teléfonos públicos, 3 Baños públicos, 2 Elípticas de información, 2 Tótems, 6 Vitrinas comerciales, 1 Vitrina MAM y 6 Apoyos isquiáticos (3 en Plataforma A, 3 en Plataforma B)'
    },
    meetingPoints: [
      {
        id: 'mp-pb-1',
        name: 'Punto de Encuentro 1 (P.E1) - Plazoleta Suroccidental',
        locationDescription: 'Plazoleta exterior costado suroccidental sobre el Parque de Berrío frente a Calle Colombia.',
        safeCapacity: '3.500 personas',
        evacuationRoute: 'Descenso guiado por escaleras sur-centro y sur-sur hacia plazoleta abierta del Parque.',
        estimatedTime: '2 minutos',
        icon: 'ShieldCheck',
        status: 'Punto de Encuentro Principal (Personal & Usuarios)'
      },
      {
        id: 'mp-pb-2',
        name: 'Punto de Encuentro 2 (P.E2) - Plazoleta Noroccidental',
        locationDescription: 'Plazoleta exterior costado noroccidental sobre la Plazuela Nutibara (Palacio de la Cultura).',
        safeCapacity: '3.000 personas',
        evacuationRoute: 'Descenso por escaleras norte-norte y norte-centro hacia la Plazuela Nutibara.',
        estimatedTime: '2.5 minutos',
        icon: 'MapPin',
        status: 'Punto de Encuentro Secundario / Alterno'
      },
      {
        id: 'mp-pb-3',
        name: 'Área de Concentración de Víctimas (ACV)',
        locationDescription: 'Plazoleta suroriental hacia el Parque Berrío.',
        safeCapacity: 'Área de Triage y Primeros Auxilios',
        evacuationRoute: 'Punto asignado para clasificar personas lesionadas y coordinar ambulancias hacia centros asistenciales según gravedad.',
        estimatedTime: 'Inmediato tras evacuación',
        icon: 'AlertCircle',
        status: 'Zona Sanitaria y Triage ACV Oficial'
      },
      {
        id: 'mp-pb-4',
        name: 'Puesto de Comando (PC Alterno) - Murales Pedro Nel Gómez',
        locationDescription: 'Pasaje peatonal nororiental donde se ubican los murales del Maestro Pedro Nel Gómez.',
        safeCapacity: 'Comité de Emergencias (OES, Policía, Socorristas)',
        evacuationRoute: 'Ubicación exterior del Puesto de Mando si no es posible operar dentro de la estación.',
        estimatedTime: 'Punto de Mando Estratégico',
        icon: 'Shield',
        status: 'Puesto de Comando Exterior PC'
      }
    ],
    technicalRooms: [
      {
        id: 'tr-pb-1',
        name: 'Oficina del Operador de Estación (OES)',
        code: 'OES-PB-01',
        level: 'Cuartos Técnicos Lado Norte',
        exactLocation: 'Pasillo de cuartos técnicos costado norte, contiguo a Cuarto de Primeros Auxilios',
        accessLevel: 'Operador de Estación (OES) y Auxiliar OES',
        description: 'Centro de coordinación de contingencias y servicio de la estación. Custodia 2 megáfonos de evacuación y 1 linterna de mano para emergencias.',
        safetyEquipment: 'Megáfonos OES (2), Linterna de mano halógena, radiobase de comunicaciones grupo Trenes Línea A Sur.'
      },
      {
        id: 'tr-pb-2',
        name: 'Cuarto de Primeros Auxilios (Zona Cardioprotegida)',
        code: 'ENF-PB-01',
        level: 'Cuartos Técnicos Lado Norte',
        exactLocation: 'Puerta identificada con cruz verde en cuartos técnicos lado norte',
        accessLevel: 'Personal APH y Brigadistas de Emergencia',
        description: 'Área de atención médica equipada con 1 Camilla Miller plástica amarilla, 1 Desfibrilador Externo Automático (DEA), 2 Sillas de ruedas, 3 Cascos de protección y 2 Linternas tipo minero.',
        safetyEquipment: '1 DEA ZOLL/Mindray, 1 Camilla Miller, 2 Sillas de ruedas, 3 Cascos de seguridad, 2 Linternas manos libres.'
      },
      {
        id: 'tr-pb-3',
        name: 'Cuarto de Energía / Tablero de Iluminación y Fuerza',
        code: 'TAB-LUC-PB',
        level: 'Cuartos Técnicos Lado Norte',
        exactLocation: 'Módulo técnico eléctrico con puertas metálicas de protección',
        accessLevel: 'Exclusivo - Técnicos de Mantenimiento Eléctrico',
        description: 'Aloja interruptores termomagnéticos, tableros de iluminación normal y de emergencia, fuerza de escaleras electromecánicas y subestación.',
        safetyEquipment: '1 Extintor CO2 de dióxido de carbono y 1 Extintor tipo ABC.'
      },
      {
        id: 'tr-pb-4',
        name: 'Cuarto de Fibra Óptica y Telemática',
        code: 'TEL-FIB-PB',
        level: 'Cuartos Técnicos Lado Norte',
        exactLocation: 'Contiguo a Cuarto de Seguridad en cuartos técnicos',
        accessLevel: 'Personal de Telecomunicaciones e Infraestructura TI',
        description: 'Racks de telecomunicaciones, conmutadores de fibra óptica de la red Metro, telefonía operativa y enlace con PCO.',
        safetyEquipment: '1 Extintor tipo ABC de polvo químico seco, detector iónico de humo.'
      },
      {
        id: 'tr-pb-5',
        name: 'Cuarto de Seguridad y Vigilancia',
        code: 'SEG-PB-01',
        level: 'Cuartos Técnicos Lado Norte',
        exactLocation: 'Frente al Cuarto de Personal y Baños de servicio',
        accessLevel: 'Profesional de Policía y Vigilancia Privada (PVP / ABP)',
        description: 'Base de operaciones de los 2 Profesionales de Policía, 3 Guardas de Seguridad Privada y Auxiliares Bachilleres.',
        safetyEquipment: 'Panel de circuito cerrado de televisión (CCTV) y botiquín de apoyo.'
      },
      {
        id: 'tr-pb-6',
        name: 'Cuarto de Aseo y Personal',
        code: 'ASO-PB-01',
        level: 'Cuartos Técnicos Lado Norte',
        exactLocation: 'Pasillo de servicios junto a Baños de Hombres y Baño de Damas',
        accessLevel: 'Personal de Aseo y Servicios Generales',
        description: 'Almacenamiento de insumos de aseo y desinfección, carros de limpieza y vestier de personal.',
        safetyEquipment: '1 Extintor multipropósito ABC y kit de bioseguridad.'
      },
      {
        id: 'tr-pb-7',
        name: 'Subestación de Pasajeros',
        code: 'SUB-PAS-PB',
        level: 'Parte Externa de la Estación',
        exactLocation: 'Estructura externa aislada bajo viaducto con reja de seguridad',
        accessLevel: 'Personal Eléctrico Alta Tensión',
        description: 'Alimentación eléctrica principal de media a baja tensión para los servicios de estación y pasajeros.',
        safetyEquipment: 'Pértiga dieléctrica y extintor CO2.'
      },
      {
        id: 'tr-pb-8',
        name: 'Oficinas Cívica (2)',
        code: 'CIV-PB-01/02',
        level: 'Mezanines Zona Paga',
        exactLocation: 'Oficina 1 en Mezanine Sur-Sur (Zona Paga) • Oficina 2 en Mezanine Norte-Norte (Zona Paga)',
        accessLevel: 'Personal de Servicio al Cliente Cívica',
        description: 'Oficinas especializadas para gestión, reposición y personalización de Tarjetas Cívica para los usuarios.',
        safetyEquipment: 'Pulsador de pánico y extintor ABC de zona.'
      },
      {
        id: 'tr-pb-9',
        name: 'Bodegas de Escaleras (4)',
        code: 'BOD-ESC-01..04',
        level: 'Bajo Escaleras de Acceso',
        exactLocation: '1 bajo escalas ascendentes norte-centro, 1 bajo descendentes norte-centro, 1 bajo ascendentes sur-centro, 1 bajo descendentes sur-centro',
        accessLevel: 'Operador de Estación y Mantenimiento',
        description: 'Espacios de almacenamiento para vallas, 12 rompetráficos, 20 carteles de VUT y materiales operativos.',
        safetyEquipment: 'Puertas metálicas con candado de seguridad.'
      }
    ],
    accessibility: {
      elevatorsCount: 1,
      elevatorsDetails: '1 Elevador electromecánico ubicado en el Acceso Norte que comunica nivel calle con el mezanine norte.',
      podotactileCoverage: '100% de la estación con huellas podotáctiles en relieve: franjas direccionales en mezanines y baldosas de peligro con botones antes de escaleras fijas y a 60 cm del borde de plataforma.',
      tactileStrips: 'Franja táctil de seguridad en bordes de Plataforma A y Plataforma B.',
      wheelchairRamps: 'Rampas de acceso suave en plazoletas exteriores con conexión a bolardos peatonales.',
      accessibleGatesCount: 4,
      accessibleGatesDetails: '4 Puertas batientes de acceso PMR y evacuación con señalización reglamentaria.',
      audioAssistance: 'Interfonos de emergencia en andenes y mezanines colocados a altura accesible.',
      brailleSignage: '34 Señalizaciones para ubicación en el sistema y 13 avisos de seguridad de evacuación y puertas batientes.',
      platformsPmrCount: 2,
      platformsPmrDetails: '2 Plataformas PMR salvaescaleras mecánicas: Una en Mezanine Norte-Centro hacia Plataforma B (descendente) y una en Mezanine Norte-Centro hacia Plataforma A (ascendente).',
      escalatorsCount: 3,
      escalatorsDetails: '3 Escaleras electromecánicas: 1 de la calle al patio norte, y 2 del mezanine norte-norte hacia plataformas A y B.',
      ischiaticSupports: '6 Apoyos isquiáticos para descanso de pasajeros: 3 en Plataforma A y 3 en Plataforma B.'
    },
    accesses: [
      {
        id: 'acc-pb-nn',
        name: 'Acceso Norte-Norte (Carrera Bolívar / Patio Norte)',
        streetReference: 'Carrera 52 No. 50-26 (Costado Bolívar Norte)',
        operationalHours: '04:30 - 23:00 (Lunes a Sábado) / 05:00 - 22:00 (Dom y Fest)',
        standardTurnstilesEntry: 2,
        standardTurnstilesExit: 2,
        pmrTurnstilesEntry: 1,
        pmrTurnstilesExit: 1,
        totalTurnstiles: 4,
        mraMachines: {
          count: 0,
          type: 'No dispone de MRA directa (disponible en Norte-Centro)',
          paymentMethods: 'Punto de venta presencial y recarga digital',
          status: 'Servicio en Punto de Venta'
        },
        civicaTicketBooth: {
          count: 1,
          type: 'Punto de Venta Norte-Norte (Taquilla con Cajero)',
          services: 'Venta y recarga Cívica, tiquetes integrados'
        },
        civicaAppQRTotems: 1,
        emergencyGateWithPanicBar: '1 Puerta batiente de emergencia reglamentaria',
        specialFeatures: 'Oficina Cívica en Mezanine Norte-Norte (Zona Paga), 1 Elevador acceso norte, 2 Escaleras electromecánicas hacia plataformas A y B, 1 Máquina lectora Cívica, 1 Teléfono público zona paga y 1 zona no paga, 1 Pantalla CIC en mezanine y 1 en patio norte.'
      },
      {
        id: 'acc-pb-nc',
        name: 'Acceso Norte-Centro (Plazuela Nutibara)',
        streetReference: 'Carrera 52 entre Calles 51 y 52 (Frente al Palacio de la Cultura)',
        operationalHours: '04:30 - 23:00',
        standardTurnstilesEntry: 2,
        standardTurnstilesExit: 2,
        pmrTurnstilesEntry: 1,
        pmrTurnstilesExit: 1,
        totalTurnstiles: 4,
        mraMachines: {
          count: 1,
          type: 'Máquina de Recarga Automática Cívica (MRA Oficial)',
          paymentMethods: 'Efectivo (Billetes de $2k a $50k), Tarjetas Débito/Crédito y Código QR',
          status: '1/1 Operativa en Zona No Paga'
        },
        civicaTicketBooth: {
          count: 1,
          type: 'Punto de Venta Norte-Centro (Taquilla con Cajero)',
          services: 'Recargas y venta de tiquetes'
        },
        civicaAppQRTotems: 1,
        emergencyGateWithPanicBar: '1 Puerta batiente de emergencia reglamentaria',
        specialFeatures: 'Sede de la única Máquina MRA de la estación (en zona no paga), 2 Plataformas PMR salvaescaleras hacia plataformas A y B, 6 Vitrinas comerciales, 1 Vitrina exposiciones del MAM en bajos, 1 Cartelera Infometro, 1 Máquina lectora Cívica, 2 Teléfonos zona paga y 1 zona no paga.'
      },
      {
        id: 'acc-pb-sc',
        name: 'Acceso Sur-Centro (Parque Berrío Central)',
        streetReference: 'Carrera 52 entre Calles 50 y 51 (Costado Central Parque Berrío)',
        operationalHours: '04:30 - 23:00',
        standardTurnstilesEntry: 4,
        standardTurnstilesExit: 2,
        pmrTurnstilesEntry: 1,
        pmrTurnstilesExit: 1,
        totalTurnstiles: 6,
        mraMachines: {
          count: 0,
          type: 'Atención por Taquilla y Lectura Cívica',
          paymentMethods: 'Efectivo y Cívica Pay',
          status: 'Servicio en Punto de Venta'
        },
        civicaTicketBooth: {
          count: 1,
          type: 'Punto de Venta Sur-Centro (4 Torniquetes de entrada para alto flujo)',
          services: 'Venta masiva y orientación al viajero'
        },
        civicaAppQRTotems: 1,
        emergencyGateWithPanicBar: '1 Puerta batiente de emergencia con barra antipánico',
        specialFeatures: 'Acceso con mayor capacidad de entrada (4 torniquetes de entrada), 1 Cartelera Infometro, 3 Astas en patio sur centro, 1 Máquina lectora Cívica, 1 Teléfono zona paga y 1 no paga, 1 Pantalla CIC en mezanine.'
      },
      {
        id: 'acc-pb-ss',
        name: 'Acceso Sur-Sur (Calle Colombia)',
        streetReference: 'Carrera 52 No. 50-70 (Esquina Calle 50 Colombia)',
        operationalHours: '04:30 - 23:00',
        standardTurnstilesEntry: 3,
        standardTurnstilesExit: 3,
        pmrTurnstilesEntry: 1,
        pmrTurnstilesExit: 1,
        totalTurnstiles: 6,
        mraMachines: {
          count: 0,
          type: 'Atención por Taquilla y Lectura Cívica',
          paymentMethods: 'Efectivo y Tarjetas',
          status: 'Servicio en Punto de Venta'
        },
        civicaTicketBooth: {
          count: 1,
          type: 'Punto de Venta Sur-Sur (Taquilla con Cajero)',
          services: 'Recargas y soporte Cívica'
        },
        civicaAppQRTotems: 1,
        emergencyGateWithPanicBar: '1 Puerta batiente de evacuación hacia Calle Colombia',
        specialFeatures: 'Oficina Cívica en Mezanine Sur-Sur (Zona Paga), Bahía sur-sur Calle Colombia, 1 Máquina lectora Cívica, 2 Teléfonos zona paga y 1 no paga, 1 Pantalla CIC en mezanine y 1 en patios sur, 14 tapas de contadores en bajos de la estación.'
      }
    ],
    emergencyInventory: [
      {
        id: 'inv-pb-cam-a',
        code: 'CAM-MIL-01',
        name: 'Camilla Miller (Plástica Amarilla) - Plataforma A',
        category: 'camilla',
        location: 'Plataforma A (Sentido Sur / Ascendente)',
        exactPosition: 'Fijada en soporte vertical en andén de trenes con arnés de seguridad',
        level: 'Plataforma A',
        expiryDate: 'Inspección Anual Vigente',
        status: 'Operativo',
        specs: 'Camilla espinal rígida de polietileno de alta densidad color amarillo de alta visibilidad, con correas tipo araña y sujetador cervical.',
        lastInspected: '2026-09-15',
        verified: true
      },
      {
        id: 'inv-pb-cam-b',
        code: 'CAM-MIL-02',
        name: 'Camilla Miller (Plástica Amarilla) - Plataforma B',
        category: 'camilla',
        location: 'Plataforma B (Sentido Norte / Descendente)',
        exactPosition: 'Soporte mural en andén de trenes de fácil acceso para brigadistas',
        level: 'Plataforma B',
        expiryDate: 'Inspección Anual Vigente',
        status: 'Operativo',
        specs: 'Camilla Miller oficial Metro de polietileno lavable y traslúcida a rayos X, capacidad de carga 180 kg.',
        lastInspected: '2026-09-15',
        verified: true
      },
      {
        id: 'inv-pb-cam-enf',
        code: 'CAM-MIL-03',
        name: 'Camilla Miller (Plástica Amarilla) - Primeros Auxilios',
        category: 'camilla',
        location: 'Cuarto de Primeros Auxilios',
        exactPosition: 'Ubicada en cuartos técnicos lado norte en estante de trauma',
        level: 'Cuartos Técnicos',
        expiryDate: 'Inspección Anual Vigente',
        status: 'Operativo',
        specs: 'Camilla Miller completa con inmovilizadores laterales de cabeza y kit de fijación para traslado de heridos.',
        lastInspected: '2026-09-15',
        verified: true
      },
      {
        id: 'inv-pb-dea',
        code: 'DEA-PB-01',
        name: 'Desfibrilador Externo Automático (DEA)',
        category: 'dea',
        location: 'Cuarto de Primeros Auxilios',
        exactPosition: 'Zona Cardioprotegida en cuartos técnicos lado norte con baliza visual y señalética',
        level: 'Cuartos Técnicos',
        expiryDate: '2027-10-30',
        status: 'Operativo',
        specs: 'Equipo desfibrilador bifásico automático con comandos de voz en español, autotesteo funcional diario y parches adultos y pediátricos.',
        lastInspected: '2026-10-05',
        verified: true
      },
      {
        id: 'inv-pb-sr-1',
        code: 'SDR-PB-01',
        name: 'Sillas de Ruedas de Evacuación (2 Unidades)',
        category: 'botiquin',
        location: 'Cuarto de Primeros Auxilios',
        exactPosition: 'Plegadas en el acceso del Cuarto de Primeros Auxilios para despliegue rápido',
        level: 'Cuartos Técnicos',
        expiryDate: 'Operativas 100%',
        status: 'Operativo',
        specs: '2 Sillas de ruedas clínicas con frenos de mano y apoyapiés desmontables para transporte de usuarios con descompensación o PMR.',
        lastInspected: '2026-09-20',
        verified: true
      },
      {
        id: 'inv-pb-cascos',
        code: 'CAS-EMG-01',
        name: 'Cascos de Seguridad para Emergencia (3 Unidades)',
        category: 'botiquin',
        location: 'Cuarto de Primeros Auxilios',
        exactPosition: 'Estante de elementos de protección personal (EPP) en primeros auxilios',
        level: 'Cuartos Técnicos',
        expiryDate: 'Norma ANSI Z89.1',
        status: 'Operativo',
        specs: '3 Cascos dieléctricos Tipo I Clase E de alta visibilidad para brigadistas y personal de rescate en evacuación.',
        lastInspected: '2026-09-10',
        verified: true
      },
      {
        id: 'inv-pb-meg',
        code: 'MEG-OES-01',
        name: 'Megáfonos Portátiles de Evacuación (2 Unidades)',
        category: 'megafono',
        location: 'Oficina del Operador de Estación (OES)',
        exactPosition: 'Gabinete de contingencias junto al escritorio del Operador de Estación',
        level: 'Cuartos Técnicos',
        expiryDate: 'Baterías Nuevas de Litio',
        status: 'Operativo',
        specs: '2 Megáfonos portátiles con sirena integrada y control de volumen para impartir instrucciones de evacuación a los usuarios.',
        lastInspected: '2026-10-02',
        verified: true
      },
      {
        id: 'inv-pb-lin-min',
        code: 'LIN-MIN-01',
        name: 'Linternas Manos Libres Tipo Minero (2 Unidades)',
        category: 'luces',
        location: 'Cuarto de Primeros Auxilios',
        exactPosition: 'Estuche de iluminación táctica en primeros auxilios',
        level: 'Cuartos Técnicos',
        expiryDate: 'LED Recargable',
        status: 'Operativo',
        specs: '2 Linternas frontales elásticas de alta potencia para búsqueda y atención de heridos en condiciones de baja iluminación.',
        lastInspected: '2026-09-25',
        verified: true
      },
      {
        id: 'inv-pb-lin-man',
        code: 'LIN-MAN-01',
        name: 'Linterna de Mano de Alta Potencia',
        category: 'luces',
        location: 'Oficina del Operador de Estación (OES)',
        exactPosition: 'Soporte mural con cargador permanente en la oficina OES',
        level: 'Cuartos Técnicos',
        expiryDate: 'LED 1000 Lumens',
        status: 'Operativo',
        specs: '1 Linterna táctica industrial con haz concentrado y autonomía de 8 horas para inspección de vías y viaducto.',
        lastInspected: '2026-10-01',
        verified: true
      },
      {
        id: 'inv-pb-ext-nn',
        code: 'EXT-ABC-NN',
        name: 'Extintor Tipo ABC (20 lbs) - Mezanine Norte-Norte',
        category: 'extintor',
        location: 'Mezanine Norte-Norte (Zona No Paga)',
        exactPosition: 'Soporte mural metálico a 1.25 m en zona de libre circulación',
        level: 'Mezanine Norte-Norte',
        expiryDate: '2027-05-20',
        status: 'Operativo',
        specs: 'Polvo Químico Seco (Fosfato Monoamónico 90%). Presión nominal en franja verde del manómetro.',
        lastInspected: '2026-09-18',
        verified: true
      },
      {
        id: 'inv-pb-ext-nc',
        code: 'EXT-ABC-NC',
        name: 'Extintor Tipo ABC (20 lbs) - Mezanine Norte-Centro',
        category: 'extintor',
        location: 'Mezanine Norte-Centro (Zona Paga)',
        exactPosition: 'Junto a línea de torniquetes y acceso a plataformas PMR',
        level: 'Mezanine Norte-Centro',
        expiryDate: '2027-04-15',
        status: 'Operativo',
        specs: 'Polvo químico multipropósito para fuegos clases A (sólidos), B (combustibles) y C (eléctricos).',
        lastInspected: '2026-09-18',
        verified: true
      },
      {
        id: 'inv-pb-ext-sc',
        code: 'EXT-ABC-SC',
        name: 'Extintor Tipo ABC (20 lbs) - Mezanine Sur-Centro',
        category: 'extintor',
        location: 'Mezanine Sur-Centro (Zona Paga)',
        exactPosition: 'Columna central junto a los 4 torniquetes de entrada',
        level: 'Mezanine Sur-Centro',
        expiryDate: '2027-06-10',
        status: 'Operativo',
        specs: 'Extintor presurizado con pasador de seguridad y sello plástico intacto.',
        lastInspected: '2026-09-18',
        verified: true
      },
      {
        id: 'inv-pb-ext-ss',
        code: 'EXT-ABC-SS',
        name: 'Extintor Tipo ABC (20 lbs) - Mezanine Sur-Sur',
        category: 'extintor',
        location: 'Mezanine Sur-Sur (Zona No Paga)',
        exactPosition: 'Próximo a Punto de Venta Sur-Sur y salida a Calle Colombia',
        level: 'Mezanine Sur-Sur',
        expiryDate: '2027-03-30',
        status: 'Operativo',
        specs: 'Capacidad 20 libras, agente extintor con certificación de calidad UL.',
        lastInspected: '2026-09-18',
        verified: true
      },
      {
        id: 'inv-pb-ext-tc1',
        code: 'EXT-ABC-CT1',
        name: 'Extintor Tipo ABC (20 lbs) - Cuartos Técnicos #1',
        category: 'extintor',
        location: 'Cuartos Técnicos Lado Norte',
        exactPosition: 'Pasillo principal de cuartos técnicos entre Oficina OES y Primeros Auxilios',
        level: 'Cuartos Técnicos',
        expiryDate: '2027-07-15',
        status: 'Operativo',
        specs: 'Extintor multipropósito ABC para protección de áreas técnicas y pasillos de servicio.',
        lastInspected: '2026-09-12',
        verified: true
      },
      {
        id: 'inv-pb-ext-tc2',
        code: 'EXT-ABC-CT2',
        name: 'Extintor Tipo ABC (20 lbs) - Cuartos Técnicos #2',
        category: 'extintor',
        location: 'Cuartos Técnicos Lado Norte',
        exactPosition: 'Junto a Cuarto de Aseo y Telemática',
        level: 'Cuartos Técnicos',
        expiryDate: '2027-07-15',
        status: 'Operativo',
        specs: 'Polvo químico fosfato monoamónico para protección de cuartos de servicio.',
        lastInspected: '2026-09-12',
        verified: true
      },
      {
        id: 'inv-pb-ext-co2',
        code: 'EXT-CO2-CT',
        name: 'Extintor Tipo CO2 (15 lbs) - Cuartos Técnicos',
        category: 'extintor',
        location: 'Cuartos Técnicos Lado Norte (Cuarto de Energía)',
        exactPosition: 'Dentro del Cuarto de Luces / Tablero de Iluminación y Fuerza',
        level: 'Cuartos Técnicos',
        expiryDate: '2027-02-28',
        status: 'Operativo',
        specs: 'Dióxido de Carbono (CO2) puro no conductor de electricidad, especial para tableros eléctricos energizados sin dejar residuos corrosivos.',
        lastInspected: '2026-09-12',
        verified: true
      },
      {
        id: 'inv-pb-bpe',
        code: 'BPE-AND-01..08',
        name: 'Botones de Parada de Emergencia en Andenes (8 Unidades)',
        category: 'gabinete',
        location: 'Plataformas A y B',
        exactPosition: '4 botones en Plataforma Ascendente y 4 botones en Plataforma Descendente distribuidos a lo largo del andén',
        level: 'Plataformas A y B',
        expiryDate: 'Mantenimiento Electrónico Semanal',
        status: 'Operativo',
        specs: '8 Botones tipo hongo con enclavamiento que cortan tracción y accionan freno de emergencia del tren ante caída de personas a la vía férrea.',
        lastInspected: '2026-10-04',
        verified: true
      }
    ]
  },
  {
    id: 'poblado',
    name: 'Poblado',
    line: 'Línea A',
    badgeColor: 'bg-yellow-500 text-black',
    accentColor: '#D97706',
    lineBadge: 'LÍNEA A (SUR)',
    type: 'Estación Elevada Modernizada con Pasarelas Peatonales Extendidas',
    heroTagline: '¡Conectando el vibrante polo financiero, hotelero y gastronómico del sur!',
    heroSpeech: '¡Bienvenido a Poblado! Esta estación fue renovada integralmente con una pasarela peatonal ampliada hacia el oriente (Calle 10) y hacia el occidente (Monterrey). Su diseño contemporáneo cuenta con los más estrictos estándares de accesibilidad universal.',
    locativeFeatures: {
      structureType: 'Viaducto Elevado con Cubierta Arquitectónica Metálica Traslúcida y Puentes Peatonales Tipo Celosía',
      levels: '3 Niveles: Nivel Calle / Pasarelas de Conexión Urbana (Nivel 1), Mezanina de Taquillas (Nivel 2) y Andenes de Vía (Nivel 3)',
      platformsType: 'Andenes Laterales Ampliados con barreras de contención de flujo de 142 m',
      ventilation: 'Flujo aerodinámico natural por cubierta elevada de doble curvatura',
      capacity: 'Aforo dinámico de hasta 48.000 pasajeros por hora',
      fireSuppression: 'Sistema de hidrantes en pasarelas exteriores y red de rociadores en zonas de boletería',
      emergencyExitsCount: 6,
      flooring: 'Piso técnico antideslizante con acabado de terrazo pulido'
    },
    meetingPoints: [
      {
        id: 'mp-po-1',
        name: 'Plazoleta Pasarela Oriental (Costado Calle 10)',
        locationDescription: 'Desembarque del puente peatonal oriental sobre la Calle 10, zona peatonal despejada.',
        safeCapacity: '3.000 personas',
        evacuationRoute: 'Evacuación continua a través de la pasarela metálica ancha de 4 metros hacia la plazoleta.',
        estimatedTime: '3 minutos',
        icon: 'ShieldCheck',
        status: 'Espacio Seguro Exterior'
      },
      {
        id: 'mp-po-2',
        name: 'Costado Occidental (Avenida Las Vegas / Centro Comercial)',
        locationDescription: 'Zona verde exterior contigua a la ciclorruta y paradero de buses integrados de Las Vegas.',
        safeCapacity: '2.500 personas',
        evacuationRoute: 'Descenso directo por rampas exteriores sin paso por torniquetes.',
        estimatedTime: '2 minutos',
        icon: 'MapPin',
        status: 'Ruta Iluminada y Señalizada'
      }
    ],
    technicalRooms: [
      {
        id: 'tr-po-1',
        name: 'Puesto de Mando Local (PML Poblado)',
        code: 'PML-PO-01',
        level: 'Nivel Mezanina 2',
        exactLocation: 'Ubicación estratégica con vista directa a los dos puentes de acceso peatonal',
        accessLevel: 'Restringido - Personal Metro',
        description: 'Monitoreo de flujo de pasajeros con cámaras térmicas y control centralizado de los ascensores de pasarelas.',
        safetyEquipment: 'Extintor Solkaflam 123, Radio portátil TETRA, Botiquín de trauma.'
      },
      {
        id: 'tr-po-2',
        name: 'Subestación Eléctrica Auxiliar',
        code: 'SEA-PO-03',
        level: 'Nivel Calle Occidental',
        exactLocation: 'Estructura aislada con enmallado de seguridad y puertas cortafuego RF-90',
        accessLevel: 'Personal Eléctrico Calificado',
        description: 'Alimentación de servicios auxiliares de la estación: ascensores, iluminación de pasarelas, bombas de agua y sistemas de cómputo.',
        safetyEquipment: 'Extintor CO2 20 lbs con ruedas, pértiga salvavidas dieléctrica 45 kV, alfombra aislante.'
      },
      {
        id: 'tr-po-3',
        name: 'Enfermería y Atención de Emergencias PMR',
        code: 'ENF-PO-01',
        level: 'Nivel Mezanina Pasarela Oriental',
        exactLocation: 'Junto al ascensor principal de Calle 10',
        accessLevel: 'Personal Médico / Paramédico APH',
        description: 'Sala de primeros auxilios con camilla hospitalaria, kit de inmovilización espinal y punto de reanimación cardiopulmonar.',
        safetyEquipment: 'Desfibrilador DEA automático, cilindro de oxígeno con manómetro de precisión, botiquín B.'
      }
    ],
    accessibility: {
      elevatorsCount: 6,
      elevatorsDetails: '6 Ascensores de última generación (Thyssenkrupp / Schindler) que comunican desde nivel calle en Calle 10 y Las Vegas hasta el andén de los trenes, con voz bilingüe y sensores táctiles.',
      podotactileCoverage: '100% de la estación y pasarelas peatonales conectadas con guías podotáctiles de relieve continuo.',
      tactileStrips: 'Guía de advertencia de textura circular contrastada en todas las áreas de borde.',
      wheelchairRamps: 'Rampas de acceso de baja pendiente (6%) integradas a los puentes urbanos peatonales.',
      accessibleGatesCount: 6,
      accessibleGatesDetails: 'Torniquetes de aletas de cristal batientes con ancho de 95 cm para paso expedito de sillas de ruedas eléctricas y bicicletas.',
      audioAssistance: 'Tótem de comunicación accesible con pantalla braille e interfono de videoasistencia para personas con discapacidad auditiva.',
      brailleSignage: 'Mapas táctiles hápticos en cada entrada de pasarela y numeración braille en todos los pasamanos de acero.'
    },
    accesses: [
      {
        id: 'acc-po-1',
        name: 'Acceso Oriental (Pasarela Calle 10 / Zona Rosa)',
        streetReference: 'Calle 10 con Carrera 49',
        operationalHours: '04:30 - 23:00',
        standardTurnstilesEntry: 8,
        standardTurnstilesExit: 8,
        pmrTurnstilesEntry: 2,
        pmrTurnstilesExit: 2,
        totalTurnstiles: 20,
        mraMachines: {
          count: 5,
          type: 'Máquinas de Recarga Automática Cívica Pantalla Táctil',
          paymentMethods: 'Efectivo, Tarjetas Débito/Crédito Contactless y QR Bancolombia/Cívica',
          status: '5/5 Operativas'
        },
        civicaTicketBooth: {
          count: 2,
          type: 'Taquilla Metro Doble Ventanilla',
          services: 'Atención personalizada, recargas y expedición de tarjetas eventuales'
        },
        civicaAppQRTotems: 4,
        emergencyGateWithPanicBar: '2 Puertas dobles de emergencia con barra antipánico y apertura electromecánica de seguridad'
      },
      {
        id: 'acc-po-2',
        name: 'Acceso Occidental (Avenida Las Vegas / Centro Comercial Monterrey)',
        streetReference: 'Carrera 48 (Las Vegas) con Calle 10',
        operationalHours: '04:30 - 23:00',
        standardTurnstilesEntry: 6,
        standardTurnstilesExit: 6,
        pmrTurnstilesEntry: 1,
        pmrTurnstilesExit: 1,
        totalTurnstiles: 14,
        mraMachines: {
          count: 4,
          type: 'Máquinas de Recarga Automática Cívica',
          paymentMethods: 'Efectivo y Dinero Digital Móvil',
          status: '4/4 Operativas'
        },
        civicaTicketBooth: {
          count: 2,
          type: 'Taquilla con Cajero',
          services: 'Recargas y resolución de incidencias con tarjeta Cívica'
        },
        civicaAppQRTotems: 3,
        emergencyGateWithPanicBar: '1 Puerta de evacuación rápida hacia la pasarela de Las Vegas'
      }
    ],
    emergencyInventory: [
      {
        id: 'inv-po-1',
        code: 'EXT-ABC-PO1',
        name: 'Extintor Multipropósito ABC (20 lbs)',
        category: 'extintor',
        location: 'Mezanina Pasarela Oriental',
        exactPosition: 'Frente a línea de torniquetes columna E-2',
        level: 'Mezanina',
        expiryDate: '2027-07-25',
        status: 'Operativo',
        specs: 'Polvo químico certificado UL, presión 195 PSI en manómetro verde.',
        lastInspected: '2026-09-22',
        verified: true
      },
      {
        id: 'inv-po-2',
        code: 'DEA-PO-01',
        name: 'Desfibrilador Externo Automático (DEA)',
        category: 'dea',
        location: 'Mezanina Acceso Calle 10',
        exactPosition: 'Gabinete vitrina con sensor de apertura conectada al PML',
        level: 'Mezanina',
        expiryDate: '2027-10-18',
        status: 'Operativo',
        specs: 'ZOLL AED Plus con electrodos integrados CPR-D Padz con sensor de compresión.',
        lastInspected: '2026-10-04',
        verified: true
      },
      {
        id: 'inv-po-3',
        code: 'BOT-PO-01',
        name: 'Botiquín de Primeros Auxilios Tipo B',
        category: 'botiquin',
        location: 'Enfermería Pasarela Oriental',
        exactPosition: 'Mochila de rescate impermeable con estuche de oxigenoterapia',
        level: 'Mezanina',
        expiryDate: '2027-04-18',
        status: 'Operativo',
        specs: 'Insumos estériles completos, tensiómetro digital de brazo, oxímetro de pulso, termómetro infrarrojo.',
        lastInspected: '2026-09-28',
        verified: true
      },
      {
        id: 'inv-po-4',
        code: 'CAM-PO-01',
        name: 'Camilla Espinal Miller Rígida',
        category: 'camilla',
        location: 'Andén Oriental (Sentido Norte)',
        exactPosition: 'Cabecera sur de andén junto a ascensor PMR',
        level: 'Andenes',
        expiryDate: 'N/A',
        status: 'Operativo',
        specs: 'Camilla plástica ultraligera con 14 orificios perimetrales de agarre y arnés araña completo.',
        lastInspected: '2026-08-14',
        verified: true
      },
      {
        id: 'inv-po-5',
        code: 'GAB-INC-PO1',
        name: 'Gabinete de Manguera Contra Incendio',
        category: 'gabinete',
        location: 'Andén Occidental (Sentido Sur)',
        exactPosition: 'Muro técnico sector norte',
        level: 'Andenes',
        expiryDate: '2027-02-15',
        status: 'Operativo',
        specs: 'Manguera de 30 metros de 1.5", pitorro de triple efecto (cierre, chorro y niebla de protección).',
        lastInspected: '2026-09-10',
        verified: true
      }
    ]
  },
  {
    id: 'acevedo',
    name: 'Acevedo',
    line: 'Línea A, Metrocables Línea K & Línea P',
    badgeColor: 'bg-blue-600 text-white',
    accentColor: '#2563EB',
    lineBadge: 'LÍNEA A / CABLE K / CABLE P',
    type: 'Estación de Transferencia Multimodal de Gran Escala (Férreo & Aéreo)',
    heroTagline: '¡El coloso del norte donde los trenes se encuentran con los cables aéreos!',
    heroSpeech: '¡Hola! Acevedo es una de las joyas de ingeniería del sistema. Aquí el Metro a orillas del río Medellín conecta con la emblemática Línea K (Santo Domingo) y la moderna Línea P (Picacho). Por la complejidad de cables y trenes, su plan de seguridad es un modelo mundial.',
    locativeFeatures: {
      structureType: 'Megaestructura Multimodal Férrea y Estaciones Motrices de Teleférico Aéreo',
      levels: '4 Niveles: Andén Metro a Nivel Superficie (Nivel 0), Mezanina de Distribución (Nivel +1), Andén Metrocable K (Nivel +2) y Andén Metrocable P (Nivel +3)',
      platformsType: 'Andenes Laterales en Línea A (142 m) y Bucles Continuos de Embarque en Teleféricos K y P',
      ventilation: 'Estructura abierta con ventilación cruzada natural generada por el cañón del río Medellín',
      capacity: 'Aforo de transferencia de hasta 75.000 pasajeros diarios en intercambio',
      fireSuppression: 'Red contra incendios de alta presión con reserva dedicada de 120.000 litros y cañones de espuma en cuartos de motores de cable',
      emergencyExitsCount: 8,
      flooring: 'Piso de concreto pulido de alta densidad con recubrimiento epóxico antideslizante'
    },
    meetingPoints: [
      {
        id: 'mp-ac-1',
        name: 'Parque Lineal del Río Medellín (Costado Oriental)',
        locationDescription: 'Explanada abierta ajardinada junto a la ciclorruta del río y el puente peatonal.',
        safeCapacity: '4.500 personas',
        evacuationRoute: 'Salida directa por compuertas orientales a nivel de suelo sin barreras de desniveles.',
        estimatedTime: '2 minutos',
        icon: 'ShieldCheck',
        status: 'Área Abierta con Aforo Masivo'
      },
      {
        id: 'mp-ac-2',
        name: 'Plazoleta de Conexión Metrocable Picacho (Costado Occidental)',
        locationDescription: 'Plazoleta cívica de acceso al barrio Zamora y Castilla bajo las pilonas del cable.',
        safeCapacity: '3.000 personas',
        evacuationRoute: 'Descenso por rampas amplias de evacuación del edificio de Metrocable Línea P.',
        estimatedTime: '3.5 minutos',
        icon: 'MapPin',
        status: 'Rampa con Descenso Accesible'
      }
    ],
    technicalRooms: [
      {
        id: 'tr-ac-1',
        name: 'Cuarto de Motores y Tracción Metrocable K',
        code: 'MOT-CAB-K',
        level: 'Nivel +2',
        exactLocation: 'Edificio motriz oriente, acceso con esclusa de insonorización',
        accessLevel: 'Exclusivo - Ingenieros de Cable Aéreo',
        description: 'Motor eléctrico principal de corriente continua de 600 kW, reductor epicicloidal y motor diesel de rescate hidrostático para evacuación de cabinas.',
        safetyEquipment: 'Sistema de extinción fija con gas Novec 1230, 2 Extintores CO2 de 20 lbs, kit de rescate vertical.'
      },
      {
        id: 'tr-ac-2',
        name: 'Puesto de Mando Local y Supervisión Multimodal',
        code: 'PML-AC-01',
        level: 'Nivel Mezanina +1',
        exactLocation: 'Puente central de distribución con visibilidad hacia vías férreas y teleférico',
        accessLevel: 'Personal Metro y Controladores de Tráfico',
        description: 'Monitoreo de vientos (anemómetros) en pilonas de cable aéreo, tensión de cables portadores-tractores y cámaras de seguridad de andenes.',
        safetyEquipment: 'Extintor Solkaflam 123, Radiobase multibanda, Camilla de vacío.'
      },
      {
        id: 'tr-ac-3',
        name: 'Enfermería Principal Acevedo',
        code: 'ENF-AC-01',
        level: 'Nivel Mezanina +1',
        exactLocation: 'Junto al núcleo de ascensores del edificio central',
        accessLevel: 'Personal APH 24 Horas',
        description: 'Punto de estabilización médica prehospitalaria con aspirador de secreciones, desfibrilador bifásico y medicación de emergencia.',
        safetyEquipment: 'DEA automático, Botiquín Tipo B reglamentario, Camilla Miller con arnés araña.'
      }
    ],
    accessibility: {
      elevatorsCount: 5,
      elevatorsDetails: '5 Ascensores de alta capacidad con cabinas panorámicas que conectan todos los niveles desde andenes del tren hasta las estaciones superiores de cable.',
      podotactileCoverage: 'Red podotáctil completa de intercomunicación entre tren y cabinas de teleférico.',
      tactileStrips: 'Franja continua táctil de advertencia en todo el perímetro de embarque.',
      wheelchairRamps: 'Rampas con pendiente al 7% en accesos exteriores y pasarelas peatonales.',
      accessibleGatesCount: 8,
      accessibleGatesDetails: 'Torniquetes preferenciales de paso ancho motorizados con lector Cívica y botón de emergencia.',
      audioAssistance: 'Sistemas de megafonía focalizada y pantallas táctiles informativas con subtitulado y lengua de señas.',
      brailleSignage: 'Directorio táctil general en braille con relieve térmico al ingreso de cada nivel.'
    },
    accesses: [
      {
        id: 'acc-ac-1',
        name: 'Acceso Oriental (Río Medellín / Línea K)',
        streetReference: 'Carrera 49 con Calle 103',
        operationalHours: '04:30 - 23:00 (Domingos desde 08:30 en Cable)',
        standardTurnstilesEntry: 8,
        standardTurnstilesExit: 8,
        pmrTurnstilesEntry: 2,
        pmrTurnstilesExit: 2,
        totalTurnstiles: 20,
        mraMachines: {
          count: 6,
          type: 'Máquinas de Recarga Automática Cívica Multitarea',
          paymentMethods: 'Efectivo, Tarjetas Débito/Crédito y Código QR Móvil',
          status: '6/6 Operativas'
        },
        civicaTicketBooth: {
          count: 3,
          type: 'Taquilla Metro y Punto Cívica Especial',
          services: 'Personalización de tarjeta, emisión de Cívicas Alianzas y recargas'
        },
        civicaAppQRTotems: 5,
        emergencyGateWithPanicBar: '2 Puertas dobles de evacuación con barra antipánico hacia la ribera del río'
      },
      {
        id: 'acc-ac-2',
        name: 'Acceso Occidental (Castilla / Zamora / Línea P)',
        streetReference: 'Carrera 63 con Calle 104',
        operationalHours: '04:30 - 23:00',
        standardTurnstilesEntry: 6,
        standardTurnstilesExit: 6,
        pmrTurnstilesEntry: 2,
        pmrTurnstilesExit: 2,
        totalTurnstiles: 16,
        mraMachines: {
          count: 4,
          type: 'Máquinas de Recarga Automática Cívica',
          paymentMethods: 'Efectivo y Tarjeta Chip',
          status: '4/4 Operativas'
        },
        civicaTicketBooth: {
          count: 2,
          type: 'Taquilla con Cajero',
          services: 'Recarga y venta de pasajes integrados'
        },
        civicaAppQRTotems: 4,
        emergencyGateWithPanicBar: '2 Puertas de emergencia hacia la plazoleta de Picacho'
      }
    ],
    emergencyInventory: [
      {
        id: 'inv-ac-1',
        code: 'EXT-ABC-AC1',
        name: 'Extintor Multipropósito ABC (20 lbs)',
        category: 'extintor',
        location: 'Mezanina Central - Núcleo de Escaleras',
        exactPosition: 'Gabinete empotrado en columna principal con sello de garantía',
        level: 'Mezanina',
        expiryDate: '2027-08-30',
        status: 'Operativo',
        specs: 'Polvo químico fosfato monoamónico para fuegos A, B y C.',
        lastInspected: '2026-09-29',
        verified: true
      },
      {
        id: 'inv-ac-2',
        code: 'DEA-AC-01',
        name: 'Desfibrilador Externo Automático (DEA)',
        category: 'dea',
        location: 'Mezanina Distribución Férreo-Cable',
        exactPosition: 'Frente a Taquilla Principal en módulo SOS de alta visibilidad',
        level: 'Mezanina',
        expiryDate: '2027-11-05',
        status: 'Operativo',
        specs: 'Mindray BeneHeart D1 con parches pediátricos y adultos de repuesto.',
        lastInspected: '2026-10-06',
        verified: true
      },
      {
        id: 'inv-ac-3',
        code: 'BOT-AC-01',
        name: 'Botiquín Tipo B de Urgencias',
        category: 'botiquin',
        location: 'Enfermería Principal Acevedo',
        exactPosition: 'Maletín técnico con ruedas para traslado rápido por pasillos',
        level: 'Mezanina',
        expiryDate: '2027-06-15',
        status: 'Operativo',
        specs: 'Completo con inmovilizadores cervicales graduables, apósitos y equipo de signos vitales.',
        lastInspected: '2026-09-20',
        verified: true
      },
      {
        id: 'inv-ac-4',
        code: 'CAM-AC-01',
        name: 'Camilla Rígida Miller con Arnés Araña',
        category: 'camilla',
        location: 'Andén Metro Sentido Sur',
        exactPosition: 'Cabecera norte junto a escalera mecánica',
        level: 'Andenes Línea A',
        expiryDate: 'N/A',
        status: 'Operativo',
        specs: 'Camilla de plástico reforzado no permeable a sangre con correas de sujeción rápida.',
        lastInspected: '2026-08-19',
        verified: true
      },
      {
        id: 'inv-ac-5',
        code: 'GAB-INC-AC1',
        name: 'Gabinete de Manguera Contra Incendio Clase II',
        category: 'gabinete',
        location: 'Plataforma de Embarque Metrocable Línea K',
        exactPosition: 'Muro posterior de la zona de embarque de cabinas',
        level: 'Nivel +2 Metrocable K',
        expiryDate: '2027-03-10',
        status: 'Operativo',
        specs: 'Manguera de 30 metros de 1.5 pulgadas y hacha de bombero dieléctrica.',
        lastInspected: '2026-09-12',
        verified: true
      }
    ]
  },
  {
    id: 'san-javier',
    name: 'San Javier',
    line: 'Línea B & Metrocable Línea J',
    badgeColor: 'bg-orange-600 text-white',
    accentColor: '#EA580C',
    lineBadge: 'LÍNEA B / CABLE J',
    type: 'Estación Terminal e Intercambio Urbano (Comuna 13)',
    heroTagline: '¡El símbolo de transformación social y puerta de entrada a la Comuna 13!',
    heroSpeech: '¡Bienvenido a San Javier! Estación terminal de la Línea B y punto de partida del Metrocable Línea J. Es un epicentro de turismo internacional y movilidad comunitaria. Su equipamiento de emergencia y accesibilidad está optimizado para flujos continuos y de gran calidez humana.',
    locativeFeatures: {
      structureType: 'Estación Férrea a Nivel de Superficie Integrada a Edificio Elevado de Metrocable',
      levels: '3 Niveles: Andén Férreo Línea B y Mezanina (Nivel 0 / Calle), Mezanina Intermedia (Nivel +1) y Plataforma de Embarque Cable J (Nivel +2)',
      platformsType: 'Andén Central Ancho para Trenes de Línea B (100 m) y Bucle de Cabinas de Metrocable',
      ventilation: 'Gran volumen de aire natural por naves estructurales abiertas en arco',
      capacity: 'Aforo dinámico de hasta 35.000 pasajeros diarios',
      fireSuppression: 'Red húmeda de gabinetes y red de rociadores automáticos en la zona comercial y técnica',
      emergencyExitsCount: 5,
      flooring: 'Piso de adoquín de gres cerámico de alta resistencia en exteriores y granito en andenes'
    },
    meetingPoints: [
      {
        id: 'mp-sj-1',
        name: 'Plazoleta Cívica San Javier (Costado Calle San Juan)',
        locationDescription: 'Explanada adoquinada frente a la biblioteca pública y la estación de policía.',
        safeCapacity: '3.000 personas',
        evacuationRoute: 'Salida directa nivel suelo a través de las compuertas exteriores sin escaleras.',
        estimatedTime: '1.5 minutos',
        icon: 'ShieldCheck',
        status: 'Punto de Encuentro Despejado'
      },
      {
        id: 'mp-sj-2',
        name: 'Plazoleta Superior Metrocable (Costado Carrera 99)',
        locationDescription: 'Área peatonal abierta que conecta con las rutas alimentadoras de la Comuna 13.',
        safeCapacity: '2.000 personas',
        evacuationRoute: 'Rampa peatonal amplia de evacuación del Metrocable hacia la vía pública.',
        estimatedTime: '2.5 minutos',
        icon: 'MapPin',
        status: 'Ruta Señalizada y Accesible'
      }
    ],
    technicalRooms: [
      {
        id: 'tr-sj-1',
        name: 'Puesto de Mando Local (PML San Javier)',
        code: 'PML-SJ-01',
        level: 'Nivel Calle 0',
        exactLocation: 'Cabecera de andén férreo con ventana panorámica al tren y torniquetes',
        accessLevel: 'Personal Operativo Metro',
        description: 'Coordinación del retorno y maniobra de cambio de vías de los trenes de la Línea B y supervisión de la operación del Metrocable.',
        safetyEquipment: 'Extintor CO2 10 lbs, Botiquín Tipo B, Consola de radio TETRA.'
      },
      {
        id: 'tr-sj-2',
        name: 'Sala Motriz Metrocable Línea J',
        code: 'MOT-CAB-J',
        level: 'Nivel +2',
        exactLocation: 'Corazón técnico del sistema de cable aéreo sobre el andén',
        accessLevel: 'Ingenieros de Mantenimiento de Cable',
        description: 'Motor de 550 kW con volante de inercia y banco de frenos de servicio y seguridad que operan sobre la polea motriz.',
        safetyEquipment: 'Sistema de extinción por inundación total de CO2, 2 Extintores ABC de 20 lbs.'
      },
      {
        id: 'tr-sj-3',
        name: 'Cuarto de Auxilio Prehospitalario y Lactancia',
        code: 'ENF-SJ-01',
        level: 'Nivel 0 Mezanina',
        exactLocation: 'Junto a la Taquilla Auxiliar costado San Juan',
        accessLevel: 'Personal APH y Usuarios Asistidos',
        description: 'Atención a usuarios con golpes de calor, descompensaciones y sala de apoyo a la lactancia materna.',
        safetyEquipment: 'Desfibrilador DEA, camilla de lona plegable, botiquín de trauma.'
      }
    ],
    accessibility: {
      elevatorsCount: 3,
      elevatorsDetails: '3 Ascensores panorámicos con señalética bilingüe, sonido de arribo a piso y botones braille que conectan calle, tren y Metrocable.',
      podotactileCoverage: 'Ruta táctil accesible ininterrumpida desde la plazoleta exterior hasta el interior del tren y cabinas de cable.',
      tactileStrips: 'Franja de detención y advertencia táctil amarilla en todos los bordes.',
      wheelchairRamps: 'Rampa de acceso exterior suave que permite ingreso directo sin necesidad de ascensor a nivel calle.',
      accessibleGatesCount: 5,
      accessibleGatesDetails: 'Torniquetes preferenciales de paso ancho de 95 cm con lector Cívica a baja altura.',
      audioAssistance: 'Interfonos de emergencia y bucle magnético para personas con audífonos en taquilla.',
      brailleSignage: 'Mapa de la red Metro en relieve con descripciones en sistema Braille en la entrada.'
    },
    accesses: [
      {
        id: 'acc-sj-1',
        name: 'Acceso Principal (Calle 44 - San Juan)',
        streetReference: 'Calle 44 (San Juan) con Carrera 99',
        operationalHours: '04:30 - 23:00',
        standardTurnstilesEntry: 8,
        standardTurnstilesExit: 8,
        pmrTurnstilesEntry: 2,
        pmrTurnstilesExit: 2,
        totalTurnstiles: 20,
        mraMachines: {
          count: 5,
          type: 'Máquinas de Recarga Automática Cívica',
          paymentMethods: 'Efectivo, Tarjetas Débito/Crédito y Código QR Nequi/Bancolombia',
          status: '5/5 Operativas'
        },
        civicaTicketBooth: {
          count: 3,
          type: 'Taquilla Metro y Punto Cívica Turístico',
          services: 'Recargas, información turística de la Comuna 13 y orientación'
        },
        civicaAppQRTotems: 4,
        emergencyGateWithPanicBar: '2 Puertas dobles de salida rápida hacia la plazoleta cívica'
      },
      {
        id: 'acc-sj-2',
        name: 'Acceso Superior (Carrera 99 / Conexión Metrocable J)',
        streetReference: 'Carrera 99 con Calle 45',
        operationalHours: '04:30 - 23:00',
        standardTurnstilesEntry: 4,
        standardTurnstilesExit: 4,
        pmrTurnstilesEntry: 1,
        pmrTurnstilesExit: 1,
        totalTurnstiles: 10,
        mraMachines: {
          count: 3,
          type: 'Máquinas de Recarga Automática Cívica',
          paymentMethods: 'Efectivo y Tarjetas',
          status: '3/3 Operativas'
        },
        civicaTicketBooth: {
          count: 1,
          type: 'Taquilla Auxiliar con Cajero',
          services: 'Venta y recarga de saldo Cívica'
        },
        civicaAppQRTotems: 2,
        emergencyGateWithPanicBar: '1 Puerta de emergencia hacia rampa superior'
      }
    ],
    emergencyInventory: [
      {
        id: 'inv-sj-1',
        code: 'EXT-ABC-SJ1',
        name: 'Extintor Multipropósito ABC (20 lbs)',
        category: 'extintor',
        location: 'Mezanina Principal San Juan',
        exactPosition: 'Junto a Taquilla 1, soporte fijado a columna en muro perimetral',
        level: 'Nivel 0 Mezanina',
        expiryDate: '2027-05-18',
        status: 'Operativo',
        specs: 'Polvo químico seco, presión óptima en zona verde del manómetro.',
        lastInspected: '2026-09-15',
        verified: true
      },
      {
        id: 'inv-sj-2',
        code: 'DEA-SJ-01',
        name: 'Desfibrilador Externo Automático (DEA)',
        category: 'dea',
        location: 'Hall Central de Acceso',
        exactPosition: 'Gabinete vitrina con alarma local junto a puesto de orientación',
        level: 'Nivel 0',
        expiryDate: '2027-10-25',
        status: 'Operativo',
        specs: 'ZOLL AED Plus con autochequeo funcional y parches vigentes.',
        lastInspected: '2026-10-01',
        verified: true
      },
      {
        id: 'inv-sj-3',
        code: 'BOT-SJ-01',
        name: 'Botiquín Tipo B Reglamentario',
        category: 'botiquin',
        location: 'Puesto de Mando Local (PML)',
        exactPosition: 'Maletín impermeable rotulado con Cruz Roja/Verde',
        level: 'Nivel 0',
        expiryDate: '2027-07-10',
        status: 'Operativo',
        specs: 'Dotación completa de apósitos, gasas, vendas, apósitos para quemaduras, tensiómetro y tijeras.',
        lastInspected: '2026-09-22',
        verified: true
      },
      {
        id: 'inv-sj-4',
        code: 'CAM-SJ-01',
        name: 'Camilla Rígida Miller con Arnés de Sujeción',
        category: 'camilla',
        location: 'Andén Central Línea B',
        exactPosition: 'Punta oriental del andén férreo junto a caseta técnica',
        level: 'Nivel 0 Andén',
        expiryDate: 'N/A',
        status: 'Operativo',
        specs: 'Camilla espinal de polietileno con inmovilizadores de cabeza tipo almohadilla.',
        lastInspected: '2026-08-25',
        verified: true
      },
      {
        id: 'inv-sj-5',
        code: 'GAB-INC-SJ1',
        name: 'Gabinete de Manguera Contra Incendio',
        category: 'gabinete',
        location: 'Plataforma de Embarque Metrocable J',
        exactPosition: 'Muro lateral de retorno de cabinas',
        level: 'Nivel +2',
        expiryDate: '2027-04-12',
        status: 'Operativo',
        specs: 'Manguera de 30 metros de 1.5 pulgadas, válvula de globo y lanza de chorro/niebla.',
        lastInspected: '2026-09-08',
        verified: false
      }
    ]
  }
];

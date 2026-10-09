// ✏️ EDITA AQUÍ: todo el sitio se alimenta de este archivo.
export const site = {
  universidad: 'UNIVERSIDAD CONTINENTAL',
  asignatura: 'Estrategias y Herramientas Digitales para el Aprendizaje',
  ods: 'ODS 13: Acción por el clima',
  titulo: 'Impactos del cambio climático en el Perú y propuestas para un futuro sostenible',
  objetivo: 'Indagar sobre los impactos del cambio climático en el Perú y proponer acciones para un futuro sostenible.',
  videoUrl: '', // URL "embed" (YouTube: https://www.youtube.com/embed/ID)
  slidesUrl: '', // Opcional: URL embed de Google Slides
  meetImg: '/evidencias/meet.jpeg',
  equipo: [
    { nombre: 'Susan Lizbeth Salhuana Vilanueva', codigo: '', carrera: 'Derecho', foto: '/img/Susan.jpeg', Apoyo:'Por las imagenes y el desarrollo incial de la paguina web',
      propuestaTitulo: 'Cosecha de agua y huertos escolares',
      propuesta: 'Impulsar en comunidades altoandinas y escuelas rurales la siembra y cosecha de agua (zanjas de infiltración, reservorios) junto con huertos con cultivos resistentes a sequías y heladas, para asegurar agua y alimentos.',
      img: '/img/propuesta1.jpg', slides: '', fortalezas: 'Escribe tus fortalezas.', debilidades: 'Escribe tus debilidades.' },
    { nombre: 'Jordan Enrique Salas Vera', codigo: '', carrera: 'Ing. Sistemas e Informática', foto: '/img/Jordan.jpeg', Apoyo:'Por tener la iniciativa de reunir al equipo y la colaboracion',
      propuestaTitulo: 'Alerta temprana digital ante huaicos e inundaciones',
      propuesta: 'Crear un mapa web y un canal de mensajería que reúna avisos oficiales de SENAMHI e INDECI con recomendaciones simples para familias de zonas de riesgo, de modo que puedan actuar a tiempo.',
      img: '/img/propuesta2.jpg', slides: '', fortalezas: 'Escribe tus fortalezas.', debilidades: 'Escribe tus debilidades.' },
    { nombre: 'Andrea Isabel Tinoco Lozano', codigo: 'U00000000', carrera: 'Administracion', foto: '/img/Andrea.jpeg', Apoyo:'Desarrollo de la paguina web',
      propuestaTitulo: 'Campus verde y reforestación con especies nativas',
      propuesta: 'Lanzar una campaña universitaria para reducir la huella de carbono (energía, transporte, residuos) y organizar jornadas de reforestación con especies nativas, difundidas con videos cortos y redes sociales.',
      img: '/img/propuesta3.jpg', slides: '', fortalezas: 'Escribe tus fortalezas.', debilidades: 'Escribe tus debilidades.' },
  ],
  videos: [
    { titulo: 'Documental «Andes sin glaciares»', buscar: 'Andes sin glaciares documental COSUDE', url: '' },
    { titulo: 'El cambio climático en el Perú', buscar: 'cambio climático en el Perú MINAM', url: '' },
    { titulo: 'Fenómeno El Niño costero', buscar: 'Niño costero Perú SENAMHI explicación', url: '' },
  ],
  galeria: [
    { src: '/img/glaciar.jpeg', alt: 'l Nevado Auzangate y la laguna glaciar Upiscocha', credito: 'El Nevado Auzangate y la laguna glaciar Upiscocha (alimentada por el retroceso del Auzangate), en Cusco. La laguna tse desbordó en 2022. Aguas abajo, hay varios centros poblados.' },
    { src: '/img/huaico.jpeg', alt: 'Huaico', credito: 'People inspect the road destroyed by heavy rain that triggered flooding in Arequipa, Peru, Monday, Feb. 23, 2026. (AP Photo/Jose Sotomayor) Jose Sotomayor (AP)' },
    { src: '/img/amazonia.jpeg', alt: 'Amazonía peruana', credito: 'Una zona yace deforestada por la minería ilegal de oro en la provincia peruana de Madre de Dios, un día antes de que el papa Francisco llegara a la Amazonía peruana en el año 2018. Rodrigo Abd (AP)' },
  ],
  plan: [
    { fecha: 'Día 1', tarea: 'Reunión en Google Meet: elegir ODS 13 y definir objetivo.' },
    { fecha: 'Día 2', tarea: 'Búsqueda de fuentes (SENAMHI, MINAM, INAIGEM, IPCC).' },
    { fecha: 'Día 3', tarea: 'Elaboración de contenido, diagramas y Slides.' },
    { fecha: 'Día 4', tarea: 'Grabación del video (máx. 7 min) y autoevaluación.' },
    { fecha: 'Día 5', tarea: 'Revisión de citas APA 7 y entrega.' },
  ],
  // Mínimo 3 citas. Verifica año, URL y datos antes de entregar.
  referencias: [
    'Instituto Nacional de Investigación en Glaciares y Ecosistemas de Montaña. (s. f.). Inventario nacional de glaciares. INAIGEM. https://www.inaigem.gob.pe',
    'Agraria.pe. (2023, 27 de noviembre). Perú pierde el 56.22 % de sus glaciares en las últimas seis décadas. https://agraria.pe/noticias/peru-pierde-el-56-22-de-sus-glaciares-en-las-ultimas-seis-de-33979',
    'Intergovernmental Panel on Climate Change. (2022). Climate change 2022: Impacts, adaptation and vulnerability. Cambridge University Press. https://www.ipcc.ch/report/ar6/wg2/',
    'Ministerio del Ambiente. (2015). Estrategia nacional ante el cambio climático. MINAM. https://www.gob.pe/minam',
    'Servicio Nacional de Meteorología e Hidrología del Perú. (s. f.). Clima y cambio climático. SENAMHI. https://www.senamhi.gob.pe',
  ],
  citas: [
    { tipo: 'Cita indirecta', texto: 'El Perú ha perdido más de la mitad de sus glaciares en las últimas seis décadas (Agraria.pe, 2023).' },
    { tipo: 'Cita indirecta', texto: 'Los impactos son más severos en poblaciones con menor capacidad de adaptación (IPCC, 2022).' },
    { tipo: 'Cita directa', texto: '“Escribe aquí una cita textual breve” (MINAM, 2015, p. XX).' },
  ],
  impactos: [
    { t: 'Glaciares en retroceso', d: 'El Perú reúne el 68 % de los glaciares tropicales del mundo y ha perdido el 56,22 % en seis décadas (Agraria.pe, 2023). Esto amenaza el agua potable, el riego y la energía.' },
    { t: 'Lluvias extremas y El Niño costero', d: 'Huaicos, inundaciones y deslizamientos dañan viviendas, caminos y cultivos, sobre todo en el norte.' },
    { t: 'Sequías y heladas', d: 'Alteran los calendarios agrícolas y golpean a familias que viven de la agricultura y ganadería altoandina.' },
    { t: 'Amazonía bajo presión', d: 'La deforestación y los incendios reducen la captura de carbono y afectan a pueblos indígenas.' },
    { t: 'Mar y pesca', d: 'El calentamiento del Pacífico modifica la distribución de especies como la anchoveta y afecta a pescadores artesanales.' },
  ],
};

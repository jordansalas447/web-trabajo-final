// ✏️ EDITA AQUÍ: todo el sitio se alimenta de este archivo.
export const site = {
  universidad: 'NOMBRE DE LA UNIVERSIDAD',
  asignatura: 'Estrategias y Herramientas Digitales para el Aprendizaje',
  ods: 'ODS 13: Acción por el clima',
  titulo: 'Impactos del cambio climático en el Perú y propuestas para un futuro sostenible',
  objetivo: 'Indagar sobre los impactos del cambio climático en el Perú y proponer acciones para un futuro sostenible.',
  videoUrl: '', // URL "embed" (YouTube: https://www.youtube.com/embed/ID)
  slidesUrl: '', // Opcional: URL embed de Google Slides
  meetImg: '/evidencias/meet.png',
  equipo: [
    { nombre: 'Apellidos, Nombres', codigo: 'U00000000', carrera: 'Carrera profesional', foto: '/team/integrante1.jpg',
      propuesta: 'Escribe aquí la propuesta de este integrante.', fortalezas: 'Escribe tus fortalezas.', debilidades: 'Escribe tus debilidades.' },
    { nombre: 'Apellidos, Nombres', codigo: 'U00000000', carrera: 'Carrera profesional', foto: '/team/integrante2.jpg',
      propuesta: 'Propuesta del integrante 2.', fortalezas: 'Fortalezas.', debilidades: 'Debilidades.' },
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
    'Intergovernmental Panel on Climate Change. (2022). Climate change 2022: Impacts, adaptation and vulnerability. Cambridge University Press. https://www.ipcc.ch/report/ar6/wg2/',
    'Ministerio del Ambiente. (2015). Estrategia nacional ante el cambio climático. MINAM. https://www.gob.pe/minam',
    'Servicio Nacional de Meteorología e Hidrología del Perú. (s. f.). Clima y cambio climático. SENAMHI. https://www.senamhi.gob.pe',
  ],
  citas: [
    { tipo: 'Cita indirecta', texto: 'Los glaciares tropicales andinos retroceden y ponen en riesgo el agua de comunidades y ciudades (INAIGEM, s. f.).' },
    { tipo: 'Cita indirecta', texto: 'Los impactos son más severos en poblaciones con menor capacidad de adaptación (IPCC, 2022).' },
    { tipo: 'Cita directa', texto: '“Escribe aquí una cita textual breve” (MINAM, 2015, p. XX).' },
  ],
  impactos: [
    { t: 'Glaciares en retroceso', d: 'Los nevados andinos alimentan ríos que abastecen agua potable, riego y energía. Su pérdida amenaza la seguridad hídrica.' },
    { t: 'Lluvias extremas y El Niño costero', d: 'Huaicos, inundaciones y deslizamientos dañan viviendas, caminos y cultivos, sobre todo en el norte.' },
    { t: 'Sequías y heladas', d: 'Alteran los calendarios agrícolas y golpean a familias que viven de la agricultura y ganadería altoandina.' },
    { t: 'Amazonía bajo presión', d: 'La deforestación y los incendios reducen la captura de carbono y afectan a pueblos indígenas.' },
    { t: 'Mar y pesca', d: 'El calentamiento del Pacífico modifica la distribución de especies como la anchoveta y afecta a pescadores artesanales.' },
  ],
};

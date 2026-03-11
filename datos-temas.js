/**
 * Banco de preguntas por tema corregido.
 * 15 temas, 10 preguntas por tema.
 * Se han ajustado los índices 'correcta' (0-3) según evidencia clínica y legal.
 */
const BANCO_POR_TEMAS = [
  {
    id: 'tema1',
    nombre: 'Endodoncia',
    preguntas: [
      { id: 't1_q1', texto: '¿Cuál es el objetivo principal del hipoclorito de sodio (NaOCl) durante la irrigación endodóntica?', opciones: ['Disolver tejido orgánico y actuar como antimicrobiano', 'Eliminar únicamente el smear layer', 'Aumentar la adhesión del sellador', 'Determinar la longitud de trabajo'], correcta: 0 },
      { id: 't1_q2', texto: '¿Cuál es la función principal del EDTA durante la irrigación en endodoncia?', opciones: ['Disolver tejido orgánico pulpar', 'Eliminar el smear layer mediante acción quelante sobre la dentina', 'Desinfectar los conductos radiculares', 'Lubricar los instrumentos mecanizados'], correcta: 1 },
      { id: 't1_q3', texto: 'La longitud de trabajo en endodoncia se define como:', opciones: ['La distancia desde la cúspide hasta el ápice radiográfico', 'La distancia desde un punto de referencia coronario hasta la constricción apical', 'La distancia desde la cámara pulpar hasta el ápice anatómico', 'La distancia desde la entrada del conducto hasta el foramen apical'], correcta: 1 },
      { id: 't1_q4', texto: '¿Cuál es una limitación importante de los localizadores apicales electrónicos?', opciones: ['No funcionan en presencia de irrigantes', 'No pueden utilizarse en dientes vitales', 'Su precisión puede verse afectada por perforaciones o conductos muy amplios', 'Solo funcionan en conductos rectos'], correcta: 2 },
      { id: 't1_q5', texto: '¿Qué característica de los instrumentos de NiTi permite su uso en instrumentación mecanizada?', opciones: ['Alta rigidez', 'Memoria elástica y gran flexibilidad', 'Alta conductividad térmica', 'Mayor diámetro apical'], correcta: 1 },
      { id: 't1_q6', texto: '¿Cuál es una causa frecuente de fractura de instrumentos endodónticos rotatorios?', opciones: ['Exceso de irrigación con NaOCl', 'Fatiga cíclica por curvaturas del conducto', 'Uso de EDTA durante la instrumentación', 'Conductos con diámetro amplio'], correcta: 1 },
      { id: 't1_q7', texto: '¿Cuál es una ventaja de la instrumentación mecanizada frente a la manual?', opciones: ['Elimina completamente la necesidad de irrigación', 'Reduce el tiempo clínico y mejora la conformación del conducto', 'Evita completamente la fractura de instrumentos', 'No requiere control de longitud de trabajo'], correcta: 1 },
      { id: 't1_q8', texto: 'Durante el diagnóstico pulpar, una respuesta exagerada y persistente al frío sugiere:', opciones: ['Pulpa normal', 'Pulpa necrótica', 'Pulpitis irreversible sintomática', 'Calcificación pulpar'], correcta: 2 },
      { id: 't1_q9', texto: 'La irrigación con NaOCl debe realizarse cuidadosamente porque:', opciones: ['Puede causar irritación severa si se extruye más allá del ápice', 'Puede endurecer la dentina radicular', 'Reduce la visibilidad del campo operatorio', 'Disminuye la efectividad del EDTA'], correcta: 0 },
      { id: 't1_q10', texto: '¿Qué medida ayuda a prevenir la fractura de instrumentos rotatorios durante la instrumentación?', opciones: ['Aplicar presión apical constante', 'Usar las limas repetidamente en múltiples conductos', 'Crear un glide path adecuado antes de usar instrumentos rotatorios', 'Utilizar siempre la mayor velocidad del motor'], correcta: 2 }
    ]
  },
  {
    id: 'tema2',
    nombre: 'Odontología restauradora y adhesiva',
    preguntas: [
      { id: 't2_q1', texto: '¿Cuál es el objetivo principal del grabado ácido en el protocolo adhesivo convencional?', opciones: ['Eliminar bacterias residuales', 'Crear microporosidades en esmalte y dentina para mejorar la adhesión', 'Aumentar la contracción polimérica de la resina', 'Sellar los túbulos dentinarios de forma definitiva'], correcta: 1 },
      { id: 't2_q2', texto: 'La contracción polimérica de las resinas compuestas ocurre principalmente durante:', opciones: ['La inserción del material en la cavidad', 'La reacción de polimerización durante el fotocurado', 'El grabado ácido previo', 'El acabado y pulido de la restauración'], correcta: 1 },
      { id: 't2_q3', texto: '¿Cuál es una estrategia clínica efectiva para disminuir los efectos de la contracción polimérica?', opciones: ['Colocar la resina en un solo incremento grande', 'Utilizar técnica incremental en capas', 'Aumentar el tiempo de grabado ácido', 'Aplicar el adhesivo sin evaporar solventes'], correcta: 1 },
      { id: 't2_q4', texto: 'Las restauraciones de resina compuesta clase II se caracterizan por involucrar:', opciones: ['Superficies proximales de dientes posteriores', 'Solo la superficie vestibular de dientes anteriores', 'Únicamente el borde incisal', 'Solo la superficie oclusal sin compromiso proximal'], correcta: 0 },
      { id: 't2_q5', texto: 'Las restauraciones clase IV con resina compuesta se indican cuando existe:', opciones: ['Lesión cervical sin compromiso incisal', 'Fractura que involucra el ángulo incisal de un diente anterior', 'Caries oclusal en molares', 'Caries radicular en premolares'], correcta: 1 },
      { id: 't2_q6', texto: 'Una causa frecuente de sensibilidad postoperatoria en restauraciones adhesivas es:', opciones: ['Exceso de pulido final', 'Sellado adecuado de los túbulos dentinarios', 'Microfiltración por contracción polimérica', 'Uso de resina de baja viscosidad'], correcta: 2 },
      { id: 't2_q7', texto: 'En los sistemas adhesivos autograbantes, el paso de grabado ácido:', opciones: ['Se realiza con ácido fosfórico independiente', 'Está incorporado dentro del primer ácido', 'No es necesario en esmalte', 'Se realiza después del adhesivo'], correcta: 1 },
      { id: 't2_q8', texto: 'Después de un blanqueamiento dental, la adhesión de resinas puede verse comprometida principalmente por:', opciones: ['Presencia de oxígeno residual en el esmalte', 'Exceso de grabado ácido', 'Aumento de la dureza del esmalte', 'Disminución de la humedad dentinaria'], correcta: 0 },
      { id: 't2_q9', texto: '¿Cuál es una recomendación clínica común antes de realizar procedimientos adhesivos después de un blanqueamiento?', opciones: ['Esperar aproximadamente 1 a 2 semanas', 'Aplicar más adhesivo del habitual', 'No realizar grabado ácido', 'Utilizar únicamente resinas fluidas'], correcta: 0 },
      { id: 't2_q10', texto: 'El factor C en odontología restauradora se refiere a:', opciones: ['La cantidad de resina utilizada en la restauración', 'La relación entre superficies adheridas y superficies libres en una cavidad', 'El color final de la restauración', 'El tiempo de fotocurado requerido'], correcta: 1 }
    ]
  },
  {
    id: 'tema3',
    nombre: 'Prótesis fija y estética',
    preguntas: [
      { id: 't3_q1', texto: '¿Qué describe el efecto férula en prótesis fija?', opciones: ['Una banda de dentina remanente que rodea la preparación y mejora la resistencia a la fractura', 'Un tipo de cemento utilizado para fijar coronas', 'Una técnica de impresión para prótesis fija', 'Un tipo de cerámica utilizada en coronas'], correcta: 0 },
      { id: 't3_q2', texto: '¿Cuál es la conicidad total ideal aproximada para una preparación de corona completa que favorezca la retención?', opciones: ['2° a 6° de convergencia total', '15° a 20° de convergencia total', '25° a 30° de convergencia total', '40° a 45° de convergencia total'], correcta: 0 },
      { id: 't3_q3', texto: '¿Cuál es una línea de terminación comúnmente indicada para coronas cerámicas por su buen soporte marginal?', opciones: ['Hombro o shoulder', 'Bisel amplio', 'Terminación en filo de cuchillo', 'Terminación irregular'], correcta: 0 },
      { id: 't3_q4', texto: 'El disilicato de litio es una cerámica que se caracteriza principalmente por:', opciones: ['Alta estética y buena resistencia para coronas unitarias', 'Baja translucidez y uso exclusivo en puentes largos', 'Uso exclusivo en restauraciones metálicas', 'Ser un material temporal'], correcta: 0 },
      { id: 't3_q5', texto: '¿Cuál es una indicación común para el uso de zirconia en prótesis fija?', opciones: ['Puentes posteriores que requieren alta resistencia mecánica', 'Restauraciones provisionales de corta duración', 'Incrustaciones de resina compuesta', 'Restauraciones directas en clínica'], correcta: 0 },
      { id: 't3_q6', texto: '¿Cuál es la principal función de un perno intrarradicular en dientes tratados endodónticamente?', opciones: ['Retener el material de reconstrucción coronaria', 'Sellar el ápice radicular', 'Aumentar la vitalidad pulpar', 'Sustituir completamente la raíz dental'], correcta: 0 },
      { id: 't3_q7', texto: '¿En qué situación está indicado el uso de un perno intrarradicular?', opciones: ['Cuando existe gran pérdida de estructura coronaria remanente', 'Cuando el diente presenta pulpa vital', 'Cuando la corona natural está intacta', 'Cuando el diente no ha recibido tratamiento endodóntico'], correcta: 0 },
      { id: 't3_q8', texto: 'Una preparación con paredes muy paralelas en una corona puede generar:', opciones: ['Dificultad para asentar completamente la restauración', 'Pérdida total de retención', 'Mayor contracción del cemento', 'Mayor desgaste del antagonista'], correcta: 0 },
      { id: 't3_q9', texto: '¿Cuál es una ventaja estética importante del disilicato de litio frente a la zirconia tradicional?', opciones: ['Mayor translucidez que permite una mejor mimetización con el diente natural', 'Mayor radiopacidad', 'Mayor dureza superficial', 'Mayor conductividad térmica'], correcta: 0 },
      { id: 't3_q10', texto: 'Para lograr un adecuado efecto férula en un diente restaurado con corona, se recomienda generalmente:', opciones: ['Al menos 1.5–2 mm de estructura dentaria remanente supragingival', 'Menos de 0.5 mm de estructura remanente', 'Eliminar toda la dentina cervical', 'Utilizar únicamente pernos metálicos'], correcta: 0 }
    ]
  },
  {
    id: 'tema4',
    nombre: 'Implantología',
    preguntas: [
      { id: 't4_q1', texto: '¿Cuál es uno de los criterios clave para la colocación de un implante inmediato post-extracción?', opciones: ['Presencia de infección aguda no controlada', 'Estabilidad primaria adecuada del implante', 'Ausencia total de hueso alveolar', 'Movilidad dentaria severa'], correcta: 1 },
      { id: 't4_q2', texto: '¿Cuál es el torque de inserción mínimo generalmente recomendado para considerar carga inmediata en implantología?', opciones: ['10 Ncm', '20 Ncm', '35 Ncm', '60 Ncm'], correcta: 2 },
      { id: 't4_q3', texto: 'En implantología, el "gap" se refiere a:', opciones: ['El espacio entre el implante y la pared ósea del alveolo post-extracción', 'La distancia entre dos coronas implantosoportadas', 'La distancia entre el implante y el nervio alveolar inferior', 'La distancia entre dos dientes naturales'], correcta: 0 },
      { id: 't4_q4', texto: 'Cuando el gap entre el implante y la pared ósea es mayor a 2 mm, generalmente se recomienda:', opciones: ['No realizar ninguna intervención', 'Reducir el diámetro del implante', 'Rellenar con material de injerto óseo', 'Extraer el implante y esperar cicatrización'], correcta: 2 },
      { id: 't4_q5', texto: '¿Cuál es la distancia mínima recomendada entre dos implantes para mantener la salud del hueso interimplantario?', opciones: ['1 mm', '2 mm', '3 mm', '5 mm'], correcta: 2 },
      { id: 't4_q6', texto: '¿Cuál es la distancia mínima recomendada entre un implante y un diente natural adyacente?', opciones: ['1.5 mm', '3 mm', '4 mm', '6 mm'], correcta: 0 },
      { id: 't4_q7', texto: '¿Cuál es la principal ventaja de un injerto autólogo en implantología?', opciones: ['Mayor biocompatibilidad y potencial osteogénico', 'Menor tiempo quirúrgico', 'Mayor disponibilidad ilimitada', 'Menor reabsorción que todos los otros materiales'], correcta: 0 },
      { id: 't4_q8', texto: 'Un xenoinjerto utilizado en implantología se caracteriza por:', opciones: ['Provenir del mismo paciente', 'Provenir de un donante humano', 'Provenir de otra especie, generalmente bovina', 'Ser completamente sintético'], correcta: 2 },
      { id: 't4_q9', texto: '¿Cuál es uno de los objetivos del manejo adecuado de los tejidos blandos alrededor de implantes?', opciones: ['Reducir la estabilidad primaria', 'Mejorar el sellado biológico periimplantario', 'Aumentar el torque de inserción', 'Disminuir el diámetro del implante'], correcta: 1 },
      { id: 't4_q10', texto: 'Durante la colocación de implantes inmediatos post-extracción, se recomienda posicionar el implante:', opciones: ['Más hacia la tabla vestibular', 'Centrado en el alveolo sin considerar paredes óseas', 'Ligero hacia palatino o lingual para preservar la tabla vestibular', 'En contacto directo con la pared vestibular'], correcta: 2 }
    ]
  },
  {
    id: 'tema5',
    nombre: 'Periodoncia',
    preguntas: [
      { id: 't5_q1', texto: '¿Cuál es el parámetro clínico más utilizado para evaluar la severidad de la enfermedad periodontal?', opciones: ['Profundidad de sondaje periodontal', 'Color de la encía', 'Forma de la corona dental', 'Presencia de restauraciones'], correcta: 0 },
      { id: 't5_q2', texto: '¿Qué factor es considerado el principal agente etiológico en la enfermedad periodontal?', opciones: ['Trauma oclusal', 'Biofilm bacteriano dental', 'Consumo de alimentos ácidos', 'Malposición dentaria'], correcta: 1 },
      { id: 't5_q3', texto: 'La progresión de la periodontitis se caracteriza principalmente por:', opciones: ['Aumento del esmalte dental', 'Formación de caries radicular', 'Pérdida de inserción clínica y destrucción del hueso alveolar', 'Hipertrofia del ligamento periodontal'], correcta: 2 },
      { id: 't5_q4', texto: 'La cirugía de acceso periodontal tiene como objetivo principal:', opciones: ['Eliminar completamente el diente afectado', 'Aumentar la longitud radicular', 'Mejorar el acceso para la eliminación de cálculo y tejido inflamatorio', 'Cerrar el espacio interproximal'], correcta: 2 },
      { id: 't5_q5', texto: 'Los defectos óseos verticales en periodoncia se caracterizan por:', opciones: ['Pérdida ósea uniforme horizontal', 'Pérdida ósea angular que crea paredes óseas alrededor del defecto', 'Ausencia total de hueso alveolar', 'Calcificación del ligamento periodontal'], correcta: 1 },
      { id: 't5_q6', texto: '¿En qué situación puede indicarse el uso de antibióticos sistémicos en terapia periodontal?', opciones: ['Gingivitis leve localizada', 'Pacientes con periodontitis agresiva o infecciones severas', 'Pacientes con restauraciones defectuosas', 'En todos los casos de profilaxis dental'], correcta: 1 },
      { id: 't5_q7', texto: 'La regeneración periodontal guiada busca:', opciones: ['Eliminar completamente el hueso afectado', 'Promover la regeneración de hueso, ligamento periodontal y cemento', 'Reducir la sensibilidad dentaria', 'Aumentar la movilidad dental'], correcta: 1 },
      { id: 't5_q8', texto: '¿Cuál es la frecuencia comúnmente recomendada para el mantenimiento periodontal en pacientes tratados por periodontitis?', opciones: ['Cada 6 a 12 meses', 'Cada 3 a 4 meses', 'Cada 2 años', 'Solo cuando el paciente presenta dolor'], correcta: 1 },
      { id: 't5_q9', texto: '¿Cuál es uno de los signos clínicos característicos de la periodontitis?', opciones: ['Movilidad dental y pérdida de inserción clínica', 'Aumento del tamaño de la corona', 'Endurecimiento del esmalte', 'Disminución del biofilm dental'], correcta: 0 },
      { id: 't5_q10', texto: 'Un defecto óseo periodontal de tres paredes es considerado favorable para regeneración porque:', opciones: ['No presenta hueso remanente', 'Tiene menor vascularización', 'Existe mayor soporte óseo remanente que favorece la regeneración', 'Siempre requiere extracción dental'], correcta: 2 }
    ]
  },
  {
    id: 'tema6',
    nombre: 'Cariología y prevención',
    preguntas: [
      { id: 't6_q1', texto: '¿Qué significa el enfoque CAMBRA en cariología?', opciones: ['Control Avanzado de Microorganismos Bucales para la Restauración', 'Caries Management by Risk Assessment (manejo de caries basado en evaluación de riesgo)', 'Control Aplicado de Materiales para Restauraciones Adhesivas', 'Clasificación Avanzada de Manejo de Biofilm Radicular'], correcta: 1 },
      { id: 't6_q2', texto: 'Según CAMBRA, ¿cuál de los siguientes es un factor de riesgo importante para el desarrollo de caries?', opciones: ['Baja frecuencia de ingesta de azúcares', 'Flujo salival normal', 'Alta frecuencia de consumo de azúcares fermentables', 'Uso regular de pasta fluorada'], correcta: 2 },
      { id: 't6_q3', texto: '¿Cuál es el principal mecanismo de acción del flúor en la prevención de caries?', opciones: ['Aumentar la permeabilidad del esmalte', 'Favorecer la desmineralización del esmalte', 'Estimular la actividad bacteriana', 'Promover la remineralización y formar fluorapatita'], correcta: 3 },
      { id: 't6_q4', texto: 'Según CAMBRA, el manejo del paciente con alto riesgo de caries debe incluir principalmente:', opciones: ['Solo restauraciones de las lesiones existentes', 'Medidas preventivas individualizadas según el riesgo', 'Extracción de dientes con lesiones iniciales', 'Suspender el uso de flúor'], correcta: 1 },
      { id: 't6_q5', texto: '¿Cuál es la concentración aproximada de flúor más común en las pastas dentales para adultos?', opciones: ['500 ppm', '1000–1500 ppm', '2500 ppm', '5000 ppm'], correcta: 1 },
      { id: 't6_q6', texto: '¿Cuál es una indicación común del barniz de flúor en odontología preventiva?', opciones: ['Pacientes con bajo riesgo de caries', 'Tratamiento exclusivo de enfermedad periodontal', 'Pacientes con alto riesgo de caries o lesiones iniciales', 'Sustituir completamente el cepillado dental'], correcta: 2 },
      { id: 't6_q7', texto: 'En el enfoque CAMBRA, los factores protectores incluyen:', opciones: ['Flujo salival adecuado y uso de flúor', 'Consumo frecuente de azúcares', 'Bajo nivel de higiene oral', 'Presencia de placa bacteriana abundante'], correcta: 0 },
      { id: 't6_q8', texto: '¿Cuál es el objetivo principal del manejo de caries basado en riesgo (CAMBRA)?', opciones: ['Eliminar todos los dientes con lesiones', 'Restaurar todas las superficies dentarias', 'Identificar factores de riesgo y aplicar medidas preventivas personalizadas', 'Reducir el uso de flúor en la población'], correcta: 2 },
      { id: 't6_q9', texto: 'El flúor ayuda a prevenir la caries principalmente porque:', opciones: ['Disminuye la resistencia del esmalte', 'Favorecer la remineralización del esmalte dental', 'Aumenta la solubilidad del esmalte', 'Elimina completamente el biofilm'], correcta: 1 },
      { id: 't6_q10', texto: '¿Cuál de los siguientes pacientes se considera de alto riesgo de caries según CAMBRA?', opciones: ['Paciente sin historia de caries y buena higiene oral', 'Paciente con dieta baja en azúcares', 'Paciente con flujo salival normal y controles periódicos', 'Paciente con caries recientes y consumo frecuente de azúcares'], correcta: 3 }
    ]
  },
  {
    id: 'tema7',
    nombre: 'Oclusión y TTM',
    preguntas: [
      { id: 't7_q1', texto: '¿Cuál es una característica de la oclusión orgánica o funcionalmente estable?', opciones: ['Contactos prematuros en excursiones laterales', 'Desoclusión posterior durante movimientos excéntricos', 'Ausencia total de contacto en máxima intercuspidación', 'Contacto exclusivo en molares durante lateralidad'], correcta: 1 },
      { id: 't7_q2', texto: '¿Qué estructura es la principal responsable de guiar los movimientos mandibulares protrusivos?', opciones: ['Guía canina', 'Guía incisiva', 'Ligamento periodontal', 'Cóndilo mandibular'], correcta: 1 },
      { id: 't7_q3', texto: 'El trastorno temporomandibular (TTM) de origen miofascial se caracteriza principalmente por:', opciones: ['Dolor muscular en los músculos masticatorios', 'Luxación condilar recurrente', 'Anquilosis de la articulación temporomandibular', 'Fractura del cóndilo mandibular'], correcta: 0 },
      { id: 't7_q4', texto: '¿Cuál es una medida inicial recomendada en el manejo del TTM miofascial?', opciones: ['Cirugía inmediata de la ATM', 'Extracción de dientes posteriores', 'Educación del paciente y medidas conservadoras', 'Colocación de implantes dentales'], correcta: 2 },
      { id: 't7_q5', texto: 'La guía canina se refiere a:', opciones: ['Contacto exclusivo de incisivos durante lateralidad', 'Contacto de molares durante protrusión', 'Contacto del canino que desocluye los dientes posteriores en lateralidad', 'Ausencia de contacto dental en excursiones'], correcta: 2 },
      { id: 't7_q6', texto: '¿Cuál de los siguientes es un síntoma frecuente en pacientes con TTM miofascial?', opciones: ['Dolor o fatiga en músculos masticatorios', 'Pérdida total de dientes', 'Caries rampantes', 'Movilidad dentaria severa'], correcta: 0 },
      { id: 't7_q7', texto: '¿Cuál es el objetivo de una férula oclusal en pacientes con TTM?', opciones: ['Reemplazar dientes perdidos', 'Reducir la carga sobre la musculatura y la articulación temporomandibular', 'Aumentar la fuerza masticatoria', 'Cambiar permanentemente la oclusión dental'], correcta: 1 },
      { id: 't7_q8', texto: 'Durante la máxima intercuspidación en una oclusión estable, los contactos dentarios deberían ser:', opciones: ['Unilaterales', 'Equilibrados y estables', 'Solo en dientes anteriores', 'Solo en premolares'], correcta: 1 },
      { id: 't7_q9', texto: '¿Cuál de los siguientes hábitos puede contribuir al desarrollo de TTM?', opciones: ['Cepillado dental adecuado', 'Consumo moderado de agua', 'Bruxismo o apretamiento dental', 'Uso de hilo dental'], correcta: 2 },
      { id: 't7_q10', texto: 'En el manejo inicial del dolor miofascial asociado a TTM se recomienda frecuentemente:', opciones: ['Reposo mandibular, calor local y ejercicios suaves', 'Cirugía de la articulación temporomandibular', 'Extracción de molares', 'Reemplazo inmediato con prótesis fija'], correcta: 0 }
    ]
  },
  {
    id: 'tema8',
    nombre: 'Medicina oral y patología',
    preguntas: [
      { id: 't8_q1', texto: '¿Cómo se define clínicamente la leucoplasia oral según la OMS?', opciones: ['Lesión ulcerada dolorosa asociada a infección bacteriana', 'Placa blanca que no puede desprenderse ni clasificarse clínicamente como otra enfermedad', 'Mancha roja asociada exclusivamente a trauma mecánico', 'Lesión pigmentada causada por acumulación de melanina'], correcta: 1 },
      { id: 't8_q2', texto: '¿Cuál de las siguientes lesiones potencialmente malignas tiene mayor riesgo de transformación maligna?', opciones: ['Leucoplasia homogénea', 'Hiperqueratosis por fricción', 'Eritroplasia', 'Liquen plano reticular'], correcta: 2 },
      { id: 't8_q3', texto: '¿Cuál es el principal factor de riesgo asociado al desarrollo de leucoplasia oral?', opciones: ['Consumo de tabaco', 'Cepillado dental frecuente', 'Consumo de agua', 'Uso de hilo dental'], correcta: 0 },
      { id: 't8_q4', texto: 'Clínicamente, la eritroplasia se caracteriza por:', opciones: ['Placa blanca queratósica', 'Lesión pigmentada marrón', 'Área roja aterciopelada bien delimitada', 'Lesión vesicular recurrente'], correcta: 2 },
      { id: 't8_q5', texto: '¿Cuál es el examen diagnóstico definitivo para evaluar displasia o malignidad en una lesión sospechosa?', opciones: ['Radiografía panorámica', 'Biopsia con estudio histopatológico', 'Prueba de vitalidad pulpar', 'Examen periodontal'], correcta: 1 },
      { id: 't8_q6', texto: '¿En qué localización oral las lesiones potencialmente malignas presentan mayor riesgo de transformación?', opciones: ['Paladar duro', 'Encía adherida', 'Borde lateral de la lengua y piso de boca', 'Superficie vestibular de molares'], correcta: 2 },
      { id: 't8_q7', texto: '¿Cuál de los siguientes hallazgos clínicos aumenta la sospecha de transformación maligna en una leucoplasia?', opciones: ['Superficie lisa y homogénea', 'Coloración blanco uniforme', 'Presencia de áreas rojas o ulceradas', 'Desaparición espontánea'], correcta: 2 },
      { id: 't8_q8', texto: 'El término “lesión potencialmente maligna” en cavidad oral se refiere a:', opciones: ['Lesiones benignas sin riesgo de transformación', 'Alteraciones con riesgo aumentado de desarrollar cáncer oral', 'Lesiones infecciosas agudas', 'Lesiones traumáticas reversibles'], correcta: 1 },
      { id: 't8_q9', texto: 'Además del tabaco, ¿qué otro factor de riesgo importante se asocia al cáncer oral?', opciones: ['Consumo excesivo de alcohol', 'Consumo de frutas', 'Cepillado dental frecuente', 'Uso de enjuague bucal'], correcta: 0 },
      { id: 't8_q10', texto: 'Ante una lesión roja persistente sospechosa de eritroplasia que no desaparece tras eliminar irritantes locales, la conducta clínica más adecuada es:', opciones: ['Observar durante varios años', 'Indicar solo enjuagues bucales', 'Realizar biopsia para estudio histopatológico', 'Pulir la superficie dental cercana'], correcta: 2 }
    ]
  },
  {
    id: 'tema9',
    nombre: 'Radiología / CBCT',
    preguntas: [
      { id: 't9_q1', texto: '¿Qué significa el principio ALARA en radiología odontológica?', opciones: ['Aplicar la mayor radiación posible para mejorar la imagen', 'Mantener la dosis de radiación tan baja como razonablemente sea posible', 'Evitar completamente el uso de radiografías', 'Usar radiación solo en pacientes adultos'], correcta: 1 },
      { id: 't9_q2', texto: '¿Cuál es una indicación frecuente del CBCT en odontología?', opciones: ['Evaluación tridimensional para planificación de implantes', 'Diagnóstico de caries interproximales simples', 'Control rutinario de higiene oral', 'Evaluación de cálculo supragingival'], correcta: 0 },
      { id: 't9_q3', texto: 'Una de las principales ventajas del CBCT en comparación con radiografías bidimensionales es:', opciones: ['Menor costo que todas las radiografías convencionales', 'Capacidad de obtener imágenes tridimensionales de estructuras maxilofaciales', 'Ausencia total de radiación', 'No requiere interpretación profesional'], correcta: 1 },
      { id: 't9_q4', texto: '¿Cuál es una limitación importante del CBCT?', opciones: ['No permite visualizar estructuras óseas', 'Tiene menor resolución para tejidos blandos', 'No puede utilizarse en implantología', 'No permite reconstrucciones tridimensionales'], correcta: 1 },
      { id: 't9_q5', texto: 'Según el principio ALARA, el odontólogo debe:', opciones: ['Solicitar CBCT a todos los pacientes', 'Evitar cualquier estudio radiográfico', 'Justificar cada examen radiográfico y optimizar la dosis', 'Utilizar siempre la mayor resolución disponible'], correcta: 2 },
      { id: 't9_q6', texto: '¿Cuál de las siguientes situaciones es una indicación común para CBCT en endodoncia?', opciones: ['Diagnóstico de fracturas radiculares complejas', 'Detección inicial de placa bacteriana', 'Evaluación de sensibilidad dental', 'Control del cepillado dental'], correcta: 0 },
      { id: 't9_q7', texto: 'En comparación con una radiografía periapical, el CBCT generalmente:', opciones: ['Entrega menor dosis de radiación en todos los casos', 'Proporciona información tridimensional de la anatomía', 'No permite medir estructuras', 'Solo se utiliza en ortodoncia'], correcta: 1 },
      { id: 't9_q8', texto: '¿Qué significa optimizar el campo de visión (FOV) en CBCT?', opciones: ['Aumentar el área irradiada al máximo', 'Seleccionar el campo de imagen más pequeño necesario para el diagnóstico', 'Usar siempre el mismo campo de visión', 'Evitar la reconstrucción de imágenes'], correcta: 1 },
      { id: 't9_q9', texto: '¿Cuál es una indicación del CBCT en cirugía oral?', opciones: ['Evaluar la relación entre terceros molares y el conducto dentario inferior', 'Diagnóstico de gingivitis leve', 'Detección de cálculo supragingival', 'Evaluación de placa bacteriana'], correcta: 0 },
      { id: 't9_q10', texto: '¿Cuál de los siguientes factores se debe considerar antes de solicitar un CBCT?', opciones: ['La justificación clínica del examen', 'La preferencia estética del paciente', 'El color de los dientes', 'La marca del equipo dental'], correcta: 0 }
    ]
  },
  {
    id: 'tema10',
    nombre: 'Control de infecciones y esterilización',
    preguntas: [
      { id: 't10_q1', texto: '¿Cuál es el método de esterilización más utilizado en odontología para instrumental crítico?', opciones: ['Autoclave de vapor a presión', 'Radiación ultravioleta', 'Inmersión en alcohol', 'Lavado con agua destilada'], correcta: 0 },
      { id: 't10_q2', texto: '¿Cuál es el objetivo principal del empaquetado del instrumental antes de la esterilización?', opciones: ['Mejorar la apariencia del instrumental', 'Permitir mantener la esterilidad hasta el momento de uso', 'Reducir el peso del instrumental', 'Facilitar el transporte fuera de la clínica'], correcta: 1 },
      { id: 't10_q3', texto: '¿Qué parámetro es fundamental para asegurar la eficacia del autoclave?', opciones: ['Color del instrumental', 'Presión, temperatura y tiempo adecuados', 'Cantidad de agua en el lavamanos', 'Tipo de bandeja utilizada'], correcta: 1 },
      { id: 't10_q4', texto: '¿Qué tipo de indicador verifica que se alcanzaron las condiciones de esterilización dentro del paquete?', opciones: ['Indicador biológico', 'Indicador químico interno', 'Registro manual del operador', 'Control visual externo'], correcta: 1 },
      { id: 't10_q5', texto: '¿Qué evalúan los indicadores biológicos utilizados en el control de esterilización?', opciones: ['La presencia de bacterias resistentes a la esterilización', 'La presión de la cámara', 'El tiempo de secado del instrumental', 'La limpieza del instrumental'], correcta: 0 },
      { id: 't10_q6', texto: 'La trazabilidad en esterilización se refiere a:', opciones: ['Registrar el costo del instrumental', 'Identificar y registrar el ciclo de esterilización asociado a cada instrumental o paciente', 'Controlar la temperatura ambiente de la clínica', 'Medir la humedad del consultorio'], correcta: 1 },
      { id: 't10_q7', texto: 'Antes de la esterilización en autoclave, el instrumental debe:', opciones: ['Ser limpiado y secado adecuadamente', 'Ser colocado directamente en el autoclave sin limpieza', 'Ser sumergido solo en agua', 'Ser almacenado durante 24 horas'], correcta: 0 },
      { id: 't10_q8', texto: '¿Cuál es una práctica correcta para mantener la esterilidad del instrumental empaquetado?', opciones: ['Abrir los paquetes para revisar el contenido', 'Almacenarlo en un área limpia y seca', 'Guardar los paquetes húmedos', 'Manipularlos sin guantes'], correcta: 1 },
      { id: 't10_q9', texto: '¿Qué sucede si el paquete de esterilización se humedece o se rompe?', opciones: ['Se considera aún estéril', 'Debe considerarse contaminado y reprocesarse', 'Puede utilizarse solo en urgencias', 'Debe almacenarse por más tiempo'], correcta: 1 },
      { id: 't10_q10', texto: '¿Cuál es la función del indicador químico externo en los paquetes de esterilización?', opciones: ['Confirmar la esterilidad absoluta del instrumental', 'Indicar que el paquete fue expuesto al proceso de esterilización', 'Medir la presión del autoclave', 'Determinar la duración del ciclo'], correcta: 1 }
    ]
  },
  {
    id: 'tema11',
    nombre: 'Urgencias médicas en odontología',
    preguntas: [
      { id: 't11_q1', texto: '¿Cuál es el medicamento de primera elección en el manejo de una anafilaxia en el consultorio odontológico?', opciones: ['Antihistamínicos orales', 'Adrenalina (epinefrina)', 'Ibuprofeno', 'Paracetamol'], correcta: 1 },
      { id: 't11_q2', texto: '¿Cuál es un signo temprano común de hipoglicemia en un paciente durante la atención odontológica?', opciones: ['Confusión, sudoración y temblor', 'Hipertensión severa', 'Dolor torácico intenso', 'Midriasis fija'], correcta: 0 },
      { id: 't11_q3', texto: 'Ante un paciente consciente con hipoglicemia en el consultorio, la primera medida es:', opciones: ['Administrar insulina', 'Indicar ejercicio físico', 'Administrar glucosa o azúcar por vía oral', 'Aplicar anestesia local'], correcta: 2 },
      { id: 't11_q4', texto: '¿Cuál de los siguientes síntomas es característico de una reacción anafiláctica?', opciones: ['Prurito, urticaria y dificultad respiratoria', 'Dolor dental localizado', 'Caries rampante', 'Movilidad dentaria leve'], correcta: 0 },
      { id: 't11_q5', texto: '¿Cuál es una posible complicación sistémica asociada a la sobredosis de anestesia local?', opciones: ['Convulsiones y toxicidad del sistema nervioso central', 'Aumento de esmalte dental', 'Hipersalivación permanente', 'Caries inmediata'], correcta: 0 },
      { id: 't11_q6', texto: '¿Cuál es el vasoconstrictor más utilizado en anestésicos locales odontológicos?', opciones: ['Atropina', 'Epinefrina (adrenalina)', 'Dopamina', 'Noradrenalina'], correcta: 1 },
      { id: 't11_q7', texto: '¿Qué medida inicial debe tomarse ante sospecha de sobredosis de anestesia local?', opciones: ['Continuar el procedimiento dental', 'Administrar más anestesia', 'Suspender el procedimiento y evaluar signos vitales', 'Indicar enjuague bucal'], correcta: 2 },
      { id: 't11_q8', texto: '¿Cuál de los siguientes síntomas se asocia más frecuentemente a hiperglicemia?', opciones: ['Sudoración fría y temblor', 'Pérdida súbita de conciencia', 'Polidipsia y poliuria', 'Bradicardia severa'], correcta: 2 },
      { id: 't11_q9', texto: 'En el manejo inicial de una anafilaxia, además de administrar adrenalina, se debe:', opciones: ['Colocar al paciente en posición supina y activar emergencias', 'Continuar el tratamiento dental rápidamente', 'Administrar anestesia local adicional', 'Indicar al paciente que camine'], correcta: 0 },
      { id: 't11_q10', texto: '¿Cuál es una medida preventiva importante antes de administrar anestesia local?', opciones: ['Ignorar antecedentes médicos', 'Realizar una anamnesis completa y revisar alergias', 'Aplicar anestesia a todos los pacientes de igual forma', 'Evitar el uso de vasoconstrictores en todos los casos'], correcta: 1 }
    ]
  },
  {
    id: 'tema12',
    nombre: 'Protocolos clínicos actualizados',
    preguntas: [
      { id: 't12_q1', texto: 'En protocolos adhesivos contemporáneos con sistemas "etch-and-rinse", ¿cuál es el paso inicial sobre el esmalte?', opciones: ['Aplicación de adhesivo directamente', 'Grabado ácido con ácido fosfórico', 'Aplicación de resina fluida', 'Secado absoluto sin grabado'], correcta: 1 },
      { id: 't12_q2', texto: 'En endodoncia moderna, ¿qué método se utiliza con mayor frecuencia para determinar la longitud de trabajo con mayor precisión?', opciones: ['Solo radiografía panorámica', 'Estimación visual del conducto', 'Localizador apical electrónico complementado con radiografía', 'Medición con explorador periodontal'], correcta: 2 },
      { id: 't12_q3', texto: 'En implantología, ¿cuál es el torque mínimo aproximado recomendado para considerar una carga inmediata?', opciones: ['10 Ncm', '15 Ncm', '35 Ncm', '5 Ncm'], correcta: 2 },
      { id: 't12_q4', texto: 'En protocolos adhesivos, ¿cuál es una causa frecuente de sensibilidad postoperatoria en restauraciones con resina?', opciones: ['Aislamiento absoluto correcto', 'Control adecuado de humedad', 'Sobregrabado dentinario y mala infiltración del adhesivo', 'Polimerización correcta'], correcta: 2 },
      { id: 't12_q5', texto: 'En endodoncia actual, el hipoclorito de sodio (NaOCl) se utiliza principalmente para:', opciones: ['Aumentar la dureza del esmalte', 'Disolver tejido orgánico y desinfectar el conducto', 'Sellar el conducto radicular', 'Lubricar instrumentos rotatorios'], correcta: 1 },
      { id: 't12_q6', texto: 'En implantología, el llamado "gap jumping distance" se refiere a:', opciones: ['La distancia mínima entre dos implantes', 'El espacio entre implante y pared ósea que puede cicatrizar espontáneamente', 'La distancia entre implante y corona protésica', 'La distancia entre implante y nervio alveolar'], correcta: 1 },
      { id: 't12_q7', texto: 'En una emergencia por anafilaxia, ¿cuál es la vía preferida de administración de adrenalina?', opciones: ['Intramuscular en músculo vasto lateral', 'Subcutánea en brazo', 'Intravenosa directa siempre', 'Oral en comprimidos'], correcta: 0 },
      { id: 't12_q8', texto: 'En restauraciones adhesivas actuales, ¿qué técnica se recomienda para disminuir la contracción por polimerización en cavidades profundas?', opciones: ['Colocar toda la resina en un solo incremento', 'Técnica incremental de colocación de resina', 'No fotopolimerizar', 'Usar solo ionómero de vidrio'], correcta: 1 },
      { id: 't12_q9', texto: 'En endodoncia mecanizada con limas de NiTi, una ventaja importante es:', opciones: ['Mayor riesgo de fractura radicular', 'Mayor rapidez y mejor conformación del conducto', 'Eliminación completa de la irrigación', 'No requiere control de longitud'], correcta: 1 },
      { id: 't12_q10', texto: 'En implantología moderna, para preservar tejidos blandos y óseos tras una extracción, una estrategia frecuente es:', opciones: ['Esperar varios años antes de colocar implantes', 'Colocar implante inmediato post-extracción cuando está indicado', 'Eliminar todo el hueso alveolar', 'Evitar cualquier tipo de injerto'], correcta: 1 }
    ]
  },
  {
    id: 'tema13',
    nombre: 'Decreto con Fuerza de Ley N°1 de 1980',
    preguntas: [
      { id: 't13_q1', texto: 'El Decreto con Fuerza de Ley N°1 de 1980 establece principalmente normas relacionadas con:', opciones: ['La organización del sistema nacional de salud y funciones de sus organismos', 'La regulación del tránsito vehicular', 'La administración de universidades privadas', 'La legislación laboral general'], correcta: 0 },
      { id: 't13_q2', texto: 'Según el DFL N°1 de 1980, el Ministerio de Salud tiene como función principal:', opciones: ['Administrar directamente todas las clínicas privadas', 'Formular y fijar las políticas de salud del país', 'Controlar el comercio exterior', 'Regular el sistema bancario'], correcta: 1 },
      { id: 't13_q3', texto: 'El DFL N°1 de 1980 establece que los Servicios de Salud tienen como objetivo:', opciones: ['Regular únicamente farmacias privadas', 'Administrar la atención primaria municipal', 'Ejecutar acciones de salud dentro de su territorio jurisdiccional', 'Supervisar universidades'], correcta: 2 },
      { id: 't13_q4', texto: 'Dentro del sistema de salud chileno, la autoridad sanitaria tiene facultades para:', opciones: ['Fiscalizar establecimientos de salud', 'Regular partidos políticos', 'Administrar empresas mineras', 'Autorizar importaciones industriales'], correcta: 0 },
      { id: 't13_q5', texto: 'Según la normativa sanitaria, la autoridad sanitaria regional corresponde a:', opciones: ['El Ministerio de Educación', 'Las Secretarías Regionales Ministeriales de Salud (SEREMI)', 'El Ministerio de Justicia', 'Las municipalidades exclusivamente'], correcta: 1 },
      { id: 't13_q6', texto: 'El DFL N°1 de 1980 forma parte del marco legal que regula:', opciones: ['El sistema de salud pública en Chile', 'La defensa nacional', 'El comercio internacional', 'La legislación tributaria'], correcta: 0 },
      { id: 't13_q7', texto: 'Una función de los Servicios de Salud según el DFL N°1 es:', opciones: ['Organizar, dirigir y ejecutar acciones de salud', 'Administrar bancos privados', 'Supervisar universidades privadas', 'Regular la producción agrícola'], correcta: 0 },
      { id: 't13_q8', texto: 'La fiscalización sanitaria de establecimientos de salud corresponde principalmente a:', opciones: ['El Congreso Nacional', 'La Autoridad Sanitaria', 'El Ministerio de Economía', 'Las Fuerzas Armadas'], correcta: 1 },
      { id: 't13_q9', texto: 'El DFL N°1 de 1980 establece que la protección de la salud de la población es:', opciones: ['Una responsabilidad exclusiva del sector privado', 'Una función esencial del Estado', 'Una responsabilidad exclusiva de municipalidades', 'Una función solo de hospitales universitarios'], correcta: 1 },
      { id: 't13_q10', texto: 'Dentro de las atribuciones de la autoridad sanitaria está:', opciones: ['Dictar medidas sanitarias para proteger la salud pública', 'Regular elecciones nacionales', 'Controlar el sistema financiero', 'Administrar el sistema judicial'], correcta: 0 }
    ]
  },
  {
    id: 'tema14',
    nombre: 'Ley N° 19.653',
    preguntas: [
      { id: 't14_q1', texto: 'La Ley N° 19.653 establece principalmente normas sobre:', opciones: ['Procedimientos penales', 'Probidad administrativa aplicable a los órganos del Estado', 'Regulación del sistema educacional', 'Funcionamiento del sistema bancario'], correcta: 1 },
      { id: 't14_q2', texto: 'Según la Ley N° 19.653, el principio de probidad administrativa implica:', opciones: ['Actuar con interés personal en las decisiones públicas', 'Dar prioridad a beneficios privados', 'Observar una conducta intachable y desempeño honesto de la función pública', 'Delegar todas las decisiones en subordinados'], correcta: 2 },
      { id: 't14_q3', texto: 'La probidad administrativa exige que los funcionarios públicos:', opciones: ['Utilicen los recursos del Estado para fines personales', 'Actúen privilegiando el interés general por sobre el particular', 'Eviten cumplir funciones administrativas', 'Tomen decisiones solo en beneficio de su institución'], correcta: 1 },
      { id: 't14_q4', texto: 'Según la Ley N° 19.653, el conflicto de interés ocurre cuando:', opciones: ['Un funcionario cumple estrictamente la ley', 'Un funcionario recibe capacitación laboral', 'Existen intereses personales que pueden influir en el ejercicio de la función pública', 'Se cumplen los procedimientos administrativos'], correcta: 2 },
      { id: 't14_q5', texto: 'Una medida establecida por la Ley N° 19.653 para promover la probidad es:', opciones: ['La declaración de intereses y patrimonio de ciertos funcionarios', 'La eliminación de controles administrativos', 'La reducción de la fiscalización pública', 'La confidencialidad total de las decisiones públicas'], correcta: 0 },
      { id: 't14_q6', texto: 'El principio de probidad administrativa se aplica principalmente a:', opciones: ['Solo a autoridades políticas', 'Solo a funcionarios municipales', 'A todos los funcionarios y autoridades de la Administración del Estado', 'Solo a jueces y fiscales'], correcta: 2 },
      { id: 't14_q7', texto: 'Según la Ley N° 19.653, los funcionarios públicos deben:', opciones: ['Actuar con transparencia y responsabilidad en el ejercicio de sus funciones', 'Priorizar beneficios personales', 'Evitar cualquier tipo de fiscalización', 'Delegar todas las responsabilidades'], correcta: 0 },
      { id: 't14_q8', texto: '¿Cuál de los siguientes comportamientos vulnera el principio de probidad administrativa?', opciones: ['Utilizar recursos públicos para fines personales', 'Cumplir con la normativa vigente', 'Actuar con transparencia', 'Declarar intereses cuando corresponde'], correcta: 0 },
      { id: 't14_q9', texto: 'La Ley N° 19.653 busca principalmente:', opciones: ['Regular el sistema tributario', 'Promover la transparencia y probidad en la función pública', 'Modificar el sistema electoral', 'Regular la educación superior'], correcta: 1 },
      { id: 't14_q10', texto: 'Dentro de las obligaciones de probidad administrativa se encuentra:', opciones: ['Ocultar información pública relevante', 'Evitar declarar intereses personales', 'Actuar con imparcialidad y evitar conflictos de interés', 'Utilizar información privilegiada para beneficio personal'], correcta: 2 }
    ]
  },
  {
    id: 'tema15',
    nombre: 'Ley N° 18.834',
    preguntas: [
      { id: 't15_q1', texto: 'La Ley N° 18.834 corresponde al:', opciones: ['Código Sanitario', 'Estatuto Administrativo que regula a los funcionarios públicos', 'Código del Trabajo', 'Ley de Municipalidades'], correcta: 1 },
      { id: 't15_q2', texto: 'Según la Ley N° 18.834, ¿qué regula principalmente el Estatuto Administrativo?', opciones: ['Las relaciones laborales del sector privado', 'Los derechos, deberes y responsabilidades de los funcionarios públicos', 'Las normas tributarias del Estado', 'El sistema judicial'], correcta: 1 },
      { id: 't15_q3', texto: '¿Cuál de los siguientes es un deber de los funcionarios públicos según la Ley N° 18.834?', opciones: ['Cumplir fielmente las funciones del cargo', 'Utilizar bienes públicos para fines personales', 'Evitar cumplir instrucciones de la jefatura', 'Delegar todas sus responsabilidades'], correcta: 0 },
      { id: 't15_q4', texto: 'Según el Estatuto Administrativo, los funcionarios públicos deben actuar conforme al principio de:', opciones: ['Probidad administrativa', 'Competencia comercial', 'Libre mercado', 'Rentabilidad financiera'], correcta: 0 },
      { id: 't15_q5', texto: '¿Cuál de las siguientes constituye una sanción disciplinaria contemplada en la Ley N° 18.834?', opciones: ['Ascenso automático', 'Multa o suspensión del empleo', 'Bonificación especial', 'Aumento de remuneración'], correcta: 1 },
      { id: 't15_q6', texto: '¿Qué procedimiento se utiliza para investigar faltas administrativas de un funcionario?', opciones: ['Investigación sumaria o sumario administrativo', 'Juicio civil', 'Auditoría tributaria', 'Consulta popular'], correcta: 0 },
      { id: 't15_q7', texto: '¿Cuál de los siguientes derechos tienen los funcionarios públicos según la Ley N° 18.834?', opciones: ['Derecho a remuneración por sus funciones', 'Derecho a utilizar recursos públicos libremente', 'Derecho a ignorar instrucciones superiores', 'Derecho a no cumplir horarios laborales'], correcta: 0 },
      { id: 't15_q8', texto: 'Según el Estatuto Administrativo, el ingreso a la administración pública debe realizarse mediante:', opciones: ['Nombramiento sin requisitos', 'Designación familiar', 'Proceso de selección basado en mérito', 'Sorteo público'], correcta: 2 },
      { id: 't15_q9', texto: '¿Cuál de las siguientes conductas constituye una falta a las obligaciones funcionarias?', opciones: ['Cumplir las instrucciones de la jefatura', 'Desempeñar el cargo con diligencia', 'Utilizar bienes del Estado para fines personales', 'Respetar normas administrativas'], correcta: 2 },
      { id: 't15_q10', texto: 'Según la Ley N° 18.834, la responsabilidad administrativa de un funcionario puede determinarse mediante:', opciones: ['Un sumario administrativo', 'Una encuesta pública', 'Una votación popular', 'Un contrato privado'], correcta: 0 }
    ]
  }
];
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface QuestionData {
  text: string;
  answers: {
    text: string;
    isCorrect: boolean;
  }[];
  imageUrl?: string;
}

const questions: QuestionData[] = [
  // Cuestionario 3
  {
    text: "¿Cómo puede prevenir usted el riesgo de incendio de su vehículo?",
    answers: [
      { text: "Manteniendo los niveles de agua sobre el máximo.", isCorrect: false },
      { text: "Evitando conducir con el estanque lleno de combustible.", isCorrect: false },
      { text: "Usando gasolina sin plomo.", isCorrect: false },
      { text: "Revisando su vehículo ante cualquier olor a gasolina extraño.", isCorrect: true }
    ]
  },
  {
    text: "¿Por qué los neumáticos deben mantenerse a la presión indicada por el fabricante?",
    answers: [
      { text: "Para que el vehículo se mantenga a la altura correcta sobre la vía.", isCorrect: false },
      { text: "Para no desgastar el motor.", isCorrect: false },
      { text: "Para ayudar a evitar que el automóvil se roncee.", isCorrect: true },
      { text: "Para evitar que el automóvil se incline hacia un lado.", isCorrect: false }
    ]
  },
  {
    text: "La profundidad de los surcos de los neumáticos de un automóvil no debería ser inferior a …",
    answers: [
      { text: "5.0 mm", isCorrect: false },
      { text: "4.0 mm", isCorrect: false },
      { text: "1.6 mm", isCorrect: true },
      { text: "1.0 mm", isCorrect: false }
    ]
  },
  {
    text: "En un pavimento mojado, ¿influye el estado de los neumáticos en la distancia de frenado de su vehículo?",
    answers: [
      { text: "No, la distancia de frenado depende sólo de la velocidad.", isCorrect: false },
      { text: "No, porque una vez que se acciona el freno la distancia de frenado es siempre la misma para cada vehículo.", isCorrect: false },
      { text: "Sí, a mayor desgaste de los neumáticos menor es dicha distancia.", isCorrect: false },
      { text: "Sí, porque el mayor o menor desgaste de los neumáticos, entre otros factores, determinará que dicha distancia sea mayor o menor.", isCorrect: true }
    ]
  },
  {
    text: "¿Cuáles 2 de las siguientes afirmaciones son verdaderas?",
    answers: [
      { text: "A mayor velocidad, mayor es el consumo del líquido de frenos.", isCorrect: false },
      { text: "Los frenos antibloqueo tienen la ventaja de impedir que las ruedas queden bloqueadas al frenar fuertemente.", isCorrect: true },
      { text: "El consumo del líquido de frenos depende de la cantidad e intensidad de las frenadas.", isCorrect: false },
      { text: "El líquido de frenos no se consume y si disminuye es porque hay algún defecto.", isCorrect: true },
      { text: "Lo mejor es que el pedal de freno se sienta elástico.", isCorrect: false }
    ]
  },
  {
    text: "La distancia de detención total es igual a la suma de la distancia de reacción y la de frenado. Aproximadamente, ¿cuál es la mínima distancia de detención total en un asfalto seco, si usted viaja a 90 km/h?",
    answers: [
      { text: "Unos 50 metros", isCorrect: false },
      { text: "Unos 70 metros", isCorrect: false },
      { text: "Unos 30 metros", isCorrect: false },
      { text: "Unos 120 metros", isCorrect: true }
    ]
  },
  {
    text: "La distancia de frenado es la distancia que recorre un vehículo desde que se presiona el freno hasta que el vehículo se detiene. De las siguientes variables, ¿cuáles influyen en la distancia de frenado?",
    answers: [
      { text: "La velocidad.", isCorrect: true },
      { text: "El alumbrado público.", isCorrect: false },
      { text: "El estado de los frenos y neumáticos.", isCorrect: true },
      { text: "Las condiciones climáticas.", isCorrect: true },
      { text: "La hora del día.", isCorrect: false }
    ]
  },
  {
    text: "¿Cuál o cuáles característica(s) distingue(n) a un conductor seguro?",
    answers: [
      { text: "Conduce con prudencia y hace todo lo posible por evitar accidentes.", isCorrect: true },
      { text: "Es considerado y amable con los demás conductores y con los peatones.", isCorrect: true },
      { text: "Es respetuoso, no obstaculiza ni perturba al resto.", isCorrect: true },
      { text: "Conduce con buen criterio.", isCorrect: true }
    ]
  },
  {
    text: "En cuanto a la concentración de alcohol en la sangre de una persona que ingiere la misma cantidad en ocasiones diferentes, ¿cuál de las siguientes afirmaciones es falsa?",
    answers: [
      { text: "Aunque la persona beba la misma cantidad de alcohol cada ocasión, la concentración de éste en su sangre puede ser diferente.", isCorrect: false },
      { text: "La concentración de alcohol depende de cuánto se come en cada ocasión.", isCorrect: false },
      { text: "Entre otros factores, la concentración de alcohol también depende del tiempo que dura la ingestión cada vez.", isCorrect: false },
      { text: "Si la cantidad de alcohol ingerida en cada ocasión es exactamente la misma, la concentración de alcohol en la sangre también será la misma.", isCorrect: true }
    ]
  },
  {
    text: "De los siguientes efectos, ¿cuál no es consecuencia del consumo de alcohol antes de conducir?",
    answers: [
      { text: "Falsa sensación de confianza.", isCorrect: false },
      { text: "Mayor conciencia del peligro.", isCorrect: true },
      { text: "Menor control del vehículo.", isCorrect: false },
      { text: "Escaso juicio de la velocidad.", isCorrect: false }
    ]
  },
  {
    text: "Usted se aproxima a una curva hacia la izquierda. ¿Qué debería hacer?",
    answers: [
      { text: "Mantenerse bien a la derecha ya que así tardará menos en pasar la curva.", isCorrect: false },
      { text: "Mantenerse bien a la derecha para tener una mejor visual sobre la curva.", isCorrect: true },
      { text: "Mantenerse bien a la izquierda para evitar cualquier obstáculo que pueda haber en la cuneta.", isCorrect: false },
      { text: "Mantenerse bien a la izquierda para hacer la curva menos pronunciada.", isCorrect: false }
    ]
  },
  {
    text: "Usted va conduciendo al lado de una fila de autos estacionados. De pronto ve una pelota rebotando en la calzada un poco más adelante. ¿Qué debería hacer usted?",
    answers: [
      { text: "Continuar a la misma velocidad, tocando la bocina.", isCorrect: false },
      { text: "Continuar a la misma velocidad, pero encendiendo y apagando sus luces delanteras.", isCorrect: false },
      { text: "Detenerse y señalar con la mano para que los niños crucen a recoger la pelota.", isCorrect: false },
      { text: "Disminuir la velocidad y estar preparado para detenerse si aparece un niño.", isCorrect: true }
    ],
    imageUrl: "/images/questions/img-015.png"
  },
  {
    text: "Al adelantar en un camino a una manada de ovejas, ¿qué hace usted?",
    answers: [
      { text: "Deja un espacio lateral suficiente.", isCorrect: true },
      { text: "Adelanta rápidamente y sin vacilaciones.", isCorrect: false },
      { text: "Conduce lentamente.", isCorrect: true },
      { text: "Toca la bocina levemente.", isCorrect: false },
      { text: "Está preparado para detenerse.", isCorrect: true }
    ]
  },
  {
    text: "En esta situación, ¿a cuáles 3 riesgos debe estar usted principalmente atento?",
    answers: [
      { text: "Al ciclista que viene en sentido contrario.", isCorrect: false },
      { text: "Al tránsito en la intersección que hay más adelante.", isCorrect: true },
      { text: "A las puertas de autos que pueden ser abiertas.", isCorrect: true },
      { text: "A niños que pueden salir a la calzada por entre los autos.", isCorrect: true },
      { text: "A los vehículos que pueden venir detrás suyo.", isCorrect: false },
      { text: "A irregularidades de la superficie de calzada.", isCorrect: false }
    ]
  },
  {
    text: "Usted llega a una intersección regulada por semáforo que se encuentra en rojo y, al mismo tiempo, un Carabinero le indica que avance, ¿qué debe hacer usted?",
    answers: [
      { text: "Detenerse, porque la luz roja se lo está indicando.", isCorrect: false },
      { text: "Avanzar, porque las instrucciones de un Carabinero prevalecen sobre las señales del tránsito.", isCorrect: true },
      { text: "Avanzar, sólo si detrás suyo no vienen otros vehículos.", isCorrect: false },
      { text: "Avanzar, sólo si está seguro que la luz roja está próxima a cambiar.", isCorrect: false }
    ]
  },
  {
    text: "Usted va por una calle de doble sentido de tránsito. Para virar a la izquierda, ¿dónde debería ubicarse?",
    answers: [
      { text: "Lo más a la derecha posible.", isCorrect: false },
      { text: "Justo a la izquierda de la línea de centro de calzada.", isCorrect: true },
      { text: "Justo a la derecha de la línea de centro de calzada.", isCorrect: false }
    ]
  },
  {
    text: "Usted va detrás de un camión articulado que va a doblar a la derecha hacia una vía angosta. ¿Qué debe hacer usted?",
    answers: [
      { text: "Desplazarse rápidamente hacia la pista adyacente y sobrepasarlo.", isCorrect: false },
      { text: "Tocar la bocina para advertir su presencia.", isCorrect: false },
      { text: "Sobrepasarlo por la derecha mientras él se desplace hacia la izquierda.", isCorrect: false },
      { text: "Mantenerse detrás de él hasta que finalice su maniobra.", isCorrect: true }
    ],
    imageUrl: "/images/questions/img-020.png"
  },
  {
    text: "Antes de adelantar a un vehículo de gran tamaño usted debería mantenerse suficientemente atrás de él. ¿Por qué?",
    answers: [
      { text: "Para tener una mejor visual hacia adelante sobre la vía.", isCorrect: true },
      { text: "Para tener espacio suficiente que le permita acelerar y adelantar en las curvas.", isCorrect: false },
      { text: "Para tener espacio suficiente en caso que el vehículo se detenga y retroceda.", isCorrect: false },
      { text: "Para poder ver mejor las señales que le pueda hacer su conductor.", isCorrect: false }
    ]
  },
  {
    text: "Como norma general, antes de tomar una curva cerrada, usted debe …",
    answers: [
      { text: "Acelerar para salir cuanto antes de ella.", isCorrect: false },
      { text: "Acelerar para luego reducir la velocidad mientras vaya saliendo de ella.", isCorrect: false },
      { text: "Disminuir la velocidad, pero sólo si la calzada está mojada.", isCorrect: false },
      { text: "Disminuir la velocidad, para luego acelerar gradualmente mientras la va recorriendo.", isCorrect: true }
    ]
  },
  {
    text: "Como regla general, ¿en cuál o cuáles de los siguientes lugares nunca debe estacionar?",
    answers: [
      { text: "En un paso de peatones.", isCorrect: true },
      { text: "En un puente.", isCorrect: true },
      { text: "A menos de 10 metros de una esquina.", isCorrect: false },
      { text: "Al costado derecho de una vía urbana.", isCorrect: false },
      { text: "En o al llegar a una parada de locomoción colectiva.", isCorrect: true }
    ]
  },
  {
    text: "Usted conduce un vehículo de marcha lenta por un camino angosto y sinuoso. En estas circunstancias, usted debería …",
    answers: [
      { text: "Circular cerca del centro de la calzada para evitar que otros lo adelanten peligrosamente.", isCorrect: false },
      { text: "Correrse hacia la derecha cuando pueda hacerlo en forma segura, para permitir que otros lo adelanten.", isCorrect: true },
      { text: "Hacer indicaciones con la mano a los otros conductores cuando usted crea que podrán adelantarlo rápidamente.", isCorrect: false },
      { text: "Señalizar con su intermitente derecho cuando adelantar no sea peligroso para los otros.", isCorrect: false }
    ]
  },
  {
    text: "En una zona rural, usted va conduciendo por un camino muy angosto. ¿Dónde le resultaría más difícil ver personas a caballo que avanzan delante suyo?",
    answers: [
      { text: "Al ir usted bajando un cerro.", isCorrect: false },
      { text: "Al ir ellas subiendo un cerro.", isCorrect: true },
      { text: "Al ir usted en una curva a la izquierda.", isCorrect: false },
      { text: "Al ir usted en una curva a la derecha.", isCorrect: false }
    ]
  },
  {
    text: "Usted se detiene ante un cruce cebra. En la vereda hay peatones esperando, pero ellos no comienzan a cruzar. ¿Qué hace usted?",
    answers: [
      { text: "Les toca la bocina para apurarlos.", isCorrect: false },
      { text: "Tiene paciencia y espera.", isCorrect: true },
      { text: "Prosigue su marcha.", isCorrect: false },
      { text: "Les hace señas con la mano apurándolos para que crucen.", isCorrect: false }
    ]
  },
  {
    text: "En un cruce hay peatones atravesando la calle hacia la cual usted está virando. ¿Qué hace usted?",
    answers: [
      { text: "Espera permitiéndoles que crucen.", isCorrect: true },
      { text: "Continúa ya que usted tiene el derecho preferente de paso.", isCorrect: false },
      { text: "Les hace señas para que retrocedan.", isCorrect: false },
      { text: "Les toca la bocina para advertirles su presencia.", isCorrect: false }
    ]
  },
  {
    text: "Usted va circulando a 65 km/h aproximadamente cuando, lamentablemente, atropella a un peatón. A esa velocidad, ….",
    answers: [
      { text: "Es seguro que el peatón morirá.", isCorrect: false },
      { text: "Es muy probable que el peatón muera.", isCorrect: true },
      { text: "Es seguro que el peatón sobrevivirá.", isCorrect: false },
      { text: "Es muy probable que el peatón sobreviva.", isCorrect: false }
    ]
  },
  {
    text: "Cuando es de noche, al adelantar usted debería …",
    answers: [
      { text: "Tener mucho cuidado porque nuestra capacidad visual se ve reducida.", isCorrect: true },
      { text: "Mantener en todo momento sus luces altas.", isCorrect: false },
      { text: "Tocar 2 veces la bocina antes de desplazarse hacia la pista izquierda.", isCorrect: false },
      { text: "Estar muy atento a las curvas que pueda tener el camino.", isCorrect: true },
      { text: "Cambiar de luces altas a bajas repetidas veces antes de iniciar el adelantamiento.", isCorrect: false }
    ]
  },
  {
    text: "Por una carretera, usted circula detrás de otro vehículo. Si la calzada está mojada, ¿qué espacio de tiempo mínimo mantiene usted respecto del vehículo que va adelante?",
    answers: [
      { text: "A lo menos, el equivalente a lo que recorre en 4 segundos.", isCorrect: true },
      { text: "El equivalente a lo que recorre en 1 segundo.", isCorrect: false },
      { text: "El equivalente a lo que recorre en 2 segundos.", isCorrect: false },
      { text: "Como máximo, el equivalente a lo que recorre en 3 segundos.", isCorrect: false }
    ]
  },
  {
    text: "Viajando de noche usted es encandilado por las luces de un vehículo que viene en sentido contrario, ¿qué debería hacer usted?",
    answers: [
      { text: "Bajar su visor de protección solar.", isCorrect: false },
      { text: "Poner luces delanteras altas.", isCorrect: false },
      { text: "Poner su mano sobre sus ojos.", isCorrect: false },
      { text: "Bajar la velocidad y eventualmente detenerse.", isCorrect: true }
    ]
  },
  {
    text: "¿Cómo debería conducir usted en una curva cuando hay hielo en la calzada?",
    answers: [
      { text: "Usando el embrague y el freno al mismo tiempo.", isCorrect: false },
      { text: "Lenta y suavemente.", isCorrect: true },
      { text: "En primera.", isCorrect: false },
      { text: "Frenando a medida que va tomando la curva.", isCorrect: false }
    ]
  },
  {
    text: "Hay mucha neblina y el auto que viene detrás suyo parece estar muy cerca. ¿Qué debería hacer usted?",
    answers: [
      { text: "Encender sus luces de advertencia de peligro.", isCorrect: false },
      { text: "Desplazarse hacia el costado derecho y detenerse de inmediato.", isCorrect: false },
      { text: "Acelerar y alejarse de él.", isCorrect: false },
      { text: "Continuar con mucho cuidado.", isCorrect: true }
    ]
  },
  {
    text: "Marque las alternativas que coinciden con las señales que muestra la imagen.",
    answers: [
      { text: "Dirección obligada", isCorrect: true },
      { text: "Camino sinuoso", isCorrect: false },
      { text: "Mantenga su derecha", isCorrect: true },
      { text: "No adelantar", isCorrect: true },
      { text: "Zona de curvas", isCorrect: false },
      { text: "Curva y contracurva cerrada", isCorrect: false }
    ]
  },
  {
    text: "¿Para qué sirven las señales amarillas con forma de rombo?",
    answers: [
      { text: "Para entregar información.", isCorrect: false },
      { text: "Para dar órdenes.", isCorrect: false },
      { text: "Para indicar direcciones.", isCorrect: false },
      { text: "Para advertir acerca de peligros.", isCorrect: true }
    ]
  },
  {
    text: "¿Cuál de estas señales le previene que más adelante hay una serie de curvas?",
    answers: [
      { text: "A", isCorrect: false },
      { text: "B", isCorrect: false },
      { text: "C", isCorrect: true },
      { text: "D", isCorrect: false }
    ]
  },
  {
    text: "De acuerdo a las circunstancias que se aprecian en la fotografía, ¿sería correcto que el automóvil indicado con la flecha continuara derecho ?",
    answers: [
      { text: "Si", isCorrect: false },
      { text: "No", isCorrect: true }
    ]
  },
  {
    text: "En relación con las infracciones a las normas del tránsito, ¿cuál o cuáles de las siguientes afirmaciones es(son) verdadera(s)?",
    answers: [
      { text: "Infringir las normas sobre uso obligatorio de cinturón de seguridad es una infracción grave.", isCorrect: true },
      { text: "No respetar una señal PARE es una infracción gravísima.", isCorrect: true },
      { text: "La comisión de una infracción gravísima es sancionada no sólo con una multa, sino que también con la suspensión de la licencia de conducir del infractor.", isCorrect: true },
      { text: "Sólo son infracciones gravísimas el no respetar la luz roja del semáforo y exceder el límite de velocidad máxima permitida en más de 20 Km/h.", isCorrect: false },
      { text: "En ningún caso una licencia de conducir puede ser cancelada por el Juez.", isCorrect: false }
    ]
  },
  // Cuestionario 4
  {
    text: "¿Cuándo usaría usted las luces intermitentes de advertencia de peligro?",
    answers: [
      { text: "Cuando esté en pana obstruyendo el tránsito.", isCorrect: true },
      { text: "Cuando se estacione en doble fila respecto a otro vehículo estacionado junto a la cuneta.", isCorrect: false },
      { text: "Cuando estacione junto a una cuneta en la que hay línea amarilla pintada.", isCorrect: false },
      { text: "Cuando sus señalizadores de viraje no estén funcionando.", isCorrect: false }
    ]
  },
  {
    text: "Usted está probando la suspensión de su vehículo cuando nota que éste rebota u oscila al cargarlo en un extremo lateral frontal. ¿Qué significa esto?",
    answers: [
      { text: "Neumáticos gastados.", isCorrect: false },
      { text: "Neumáticos poco inflados.", isCorrect: false },
      { text: "Volante de dirección no centrado.", isCorrect: false },
      { text: "Amortiguadores gastados.", isCorrect: true }
    ]
  },
  {
    text: "¿Cuál o cuáles de las siguientes afirmaciones es(son) verdadera(s)?",
    answers: [
      { text: "Cuando el motor no está siendo lubricado se enciende una luz en el panel de instrumentos del vehículo.", isCorrect: true },
      { text: "Una batería mal cargada hace que el vehículo tenga dificultades para arrancar.", isCorrect: true },
      { text: "Casi siempre, el motor se enfría con un líquido refrigerante que circula por canales en el bloque del motor.", isCorrect: true },
      { text: "Una temperatura del motor demasiado alta puede deberse a que se haya roto la correa de la bomba de agua.", isCorrect: true }
    ]
  },
  {
    text: "Usted está próximo a descender por una pendiente muy pronunciada. ¿Qué debería hacer para controlar la velocidad de su vehículo?",
    answers: [
      { text: "Seleccionar un cambio bajo y usar los frenos cuidadosamente.", isCorrect: true },
      { text: "Seleccionar un cambio alto y usar los frenos cuidadosamente.", isCorrect: false },
      { text: "Seleccionar un cambio alto y usar los frenos firmemente.", isCorrect: false },
      { text: "Seleccionar un cambio bajo y evitar usar los frenos.", isCorrect: false }
    ]
  },
  {
    text: "¿Cuál o cuáles de las siguientes afirmaciones es(son) verdadera(s) en cuanto al desarrollo de la moral de un individuo?",
    answers: [
      { text: "Durante la infancia, antes de llegar a la edad escolar, las personas son egocéntricas y piensan sobre todo en ellas mismas.", isCorrect: true },
      { text: "Los conocimientos y la experiencia hacen que las personas se vuelvan más comprensivas.", isCorrect: true },
      { text: "Como la moral de las personas es algo innato, no se puede cambiar.", isCorrect: false },
      { text: "El comportamiento que tiene una persona como conductor muestra cuánto ha avanzado en el desarrollo de su moral.", isCorrect: true }
    ]
  },
  {
    text: "¿Cuál o cuáles característica(s) distingue(n) a un conductor seguro?",
    answers: [
      { text: "Conduce con prudencia y hace todo lo posible por evitar accidentes.", isCorrect: true },
      { text: "Es considerado y amable con los demás conductores y con los peatones.", isCorrect: true },
      { text: "Es respetuoso, no obstaculiza ni perturba al resto.", isCorrect: true },
      { text: "Conduce con buen criterio.", isCorrect: true }
    ]
  },
  {
    text: "¿Qué efecto(s) sobre la visión tiene el conducir a unos 100 km/h?",
    answers: [
      { text: "A la mayoría de los conductores se les cansa la vista después de conducir más o menos media hora.", isCorrect: false },
      { text: "El campo visual se reduce, ya que a esa velocidad se tiende a fijar la mirada recta a lo lejos.", isCorrect: true },
      { text: "Resulta más difícil percibir movimientos a los lados de la carretera.", isCorrect: true },
      { text: "La visión se adapta automáticamente a la alta velocidad y, por lo tanto, el resto del tránsito se percibe igual que al ir a una velocidad baja.", isCorrect: false }
    ]
  },
  {
    text: "En relación con la técnica de observación de los conductores inexpertos, ¿cuál o cuáles de las siguientes afirmaciones es(son) verdadera(s)?",
    answers: [
      { text: "Los conductores inexpertos concentran su mirada en puntos fijos.", isCorrect: true },
      { text: "Los conductores inexpertos aprovechan al máximo su visión periférica.", isCorrect: false },
      { text: "Los conductores inexpertos observan el entorno que los rodea en forma más sistemática que los conductores experimentados.", isCorrect: false },
      { text: "No hay mayores diferencias en cuanto a cómo observan el entorno los conductores inexpertos y los con gran experiencia.", isCorrect: false }
    ]
  },
  {
    text: "De las siguientes afirmaciones, ¿cuál o cuáles es(son) verdadera(s)?",
    answers: [
      { text: "El tener una buena visión es imprescindible para poder captar las diversas situaciones que se presentan al conducir.", isCorrect: true },
      { text: "Existe un alto riesgo de que los conductores cuyo campo visual no es lo suficientemente amplio, no alcancen a reaccionar a tiempo ante peligros provenientes de los lados.", isCorrect: true },
      { text: "Si usted conduce durante un largo tiempo en condiciones difíciles, puede tener problemas para apreciar correctamente lo que ve y, por lo tanto, tomar decisiones equivocadas.", isCorrect: true },
      { text: "Las personas jóvenes son más sensibles a la luz deslumbrante que los mayores.", isCorrect: false }
    ]
  },
  {
    text: "Al ir conduciendo usted debería utilizar un teléfono celular convencional - esto es, cuyo uso no es por medio de un sistema de \"manos libres\" - sólo en la siguiente situación:",
    answers: [
      { text: "Si su vehículo tiene cambio automático.", isCorrect: false },
      { text: "Si necesita efectuar una llamada de emergencia.", isCorrect: false },
      { text: "Cuando se encuentra detenido en un lugar seguro.", isCorrect: true },
      { text: "Al circular por un camino secundario.", isCorrect: false }
    ]
  },
  {
    text: "Entre los accidentes de tránsito se distinguen distintos tipos de éstos. En Chile, ¿cuál es el tipo de accidente que origina la mayor cantidad de muertos?",
    answers: [
      { text: "Los choques contra obstáculos fijos.", isCorrect: false },
      { text: "Las colisiones entre 2 o más vehículos.", isCorrect: true },
      { text: "Los atropellos.", isCorrect: false },
      { text: "Los volcamientos.", isCorrect: false }
    ]
  },
  {
    text: "Fuera de la ciudad, usted va por una carretera de doble calzada con dos pistas por sentido. La velocidad máxima permitida es de 100 km/hr. Si usted va a 90 km/hr y no van vehículos delante suyo, ¿por cuál pista circula usted?",
    answers: [
      { text: "Por la pista de la izquierda.", isCorrect: false },
      { text: "Por la pista de la derecha.", isCorrect: true },
      { text: "Por cualquiera de las dos pistas.", isCorrect: false }
    ]
  },
  {
    text: "¿Cómo señaliza usted con el brazo cuando va a virar hacia la derecha?",
    answers: [
      { text: "A", isCorrect: false },
      { text: "B", isCorrect: true },
      { text: "C", isCorrect: false }
    ]
  },
  {
    text: "Usted va conduciendo su vehículo a 90 km/h que es la velocidad máxima permitida en esa vía. ¿Qué hace usted si a pesar de todo un vehículo desea adelantarlo?",
    answers: [
      { text: "Conduce lo más a la derecha posible.", isCorrect: true },
      { text: "Se desplaza hacia la berma y circula por ella.", isCorrect: false },
      { text: "Enciende sus luces de advertencia de peligro.", isCorrect: false },
      { text: "No acelera.", isCorrect: true }
    ]
  },
  {
    text: "Usted va por una carretera a 100 km/h. ¿Qué hace usted si a pesar de todo un vehículo que viene atrás desea adelantarlo?",
    answers: [
      { text: "Acelera para impedir el adelantamiento.", isCorrect: false },
      { text: "Se mantiene lo más a la derecha posible.", isCorrect: true },
      { text: "Mantiene o disminuye su velocidad.", isCorrect: true },
      { text: "Enciende su intermitente izquierdo en señal de advertencia de que viene un vehículo en contra.", isCorrect: false },
      { text: "Se acerca lo más posible hacia la línea de centro de calzada, para impedir el adelantamiento.", isCorrect: false }
    ]
  },
  {
    text: "Usted está a punto de adelantar a un vehículo pesado. ¿Qué debería hacer?",
    answers: [
      { text: "Tocar la bocina para advertirle al conductor que usted está ahí.", isCorrect: false },
      { text: "Mantenerse bien atrás del vehículo para tener una mayor visual.", isCorrect: true },
      { text: "Conducir cerca del vehículo con el propósito de adelantarlo rápidamente.", isCorrect: false },
      { text: "Encender y apagar sus luces y esperar hasta que el conductor le avise que es seguro adelantar.", isCorrect: false }
    ]
  },
  {
    text: "De noche, en una zona rural, por emergencia usted estaciona su vehículo al costado de la vía. ¿En qué circunstancia debe usted encender sus luces de estacionamiento?",
    answers: [
      { text: "Cuando la berma no es suficientemente ancha y parte del vehículo queda sobre la calzada.", isCorrect: false },
      { text: "Cuando el centro de la calzada está demarcado con línea blanca continua.", isCorrect: false },
      { text: "Cuando el camino es de tierra.", isCorrect: false },
      { text: "Siempre.", isCorrect: true }
    ]
  },
  {
    text: "Usted va conduciendo a la velocidad máxima permitida. Un vehículo se acerca muy rápido por atrás encendiendo y apagando sus luces. ¿Qué hace usted?",
    answers: [
      { text: "Acelera para mantener un espacio adecuado detrás suyo.", isCorrect: false },
      { text: "Presiona su freno para mostrarle sus luces de freno.", isCorrect: false },
      { text: "Le permite el adelantamiento.", isCorrect: true },
      { text: "Aumenta su velocidad y le impide que lo adelante.", isCorrect: false }
    ]
  },
  {
    text: "Usted está conduciendo al límite de la velocidad máxima permitida y un conductor intenta adelantarlo. ¿Trataría usted de evitar que lo adelante?",
    answers: [
      { text: "No, a menos que sea seguro hacerlo.", isCorrect: false },
      { text: "Sí, porque el otro conductor está actuando en forma peligrosa.", isCorrect: false },
      { text: "Sí, porque el otro conductor está infringiendo la ley.", isCorrect: false },
      { text: "No, en ningún momento.", isCorrect: true }
    ]
  },
  {
    text: "Usted va detrás de un camión articulado que se aproxima a un cruce. Su conductor señaliza hacia la derecha pero el vehículo se desplaza hacia la izquierda. ¿Qué debe hacer usted?",
    answers: [
      { text: "Advertirle al conductor acerca de su señal equivocada.", isCorrect: false },
      { text: "Esperar detrás del camión.", isCorrect: true },
      { text: "Denunciar a Carabineros al conductor.", isCorrect: false },
      { text: "Pasar al camión por la derecha.", isCorrect: false }
    ]
  },
  {
    text: "En una carretera de doble calzada con 2 pistas por sentido de tránsito, usted desea pasar al vehículo que va delante suyo. Por su espejo retrovisor ve que el auto que viene atrás se está cambiando de pista para sobrepasarlo a usted. ¿Qué debería hacer usted?",
    answers: [
      { text: "Señalizar y luego cambiar de pista para sobrepasar.", isCorrect: false },
      { text: "Señalizar para indicarle al conductor que viene atrás que usted también desea sobrepasar.", isCorrect: false },
      { text: "Presionar levemente el pedal de frenos para mostrar sus luces de freno.", isCorrect: false },
      { text: "No señalizar hasta que el auto lo haya pasado.", isCorrect: true }
    ]
  },
  {
    text: "En un cruce hay peatones atravesando la calle hacia la cual usted está virando. ¿Qué debe hacer usted?",
    answers: [
      { text: "Hacerles señas con la mano para que continúen.", isCorrect: false },
      { text: "Tocar la bocina para hacerles notar que usted está ahí.", isCorrect: false },
      { text: "Esperar que crucen.", isCorrect: true },
      { text: "Encender sus luces de advertencia de peligro.", isCorrect: false }
    ],
    imageUrl: "/images/questions/img-026.png"
  },
  {
    text: "Al estacionar su vehículo en un lugar en el que no hay señales que lo permitan ni que lo prohiban, usted no debe ….",
    answers: [
      { text: "Dejar el freno de mano puesto.", isCorrect: false },
      { text: "Detener el motor.", isCorrect: false },
      { text: "Obstaculizar el tránsito a otros usuarios de la vía.", isCorrect: true },
      { text: "Estacionar al costado derecho de la calzada.", isCorrect: false }
    ]
  },
  {
    text: "¿De qué le advierte esta señal?",
    answers: [
      { text: "De la posible presencia de escolares.", isCorrect: true },
      { text: "De la proximidad de un cruce de peatones.", isCorrect: false },
      { text: "De la posible presencia de niños jugando.", isCorrect: false },
      { text: "De la proximidad de un parque o plaza.", isCorrect: false }
    ]
  },
  {
    text: "Viajando de noche usted es encandilado por las luces de un vehículo que viene en sentido contrario, ¿qué debería hacer usted?",
    answers: [
      { text: "Bajar su visor de protección solar.", isCorrect: false },
      { text: "Poner luces delanteras altas.", isCorrect: false },
      { text: "Poner su mano sobre sus ojos.", isCorrect: false },
      { text: "Bajar la velocidad y eventualmente detenerse.", isCorrect: true }
    ]
  },
  {
    text: "Cuando la calzada está con hielo la distancia de frenado puede ser …",
    answers: [
      { text: "2 veces la distancia normal.", isCorrect: false },
      { text: "5 veces la distancia normal.", isCorrect: false },
      { text: "7 veces la distancia normal.", isCorrect: false },
      { text: "10 veces la distancia normal.", isCorrect: true }
    ]
  },
  {
    text: "Al conducir con neblina a la luz del día, ¿qué luces enciende usted ?",
    answers: [
      { text: "Las luces delanteras bajas.", isCorrect: true },
      { text: "Las luces de estacionamiento.", isCorrect: false },
      { text: "Las luces delanteras altas.", isCorrect: false },
      { text: "Las luces de advertencia de peligro.", isCorrect: false }
    ]
  },
  {
    text: "En una calle de una pista por sentido de tránsito usted se encuentra con que su pista está obstruida. ¿Qué hace usted?",
    answers: [
      { text: "Continúa, porque usted tiene el derecho a vía.", isCorrect: false },
      { text: "Hace señas con la mano a quienes vienen en contra para que le den la pasada.", isCorrect: false },
      { text: "Cede el paso al tránsito que viene en sentido contrario.", isCorrect: true },
      { text: "Acelera para poder pasar primero.", isCorrect: false }
    ]
  },
  {
    text: "¿Para qué sirven las señales amarillas con forma de rombo?",
    answers: [
      { text: "Para entregar información.", isCorrect: false },
      { text: "Para dar órdenes.", isCorrect: false },
      { text: "Para indicar direcciones.", isCorrect: false },
      { text: "Para advertir acerca de peligros.", isCorrect: true }
    ]
  },
  {
    text: "Usted está enfrentando un semáforo en amarillo. ¿Qué luces se encenderán después?",
    answers: [
      { text: "Primero la roja y luego la amarilla nuevamente.", isCorrect: false },
      { text: "Primero la roja y luego la verde.", isCorrect: true },
      { text: "Primero la verde y luego la roja.", isCorrect: false },
      { text: "Primero la verde y luego la amarilla nuevamente.", isCorrect: false }
    ]
  },
  {
    text: "El vehículo indicado con la flecha se encuentra detenido sobre una zona achurada esperando poder efectuar un viraje en U, ¿es esto correcto?",
    answers: [
      { text: "Sí, la zona achurada sólo separa sentidos de circulación.", isCorrect: false },
      { text: "Sí, siempre que la zona achurada no esté reforzada con tachas o tachones reflectantes.", isCorrect: false },
      { text: "No, porque los vehículos no pueden detenerse ni circular por zonas achuradas.", isCorrect: true },
      { text: "No, porque se trata de una vía de mucho tránsito.", isCorrect: false }
    ]
  },
  {
    text: "Usted es el primero en llegar al sitio de un accidente. ¿Qué debería hacer usted?",
    answers: [
      { text: "Encender sus luces de advertencia de peligro para alertar a los demás conductores.", isCorrect: true },
      { text: "Asegurarse de que los motores de los vehículos involucrados estén apagados.", isCorrect: true },
      { text: "Abandonar el lugar tan pronto llegue otro conductor.", isCorrect: false },
      { text: "Ayudar a salir a las personas ilesas de los vehículos.", isCorrect: true }
    ]
  },
  {
    text: "Usted es el primero en llegar al lugar de un accidente en el que hay heridos graves. ¿Qué hace usted?",
    answers: [
      { text: "Enciende sus luces de advertencia de peligro.", isCorrect: true },
      { text: "Se asegura de que alguien llame al 133 de Carabineros.", isCorrect: true },
      { text: "Intenta que los heridos beban algo.", isCorrect: false },
      { text: "Saca de los autos a los heridos.", isCorrect: false }
    ]
  },
  {
    text: "En relación con las infracciones a las normas del tránsito, ¿cuál o cuáles de las siguientes afirmaciones es(son) verdadera(s)?",
    answers: [
      { text: "Infringir las normas sobre uso obligatorio de cinturón de seguridad es una infracción grave.", isCorrect: true },
      { text: "No respetar una señal PARE es una infracción gravísima.", isCorrect: true },
      { text: "La comisión de una infracción gravísima es sancionada no sólo con una multa, sino que también con la suspensión de la licencia de conducir del infractor.", isCorrect: true },
      { text: "Sólo son infracciones gravísimas el no respetar la luz roja del semáforo y exceder el límite de velocidad máxima permitida en más de 20 Km/h.", isCorrect: false },
      { text: "En ningún caso una licencia de conducir puede ser cancelada por el Juez.", isCorrect: false }
    ]
  },
  {
    text: "¿Cuál o cuáles de las siguientes afirmaciones es(son) verdadera(s)?",
    answers: [
      { text: "Sólo son infracciones gravísimas el exceder en más de 20 Km/h la velocidad máxima permitida y no respetar la luz roja del semáforo.", isCorrect: false },
      { text: "Las infracciones gravísimas son sancionadas con multas y, además, con la suspensión de la licencia de conducir del infractor.", isCorrect: true },
      { text: "Dos infracciones graves cometidas en un período de 12 meses dan origen a una suspensión de la licencia de conducir del infractor.", isCorrect: true },
      { text: "No respetar el derecho preferente de paso de un peatón es una infracción leve.", isCorrect: false },
      { text: "Conducir hablando por un teléfono celular cuyo uso se efectúa por medio de un sistema no de \"manos libres\" es una infracción grave.", isCorrect: true }
    ]
  }
];

async function normalizeText(text: string): Promise<string> {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, ' ')
    .replace(/[¿?¡!,;.]/g, '');
}

async function processQuestions() {
  console.log(`\n🔍 Procesando ${questions.length} preguntas del cuestionario...\n`);

  let added = 0;
  let existing = 0;
  let errors = 0;

  for (let i = 0; i < questions.length; i++) {
    const q = questions[i];
    const questionNumber = i + 1;

    try {
      // Normalizar texto para búsqueda
      const normalizedSearch = await normalizeText(q.text);

      // Buscar pregunta existente
      const allQuestions = await prisma.question.findMany({
        include: { answers: true }
      });

      let existingQuestion = null;
      
      for (const dbQuestion of allQuestions) {
        const normalizedDb = await normalizeText(dbQuestion.text);
        
        if (normalizedDb.includes(normalizedSearch.substring(0, 30)) || 
            normalizedSearch.includes(normalizedDb.substring(0, 30))) {
          
          // Verificar respuestas para diferenciar duplicados
          const dbAnswerTexts = dbQuestion.answers.map(a => a.text.toLowerCase().trim()).sort();
          const newAnswerTexts = q.answers.map(a => a.text.toLowerCase().trim()).sort();
          
          if (JSON.stringify(dbAnswerTexts) === JSON.stringify(newAnswerTexts)) {
            existingQuestion = dbQuestion;
            break;
          }
        }
      }

      if (existingQuestion) {
        console.log(`✓ ${questionNumber}. Ya existe: "${q.text.substring(0, 60)}..."`);
        existing++;
      } else {
        // Crear nueva pregunta
        const newQuestion = await prisma.question.create({
          data: {
            text: q.text,
            imageUrl: q.imageUrl || null,
            category: 'general',
            answers: {
              create: q.answers
            }
          },
          include: { answers: true }
        });

        console.log(`✅ ${questionNumber}. Agregada: "${q.text.substring(0, 60)}..." (${newQuestion.answers.length} respuestas)`);
        added++;
      }
    } catch (error) {
      console.error(`❌ ${questionNumber}. Error: "${q.text.substring(0, 60)}..."`, error);
      errors++;
    }
  }

  console.log(`\n📊 Resumen:`);
  console.log(`   ✅ Agregadas: ${added}`);
  console.log(`   ✓ Ya existían: ${existing}`);
  console.log(`   ❌ Errores: ${errors}`);
  console.log(`   📝 Total procesadas: ${questions.length}\n`);

  // Obtener total de preguntas en BD
  const totalQuestions = await prisma.question.count();
  console.log(`📚 Total de preguntas en base de datos: ${totalQuestions}\n`);
}

processQuestions()
  .catch(console.error)
  .finally(() => prisma.$disconnect());

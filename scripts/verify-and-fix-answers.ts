import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface CorrectAnswer {
  question: string;
  correctAnswers: string[];
}

// Respuestas correctas extraídas de los cuestionarios oficiales
const correctAnswersData: CorrectAnswer[] = [
  {
    question: "Mientras conduce usted siente un fuerte olor a gasolina. ¿Qué debería hacer usted?",
    correctAnswers: ["Detenerse e investigar el problema"]
  },
  {
    question: "¿Qué significa esta luz de advertencia en el panel de instrumentos",
    correctAnswers: ["Intermitentes de advertencia de peligro"]
  },
  {
    question: "La distancia de detención total es igual a la suma de la distancia de reacción y la de frenado. Aproximadamente, ¿cuál es la mínima distancia de detención total en un asfalto seco, si usted viaja a 90 km/h?",
    correctAnswers: ["Unos 70 metros"]
  },
  {
    question: "Usted está descendiendo una pendiente muy larga. ¿Qué debería hacer para ayudar a controlar la velocidad de su vehículo?",
    correctAnswers: ["Seleccionar una marcha baja"]
  },
  {
    question: "Usted está próximo a descender por una pendiente muy pronunciada. ¿Qué debería hacer para controlar la velocidad de su vehículo?",
    correctAnswers: ["Seleccionar un cambio bajo y usar los frenos cuidadosamente"]
  },
  {
    question: "¿Cuál o cuáles característica(s) distingue(n) a un conductor seguro?",
    correctAnswers: [
      "Conduce con prudencia y hace todo lo posible por evitar accidentes",
      "Es considerado y amable con los demás conductores y con los peatones",
      "Es respetuoso, no obstaculiza ni perturba al resto",
      "Conduce con buen criterio"
    ]
  },
  {
    question: "Si usted ha ingerido alcohol, ¿cuál o cuáles son los efectos más probables?",
    correctAnswers: [
      "Su capacidad de coordinación se reducirá",
      "Su autoconfianza se incrementará",
      "Su juicio empeorará"
    ]
  },
  {
    question: "Si usted va conduciendo y comienza a sentir cansancio, es mejor que se detenga lo antes posible. ¿Qué debería hacer usted mientras no pueda detenerse?",
    correctAnswers: ["Asegurarse de que entre aire fresco a su vehículo"]
  },
  {
    question: "¿Cuándo es más probable que usted pierda concentración cuando conduce?",
    correctAnswers: [
      "Cuando va escuchando música a alto volumen",
      "Cuando utiliza un teléfono celular",
      "Cuando mira un mapa del camino"
    ]
  },
  {
    question: "Usted va conduciendo al lado de una fila de autos estacionados. De pronto ve una pelota rebotando en la calzada un poco más adelante. ¿Qué debería hacer usted?",
    correctAnswers: ["Disminuir la velocidad y estar preparado para detenerse si aparece un niño"]
  },
  {
    question: "¿Qué debería hacer el conductor del auto indicado con la flecha?",
    correctAnswers: ["Esperar a que pase el peatón que va por la calzada"]
  },
  {
    question: "¿Cuándo puede usted hacer sonar la bocina de su auto?",
    correctAnswers: ["Para prevenir la ocurrencia de un accidente"]
  },
  {
    question: "En un vehículo de 3 o 5 puertas, ¿en qué condiciones sería seguro transportar niños pequeños en el espacio que queda detrás de los asientos traseros?",
    correctAnswers: ["Nunca"]
  },
  {
    question: "¿Cuál señalización con el brazo del conductor de un vehículo que va adelante le indica que va a virar a la izquierda?",
    correctAnswers: ["C"]
  },
  {
    question: "Usted está a punto de adelantar a un vehículo pesado. ¿Qué debería hacer?",
    correctAnswers: ["Mantenerse bien atrás del vehículo para tener una mayor visual"]
  },
  {
    question: "¿En cuál o cuáles situaciones el vehículo está mal estacionado?",
    correctAnswers: ["A", "B"]
  },
  {
    question: "¿En cuál o cuáles de estos lugares podría el estacionamiento de su vehículo causar daño u obstrucción a otros usuarios de la vía?",
    correctAnswers: [
      "Frente a una entrada de autos de una propiedad",
      "En o al llegar a una parada de locomoción colectiva",
      "En un paso de peatones"
    ]
  },
  {
    question: "Como regla general, ¿en cuál o cuáles de los siguientes lugares nunca debe estacionar?",
    correctAnswers: [
      "En un paso de peatones",
      "En un puente",
      "A menos de 10 metros de una esquina",
      "En o al llegar a una parada de locomoción colectiva"
    ]
  },
  {
    question: "Usted conduce un vehículo de marcha lenta por un camino angosto y sinuoso. En estas circunstancias, usted debería …",
    correctAnswers: ["Correrse hacia la derecha cuando pueda hacerlo en forma segura, para permitir que otros lo adelanten"]
  },
  {
    question: "Usted va conduciendo en una carretera a la velocidad máxima permitida. El conductor que viene detrás suyo está tratando de adelantarlo. ¿Qué hace usted?",
    correctAnswers: ["Mantiene o disminuye la velocidad y permite el adelantamiento"]
  },
  {
    question: "Un espacio entre usted y el vehículo que marcha delante igual a lo que usted recorre en tres segundos es suficiente cuando …",
    correctAnswers: ["Las condiciones climáticas son buenas"]
  },
  {
    question: "De los siguientes factores, ¿cuál es el que con mayor frecuencia se presenta en las colisiones por la parte trasera?",
    correctAnswers: ["El conducir demasiado cerca del vehículo que va adelante"]
  },
  {
    question: "Usted va conduciendo por un camino de doble tránsito cuando se encuentra con personas que van a caballo delante suyo. ¿Qué es lo primero que usted debería hacer?",
    correctAnswers: ["Prepararse para reducir la velocidad"]
  },
  {
    question: "Por una carretera, usted circula detrás de otro vehículo. Si la calzada está mojada, ¿qué espacio de tiempo mínimo mantiene usted respecto del vehículo que va adelante?",
    correctAnswers: ["A lo menos, el equivalente a lo que recorre en 4 segundos"]
  },
  {
    question: "¿Cuál o cuáles de las siguientes afirmaciones son correctas en cuanto a la conducción durante la noche?",
    correctAnswers: [
      "Nuestra limitada capacidad para ver de noche aumenta los riesgos de accidentes",
      "Nuestra capacidad de apreciar distancias en la noche se ve disminuida",
      "El color de las ropas de un peatón influye en que éste pueda ser más o menos visible para los conductores"
    ]
  },
  {
    question: "Usted acaba de conducir a través de una calle inundada. ¿Qué es lo primero que debería hacer?",
    correctAnswers: ["Chequear sus frenos"]
  },
  {
    question: "Usted va circulando por la pista de la derecha de una carretera de doble calzada muy transitada. Una señal le indica que a 800 m su pista se encuentra cerrada. ¿Qué debería hacer usted?",
    correctAnswers: ["Desplazarse hacia la pista de su izquierda tan pronto pueda hacerlo en forma segura"]
  },
  {
    question: "¿Qué precaución debe tomar usted al cargar un remolque que va a arrastrar con su automóvil?",
    correctAnswers: ["Que el peso se distribuya en forma pareja"]
  },
  {
    question: "¿Cuál de estas señales le previene que más adelante hay una serie de curvas?",
    correctAnswers: ["B"]
  },
  {
    question: "¿Qué significa esta señal?",
    correctAnswers: ["Que se acerca a una zona donde es muy probable la presencia de ciclistas en la vía"]
  },
  {
    question: "¿Cuál de estas señales le advierte la proximidad de un cruce de peatones?",
    correctAnswers: ["A"]
  },
  {
    question: "Usted está enfrentando un semáforo en amarillo. ¿Qué luces se encenderán después?",
    correctAnswers: ["Primero la roja y luego la verde"]
  },
  {
    question: "De acuerdo a las circunstancias que se aprecian en la fotografía, ¿sería correcto que el automóvil indicado con la flecha continuara derecho ?",
    correctAnswers: ["No"]
  },
  {
    question: "Usted va por una autopista. De un camión cargado que va delante suyo cae una caja sin que su conductor se dé cuenta. ¿Qué hace usted?",
    correctAnswers: ["Continúa hasta donde haya un teléfono para avisar a la policía o a los servicios de emergencia"]
  },
  {
    question: "¿Cuál o cuáles de las siguientes afirmaciones es(son) verdadera(s)?",
    correctAnswers: [
      "Las infracciones gravísimas son sancionadas con multas y, además, con la suspensión de la licencia de conducir del infractor",
      "Dos infracciones graves cometidas en un período de 12 meses dan origen a una suspensión de la licencia de conducir del infractor",
      "Conducir hablando por un teléfono celular cuyo uso se efectúa por medio de un sistema no de \"manos libres\" es una infracción grave"
    ]
  },
  // Segundo cuestionario
  {
    question: "¿Cuál o cuáles de las siguientes afirmaciones es(son) verdadera(s)?",
    correctAnswers: ["Un desgaste irregular de los neumáticos puede deberse a problemas de alineamiento o de amortiguación"]
  },
  {
    question: "¿Qué elementos de su vehículo debe usted mantener limpios?",
    correctAnswers: ["Las luces", "Los espejos", "Los vidrios"]
  },
  {
    question: "Usted está virando hacia la derecha en un camino resbaladizo y las ruedas traseras de su vehículo resbalan hacia la izquierda. ¿Qué debería hacer usted?",
    correctAnswers: ["Guiar cuidadosamente hacia la izquierda"]
  },
  {
    question: "¿Cuál de las siguientes afirmaciones es correcta en cuanto a la capacidad de reacción de los conductores jóvenes inexpertos, comparados con conductores experimentados cuya edad fluctúa entre 35 y 50 años?",
    correctAnswers: ["En situaciones reales, que requieren reacciones complejas, los conductores experimentados reaccionan en un tiempo más corto que los jóvenes inexpertos"]
  },
  {
    question: "¿Cuáles 2 de los siguientes rasgos son característicos de personas que ceden con facilidad a la presión del grupo?",
    correctAnswers: [
      "Por lo general, son muy inseguras de sí mismas",
      "Sienten temor a ser motivo de bromas y risas de los demás"
    ]
  },
  {
    question: "El modo como percibimos una situación depende, entre otros factores, de nuestras experiencias anteriores, intereses, expectativas y necesidades. En este contexto, ¿cuál de las siguientes afirmaciones es falsa?",
    correctAnswers: ["Varios conductores que ven lo mismo perciben las situaciones de tránsito también del mismo modo"]
  },
  {
    question: "¿Qué debería hacer usted si está tomando un remedio para la tos y no está seguro si éste puede afectar su conducción?",
    correctAnswers: ["Preguntar a su doctor"]
  },
  {
    question: "¿Cómo afecta el consumo de alcohol a su conducción?",
    correctAnswers: ["Reduce su concentración"]
  },
  {
    question: "¿Qué consejo daría usted a un conductor que ha ingerido bebidas alcohólicas en una fiesta?",
    correctAnswers: ["Que se vuelva a casa en taxi"]
  },
  {
    question: "Un conductor hace algo que a usted le molesta. ¿Qué debería hacer usted?",
    correctAnswers: ["Tratar de no reaccionar"]
  },
  {
    question: "De los siguientes efectos, ¿cuál no es consecuencia del consumo de alcohol antes de conducir?",
    correctAnswers: ["Mayor conciencia del peligro"]
  },
  {
    question: "De las siguientes capacidades de un individuo, ¿cuál de ellas no se ve afectada por el consumo de alcohol?",
    correctAnswers: ["La percepción de colores"]
  },
  {
    question: "Al adelantar en un camino a una manada de ovejas, ¿qué hace usted?",
    correctAnswers: [
      "Deja un espacio lateral suficiente",
      "Conduce lentamente",
      "Está preparado para detenerse"
    ]
  },
  {
    question: "Las fotografías muestran una secuencia cronológica de imágenes. ¿Cuáles son las 2 principales causas por las que surge esta situación de peligro?",
    correctAnswers: [
      "Por adelantar en un lugar prohibido",
      "Porque el conductor del auto que llega a la carretera por la izquierda ingresa a ésta cuando no debió haberlo hecho"
    ]
  },
  {
    question: "Cuando dos vehículos van a cruzarse en una intersección en la que no hay señalización alguna, ¿quién debe ceder el paso?",
    correctAnswers: ["El que se acerca al cruce por la izquierda del otro"]
  },
  {
    question: "Usted va conduciendo su vehículo a 90 km/h que es la velocidad máxima permitida en esa vía. ¿Qué hace usted si a pesar de todo un vehículo desea adelantarlo?",
    correctAnswers: [
      "Conduce lo más a la derecha posible",
      "No acelera"
    ]
  },
  {
    question: "Usted desea adelantar. ¿Cuál o cuáles de las siguientes afirmaciones es(son) verdadera(s)?",
    correctAnswers: ["Usted tiene la obligación de esperar a que la pista del sentido contrario esté libre de vehículos para luego adelantar"]
  },
  {
    question: "¿Por qué adelantar a un camión es más arriesgado que adelantar a un auto?",
    correctAnswers: ["Porque los camiones son más largos que los autos"]
  },
  {
    question: "Usted va conduciendo en la ciudad por una calle con 2 pistas en sentido único de tránsito. A menos que alguna señal le indique otra cosa, usted no debe exceder los …",
    correctAnswers: ["60 km/hr"]
  },
  {
    question: "Usted se aproxima a un cruce cebra. En la vereda hay peatones esperando cruzar. ¿Qué hace usted?",
    correctAnswers: ["Disminuye la velocidad y se prepara para detenerse"]
  },
  {
    question: "En un cruce hay peatones atravesando la calle hacia la cual usted está virando. ¿Qué hace usted?",
    correctAnswers: ["Espera permitiéndoles que crucen"]
  },
  {
    question: "Cuando el viento está soplando muy fuerte, ¿por qué debe usted dejar un espacio lateral extra al adelantar a un motociclista?",
    correctAnswers: ["Porque el motociclista podría tambalear o ver desviada su trayectoria a consecuencia del viento"]
  },
  {
    question: "¿Cuál o cuáles de las siguientes afirmaciones es(son) correcta(s) en cuanto a la conducción nocturna en un camino rural?",
    correctAnswers: [
      "Al cruzarse con otro vehículo siempre hay que poner luces bajas para no encandilar a su conductor",
      "Al acercarse por atrás a otro vehículo hay que poner luces bajas"
    ]
  },
  {
    question: "Cuando la calzada está con hielo la distancia de frenado puede ser …",
    correctAnswers: ["10 veces la distancia normal"]
  },
  {
    question: "En una carretera de doble calzada y de mucho tránsito, usted está siendo seguido muy de cerca por un vehículo que viene atrás. ¿Qué hace usted para disminuir el riesgo de accidente?",
    correctAnswers: ["Aumenta su distancia al vehículo que va adelante"]
  },
  {
    question: "Marque las alternativas que coinciden con las señales que muestra la imagen.",
    correctAnswers: [
      "Mantenga su derecha",
      "No adelantar",
      "Curva y contracurva cerrada"
    ]
  },
  {
    question: "Usted se ha detenido en el lugar de un accidente para prestar ayuda. ¿Qué debería hacer usted ?",
    correctAnswers: [
      "Mantener abrigadas y cómodas a las personas heridas",
      "Mantener tranquilas a las personas heridas hablándoles alentadoramente",
      "Asegurarse de que no queden solos los heridos"
    ]
  },
  // Cuestionarios adicionales 3 y 4
  {
    question: "¿Por qué los neumáticos deben mantenerse a la presión indicada por el fabricante?",
    correctAnswers: ["Para ayudar a evitar que el automóvil se roncee"]
  },
  {
    question: "¿Por qué no es bueno desenganchar el motor del vehículo al ir circulando?",
    correctAnswers: ["Porque no hay frenado del motor"]
  },
  {
    question: "Usted desea estacionar en bajada en una calle con pendiente pronunciada. ¿Qué debería hacer?",
    correctAnswers: [
      "Dejar el volante girado hacia la acera",
      "Dejar puesto el freno de mano"
    ]
  },
  {
    question: "¿Qué debería hacer usted para corregir un coletazo de las ruedas traseras?",
    correctAnswers: ["Girar el volante hacia el lado que se desplaza la cola del vehículo"]
  },
  {
    question: "Usted está a punto de conducir, pero se siente enfermo. Usted debería …",
    correctAnswers: ["No manejar"]
  },
  {
    question: "El tiempo que transcurre desde que usted percibe un peligro hasta que actúa se denomina tiempo de reacción. En una emergencia, ¿qué factor influye en su tiempo de reacción?",
    correctAnswers: ["Su estado de salud"]
  },
  {
    question: "En esta ocasión usted va conduciendo a 70 km/h. ¿Qué hace usted?",
    correctAnswers: ["Continúa derecho", "Frena suavemente"]
  },
  {
    question: "Al adelantar a animales que van por el camino, usted no debería…",
    correctAnswers: ["Acelerar el motor o tocar la bocina"]
  },
  {
    question: "Usted va conduciendo por una calle de dos pistas y de doble sentido de tránsito en la cual hay vehículos estacionados al costado derecho. ¿Por cuáles 3 razones usted debe disminuir su velocidad?",
    correctAnswers: [
      "Pueden salir vehículos de su estacionamiento",
      "Alguien puede abrir una puerta de un auto estacionado",
      "Entre los autos estacionados puede aparecer un niño corriendo"
    ]
  },
  {
    question: "¿Hacia dónde es más importante que usted mire en este momento?",
    correctAnswers: ["C"]
  },
  {
    question: "En una vía urbana de sentido único de tránsito, sin señalización que permita o prohíba el estacionamiento, ¿a qué lado puede estacionar?",
    correctAnswers: ["Sólo al lado derecho según el sentido del tránsito"]
  },
  {
    question: "¿En cuáles 3 de las siguientes ocasiones debe usted detener siempre su vehículo?",
    correctAnswers: [
      "Al verse involucrado en un accidente",
      "Al enfrentar una luz roja de un semáforo",
      "Cuando un Carabinero se lo solicita"
    ]
  },
  {
    question: "¿Qué hace usted ante esta situación?",
    correctAnswers: ["Se detiene"]
  },
  {
    question: "¿De qué le advierte esta señal?",
    correctAnswers: ["De la posible presencia de escolares"]
  },
  {
    question: "Conduciendo de noche usted se ve encandilado por las luces de un vehículo que viene en sentido contrario, ¿qué debería hacer usted?",
    correctAnswers: ["Bajar la velocidad o detenerse"]
  },
  {
    question: "Su vehículo ha quedado en pana en medio de una autopista. ¿Qué es lo primero que usted debería hacer?",
    correctAnswers: ["Encender sus luces de advertencia de peligro"]
  },
  {
    question: "En relación con el transporte de una carga sobre la parrilla de un automóvil, ¿cuál de las siguientes afirmaciones constituye una obligación para el conductor?",
    correctAnswers: ["Debe estar muy bien sujeta"]
  },
  {
    question: "Usted va circulando por una carretera de doble calzada con tres pistas por sentido. Las demarcaciones de pistas y de eje central están reforzadas con tachas reflectantes. Si a su izquierda las tachas son rojas y a su derecha éstas son blancas, ¿por cuál pista va usted?",
    correctAnswers: ["Por la pista de la izquierda"]
  },
  {
    question: "El vehículo indicado con la flecha se encuentra detenido sobre una zona achurada esperando poder efectuar un viraje en U, ¿es esto correcto?",
    correctAnswers: ["No, porque los vehículos no pueden detenerse ni circular por zonas achuradas"]
  },
  {
    question: "Usted se encuentra en el lugar de un accidente. ¿Qué hace para ayudar de mejor forma a una persona herida que está con una fuerte hemorragia en la parte inferior de una pierna?",
    correctAnswers: [
      "La mantiene tendida con la pierna herida en alto",
      "Aplica presión manual firme sobre la herida con un paño limpio y luego la venda"
    ]
  },
  {
    question: "Usted es el primero en llegar al sitio de un accidente. ¿Qué debería hacer usted?",
    correctAnswers: [
      "Encender sus luces de advertencia de peligro para alertar a los demás conductores",
      "Asegurarse de que los motores de los vehículos involucrados estén apagados",
      "Ayudar a salir a las personas ilesas de los vehículos"
    ]
  },
  {
    question: "Usted es el primero en llegar al lugar de un accidente en el que hay heridos graves. ¿Qué hace usted?",
    correctAnswers: [
      "Enciende sus luces de advertencia de peligro",
      "Se asegura de que alguien llame al 133 de Carabineros"
    ]
  },
  {
    question: "¿Quién o quiénes están cubiertos por el Seguro Obligatorio de Accidentes Personales?",
    correctAnswers: ["El conductor, los pasajeros y cualquier tercero afectado en un accidente de tránsito en que participe el vehículo asegurado"]
  },
  {
    question: "¿Cuándo usaría usted las luces de advertencia de peligro de su vehículo?",
    correctAnswers: ["Cuando esté en pana y obstaculizando el tránsito"]
  },
  {
    question: "¿Cuáles 2 de las siguientes afirmaciones son verdaderas?",
    correctAnswers: [
      "Los frenos antibloqueo tienen la ventaja de impedir que las ruedas queden bloqueadas al frenar fuertemente",
      "El líquido de frenos no se consume y si disminuye es porque hay algún defecto"
    ]
  },
  {
    question: "¿Qué es lo más importante para evitar chocar al vehículo que va adelante?",
    correctAnswers: ["Mantener una adecuada distancia de separación entre vehículos"]
  },
  {
    question: "Usted está virando hacia la derecha en un camino resbaladizo y las ruedas traseras de su vehículo resbalan hacia la izquierda. ¿Qué debería hacer usted?",
    correctAnswers: ["Guiar cuidadosamente hacia la izquierda"]
  },
  {
    question: "¿Cuál o cuáles de las siguientes afirmaciones es(son) verdadera(s) en cuanto al desarrollo de la moral de un individuo?",
    correctAnswers: [
      "Durante la infancia, antes de llegar a la edad escolar, las personas son egocéntricas y piensan sobre todo en ellas mismas",
      "Los conocimientos y la experiencia hacen que las personas se vuelvan más comprensivas",
      "El comportamiento que tiene una persona como conductor muestra cuánto ha avanzado en el desarrollo de su moral"
    ]
  },
  {
    question: "De los siguientes factores que se presentan en los accidentes de tránsito, ¿cuáles son los 2 más frecuentes en los accidentes que ocurren en carreteras viéndose involucrado un solo vehículo?",
    correctAnswers: [
      "Que el conductor esté muy cansado o bajo los efectos del alcohol",
      "Que el conductor sobrestime sus capacidades y conduzca a exceso de velocidad"
    ]
  },
  {
    question: "De los siguientes factores, ¿cuál es el que con mayor frecuencia se presenta en los accidentes de tránsito?",
    correctAnswers: ["Los errores de los conductores"]
  },
  {
    question: "¿Cuál o cuáles de las siguientes afirmaciones es(son) verdadera(s)?",
    correctAnswers: [
      "La capacidad de reacción de una persona se ve afectada con pequeñas concentraciones de alcohol en su organismo",
      "Con pequeñas concentraciones de alcohol en el organismo de un individuo, disminuyen ciertas inhibiciones y tiende a sobrestimar sus capacidades"
    ]
  },
  {
    question: "Usted comienza a sentir cansancio en un viaje. ¿Qué debería hacer?",
    correctAnswers: ["Detenerse y dormir una pequeña siesta o detenerse y tomar un poco de café"]
  },
  {
    question: "En relación con los cruces ferroviarios a nivel, ¿cuál o cuáles de las siguientes afirmaciones es(son) verdadera(s)?",
    correctAnswers: [
      "Si ya ha ingresado a un cruce ferroviario y siente que se aproxima un tren a lo lejos, lo mejor es continuar",
      "Si va con la radio de su vehículo encendida, es conveniente apagarla cuando se aproxima a un cruce ferroviario"
    ]
  },
  {
    question: "Mire el dibujo. ¿Cuál es el peligro al que usted debe estar más atento(a)?",
    correctAnswers: ["El niño puede cruzar corriendo"]
  },
  {
    question: "Usted llega a una intersección regulada por semáforo que se encuentra en rojo y, al mismo tiempo, un Carabinero le indica que avance, ¿qué debe hacer usted?",
    correctAnswers: ["Avanzar, porque las instrucciones de un Carabinero prevalecen sobre las señales del tránsito"]
  },
  {
    question: "¿En cuál o cuáles de las siguientes situaciones el conductor se ha detenido correctamente para recoger un pasajero?",
    correctAnswers: ["B", "D"]
  },
  {
    question: "¿En qué circunstancia usted se detendría justo sobre un cruce cebra existente a mitad de cuadra?",
    correctAnswers: ["Cuando ello sea necesario para evitar un accidente"]
  },
  {
    question: "Usted va a dejar su vehículo estacionado. ¿En qué caso puede dejarlo con el motor funcionando?",
    correctAnswers: ["En ningún caso"]
  },
  {
    question: "¿Cuál de los siguientes grupos de conductores tiene mayores probabilidades de verse involucrado en un accidente de tránsito?",
    correctAnswers: ["Los que tienen menos de 25 años"]
  },
  {
    question: "Usted nunca debería intentar adelantar a un ciclista …",
    correctAnswers: ["Justo antes de doblar a la derecha"]
  },
  {
    question: "Al conducir sobre una calzada con hielo usted siente la dirección de su vehículo más liviana. ¿ Por qué sucede esto?",
    correctAnswers: ["Porque los neumáticos tienen menos adherencia a la calzada"]
  },
  {
    question: "¿Cuál es la principal razón por la cual su distancia de detención total es mayor después de una lluvia torrencial?",
    correctAnswers: ["Porque sus neumáticos tendrán menos adherencia sobre la calzada"]
  },
  {
    question: "¿Qué significa esta señal?",
    correctAnswers: ["Dos sentidos de tránsito más adelante"]
  },
  {
    question: "¿Qué le indica la señal de tránsito que se observa en la fotografía?",
    correctAnswers: ["Que usted está obligado a ceder el paso a los vehículos que se aproximen por la otra vía"]
  },
  {
    question: "¿Qué significa la luz verde del semáforo?",
    correctAnswers: ["Siga, pero sólo si su pista está expedita justo después del cruce"]
  },
  {
    question: "Excepcionalmente, un joven de 17 años puede obtener licencia de conducir clase B. En tanto no cumpla 18 años deberá conducir siempre acompañado. ¿Qué requisitos debe cumplir su acompañante?",
    correctAnswers: [
      "Debe ir siempre sentado en el asiento delantero",
      "Debe poseer una licencia de conducir, que le permita conducir vehículos de la clase B, de a lo menos 5 años de antigüedad"
    ]
  },
  {
    question: "¿Qué documento no está obligado a portar usted siempre en su vehículo?",
    correctAnswers: ["El certificado de inscripción en el Registro Nacional de Vehículos Motorizados"]
  },
  // Cuestionarios 5 y 6
  {
    question: "¿Cuándo usaría usted las luces intermitentes de advertencia de peligro?",
    correctAnswers: ["Cuando esté en pana obstruyendo el tránsito"]
  },
  {
    question: "En un pavimento mojado, ¿influye el estado de los neumáticos en la distancia de frenado de su vehículo?",
    correctAnswers: ["Sí, porque el mayor o menor desgaste de los neumáticos, entre otros factores, determinará que dicha distancia sea mayor o menor"]
  },
  {
    question: "¿Cuál o cuáles de las siguientes afirmaciones es(son) verdadera(s)?",
    correctAnswers: [
      "Cuando el motor no está siendo lubricado se enciende una luz en el panel de instrumentos del vehículo",
      "Una batería mal cargada hace que el vehículo tenga dificultades para arrancar",
      "Casi siempre, el motor se enfría con un líquido refrigerante que circula por canales en el bloque del motor",
      "Una temperatura del motor demasiado alta puede deberse a que se haya roto la correa de la bomba de agua"
    ]
  },
  {
    question: "La distancia de frenado es la distancia que recorre un vehículo desde que se presiona el freno hasta que el vehículo se detiene. De las siguientes variables, ¿cuáles influyen en la distancia de frenado?",
    correctAnswers: [
      "La velocidad",
      "El estado de los frenos y neumáticos",
      "Las condiciones climáticas"
    ]
  },
  {
    question: "En cuanto al estrés al conducir, ¿cuál de las siguientes afirmaciones es falsa?",
    correctAnswers: ["El estrés no influye en absoluto en los actos de un conductor"]
  },
  {
    question: "¿De cuáles 2 maneras puede usted contribuir con mayor eficacia a la seguridad de tránsito?",
    correctAnswers: [
      "Contando siempre con tiempo de sobra para conducir",
      "Conduciendo a la defensiva"
    ]
  },
  {
    question: "Usted está esperando en un cruce en T. El vehículo azul que se acerca desde la izquierda señaliza a la derecha. ¿Qué debería hacer usted?",
    correctAnswers: ["Esperar hasta que el vehículo azul haya comenzado a virar"]
  },
  {
    question: "¿Cuál es el principal peligro cuando usted sobrepasa al bus que está detenido en la parada?",
    correctAnswers: ["Que algún pasajero que se baje del bus puede aparecer repentinamente delante del mismo para cruzar"]
  },
  {
    question: "¿Qué hace usted ante esta situación?",
    correctAnswers: ["Espera y deja pasar primero al vehículo que viene en contra, y luego usted continúa y pasa a los peatones"]
  },
  {
    question: "La mayor parte de los accidentes de tránsito se produce en:",
    correctAnswers: ["Intersecciones"]
  },
  {
    question: "¿Adquiere usted un derecho sobre otros usuarios de la vía cuando utiliza sus luces indicadoras de viraje?",
    correctAnswers: ["No, porque usted sólo está advirtiendo su intención de realizar una maniobra que hará cuando sea seguro hacerla"]
  },
  {
    question: "Usted está esperando poder incorporarse a una vía principal desde una calle lateral. ¿Por qué razón debería usted poner especial atención a las motocicletas?",
    correctAnswers: ["Porque las motocicletas son pequeñas y difíciles de ver"]
  },
  {
    question: "¿Cómo debería usted adelantar a personas que van a caballo?",
    correctAnswers: ["Conduciendo lentamente y dejando bastante espacio lateral"]
  },
  {
    question: "Cuando adelanta a un ciclista usted debe dejar el máximo espacio lateral posible. ¿Por qué?",
    correctAnswers: ["Porque el ciclista podría desviarse bruscamente"]
  },
  {
    question: "¿Cómo puede usted controlar mejor su vehículo al conducir con nieve?",
    correctAnswers: ["Conduciendo lentamente en el cambio más alto posible"]
  },
  {
    question: "¿Qué significa esta señal de tránsito?",
    correctAnswers: ["Pavimento resbaladizo"]
  },
  {
    question: "Frente a una situación normal, ¿cuál es la forma más segura de frenar?",
    correctAnswers: ["Frenando suavemente, luego un poco más fuerte cuando comienza a detenerse y después aflojando de a poco el freno antes de detenerse"]
  },
  {
    question: "¿Cuáles 2 cosas debe usted hacer si se le revienta un neumático delantero?",
    correctAnswers: [
      "Frenar suavemente o dejar que el vehículo siga hasta detenerse",
      "Sostener firmemente el volante manteniendo la trayectoria"
    ]
  },
  {
    question: "Usted va circulando a 50 km/h a lo largo de un camino plano y de asfalto. Las condiciones climáticas son buenas. Sus neumáticos y frenos también están buenos. En estas circunstancias, detenerse le tomará aproximadamente …",
    correctAnswers: ["Unos 30 metros"]
  },
  {
    question: "¿Cuál es el mejor consejo para una conducción segura?",
    correctAnswers: ["Contar siempre con tiempo de sobra al conducir"]
  },
  {
    question: "En relación con el cansancio y la conducción, de las siguientes afirmaciones, ¿cuál es falsa?",
    correctAnswers: ["Si un conductor está cansado, lo mejor es que su acompañante le vaya hablando permanentemente"]
  },
  {
    question: "¿Qué significa la señal que está efectuando el camión?",
    correctAnswers: ["El camión va a virar a la derecha"]
  },
  {
    question: "Mientras va conduciendo su vehículo usted siente que lo están llamando a su teléfono celular. Si el uso de éste no es por medio de un sistema de \"manos libres\", ¿qué hace usted para responder la llamada?",
    correctAnswers: ["Espera hasta encontrar un lugar seguro donde detenerse"]
  },
  {
    question: "La forma más segura de viajar en un automóvil para un niño menor de 2 años es:",
    correctAnswers: ["En una silla de seguridad, en el asiento trasero y mirando hacia atrás"]
  },
  {
    question: "Usted ha comenzado a adelantar. El auto de la derecha va a aproximadamente 80 km/h. Por su espejo retrovisor usted ve otro auto que tiene intención de adelantar. ¿Qué hace usted?",
    correctAnswers: ["Frena ligeramente y vuelve a la pista derecha"]
  },
  {
    question: "Como regla general, ¿en cuál o cuáles de los siguientes lugares usted no debe estacionar?",
    correctAnswers: [
      "En una parada de buses",
      "Al lado de un bandejón central",
      "Frente a una entrada de autos de una casa particular",
      "En una curva del camino"
    ]
  },
  {
    question: "Usted va tirando un remolque pequeño que comienza a zigzaguear.¿Qué hace usted?",
    correctAnswers: ["Retira suavemente el pie del acelerador y disminuye la velocidad"]
  },
  {
    question: "¿Cómo puede usted detener el zigzagueo de una casa rodante que va remolcando?",
    correctAnswers: ["Disminuyendo la velocidad gradualmente"]
  },
  {
    question: "De las siguientes señales de tránsito, ¿cuál o cuáles corresponden a señales amarillas con forma de rombo?",
    correctAnswers: [
      "Puente angosto",
      "Angostamiento de la vía",
      "Bifurcación o cruce en T",
      "Cruce ferroviario"
    ]
  }
];

async function normalizeText(text: string): Promise<string> {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, ' ')
    .replace(/[¿?¡!,;.:()]/g, '')
    .replace(/\./g, '');
}

async function verifyAndFixAnswers() {
  console.log('\n🔍 Verificando y corrigiendo respuestas en la base de datos...\n');

  let checked = 0;
  let fixed = 0;
  let notFound = 0;
  let errors: string[] = [];

  for (const correctData of correctAnswersData) {
    try {
      const normalizedQuestion = await normalizeText(correctData.question);
      
      // Buscar la pregunta en la BD
      const questions = await prisma.question.findMany({
        include: { answers: true }
      });

      let matchedQuestion = null;
      for (const dbQuestion of questions) {
        const normalizedDb = await normalizeText(dbQuestion.text);
        if (normalizedDb.includes(normalizedQuestion.substring(0, 40)) || 
            normalizedQuestion.includes(normalizedDb.substring(0, 40))) {
          matchedQuestion = dbQuestion;
          break;
        }
      }

      if (!matchedQuestion) {
        notFound++;
        errors.push(`❓ No encontrada: "${correctData.question.substring(0, 60)}..."`);
        continue;
      }

      checked++;

      // Verificar si las respuestas correctas coinciden
      const currentCorrectAnswers = matchedQuestion.answers
        .filter(a => a.isCorrect)
        .map(a => a.text);

      const shouldBeCorrect = correctData.correctAnswers;

      // Comparar (normalizar para comparación)
      const currentNormalized = await Promise.all(
        currentCorrectAnswers.map(t => normalizeText(t))
      );
      const shouldBeNormalized = await Promise.all(
        shouldBeCorrect.map(t => normalizeText(t))
      );

      const needsFix = JSON.stringify(currentNormalized.sort()) !== JSON.stringify(shouldBeNormalized.sort());

      if (needsFix) {
        console.log(`\n🔧 Corrigiendo: "${matchedQuestion.text.substring(0, 60)}..."`);
        console.log(`   ❌ Actual: ${currentCorrectAnswers.join(', ')}`);
        console.log(`   ✅ Correcto: ${shouldBeCorrect.join(', ')}`);

        // Actualizar las respuestas
        for (const answer of matchedQuestion.answers) {
          const answerNormalized = await normalizeText(answer.text);
          const shouldBeCorrectNow = shouldBeNormalized.some(correct => 
            answerNormalized.includes(correct) || correct.includes(answerNormalized)
          );

          if (answer.isCorrect !== shouldBeCorrectNow) {
            await prisma.answer.update({
              where: { id: answer.id },
              data: { isCorrect: shouldBeCorrectNow }
            });
          }
        }

        fixed++;
      }

    } catch (error) {
      console.error(`❌ Error procesando: "${correctData.question.substring(0, 60)}..."`, error);
    }
  }

  console.log(`\n\n📊 Resumen:`);
  console.log(`   ✅ Preguntas verificadas: ${checked}`);
  console.log(`   🔧 Preguntas corregidas: ${fixed}`);
  console.log(`   ❓ Preguntas no encontradas: ${notFound}`);
  
  if (errors.length > 0) {
    console.log(`\n⚠️ Errores/Advertencias:`);
    errors.forEach(err => console.log(`   ${err}`));
  }
}

verifyAndFixAnswers()
  .catch(console.error)
  .finally(() => prisma.$disconnect());

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const questionsData: any[] = [
  {
    text: "El conductor de un vehículo puede sobrepasar a otro por la derecha cuando:",
    image: null, 
    answers: [
        { text: "El vehículo alcanzado esté realizando o a punto de efectuar un viraje a la izquierda.", isCorrect: true },
        { text: "El vehículo alcanzado esté realizando o a punto de efectuar un viraje a la derecha.", isCorrect: false },
        { text: "Nunca.", isCorrect: false },
    ]
  },
  {
    text: "Su veh\u00edculo se desv\u00eda hacia un lado cuando usted frena. Usted deber\u00eda:",
    image: null,
    answers: [
      {
        text: "Cambiar los neum\u00e1ticos de un lado hacia el otro y viceversa.",
        isCorrect: true
      },
      {
        text: "Bombear el pedal al frenar.",
        isCorrect: false
      },
      {
        text: "Usar su freno de mano.",
        isCorrect: false
      },
      {
        text: "Consultar con su mec\u00e1nico lo antes posible.",
        isCorrect: false
      },
    ]
  },
  {
    text: "\u00bfCu\u00e1ndo usar\u00eda usted las luces de advertencia de peligro de su veh\u00edculo?",
    image: null,
    answers: [
      {
        text: "Cuando est\u00e9 en pana movi\u00e9ndose lentamente.",
        isCorrect: true
      },
      {
        text: "Cuando est\u00e9 siendo remolcado.",
        isCorrect: false
      },
      {
        text: "Cuando est\u00e9 retrocediendo en una calle de poco tr\u00e1nsito.",
        isCorrect: false
      },
      {
        text: "Cuando est\u00e9 en pana y obstaculizando el tr\u00e1nsito.",
        isCorrect: false
      },
    ]
  },
  {
    text: "\u00bfCu\u00e1l o cu\u00e1les de las siguientes afirmaciones es(son) verdadera(s)?",
    image: null,
    answers: [
      {
        text: "Cuando el motor no est\u00e1 siendo lubricado se enciende una luz en el panel de instrumentos del veh\u00edculo.",
        isCorrect: true
      },
      {
        text: "Una bater\u00eda mal cargada hace que el veh\u00edculo tenga dificultades para arrancar.",
        isCorrect: false
      },
      {
        text: "Casi siempre, el motor se enfr\u00eda con un l\u00edquido refrigerante que circula por canales en el bloque del motor.",
        isCorrect: false
      },
      {
        text: "Una temperatura del motor demasiado alta puede deberse a que se haya roto la correa de la bomba de agua.",
        isCorrect: false
      },
    ]
  },
  {
    text: "\u00bfQu\u00e9 es lo m\u00e1s importante para evitar chocar al veh\u00edculo que va adelante?",
    image: null,
    answers: [
      {
        text: "Asegurarse de que sus frenos sean eficientes.",
        isCorrect: true
      },
      {
        text: "Conducir a una velocidad constante.",
        isCorrect: false
      },
      {
        text: "Mantener una adecuada distancia de separaci\u00f3n entre veh\u00edculos.",
        isCorrect: false
      },
      {
        text: "Tener neum\u00e1ticos en muy buen estado.",
        isCorrect: false
      },
    ]
  },
  {
    text: "Usted est\u00e1 pr\u00f3ximo a descender por una pendiente muy pronunciada. \u00bfQu\u00e9 deber\u00eda hacer para controlar la velocidad de su veh\u00edculo?",
    image: null,
    answers: [
      {
        text: "Seleccionar un cambio bajo y usar los frenos cuidadosamente.",
        isCorrect: true
      },
      {
        text: "Seleccionar un cambio alto y usar los frenos cuidadosamente.",
        isCorrect: false
      },
      {
        text: "Seleccionar un cambio alto y usar los frenos firmemente.",
        isCorrect: false
      },
      {
        text: "Seleccionar un cambio bajo y evitar usar los frenos.",
        isCorrect: false
      },
    ]
  },
  {
    text: "\u00bfCu\u00e1l o cu\u00e1les de las siguientes afirmaciones es(son) verdadera(s) en cuanto al desarrollo de la moral de un individuo?",
    image: null,
    answers: [
      {
        text: "Durante la infancia, antes de llegar a la edad escolar, las personas son egoc\u00e9ntricas y piensan sobre todo en ellas mismas.",
        isCorrect: true
      },
      {
        text: "Los conocimientos y la experiencia hacen que las personas se vuelvan m\u00e1s comprensivas.",
        isCorrect: false
      },
      {
        text: "Como la moral de las personas es algo innato, no se puede cambiar.",
        isCorrect: false
      },
      {
        text: "El comportamiento que tiene una persona como conductor muestra cu\u00e1nto ha avanzado en el desarrollo de su moral.",
        isCorrect: false
      },
    ]
  },
  {
    text: "\u00bfQu\u00e9 puede esperarse de un conductor impulsivo?",
    image: null,
    answers: [
      {
        text: "Que reaccione adecuadamente ante cualquier imprevisto.",
        isCorrect: true
      },
      {
        text: "Que act\u00fae sin pensar en las consecuencias.",
        isCorrect: false
      },
      {
        text: "Que conduzca con excesiva precauci\u00f3n.",
        isCorrect: false
      },
      {
        text: "Que efect\u00fae maniobras sorpresivas que sorprendan a los dem\u00e1s.",
        isCorrect: false
      },
    ]
  },
  {
    text: "De las siguientes afirmaciones, \u00bfcu\u00e1l o cu\u00e1les es(son) verdadera(s)?",
    image: null,
    answers: [
      {
        text: "El tener una buena visi\u00f3n es imprescindible para poder captar las diversas situaciones que se presentan al conducir.",
        isCorrect: true
      },
      {
        text: "Existe un alto riesgo de que los conductores cuyo campo visual no es lo suficientemente amplio, no alcancen a reaccionar a tiempo ante peligros provenientes de los lados.",
        isCorrect: false
      },
      {
        text: "Si usted conduce durante un largo tiempo en condiciones dif\u00edciles, puede tener problemas para apreciar correctamente lo que ve y, por lo tanto, tomar decisiones equivocadas.",
        isCorrect: false
      },
      {
        text: "Las personas j\u00f3venes son m\u00e1s sensibles a la luz deslumbrante que los mayores.",
        isCorrect: false
      },
    ]
  },
  {
    text: "En relaci\u00f3n con el cansancio y la conducci\u00f3n, de las siguientes afirmaciones, \u00bfcu\u00e1l es falsa?",
    image: null,
    answers: [
      {
        text: "El cansancio es una causa importante de los accidentes que se registran en carreteras.",
        isCorrect: true
      },
      {
        text: "Un conductor cansado ve empeorada su capacidad de reacci\u00f3n.",
        isCorrect: false
      },
      {
        text: "Si un conductor est\u00e1 cansado, lo mejor es que su acompa\u00f1ante le vaya hablando permanentemente.",
        isCorrect: false
      },
      {
        text: "El desorientarse y plantearse preguntas tales como, \u00bfpas\u00e9 ya la ciudad X o a\u00fan no?, es un s\u00edntoma de cansancio.",
        isCorrect: false
      },
    ]
  },
  {
    text: "De los siguientes efectos, \u00bfcu\u00e1l no es consecuencia del consumo de alcohol antes de conducir?",
    image: null,
    answers: [
      {
        text: "Falsa sensaci\u00f3n de confianza.",
        isCorrect: true
      },
      {
        text: "Mayor conciencia del peligro.",
        isCorrect: false
      },
      {
        text: "Menor control del veh\u00edculo.",
        isCorrect: false
      },
      {
        text: "Escaso juicio de la velocidad.",
        isCorrect: false
      },
    ]
  },
  {
    text: "Al aproximarse a una curva hacia la izquierda usted deber\u00eda mantenerse bien a la derecha. \u00bfPor qu\u00e9?",
    image: null,
    answers: [
      {
        text: "Para superar el efecto de pendiente de la calzada.",
        isCorrect: true
      },
      {
        text: "Para tener una mejor visual sobre el camino.",
        isCorrect: false
      },
      {
        text: "Para permitirle el adelantamiento a quienes vienen r\u00e1pido detr\u00e1s suyo.",
        isCorrect: false
      },
      {
        text: "Para estar en una ubicaci\u00f3n m\u00e1s segura en caso que el veh\u00edculo se roncee.",
        isCorrect: false
      },
    ]
  },
  {
    text: "Usted conduce por una v\u00eda r\u00e1pida en muy buenas condiciones. Por seguridad, \u00bfqu\u00e9 distancia deber\u00eda mantener usted respecto del veh\u00edculo que va delante suyo?",
    image: null,
    answers: [
      {
        text: "Un espacio equivalente al que usted recorre en 3 segundos.",
        isCorrect: true
      },
      {
        text: "Un espacio igual al largo de un auto.",
        isCorrect: false
      },
      {
        text: "3 metros.",
        isCorrect: false
      },
      {
        text: "Un espacio igual al largo de 3 autos.",
        isCorrect: false
      },
    ]
  },
  {
    text: "En un camino muy transitado usted desea adelantar a un cami\u00f3n con remolque que va lentamente delante suyo, \u00bfqu\u00e9 deber\u00eda hacer usted?",
    image: null,
    answers: [
      {
        text: "Mantenerse bien atr\u00e1s del cami\u00f3n hasta que pueda ver que tiene espacio suficiente como para adelantarlo.",
        isCorrect: true
      },
      {
        text: "Esperar atr\u00e1s del cami\u00f3n hasta que su conductor le indique que puede adelantarlo.",
        isCorrect: false
      },
      {
        text: "Encender y apagar sus luces para que quienes vienen en contra le faciliten el adelantamiento.",
        isCorrect: false
      },
      {
        text: "Seguir muy de cerca al cami\u00f3n desplaz\u00e1ndose permanentemente hacia el centro de la calzada para poder ver hacia adelante.",
        isCorrect: false
      },
    ]
  },
  {
    text: "La mayor parte de los accidentes de tr\u00e1nsito se produce en:",
    image: null,
    answers: [
      {
        text: "Carreteras",
        isCorrect: true
      },
      {
        text: "Salidas de colegios",
        isCorrect: false
      },
      {
        text: "Caminos rurales",
        isCorrect: false
      },
      {
        text: "Intersecciones",
        isCorrect: false
      },
    ]
  },
  {
    text: "Usted va conduciendo su veh\u00edculo a 90 km/h que es la velocidad m\u00e1xima permitida en esa v\u00eda. \u00bfQu\u00e9 hace usted si a pesar de todo un veh\u00edculo desea adelantarlo?",
    image: "/placeholder-image.png",
    answers: [
      {
        text: "Conduce lo m\u00e1s a la derecha posible.",
        isCorrect: true
      },
      {
        text: "Se desplaza hacia la berma y circula por ella.",
        isCorrect: false
      },
      {
        text: "Enciende sus luces de advertencia de peligro.",
        isCorrect: false
      },
      {
        text: "No acelera.",
        isCorrect: false
      },
    ]
  },
  {
    text: "Usted ha comenzado a adelantar. El auto de la derecha va a aproximadamente 80 km/h. Por su espejo retrovisor usted ve otro auto que tiene intenci\u00f3n de adelantar. \u00bfQu\u00e9 hace usted?",
    image: "/placeholder-image.png",
    answers: [
      {
        text: "Frena ligeramente y vuelve a la pista derecha.",
        isCorrect: true
      },
      {
        text: "Acelera y adelanta, porque el auto que usted adelanta tiene la obligaci\u00f3n de reducir la velocidad.",
        isCorrect: false
      },
      {
        text: "Acelera y adelanta tan r\u00e1pido como pueda, para no obstaculizar al que viene detr\u00e1s suyo.",
        isCorrect: false
      },
      {
        text: "Acelera y adelanta, ya que el ancho de la calzada es suficiente para 3 veh\u00edculos si el que viene en contra se corre bien a su derecha.",
        isCorrect: false
      },
    ]
  },
  {
    text: "\u00bfA cu\u00e1ntos metros de una esquina es lo m\u00e1s cerca que usted puede estacionar?",
    image: "/placeholder-image.png",
    answers: [
      {
        text: "5 metros",
        isCorrect: true
      },
      {
        text: "10 metros",
        isCorrect: false
      },
      {
        text: "12 metros",
        isCorrect: false
      },
      {
        text: "15 metros",
        isCorrect: false
      },
    ]
  },
  {
    text: "El conductor detr\u00e1s suyo le sigue muy de cerca. \u00bfQu\u00e9 hace usted?",
    image: null,
    answers: [
      {
        text: "Se\u00f1aliza a la derecha y le indica con lo mano para que lo adelante.",
        isCorrect: true
      },
      {
        text: "Disminuye la velocidad y le permite que lo adelante.",
        isCorrect: false
      },
      {
        text: "No hace nada y se mantiene dentro del l\u00edmite de velocidad.",
        isCorrect: false
      },
      {
        text: "Se acerca hacia el centro de la calzada.",
        isCorrect: false
      },
    ]
  },
  {
    text: "Usted va conduciendo a la velocidad m\u00e1xima permitida. Un veh\u00edculo se acerca muy r\u00e1pido por atr\u00e1s encendiendo y apagando sus luces. \u00bfQu\u00e9 hace usted?",
    image: null,
    answers: [
      {
        text: "Acelera para mantener un espacio adecuado detr\u00e1s suyo.",
        isCorrect: true
      },
      {
        text: "Presiona su freno para mostrarle sus luces de freno.",
        isCorrect: false
      },
      {
        text: "Le permite el adelantamiento.",
        isCorrect: false
      },
      {
        text: "Aumenta su velocidad y le impide que lo adelante.",
        isCorrect: false
      },
    ]
  },
  {
    text: "Usted se detiene ante un cruce cebra. En la vereda hay peatones esperando, pero ellos no comienzan a cruzar. \u00bfQu\u00e9 hace usted?",
    image: null,
    answers: [
      {
        text: "Les toca la bocina para apurarlos.",
        isCorrect: true
      },
      {
        text: "Tiene paciencia y espera.",
        isCorrect: false
      },
      {
        text: "Prosigue su marcha.",
        isCorrect: false
      },
      {
        text: "Les hace se\u00f1as con la mano apur\u00e1ndolos para que crucen.",
        isCorrect: false
      },
    ]
  },
  {
    text: "Usted va conduciendo por un camino de doble tr\u00e1nsito cuando se encuentra con personas que van a caballo delante suyo. \u00bfQu\u00e9 es lo primero que usted deber\u00eda hacer?",
    image: null,
    answers: [
      {
        text: "Desplazarse hacia el centro de la calzada.",
        isCorrect: true
      },
      {
        text: "Acelerar alrededor de ellos.",
        isCorrect: false
      },
      {
        text: "Se\u00f1alizar hacia la izquierda.",
        isCorrect: false
      },
      {
        text: "Prepararse para reducir la velocidad.",
        isCorrect: false
      },
    ]
  },
  {
    text: "\u00bfC\u00f3mo deber\u00eda usted adelantar a personas que van a caballo?",
    image: null,
    answers: [
      {
        text: "Conduciendo lentamente y dejando bastante espacio lateral.",
        isCorrect: true
      },
      {
        text: "Pasando cerca de ellas y adelant\u00e1ndolas lo antes posible.",
        isCorrect: false
      },
      {
        text: "La velocidad no es importante, pero s\u00ed el dejar suficiente espacio lateral.",
        isCorrect: false
      },
      {
        text: "Tocando la bocina s\u00f3lo una vez como se\u00f1al de advertencia.",
        isCorrect: false
      },
    ]
  },
  {
    text: "Al estacionar su veh\u00edculo en un lugar en el que no hay se\u00f1ales que lo permitan ni que lo prohiban, usted no debe \u2026.",
    image: null,
    answers: [
      {
        text: "Dejar el freno de mano puesto.",
        isCorrect: true
      },
      {
        text: "Detener el motor.",
        isCorrect: false
      },
      {
        text: "Obstaculizar el tr\u00e1nsito a otros usuarios de la v\u00eda.",
        isCorrect: false
      },
      {
        text: "Estacionar al costado derecho de la calzada.",
        isCorrect: false
      },
    ]
  },
  {
    text: "\u00bfCu\u00e1l o cu\u00e1les de las siguientes afirmaciones es(son) correcta(s) en cuanto a la conducci\u00f3n nocturna en un camino rural?",
    image: null,
    answers: [
      {
        text: "Al cruzarse con otro veh\u00edculo siempre hay que poner luces bajas para no encandilar a su conductor.",
        isCorrect: true
      },
      {
        text: "Al acercarse por atr\u00e1s a otro veh\u00edculo hay que poner luces bajas.",
        isCorrect: false
      },
      {
        text: "Al cruzarse con un ciclista no es necesario poner luces bajas.",
        isCorrect: false
      },
      {
        text: "Si el camino es ancho no es necesario poner luces bajas al cruzarse con otro veh\u00edculo.",
        isCorrect: false
      },
    ]
  },
  {
    text: "\u00bfCu\u00e1ndo es su distancia de detenci\u00f3n total mucho m\u00e1s larga?",
    image: null,
    answers: [
      {
        text: "Cuando hay neblina.",
        isCorrect: true
      },
      {
        text: "Cuando es de noche.",
        isCorrect: false
      },
      {
        text: "Cuando est\u00e1 lloviendo.",
        isCorrect: false
      },
      {
        text: "Cuando hay vientos fuertes.",
        isCorrect: false
      },
    ]
  },
  {
    text: "En una calle de una pista por sentido de tr\u00e1nsito usted se encuentra con que su pista est\u00e1 obstruida. \u00bfQu\u00e9 hace usted?",
    image: "/placeholder-image.png",
    answers: [
      {
        text: "Contin\u00faa, porque usted tiene el derecho a v\u00eda.",
        isCorrect: true
      },
      {
        text: "Hace se\u00f1as con la mano a quienes vienen en contra para que le den la pasada.",
        isCorrect: false
      },
      {
        text: "Cede el paso al tr\u00e1nsito que viene en sentido contrario.",
        isCorrect: false
      },
      {
        text: "Acelera para poder pasar primero.",
        isCorrect: false
      },
    ]
  },
  {
    text: "En relaci\u00f3n con el transporte de una carga sobre la parrilla de un autom\u00f3vil, \u00bfcu\u00e1l de las siguientes afirmaciones constituye una obligaci\u00f3n para el conductor?",
    image: null,
    answers: [
      {
        text: "Debe llevarse s\u00f3lo cuando es estrictamente necesario.",
        isCorrect: true
      },
      {
        text: "Debe ser lo m\u00e1s liviana posible.",
        isCorrect: false
      },
      {
        text: "Debe estar cubierta con un pl\u00e1stico.",
        isCorrect: false
      },
      {
        text: "Debe estar muy bien sujeta.",
        isCorrect: false
      },
    ]
  },
  {
    text: "\u00bfC\u00f3mo puede usted detener el zigzagueo de una casa rodante que va remolcando?",
    image: null,
    answers: [
      {
        text: "Moviendo el volante lentamente hacia cada lado.",
        isCorrect: true
      },
      {
        text: "Acelerando para aumentar la velocidad.",
        isCorrect: false
      },
      {
        text: "Disminuyendo la velocidad gradualmente.",
        isCorrect: false
      },
      {
        text: "Deteni\u00e9ndose lo m\u00e1s r\u00e1pido que pueda.",
        isCorrect: false
      },
    ]
  },
  {
    text: "Al ir circulando en su veh\u00edculo usted enfrenta esta se\u00f1al. \u00bfQu\u00e9 significa?",
    image: "/placeholder-image.png",
    answers: [
      {
        text: "Que usted puede conducir hasta un 10% m\u00e1s r\u00e1pido, porque la se\u00f1al es s\u00f3lo una recomendaci\u00f3n.",
        isCorrect: true
      },
      {
        text: "Que en d\u00edas no h\u00e1biles, cuando hay poco tr\u00e1nsito, no rige tal restricci\u00f3n.",
        isCorrect: false
      },
      {
        text: "Que usted no debe exceder esta velocidad.",
        isCorrect: false
      },
      {
        text: "Que usted debe mantener una velocidad inferior a la indicada en la se\u00f1al.",
        isCorrect: false
      },
    ]
  },
  {
    text: "\u00bfQu\u00e9 significa esta se\u00f1al?",
    image: "/placeholder-image.png",
    answers: [
      {
        text: "Sem\u00e1foro fuera de servicio.",
        isCorrect: true
      },
      {
        text: "Proximidad de sem\u00e1foro.",
        isCorrect: false
      },
      {
        text: "Sem\u00e1foro activado por peatones.",
        isCorrect: false
      },
      {
        text: "Sem\u00e1foros sincronizados.",
        isCorrect: false
      },
    ]
  },
  {
    text: "\u00bfQu\u00e9 significa un sem\u00e1foro en rojo?",
    image: null,
    answers: [
      {
        text: "Que usted puede seguir su camino si no vienen veh\u00edculos por la otra v\u00eda.",
        isCorrect: true
      },
      {
        text: "Que usted debe disminuir su velocidad y estar preparado para detenerse.",
        isCorrect: false
      },
      {
        text: "Que usted debe detenerse antes de la l\u00ednea de detenci\u00f3n de veh\u00edculos.",
        isCorrect: false
      },
      {
        text: "Que usted debe detenerse sobre el paso de peatones.",
        isCorrect: false
      },
    ]
  },
  {
    text: "\u00bfPara qu\u00e9 sirven las se\u00f1ales amarillas con forma de rombo?",
    image: "/placeholder-image.png",
    answers: [
      {
        text: "Para entregar informaci\u00f3n.",
        isCorrect: true
      },
      {
        text: "Para dar \u00f3rdenes.",
        isCorrect: false
      },
      {
        text: "Para indicar direcciones.",
        isCorrect: false
      },
      {
        text: "Para advertir acerca de peligros.",
        isCorrect: false
      },
    ]
  },
  {
    text: "\u00bfCu\u00e1l de estas se\u00f1ales le previene que m\u00e1s adelante hay una serie de curvas?",
    image: "/placeholder-image.png",
    answers: [
      {
        text: "A",
        isCorrect: true
      },
      {
        text: "B",
        isCorrect: false
      },
      {
        text: "C",
        isCorrect: false
      },
      {
        text: "D",
        isCorrect: false
      },
    ]
  },
  {
    text: "\u00bfCu\u00e1l de estas se\u00f1ales le advierte la proximidad de un cruce de peatones?",
    image: "/placeholder-image.png",
    answers: [
      {
        text: "A",
        isCorrect: true
      },
      {
        text: "B",
        isCorrect: false
      },
      {
        text: "C",
        isCorrect: false
      },
      {
        text: "D",
        isCorrect: false
      },
    ]
  },
  {
    text: "Mientras conduce usted siente un fuerte olor a gasolina. \u00bfQu\u00e9 deber\u00eda hacer usted?",
    image: null,
    answers: [
      {
        text: "No preocuparse, ya que s\u00f3lo son los gases de escape.",
        isCorrect: true
      },
      {
        text: "Continuar a una velocidad reducida.",
        isCorrect: false
      },
      {
        text: "Continuar porque sabe que se detendr\u00e1 algunos kil\u00f3metros m\u00e1s all\u00e1.",
        isCorrect: false
      },
      {
        text: "Detenerse e investigar el problema.",
        isCorrect: false
      },
    ]
  },
  {
    text: "\u00bfQu\u00e9 significa esta luz de advertencia en el panel de instrumentos",
    image: "/placeholder-image.png",
    answers: [
      {
        text: "Luces neblineras.",
        isCorrect: true
      },
      {
        text: "Intermitentes de advertencia de peligro.",
        isCorrect: false
      },
      {
        text: "Luces altas.",
        isCorrect: false
      },
      {
        text: "Freno de mano puesto.",
        isCorrect: false
      },
    ]
  },
  {
    text: "Las luces de advertencia de peligro deber\u00edan ser usadas:",
    image: null,
    answers: [
      {
        text: "Cuando estaciona en doble fila respecto a otro veh\u00edculo estacionado junto a la cuneta.",
        isCorrect: true
      },
      {
        text: "Para advertir a quienes vienen detr\u00e1s de un peligro que hay m\u00e1s adelante.",
        isCorrect: false
      },
      {
        text: "Para advertir a quienes vienen detr\u00e1s suyo que usted pretende virar.",
        isCorrect: false
      },
      {
        text: "Para advertir a los dem\u00e1s que usted tiene prisa.",
        isCorrect: false
      },
    ]
  },
  {
    text: "Usted est\u00e1 probando la suspensi\u00f3n de su veh\u00edculo cuando nota que \u00e9ste rebota u oscila al cargarlo en un extremo lateral frontal. \u00bfQu\u00e9 significa esto?",
    image: null,
    answers: [
      {
        text: "Neum\u00e1ticos gastados.",
        isCorrect: true
      },
      {
        text: "Neum\u00e1ticos poco inflados.",
        isCorrect: false
      },
      {
        text: "Volante de direcci\u00f3n no centrado.",
        isCorrect: false
      },
      {
        text: "Amortiguadores gastados.",
        isCorrect: false
      },
    ]
  },
  {
    text: "\u00bfPor qu\u00e9 usted no deber\u00eda conducir presionando el pedal de embrague durante m\u00e1s tiempo que el necesario?",
    image: null,
    answers: [
      {
        text: "Porque reduce su control sobre el veh\u00edculo.",
        isCorrect: true
      },
      {
        text: "Porque aumenta el desgaste de la caja de cambios.",
        isCorrect: false
      },
      {
        text: "Porque aumenta el consumo de combustible.",
        isCorrect: false
      },
      {
        text: "Porque reduce el agarre de los neum\u00e1ticos.",
        isCorrect: false
      },
    ]
  },
  {
    text: "Usted va a 70 km/hr. Aproximadamente, \u00bfqu\u00e9 distancia recorrer\u00e1 su veh\u00edculo desde el momento en que usted se percata de un peligro que hay m\u00e1s adelante hasta que comienza a frenar?",
    image: null,
    answers: [
      {
        text: "Unos 5 metros.",
        isCorrect: true
      },
      {
        text: "Unos 8 metros.",
        isCorrect: false
      },
      {
        text: "Unos 20 metros.",
        isCorrect: false
      },
      {
        text: "Unos 30 metros.",
        isCorrect: false
      },
    ]
  },
  {
    text: "\u00bfCu\u00e1l es el tiempo de reacci\u00f3n promedio de un conductor ante un imprevisto?",
    image: null,
    answers: [
      {
        text: "1 segundo",
        isCorrect: true
      },
      {
        text: "0.1 minuto",
        isCorrect: false
      },
      {
        text: "0.1 segundo",
        isCorrect: false
      },
      {
        text: "2 segundos",
        isCorrect: false
      },
    ]
  },
  {
    text: "\u00bfCu\u00e1l de las siguientes afirmaciones es correcta en cuanto a la capacidad de reacci\u00f3n de los conductores j\u00f3venes inexpertos, comparados con conductores experimentados cuya edad fluct\u00faa entre 35 y 50 a\u00f1os?",
    image: null,
    answers: [
      {
        text: "Ante situaciones complejas, los conductores j\u00f3venes reaccionan m\u00e1s r\u00e1pido.",
        isCorrect: true
      },
      {
        text: "Los conductores j\u00f3venes reaccionan siempre con mayor rapidez.",
        isCorrect: false
      },
      {
        text: "No hay diferencia entre la capacidad de reacci\u00f3n de los conductores j\u00f3venes inexpertos y la de los mayores.",
        isCorrect: false
      },
      {
        text: "En situaciones reales, que requieren reacciones complejas, los conductores experimentados reaccionan en un tiempo m\u00e1s corto que los j\u00f3venes inexpertos.",
        isCorrect: false
      },
    ]
  },
  {
    text: "En cuanto al estr\u00e9s al conducir, \u00bfcu\u00e1l de las siguientes afirmaciones es falsa?",
    image: null,
    answers: [
      {
        text: "Un grado demasiado alto de estr\u00e9s disminuye su campo de atenci\u00f3n.",
        isCorrect: true
      },
      {
        text: "Un estr\u00e9s moderado puede contribuir a mejorar su rendimiento.",
        isCorrect: false
      },
      {
        text: "Un conductor muy estresado puede tener reacciones de p\u00e1nico.",
        isCorrect: false
      },
      {
        text: "El estr\u00e9s no influye en absoluto en los actos de un conductor.",
        isCorrect: false
      },
    ]
  },
  {
    text: "\u00bfQu\u00e9 efecto(s) sobre la visi\u00f3n tiene el conducir a unos 100 km/h?",
    image: null,
    answers: [
      {
        text: "A la mayor\u00eda de los conductores se les cansa la vista despu\u00e9s de conducir m\u00e1s o menos media hora.",
        isCorrect: true
      },
      {
        text: "El campo visual se reduce, ya que a esa velocidad se tiende a fijar la mirada recta a lo lejos.",
        isCorrect: false
      },
      {
        text: "Resulta m\u00e1s dif\u00edcil percibir movimientos a los lados de la carretera.",
        isCorrect: false
      },
      {
        text: "La visi\u00f3n se adapta autom\u00e1ticamente a la alta velocidad y, por lo tanto, el resto del tr\u00e1nsito se percibe igual que al ir a una velocidad baja.",
        isCorrect: false
      },
    ]
  },
  {
    text: "\u00bfQu\u00e9 deber\u00eda hacer usted si est\u00e1 tomando un remedio para la tos y no est\u00e1 seguro si \u00e9ste puede afectar su conducci\u00f3n?",
    image: null,
    answers: [
      {
        text: "No conducir tan pronto haya ingerido el remedio, sino que esperar un rato.",
        isCorrect: true
      },
      {
        text: "Conducir siempre que se sienta bien.",
        isCorrect: false
      },
      {
        text: "Preguntar a su doctor.",
        isCorrect: false
      },
      {
        text: "Solicitar consejo a un amigo o pariente.",
        isCorrect: false
      },
    ]
  },
  {
    text: "\u00bfQu\u00e9 precauciones debe tomar un conductor cuando asiste a un evento social?",
    image: null,
    answers: [
      {
        text: "Beber bastante caf\u00e9 despu\u00e9s de ingerir bebidas alcoh\u00f3licas.",
        isCorrect: true
      },
      {
        text: "Evitar circular por calles de mucho tr\u00e1fico despu\u00e9s de beber alcohol.",
        isCorrect: false
      },
      {
        text: "Evitar beber alcohol con el est\u00f3mago vac\u00edo.",
        isCorrect: false
      },
      {
        text: "Evitar consumir alcohol.",
        isCorrect: false
      },
    ]
  },
  {
    text: "En relaci\u00f3n con los cruces ferroviarios a nivel, \u00bfcu\u00e1l o cu\u00e1les de las siguientes afirmaciones es(son) verdadera(s)?",
    image: null,
    answers: [
      {
        text: "Extra\u00f1amente, est\u00e1 permitido estacionar a 10 m de un cruce ferroviario a nivel.",
        isCorrect: true
      },
      {
        text: "Si ya ha ingresado a un cruce ferroviario y siente que se aproxima un tren a lo lejos, lo mejor es continuar.",
        isCorrect: false
      },
      {
        text: "Si va con la radio de su veh\u00edculo encendida, es conveniente apagarla cuando se aproxima a un cruce ferroviario.",
        isCorrect: false
      },
      {
        text: "Nada impide que pueda efectuar un adelantamiento en un cruce ferroviario, si no siente tren alguno en las proximidades.",
        isCorrect: false
      },
    ]
  },
  {
    text: "Usted est\u00e1 esperando en un cruce en T. El veh\u00edculo azul que se acerca desde la izquierda se\u00f1aliza a la derecha. \u00bfQu\u00e9 deber\u00eda hacer usted?",
    image: "/placeholder-image.png",
    answers: [
      {
        text: "Avanzar acelerando a fondo.",
        isCorrect: true
      },
      {
        text: "Ponerse en marcha antes de que el veh\u00edculo azul llegue al cruce.",
        isCorrect: false
      },
      {
        text: "Esperar hasta que el veh\u00edculo azul haya comenzado a virar.",
        isCorrect: false
      },
      {
        text: "Avanzar lentamente.",
        isCorrect: false
      },
    ]
  },
  {
    text: "\u00bfQu\u00e9 deber\u00eda hacer el conductor del auto indicado con la flecha?",
    image: "/placeholder-image.png",
    answers: [
      {
        text: "Hacer se\u00f1as con la mano a los peatones que est\u00e1n esperando poder cruzar.",
        isCorrect: true
      },
      {
        text: "Pasar r\u00e1pidamente por detr\u00e1s del peat\u00f3n que va cruzando la calzada.",
        isCorrect: false
      },
      {
        text: "Esperar a que pase el peat\u00f3n que va por la calzada.",
        isCorrect: false
      },
      {
        text: "Decirle al peat\u00f3n que no deber\u00eda haber cruzado.",
        isCorrect: false
      },
    ]
  },
  {
    text: "\u00bfQu\u00e9 hace usted ante esta situaci\u00f3n?",
    image: "/placeholder-image.png",
    answers: [
      {
        text: "Hace se\u00f1ales a los peatones para que se alejen de la calzada.",
        isCorrect: true
      },
      {
        text: "Reduce su velocidad y contin\u00faa conduciendo.",
        isCorrect: false
      },
      {
        text: "Hace se\u00f1ales de luces al veh\u00edculo que viene en contra para que espere a que usted haya pasado.",
        isCorrect: false
      },
      {
        text: "Espera y deja pasar primero al veh\u00edculo que viene en contra, y luego usted contin\u00faa y pasa a los peatones.",
        isCorrect: false
      },
    ]
  },
  {
    text: "Las fotograf\u00edas muestran una secuencia cronol\u00f3gica de im\u00e1genes. \u00bfCu\u00e1les son las 2 principales causas por las que surge esta situaci\u00f3n de peligro?",
    image: "/placeholder-image.png",
    answers: [
      {
        text: "Por adelantar en un lugar prohibido.",
        isCorrect: true
      },
      {
        text: "Por mala visibilidad.",
        isCorrect: false
      },
      {
        text: "Porque el veh\u00edculo adelantado no anda lo suficientemente a la derecha.",
        isCorrect: false
      },
      {
        text: "Porque el conductor del auto que llega a la carretera por la izquierda ingresa a \u00e9sta cuando no debi\u00f3 haberlo hecho.",
        isCorrect: false
      },
    ]
  },
  {
    text: "Fuera de la ciudad, usted va por una carretera de doble calzada con dos pistas por sentido. La velocidad m\u00e1xima permitida es de 100 km/hr. Si usted va a 90 km/hr y no van veh\u00edculos delante suyo, \u00bfpor cu\u00e1l pista circula usted?",
    image: null,
    answers: [
      {
        text: "Por la pista de la izquierda.",
        isCorrect: true
      },
      {
        text: "Por la pista de la derecha.",
        isCorrect: false
      },
      {
        text: "Por cualquiera de las dos pistas.",
        isCorrect: false
      },
    ]
  },
  {
    text: "\u00bfEs seguro permitir que los ni\u00f1os viajen en un veh\u00edculo de 3 o 5 puertas en el espacio que queda detr\u00e1s de los asientos traseros?",
    image: null,
    answers: [
      {
        text: "No, en ninguna circunstancia.",
        isCorrect: true
      },
      {
        text: "S\u00ed, siempre que usted pueda ver sin problemas hacia atr\u00e1s.",
        isCorrect: false
      },
      {
        text: "S\u00ed, si son menores de 10 a\u00f1os.",
        isCorrect: false
      },
      {
        text: "No, a menos que los dem\u00e1s asientos est\u00e9n ocupados.",
        isCorrect: false
      },
    ]
  },
  {
    text: "Usted va a dejar su veh\u00edculo estacionado. \u00bfEn qu\u00e9 caso puede dejarlo con el motor funcionando?",
    image: null,
    answers: [
      {
        text: "En ning\u00fan caso.",
        isCorrect: true
      },
      {
        text: "Si va a estar estacionado menos de 5 minutos.",
        isCorrect: false
      },
      {
        text: "Si la bater\u00eda est\u00e1 descargada.",
        isCorrect: false
      },
      {
        text: "Si en el veh\u00edculo va a permanecer una persona.",
        isCorrect: false
      },
    ]
  },
  {
    text: "\u00bfEn cu\u00e1les 3 de las siguientes ocasiones debe usted detener siempre su veh\u00edculo?",
    image: null,
    answers: [
      {
        text: "Al verse involucrado en un accidente.",
        isCorrect: true
      },
      {
        text: "Al enfrentar una se\u00f1al CEDA EL PASO.",
        isCorrect: false
      },
      {
        text: "Al enfrentar una luz roja de un sem\u00e1foro.",
        isCorrect: false
      },
      {
        text: "Ante un cruce cebra en el que no hay peatones cruzando ni esperando para cruzar.",
        isCorrect: false
      },
      {
        text: "Cuando un Carabinero se lo solicita.",
        isCorrect: false
      },
    ]
  },
  {
    text: "\u00bfAdquiere usted un derecho sobre otros usuarios de la v\u00eda cuando utiliza sus luces indicadoras de viraje?",
    image: null,
    answers: [
      {
        text: "S\u00ed, el usar las luces indicadoras de viraje le da a usted preferencia sobre los conductores que van en igual direcci\u00f3n a la suya.",
        isCorrect: true
      },
      {
        text: "S\u00ed, y adem\u00e1s de darle a usted preferencia le exime de cualquier responsabilidad.",
        isCorrect: false
      },
      {
        text: "No, porque usted s\u00f3lo est\u00e1 advirtiendo su intenci\u00f3n de realizar una maniobra que har\u00e1 cuando sea seguro hacerla.",
        isCorrect: false
      },
      {
        text: "S\u00ed, pero s\u00f3lo en el caso que usted est\u00e9 tratando de abandonar un estacionamiento al borde de la calzada.",
        isCorrect: false
      },
    ]
  },
  {
    text: "\u00bfDe qu\u00e9 le advierte esta se\u00f1al?",
    image: "/placeholder-image.png",
    answers: [
      {
        text: "De la posible presencia de escolares.",
        isCorrect: true
      },
      {
        text: "De la proximidad de un cruce de peatones.",
        isCorrect: false
      },
      {
        text: "De la posible presencia de ni\u00f1os jugando.",
        isCorrect: false
      },
      {
        text: "De la proximidad de un parque o plaza.",
        isCorrect: false
      },
    ]
  },
  {
    text: "Viajando de noche usted es encandilado por las luces de un veh\u00edculo que viene en sentido contrario, \u00bfqu\u00e9 deber\u00eda hacer usted?",
    image: null,
    answers: [
      {
        text: "Bajar su visor de protecci\u00f3n solar.",
        isCorrect: true
      },
      {
        text: "Poner luces delanteras altas.",
        isCorrect: false
      },
      {
        text: "Poner su mano sobre sus ojos.",
        isCorrect: false
      },
      {
        text: "Bajar la velocidad y eventualmente detenerse.",
        isCorrect: false
      },
    ]
  },
  {
    text: "Cuando la calzada est\u00e1 con hielo la distancia de frenado puede ser \u2026",
    image: null,
    answers: [
      {
        text: "2 veces la distancia normal.",
        isCorrect: true
      },
      {
        text: "5 veces la distancia normal.",
        isCorrect: false
      },
      {
        text: "7 veces la distancia normal.",
        isCorrect: false
      },
      {
        text: "10 veces la distancia normal.",
        isCorrect: false
      },
    ]
  },
  {
    text: "Al conducir con neblina a la luz del d\u00eda, \u00bfqu\u00e9 luces enciende usted ?",
    image: null,
    answers: [
      {
        text: "Las luces delanteras bajas.",
        isCorrect: true
      },
      {
        text: "Las luces de estacionamiento.",
        isCorrect: false
      },
      {
        text: "Las luces delanteras altas.",
        isCorrect: false
      },
      {
        text: "Las luces de advertencia de peligro.",
        isCorrect: false
      },
    ]
  },
  {
    text: "\u00bfC\u00f3mo puede usted evitar que su veh\u00edculo patine cuando la calzada est\u00e1 cubierta con una capa de hielo?",
    image: null,
    answers: [
      {
        text: "Usando el freno de mano si las ruedas comienzan a resbalar.",
        isCorrect: true
      },
      {
        text: "Conduciendo a una velocidad baja en el cambio m\u00e1s alto posible.",
        isCorrect: false
      },
      {
        text: "Frenando suave y repetidamente.",
        isCorrect: false
      },
      {
        text: "Conduciendo en un cambio bajo todo el tiempo.",
        isCorrect: false
      },
    ]
  },
  {
    text: "Usted est\u00e1 enfrentando un sem\u00e1foro en amarillo. \u00bfQu\u00e9 luces se encender\u00e1n despu\u00e9s?",
    image: null,
    answers: [
      {
        text: "Primero la roja y luego la amarilla nuevamente.",
        isCorrect: true
      },
      {
        text: "Primero la roja y luego la verde.",
        isCorrect: false
      },
      {
        text: "Primero la verde y luego la roja.",
        isCorrect: false
      },
      {
        text: "Primero la verde y luego la amarilla nuevamente.",
        isCorrect: false
      },
    ]
  },
  {
    text: "De acuerdo a las circunstancias que se aprecian en la fotograf\u00eda, \u00bfser\u00eda correcto que el autom\u00f3vil indicado con la flecha continuara derecho ?",
    image: "/placeholder-image.png",
    answers: [
      {
        text: "Si",
        isCorrect: true
      },
      {
        text: "No",
        isCorrect: false
      },
    ]
  },
  {
    text: "En un autom\u00f3vil, \u00bfcu\u00e1l de los siguientes elementos reduce el riesgo de lesiones de cuello en una colisi\u00f3n?",
    image: null,
    answers: [
      {
        text: "Un asiento dotado de air-bag (bolsa de aire).",
        isCorrect: true
      },
      {
        text: "Los frenos ABS.",
        isCorrect: false
      },
      {
        text: "Una columna de direcci\u00f3n colapsable.",
        isCorrect: false
      },
      {
        text: "Un asiento con apoya-cabeza ajustado en forma apropiada.",
        isCorrect: false
      },
    ]
  },
  {
    text: "\u00bfQu\u00e9 es lo que usted nunca deber\u00eda hacer en una bomba de bencina?",
    image: null,
    answers: [
      {
        text: "Circular por ella",
        isCorrect: true
      },
      {
        text: "Fumar",
        isCorrect: false
      },
      {
        text: "Comer",
        isCorrect: false
      },
      {
        text: "Lavar los parabrisas",
        isCorrect: false
      },
    ]
  },
  {
    text: "Usted est\u00e1 descendiendo una pendiente muy larga. \u00bfQu\u00e9 deber\u00eda hacer para ayudar a controlar la velocidad de su veh\u00edculo?",
    image: null,
    answers: [
      {
        text: "Tomar el manubrio firmemente.",
        isCorrect: true
      },
      {
        text: "Seleccionar una marcha baja.",
        isCorrect: false
      },
      {
        text: "Seleccionar neutro.",
        isCorrect: false
      },
      {
        text: "Presionar el pedal de embrague.",
        isCorrect: false
      },
    ]
  },
  {
    text: "Su doctor le ha recetado un tratamiento. \u00bfPor qu\u00e9 usted debe consultarle si puede conducir o no?",
    image: null,
    answers: [
      {
        text: "Porque algunas medicinas pueden hacer que sus reacciones sean m\u00e1s lentas.",
        isCorrect: true
      },
      {
        text: "Porque las drogas influyen en su conducci\u00f3n al hacer m\u00e1s r\u00e1pidas sus reacciones.",
        isCorrect: false
      },
      {
        text: "Porque en caso de accidente no estar\u00eda cubierto por el Seguro Obligatorio.",
        isCorrect: false
      },
      {
        text: "Porque las medicinas que est\u00e1 tomando pueden afectar su visi\u00f3n.",
        isCorrect: false
      },
    ]
  },
  {
    text: "Si usted va conduciendo y comienza a sentir cansancio, es mejor que se detenga lo antes posible. \u00bfQu\u00e9 deber\u00eda hacer usted mientras no pueda detenerse?",
    image: null,
    answers: [
      {
        text: "Aumentar su velocidad para encontrar pronto un lugar donde detenerse.",
        isCorrect: true
      },
      {
        text: "Golpear suave y repetidamente el manubrio.",
        isCorrect: false
      },
      {
        text: "Asegurarse de que entre aire fresco a su veh\u00edculo.",
        isCorrect: false
      },
      {
        text: "Modificar permanentemente la velocidad para mejorar la concentraci\u00f3n.",
        isCorrect: false
      },
    ]
  },
  {
    text: "El tiempo que transcurre desde que usted percibe un peligro hasta que act\u00faa se denomina tiempo de reacci\u00f3n. En una emergencia, \u00bfqu\u00e9 factor influye en su tiempo de reacci\u00f3n?.",
    image: null,
    answers: [
      {
        text: "Su estado de salud.",
        isCorrect: true
      },
      {
        text: "El estado de la calzada.",
        isCorrect: false
      },
      {
        text: "La velocidad de su veh\u00edculo.",
        isCorrect: false
      },
      {
        text: "Las condiciones clim\u00e1ticas.",
        isCorrect: false
      },
    ]
  },
  {
    text: "Al adelantar en un camino a una manada de ovejas, \u00bfqu\u00e9 hace usted?",
    image: null,
    answers: [
      {
        text: "Deja un espacio lateral suficiente.",
        isCorrect: true
      },
      {
        text: "Adelanta r\u00e1pidamente y sin vacilaciones.",
        isCorrect: false
      },
      {
        text: "Conduce lentamente.",
        isCorrect: false
      },
      {
        text: "Toca la bocina levemente.",
        isCorrect: false
      },
      {
        text: "Est\u00e1 preparado para detenerse.",
        isCorrect: false
      },
    ]
  },
  {
    text: "Usted va conduciendo por una calle de dos pistas y de doble sentido de tr\u00e1nsito en la cual hay veh\u00edculos estacionados al costado derecho. \u00bfPor cu\u00e1les 3 razones usted debe disminuir su velocidad?",
    image: null,
    answers: [
      {
        text: "Pueden salir veh\u00edculos de su estacionamiento.",
        isCorrect: true
      },
      {
        text: "Alguien puede abrir una puerta de un auto estacionado.",
        isCorrect: false
      },
      {
        text: "Puede activar las alarmas de los autom\u00f3viles.",
        isCorrect: false
      },
      {
        text: "Para poder ser visto con mayor claridad por el tr\u00e1nsito que viene en contra.",
        isCorrect: false
      },
      {
        text: "Entre los autos estacionados puede aparecer un ni\u00f1o corriendo.",
        isCorrect: false
      },
    ]
  },
  {
    text: "\u00bfEn qu\u00e9 situaci\u00f3n retrocede usted con su veh\u00edculo en un cruce?",
    image: null,
    answers: [
      {
        text: "Si no hay nadie detr\u00e1s suyo.",
        isCorrect: true
      },
      {
        text: "En ning\u00fan momento.",
        isCorrect: false
      },
      {
        text: "S\u00f3lo si ha quedado detenido sobre el paso de peatones.",
        isCorrect: false
      },
      {
        text: "S\u00f3lo si recibe indicaci\u00f3n expresa de un Carabinero.",
        isCorrect: false
      },
    ]
  },
  {
    text: "\u00bfCu\u00e1l es la forma m\u00e1s segura para llevar a un ni\u00f1o de 3 \u00f3 4 a\u00f1os en su veh\u00edculo?",
    image: null,
    answers: [
      {
        text: "En la falda de un adulto compartiendo un mismo cintur\u00f3n de seguridad.",
        isCorrect: true
      },
      {
        text: "En la falda de un adulto que va con su cintur\u00f3n de seguridad.",
        isCorrect: false
      },
      {
        text: "En cualquier asiento, siempre que lleve puesto el cintur\u00f3n de seguridad para adultos.",
        isCorrect: false
      },
      {
        text: "En el asiento trasero, en una silla de seguridad.",
        isCorrect: false
      },
    ]
  },
  {
    text: "En un veh\u00edculo de 3 o 5 puertas, \u00bfen qu\u00e9 condiciones ser\u00eda seguro transportar ni\u00f1os peque\u00f1os en el espacio que queda detr\u00e1s de los asientos traseros?",
    image: null,
    answers: [
      {
        text: "Al efectuar un viaje corto dentro de la ciudad.",
        isCorrect: true
      },
      {
        text: "Al circular por calles o caminos de poco tr\u00e1nsito.",
        isCorrect: false
      },
      {
        text: "Nunca.",
        isCorrect: false
      },
      {
        text: "Siempre es seguro.",
        isCorrect: false
      },
    ]
  },
  {
    text: "Usted va por una carretera a 100 km/h. \u00bfQu\u00e9 hace usted si a pesar de todo un veh\u00edculo que viene atr\u00e1s desea adelantarlo?",
    image: null,
    answers: [
      {
        text: "Acelera para impedir el adelantamiento.",
        isCorrect: true
      },
      {
        text: "Se mantiene lo m\u00e1s a la derecha posible.",
        isCorrect: false
      },
      {
        text: "Mantiene o disminuye su velocidad.",
        isCorrect: false
      },
      {
        text: "Enciende su intermitente izquierdo en se\u00f1al de advertencia de que viene un veh\u00edculo en contra.",
        isCorrect: false
      },
      {
        text: "Se acerca lo m\u00e1s posible hacia la l\u00ednea de centro de calzada, para impedir el adelantamiento.",
        isCorrect: false
      },
    ]
  },
  {
    text: "Usted desea adelantar. \u00bfCu\u00e1l o cu\u00e1les de las siguientes afirmaciones es(son) verdadera(s)?",
    image: "/placeholder-image.png",
    answers: [
      {
        text: "El cami\u00f3n tiene la obligaci\u00f3n de correrse hacia la berma para dejarle a usted m\u00e1s espacio.",
        isCorrect: true
      },
      {
        text: "El auto que viene en sentido contrario tiene la obligaci\u00f3n de correrse a la berma para aumentar la seguridad.",
        isCorrect: false
      },
      {
        text: "El cami\u00f3n est\u00e1 obligado a reducir la velocidad.",
        isCorrect: false
      },
      {
        text: "Usted tiene la obligaci\u00f3n de esperar a que la pista del sentido contrario est\u00e9 libre de veh\u00edculos para luego adelantar.",
        isCorrect: false
      },
    ]
  },
  {
    text: "Antes de adelantar a un veh\u00edculo de gran tama\u00f1o usted deber\u00eda mantenerse suficientemente atr\u00e1s de \u00e9l. \u00bfPor qu\u00e9?",
    image: null,
    answers: [
      {
        text: "Para tener una mejor visual hacia adelante sobre la v\u00eda.",
        isCorrect: true
      },
      {
        text: "Para tener espacio suficiente que le permita acelerar y adelantar en las curvas.",
        isCorrect: false
      },
      {
        text: "Para tener espacio suficiente en caso que el veh\u00edculo se detenga y retroceda.",
        isCorrect: false
      },
      {
        text: "Para poder ver mejor las se\u00f1ales que le pueda hacer su conductor.",
        isCorrect: false
      },
    ]
  },
  {
    text: "Como regla general, \u00bfen cu\u00e1l o cu\u00e1les de los siguientes lugares usted no debe estacionar?",
    image: null,
    answers: [
      {
        text: "En una parada de buses.",
        isCorrect: true
      },
      {
        text: "Al costado derecho de una v\u00eda urbana.",
        isCorrect: false
      },
      {
        text: "Al lado de un bandej\u00f3n central.",
        isCorrect: false
      },
      {
        text: "Frente a una entrada de autos de una casa particular.",
        isCorrect: false
      },
      {
        text: "En una v\u00eda inclinada levemente.",
        isCorrect: false
      },
      {
        text: "En una curva del camino.",
        isCorrect: false
      },
    ]
  },
  {
    text: "De noche, en una zona rural, por emergencia usted estaciona su veh\u00edculo al costado de la v\u00eda. \u00bfEn qu\u00e9 circunstancia debe usted encender sus luces de estacionamiento?",
    image: null,
    answers: [
      {
        text: "Cuando la berma no es suficientemente ancha y parte del veh\u00edculo queda sobre la calzada.",
        isCorrect: true
      },
      {
        text: "Cuando el centro de la calzada est\u00e1 demarcado con l\u00ednea blanca continua.",
        isCorrect: false
      },
      {
        text: "Cuando el camino es de tierra.",
        isCorrect: false
      },
      {
        text: "Siempre.",
        isCorrect: false
      },
    ]
  },
  {
    text: "Un bus est\u00e1 detenido en una parada delante suyo. El intermitente izquierdo del bus est\u00e1 parpadeando. \u00bfQu\u00e9 hace usted?",
    image: "/placeholder-image.png",
    answers: [
      {
        text: "Hace parpadear sus luces delanteras y disminuye la velocidad.",
        isCorrect: true
      },
      {
        text: "Toca la bocina y contin\u00faa.",
        isCorrect: false
      },
      {
        text: "Disminuye la velocidad y luego toca la bocina.",
        isCorrect: false
      },
      {
        text: "Disminuye la velocidad y cede el paso al bus, siempre que ello sea seguro.",
        isCorrect: false
      },
    ]
  },
  {
    text: "De los siguientes factores, \u00bfcu\u00e1l es el que con mayor frecuencia se presenta en las colisiones por la parte trasera?",
    image: null,
    answers: [
      {
        text: "El conducir demasiado cerca del veh\u00edculo que va adelante.",
        isCorrect: true
      },
      {
        text: "El cambio repentino de las luces de los sem\u00e1foros.",
        isCorrect: false
      },
      {
        text: "La existencia de peatones que cruzan en \u00e1reas muy concurridas.",
        isCorrect: false
      },
      {
        text: "El detenerse en todos los cruces.",
        isCorrect: false
      },
    ]
  },
  {
    text: "En una carretera de doble calzada con 2 pistas por sentido de tr\u00e1nsito, usted desea pasar al veh\u00edculo que va delante suyo. Por su espejo retrovisor ve que el auto que viene atr\u00e1s se est\u00e1 cambiando de pista para sobrepasarlo a usted. \u00bfQu\u00e9 deber\u00eda hacer usted?",
    image: null,
    answers: [
      {
        text: "Se\u00f1alizar y luego cambiar de pista para sobrepasar.",
        isCorrect: true
      },
      {
        text: "Se\u00f1alizar para indicarle al conductor que viene atr\u00e1s que usted tambi\u00e9n desea sobrepasar.",
        isCorrect: false
      },
      {
        text: "Presionar levemente el pedal de frenos para mostrar sus luces de freno.",
        isCorrect: false
      },
      {
        text: "No se\u00f1alizar hasta que el auto lo haya pasado.",
        isCorrect: false
      },
    ]
  },
  {
    text: "Usted est\u00e1 conduciendo de noche y es encandilado por las luces delanteras de un veh\u00edculo que se aproxima. En estas circunstancias, \u00bfqu\u00e9 hace usted?",
    image: null,
    answers: [
      {
        text: "Reduce la velocidad o se detiene.",
        isCorrect: true
      },
      {
        text: "Cierra sus ojos.",
        isCorrect: false
      },
      {
        text: "Hace parpadear sus luces.",
        isCorrect: false
      },
      {
        text: "Baja la visera que tiene su veh\u00edculo para protegerlo del sol.",
        isCorrect: false
      },
    ]
  },
  {
    text: "Su veh\u00edculo ha quedado en pana en medio de una autopista. \u00bfQu\u00e9 es lo primero que usted deber\u00eda hacer?",
    image: null,
    answers: [
      {
        text: "Intentar detener a los autos que pasan para solicitar ayuda.",
        isCorrect: true
      },
      {
        text: "Intentar reparar su veh\u00edculo r\u00e1pidamente.",
        isCorrect: false
      },
      {
        text: "Encender sus luces de advertencia de peligro.",
        isCorrect: false
      },
      {
        text: "Instalar un tri\u00e1ngulo reflectante para advertir a los dem\u00e1s usuarios.",
        isCorrect: false
      },
    ]
  },
  {
    text: "\u00bfQu\u00e9 significa la demarcaci\u00f3n de centro de calzada que muestra la figura?",
    image: "/placeholder-image.png",
    answers: [
      {
        text: "Que no puede ser traspasada por un conductor que viene por la pista A.",
        isCorrect: true
      },
      {
        text: "Que no puede ser traspasada por un conductor que va por la pista B.",
        isCorrect: false
      },
      {
        text: "Que en ning\u00fan caso pueden efectuarse adelantamientos.",
        isCorrect: false
      },
      {
        text: "Que s\u00f3lo un conductor que va por la pista B podr\u00eda efectuar un adelantamiento.",
        isCorrect: false
      },
    ]
  },
  {
    text: "Usted se encuentra en el lugar de un accidente. \u00bfQu\u00e9 hace para ayudar de mejor forma a una persona herida que est\u00e1 con una fuerte hemorragia en la parte inferior de una pierna?",
    image: null,
    answers: [
      {
        text: "La sienta y le da a beber algo caliente para tranquilizarla.",
        isCorrect: true
      },
      {
        text: "La mantiene tendida con la pierna herida en alto.",
        isCorrect: false
      },
      {
        text: "Aplica presi\u00f3n manual firme sobre la herida con un pa\u00f1o limpio y luego la venda.",
        isCorrect: false
      },
      {
        text: "La sienta y espera a que llegue una ambulancia.",
        isCorrect: false
      },
      {
        text: "Le conversa tranquilamente ayud\u00e1ndola a mantenerse de pie.",
        isCorrect: false
      },
    ]
  },
  {
    text: "Usted se ha detenido en el lugar de un accidente para prestar ayuda. \u00bfQu\u00e9 deber\u00eda hacer usted ?",
    image: null,
    answers: [
      {
        text: "Mantener a las personas lesionadas en movimiento haci\u00e9ndolas caminar.",
        isCorrect: true
      },
      {
        text: "Dar a las personas heridas algo caliente para beber.",
        isCorrect: false
      },
      {
        text: "Mantener abrigadas y c\u00f3modas a las personas heridas.",
        isCorrect: false
      },
      {
        text: "Mantener tranquilas a las personas heridas habl\u00e1ndoles alentadoramente.",
        isCorrect: false
      },
      {
        text: "Asegurarse de que no queden solos los heridos.",
        isCorrect: false
      },
    ]
  },
  {
    text: "\u00bfQu\u00e9 documento no est\u00e1 obligado a portar usted siempre en su veh\u00edculo?",
    image: null,
    answers: [
      {
        text: "El Permiso de Circulaci\u00f3n.",
        isCorrect: true
      },
      {
        text: "El certificado de un Seguro Obligatorio de Accidentes Personales.",
        isCorrect: false
      },
      {
        text: "Su licencia de conductor.",
        isCorrect: false
      },
      {
        text: "El certificado de revisi\u00f3n t\u00e9cnica o de homologaci\u00f3n.",
        isCorrect: false
      },
      {
        text: "El certificado de inscripci\u00f3n en el Registro Nacional de Veh\u00edculos Motorizados.",
        isCorrect: false
      },
    ]
  },
  {
    text: "\u00bfQu\u00e9 elementos de su veh\u00edculo debe usted mantener limpios?",
    image: null,
    answers: [
      {
        text: "Las luces.",
        isCorrect: true
      },
      {
        text: "Los espejos.",
        isCorrect: false
      },
      {
        text: "Los neum\u00e1ticos.",
        isCorrect: false
      },
      {
        text: "Los vidrios.",
        isCorrect: false
      },
    ]
  },
  {
    text: "Suponga que en una ocasi\u00f3n: su distancia de reacci\u00f3n es de 10 metros y su distancia de frenado es de 8 metros y su distancia de detenci\u00f3n (distancia de reacci\u00f3n m\u00e1s distancia de frenado) es de 18 metros. \u00bfCu\u00e1l ser\u00eda su distancia de detenci\u00f3n si sigue conduciendo en calzada de id\u00e9nticas caracter\u00edsticas y condiciones, pero aumenta al doble su velocidad?",
    image: null,
    answers: [
      {
        text: "46 metros",
        isCorrect: true
      },
      {
        text: "52 metros",
        isCorrect: false
      },
      {
        text: "64 metros",
        isCorrect: false
      },
      {
        text: "78 metros",
        isCorrect: false
      },
    ]
  },
  {
    text: "\u00bfCu\u00e1l de las siguientes afirmaciones es falsa cuando usted aumenta su velocidad de 30 km/h a 60 km/h?",
    image: null,
    answers: [
      {
        text: "Se duplica la energ\u00eda cin\u00e9tica.",
        isCorrect: true
      },
      {
        text: "Se cuadruplica la energ\u00eda cin\u00e9tica.",
        isCorrect: false
      },
      {
        text: "Se duplica la distancia de reacci\u00f3n.",
        isCorrect: false
      },
      {
        text: "Se cuadruplica la distancia de frenado.",
        isCorrect: false
      },
    ]
  },
  {
    text: "\u00bfQu\u00e9 deber\u00eda hacer usted para corregir un coletazo de las ruedas traseras?",
    image: null,
    answers: [
      {
        text: "No girar el volante del veh\u00edculo para nada.",
        isCorrect: true
      },
      {
        text: "Girar el volante hacia el lado opuesto al coletazo.",
        isCorrect: false
      },
      {
        text: "Girar el volante hacia el lado que se desplaza la cola del veh\u00edculo.",
        isCorrect: false
      },
      {
        text: "Aplicar su freno de mano.",
        isCorrect: false
      },
    ]
  },
  {
    text: "De los siguientes factores, \u00bfcu\u00e1l es el que con mayor frecuencia se presenta en los accidentes de tr\u00e1nsito?",
    image: null,
    answers: [
      {
        text: "Los errores de los conductores.",
        isCorrect: true
      },
      {
        text: "Las condiciones clim\u00e1ticas.",
        isCorrect: false
      },
      {
        text: "Las condiciones de calles y caminos.",
        isCorrect: false
      },
      {
        text: "Las fallas mec\u00e1nicas.",
        isCorrect: false
      },
    ]
  },
  {
    text: "\u00bfDe cu\u00e1les 2 maneras puede usted contribuir con mayor eficacia a la seguridad de tr\u00e1nsito?",
    image: null,
    answers: [
      {
        text: "Contando siempre con tiempo de sobra para conducir.",
        isCorrect: true
      },
      {
        text: "Manteniendo su veh\u00edculo en condiciones \u00f3ptimas.",
        isCorrect: false
      },
      {
        text: "Evitando conducir durante la noche.",
        isCorrect: false
      },
      {
        text: "Conduciendo a la defensiva.",
        isCorrect: false
      },
    ]
  },
  {
    text: "En cuanto a la concentraci\u00f3n de alcohol en la sangre de una persona que ingiere la misma cantidad en ocasiones diferentes, \u00bfcu\u00e1l de las siguientes afirmaciones es falsa?",
    image: null,
    answers: [
      {
        text: "Aunque la persona beba la misma cantidad de alcohol cada ocasi\u00f3n, la concentraci\u00f3n de \u00e9ste en su sangre puede ser diferente.",
        isCorrect: true
      },
      {
        text: "La concentraci\u00f3n de alcohol depende de cu\u00e1nto se come en cada ocasi\u00f3n.",
        isCorrect: false
      },
      {
        text: "Entre otros factores, la concentraci\u00f3n de alcohol tambi\u00e9n depende del tiempo que dura la ingesti\u00f3n cada vez.",
        isCorrect: false
      },
      {
        text: "Si la cantidad de alcohol ingerida en cada ocasi\u00f3n es exactamente la misma, la concentraci\u00f3n de alcohol en la sangre tambi\u00e9n ser\u00e1 la misma.",
        isCorrect: false
      },
    ]
  },
  {
    text: "\u00bfCu\u00e1les son los primeros s\u00edntomas de cansancio ?",
    image: null,
    answers: [
      {
        text: "Se comienza a sentir calor y agresividad.",
        isCorrect: true
      },
      {
        text: "Se comienza a sentir falta de inter\u00e9s y aparecen los bostezos.",
        isCorrect: false
      },
      {
        text: "Se comienza a sentir dificultad para mantener la direcci\u00f3n.",
        isCorrect: false
      },
      {
        text: "Se comienza a sentir que los p\u00e1rpados se cierran.",
        isCorrect: false
      },
    ]
  },
  {
    text: "Usted comienza a sentir cansancio en un viaje. \u00bfQu\u00e9 deber\u00eda hacer?",
    image: null,
    answers: [
      {
        text: "Detenerse y comer una gran comida.",
        isCorrect: true
      },
      {
        text: "Detenerse inmediatamente y respirar profundo.",
        isCorrect: false
      },
      {
        text: "Terminar el viaje y despu\u00e9s dormir.",
        isCorrect: false
      },
      {
        text: "Detenerse y dormir una peque\u00f1a siesta o detenerse y tomar un poco de caf\u00e9.",
        isCorrect: false
      },
    ]
  },
  {
    text: "En esta ocasi\u00f3n usted va conduciendo a 70 km/h. \u00bfQu\u00e9 hace usted?",
    image: "/placeholder-image.png",
    answers: [
      {
        text: "Frena en seco.",
        isCorrect: true
      },
      {
        text: "Se desplaza hacia la izquierda.",
        isCorrect: false
      },
      {
        text: "Contin\u00faa derecho.",
        isCorrect: false
      },
      {
        text: "Frena suavemente.",
        isCorrect: false
      },
    ]
  },
  {
    text: "Usted conduce a 90 km/h. En condiciones normales, \u00bfcu\u00e1l es la distancia m\u00ednima de seguridad que usted deber\u00eda mantener respecto del veh\u00edculo que va adelante?",
    image: null,
    answers: [
      {
        text: "Unos 75 metros.",
        isCorrect: true
      },
      {
        text: "Unos 15 metros.",
        isCorrect: false
      },
      {
        text: "Unos 20 metros.",
        isCorrect: false
      },
      {
        text: "Unos 100 metros.",
        isCorrect: false
      },
    ]
  },
  {
    text: "Usted va conduciendo al lado de una fila de autos estacionados. De pronto ve una pelota rebotando en la calzada un poco m\u00e1s adelante. \u00bfQu\u00e9 deber\u00eda hacer usted?",
    image: "/placeholder-image.png",
    answers: [
      {
        text: "Continuar a la misma velocidad, tocando la bocina.",
        isCorrect: true
      },
      {
        text: "Continuar a la misma velocidad, pero encendiendo y apagando sus luces delanteras.",
        isCorrect: false
      },
      {
        text: "Detenerse y se\u00f1alar con la mano para que los ni\u00f1os crucen a recoger la pelota.",
        isCorrect: false
      },
      {
        text: "Disminuir la velocidad y estar preparado para detenerse si aparece un ni\u00f1o.",
        isCorrect: false
      },
    ]
  },
  {
    text: "Al adelantar a animales que van por el camino, usted no deber\u00eda\u2026",
    image: null,
    answers: [
      {
        text: "Acelerar el motor o tocar la bocina.",
        isCorrect: true
      },
      {
        text: "Cambiar a una marcha m\u00e1s baja.",
        isCorrect: false
      },
      {
        text: "Usar los se\u00f1alizadores de viraje.",
        isCorrect: false
      },
      {
        text: "Tener las luces encendidas.",
        isCorrect: false
      },
    ]
  },
  {
    text: "En esta situaci\u00f3n, \u00bfa cu\u00e1les 3 riesgos debe estar usted principalmente atento?",
    image: "/placeholder-image.png",
    answers: [
      {
        text: "Al ciclista que viene en sentido contrario.",
        isCorrect: true
      },
      {
        text: "Al tr\u00e1nsito en la intersecci\u00f3n que hay m\u00e1s adelante.",
        isCorrect: false
      },
      {
        text: "A las puertas de autos que pueden ser abiertas.",
        isCorrect: false
      },
      {
        text: "A ni\u00f1os que pueden salir a la calzada por entre los autos.",
        isCorrect: false
      },
      {
        text: "A los veh\u00edculos que pueden venir detr\u00e1s suyo.",
        isCorrect: false
      },
      {
        text: "A irregularidades de la superficie de calzada.",
        isCorrect: false
      },
    ]
  },
  {
    text: "Usted va conduciendo a 70 km/h que es la velocidad m\u00e1xima permitida en esta v\u00eda. \u00bfQu\u00e9 hace en esta situaci\u00f3n?",
    image: "/placeholder-image.png",
    answers: [
      {
        text: "Est\u00e1 preparado para actuar ya que alguien puede salir corriendo a la calzada.",
        isCorrect: true
      },
      {
        text: "Est\u00e1 preparado para actuar ya que el bus puede ponerse en marcha.",
        isCorrect: false
      },
      {
        text: "Frena y cede el paso al bus, si \u00e9ste est\u00e1 por salir de la parada.",
        isCorrect: false
      },
      {
        text: "Sigue conduciendo sin estar preparado para nada en especial, ya que usted tiene dominio de su veh\u00edculo.",
        isCorrect: false
      },
    ]
  },
  {
    text: "Cuando dos veh\u00edculos van a cruzarse en una intersecci\u00f3n en la que no hay se\u00f1alizaci\u00f3n alguna, \u00bfqui\u00e9n debe ceder el paso?",
    image: null,
    answers: [
      {
        text: "El veh\u00edculo m\u00e1s peque\u00f1o.",
        isCorrect: true
      },
      {
        text: "El veh\u00edculo que va por la calle de pistas m\u00e1s angostas.",
        isCorrect: false
      },
      {
        text: "El que se acerca al cruce por la derecha del otro.",
        isCorrect: false
      },
      {
        text: "El que se acerca al cruce por la izquierda del otro.",
        isCorrect: false
      },
    ]
  },
  {
    text: "La forma m\u00e1s segura de viajar en un autom\u00f3vil para un ni\u00f1o menor de 2 a\u00f1os es:",
    image: null,
    answers: [
      {
        text: "En brazos de un adulto.",
        isCorrect: true
      },
      {
        text: "Solo en el asiento delantero y con cintur\u00f3n de seguridad.",
        isCorrect: false
      },
      {
        text: "Solo en el asiento trasero y con cintur\u00f3n de seguridad.",
        isCorrect: false
      },
      {
        text: "En una silla de seguridad, en el asiento trasero y mirando hacia atr\u00e1s.",
        isCorrect: false
      },
    ]
  },
  {
    text: "Como regla general, \u00bfen cu\u00e1l o cu\u00e1les de los siguientes lugares nunca debe estacionar?",
    image: null,
    answers: [
      {
        text: "En un paso de peatones.",
        isCorrect: true
      },
      {
        text: "En un puente.",
        isCorrect: false
      },
      {
        text: "A menos de 10 metros de una esquina.",
        isCorrect: false
      },
      {
        text: "Al costado derecho de una v\u00eda urbana.",
        isCorrect: false
      },
      {
        text: "En o al llegar a una parada de locomoci\u00f3n colectiva.",
        isCorrect: false
      },
    ]
  },
  {
    text: "Usted conduce un veh\u00edculo de marcha lenta por un camino angosto y sinuoso. En estas circunstancias, usted deber\u00eda \u2026",
    image: null,
    answers: [
      {
        text: "Circular cerca del centro de la calzada para evitar que otros lo adelanten peligrosamente.",
        isCorrect: true
      },
      {
        text: "Correrse hacia la derecha cuando pueda hacerlo en forma segura, para permitir que otros lo adelanten.",
        isCorrect: false
      },
      {
        text: "Hacer indicaciones con la mano a los otros conductores cuando usted crea que podr\u00e1n adelantarlo r\u00e1pidamente.",
        isCorrect: false
      },
      {
        text: "Se\u00f1alizar con su intermitente derecho cuando adelantar no sea peligroso para los otros.",
        isCorrect: false
      },
    ]
  },
  {
    text: "Cuando el viento est\u00e1 soplando muy fuerte, \u00bfpor qu\u00e9 debe usted dejar un espacio lateral extra al adelantar a un motociclista?",
    image: null,
    answers: [
      {
        text: "Porque el motociclista podr\u00eda doblar repentinamente para escapar del viento.",
        isCorrect: true
      },
      {
        text: "Porque el motociclista podr\u00eda detenerse repentinamente.",
        isCorrect: false
      },
      {
        text: "Porque el motociclista podr\u00eda tambalear o ver desviada su trayectoria a consecuencia del viento.",
        isCorrect: false
      },
      {
        text: "Porque el motociclista podr\u00eda ir m\u00e1s r\u00e1pido de lo normal.",
        isCorrect: false
      },
    ]
  },
  {
    text: "\u00bfC\u00f3mo puede usted evitar que los neum\u00e1ticos patinen cuando la calzada est\u00e1 con hielo?",
    image: null,
    answers: [
      {
        text: "Manteni\u00e9ndose siempre en primera.",
        isCorrect: true
      },
      {
        text: "Poniendo el freno de mano si las ruedas comienzan a patinar.",
        isCorrect: false
      },
      {
        text: "Conduciendo lentamente en la marcha m\u00e1s alta posible.",
        isCorrect: false
      },
      {
        text: "Conduciendo en neutro.",
        isCorrect: false
      },
    ]
  },
  {
    text: "Cuando hay nieve lo mejor es conducir manteni\u00e9ndose en la marcha m\u00e1s alta posible. \u00bfPor qu\u00e9 es esto?",
    image: null,
    answers: [
      {
        text: "Para reducir r\u00e1pidamente la velocidad al frenar.",
        isCorrect: true
      },
      {
        text: "Para que el patinaje de las ruedas no haga que el motor funcione demasiado r\u00e1pido.",
        isCorrect: false
      },
      {
        text: "Para ayudar a evitar que las ruedas patinen.",
        isCorrect: false
      },
      {
        text: "Para dejar disponible una marcha baja en el caso de que las ruedas patinen.",
        isCorrect: false
      },
    ]
  },
  {
    text: "\u00bfCu\u00e1ndo puede usted ingresar a un cruce en cuya calzada se han pintado franjas amarillas diagonales?",
    image: "/placeholder-image.png",
    answers: [
      {
        text: "Siempre que el sem\u00e1foro est\u00e9 en verde.",
        isCorrect: true
      },
      {
        text: "Cuando en la salida del cruce tenga espacio suficiente como para no quedar detenido en \u00e9l.",
        isCorrect: false
      },
      {
        text: "Cada vez que va a virar hacia la derecha.",
        isCorrect: false
      },
      {
        text: "S\u00f3lo cuando haya menos de dos veh\u00edculos delante suyo.",
        isCorrect: false
      },
    ]
  },
  {
    text: "De las siguientes se\u00f1ales de tr\u00e1nsito, \u00bfcu\u00e1l o cu\u00e1les corresponden a se\u00f1ales amarillas con forma de rombo?",
    image: null,
    answers: [
      {
        text: "Puente angosto",
        isCorrect: true
      },
      {
        text: "Angostamiento de la v\u00eda",
        isCorrect: false
      },
      {
        text: "Direcci\u00f3n obligada",
        isCorrect: false
      },
      {
        text: "Mantenga su derecha",
        isCorrect: false
      },
      {
        text: "Bifurcaci\u00f3n o cruce en T",
        isCorrect: false
      },
      {
        text: "Cruce ferroviario",
        isCorrect: false
      },
    ]
  },
  {
    text: "Usted se ve involucrado en un accidente. Un pasajero del otro veh\u00edculo ha resultado con lesiones leves. \u00bfDebe usted informar el hecho a la polic\u00eda?",
    image: null,
    answers: [
      {
        text: "S\u00ed, debe dar cuenta del hecho a la polic\u00eda dentro de los pr\u00f3ximos 20 d\u00edas.",
        isCorrect: true
      },
      {
        text: "No, el pasajero lesionado debe decidir si se informa a la polic\u00eda o no.",
        isCorrect: false
      },
      {
        text: "No, los accidentes en que s\u00f3lo resultan lesionados leves no se informan a la polic\u00eda.",
        isCorrect: false
      },
      {
        text: "S\u00ed, debe dar cuenta del hecho a la autoridad policial m\u00e1s inmediata a la brevedad.",
        isCorrect: false
      },
    ]
  },
  {
    text: "Usted llega al lugar de un accidente en el que particip\u00f3 un cami\u00f3n cargado con productos qu\u00edmicos peligrosos. \u00bfQu\u00e9 deber\u00eda hacer usted antes de llamar al 133 de Carabineros?",
    image: null,
    answers: [
      {
        text: "Tratar de mover el cami\u00f3n.",
        isCorrect: true
      },
      {
        text: "Tratar de diluir los productos qu\u00edmicos con agua.",
        isCorrect: false
      },
      {
        text: "Averiguar de qu\u00e9 clase de producto qu\u00edmico se trata mirando los r\u00f3tulos y letreros que tiene el cami\u00f3n.",
        isCorrect: false
      },
      {
        text: "Tratar de evitar que los productos qu\u00edmicos se sigan derramando.",
        isCorrect: false
      },
    ]
  },
  {
    text: "Su veh\u00edculo se desv\u00eda hacia un lado cuando usted frena. \u00bfCu\u00e1l es la falla m\u00e1s probable?",
    image: null,
    answers: [
      {
        text: "Un bajo nivel del l\u00edquido de frenos.",
        isCorrect: true
      },
      {
        text: "Su freno de mano est\u00e1 todav\u00eda puesto.",
        isCorrect: false
      },
      {
        text: "Frenos mal ajustados.",
        isCorrect: false
      },
      {
        text: "Neum\u00e1ticos con presi\u00f3n de aire inadecuada.",
        isCorrect: false
      },
    ]
  },
  {
    text: "Es esencial que la presi\u00f3n de los neum\u00e1ticos sea chequeada regularmente. \u00bfCu\u00e1ndo se debe hacer esto?",
    image: null,
    answers: [
      {
        text: "Despu\u00e9s de un viaje largo.",
        isCorrect: true
      },
      {
        text: "Despu\u00e9s de conducir a alta velocidad.",
        isCorrect: false
      },
      {
        text: "Cuando los neum\u00e1ticos est\u00e1n fr\u00edos.",
        isCorrect: false
      },
      {
        text: "Cuando los neum\u00e1ticos est\u00e1n calientes.",
        isCorrect: false
      },
    ]
  },
  {
    text: "\u00bfPor qu\u00e9 los neum\u00e1ticos deben mantenerse a la presi\u00f3n indicada por el fabricante?",
    image: null,
    answers: [
      {
        text: "Para que el veh\u00edculo se mantenga a la altura correcta sobre la v\u00eda.",
        isCorrect: true
      },
      {
        text: "Para no desgastar el motor.",
        isCorrect: false
      },
      {
        text: "Para ayudar a evitar que el autom\u00f3vil se roncee.",
        isCorrect: false
      },
      {
        text: "Para evitar que el autom\u00f3vil se incline hacia un lado.",
        isCorrect: false
      },
    ]
  },
  {
    text: "Desenganchar el motor del veh\u00edculo\u2026",
    image: null,
    answers: [
      {
        text: "Permite un mejor control al conductor.",
        isCorrect: true
      },
      {
        text: "Hace m\u00e1s f\u00e1cil las maniobras.",
        isCorrect: false
      },
      {
        text: "Aumenta el consumo de combustible.",
        isCorrect: false
      },
      {
        text: "Reduce el control del conductor.",
        isCorrect: false
      },
    ]
  },
  {
    text: "\u00bfCu\u00e1les son las 2 principales razones por las cuales no debe desengancharse el motor al ir cuesta abajo?",
    image: null,
    answers: [
      {
        text: "Porque tendr\u00e1 menor control del frenado y direcci\u00f3n.",
        isCorrect: true
      },
      {
        text: "Porque el veh\u00edculo agarrar\u00e1 velocidad.",
        isCorrect: false
      },
      {
        text: "Porque el consumo de combustible ser\u00e1 mayor.",
        isCorrect: false
      },
      {
        text: "Porque se gastan y deterioran m\u00e1s los neum\u00e1ticos.",
        isCorrect: false
      },
      {
        text: "Porque se da\u00f1a el motor.",
        isCorrect: false
      },
    ]
  },
  {
    text: "El auto azul circula a 70 km/h y el rojo a 90 km/h. \u00bfD\u00f3nde es m\u00e1s probable que sus conductores estimen el punto en que se producir\u00e1 el encuentro de ambos veh\u00edculos?",
    image: "/placeholder-image.png",
    answers: [
      {
        text: "El conductor del auto rojo estima que dicho punto ser\u00e1 el 3.",
        isCorrect: true
      },
      {
        text: "El conductor del auto rojo estima que dicho punto ser\u00e1 el 2.",
        isCorrect: false
      },
      {
        text: "El conductor del auto azul estima que dicho punto ser\u00e1 el 1.",
        isCorrect: false
      },
      {
        text: "El conductor del auto azul estima que dicho punto ser\u00e1 el 3.",
        isCorrect: false
      },
    ]
  },
  {
    text: "Si usted ha ingerido alcohol, \u00bfcu\u00e1l o cu\u00e1les son los efectos m\u00e1s probables?",
    image: null,
    answers: [
      {
        text: "Su capacidad de coordinaci\u00f3n se reducir\u00e1.",
        isCorrect: true
      },
      {
        text: "Su autoconfianza se incrementar\u00e1.",
        isCorrect: false
      },
      {
        text: "Presentar\u00e1 ceguera al color.",
        isCorrect: false
      },
      {
        text: "Sus reacciones ser\u00e1n m\u00e1s r\u00e1pidas.",
        isCorrect: false
      },
      {
        text: "Su juicio empeorar\u00e1.",
        isCorrect: false
      },
      {
        text: "Su capacidad de concentraci\u00f3n aumentar\u00e1.",
        isCorrect: false
      },
    ]
  },
  {
    text: "Usted va conduciendo de d\u00eda por una zona rural. La calzada tiene pavimento en buen estado y tr\u00e1nsito bidireccional. A menos que alguna se\u00f1al le indique otra cosa, usted no debe exceder los \u2026",
    image: null,
    answers: [
      {
        text: "50 km/hr",
        isCorrect: true
      },
      {
        text: "90 km/hr",
        isCorrect: false
      },
      {
        text: "100 km/hr",
        isCorrect: false
      },
      {
        text: "120 km/hr",
        isCorrect: false
      },
    ]
  },
  {
    text: "Usted conduce a 90 km/h cuando la v\u00eda es obstruida sorpresivamente por un cami\u00f3n que est\u00e1 virando a la izquierda. \u00bfQu\u00e9 es lo primero que hace usted ?",
    image: "/placeholder-image.png",
    answers: [
      {
        text: "Hace se\u00f1ales de luces y toca la bocina.",
        isCorrect: true
      },
      {
        text: "Frena firmemente.",
        isCorrect: false
      },
      {
        text: "Se desplaza a la pista de la izquierda.",
        isCorrect: false
      },
      {
        text: "Disminuye levemente la velocidad.",
        isCorrect: false
      },
    ]
  },
  {
    text: "En un cruce hay peatones atravesando la calle hacia la cual usted est\u00e1 virando. \u00bfQu\u00e9 hace usted?",
    image: "/placeholder-image.png",
    answers: [
      {
        text: "Espera permiti\u00e9ndoles que crucen.",
        isCorrect: true
      },
      {
        text: "Contin\u00faa ya que usted tiene el derecho preferente de paso.",
        isCorrect: false
      },
      {
        text: "Les hace se\u00f1as para que retrocedan.",
        isCorrect: false
      },
      {
        text: "Les toca la bocina para advertirles su presencia.",
        isCorrect: false
      },
    ]
  },
  {
    text: "Cuando conduce en la ciudad \u00bfpor qu\u00e9 raz\u00f3n deber\u00eda usted tener cuidado al cruzarse con un bus que se encuentra detenido en una parada?",
    image: null,
    answers: [
      {
        text: "Porque el bus puede estar en pana.",
        isCorrect: true
      },
      {
        text: "Porque el bus puede ponerse en movimiento repentinamente.",
        isCorrect: false
      },
      {
        text: "Porque pueden aparecer peatones detr\u00e1s del bus.",
        isCorrect: false
      },
      {
        text: "Porque el bus puede permanecer detenido.",
        isCorrect: false
      },
    ]
  },
  {
    text: "Usted va circulando a 65 km/h aproximadamente cuando, lamentablemente, atropella a un peat\u00f3n. A esa velocidad, \u2026.",
    image: null,
    answers: [
      {
        text: "Es seguro que el peat\u00f3n morir\u00e1.",
        isCorrect: true
      },
      {
        text: "Es muy probable que el peat\u00f3n muera.",
        isCorrect: false
      },
      {
        text: "Es seguro que el peat\u00f3n sobrevivir\u00e1.",
        isCorrect: false
      },
      {
        text: "Es muy probable que el peat\u00f3n sobreviva.",
        isCorrect: false
      },
    ]
  },
  {
    text: "Usted desea adelantar a un motociclista que va delante suyo, \u00bfqu\u00e9 hace usted?",
    image: null,
    answers: [
      {
        text: "Trata de pasarlo en una curva.",
        isCorrect: true
      },
      {
        text: "Pasa cerca de \u00e9l y lo m\u00e1s r\u00e1pido posible.",
        isCorrect: false
      },
      {
        text: "Le da tanto espacio lateral como le dar\u00eda a un autom\u00f3vil.",
        isCorrect: false
      },
      {
        text: "Toca la bocina para advertir su presencia.",
        isCorrect: false
      },
    ]
  },
  {
    text: "\u00bfQu\u00e9 debe hacer usted cuando enfrenta esta se\u00f1al?",
    image: "/placeholder-image.png",
    answers: [
      {
        text: "Detenerse s\u00f3lo si viene alg\u00fan veh\u00edculo por la otra v\u00eda.",
        isCorrect: true
      },
      {
        text: "Detenerse s\u00f3lo si hay peatones esperando para cruzar.",
        isCorrect: false
      },
      {
        text: "Detenerse s\u00f3lo si en la calzada est\u00e1 pintada la leyenda PARE.",
        isCorrect: false
      },
      {
        text: "Detenerse siempre.",
        isCorrect: false
      },
    ]
  },
  {
    text: "Usted va por una autopista. De un cami\u00f3n cargado que va delante suyo cae una caja sin que su conductor se d\u00e9 cuenta. \u00bfQu\u00e9 hace usted?",
    image: null,
    answers: [
      {
        text: "Trata de alcanzar al cami\u00f3n y de llamar la atenci\u00f3n de su conductor.",
        isCorrect: true
      },
      {
        text: "Se detiene junto a la caja y enciende sus luces de emergencia hasta que llegue la polic\u00eda.",
        isCorrect: false
      },
      {
        text: "Se desplaza hacia la berma y luego intenta recoger la caja.",
        isCorrect: false
      },
      {
        text: "Contin\u00faa hasta donde haya un tel\u00e9fono para avisar a la polic\u00eda o a los servicios de emergencia.",
        isCorrect: false
      },
    ]
  },
];

async function main() {
  console.log("Start seeding ...");
  
  // Limpiar la base de datos para evitar duplicados al correr el seed varias veces
  try {
      await prisma.answer.deleteMany();
      await prisma.question.deleteMany();
      // await prisma.exam.deleteMany(); // Opcional, si quieres borrar exámenes pasados
  } catch(e) {
      console.log("Tables might not exist yet, continuing...");
  }

  for (const q of questionsData) {
    const question = await prisma.question.create({
      data: {
        text: q.text,
        category: "General", 
        imageUrl: q.image,
        answers: {
          create: q.answers,
        },
      },
    });
    // console.log(`Created question with id: ${question.id}`);
  }
  console.log(`Seeding finished. ${questionsData.length} questions inserted.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

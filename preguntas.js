var preguntas = [
    {
        p: "¿Quien fue la enfermera del rey David durante su vejez?",
        t: "(1 Reyes 1:1-4)",
        r: "Abisag"
    },
    {
        p: "¿Donde recibio Pablo la visión invitándole a pasar a Macedonia?",
        t: "(Hechos 16:8-12)",
        r: "Troas"
    },
    {
        p: "¿Como llamo Raquel a su ultimo hijo?",
        t: "(Génesis 35:16-20)",
        r: "Ben-Oní"
    },
    {
        p: "¿Que profeta fue alimentado por cuervos?",
        t: "(1 Reyes 17:6-7)",
        r: "Elías"
    },
    {
        p: "¿Quien llegó a ser sumo sacerdote luego de que Aarón murio?",
        t: "(Deuteronomio 10:6)",
        r: "Eleazar"
    },
    {
        p: "¿De que diosa faricaba templetes Demetrio?",
        t: "(Hechos 19:23-41)",
        r: "Ártemis"
    },
    {
        p: "Quien fue el padre de Moisés",
        t: "(Éxodo 6:20)",
        r: "Amram"
    },
    {
        p: "¿Que nombres les puso Zacarías a sus cayados?",
        t: "(Zacarías 11:7-11)",
        r: "'Bondad' y 'Unión'"
    },
    {
        p: "¿Con que árbol comparó La sulamita a su amado?",
        t: "(El Cantar de los Cantares 2:3)",
        r: "Manzano"
    },
    {
        p: "¿Que lugar era famoso debido a su oro?",
        t: "(1 Crónicas 29:4)",
        r: "Ofir"
    },
    {
        p: "¿Adonde huyo Jefté?",
        t: "(Jueces 11:1-3)",
        r: "Tob"
    },
    {
        p: "¿Que ammonita se burlo de los israelitas durante la reconstruccion de las murallas?",
        t: "(Nehemías 4:1-4)",
        r: "Tobías"
    },
    {
        p: "¿Como se les llamaba a los siervos del templo que no eran israelitas?",
        t: "(Esdras 7:24)",
        r: "Netineos"
    },
    {
        p: "¿A quienes les dio Jesús el sobrenombre de Boanerges?",
        t: "(Marcos 3:16-19)",
        r: "Santiago y Juan"
    },
    {
        p: "¿Quien ayudó a David a frustrar la rebelion contra él, engañando a Absalón",
        t: "(2 Samuel 17:1-7)",
        r: "Husái"
    },
    {
        p: "¿A que profetisa consultó Josías luego de escuchar el libro de la ley?",
        t: "(2 Reyes 22:11-14)",
        r: "Huldá"
    },
    {
        p: "¿Que lugar uso Salomón para construcciones navales?",
        t: "(1 Reyes 9:26)",
        r: "Ezión-Guéber"
    },
    {
        p: "¿De qué provincia procedía Pablo según las averiguaciones del gobernador Félix? ",
        t: "(Hechos 23:34)",
        r: "Silicia"
    },
    {
        p: "¿Hacia qué ciudad remaban los discípulos de Jesús cuando lo vieron andando sobre el mar?",
        t: "(Marcos 6:45-49.)",
        r: "Betsaida"
    },
    {
        p: "¿Qué le tejió la madre de Salomón a este el día de su casamiento?",
        t: "(El Cantar de los Cantares 3:9-11)",
        r: "una corona de flores"
    },
    {
        p: "¿Cómo se llamaban los dos hijos de José, de los cuales descendieron dos tribus de Israel?",
        t: "(Génesis 41:50-52)",
        r: "Manasés y Efraín"
    },
    {
        p: "¿Cuántos años le dijo Jacob a Faraón que había residido como forastero?",
        t: "(Génesis 47:5-10)",
        r: "130"
    },
    {
        p: "¿Cómo se llamaba el paralítico que llevaba ocho años en su camilla cuando Pedro lo curó?",
        t: "(Hechos 9:31, 35)",
        r: "Eneas"
    },
    {
        p: "En los días de Salomón, ¿qué flota de naves transportaba plata, marfil, monos y pavos reales a Israel?",
        t: "(1 Reyes 10:22.)",
        r: "Barcos de Tarsis"
    },
    {
        p: "¿Donde fue enterrado Absalón?",
        t: "(2 Samuel 18:14-17.)",
        r: "Dentro de un hoyo en el bosque"
    },
    {
        p: "¿Qué procurador romano de Judea dejó a Pablo en cadenas para ganarse el favor de los judíos?",
        t: "(Hechos 24:24-27)",
        r: "Félix"
    },
    {
        p: "¿La acción violenta de qué dos hijos suyos desaprobó Jacob?",
        t: "(Génesis 49:7)",
        r: "Simeón y Leví"
    },
    {
        p: "¿Qué señal puso Jacob en el sepulcro de Raquel?",
        t: "(Génesis 35:16-20)",
        r: "Una columna"
    },
    {
        p: "¿Cómo llamó Jacob al lugar en que Labán y él celebraron un pacto de paz?",
        t: "(Génesis 31:43-53.)",
        r: "Galeed"
    },
    {
        p: "¿Qué hizo David en Gat para escapar de los filisteos?",
        t: "(1 Samuel 21:12-14.)",
        r: "Fingio estar loco"
    },
    {
        p: "¿A quién le compró Abrahán la cueva de Macpelá para usarla como sepultura?",
        t: "(Génesis 49:30-33)",
        r: "Efrón el hitita"
    },
    {
        p: "¿Adónde envió Jesús al ciego para que se lavara y recibiera la vista?",
        t: "(Juan 9:1-7)",
        r: "Al estanque de Siloam"
    },
    {
        p: "¿En qué país escribió Pablo su carta a los Hebreos?",
        t: "(Hebreos 13:22-25)",
        r: "En Italia"
    },
    {
        p: " ¿Qué dos hombres sostuvieron las manos de Moisés hasta que Jehová le concedió a Israel la victoria sobre los amalequitas?",
        t: "(Éxodo 17:8-13)",
        r: "Aarón y Hur"
    },
    {
        p: "En vez de obedecer el mandato de Jehová de ir a Nínive, ¿adónde trató de huir Jonás?",
        t: "(Jonás 1:1-3)",
        r: "A Tarsis"
    },
    {
        p: "¿En qué lugar se apareció Jesús a Cleopas y a otro discípulo el mismo día de su resurrección?",
        t: "(Lucas 24:13.)",
        r: "En el camino hacia Emaús"
    },
    {
        p: " ¿Con qué madera se hicieron los dos querubines del Santísimo?",
        t: "(1 Reyes 6:19-28.)",
        r: "Con madera de Pino"
    },
    {
        p: "¿Cómo celebró el rey Asuero la coronación de la reina Ester?",
        t: "(Ester 2:15-18)",
        r: "Con un gran banquete"
    },
    {
        p: "¿Que rey fue aconsejado por su madre para elegir un abuena esposa?",
        t: "(Proverbios 31)",
        r: "Lemuel"
    },
    {
        p: "¿Qué le vendieron a Abrahán los hijos de Het por 400 siclos de plata?",
        t: "(Génesis 23:14-20)",
        r: "Un campo en Macpelá"
    },
    {
        p: "Por su ubicación en el cuerpo humano, ¿qué órganos utiliza la Biblia para representar los pensamientos y sentimientos más recónditos?",
        t: "(Apocalipsis 2:23)",
        r: "Los riñones"
    },
    {
        p: "En la revelación que recibió Juan, ¿a quiénes vio sentados alrededor del trono de Jehová?",
        t: "(Revelación 4:1-6)",
        r: "A los veinticuatro ancianos"
    },
    {
        p: "¿Cuál dijo Jesús que era “la más pequeña de todas las semillas que hay en la tierra",
        t: "(Marcos 4:26-32)",
        r: "Un grano de mostaza"
    },
    {
        p: "¿Qué juez dio muerte al opresivo rey Eglón de Moab?",
        t: "(Jueces 3:16-22)",
        r: "Ehúd"
    },
    {
        p: "En cumplimiento de la palabra de Jehová, ¿qué animales devoraron a la malvada Jezabel?",
        t: "(2 Reyes 9:30-37)",
        r: "Los perros"
    },
    {
        p: "¿Cuánto pesaban las piedras de granizo simbólicas que cayeron cuando el séptimo ángel derramó su tazón de la cólera de Dios?",
        t: "(Apocalipsis 16:17-21)",
        r: "Un talento"
    },
    {
        p: "¿Que escritor bíblico pidio a Jehová que que no se le diera “ni pobreza ni riqueza”",
        t: "(Proverbios 30:8, 9.)",
        r: "Agur"
    },
    {
        p: "¿De qué ciudad era Saúl, el primer rey de Israel?",
        t: "(1 Samuel 10:24-26)",
        r: "De Guibeah"
    },
    {
        p: "¿Quiénes eran los asaltantes que robaron los camellos de Job, y asesinaron a sus servidores?",
        t: "(Job 1:13-17)",
        r: "Los caldeos"
    },
    {
        p: "¿Como se llamaba el hombre a quién Pedro le cortó la oreja derecha con una espada cuando llegó la muchedumbre para arrestar a Jesús?",
        t: "(Juan 18:6-11)",
        r: "Malco"
    },
    {
        p: "¿A cuál de los tres compañeros de Daniel se le dio en Babilonia el nombre de Mesac",
        t: "(Daniel 1:7.)",
        r: "A Misael"
    },
    {
        p: "¿Quién informó al rey Asuero de que Hamán había hecho un madero de 50 codos para colgar a Mardoqueo, lo que hizo que el rey colgara a Hamán en él?",
        t: "(Ester 7:6-10)",
        r: "Harboná, uno de los oficiales de la corte"
    },
    {
        p: "¿Qué antepasado del Mesías se casó con Rut?",
        t: "(Rut 4:11-14)",
        r: "Boaz"
    },
    {
        p: "¿Cuáles son los nombres de las parteras hebreas que no hicieron caso al mandato de Faraón de matar a los varones recién nacidos?",
        t: "(Éxodo 1:17)",
        r: "Sifrá y Pua"
    },
    {
        p: "¿De qué nación fue rey Artajerjes?",
        t: "(Esdras 4:5-7)",
        r: "De Persia"
    },
    {
        p: "En una ilustración de Jesús, ¿qué dio a cada uno de sus esclavos el hombre noble que partió “para conseguir para sí poder real”?",
        t: "(Lucas 19:12-24)",
        r: "Una mina"
    },
    {
        p: "¿Qué elemento utilizó Elías al nombrar como sucesor suyo a Eliseo?",
        t: "(1 Reyes 19:16-19)",
        r: "Su prenda de vestir oficial"
    },
    {
        p: "Cuando Jehová alimentó a los israelitas con maná, ¿qué le ocurría al que quedaba sin recoger?",
        t: "(Éxodo 16:19-21)",
        r: "El sol lo derretia"
    },
    {
        p: "De cuatrocientos profetas, ¿cuál fue el único que dijo la verdad al rey Acab sobre la campaña militar que este iba a emprender contra los sirios?",
        t: "(1 Reyes 22:16, 17)",
        r: "Micaya"
    },
    {
        p: "¿Cuántas veces al año tenían que ir a Jerusalén para “presentarse delante de Jehová” los varones israelitas?",
        t: "(Deuteronomio 16:13-17)",
        r: "Tres veces al año"
    },
    {
        p: "Para evitar que el Faraón diera muerte a Moisés, ¿entre qué plantas se le escondió cuando era niño?",
        t: "(Éxodo 2:1-4)",
        r: "Entre las cañas"
    },
    {
        p: "¿Qué faraón egipcio habló palabras “procedentes de la boca de Dios” al rey Josías, quien no hizo caso y murió?",
        t: "(2 Crónicas 35:21,22)",
        r: "El faraón Nekó"
    },
    {
        p: "¿Qué dios filisteo quedó humillado delante de la sagrada Arca de Jehová? ",
        t: "(1 Samuel 5:1-7)",
        r: "Dagón"
    },
    {
        p: "¿Quién informó al rey Josías del progreso de las reparaciones del templo y le leyó el “libro de la ley” que se encontró allí?",
        t: "(2 Reyes 22:8-10.)",
        r: "Safán"
    },
    {
        p: "¿En que ciudad se inició el éxodo de los israelitas? ",
        t: "(Éxodo 12:33-39)",
        r: "En Ramesés"
    },
    {
        p: "¿Qué tenía que hacer el amo cuyo esclavo hebreo no deseaba emanciparse de él? (Éxodo 21:6.)",
        t: "(Éxodo 12:33-39)",
        r: "En Ramesés"
    },
]
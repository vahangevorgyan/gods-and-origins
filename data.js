const greek_gods_data = [
  {
    name: "Zeus",
    domain: "Sky, Thunder, King of the Gods",
    related_gods: ["Hera", "Poseidon", "Hades"],
    fun_fact: "Once transformed into a swan to seduce the mortal Leda.",
    description:
      "Supreme ruler of Mount Olympus, known for his imposing presence and unpredictable temper.",
    image: "assets/GreekGods/Zeus.webp",
  },
  {
    name: "Hera",
    domain: "Marriage, Family",
    related_gods: ["Zeus", "Ares", "Hephaestus"],
    fun_fact: "Known for cursing many of Zeus’s lovers and their children.",
    description:
      "Queen of the gods, she fiercely defended her divine authority and sacred institution of marriage.",
    image: "assets/GreekGods/Hera.webp",
  },
  {
    name: "Poseidon",
    domain: "Sea, Earthquakes, Horses",
    related_gods: ["Zeus", "Hades"],
    fun_fact: "Credited with creating the first horse from sea foam.",
    description:
      "A volatile deity who wielded the trident and ruled over all aquatic realms.",
    image: "assets/GreekGods/Poseidon.webp",
  },
  {
    name: "Hades",
    domain: "Underworld, Death",
    related_gods: ["Zeus", "Persephone"],
    fun_fact: "Wore a helmet that made him invisible.",
    description:
      "He ruled the realm of the dead with fairness, preferring order over chaos.",
    image: "assets/GreekGods/Hades.webp",
  },
  {
    name: "Athena",
    domain: "Wisdom, War, Strategy",
    related_gods: ["Zeus", "Ares"],
    fun_fact: "Sprang fully grown and armored from Zeus’s forehead.",
    description:
      "Revered for her intellect and calm authority, often depicted with an owl and shield.",
    image: "assets/GreekGods/Athena.webp",
  },
  {
    name: "Apollo",
    domain: "Sun, Music, Prophecy",
    related_gods: ["Artemis", "Zeus"],
    fun_fact: "Challenged a satyr named Marsyas to a music contest and won.",
    description:
      "A radiant and multifaceted god associated with reason, art, and oracles.",
    image: "assets/GreekGods/Apollo.webp",
  },
  {
    name: "Artemis",
    domain: "Moon, Hunting",
    related_gods: ["Apollo", "Zeus"],
    fun_fact: "Turned a man into a stag for seeing her bathe.",
    description:
      "A fiercely independent goddess often accompanied by a stag or hunting dogs.",
    image: "assets/GreekGods/Artemis.webp",
  },
  {
    name: "Ares",
    domain: "War",
    related_gods: ["Zeus", "Hera"],
    fun_fact: "Caught in a golden net by Hephaestus while with Aphrodite.",
    description:
      "Embodiment of brute force and bloodlust, often unpopular among gods and mortals.",
    image: "assets/GreekGods/Ares.webp",
  },
  {
    name: "Aphrodite",
    domain: "Love, Beauty",
    related_gods: ["Hephaestus", "Ares"],
    fun_fact: "Said to have started the Trojan War by giving Helen to Paris.",
    description:
      "Emerged from sea foam, captivating all with her charm and influence over desire.",
    image: "assets/GreekGods/Aphrodite.webp",
  },
  {
    name: "Hephaestus",
    domain: "Fire, Blacksmiths",
    related_gods: ["Hera", "Aphrodite"],
    fun_fact: "Crafted Achilles’ near-invincible armor.",
    description:
      "A master artisan and inventor, known for his skill despite his physical imperfections.",
    image: "assets/GreekGods/Hephaestus.webp",
  },
  {
    name: "Hermes",
    domain: "Travel, Trade, Messenger",
    related_gods: ["Zeus", "Apollo"],
    fun_fact: "Stole Apollo’s cattle as a newborn.",
    description:
      "Quick-witted and mischievous, he moved freely between realms as a divine messenger.",
    image: "assets/GreekGods/Hermes.webp",
  },
  {
    name: "Dionysus",
    domain: "Wine, Festivity",
    related_gods: ["Zeus", "Semele"],
    fun_fact: "Turned pirates into dolphins when they tried to kidnap him.",
    description:
      "Represented ecstasy and chaos, bridging the human and divine through ritual and celebration.",
    image: "assets/GreekGods/Dionysus.webp",
  },
  {
    name: "Hestia",
    domain: "Hearth, Home",
    related_gods: ["Zeus", "Hera"],
    fun_fact: "Gave up her seat on Mount Olympus to avoid drama.",
    description:
      "A peaceful and constant presence, symbolizing domestic stability and sacred fire.",
    image: "assets/GreekGods/Hestia.webp",
  },
  {
    name: "Persephone",
    domain: "Spring, Underworld",
    related_gods: ["Hades", "Demeter"],
    fun_fact: "Ate six pomegranate seeds and became bound to the underworld.",
    description:
      "Embodied the cycle of life and death, balancing innocence with regal authority.",
    image: "assets/GreekGods/Persephone.webp",
  },
  {
    name: "Demeter",
    domain: "Harvest, Agriculture",
    related_gods: ["Persephone", "Zeus"],
    fun_fact: "Taught mortals how to farm while searching for Persephone.",
    description:
      "Her mood dictated the seasons, and her grief shaped the Earth’s fertility.",
    image: "assets/GreekGods/Demeter.webp",
  },
  {
    name: "Eros",
    domain: "Desire, Love",
    related_gods: ["Aphrodite"],
    fun_fact: "Accidentally made himself fall in love with Psyche.",
    description:
      "A youthful spirit whose arrows could ignite uncontrollable passion.",
    image: "assets/GreekGods/Eros.webp",
  },
  {
    name: "Nike",
    domain: "Victory",
    related_gods: ["Athena"],
    fun_fact: "Often seen flying beside Athena in battles.",
    description: "Personified triumph in both war and peaceful competitions.",
    image: "assets/GreekGods/Nike.webp",
  },
  {
    name: "Gaia",
    domain: "Earth",
    related_gods: ["Uranus", "Cronus"],
    fun_fact: "Gave birth to Uranus and later helped overthrow him.",
    description:
      "Primordial mother of all life, revered as the foundation of existence.",
    image: "assets/GreekGods/Gaia.webp",
  },
  {
    name: "Cronus",
    domain: "Time",
    related_gods: ["Rhea", "Zeus"],
    fun_fact: "Swallowed his children to prevent them from overthrowing him.",
    description: "Ruler of the Titans whose fear of prophecy sealed his fate.",
    image: "assets/GreekGods/Cronus.webp",
  },
  {
    name: "Helios",
    domain: "Sun",
    related_gods: ["Selene", "Eos"],
    fun_fact:
      "Let his son Phaethon drive the sun chariot—with disastrous results.",
    description:
      "Drove the blazing chariot across the sky each day, illuminating the world.",
    image: "assets/GreekGods/Helios.webp",
  },
];

const norse_gods_data = [
  {
    name: "Odin",
    domain: "Wisdom, War, Death",
    related_gods: ["Thor", "Frigg", "Loki"],
    fun_fact: "Sacrificed one of his eyes to gain infinite wisdom.",
    description:
      "Ruler of the Aesir and seeker of knowledge, often seen with ravens and a spear.",
    image: "assets/NorseGods/Odin.webp",
  },
  {
    name: "Thor",
    domain: "Thunder, Strength",
    related_gods: ["Odin", "Sif"],
    fun_fact: "His hammer Mjölnir always returned to his hand when thrown.",
    description:
      "A heroic protector of gods and humans, known for his booming presence and red beard.",
    image: "assets/NorseGods/Thor.webp",
  },
  {
    name: "Loki",
    domain: "Mischief, Trickery",
    related_gods: ["Odin", "Hel"],
    fun_fact: "Shapeshifted into various animals—including a mare.",
    description:
      "A cunning and unpredictable figure, whose antics often led to both chaos and solutions.",
    image: "assets/NorseGods/Loki.webp",
  },
  {
    name: "Freya",
    domain: "Love, Beauty, War",
    related_gods: ["Frey", "Odin"],
    fun_fact: "Rode a chariot pulled by cats.",
    description:
      "A powerful Vanir goddess who balanced sensuality with fierce leadership in battle.",
    image: "assets/NorseGods/Freya.webp",
  },
  {
    name: "Frigg",
    domain: "Marriage, Motherhood",
    related_gods: ["Odin", "Balder"],
    fun_fact: "Could see the future but never revealed it.",
    description:
      "Matron of the Aesir, often associated with domestic harmony and prophetic wisdom.",
    image: "assets/NorseGods/Frigg.webp",
  },
  {
    name: "Tyr",
    domain: "War, Justice",
    related_gods: ["Odin", "Fenrir"],
    fun_fact: "Lost his hand to the wolf Fenrir.",
    description:
      "A brave and principled god, honored for his unwavering sense of duty and sacrifice.",
    image: "assets/NorseGods/Tyr.webp",
  },
  {
    name: "Heimdall",
    domain: "Watchfulness, Light",
    related_gods: ["Odin", "Loki"],
    fun_fact: "Had extraordinary senses and could hear grass grow.",
    description:
      "Guardian of the Bifrost bridge, ever alert to threats against the gods.",
    image: "assets/NorseGods/Heimdall.webp",
  },
  {
    name: "Balder",
    domain: "Light, Purity",
    related_gods: ["Frigg", "Odin"],
    fun_fact: "Was immune to all harm—except mistletoe.",
    description:
      "A beloved and radiant figure whose death was a harbinger of Ragnarök.",
    image: "assets/NorseGods/Balder.webp",
  },
  {
    name: "Hel",
    domain: "Underworld",
    related_gods: ["Loki"],
    fun_fact: "Ruled over a realm of the dead that was named after her.",
    description:
      "Goddess of the cold and shadowy realm for souls not claimed by Valhalla or battlefields.",
    image: "assets/NorseGods/Hel.webp",
  },
  {
    name: "Frey",
    domain: "Fertility, Peace",
    related_gods: ["Freya"],
    fun_fact: "Owned a ship that could be folded and carried in a pouch.",
    description:
      "A symbol of prosperity and harmony, deeply connected to the cycles of nature.",
    image: "assets/NorseGods/Frey.webp",
  },
  {
    name: "Njord",
    domain: "Sea, Wind",
    related_gods: ["Frey", "Freya"],
    fun_fact: "Favored calm seas and prosperous fishing.",
    description:
      "A sea deity revered by sailors and coastal dwellers for his generosity and guidance.",
    image: "assets/NorseGods/Njord.webp",
  },
  {
    name: "Sif",
    domain: "Earth, Fertility",
    related_gods: ["Thor"],
    fun_fact:
      "Had golden hair made by dwarves after Loki cut off her real hair.",
    description: "A graceful figure linked to the harvest and growth of crops.",
    image: "assets/NorseGods/Sif.webp",
  },
  {
    name: "Skadi",
    domain: "Winter, Mountains",
    related_gods: ["Njord"],
    fun_fact: "Chose her husband by looking only at the gods' feet.",
    description:
      "A fierce huntress and giantess, embodying the harsh beauty of the northern wilderness.",
    image: "assets/NorseGods/Skadi.webp",
  },
  {
    name: "Bragi",
    domain: "Poetry, Music",
    related_gods: ["Odin"],
    fun_fact: "Had a long beard and was known as the bard of the gods.",
    description:
      "A wise and eloquent god who presided over poetic inspiration and storytelling.",
    image: "assets/NorseGods/Bragi.webp",
  },
  {
    name: "Idunn",
    domain: "Youth, Apples",
    related_gods: ["Bragi"],
    fun_fact: "Kept the apples that granted eternal youth to the gods.",
    description:
      "Gentle and nurturing, she safeguarded the source of divine vitality.",
    image: "assets/NorseGods/Idunn.webp",
  },
  {
    name: "Eir",
    domain: "Healing",
    related_gods: ["Frigg"],
    fun_fact: "Known as a Valkyrie with great healing powers.",
    description:
      "A lesser-known but revered figure among practitioners of Norse healing magic.",
    image: "assets/NorseGods/Eir.webp",
  },
  {
    name: "Vidar",
    domain: "Vengeance, Silence",
    related_gods: ["Odin"],
    fun_fact: "Destined to avenge Odin’s death during Ragnarök.",
    description:
      "A stoic and immensely strong god, often associated with quiet resolve.",
    image: "assets/NorseGods/Vidar.webp",
  },
  {
    name: "Vali",
    domain: "Revenge",
    related_gods: ["Odin"],
    fun_fact: "Grew to adulthood in a single day to avenge Balder.",
    description:
      "A swift avenger born of divine necessity, embodying destiny and justice.",
    image: "assets/NorseGods/Vali.webp",
  },
  {
    name: "Aegir",
    domain: "Sea",
    related_gods: ["Ran"],
    fun_fact: "Hosted the gods in lavish underwater feasts.",
    description:
      "A mysterious and powerful sea giant who represented both bounty and danger of the ocean.",
    image: "assets/NorseGods/Aegir.webp",
  },
  {
    name: "Ran",
    domain: "Drowned Dead",
    related_gods: ["Aegir"],
    fun_fact: "Captured sailors in her net and pulled them into the sea.",
    description:
      "A haunting sea goddess who ruled the drowned with eerie grace.",
    image: "assets/NorseGods/Ran.webp",
  },
];

const roman_gods_data = [
  {
    name: "Jupiter",
    domain: "Sky, Thunder, King of the Gods",
    related_gods: ["Juno", "Neptune", "Pluto"],
    fun_fact: "So feared that Romans often used euphemisms to refer to him.",
    description:
      "Supreme authority among the gods, his will was seen as the voice of fate itself.",
    image: "assets/RomanGods/Jupiter.webp",
  },
  {
    name: "Juno",
    domain: "Marriage, Family",
    related_gods: ["Jupiter", "Mars"],
    fun_fact: "Her sacred goose once saved Rome from invasion.",
    description:
      "Regal and vigilant, she protected Roman women and the sanctity of the state.",
    image: "assets/RomanGods/Juno.webp",
  },
  {
    name: "Neptune",
    domain: "Sea, Earthquakes, Horses",
    related_gods: ["Jupiter", "Pluto"],
    fun_fact: "Temples held chariot races in his honor.",
    description:
      "Fierce and tempestuous, his power was invoked to calm waters and ensure victory in naval battles.",
    image: "assets/RomanGods/Neptune.webp",
  },
  {
    name: "Pluto",
    domain: "Underworld, Death",
    related_gods: ["Jupiter", "Proserpina"],
    fun_fact: "His name inspired the word 'plutonium'.",
    description:
      "A stern ruler of the afterlife, overseeing the wealth and shadows beneath the Earth.",
    image: "assets/RomanGods/Pluto.webp",
  },
  {
    name: "Minerva",
    domain: "Wisdom, War, Strategy",
    related_gods: ["Jupiter", "Mars"],
    fun_fact: "Had no mother—born from Jupiter’s mind.",
    description:
      "A goddess of intellect and invention, patron to artisans and philosophers alike.",
    image: "assets/RomanGods/Minerva.webp",
  },
  {
    name: "Apollo",
    domain: "Sun, Music, Prophecy",
    related_gods: ["Diana", "Jupiter"],
    fun_fact: "Guarded the Sibylline Books of prophecy in Rome.",
    description:
      "A youthful god of harmony and healing, bridging divine light with mortal inspiration.",
    image: "assets/RomanGods/Apollo.webp",
  },
  {
    name: "Diana",
    domain: "Moon, Hunting",
    related_gods: ["Apollo", "Jupiter"],
    fun_fact: "Was believed to aid women in childbirth.",
    description:
      "Independent and wild, she roamed forests with her bow and divine dignity.",
    image: "assets/RomanGods/Diana.webp",
  },
  {
    name: "Mars",
    domain: "War",
    related_gods: ["Jupiter", "Juno"],
    fun_fact: "Father of Romulus and Remus, Rome’s founders.",
    description:
      "A revered god of valor and conquest, embodying Roman military ideals.",
    image: "assets/RomanGods/Mars.webp",
  },
  {
    name: "Venus",
    domain: "Love, Beauty",
    related_gods: ["Vulcan", "Mars"],
    fun_fact: "Claimed as an ancestor by Julius Caesar.",
    description:
      "Enchanting and persuasive, she influenced hearts and politics with equal grace.",
    image: "assets/RomanGods/Venus.webp",
  },
  {
    name: "Vulcan",
    domain: "Fire, Blacksmiths",
    related_gods: ["Venus"],
    fun_fact: "Believed to forge weapons inside Mount Etna.",
    description:
      "Crippled yet mighty, he shaped the divine armory with fire and hammer.",
    image: "assets/RomanGods/Vulcan.webp",
  },
  {
    name: "Mercury",
    domain: "Travel, Trade, Messenger",
    related_gods: ["Jupiter", "Apollo"],
    fun_fact: "Worshipped by merchants who engraved his name on coins.",
    description:
      "A nimble and clever god, always on the move between gods, mortals, and the underworld.",
    image: "assets/RomanGods/Mercury.webp",
  },
  {
    name: "Bacchus",
    domain: "Wine, Festivity",
    related_gods: ["Jupiter", "Semele"],
    fun_fact: "His festivals were once banned by the Roman Senate.",
    description:
      "Joyous yet chaotic, he ruled over ecstasy, transformation, and the loss of inhibition.",
    image: "assets/RomanGods/Bacchus.webp",
  },
  {
    name: "Vesta",
    domain: "Hearth, Home",
    related_gods: ["Jupiter", "Juno"],
    fun_fact:
      "Her priestesses were punished by burial if they broke their vows.",
    description:
      "A quiet yet central presence, her flame was seen as the soul of the Roman state.",
    image: "assets/RomanGods/Vesta.webp",
  },
  {
    name: "Proserpina",
    domain: "Spring, Underworld",
    related_gods: ["Pluto", "Ceres"],
    fun_fact: "Her story mirrors Persephone’s tale.",
    description:
      "Her dual role in life and death symbolized seasonal renewal and inevitable fate.",
    image: "assets/RomanGods/Proserpina.webp",
  },
  {
    name: "Ceres",
    domain: "Harvest, Agriculture",
    related_gods: ["Proserpina"],
    fun_fact: "The word 'cereal' comes from her name.",
    description:
      "Deeply cherished by the people, she ensured fertility of land and survival of cities.",
    image: "assets/RomanGods/Ceres.webp",
  },
  {
    name: "Cupid",
    domain: "Desire, Love",
    related_gods: ["Venus"],
    fun_fact: "Caused chaos even among the gods with his arrows.",
    description:
      "A playful and unpredictable force who sparked love in hearts with a simple shot.",
    image: "assets/RomanGods/Cupid.webp",
  },
  {
    name: "Victoria",
    domain: "Victory",
    related_gods: ["Mars"],
    fun_fact: "Had statues placed in Roman courts to symbolize power.",
    description:
      "Symbol of Roman dominance, she was invoked in both politics and battle triumphs.",
    image: "assets/RomanGods/Victoria.webp",
  },
  {
    name: "Terra",
    domain: "Earth",
    related_gods: ["Caelus"],
    fun_fact: "Honored during planting season to bless soil.",
    description:
      "The nourishing mother of all, worshipped for her grounding power and abundance.",
    image: "assets/RomanGods/Terra.webp",
  },
  {
    name: "Saturn",
    domain: "Time",
    related_gods: ["Ops", "Jupiter"],
    fun_fact: "His festival Saturnalia inspired some Christmas customs.",
    description:
      "A once-golden ruler of an age of peace, later linked to the relentless passage of time.",
    image: "assets/RomanGods/Saturn.webp",
  },
  {
    name: "Sol",
    domain: "Sun",
    related_gods: ["Luna"],
    fun_fact: "Later merged with the cult of Mithras in Roman worship.",
    description:
      "Bright and ever-rising, his presence marked the divine rhythm of daily life.",
    image: "assets/RomanGods/Sol.webp",
  },
];

const egyptian_gods_data = [
  {
    name: "Ra",
    domain: "Sun, Creation",
    related_gods: ["Osiris", "Horus"],
    fun_fact:
      "Traveled through the underworld every night to be reborn at dawn.",
    description:
      "Supreme solar deity whose radiant power sustained all life and order in the cosmos.",
    image: "assets/EgyptianGods/Ra.webp",
  },
  {
    name: "Osiris",
    domain: "Afterlife, Resurrection",
    related_gods: ["Isis", "Horus"],
    fun_fact:
      "Was killed and dismembered by his brother Set, then resurrected by Isis.",
    description:
      "Judge of the dead, he symbolized eternal life and divine kingship beyond the grave.",
    image: "assets/EgyptianGods/Osiris.webp",
  },
  {
    name: "Isis",
    domain: "Magic, Motherhood",
    related_gods: ["Osiris", "Horus"],
    fun_fact: "Used powerful spells to bring Osiris back to life.",
    description:
      "A nurturing goddess of immense magical skill, revered across ancient cultures.",
    image: "assets/EgyptianGods/Isis.webp",
  },
  {
    name: "Horus",
    domain: "Sky, Kingship",
    related_gods: ["Osiris", "Isis"],
    fun_fact:
      "Often depicted with the head of a falcon and associated with the pharaoh.",
    description:
      "Embodiment of divine rulership, often portrayed battling chaos to uphold order.",
    image: "assets/EgyptianGods/Horus.webp",
  },
  {
    name: "Anubis",
    domain: "Mummification, Dead",
    related_gods: ["Osiris"],
    fun_fact: "Invented embalming and guided souls to the afterlife.",
    description:
      "A jackal-headed guide who safeguarded tombs and prepared the soul for judgment.",
    image: "assets/EgyptianGods/Anubis.webp",
  },
  {
    name: "Thoth",
    domain: "Wisdom, Writing",
    related_gods: ["Ra"],
    fun_fact:
      "Credited with inventing hieroglyphs and keeping the universe in balance.",
    description:
      "Scribe of the gods and keeper of sacred knowledge, often shown with an ibis head.",
    image: "assets/EgyptianGods/Thoth.webp",
  },
  {
    name: "Set",
    domain: "Chaos, Desert",
    related_gods: ["Osiris", "Horus"],
    fun_fact: "Murdered Osiris and battled Horus for the throne of Egypt.",
    description:
      "A fierce and unpredictable force of disorder, storms, and wild lands.",
    image: "assets/EgyptianGods/Set.webp",
  },
  {
    name: "Bastet",
    domain: "Home, Fertility",
    related_gods: ["Ra"],
    fun_fact: "Depicted as a cat, she protected households from evil spirits.",
    description:
      "Gentle guardian and patroness of joy, music, and feminine energy.",
    image: "assets/EgyptianGods/Bastet.webp",
  },
  {
    name: "Sekhmet",
    domain: "War, Healing",
    related_gods: ["Ra"],
    fun_fact:
      "Her breath formed the desert and she was calmed by beer dyed red.",
    description:
      "A lioness-headed goddess of both destruction and protection, invoked in plagues and cures.",
    image: "assets/EgyptianGods/Sekhmet.webp",
  },
  {
    name: "Hathor",
    domain: "Love, Music",
    related_gods: ["Ra", "Horus"],
    fun_fact: "Welcomed souls into the afterlife with music and joy.",
    description:
      "Goddess of joy and beauty, often linked with motherhood and celebration.",
    image: "assets/EgyptianGods/Hathor.webp",
  },
  {
    name: "Nut",
    domain: "Sky",
    related_gods: ["Geb", "Ra"],
    fun_fact: "Swallowed the sun every evening and birthed it each morning.",
    description:
      "A celestial canopy goddess who formed the heavens, arched protectively over the earth.",
    image: "assets/EgyptianGods/Nut.webp",
  },
  {
    name: "Geb",
    domain: "Earth",
    related_gods: ["Nut", "Ra"],
    fun_fact: "His laughter caused earthquakes.",
    description:
      "Father of snakes and giver of crops, he lay beneath the sky as the fertile land.",
    image: "assets/EgyptianGods/Geb.webp",
  },
  {
    name: "Nephthys",
    domain: "Mourning, Night",
    related_gods: ["Set", "Isis"],
    fun_fact: "Protected the dead and comforted the grieving.",
    description:
      "A quiet yet powerful goddess who aided in funerary rites and spiritual protection.",
    image: "assets/EgyptianGods/Nephthys.webp",
  },
  {
    name: "Ma’at",
    domain: "Truth, Justice",
    related_gods: ["Thoth"],
    fun_fact: "Her feather was used to weigh souls' hearts in the afterlife.",
    description:
      "Personification of cosmic balance, law, and moral integrity in all aspects of life.",
    image: "assets/EgyptianGods/Maat.webp",
  },
  {
    name: "Khonsu",
    domain: "Moon",
    related_gods: ["Ra", "Amun"],
    fun_fact: "Helped heal people and chase away evil spirits at night.",
    description:
      "A youthful god of time and healing, traveling the sky as the night light.",
    image: "assets/EgyptianGods/Khonsu.webp",
  },
  {
    name: "Amun",
    domain: "Air, Creation",
    related_gods: ["Ra"],
    fun_fact: "Merged with Ra to become Amun-Ra, king of the gods.",
    description:
      "A mysterious and hidden deity who rose to supremacy during the New Kingdom.",
    image: "assets/EgyptianGods/Amun.webp",
  },
  {
    name: "Ptah",
    domain: "Craftsmen, Creation",
    related_gods: ["Sekhmet"],
    fun_fact:
      "Believed to have created the world by speaking it into existence.",
    description:
      "Patron of artisans and builders, representing creative power through divine speech.",
    image: "assets/EgyptianGods/Ptah.webp",
  },
  {
    name: "Tefnut",
    domain: "Moisture",
    related_gods: ["Shu"],
    fun_fact: "Was said to have vanished into the desert, causing a drought.",
    description:
      "A lioness goddess who brought balance through dew, rain, and life-giving mist.",
    image: "assets/EgyptianGods/Tefnut.webp",
  },
  {
    name: "Shu",
    domain: "Air",
    related_gods: ["Tefnut"],
    fun_fact: "Held up the sky goddess Nut to separate her from the earth.",
    description:
      "Symbol of atmosphere and breath, he brought space between heaven and earth.",
    image: "assets/EgyptianGods/Shu.webp",
  },
  {
    name: "Sobek",
    domain: "Nile, Crocodiles",
    related_gods: ["Ra"],
    fun_fact: "Was worshipped for protection from crocodiles and floods.",
    description:
      "A crocodile-headed god of strength and fertility, closely tied to the Nile’s power.",
    image: "assets/EgyptianGods/Sobek.webp",
  },
];

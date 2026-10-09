// ============================================================
// NAME LIST: add or edit names here.
// Format: { name, gender: "boy" | "girl", origin, meaning }
// Meanings are commonly cited traditional interpretations. Verify before publishing.
// ============================================================
const NAMES = [
  // ---- Gujarati, Marathi and Rajasthani boys ----
  { name: "Aaditya", gender: "boy", origin: "Sanskrit", meaning: "Son of Aditi, the sun" },
  { name: "Abhimanyu", gender: "boy", origin: "Sanskrit", meaning: "Brave, proud, son of Arjuna" },
  { name: "Ajit", gender: "boy", origin: "Sanskrit", meaning: "Unconquered, invincible" },
  { name: "Bhargav", gender: "boy", origin: "Sanskrit", meaning: "Descendant of Bhrigu, bright" },
  { name: "Bhavin", gender: "boy", origin: "Gujarati", meaning: "Universe, worldly" },
  { name: "Chintan", gender: "boy", origin: "Sanskrit", meaning: "Thought, reflection" },
  { name: "Darpan", gender: "boy", origin: "Sanskrit", meaning: "Mirror" },
  { name: "Dhaval", gender: "boy", origin: "Gujarati", meaning: "White, bright" },
  { name: "Gaurang", gender: "boy", origin: "Sanskrit", meaning: "Fair-limbed, a name of Krishna" },
  { name: "Hitesh", gender: "boy", origin: "Sanskrit", meaning: "Lord of well-being" },
  { name: "Jayesh", gender: "boy", origin: "Sanskrit", meaning: "Lord of victory" },
  { name: "Jignesh", gender: "boy", origin: "Gujarati", meaning: "Lord of the senses" },
  { name: "Kanhaiya", gender: "boy", origin: "Hindi", meaning: "Name of Krishna" },
  { name: "Kishan", gender: "boy", origin: "Hindi", meaning: "Name of Krishna" },
  { name: "Kshitij", gender: "boy", origin: "Sanskrit", meaning: "Horizon, earth" },
  { name: "Manan", gender: "boy", origin: "Sanskrit", meaning: "Deep thought, reflection" },
  { name: "Mehul", gender: "boy", origin: "Gujarati", meaning: "Rain cloud, bright" },
  { name: "Nilesh", gender: "boy", origin: "Sanskrit", meaning: "Lord of the blue, Vishnu" },
  { name: "Om", gender: "boy", origin: "Sanskrit", meaning: "The sacred syllable" },
  { name: "Pankaj", gender: "boy", origin: "Sanskrit", meaning: "Born of mud, lotus" },
  { name: "Pawan", gender: "boy", origin: "Sanskrit", meaning: "Wind, air" },
  { name: "Ritesh", gender: "boy", origin: "Sanskrit", meaning: "Lord of order, cosmic law" },
  { name: "Rohit", gender: "boy", origin: "Sanskrit", meaning: "Red, ruddy" },
  { name: "Sahil", gender: "boy", origin: "Sanskrit", meaning: "Shore, coast" },
  { name: "Sumit", gender: "boy", origin: "Sanskrit", meaning: "Good friend" },
  { name: "Tejpal", gender: "boy", origin: "Rajasthani", meaning: "Protector of light" },
  { name: "Vaibhav", gender: "boy", origin: "Sanskrit", meaning: "Prosperity, splendour, glory" },
  { name: "Vardhan", gender: "boy", origin: "Sanskrit", meaning: "Growing, increasing" },
  { name: "Vishwas", gender: "boy", origin: "Sanskrit", meaning: "Trust, faith" },
  { name: "Yashwant", gender: "boy", origin: "Marathi", meaning: "Famous, glorious" },

  // ---- Gujarati, Marathi and Rajasthani girls ----
  { name: "Aasha", gender: "girl", origin: "Sanskrit", meaning: "Hope" },
  { name: "Bhavna", gender: "girl", origin: "Sanskrit", meaning: "Feeling, emotion, devotion" },
  { name: "Chetna", gender: "girl", origin: "Sanskrit", meaning: "Consciousness, awareness" },
  { name: "Darshini", gender: "girl", origin: "Sanskrit", meaning: "Vision, sight" },
  { name: "Falguni", gender: "girl", origin: "Sanskrit", meaning: "Born in the month of Phalguna" },
  { name: "Gita", gender: "girl", origin: "Sanskrit", meaning: "Song, the Bhagavad Gita" },
  { name: "Hetal", gender: "girl", origin: "Gujarati", meaning: "Affection, love" },
  { name: "Ishwara", gender: "girl", origin: "Sanskrit", meaning: "Goddess, lady" },
  { name: "Jyotsna", gender: "girl", origin: "Sanskrit", meaning: "Moonlight" },
  { name: "Kinjal", gender: "girl", origin: "Gujarati", meaning: "Pollen, flower" },
  { name: "Madhura", gender: "girl", origin: "Sanskrit", meaning: "Sweet, pleasant" },
  { name: "Mansi", gender: "girl", origin: "Gujarati", meaning: "Of the mind" },
  { name: "Meghna", gender: "girl", origin: "Sanskrit", meaning: "Cloud, rain" },
  { name: "Nayana", gender: "girl", origin: "Sanskrit", meaning: "Eyes" },
  { name: "Ritika", gender: "girl", origin: "Sanskrit", meaning: "Garland, flower" },
  { name: "Sakhi", gender: "girl", origin: "Sanskrit", meaning: "Friend, companion" },
  { name: "Sejal", gender: "girl", origin: "Gujarati", meaning: "Pleasant breeze, calm" },
  { name: "Sheetal", gender: "girl", origin: "Sanskrit", meaning: "Cool, calm" },
  { name: "Trupti", gender: "girl", origin: "Marathi", meaning: "Satisfaction, contentment" },
  { name: "Urmi", gender: "girl", origin: "Sanskrit", meaning: "Wave, ripple" },

  // ---- South Indian boys ----
  { name: "Aravind", gender: "boy", origin: "Tamil", meaning: "Lotus" },
  { name: "Arun", gender: "boy", origin: "Sanskrit", meaning: "Dawn, sun's charioteer" },
  { name: "Ashok", gender: "boy", origin: "Sanskrit", meaning: "Without sorrow" },
  { name: "Balaji", gender: "boy", origin: "Telugu", meaning: "Name of Lord Venkateswara" },
  { name: "Bharath", gender: "boy", origin: "Sanskrit", meaning: "Bearer of light, name of India" },
  { name: "Chandrakanth", gender: "boy", origin: "Sanskrit", meaning: "Moon-like, moonstone" },
  { name: "Dinakar", gender: "boy", origin: "Sanskrit", meaning: "Sun, maker of day" },
  { name: "Ganesh", gender: "boy", origin: "Sanskrit", meaning: "Lord of ganas, the elephant-headed god" },
  { name: "Gopinath", gender: "boy", origin: "Sanskrit", meaning: "Lord of the cowherds, Krishna" },
  { name: "Hari", gender: "boy", origin: "Sanskrit", meaning: "Lord Vishnu, one who removes sorrows" },
  { name: "Harish", gender: "boy", origin: "Sanskrit", meaning: "Lord Vishnu, lord of the deer" },
  { name: "Ilango", gender: "boy", origin: "Tamil", meaning: "Young, tender" },
  { name: "Jagadish", gender: "boy", origin: "Sanskrit", meaning: "Lord of the universe" },
  { name: "Karthik", gender: "boy", origin: "Tamil", meaning: "Name of Lord Kartikeya" },
  { name: "Kumaran", gender: "boy", origin: "Tamil", meaning: "Young prince, a name of Murugan" },
  { name: "Mahendra", gender: "boy", origin: "Sanskrit", meaning: "Great lord, king of gods" },
  { name: "Manoj", gender: "boy", origin: "Sanskrit", meaning: "Pleasing to the mind" },
  { name: "Muralidhar", gender: "boy", origin: "Sanskrit", meaning: "Bearer of the flute, Krishna" },
  { name: "Murali", gender: "boy", origin: "Sanskrit", meaning: "Flute, flute-player" },
  { name: "Nagendra", gender: "boy", origin: "Sanskrit", meaning: "King of serpents" },
  { name: "Narayan", gender: "boy", origin: "Sanskrit", meaning: "Name of Lord Vishnu" },
  { name: "Padmanabh", gender: "boy", origin: "Sanskrit", meaning: "Lotus-navelled, a name of Vishnu" },
  { name: "Prabhu", gender: "boy", origin: "Sanskrit", meaning: "Lord, master" },
  { name: "Raghunath", gender: "boy", origin: "Sanskrit", meaning: "Lord of Raghu, a name of Rama" },
  { name: "Rajesh", gender: "boy", origin: "Sanskrit", meaning: "Lord of kings" },
  { name: "Ramesh", gender: "boy", origin: "Sanskrit", meaning: "Lord of Rama, pleasing" },
  { name: "Ravi", gender: "boy", origin: "Sanskrit", meaning: "Sun" },
  { name: "Rakesh", gender: "boy", origin: "Sanskrit", meaning: "Lord of the moon" },
  { name: "Sathish", gender: "boy", origin: "Sanskrit", meaning: "Lord of the good" },
  { name: "Senthil", gender: "boy", origin: "Tamil", meaning: "Name of Lord Murugan" },
  { name: "Shankaran", gender: "boy", origin: "Tamil", meaning: "Name of Lord Shiva" },
  { name: "Shravan", gender: "boy", origin: "Sanskrit", meaning: "Hearing, the month of Shravan" },
  { name: "Siddhartha", gender: "boy", origin: "Sanskrit", meaning: "One who has attained his goal" },
  { name: "Sridhar", gender: "boy", origin: "Sanskrit", meaning: "Lord Vishnu, bearer of Lakshmi" },
  { name: "Srinivas", gender: "boy", origin: "Sanskrit", meaning: "Abode of Lakshmi, a name of Vishnu" },
  { name: "Suresh", gender: "boy", origin: "Sanskrit", meaning: "Lord of the gods" },
  { name: "Surya", gender: "boy", origin: "Sanskrit", meaning: "Sun" },
  { name: "Tarun", gender: "boy", origin: "Sanskrit", meaning: "Young, youthful" },
  { name: "Vasudev", gender: "boy", origin: "Sanskrit", meaning: "Son of Vasudeva, a name of Krishna" },
  { name: "Venkatesh", gender: "boy", origin: "Telugu", meaning: "Name of Lord Venkateswara" },
  { name: "Vijay", gender: "boy", origin: "Sanskrit", meaning: "Victory" },
  { name: "Vinod", gender: "boy", origin: "Sanskrit", meaning: "Joy, delight, amusement" },
  { name: "Vivek", gender: "boy", origin: "Sanskrit", meaning: "Wisdom, discernment" },
  { name: "Yaduveer", gender: "boy", origin: "Sanskrit", meaning: "Brave one of the Yadu clan" },
  { name: "Yatin", gender: "boy", origin: "Sanskrit", meaning: "Ascetic, a self-controlled person" },

  // ---- South Indian girls ----
  { name: "Abirami", gender: "girl", origin: "Tamil", meaning: "Name of goddess Parvati" },
  { name: "Anandhi", gender: "girl", origin: "Tamil", meaning: "Joyful, happy" },
  { name: "Aruna", gender: "girl", origin: "Sanskrit", meaning: "Dawn, red" },
  { name: "Bhavani", gender: "girl", origin: "Sanskrit", meaning: "Goddess Parvati" },
  { name: "Chandrika", gender: "girl", origin: "Sanskrit", meaning: "Moonlight" },
  { name: "Deepa", gender: "girl", origin: "Sanskrit", meaning: "Lamp, light" },
  { name: "Gowri", gender: "girl", origin: "Telugu", meaning: "Fair, a name of Parvati" },
  { name: "Hemalatha", gender: "girl", origin: "Telugu", meaning: "Golden creeper" },
  { name: "Ishwari", gender: "girl", origin: "Sanskrit", meaning: "Goddess, ruler" },
  { name: "Janaki", gender: "girl", origin: "Sanskrit", meaning: "Daughter of King Janaka, Sita" },
  { name: "Kamala", gender: "girl", origin: "Sanskrit", meaning: "Lotus, goddess Lakshmi" },
  { name: "Kanya", gender: "girl", origin: "Sanskrit", meaning: "Maiden, daughter" },
  { name: "Lalitha", gender: "girl", origin: "Sanskrit", meaning: "Graceful, playful, a name of Parvati" },
  { name: "Malini", gender: "girl", origin: "Sanskrit", meaning: "Garlanded, adorned" },
  { name: "Mangala", gender: "girl", origin: "Sanskrit", meaning: "Auspicious, welfare" },
  { name: "Mridula", gender: "girl", origin: "Sanskrit", meaning: "Soft, gentle" },
  { name: "Nagamani", gender: "girl", origin: "Telugu", meaning: "Jewel of serpents" },
  { name: "Padmavathi", gender: "girl", origin: "Telugu", meaning: "Lotus, goddess Lakshmi" },
  { name: "Pavani", gender: "girl", origin: "Sanskrit", meaning: "Pure, sacred" },
  { name: "Priyanka", gender: "girl", origin: "Sanskrit", meaning: "Beloved, dear" },
  { name: "Shanthi", gender: "girl", origin: "Sanskrit", meaning: "Peace, tranquillity" },
  { name: "Shwetha", gender: "girl", origin: "Sanskrit", meaning: "White, pure" },
  { name: "Sindhu", gender: "girl", origin: "Sanskrit", meaning: "River, sea, ocean" },
  { name: "Sowmya", gender: "girl", origin: "Sanskrit", meaning: "Gentle, calm, pleasant" },
  { name: "Subhashini", gender: "girl", origin: "Sanskrit", meaning: "Auspicious, sweet-voiced" },
  { name: "Sujatha", gender: "girl", origin: "Sanskrit", meaning: "Well-born, noble" },
  { name: "Suma", gender: "girl", origin: "Sanskrit", meaning: "Flower, beautiful" },
  { name: "Thara", gender: "girl", origin: "Tamil", meaning: "Star" },
  { name: "Thulasi", gender: "girl", origin: "Tamil", meaning: "Holy basil" },
  { name: "Vaidehi", gender: "girl", origin: "Sanskrit", meaning: "Princess of Videha, Sita" },
  { name: "Vanaja", gender: "girl", origin: "Sanskrit", meaning: "Born of the forest, lotus" },

  // ---- Bengali and Eastern boys ----
  { name: "Ajay", gender: "boy", origin: "Sanskrit", meaning: "Invincible, unconquered" },
  { name: "Arindam", gender: "boy", origin: "Sanskrit", meaning: "Destroyer of enemies" },
  { name: "Bijoy", gender: "boy", origin: "Bengali", meaning: "Victory" },
  { name: "Bipul", gender: "boy", origin: "Sanskrit", meaning: "Vast, great, abundant" },
  { name: "Debashish", gender: "boy", origin: "Bengali", meaning: "Blessing of the gods" },
  { name: "Dipankar", gender: "boy", origin: "Sanskrit", meaning: "Bringer of light" },
  { name: "Gautam", gender: "boy", origin: "Sanskrit", meaning: "Name of the sage Gautama, Buddha's family name" },
  { name: "Jishnu", gender: "boy", origin: "Sanskrit", meaning: "Victorious, a name of Vishnu" },
  { name: "Kaushik", gender: "boy", origin: "Sanskrit", meaning: "Name of an ancient sage" },
  { name: "Kalyan", gender: "boy", origin: "Sanskrit", meaning: "Welfare, goodness, auspiciousness" },
  { name: "Mrityunjay", gender: "boy", origin: "Sanskrit", meaning: "Conqueror of death, a name of Shiva" },
  { name: "Nabin", gender: "boy", origin: "Bengali", meaning: "New, fresh" },
  { name: "Prasenjit", gender: "boy", origin: "Sanskrit", meaning: "Victorious in battle" },
  { name: "Pinaki", gender: "boy", origin: "Sanskrit", meaning: "Holder of the bow, a name of Shiva" },
  { name: "Sanjib", gender: "boy", origin: "Bengali", meaning: "Living, full of life" },
  { name: "Shankar", gender: "boy", origin: "Sanskrit", meaning: "Bringer of happiness, a name of Shiva" },
  { name: "Shreyas", gender: "boy", origin: "Sanskrit", meaning: "Best, excellent" },
  { name: "Somnath", gender: "boy", origin: "Sanskrit", meaning: "Lord of the moon" },
  { name: "Subrata", gender: "boy", origin: "Sanskrit", meaning: "Of good vows, devout" },
  { name: "Sudip", gender: "boy", origin: "Bengali", meaning: "Good light" },
  { name: "Tapas", gender: "boy", origin: "Sanskrit", meaning: "Austerity, penance, heat" },
  { name: "Tapan", gender: "boy", origin: "Sanskrit", meaning: "Sun, heat" },
  { name: "Utpal", gender: "boy", origin: "Sanskrit", meaning: "Blue lotus" },
  { name: "Vishal", gender: "boy", origin: "Sanskrit", meaning: "Vast, huge, great" },
  { name: "Achintya", gender: "boy", origin: "Sanskrit", meaning: "Beyond thought, inconceivable" },
  { name: "Abhijit", gender: "boy", origin: "Sanskrit", meaning: "Conqueror, victorious" },
  { name: "Ankit", gender: "boy", origin: "Sanskrit", meaning: "Marked, signed, mark" },
  { name: "Anshul", gender: "boy", origin: "Sanskrit", meaning: "Part, portion, sun's ray" },
  { name: "Tirtha", gender: "boy", origin: "Sanskrit", meaning: "Holy place, pilgrimage" },

  // ---- Bengali and Eastern girls ----
  { name: "Amala", gender: "girl", origin: "Sanskrit", meaning: "Pure, spotless" },
  { name: "Anjana", gender: "girl", origin: "Sanskrit", meaning: "Collyrium, mother of Hanuman" },
  { name: "Arundhati", gender: "girl", origin: "Sanskrit", meaning: "Star, wife of the sage Vasistha" },
  { name: "Bani", gender: "girl", origin: "Sanskrit", meaning: "Speech, voice" },
  { name: "Dipti", gender: "girl", origin: "Sanskrit", meaning: "Brightness, lustre" },
  { name: "Hiya", gender: "girl", origin: "Hindi", meaning: "Heart" },
  { name: "Indrani", gender: "girl", origin: "Sanskrit", meaning: "Queen of the gods, wife of Indra" },
  { name: "Kalyani", gender: "girl", origin: "Sanskrit", meaning: "Auspicious, blessed" },
  { name: "Kajal", gender: "girl", origin: "Hindi", meaning: "Kohl, eye liner" },
  { name: "Kanchan", gender: "girl", origin: "Sanskrit", meaning: "Gold" },
  { name: "Kavita", gender: "girl", origin: "Sanskrit", meaning: "Poem, poetry" },
  { name: "Lila", gender: "girl", origin: "Sanskrit", meaning: "Play, sport, divine play" },
  { name: "Maya", gender: "girl", origin: "Sanskrit", meaning: "Illusion, wealth, mother" },
  { name: "Mitali", gender: "girl", origin: "Bengali", meaning: "Friendship" },
  { name: "Nandita", gender: "girl", origin: "Sanskrit", meaning: "Joyful, delighted" },
  { name: "Ranjana", gender: "girl", origin: "Sanskrit", meaning: "Delight, charming" },
  { name: "Ratna", gender: "girl", origin: "Sanskrit", meaning: "Jewel, gem" },
  { name: "Rita", gender: "girl", origin: "Sanskrit", meaning: "Order, truth, cosmic law" },
  { name: "Shikha", gender: "girl", origin: "Sanskrit", meaning: "Flame, crest, peak" },
  { name: "Sudha", gender: "girl", origin: "Sanskrit", meaning: "Nectar" },
  { name: "Sumita", gender: "girl", origin: "Sanskrit", meaning: "Friendly, good friend" },
  { name: "Tanuja", gender: "girl", origin: "Sanskrit", meaning: "Daughter, slender" },
  { name: "Tulsi", gender: "girl", origin: "Sanskrit", meaning: "Holy basil" },
  { name: "Unnati", gender: "girl", origin: "Sanskrit", meaning: "Progress, advancement" },
  { name: "Vasanti", gender: "girl", origin: "Sanskrit", meaning: "Spring season" },
  { name: "Vijaya", gender: "girl", origin: "Sanskrit", meaning: "Victory" },
  { name: "Yogita", gender: "girl", origin: "Sanskrit", meaning: "Devoted to yoga" },
  { name: "Ananda", gender: "girl", origin: "Sanskrit", meaning: "Joy, bliss" },
  { name: "Chaitali", gender: "girl", origin: "Bengali", meaning: "Of the spring month Chaitra" },

  // ---- Muslim boys ----
  { name: "Ahmed", gender: "boy", origin: "Arabic", meaning: "Praiseworthy, highly praised" },
  { name: "Mohammed", gender: "boy", origin: "Arabic", meaning: "Praised, commendable" },
  { name: "Ali", gender: "boy", origin: "Arabic", meaning: "Exalted, high, elevated" },
  { name: "Hamza", gender: "boy", origin: "Arabic", meaning: "Strong, steadfast" },
  { name: "Rayan", gender: "boy", origin: "Arabic", meaning: "Gate of paradise" },
  { name: "Yusuf", gender: "boy", origin: "Arabic", meaning: "God increases, the prophet Joseph" },
  { name: "Ibrahim", gender: "boy", origin: "Arabic", meaning: "Father of nations, the prophet Abraham" },
  { name: "Musa", gender: "boy", origin: "Arabic", meaning: "The prophet Moses" },
  { name: "Isa", gender: "boy", origin: "Arabic", meaning: "The prophet Jesus" },
  { name: "Zaid", gender: "boy", origin: "Arabic", meaning: "Growth, increase" },
  { name: "Faizan", gender: "boy", origin: "Arabic", meaning: "Generosity, abundance" },
  { name: "Farhan", gender: "boy", origin: "Arabic", meaning: "Joyful, happy" },
  { name: "Tariq", gender: "boy", origin: "Arabic", meaning: "Morning star, one who knocks at night" },
  { name: "Junaid", gender: "boy", origin: "Arabic", meaning: "Small army, a name of a Sufi scholar" },
  { name: "Adnan", gender: "boy", origin: "Arabic", meaning: "Settled, enduring" },
  { name: "Arham", gender: "boy", origin: "Arabic", meaning: "Most merciful" },
  { name: "Armaan", gender: "boy", origin: "Urdu", meaning: "Wish, desire, hope" },
  { name: "Danish", gender: "boy", origin: "Arabic", meaning: "Knowledge, wisdom" },
  { name: "Ehsan", gender: "boy", origin: "Arabic", meaning: "Kindness, goodness" },
  { name: "Fahad", gender: "boy", origin: "Arabic", meaning: "Leopard, lynx" },
  { name: "Hasan", gender: "boy", origin: "Arabic", meaning: "Handsome, good" },
  { name: "Husain", gender: "boy", origin: "Arabic", meaning: "Little handsome one" },
  { name: "Irfan", gender: "boy", origin: "Arabic", meaning: "Knowledge, recognition" },
  { name: "Mustafa", gender: "boy", origin: "Arabic", meaning: "Chosen, selected" },
  { name: "Naveed", gender: "boy", origin: "Urdu", meaning: "Good news, glad tidings" },
  { name: "Nadeem", gender: "boy", origin: "Arabic", meaning: "Companion, close friend" },
  { name: "Rehan", gender: "boy", origin: "Arabic", meaning: "Sweet basil, fragrant plant" },
  { name: "Sameer", gender: "boy", origin: "Arabic", meaning: "Companion in evening conversation" },
  { name: "Waseem", gender: "boy", origin: "Arabic", meaning: "Handsome, graceful" },
  { name: "Zakir", gender: "boy", origin: "Arabic", meaning: "One who remembers God" },
  { name: "Zubair", gender: "boy", origin: "Arabic", meaning: "Strong, powerful" },

  // ---- Muslim girls ----
  { name: "Aisha", gender: "girl", origin: "Arabic", meaning: "Alive, living, prosperous" },
  { name: "Fatima", gender: "girl", origin: "Arabic", meaning: "Captivating, the Prophet's daughter" },
  { name: "Maryam", gender: "girl", origin: "Arabic", meaning: "Mary, mother of Jesus" },
  { name: "Zainab", gender: "girl", origin: "Arabic", meaning: "Fragrant flower, fragrant plant" },
  { name: "Khadija", gender: "girl", origin: "Arabic", meaning: "Name of the Prophet's first wife" },
  { name: "Sana", gender: "girl", origin: "Arabic", meaning: "Brilliance, splendour" },
  { name: "Hina", gender: "girl", origin: "Urdu", meaning: "Henna" },
  { name: "Iqra", gender: "girl", origin: "Arabic", meaning: "Read, recite" },
  { name: "Noor", gender: "girl", origin: "Arabic", meaning: "Light" },
  { name: "Amina", gender: "girl", origin: "Arabic", meaning: "Trustworthy, safe, secure" },
  { name: "Zara", gender: "girl", origin: "Persian", meaning: "Blossom, radiance" },
  { name: "Mehreen", gender: "girl", origin: "Persian", meaning: "Kind, merciful" },
  { name: "Rabia", gender: "girl", origin: "Arabic", meaning: "Spring, garden" },
  { name: "Sadia", gender: "girl", origin: "Arabic", meaning: "Fortunate, happy" },
  { name: "Saba", gender: "girl", origin: "Arabic", meaning: "Morning breeze" },
  { name: "Afreen", gender: "girl", origin: "Persian", meaning: "Admired, praised, beautiful" },
  { name: "Alina", gender: "girl", origin: "Arabic", meaning: "Bright, noble" },
  { name: "Huma", gender: "girl", origin: "Persian", meaning: "Mythical bird of happiness" },
  { name: "Sidra", gender: "girl", origin: "Arabic", meaning: "Lote tree, a tree in paradise" },
  { name: "Zoya", gender: "girl", origin: "Persian", meaning: "Life, alive" },

  // ---- Punjabi and Sikh boys ----
  { name: "Gurpreet", gender: "boy", origin: "Punjabi", meaning: "Love of the Guru" },
  { name: "Harpreet", gender: "boy", origin: "Punjabi", meaning: "Love of God" },
  { name: "Manpreet", gender: "boy", origin: "Punjabi", meaning: "Love of the mind" },
  { name: "Amarjit", gender: "boy", origin: "Punjabi", meaning: "Immortal victory" },
  { name: "Harjot", gender: "boy", origin: "Punjabi", meaning: "Light of God" },
  { name: "Gurdeep", gender: "boy", origin: "Punjabi", meaning: "Lamp of the Guru" },
  { name: "Gurmeet", gender: "boy", origin: "Punjabi", meaning: "Friend of the Guru" },
  { name: "Inderjit", gender: "boy", origin: "Punjabi", meaning: "Victory over Indra" },
  { name: "Jagjit", gender: "boy", origin: "Punjabi", meaning: "Conqueror of the world" },
  { name: "Navjot", gender: "boy", origin: "Punjabi", meaning: "New light" },
  { name: "Paramjit", gender: "boy", origin: "Punjabi", meaning: "Supreme victory" },
  { name: "Rajveer", gender: "boy", origin: "Punjabi", meaning: "Brave king" },
  { name: "Sukhdev", gender: "boy", origin: "Punjabi", meaning: "Divine happiness" },
  { name: "Hardeep", gender: "boy", origin: "Punjabi", meaning: "Lamp of God" },

  // ---- Punjabi and Sikh girls ----
  { name: "Amanpreet", gender: "girl", origin: "Punjabi", meaning: "Love of peace" },
  { name: "Sukhmani", gender: "girl", origin: "Punjabi", meaning: "Jewel of peace" },
  { name: "Kiranjot", gender: "girl", origin: "Punjabi", meaning: "Ray of light" },
  { name: "Gurkirat", gender: "girl", origin: "Punjabi", meaning: "Praise of the Guru" },
  { name: "Manpreet Kaur", gender: "girl", origin: "Punjabi", meaning: "Love of the mind" },

  // ---- Christian boys ----
  { name: "Daniel", gender: "boy", origin: "Hebrew", meaning: "God is my judge" },
  { name: "David", gender: "boy", origin: "Hebrew", meaning: "Beloved" },
  { name: "Samuel", gender: "boy", origin: "Hebrew", meaning: "Name of God, asked of God" },
  { name: "Joseph", gender: "boy", origin: "Hebrew", meaning: "God will add, God increases" },
  { name: "John", gender: "boy", origin: "Hebrew", meaning: "God is gracious" },
  { name: "Peter", gender: "boy", origin: "Greek", meaning: "Rock, stone" },
  { name: "Paul", gender: "boy", origin: "Latin", meaning: "Small, humble" },
  { name: "Thomas", gender: "boy", origin: "Aramaic", meaning: "Twin" },
  { name: "Andrew", gender: "boy", origin: "Greek", meaning: "Manly, brave" },
  { name: "Michael", gender: "boy", origin: "Hebrew", meaning: "Who is like God" },
  { name: "Joel", gender: "boy", origin: "Hebrew", meaning: "The Lord is God" },
  { name: "Ezra", gender: "boy", origin: "Hebrew", meaning: "Help" },
  { name: "Isaac", gender: "boy", origin: "Hebrew", meaning: "Laughter" },
  { name: "Jacob", gender: "boy", origin: "Hebrew", meaning: "Supplanter, one who follows" },
  { name: "Luke", gender: "boy", origin: "Latin", meaning: "Light-giving" },
  { name: "Nathan", gender: "boy", origin: "Hebrew", meaning: "Gift" },
  { name: "Matthew", gender: "boy", origin: "Hebrew", meaning: "Gift of God" },
  { name: "Stephen", gender: "boy", origin: "Greek", meaning: "Crown, garland" },

  // ---- Christian girls ----
  { name: "Mary", gender: "girl", origin: "Hebrew", meaning: "Beloved, wished-for child" },
  { name: "Sarah", gender: "girl", origin: "Hebrew", meaning: "Princess" },
  { name: "Ruth", gender: "girl", origin: "Hebrew", meaning: "Compassion, friend" },
  { name: "Hannah", gender: "girl", origin: "Hebrew", meaning: "Grace, favour" },
  { name: "Esther", gender: "girl", origin: "Persian", meaning: "Star" },
  { name: "Rachel", gender: "girl", origin: "Hebrew", meaning: "Ewe, female sheep" },
  { name: "Elizabeth", gender: "girl", origin: "Hebrew", meaning: "My God is an oath" },
  { name: "Anna", gender: "girl", origin: "Hebrew", meaning: "Grace" },
  { name: "Rebecca", gender: "girl", origin: "Hebrew", meaning: "To bind, to tie" },
  { name: "Grace", gender: "girl", origin: "Latin", meaning: "Grace, elegance" },
  { name: "Joy", gender: "girl", origin: "English", meaning: "Joy, happiness" },
  { name: "Lydia", gender: "girl", origin: "Greek", meaning: "From Lydia, a region of Asia Minor" },

  // ---- Boys: batch 2 ----
  { name: "Aakash", gender: "boy", origin: "Sanskrit", meaning: "Sky" },
  { name: "Aalok", gender: "boy", origin: "Sanskrit", meaning: "Light" },
  { name: "Aanand", gender: "boy", origin: "Sanskrit", meaning: "Joy, bliss" },
  { name: "Aarush", gender: "boy", origin: "Sanskrit", meaning: "First ray of the sun" },
  { name: "Aahan", gender: "boy", origin: "Sanskrit", meaning: "Dawn, first light" },
  { name: "Abhay", gender: "boy", origin: "Sanskrit", meaning: "Fearless" },
  { name: "Abhinav", gender: "boy", origin: "Sanskrit", meaning: "New, fresh" },
  { name: "Abhishek", gender: "boy", origin: "Sanskrit", meaning: "Consecration, anointing" },
  { name: "Achyut", gender: "boy", origin: "Sanskrit", meaning: "Imperishable, a name of Vishnu" },
  { name: "Adarsh", gender: "boy", origin: "Sanskrit", meaning: "Ideal, model" },
  { name: "Agastya", gender: "boy", origin: "Sanskrit", meaning: "Name of an ancient sage" },
  { name: "Akhil", gender: "boy", origin: "Sanskrit", meaning: "Whole, complete" },
  { name: "Akshay", gender: "boy", origin: "Sanskrit", meaning: "Imperishable, eternal" },
  { name: "Amar", gender: "boy", origin: "Sanskrit", meaning: "Immortal, eternal" },
  { name: "Amit", gender: "boy", origin: "Sanskrit", meaning: "Boundless, immeasurable" },
  { name: "Amol", gender: "boy", origin: "Marathi", meaning: "Priceless, precious" },
  { name: "Anirudh", gender: "boy", origin: "Sanskrit", meaning: "Unobstructed, unstoppable" },
  { name: "Anuj", gender: "boy", origin: "Sanskrit", meaning: "Younger brother, born after" },
  { name: "Arnav", gender: "boy", origin: "Sanskrit", meaning: "Ocean, sea" },
  { name: "Arihant", gender: "boy", origin: "Sanskrit", meaning: "Destroyer of enemies, a Jain title" },
  { name: "Ashwin", gender: "boy", origin: "Sanskrit", meaning: "Horseman, name of the Ashvin twins" },
  { name: "Atharv", gender: "boy", origin: "Sanskrit", meaning: "Name linked to the Atharva Veda" },
  { name: "Avinash", gender: "boy", origin: "Sanskrit", meaning: "Indestructible, imperishable" },
  { name: "Ayush", gender: "boy", origin: "Sanskrit", meaning: "Long life" },
  { name: "Bhaskar", gender: "boy", origin: "Sanskrit", meaning: "Sun" },
  { name: "Chandan", gender: "boy", origin: "Sanskrit", meaning: "Sandalwood" },
  { name: "Chetan", gender: "boy", origin: "Sanskrit", meaning: "Consciousness, awareness" },
  { name: "Darshan", gender: "boy", origin: "Sanskrit", meaning: "Vision, sight, view" },
  { name: "Deepak", gender: "boy", origin: "Sanskrit", meaning: "Lamp" },
  { name: "Devansh", gender: "boy", origin: "Sanskrit", meaning: "Part of God, divine portion" },
  { name: "Dhairya", gender: "boy", origin: "Sanskrit", meaning: "Patience, courage" },
  { name: "Dhanush", gender: "boy", origin: "Sanskrit", meaning: "Bow" },
  { name: "Dinesh", gender: "boy", origin: "Sanskrit", meaning: "Lord of the day, sun" },
  { name: "Gaurav", gender: "boy", origin: "Sanskrit", meaning: "Pride, honour" },
  { name: "Girish", gender: "boy", origin: "Sanskrit", meaning: "Lord of mountains, a name of Shiva" },
  { name: "Gopal", gender: "boy", origin: "Sanskrit", meaning: "Cowherd, a name of Krishna" },
  { name: "Govind", gender: "boy", origin: "Sanskrit", meaning: "Cow-finder, a name of Krishna" },
  { name: "Hardik", gender: "boy", origin: "Sanskrit", meaning: "Heartfelt, from the heart" },
  { name: "Harsh", gender: "boy", origin: "Sanskrit", meaning: "Joy, delight" },
  { name: "Harshit", gender: "boy", origin: "Sanskrit", meaning: "Joyful, delighted" },
  { name: "Hemant", gender: "boy", origin: "Sanskrit", meaning: "Winter, early winter" },
  { name: "Himanshu", gender: "boy", origin: "Sanskrit", meaning: "Moon, cool-rayed" },
  { name: "Indra", gender: "boy", origin: "Sanskrit", meaning: "King of the gods" },
  { name: "Jai", gender: "boy", origin: "Sanskrit", meaning: "Victory" },
  { name: "Kartik", gender: "boy", origin: "Sanskrit", meaning: "Name of Lord Kartikeya" },
  { name: "Keshav", gender: "boy", origin: "Sanskrit", meaning: "Having beautiful hair, a name of Krishna" },
  { name: "Kiran", gender: "boy", origin: "Sanskrit", meaning: "Ray of light" },
  { name: "Kunal", gender: "boy", origin: "Sanskrit", meaning: "Lotus" },
  { name: "Lakshya", gender: "boy", origin: "Sanskrit", meaning: "Aim, goal" },
  { name: "Lokesh", gender: "boy", origin: "Sanskrit", meaning: "Lord of the world" },
  { name: "Madhav", gender: "boy", origin: "Sanskrit", meaning: "Sweet, a name of Krishna" },
  { name: "Mahesh", gender: "boy", origin: "Sanskrit", meaning: "Great lord, a name of Shiva" },
  { name: "Manav", gender: "boy", origin: "Sanskrit", meaning: "Human, mankind" },
  { name: "Manish", gender: "boy", origin: "Sanskrit", meaning: "Lord of the mind" },
  { name: "Mayank", gender: "boy", origin: "Sanskrit", meaning: "Moon" },
  { name: "Mihir", gender: "boy", origin: "Sanskrit", meaning: "Sun" },
  { name: "Mithun", gender: "boy", origin: "Sanskrit", meaning: "Pair, twins" },
  { name: "Nakul", gender: "boy", origin: "Sanskrit", meaning: "Mongoose, name of a Pandava" },
  { name: "Nandan", gender: "boy", origin: "Sanskrit", meaning: "Son, joy" },
  { name: "Naveen", gender: "boy", origin: "Sanskrit", meaning: "New, fresh" },
  { name: "Nikhil", gender: "boy", origin: "Sanskrit", meaning: "Complete, whole, entire" },
  { name: "Nirav", gender: "boy", origin: "Sanskrit", meaning: "Silence, calm" },
  { name: "Nishant", gender: "boy", origin: "Sanskrit", meaning: "End of night, dawn" },
  { name: "Omkar", gender: "boy", origin: "Sanskrit", meaning: "Sound of Om" },
  { name: "Parth", gender: "boy", origin: "Sanskrit", meaning: "Son of Pritha, a name of Arjuna" },
  { name: "Piyush", gender: "boy", origin: "Sanskrit", meaning: "Nectar" },
  { name: "Prakash", gender: "boy", origin: "Sanskrit", meaning: "Light, illumination" },
  { name: "Pratik", gender: "boy", origin: "Sanskrit", meaning: "Symbol, sign" },
  { name: "Prem", gender: "boy", origin: "Sanskrit", meaning: "Love" },
  { name: "Pushkar", gender: "boy", origin: "Sanskrit", meaning: "Lotus" },
  { name: "Raghav", gender: "boy", origin: "Sanskrit", meaning: "Descendant of Raghu, a name of Rama" },
  { name: "Raj", gender: "boy", origin: "Sanskrit", meaning: "King, ruler" },
  { name: "Rajat", gender: "boy", origin: "Sanskrit", meaning: "Silver" },
  { name: "Rajiv", gender: "boy", origin: "Sanskrit", meaning: "Lotus" },
  { name: "Ram", gender: "boy", origin: "Sanskrit", meaning: "Pleasing, delightful, a name of Rama" },
  { name: "Ranveer", gender: "boy", origin: "Sanskrit", meaning: "Brave warrior" },
  { name: "Rishi", gender: "boy", origin: "Sanskrit", meaning: "Sage, seer" },
  { name: "Rudra", gender: "boy", origin: "Sanskrit", meaning: "Fierce form of Shiva" },
  { name: "Sagar", gender: "boy", origin: "Sanskrit", meaning: "Ocean, sea" },
  { name: "Samarth", gender: "boy", origin: "Sanskrit", meaning: "Capable, able" },
  { name: "Sanjay", gender: "boy", origin: "Sanskrit", meaning: "Complete victory" },
  { name: "Sanskar", gender: "boy", origin: "Sanskrit", meaning: "Refinement, good upbringing" },
  { name: "Shiv", gender: "boy", origin: "Sanskrit", meaning: "Auspicious, a name of Shiva" },
  { name: "Shivam", gender: "boy", origin: "Sanskrit", meaning: "Auspicious, good" },
  { name: "Shlok", gender: "boy", origin: "Sanskrit", meaning: "Verse of praise" },
  { name: "Shubham", gender: "boy", origin: "Sanskrit", meaning: "Auspicious, blessed" },
  { name: "Siddharth", gender: "boy", origin: "Sanskrit", meaning: "One who has achieved his aim" },
  { name: "Srijan", gender: "boy", origin: "Sanskrit", meaning: "Creation" },
  { name: "Suraj", gender: "boy", origin: "Sanskrit", meaning: "Sun" },
  { name: "Suryansh", gender: "boy", origin: "Sanskrit", meaning: "Part of the sun" },
  { name: "Tanmay", gender: "boy", origin: "Sanskrit", meaning: "Absorbed, devoted" },
  { name: "Tejas", gender: "boy", origin: "Sanskrit", meaning: "Brilliance, radiance" },
  { name: "Tushar", gender: "boy", origin: "Sanskrit", meaning: "Snow, frost, dew" },
  { name: "Udai", gender: "boy", origin: "Sanskrit", meaning: "Rising, sunrise" },
  { name: "Ujjwal", gender: "boy", origin: "Sanskrit", meaning: "Bright, brilliant" },
  { name: "Umang", gender: "boy", origin: "Sanskrit", meaning: "Enthusiasm, excitement" },
  { name: "Utkarsh", gender: "boy", origin: "Sanskrit", meaning: "Excellence, progress" },
  { name: "Vedant", gender: "boy", origin: "Sanskrit", meaning: "End of the Vedas, the Upanishads" },
  { name: "Vikram", gender: "boy", origin: "Sanskrit", meaning: "Valour, courage" },
  { name: "Vinay", gender: "boy", origin: "Sanskrit", meaning: "Humility, modesty" },
  { name: "Vineet", gender: "boy", origin: "Sanskrit", meaning: "Humble, modest" },
  { name: "Vipul", gender: "boy", origin: "Sanskrit", meaning: "Abundant, plentiful" },
  { name: "Yogesh", gender: "boy", origin: "Sanskrit", meaning: "Lord of yoga" },
  { name: "Yuvraj", gender: "boy", origin: "Sanskrit", meaning: "Crown prince, young king" },
  { name: "Yuvan", gender: "boy", origin: "Sanskrit", meaning: "Young" },

  // ---- Girls: batch 2 ----
  { name: "Aahana", gender: "girl", origin: "Sanskrit", meaning: "Dawn, first ray of light" },
  { name: "Aarohi", gender: "girl", origin: "Sanskrit", meaning: "Ascending, a musical scale" },
  { name: "Aashi", gender: "girl", origin: "Sanskrit", meaning: "Hope, wish" },
  { name: "Aditi", gender: "girl", origin: "Sanskrit", meaning: "Boundless, mother of the gods" },
  { name: "Aishwarya", gender: "girl", origin: "Sanskrit", meaning: "Prosperity, wealth, splendour" },
  { name: "Akanksha", gender: "girl", origin: "Sanskrit", meaning: "Desire, aspiration" },
  { name: "Amrita", gender: "girl", origin: "Sanskrit", meaning: "Nectar of immortality" },
  { name: "Anjali", gender: "girl", origin: "Sanskrit", meaning: "Offering, prayer with folded hands" },
  { name: "Anika", gender: "girl", origin: "Sanskrit", meaning: "Grace, graceful" },
  { name: "Anushka", gender: "girl", origin: "Sanskrit", meaning: "Grace of God" },
  { name: "Aradhya", gender: "girl", origin: "Sanskrit", meaning: "Worshipped, adored" },
  { name: "Arpita", gender: "girl", origin: "Sanskrit", meaning: "Offered, dedicated" },
  { name: "Ayesha", gender: "girl", origin: "Arabic", meaning: "Alive, living" },
  { name: "Bhavya", gender: "girl", origin: "Sanskrit", meaning: "Grand, splendid" },
  { name: "Bhumi", gender: "girl", origin: "Sanskrit", meaning: "Earth" },
  { name: "Chahat", gender: "girl", origin: "Hindi", meaning: "Desire, longing" },
  { name: "Chanda", gender: "girl", origin: "Sanskrit", meaning: "Moon" },
  { name: "Chandni", gender: "girl", origin: "Hindi", meaning: "Moonlight" },
  { name: "Charu", gender: "girl", origin: "Sanskrit", meaning: "Beautiful, lovely" },
  { name: "Chitra", gender: "girl", origin: "Sanskrit", meaning: "Picture, bright, beautiful" },
  { name: "Daksha", gender: "girl", origin: "Sanskrit", meaning: "Skilful, capable" },
  { name: "Damini", gender: "girl", origin: "Sanskrit", meaning: "Lightning" },
  { name: "Devika", gender: "girl", origin: "Sanskrit", meaning: "Little goddess" },
  { name: "Dhara", gender: "girl", origin: "Sanskrit", meaning: "Earth, stream" },
  { name: "Disha", gender: "girl", origin: "Sanskrit", meaning: "Direction, path" },
  { name: "Divya", gender: "girl", origin: "Sanskrit", meaning: "Divine, heavenly" },
  { name: "Ekta", gender: "girl", origin: "Sanskrit", meaning: "Unity, oneness" },
  { name: "Esha", gender: "girl", origin: "Sanskrit", meaning: "Desire, wish" },
  { name: "Gayatri", gender: "girl", origin: "Sanskrit", meaning: "Sacred Vedic verse, name of a goddess" },
  { name: "Geeta", gender: "girl", origin: "Sanskrit", meaning: "Song" },
  { name: "Ganga", gender: "girl", origin: "Sanskrit", meaning: "Sacred river Ganga" },
  { name: "Gargi", gender: "girl", origin: "Sanskrit", meaning: "Name of an ancient woman scholar" },
  { name: "Garima", gender: "girl", origin: "Sanskrit", meaning: "Dignity, glory" },
  { name: "Hansika", gender: "girl", origin: "Sanskrit", meaning: "Little swan" },
  { name: "Harini", gender: "girl", origin: "Sanskrit", meaning: "Doe, deer" },
  { name: "Hema", gender: "girl", origin: "Sanskrit", meaning: "Golden" },
  { name: "Ila", gender: "girl", origin: "Sanskrit", meaning: "Earth, speech" },
  { name: "Indu", gender: "girl", origin: "Sanskrit", meaning: "Moon" },
  { name: "Ira", gender: "girl", origin: "Sanskrit", meaning: "Earth, speech" },
  { name: "Ishani", gender: "girl", origin: "Sanskrit", meaning: "Goddess Durga, ruler" },
  { name: "Jaya", gender: "girl", origin: "Sanskrit", meaning: "Victory" },
  { name: "Jiya", gender: "girl", origin: "Hindi", meaning: "Life, soul, heart" },
  { name: "Jyoti", gender: "girl", origin: "Sanskrit", meaning: "Light, flame" },
  { name: "Kashish", gender: "girl", origin: "Hindi", meaning: "Attraction, charm" },
  { name: "Kashvi", gender: "girl", origin: "Sanskrit", meaning: "Shining, bright" },
  { name: "Keerthi", gender: "girl", origin: "Sanskrit", meaning: "Fame, glory" },
  { name: "Khushi", gender: "girl", origin: "Hindi", meaning: "Happiness, joy" },
  { name: "Komal", gender: "girl", origin: "Sanskrit", meaning: "Soft, tender, gentle" },
  { name: "Kriti", gender: "girl", origin: "Sanskrit", meaning: "Creation, work, composition" },
  { name: "Kusum", gender: "girl", origin: "Sanskrit", meaning: "Flower" },
  { name: "Lakshmi", gender: "girl", origin: "Sanskrit", meaning: "Goddess of wealth and prosperity" },
  { name: "Lata", gender: "girl", origin: "Sanskrit", meaning: "Creeper, vine" },
  { name: "Madhavi", gender: "girl", origin: "Sanskrit", meaning: "Sweet, a fragrant flower" },
  { name: "Madhu", gender: "girl", origin: "Sanskrit", meaning: "Honey, sweetness" },
  { name: "Mahi", gender: "girl", origin: "Sanskrit", meaning: "Earth" },
  { name: "Mahima", gender: "girl", origin: "Sanskrit", meaning: "Glory, greatness" },
  { name: "Maitri", gender: "girl", origin: "Sanskrit", meaning: "Friendship, kindness" },
  { name: "Manasi", gender: "girl", origin: "Sanskrit", meaning: "Of the mind, thoughtful" },
  { name: "Megha", gender: "girl", origin: "Sanskrit", meaning: "Cloud" },
  { name: "Meenakshi", gender: "girl", origin: "Sanskrit", meaning: "Fish-eyed, a name of goddess Parvati" },
  { name: "Mrinal", gender: "girl", origin: "Sanskrit", meaning: "Lotus stem" },
  { name: "Muskan", gender: "girl", origin: "Hindi", meaning: "Smile" },
  { name: "Naina", gender: "girl", origin: "Sanskrit", meaning: "Eyes" },
  { name: "Nalini", gender: "girl", origin: "Sanskrit", meaning: "Lotus" },
  { name: "Navya", gender: "girl", origin: "Sanskrit", meaning: "New, young" },
  { name: "Neha", gender: "girl", origin: "Sanskrit", meaning: "Love, affection, rain" },
  { name: "Niharika", gender: "girl", origin: "Sanskrit", meaning: "Dew, morning mist" },
  { name: "Nidhi", gender: "girl", origin: "Sanskrit", meaning: "Treasure, wealth" },
  { name: "Nikita", gender: "girl", origin: "Sanskrit", meaning: "Unconquered, unshakeable" },
  { name: "Nitya", gender: "girl", origin: "Sanskrit", meaning: "Eternal, constant" },
  { name: "Padma", gender: "girl", origin: "Sanskrit", meaning: "Lotus" },
  { name: "Pallavi", gender: "girl", origin: "Sanskrit", meaning: "New sprout, tender leaf" },
  { name: "Parvati", gender: "girl", origin: "Sanskrit", meaning: "Mountain-born, goddess Parvati" },
  { name: "Pooja", gender: "girl", origin: "Sanskrit", meaning: "Worship, prayer" },
  { name: "Pragya", gender: "girl", origin: "Sanskrit", meaning: "Wisdom, intelligence" },
  { name: "Prachi", gender: "girl", origin: "Sanskrit", meaning: "East, eastern direction" },
  { name: "Pranjal", gender: "girl", origin: "Sanskrit", meaning: "Offering, flower" },
  { name: "Prerna", gender: "girl", origin: "Sanskrit", meaning: "Inspiration, motivation" },
  { name: "Preeti", gender: "girl", origin: "Sanskrit", meaning: "Love, affection" },
  { name: "Purnima", gender: "girl", origin: "Sanskrit", meaning: "Full moon" },
  { name: "Radha", gender: "girl", origin: "Sanskrit", meaning: "Success, Krishna's beloved" },
  { name: "Radhika", gender: "girl", origin: "Sanskrit", meaning: "Beloved of Krishna" },
  { name: "Ragini", gender: "girl", origin: "Sanskrit", meaning: "Melody, musical mode" },
  { name: "Rashmi", gender: "girl", origin: "Sanskrit", meaning: "Ray of light" },
  { name: "Rekha", gender: "girl", origin: "Sanskrit", meaning: "Line, streak" },
  { name: "Riddhi", gender: "girl", origin: "Sanskrit", meaning: "Prosperity, success" },
  { name: "Rimjhim", gender: "girl", origin: "Hindi", meaning: "Gentle rain" },
  { name: "Rohini", gender: "girl", origin: "Sanskrit", meaning: "Red, a star of the moon's path" },
  { name: "Roshni", gender: "girl", origin: "Hindi", meaning: "Light, brightness" },
  { name: "Ruchi", gender: "girl", origin: "Sanskrit", meaning: "Taste, desire, liking" },
  { name: "Saakshi", gender: "girl", origin: "Sanskrit", meaning: "Witness" },
  { name: "Samaira", gender: "girl", origin: "Sanskrit", meaning: "Gentle breeze" },
  { name: "Sandhya", gender: "girl", origin: "Sanskrit", meaning: "Dusk, twilight" },
  { name: "Saraswati", gender: "girl", origin: "Sanskrit", meaning: "Goddess of learning and music" },
  { name: "Sarika", gender: "girl", origin: "Sanskrit", meaning: "Myna bird" },
  { name: "Shalini", gender: "girl", origin: "Sanskrit", meaning: "Modest, humble" },
  { name: "Shivangi", gender: "girl", origin: "Sanskrit", meaning: "Part of Shiva, goddess Durga" },
  { name: "Shobha", gender: "girl", origin: "Sanskrit", meaning: "Beauty, splendour" },
  { name: "Shraddha", gender: "girl", origin: "Sanskrit", meaning: "Faith, devotion" },
  { name: "Shruti", gender: "girl", origin: "Sanskrit", meaning: "Hearing, the Vedas" },
  { name: "Siddhi", gender: "girl", origin: "Sanskrit", meaning: "Accomplishment, success" },
  { name: "Simran", gender: "girl", origin: "Punjabi", meaning: "Remembrance, meditation" },
  { name: "Smriti", gender: "girl", origin: "Sanskrit", meaning: "Memory, remembrance" },
  { name: "Sneha", gender: "girl", origin: "Sanskrit", meaning: "Love, affection" },
  { name: "Sonali", gender: "girl", origin: "Sanskrit", meaning: "Golden" },
  { name: "Srishti", gender: "girl", origin: "Sanskrit", meaning: "Creation, universe" },
  { name: "Suhani", gender: "girl", origin: "Hindi", meaning: "Beautiful, lovely" },
  { name: "Surbhi", gender: "girl", origin: "Sanskrit", meaning: "Fragrance, fragrant" },
  { name: "Swara", gender: "girl", origin: "Sanskrit", meaning: "Musical note, voice" },
  { name: "Tanvi", gender: "girl", origin: "Sanskrit", meaning: "Slender, delicate" },
  { name: "Urvi", gender: "girl", origin: "Sanskrit", meaning: "Earth" },
  { name: "Urvashi", gender: "girl", origin: "Sanskrit", meaning: "Celestial nymph, beautiful" },
  { name: "Vaani", gender: "girl", origin: "Sanskrit", meaning: "Speech, voice" },
  { name: "Vaishnavi", gender: "girl", origin: "Sanskrit", meaning: "Follower of Vishnu, a name of goddess Durga" },
  { name: "Vandana", gender: "girl", origin: "Sanskrit", meaning: "Salutation, prayer" },
  { name: "Varsha", gender: "girl", origin: "Sanskrit", meaning: "Rain, monsoon" },
  { name: "Vasudha", gender: "girl", origin: "Sanskrit", meaning: "Earth" },
  { name: "Veena", gender: "girl", origin: "Sanskrit", meaning: "Stringed musical instrument" },
  { name: "Vidya", gender: "girl", origin: "Sanskrit", meaning: "Knowledge, learning" },
  { name: "Yamini", gender: "girl", origin: "Sanskrit", meaning: "Night" },
  { name: "Yashasvi", gender: "girl", origin: "Sanskrit", meaning: "Famous, glorious" },

  // ---- Original batch ----
  { name: "Aarav", gender: "boy", origin: "Sanskrit", meaning: "Peaceful, calm" },
  { name: "Arjun", gender: "boy", origin: "Sanskrit", meaning: "Bright, white, silver" },
  { name: "Vihaan", gender: "boy", origin: "Sanskrit", meaning: "Dawn, the beginning of the day" },
  { name: "Aditya", gender: "boy", origin: "Sanskrit", meaning: "Sun" },
  { name: "Advait", gender: "boy", origin: "Sanskrit", meaning: "Unique, one without a second" },
  { name: "Ishaan", gender: "boy", origin: "Sanskrit", meaning: "Sun, a name of Lord Shiva" },
  { name: "Kabir", gender: "boy", origin: "Arabic", meaning: "Great, important" },
  { name: "Rohan", gender: "boy", origin: "Sanskrit", meaning: "Ascending, rising" },
  { name: "Shaurya", gender: "boy", origin: "Sanskrit", meaning: "Bravery, valour" },
  { name: "Veer", gender: "boy", origin: "Sanskrit", meaning: "Brave, courageous" },
  { name: "Ved", gender: "boy", origin: "Sanskrit", meaning: "Knowledge, wisdom" },
  { name: "Yash", gender: "boy", origin: "Sanskrit", meaning: "Fame, success, glory" },
  { name: "Dhruv", gender: "boy", origin: "Sanskrit", meaning: "Pole star, steadfast" },
  { name: "Pranav", gender: "boy", origin: "Sanskrit", meaning: "The sacred syllable Om" },
  { name: "Laksh", gender: "boy", origin: "Sanskrit", meaning: "Aim, goal, target" },
  { name: "Reyansh", gender: "boy", origin: "Sanskrit", meaning: "Ray of the sun" },
  { name: "Dev", gender: "boy", origin: "Sanskrit", meaning: "God, divine" },
  { name: "Neel", gender: "boy", origin: "Sanskrit", meaning: "Blue" },
  { name: "Mohan", gender: "boy", origin: "Sanskrit", meaning: "Charming, attractive" },
  { name: "Ananya", gender: "girl", origin: "Sanskrit", meaning: "Unique, matchless" },
  { name: "Diya", gender: "girl", origin: "Sanskrit", meaning: "Lamp, light" },
  { name: "Aadhya", gender: "girl", origin: "Sanskrit", meaning: "First, the primordial power" },
  { name: "Meera", gender: "girl", origin: "Sanskrit", meaning: "Devoted to God" },
  { name: "Saanvi", gender: "girl", origin: "Sanskrit", meaning: "Another name of goddess Lakshmi" },
  { name: "Kavya", gender: "girl", origin: "Sanskrit", meaning: "Poetry, poetic" },
  { name: "Tara", gender: "girl", origin: "Sanskrit", meaning: "Star" },
  { name: "Nisha", gender: "girl", origin: "Sanskrit", meaning: "Night" },
  { name: "Pari", gender: "girl", origin: "Persian", meaning: "Fairy, angel" },
  { name: "Priya", gender: "girl", origin: "Sanskrit", meaning: "Beloved, dear" },
  { name: "Lavanya", gender: "girl", origin: "Sanskrit", meaning: "Grace, beauty" },
  { name: "Shreya", gender: "girl", origin: "Sanskrit", meaning: "Auspicious, excellence" },
  { name: "Gauri", gender: "girl", origin: "Sanskrit", meaning: "Fair, radiant, a name of Parvati" },
  { name: "Nandini", gender: "girl", origin: "Sanskrit", meaning: "Daughter, joy, delight" },
  { name: "Ishita", gender: "girl", origin: "Sanskrit", meaning: "Desire, wish" },
  { name: "Anvi", gender: "girl", origin: "Sanskrit", meaning: "Goddess Durga" }
];

// ============================================================
// DOM references
// ============================================================
const grid = document.getElementById("grid");
const search = document.getElementById("search");
const count = document.getElementById("count");
const sortSelect = document.getElementById("sort");
const lettersNav = document.getElementById("letters");
const bannerEl = document.getElementById("banner");
const favCountEl = document.getElementById("fav-count");
const toastEl = document.getElementById("toast");
const themeBtn = document.getElementById("theme-toggle");
const randomBtn = document.getElementById("random");
const genderButtons = document.querySelectorAll(".seg-btn");

const state = {
  gender: "all",   // all | boy | girl | fav
  letter: "all",   // all | A..Z
  sort: "az",
  query: "",
  highlight: null
};

// ---------- Storage helpers (safe if storage is blocked) ----------
function load(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch (e) {
    return fallback;
  }
}
function save(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) {}
}

let favs = load("favNames", []);

// ---------- Theme ----------
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  themeBtn.textContent = theme === "dark" ? "☀️" : "🌙";
}
applyTheme(load("theme", "light"));
themeBtn.addEventListener("click", () => {
  const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
  applyTheme(next);
  save("theme", next);
});

// ---------- Toast ----------
let toastTimer;
function toast(message) {
  toastEl.textContent = message;
  toastEl.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove("show"), 1800);
}

// ---------- Clipboard ----------
function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text);
  }
  const area = document.createElement("textarea");
  area.value = text;
  document.body.appendChild(area);
  area.select();
  document.execCommand("copy");
  area.remove();
  return Promise.resolve();
}

// ---------- Favourites ----------
function toggleFav(name) {
  if (favs.includes(name)) {
    favs = favs.filter((n) => n !== name);
    toast(`Removed ${name} from saved`);
  } else {
    favs.push(name);
    toast(`Saved ${name} ♥`);
  }
  save("favNames", favs);
  render();
}

// ---------- Name of the day (changes daily) ----------
function renderNameOfDay() {
  if (!NAMES.length) return;
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((now - start) / 86400000);
  const item = NAMES[dayOfYear % NAMES.length];
  bannerEl.innerHTML = "";

  const label = document.createElement("div");
  label.className = "banner-label";
  label.textContent = "Name of the day";

  const text = document.createElement("div");
  const title = document.createElement("div");
  title.className = "banner-name";
  title.textContent = item.name;
  const meaning = document.createElement("div");
  meaning.className = "banner-meaning";
  meaning.textContent = item.meaning;
  text.append(title, meaning);

  bannerEl.append(label, text);
}

// ---------- Letter bar ----------
function renderLetters() {
  const available = new Set(NAMES.map((n) => n.name[0].toUpperCase()));
  lettersNav.innerHTML = "";

  const allBtn = document.createElement("button");
  allBtn.className = "letter all-btn" + (state.letter === "all" ? " active" : "");
  allBtn.textContent = "All";
  allBtn.addEventListener("click", () => { state.letter = "all"; render(); });
  lettersNav.appendChild(allBtn);

  "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").forEach((letter) => {
    const btn = document.createElement("button");
    btn.className = "letter" + (state.letter === letter ? " active" : "");
    btn.textContent = letter;
    btn.disabled = !available.has(letter);
    btn.addEventListener("click", () => { state.letter = letter; render(); });
    lettersNav.appendChild(btn);
  });
}

// ---------- Cards ----------
function makeCard(item) {
  const card = document.createElement("article");
  card.className = `card ${item.gender}`;
  if (state.highlight === item.name) card.classList.add("highlight");

  const top = document.createElement("div");
  top.className = "card-top";

  const h2 = document.createElement("h2");
  h2.textContent = item.name;

  const fav = document.createElement("button");
  const isFav = favs.includes(item.name);
  fav.className = "fav-btn" + (isFav ? " on" : "");
  fav.textContent = isFav ? "♥" : "♡";
  fav.setAttribute("aria-label", isFav ? "Remove from saved" : "Save name");
  fav.addEventListener("click", () => toggleFav(item.name));

  top.append(h2, fav);

  const tags = document.createElement("div");
  tags.className = "tags";
  [item.gender, item.origin].forEach((t) => {
    const span = document.createElement("span");
    span.className = "tag";
    span.textContent = t;
    tags.appendChild(span);
  });

  const meaning = document.createElement("p");
  meaning.className = "meaning";
  meaning.textContent = item.meaning;

  const copy = document.createElement("button");
  copy.className = "copy-btn";
  copy.textContent = "Copy name";
  copy.addEventListener("click", () => {
    copyText(item.name).then(() => toast(`Copied ${item.name}`));
  });

  card.append(top, tags, meaning, copy);
  return card;
}

// ---------- Filtering and rendering ----------
function getFiltered() {
  const q = state.query.trim().toLowerCase();

  const list = NAMES.filter((item) => {
    if ((state.gender === "boy" || state.gender === "girl") && item.gender !== state.gender) return false;
    if (state.gender === "fav" && !favs.includes(item.name)) return false;
    if (state.letter !== "all" && item.name[0].toUpperCase() !== state.letter) return false;
    if (q) {
      const text = `${item.name} ${item.meaning} ${item.origin}`.toLowerCase();
      if (!text.includes(q)) return false;
    }
    return true;
  });

  list.sort((a, b) =>
    state.sort === "za" ? b.name.localeCompare(a.name) : a.name.localeCompare(b.name)
  );
  return list;
}

function render() {
  genderButtons.forEach((b) => {
    b.classList.toggle("active", b.dataset.gender === state.gender);
  });
  favCountEl.textContent = favs.length;
  renderLetters();

  const list = getFiltered();
  grid.innerHTML = "";

  if (list.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty";
    empty.textContent = state.gender === "fav"
      ? "No saved names yet. Tap ♡ on any name to save it."
      : "No names match. Try a different search or filter.";
    grid.appendChild(empty);
  } else {
    list.forEach((item) => grid.appendChild(makeCard(item)));
  }

  count.textContent = `Showing ${list.length} of ${NAMES.length} names`;
}

// ---------- Events ----------
genderButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    state.gender = btn.dataset.gender;
    state.highlight = null;
    render();
  });
});

search.addEventListener("input", () => {
  state.query = search.value;
  state.highlight = null;
  render();
});

sortSelect.addEventListener("change", () => {
  state.sort = sortSelect.value;
  render();
});

randomBtn.addEventListener("click", () => {
  const list = getFiltered();
  if (!list.length) return toast("No names to pick from");
  const pick = list[Math.floor(Math.random() * list.length)];
  state.highlight = pick.name;
  render();
  const el = [...grid.querySelectorAll(".card")].find(
    (c) => c.querySelector("h2").textContent === pick.name
  );
  if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
  toast(`🎲 ${pick.name} — ${pick.meaning}`);
});

// ---------- Start ----------
renderNameOfDay();
render();

/**
 * SWIMWITHUS AQUATICS - OFFICIAL PRODUCT CATALOGUE
 * Business Owner: Amit Kumar
 * Address: House No. 320, Gali 19A, Swatantra Nagar, Narela, Delhi – 110040, India
 * WhatsApp: +91 95604 48232
 * Email: swimwithusaquatics@gmail.com
 * Total Categories: 31
 * Total Products: 241
 */

const BUSINESS_INFO = {
  name: "SwimWithUs Aquatics",
  tagline: "Explore the World Beneath the Water",
  subheading: "Everything Your Aquarium Needs, All in One Place",
  owner: "Amit Kumar",
  address: "House No. 320, Gali 19A, Swatantra Nagar, Narela, Delhi – 110040, India",
  email: "swimwithusaquatics@gmail.com",
  phone: "+91 95604 48232",
  phoneRaw: "919560448232",
  whatsappUrl: "https://wa.me/919560448232",
  instagramUrl: "https://www.instagram.com/swimwithusaquatics/",
  currency: "₹",
  deliveryNote: "Pan India Delivery Available"
};

const CATEGORIES_DATA = [
  {
    "id": 1,
    "name": "Top / Biochemical Filters",
    "slug": "top-biochemical-filters",
    "icon": "filter",
    "image": "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=600&q=80",
    "count": 11,
    "desc": "High-efficiency top sump and biochemical filtration systems for crystal clear water."
  },
  {
    "id": 2,
    "name": "Hang-on-Back Filters",
    "slug": "hang-on-back-filters",
    "icon": "cpu",
    "image": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
    "count": 4,
    "desc": "Slim profile external cascade filters ideal for community and planted tanks."
  },
  {
    "id": 3,
    "name": "Internal Power Filters",
    "slug": "internal-power-filters",
    "icon": "activity",
    "image": "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=600&q=80",
    "count": 11,
    "desc": "Submerged motorized powerhead filters delivering strong circulation and aeration."
  },
  {
    "id": 4,
    "name": "Sponge Filters",
    "slug": "sponge-filters",
    "icon": "disc",
    "image": "https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&w=600&q=80",
    "count": 7,
    "desc": "Gentle biological air-driven filtration designed for breeding, shrimp, and fry setups."
  },
  {
    "id": 5,
    "name": "External Canister Filters",
    "slug": "external-canister-filters",
    "icon": "box",
    "image": "https://images.unsplash.com/photo-1508873696983-2df5293cb32b?auto=format&fit=crop&w=600&q=80",
    "count": 18,
    "desc": "High-capacity multi-stage external filtration for large planted and monster aquariums."
  },
  {
    "id": 6,
    "name": "Air Pumps",
    "slug": "air-pumps",
    "icon": "wind",
    "image": "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=600&q=80",
    "count": 9,
    "desc": "Ultra-quiet single and multi-outlet air pumps, including portable battery units."
  },
  {
    "id": 7,
    "name": "Air Stones / Million Bubbles",
    "slug": "air-stones-million-bubbles",
    "icon": "circle",
    "image": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
    "count": 14,
    "desc": "Micro-porous ceramic and cylinder diffusers creating rich curtain bubblers."
  },
  {
    "id": 8,
    "name": "Airline & Oxygen Accessories",
    "slug": "airline-oxygen-accessories",
    "icon": "git-branch",
    "image": "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=600&q=80",
    "count": 4,
    "desc": "Durable silicone airline tubing, non-return check valves, and brass splitters."
  },
  {
    "id": 9,
    "name": "Betta Aquariums & Small Tanks",
    "slug": "betta-aquariums-small-tanks",
    "icon": "home",
    "image": "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80",
    "count": 16,
    "desc": "Desktop nano aquariums, LED betta houses, and rimless miniature display tanks."
  },
  {
    "id": 10,
    "name": "Aquarium Cleaning Products",
    "slug": "aquarium-cleaning-products",
    "icon": "tool",
    "image": "https://images.unsplash.com/photo-1584467735871-8e85353a8413?auto=format&fit=crop&w=600&q=80",
    "count": 11,
    "desc": "Electric gravel vacuums, magnetic glass cleaners, scrapers, and siphon pumps."
  },
  {
    "id": 11,
    "name": "Thermometers",
    "slug": "thermometers",
    "icon": "thermometer",
    "image": "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=80",
    "count": 3,
    "desc": "Precision glass floating thermometers, adhesive digital liquid crystal strips."
  },
  {
    "id": 12,
    "name": "Fish Food",
    "slug": "fish-food",
    "icon": "heart",
    "image": "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=600&q=80",
    "count": 9,
    "desc": "Nutritional pellets, freeze-dried bloodworms, sinking cichlid gold, and betta diets."
  },
  {
    "id": 13,
    "name": "Fish Nets & Separators",
    "slug": "fish-nets-separators",
    "icon": "grid",
    "image": "https://images.unsplash.com/photo-1497671935048-ffb721869e9c?auto=format&fit=crop&w=600&q=80",
    "count": 6,
    "desc": "Ultra-fine soft mesh catching nets and tank division grids."
  },
  {
    "id": 14,
    "name": "Filter Media",
    "slug": "filter-media",
    "icon": "layers",
    "image": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
    "count": 12,
    "desc": "High surface-area ceramic rings, Seachem Purigen, bio balls, and activated carbon."
  },
  {
    "id": 15,
    "name": "Fish Medicines & Water Care",
    "slug": "fish-medicines-water-care",
    "icon": "shield",
    "image": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
    "count": 15,
    "desc": "Water conditioners, anti-chlorine, ich cure, nitrifying bacteria, and tonic salt."
  },
  {
    "id": 16,
    "name": "Hanging WRGB Lights",
    "slug": "hanging-wrgb-lights",
    "icon": "sun",
    "image": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
    "count": 2,
    "desc": "Professional full-spectrum WRGB hanging luminaires designed for planted aquascapes."
  },
  {
    "id": 17,
    "name": "SOBO COB Clip Lights",
    "slug": "sobo-cob-clip-lights",
    "icon": "zap",
    "image": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
    "count": 5,
    "desc": "Sleek COB clip-on LED lamps available in 30 cm to 80 cm tank spans."
  },
  {
    "id": 18,
    "name": "Other Aquarium Lights",
    "slug": "other-aquarium-lights",
    "icon": "tv",
    "image": "https://images.unsplash.com/photo-1516683037151-9a17603a8dc7?auto=format&fit=crop&w=600&q=80",
    "count": 15,
    "desc": "Extendable LED bracket lights, tanning master tubes, and Wi-Fi app-controlled fixtures."
  },
  {
    "id": 19,
    "name": "Glass Aquarium Heaters",
    "slug": "glass-aquarium-heaters",
    "icon": "thermometer",
    "image": "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=600&q=80",
    "count": 6,
    "desc": "Submersible shatter-resistant thermal glass heaters with automatic thermostat controls."
  },
  {
    "id": 20,
    "name": "Stainless-Steel Heaters",
    "slug": "stainless-steel-heaters",
    "icon": "shield",
    "image": "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=600&q=80",
    "count": 3,
    "desc": "Heavy-duty unbreakable stainless steel heaters for cichlid and turtle setups."
  },
  {
    "id": 21,
    "name": "Aquascaping Rocks & Stones",
    "slug": "aquascaping-rocks-stones",
    "icon": "feather",
    "image": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
    "count": 7,
    "desc": "Natural Dragon rock, black lava stones, Sansibar rocks, and decorative river marbles."
  },
  {
    "id": 22,
    "name": "Aquarium Sand, Gravel & Soil",
    "slug": "aquarium-sand-gravel-soil",
    "icon": "database",
    "image": "https://images.unsplash.com/photo-1508873696983-2df5293cb32b?auto=format&fit=crop&w=600&q=80",
    "count": 6,
    "desc": "Nutrient-rich ADA Amazonia, planted soil, fine black quartz sand, and red river gravel."
  },
  {
    "id": 23,
    "name": "Driftwood",
    "slug": "driftwood",
    "icon": "compass",
    "image": "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80",
    "count": 7,
    "desc": "Natural spider wood, heavy sinking branches, monster tank centerpieces, and root pieces."
  },
  {
    "id": 24,
    "name": "Decorations & Hiding Spots",
    "slug": "decorations-hiding-spots",
    "icon": "smile",
    "image": "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=600&q=80",
    "count": 12,
    "desc": "Ceramic caves, coconut shelters, LED volcanos, skeleton bubblers, and artificial plants."
  },
  {
    "id": 25,
    "name": "Betta Accessories",
    "slug": "betta-accessories",
    "icon": "tag",
    "image": "https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&w=600&q=80",
    "count": 4,
    "desc": "Resting leaf hammocks, exercise mirrors, and ceramic hiding tunnels for fighting fish."
  },
  {
    "id": 26,
    "name": "Breeding Accessories",
    "slug": "breeding-accessories",
    "icon": "life-buoy",
    "image": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
    "count": 4,
    "desc": "Isolation hatchery boxes, mesh nurseries, spawning cones, and breeding grass."
  },
  {
    "id": 27,
    "name": "Feeding Accessories",
    "slug": "feeding-accessories",
    "icon": "compass",
    "image": "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=600&q=80",
    "count": 4,
    "desc": "Anti-scatter feeding rings, glass bloodworm cones, and automatic digital timed feeders."
  },
  {
    "id": 28,
    "name": "Turtle Accessories",
    "slug": "turtle-accessories",
    "icon": "map-pin",
    "image": "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?auto=format&fit=crop&w=600&q=80",
    "count": 4,
    "desc": "Floating basking islands, suction ramps, basking UVA+UVB lamps, and heater guards."
  },
  {
    "id": 29,
    "name": "Pumps & Special Equipment",
    "slug": "pumps-special-equipment",
    "icon": "settings",
    "image": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
    "count": 4,
    "desc": "Wave makers, surface skimmers, tank cooling fans, and inline UV clarification."
  },
  {
    "id": 30,
    "name": "Other Aquarium Accessories",
    "slug": "other-aquarium-accessories",
    "icon": "paperclip",
    "image": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
    "count": 4,
    "desc": "Stainless steel aquascaping toolsets, tank backgrounds, magnetic cleaners, and tubing clips."
  },
  {
    "id": 31,
    "name": "Submersible Water Pumps",
    "slug": "submersible-water-pumps",
    "icon": "refresh-cw",
    "image": "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=600&q=80",
    "count": 4,
    "desc": "Multipurpose submersible water pumps for sumps, fountains, waterfalls, and water changes."
  }
];

const PRODUCTS_DATA = [
  {
    "id": "aq-16h",
    "name": "SOBO AQ-16H",
    "brand": "SOBO",
    "model": "AQ-16H",
    "category": "Top / Biochemical Filters",
    "categorySlug": "top-biochemical-filters",
    "description": "High performance SOBO AQ-16H with rated flow rate of 400 L/H. Engineered for dependable filtration, optimal circulation and quiet operation. Pan India delivery available from SwimWithUs Aquatics.",
    "specifications": {
      "Type": "Top Sump Filter",
      "Flow Rate": "400 L/H",
      "Power": "Standard Electric",
      "Ideal For": "Small to Medium Aquariums"
    },
    "flowRate": "400 L/H",
    "price": 900,
    "images": [
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": true
  },
  {
    "id": "aq-17h",
    "name": "SOBO AQ-17H",
    "brand": "SOBO",
    "model": "AQ-17H",
    "category": "Top / Biochemical Filters",
    "categorySlug": "top-biochemical-filters",
    "description": "High performance SOBO AQ-17H with rated flow rate of 500 L/H. Engineered for dependable filtration, optimal circulation and quiet operation. Pan India delivery available from SwimWithUs Aquatics.",
    "specifications": {
      "Type": "Top Sump Filter",
      "Flow Rate": "500 L/H",
      "Power": "Standard Electric",
      "Ideal For": "Medium Aquariums"
    },
    "flowRate": "500 L/H",
    "price": 1200,
    "images": [
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": true
  },
  {
    "id": "aq-18h",
    "name": "SOBO AQ-18H",
    "brand": "SOBO",
    "model": "AQ-18H",
    "category": "Top / Biochemical Filters",
    "categorySlug": "top-biochemical-filters",
    "description": "High performance SOBO AQ-18H with rated flow rate of 500 L/H. Engineered for dependable filtration, optimal circulation and quiet operation. Pan India delivery available from SwimWithUs Aquatics.",
    "specifications": {
      "Type": "Top Sump Filter",
      "Flow Rate": "500 L/H",
      "Power": "Standard Electric",
      "Ideal For": "Medium to Large Aquariums"
    },
    "flowRate": "500 L/H",
    "price": 1400,
    "images": [
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "aq-152h",
    "name": "SOBO AQ-152H",
    "brand": "SOBO",
    "model": "AQ-152H",
    "category": "Top / Biochemical Filters",
    "categorySlug": "top-biochemical-filters",
    "description": "High performance SOBO AQ-152H with rated flow rate of 600 L/H. Engineered for dependable filtration, optimal circulation and quiet operation. Pan India delivery available from SwimWithUs Aquatics.",
    "specifications": {
      "Type": "Top Sump Filter",
      "Flow Rate": "600 L/H",
      "Power": "Standard Electric",
      "Ideal For": "Medium Aquariums"
    },
    "flowRate": "600 L/H",
    "price": 1000,
    "images": [
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "aq-162h",
    "name": "SOBO AQ-162H",
    "brand": "SOBO",
    "model": "AQ-162H",
    "category": "Top / Biochemical Filters",
    "categorySlug": "top-biochemical-filters",
    "description": "High performance SOBO AQ-162H with rated flow rate of 600 L/H. Engineered for dependable filtration, optimal circulation and quiet operation. Pan India delivery available from SwimWithUs Aquatics.",
    "specifications": {
      "Type": "Top Sump Filter",
      "Flow Rate": "600 L/H",
      "Power": "Standard Electric",
      "Ideal For": "Medium to Large Aquariums"
    },
    "flowRate": "600 L/H",
    "price": 1200,
    "images": [
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "aq-172h",
    "name": "SOBO AQ-172H",
    "brand": "SOBO",
    "model": "AQ-172H",
    "category": "Top / Biochemical Filters",
    "categorySlug": "top-biochemical-filters",
    "description": "High performance SOBO AQ-172H with rated flow rate of 700 L/H. Engineered for dependable filtration, optimal circulation and quiet operation. Pan India delivery available from SwimWithUs Aquatics.",
    "specifications": {
      "Type": "Top Sump Filter",
      "Flow Rate": "700 L/H",
      "Power": "Standard Electric",
      "Ideal For": "Large Aquariums"
    },
    "flowRate": "700 L/H",
    "price": 1400,
    "images": [
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "aq-182h",
    "name": "SOBO AQ-182H",
    "brand": "SOBO",
    "model": "AQ-182H",
    "category": "Top / Biochemical Filters",
    "categorySlug": "top-biochemical-filters",
    "description": "High performance SOBO AQ-182H with rated flow rate of 700 L/H. Engineered for dependable filtration, optimal circulation and quiet operation. Pan India delivery available from SwimWithUs Aquatics.",
    "specifications": {
      "Type": "Top Sump Filter",
      "Flow Rate": "700 L/H",
      "Power": "Standard Electric",
      "Ideal For": "Large Aquariums"
    },
    "flowRate": "700 L/H",
    "price": 1700,
    "images": [
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": true
  },
  {
    "id": "wp-880f",
    "name": "SOBO WP-880F",
    "brand": "SOBO",
    "model": "WP-880F",
    "category": "Top / Biochemical Filters",
    "categorySlug": "top-biochemical-filters",
    "description": "High performance SOBO WP-880F with rated flow rate of 650 L/H. Engineered for dependable filtration, optimal circulation and quiet operation. Pan India delivery available from SwimWithUs Aquatics.",
    "specifications": {
      "Type": "Top Filter",
      "Flow Rate": "650 L/H"
    },
    "flowRate": "650 L/H",
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "wp-1880f",
    "name": "SOBO WP-1880F",
    "brand": "SOBO",
    "model": "WP-1880F",
    "category": "Top / Biochemical Filters",
    "categorySlug": "top-biochemical-filters",
    "description": "High performance SOBO WP-1880F with rated flow rate of 1800 L/H. Engineered for dependable filtration, optimal circulation and quiet operation. Pan India delivery available from SwimWithUs Aquatics.",
    "specifications": {
      "Type": "Top Filter",
      "Flow Rate": "1800 L/H"
    },
    "flowRate": "1800 L/H",
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "wp-2880f",
    "name": "SOBO WP-2880F",
    "brand": "SOBO",
    "model": "WP-2880F",
    "category": "Top / Biochemical Filters",
    "categorySlug": "top-biochemical-filters",
    "description": "Genuine SOBO SOBO WP-2880F offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Type": "Top Filter"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "wp-3880f",
    "name": "SOBO WP-3880F",
    "brand": "SOBO",
    "model": "WP-3880F",
    "category": "Top / Biochemical Filters",
    "categorySlug": "top-biochemical-filters",
    "description": "Genuine SOBO SOBO WP-3880F offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Type": "Top Filter"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "wp-638h",
    "name": "SOBO WP-638H",
    "brand": "SOBO",
    "model": "WP-638H",
    "category": "Hang-on-Back Filters",
    "categorySlug": "hang-on-back-filters",
    "description": "High performance SOBO WP-638H with rated flow rate of 500 L/H. Engineered for dependable filtration, optimal circulation and quiet operation. Pan India delivery available from SwimWithUs Aquatics.",
    "specifications": {
      "Flow Rate": "500 L/H",
      "Design": "Slim Waterfall HOB"
    },
    "flowRate": "500 L/H",
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": true
  },
  {
    "id": "hbl-302",
    "name": "SUNSUN HBL-302",
    "brand": "SUNSUN",
    "model": "HBL-302",
    "category": "Hang-on-Back Filters",
    "categorySlug": "hang-on-back-filters",
    "description": "Genuine SUNSUN SUNSUN HBL-302 offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Mounting": "Hang-on-Rim",
      "Brand": "SUNSUN"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "hbl-802",
    "name": "SUNSUN HBL-802",
    "brand": "SUNSUN",
    "model": "HBL-802",
    "category": "Hang-on-Back Filters",
    "categorySlug": "hang-on-back-filters",
    "description": "Genuine SUNSUN SUNSUN HBL-802 offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Mounting": "Hang-on-Rim",
      "Multi-stage": "Yes"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "mini-hob",
    "name": "Mini Hang-on-Back Filters",
    "brand": "SwimWithUs",
    "model": "Mini-HOB",
    "category": "Hang-on-Back Filters",
    "categorySlug": "hang-on-back-filters",
    "description": "Genuine SwimWithUs Mini Hang-on-Back Filters offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Ideal For": "Nano Tanks & Desktop Aquariums"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "aq-6000f",
    "name": "SOBO AQ-6000F",
    "brand": "SOBO",
    "model": "AQ-6000F",
    "category": "Internal Power Filters",
    "categorySlug": "internal-power-filters",
    "description": "High performance SOBO AQ-6000F with rated flow rate of 400 L/H. Engineered for dependable filtration, optimal circulation and quiet operation. Pan India delivery available from SwimWithUs Aquatics.",
    "specifications": {
      "Flow Rate": "400 L/H",
      "Type": "Internal Submersible"
    },
    "flowRate": "400 L/H",
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "aq-6100f",
    "name": "SOBO AQ-6100F",
    "brand": "SOBO",
    "model": "AQ-6100F",
    "category": "Internal Power Filters",
    "categorySlug": "internal-power-filters",
    "description": "High performance SOBO AQ-6100F with rated flow rate of 600 L/H. Engineered for dependable filtration, optimal circulation and quiet operation. Pan India delivery available from SwimWithUs Aquatics.",
    "specifications": {
      "Flow Rate": "600 L/H",
      "Type": "Internal Submersible"
    },
    "flowRate": "600 L/H",
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "aq-6200f",
    "name": "SOBO AQ-6200F",
    "brand": "SOBO",
    "model": "AQ-6200F",
    "category": "Internal Power Filters",
    "categorySlug": "internal-power-filters",
    "description": "High performance SOBO AQ-6200F with rated flow rate of 1000 L/H. Engineered for dependable filtration, optimal circulation and quiet operation. Pan India delivery available from SwimWithUs Aquatics.",
    "specifications": {
      "Flow Rate": "1000 L/H",
      "Type": "Internal Submersible"
    },
    "flowRate": "1000 L/H",
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "aq-6300f",
    "name": "SOBO AQ-6300F",
    "brand": "SOBO",
    "model": "AQ-6300F",
    "category": "Internal Power Filters",
    "categorySlug": "internal-power-filters",
    "description": "High performance SOBO AQ-6300F with rated flow rate of 1500 L/H. Engineered for dependable filtration, optimal circulation and quiet operation. Pan India delivery available from SwimWithUs Aquatics.",
    "specifications": {
      "Flow Rate": "1500 L/H",
      "Type": "Internal Submersible"
    },
    "flowRate": "1500 L/H",
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "wp-707c",
    "name": "SOBO WP-707C",
    "brand": "SOBO",
    "model": "WP-707C",
    "category": "Internal Power Filters",
    "categorySlug": "internal-power-filters",
    "description": "High performance SOBO WP-707C with rated flow rate of 650 L/H. Engineered for dependable filtration, optimal circulation and quiet operation. Pan India delivery available from SwimWithUs Aquatics.",
    "specifications": {
      "Flow Rate": "650 L/H",
      "Design": "Corner Internal Filter"
    },
    "flowRate": "650 L/H",
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "wp-808c",
    "name": "SOBO WP-808C",
    "brand": "SOBO",
    "model": "WP-808C",
    "category": "Internal Power Filters",
    "categorySlug": "internal-power-filters",
    "description": "High performance SOBO WP-808C with rated flow rate of 800 L/H. Engineered for dependable filtration, optimal circulation and quiet operation. Pan India delivery available from SwimWithUs Aquatics.",
    "specifications": {
      "Flow Rate": "800 L/H",
      "Design": "Corner Internal Filter"
    },
    "flowRate": "800 L/H",
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "wp-909c",
    "name": "SOBO WP-909C",
    "brand": "SOBO",
    "model": "WP-909C",
    "category": "Internal Power Filters",
    "categorySlug": "internal-power-filters",
    "description": "High performance SOBO WP-909C with rated flow rate of 1600 L/H. Engineered for dependable filtration, optimal circulation and quiet operation. Pan India delivery available from SwimWithUs Aquatics.",
    "specifications": {
      "Flow Rate": "1600 L/H",
      "Design": "Corner Internal Filter"
    },
    "flowRate": "1600 L/H",
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "fk-1502",
    "name": "SOBO FK-1502",
    "brand": "SOBO",
    "model": "FK-1502",
    "category": "Internal Power Filters",
    "categorySlug": "internal-power-filters",
    "description": "High performance SOBO FK-1502 with rated flow rate of 1800 L/H. Engineered for dependable filtration, optimal circulation and quiet operation. Pan India delivery available from SwimWithUs Aquatics.",
    "specifications": {
      "Flow Rate": "1800 L/H",
      "Type": "Heavy Duty Internal"
    },
    "flowRate": "1800 L/H",
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "fk-1503",
    "name": "SOBO FK-1503",
    "brand": "SOBO",
    "model": "FK-1503",
    "category": "Internal Power Filters",
    "categorySlug": "internal-power-filters",
    "description": "High performance SOBO FK-1503 with rated flow rate of 2800 L/H. Engineered for dependable filtration, optimal circulation and quiet operation. Pan India delivery available from SwimWithUs Aquatics.",
    "specifications": {
      "Flow Rate": "2800 L/H",
      "Type": "Heavy Duty Internal"
    },
    "flowRate": "2800 L/H",
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "nsf-280",
    "name": "Minjiang NSF-280",
    "brand": "Minjiang",
    "model": "NSF-280",
    "category": "Internal Power Filters",
    "categorySlug": "internal-power-filters",
    "description": "High performance Minjiang NSF-280 with rated flow rate of 300 L/H. Engineered for dependable filtration, optimal circulation and quiet operation. Pan India delivery available from SwimWithUs Aquatics.",
    "specifications": {
      "Flow Rate": "300 L/H",
      "Brand": "Minjiang"
    },
    "flowRate": "300 L/H",
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "nsf-802",
    "name": "Minjiang NSF-802",
    "brand": "Minjiang",
    "model": "NSF-802",
    "category": "Internal Power Filters",
    "categorySlug": "internal-power-filters",
    "description": "High performance Minjiang NSF-802 with rated flow rate of 1500 L/H. Engineered for dependable filtration, optimal circulation and quiet operation. Pan India delivery available from SwimWithUs Aquatics.",
    "specifications": {
      "Flow Rate": "1500 L/H",
      "Brand": "Minjiang"
    },
    "flowRate": "1500 L/H",
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "sb-833",
    "name": "SOBO SB-833",
    "brand": "SOBO",
    "model": "SB-833",
    "category": "Sponge Filters",
    "categorySlug": "sponge-filters",
    "description": "Genuine SOBO SOBO SB-833 offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Type": "Biochemical Sponge",
      "Media": "Fine Foam"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "sb-1330",
    "name": "SOBO SB-1330",
    "brand": "SOBO",
    "model": "SB-1330",
    "category": "Sponge Filters",
    "categorySlug": "sponge-filters",
    "description": "Genuine SOBO SOBO SB-1330 offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Type": "Bio Sponge Filter"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "sb-2330",
    "name": "SOBO SB-2330",
    "brand": "SOBO",
    "model": "SB-2330",
    "category": "Sponge Filters",
    "categorySlug": "sponge-filters",
    "description": "Genuine SOBO SOBO SB-2330 offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Type": "Bio Sponge Filter"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "sb-3330",
    "name": "SOBO SB-3330",
    "brand": "SOBO",
    "model": "SB-3330",
    "category": "Sponge Filters",
    "categorySlug": "sponge-filters",
    "description": "Genuine SOBO SOBO SB-3330 offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Type": "Bio Sponge Filter"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "sb-333-new-gen",
    "name": "SOBO SB-333 New Gen",
    "brand": "SOBO",
    "model": "SB-333 New Gen",
    "category": "Sponge Filters",
    "categorySlug": "sponge-filters",
    "description": "Genuine SOBO SOBO SB-333 New Gen offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Generation": "New Gen Bio-Ceramic Sponge"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "sb-533-new-gen",
    "name": "SOBO SB-533 New Gen",
    "brand": "SOBO",
    "model": "SB-533 New Gen",
    "category": "Sponge Filters",
    "categorySlug": "sponge-filters",
    "description": "Genuine SOBO SOBO SB-533 New Gen offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Generation": "New Gen Dual Bio-Sponge"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "jumbo-sponge",
    "name": "Biggest Sponge Filter",
    "brand": "SwimWithUs",
    "model": "Jumbo Sponge",
    "category": "Sponge Filters",
    "categorySlug": "sponge-filters",
    "description": "Genuine SwimWithUs Biggest Sponge Filter offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Size": "Extra Large / Jumbo",
      "Ideal For": "Monster Fish & Discus Tanks"
    },
    "flowRate": null,
    "price": 700,
    "images": [
      "https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": true
  },
  {
    "id": "aq-901f",
    "name": "SOBO AQ-901F",
    "brand": "SOBO",
    "model": "AQ-901F",
    "category": "External Canister Filters",
    "categorySlug": "external-canister-filters",
    "description": "Genuine SOBO SOBO AQ-901F offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Type": "Multi-stage Canister"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1508873696983-2df5293cb32b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "aq-903f",
    "name": "SOBO AQ-903F",
    "brand": "SOBO",
    "model": "AQ-903F",
    "category": "External Canister Filters",
    "categorySlug": "external-canister-filters",
    "description": "Genuine SOBO SOBO AQ-903F offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Type": "Multi-stage Canister"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1508873696983-2df5293cb32b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "aq-905f",
    "name": "SOBO AQ-905F",
    "brand": "SOBO",
    "model": "AQ-905F",
    "category": "External Canister Filters",
    "categorySlug": "external-canister-filters",
    "description": "Genuine SOBO SOBO AQ-905F offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Type": "Multi-stage Canister"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1508873696983-2df5293cb32b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "aq-907f",
    "name": "SOBO AQ-907F",
    "brand": "SOBO",
    "model": "AQ-907F",
    "category": "External Canister Filters",
    "categorySlug": "external-canister-filters",
    "description": "Genuine SOBO SOBO AQ-907F offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Type": "Multi-stage Canister"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1508873696983-2df5293cb32b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "aq-909f",
    "name": "SOBO AQ-909F",
    "brand": "SOBO",
    "model": "AQ-909F",
    "category": "External Canister Filters",
    "categorySlug": "external-canister-filters",
    "description": "Genuine SOBO SOBO AQ-909F offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Type": "Multi-stage Canister"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1508873696983-2df5293cb32b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "hw-302",
    "name": "SUNSUN HW-302",
    "brand": "SUNSUN",
    "model": "HW-302",
    "category": "External Canister Filters",
    "categorySlug": "external-canister-filters",
    "description": "High performance SUNSUN HW-302 with rated flow rate of 1000 L/H. Engineered for dependable filtration, optimal circulation and quiet operation. Pan India delivery available from SwimWithUs Aquatics.",
    "specifications": {
      "Flow Rate": "1000 L/H",
      "Baskets": "3 Stage Trays"
    },
    "flowRate": "1000 L/H",
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1508873696983-2df5293cb32b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": true
  },
  {
    "id": "hw-303a",
    "name": "SUNSUN HW-303A",
    "brand": "SUNSUN",
    "model": "HW-303A",
    "category": "External Canister Filters",
    "categorySlug": "external-canister-filters",
    "description": "High performance SUNSUN HW-303A with rated flow rate of 1400 L/H. Engineered for dependable filtration, optimal circulation and quiet operation. Pan India delivery available from SwimWithUs Aquatics.",
    "specifications": {
      "Flow Rate": "1400 L/H",
      "Model": "Standard Canister"
    },
    "flowRate": "1400 L/H",
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1508873696983-2df5293cb32b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "hw-303b",
    "name": "SUNSUN HW-303B",
    "brand": "SUNSUN",
    "model": "HW-303B",
    "category": "External Canister Filters",
    "categorySlug": "external-canister-filters",
    "description": "High performance SUNSUN HW-303B with rated flow rate of 1400 L/H. Engineered for dependable filtration, optimal circulation and quiet operation. Pan India delivery available from SwimWithUs Aquatics.",
    "specifications": {
      "Flow Rate": "1400 L/H",
      "UV Clarifier": "Built-in 9W UV"
    },
    "flowRate": "1400 L/H",
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1508873696983-2df5293cb32b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "hw-304a",
    "name": "SUNSUN HW-304A",
    "brand": "SUNSUN",
    "model": "HW-304A",
    "category": "External Canister Filters",
    "categorySlug": "external-canister-filters",
    "description": "High performance SUNSUN HW-304A with rated flow rate of 2000 L/H. Engineered for dependable filtration, optimal circulation and quiet operation. Pan India delivery available from SwimWithUs Aquatics.",
    "specifications": {
      "Flow Rate": "2000 L/H",
      "Capacity": "Large Tanks"
    },
    "flowRate": "2000 L/H",
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1508873696983-2df5293cb32b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "hw-304b",
    "name": "SUNSUN HW-304B",
    "brand": "SUNSUN",
    "model": "HW-304B",
    "category": "External Canister Filters",
    "categorySlug": "external-canister-filters",
    "description": "High performance SUNSUN HW-304B with rated flow rate of 2000 L/H. Engineered for dependable filtration, optimal circulation and quiet operation. Pan India delivery available from SwimWithUs Aquatics.",
    "specifications": {
      "Flow Rate": "2000 L/H",
      "UV Clarifier": "Built-in 9W UV"
    },
    "flowRate": "2000 L/H",
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1508873696983-2df5293cb32b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "hw-3000",
    "name": "SUNSUN HW-3000",
    "brand": "SUNSUN",
    "model": "HW-3000",
    "category": "External Canister Filters",
    "categorySlug": "external-canister-filters",
    "description": "High performance SUNSUN HW-3000 with rated flow rate of 3000 L/H (Adjustable). Engineered for dependable filtration, optimal circulation and quiet operation. Pan India delivery available from SwimWithUs Aquatics.",
    "specifications": {
      "Flow Rate": "Variable up to 3000 L/H",
      "LCD Screen": "Smart Control Display",
      "UV": "9W UV"
    },
    "flowRate": "3000 L/H (Adjustable)",
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1508873696983-2df5293cb32b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": true
  },
  {
    "id": "hw-5000",
    "name": "SUNSUN HW-5000",
    "brand": "SUNSUN",
    "model": "HW-5000",
    "category": "External Canister Filters",
    "categorySlug": "external-canister-filters",
    "description": "High performance SUNSUN HW-5000 with rated flow rate of 4600 L/H (Adjustable). Engineered for dependable filtration, optimal circulation and quiet operation. Pan India delivery available from SwimWithUs Aquatics.",
    "specifications": {
      "Flow Rate": "Variable DC Pump up to 4600 L/H",
      "Control": "Touch Screen Digital",
      "UV": "Built-in UV"
    },
    "flowRate": "4600 L/H (Adjustable)",
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1508873696983-2df5293cb32b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "sf-650f",
    "name": "SOBO SF-650F",
    "brand": "SOBO",
    "model": "SF-650F",
    "category": "External Canister Filters",
    "categorySlug": "external-canister-filters",
    "description": "High performance SOBO SF-650F with rated flow rate of 650 L/H. Engineered for dependable filtration, optimal circulation and quiet operation. Pan India delivery available from SwimWithUs Aquatics.",
    "specifications": {
      "Flow Rate": "650 L/H",
      "Series": "SOBO SF Canister Series"
    },
    "flowRate": "650 L/H",
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1508873696983-2df5293cb32b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "sf-850f",
    "name": "SOBO SF-850F",
    "brand": "SOBO",
    "model": "SF-850F",
    "category": "External Canister Filters",
    "categorySlug": "external-canister-filters",
    "description": "High performance SOBO SF-850F with rated flow rate of 850 L/H. Engineered for dependable filtration, optimal circulation and quiet operation. Pan India delivery available from SwimWithUs Aquatics.",
    "specifications": {
      "Flow Rate": "850 L/H",
      "Series": "SOBO SF Canister Series"
    },
    "flowRate": "850 L/H",
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1508873696983-2df5293cb32b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "sf-1000f",
    "name": "SOBO SF-1000F",
    "brand": "SOBO",
    "model": "SF-1000F",
    "category": "External Canister Filters",
    "categorySlug": "external-canister-filters",
    "description": "High performance SOBO SF-1000F with rated flow rate of 1000 L/H. Engineered for dependable filtration, optimal circulation and quiet operation. Pan India delivery available from SwimWithUs Aquatics.",
    "specifications": {
      "Flow Rate": "1000 L/H",
      "Series": "SOBO SF Canister Series"
    },
    "flowRate": "1000 L/H",
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1508873696983-2df5293cb32b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "sf-1200f",
    "name": "SOBO SF-1200F",
    "brand": "SOBO",
    "model": "SF-1200F",
    "category": "External Canister Filters",
    "categorySlug": "external-canister-filters",
    "description": "High performance SOBO SF-1200F with rated flow rate of 1200 L/H. Engineered for dependable filtration, optimal circulation and quiet operation. Pan India delivery available from SwimWithUs Aquatics.",
    "specifications": {
      "Flow Rate": "1200 L/H",
      "Series": "SOBO SF Canister Series"
    },
    "flowRate": "1200 L/H",
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1508873696983-2df5293cb32b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "sf-1500f",
    "name": "SOBO SF-1500F",
    "brand": "SOBO",
    "model": "SF-1500F",
    "category": "External Canister Filters",
    "categorySlug": "external-canister-filters",
    "description": "High performance SOBO SF-1500F with rated flow rate of 1500 L/H. Engineered for dependable filtration, optimal circulation and quiet operation. Pan India delivery available from SwimWithUs Aquatics.",
    "specifications": {
      "Flow Rate": "1500 L/H",
      "Series": "SOBO SF Canister Series"
    },
    "flowRate": "1500 L/H",
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1508873696983-2df5293cb32b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "sf-1550f",
    "name": "SOBO SF-1550F",
    "brand": "SOBO",
    "model": "SF-1550F",
    "category": "External Canister Filters",
    "categorySlug": "external-canister-filters",
    "description": "High performance SOBO SF-1550F with rated flow rate of 1550 L/H. Engineered for dependable filtration, optimal circulation and quiet operation. Pan India delivery available from SwimWithUs Aquatics.",
    "specifications": {
      "Flow Rate": "1550 L/H",
      "Series": "SOBO SF Canister Series"
    },
    "flowRate": "1550 L/H",
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1508873696983-2df5293cb32b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "sb-860a",
    "name": "SOBO SB-860A – Two Outlet Silent",
    "brand": "SOBO",
    "model": "SB-860A",
    "category": "Air Pumps",
    "categorySlug": "air-pumps",
    "description": "Genuine SOBO SOBO SB-860A – Two Outlet Silent offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Outlets": "2 (Dual)",
      "Feature": "Ultra Silent Diaphragm"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": true
  },
  {
    "id": "sb-830a",
    "name": "SOBO SB-830A – One Outlet Silent",
    "brand": "SOBO",
    "model": "SB-830A",
    "category": "Air Pumps",
    "categorySlug": "air-pumps",
    "description": "Genuine SOBO SOBO SB-830A – One Outlet Silent offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Outlets": "1 (Single)",
      "Feature": "Ultra Silent Diaphragm"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "sb-108",
    "name": "SOBO SB-108",
    "brand": "SOBO",
    "model": "SB-108",
    "category": "Air Pumps",
    "categorySlug": "air-pumps",
    "description": "Genuine SOBO SOBO SB-108 offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Type": "Compact Air Pump"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "sb-980",
    "name": "SOBO SB-980 Battery Portable",
    "brand": "SOBO",
    "model": "SB-980",
    "category": "Air Pumps",
    "categorySlug": "air-pumps",
    "description": "Genuine SOBO SOBO SB-980 Battery Portable offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Power": "Battery Operated",
      "Use Case": "Transit & Power Outages"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": true
  },
  {
    "id": "sb-9903",
    "name": "SOBO SB-9903 – One Outlet",
    "brand": "SOBO",
    "model": "SB-9903",
    "category": "Air Pumps",
    "categorySlug": "air-pumps",
    "description": "Genuine SOBO SOBO SB-9903 – One Outlet offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Outlets": "1 (Single Outlet)"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "sb-9905",
    "name": "SOBO SB-9905 – Two Outlet",
    "brand": "SOBO",
    "model": "SB-9905",
    "category": "Air Pumps",
    "categorySlug": "air-pumps",
    "description": "Genuine SOBO SOBO SB-9905 – Two Outlet offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Outlets": "2 (Dual Outlets)"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "sb-668",
    "name": "SOBO SB-668",
    "brand": "SOBO",
    "model": "SB-668",
    "category": "Air Pumps",
    "categorySlug": "air-pumps",
    "description": "Genuine SOBO SOBO SB-668 offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Type": "Compact Efficient Air Pump"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "bg-551",
    "name": "Bodyguard BG-551",
    "brand": "Bodyguard",
    "model": "BG-551",
    "category": "Air Pumps",
    "categorySlug": "air-pumps",
    "description": "Genuine Bodyguard Bodyguard BG-551 offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Brand": "Bodyguard",
      "Design": "Durable Housing"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "ps-950",
    "name": "Minjiang PS-950",
    "brand": "Minjiang",
    "model": "PS-950",
    "category": "Air Pumps",
    "categorySlug": "air-pumps",
    "description": "Genuine Minjiang Minjiang PS-950 offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Brand": "Minjiang"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "mb-l06",
    "name": "Million Bubbles Long – 6 inch",
    "brand": "SwimWithUs",
    "model": "MB-L06",
    "category": "Air Stones / Million Bubbles",
    "categorySlug": "air-stones-million-bubbles",
    "description": "Genuine SwimWithUs Million Bubbles Long – 6 inch offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Length": "6 inches",
      "Shape": "Bar Diffuser"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "mb-l12",
    "name": "Million Bubbles Long – 12 inch",
    "brand": "SwimWithUs",
    "model": "MB-L12",
    "category": "Air Stones / Million Bubbles",
    "categorySlug": "air-stones-million-bubbles",
    "description": "Genuine SwimWithUs Million Bubbles Long – 12 inch offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Length": "12 inches",
      "Shape": "Bar Diffuser"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": true
  },
  {
    "id": "mb-l15",
    "name": "Million Bubbles Long – 15 inch",
    "brand": "SwimWithUs",
    "model": "MB-L15",
    "category": "Air Stones / Million Bubbles",
    "categorySlug": "air-stones-million-bubbles",
    "description": "Genuine SwimWithUs Million Bubbles Long – 15 inch offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Length": "15 inches",
      "Shape": "Bar Diffuser"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "mb-l18",
    "name": "Million Bubbles Long – 18 inch",
    "brand": "SwimWithUs",
    "model": "MB-L18",
    "category": "Air Stones / Million Bubbles",
    "categorySlug": "air-stones-million-bubbles",
    "description": "Genuine SwimWithUs Million Bubbles Long – 18 inch offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Length": "18 inches",
      "Shape": "Bar Diffuser"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "mb-l24",
    "name": "Million Bubbles Long – 24 inch",
    "brand": "SwimWithUs",
    "model": "MB-L24",
    "category": "Air Stones / Million Bubbles",
    "categorySlug": "air-stones-million-bubbles",
    "description": "Genuine SwimWithUs Million Bubbles Long – 24 inch offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Length": "24 inches",
      "Shape": "Bar Diffuser"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "mb-r04",
    "name": "Million Bubbles Round – 4 inch",
    "brand": "SwimWithUs",
    "model": "MB-R04",
    "category": "Air Stones / Million Bubbles",
    "categorySlug": "air-stones-million-bubbles",
    "description": "Genuine SwimWithUs Million Bubbles Round – 4 inch offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Diameter": "4 inches",
      "Shape": "Disc / Round"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "mb-r05",
    "name": "Million Bubbles Round – 5 inch",
    "brand": "SwimWithUs",
    "model": "MB-R05",
    "category": "Air Stones / Million Bubbles",
    "categorySlug": "air-stones-million-bubbles",
    "description": "Genuine SwimWithUs Million Bubbles Round – 5 inch offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Diameter": "5 inches",
      "Shape": "Disc / Round"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "mb-cyl-6p",
    "name": "Million Bubbles Big Cylinder – 6 pcs",
    "brand": "SwimWithUs",
    "model": "MB-CYL-6P",
    "category": "Air Stones / Million Bubbles",
    "categorySlug": "air-stones-million-bubbles",
    "description": "Genuine SwimWithUs Million Bubbles Big Cylinder – 6 pcs offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Pack Size": "6 Pieces",
      "Shape": "Large Cylinder"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "mb-ball-12p",
    "name": "Million Bubbles Small Ball – 12 pcs",
    "brand": "SwimWithUs",
    "model": "MB-BALL-12P",
    "category": "Air Stones / Million Bubbles",
    "categorySlug": "air-stones-million-bubbles",
    "description": "Genuine SwimWithUs Million Bubbles Small Ball – 12 pcs offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Pack Size": "12 Pieces",
      "Shape": "Small Spherical Ball"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "mb-bball",
    "name": "Million Bubbles Big Ball",
    "brand": "SwimWithUs",
    "model": "MB-BBALL",
    "category": "Air Stones / Million Bubbles",
    "categorySlug": "air-stones-million-bubbles",
    "description": "Genuine SwimWithUs Million Bubbles Big Ball offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Shape": "Large Spherical Ball"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "mb-pan",
    "name": "Million Bubbles Pan Shape",
    "brand": "SwimWithUs",
    "model": "MB-PAN",
    "category": "Air Stones / Million Bubbles",
    "categorySlug": "air-stones-million-bubbles",
    "description": "Genuine SwimWithUs Million Bubbles Pan Shape offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Shape": "Flat Pan Disc"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "mb-scyl-12p",
    "name": "Million Bubbles Small Cylinder – 12 pcs",
    "brand": "SwimWithUs",
    "model": "MB-SCYL-12P",
    "category": "Air Stones / Million Bubbles",
    "categorySlug": "air-stones-million-bubbles",
    "description": "Genuine SwimWithUs Million Bubbles Small Cylinder – 12 pcs offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Pack Size": "12 Pieces",
      "Shape": "Small Cylinder"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "as-reg",
    "name": "Regular Aquarium Air Stones",
    "brand": "SwimWithUs",
    "model": "AS-REG",
    "category": "Air Stones / Million Bubbles",
    "categorySlug": "air-stones-million-bubbles",
    "description": "Genuine SwimWithUs Regular Aquarium Air Stones offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Type": "Classic Mineral Air Stone"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "as-ngp",
    "name": "New Generation Plastic Air Stone",
    "brand": "SwimWithUs",
    "model": "AS-NGP",
    "category": "Air Stones / Million Bubbles",
    "categorySlug": "air-stones-million-bubbles",
    "description": "Genuine SwimWithUs New Generation Plastic Air Stone offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Type": "Disassemblable Plastic Micro Diffuser"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "ty-pipe",
    "name": "Toyaa Airline/Oxygen Pipe",
    "brand": "Toyaa",
    "model": "TY-PIPE",
    "category": "Airline & Oxygen Accessories",
    "categorySlug": "airline-oxygen-accessories",
    "description": "Genuine Toyaa Toyaa Airline/Oxygen Pipe offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Material": "Flexible High-Grade Silicone",
      "Standard Size": "4 mm inner diameter"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "acv-01",
    "name": "Aquarium Check Valve",
    "brand": "SwimWithUs",
    "model": "ACV-01",
    "category": "Airline & Oxygen Accessories",
    "categorySlug": "airline-oxygen-accessories",
    "description": "Genuine SwimWithUs Aquarium Check Valve offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Function": "Non-Return Backflow Protection"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "alc-set",
    "name": "Airline Connectors",
    "brand": "SwimWithUs",
    "model": "ALC-SET",
    "category": "Airline & Oxygen Accessories",
    "categorySlug": "airline-oxygen-accessories",
    "description": "Genuine SwimWithUs Airline Connectors offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Variants": "Straight, T-Shape, Cross"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "als-valve",
    "name": "Airline Splitters",
    "brand": "SwimWithUs",
    "model": "ALS-VALVE",
    "category": "Airline & Oxygen Accessories",
    "categorySlug": "airline-oxygen-accessories",
    "description": "Genuine SwimWithUs Airline Splitters offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Type": "Metal / Plastic Gang Valves with Control"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "dbh-double-l",
    "name": "Deluxe Betta House Double with Light",
    "brand": "Deluxe",
    "model": "DBH-DOUBLE-L",
    "category": "Betta Aquariums & Small Tanks",
    "categorySlug": "betta-aquariums-small-tanks",
    "description": "Genuine Deluxe Deluxe Betta House Double with Light offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Chambers": "2 Compartments with Divider",
      "Lighting": "Integrated Overhead LED"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": true
  },
  {
    "id": "dbh-triple-led",
    "name": "Deluxe Betta House Triple LED",
    "brand": "Deluxe",
    "model": "DBH-TRIPLE-LED",
    "category": "Betta Aquariums & Small Tanks",
    "categorySlug": "betta-aquariums-small-tanks",
    "description": "Genuine Deluxe Deluxe Betta House Triple LED offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Chambers": "3 Compartments with Dividers",
      "Lighting": "Integrated LED System"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "dbh-single-usb",
    "name": "Deluxe Betta Home Single USB with LED",
    "brand": "Deluxe",
    "model": "DBH-SINGLE-USB",
    "category": "Betta Aquariums & Small Tanks",
    "categorySlug": "betta-aquariums-small-tanks",
    "description": "Genuine Deluxe Deluxe Betta Home Single USB with LED offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Power": "USB Powered 5V",
      "Lighting": "LED"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "m-b03",
    "name": "SOBO Mini Betta Box M-B03",
    "brand": "SOBO",
    "model": "M-B03",
    "category": "Betta Aquariums & Small Tanks",
    "categorySlug": "betta-aquariums-small-tanks",
    "description": "Genuine SOBO SOBO Mini Betta Box M-B03 offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Design": "Stackable Acrylic Betta Display"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "bm-bh-led",
    "name": "Blue Marlin Betta House with LED",
    "brand": "Blue Marlin",
    "model": "BM-BH-LED",
    "category": "Betta Aquariums & Small Tanks",
    "categorySlug": "betta-aquariums-small-tanks",
    "description": "Genuine Blue Marlin Blue Marlin Betta House with LED offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Lighting": "Multi-Color LED",
      "Brand": "Blue Marlin"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "t201",
    "name": "Dophin T201 Mini Tank with LED",
    "brand": "Dophin",
    "model": "T201",
    "category": "Betta Aquariums & Small Tanks",
    "categorySlug": "betta-aquariums-small-tanks",
    "description": "Genuine Dophin Dophin T201 Mini Tank with LED offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Lighting": "LED Touch Light",
      "Brand": "Dophin"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "t102",
    "name": "Dophin T102 Mini Tank",
    "brand": "Dophin",
    "model": "T102",
    "category": "Betta Aquariums & Small Tanks",
    "categorySlug": "betta-aquariums-small-tanks",
    "description": "Genuine Dophin Dophin T102 Mini Tank offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Type": "Mini Desktop Aquarium"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "tp-360",
    "name": "Bluepet TP-360 with Filter & LED",
    "brand": "Bluepet",
    "model": "TP-360",
    "category": "Betta Aquariums & Small Tanks",
    "categorySlug": "betta-aquariums-small-tanks",
    "description": "Genuine Bluepet Bluepet TP-360 with Filter & LED offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Features": "Curved Glass, Built-in Filter, LED Lighting"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "tp-26",
    "name": "Bluepet TP-26 with Filter & LED",
    "brand": "Bluepet",
    "model": "TP-26",
    "category": "Betta Aquariums & Small Tanks",
    "categorySlug": "betta-aquariums-small-tanks",
    "description": "Genuine Bluepet Bluepet TP-26 with Filter & LED offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Features": "Compact Desktop Glass Tank with LED & Pump"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "bl-10v",
    "name": "Bluepet BL-10V with LED",
    "brand": "Bluepet",
    "model": "BL-10V",
    "category": "Betta Aquariums & Small Tanks",
    "categorySlug": "betta-aquariums-small-tanks",
    "description": "Genuine Bluepet Bluepet BL-10V with LED offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Features": "Vertical Desktop Design, LED Light"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "tp-33",
    "name": "Bluepet TP-33 with Filter & LED",
    "brand": "Bluepet",
    "model": "TP-33",
    "category": "Betta Aquariums & Small Tanks",
    "categorySlug": "betta-aquariums-small-tanks",
    "description": "Genuine Bluepet Bluepet TP-33 with Filter & LED offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Features": "Integrated All-in-One Filtration & Light"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "tp-460",
    "name": "Bluepet TP-460 with Filter & LED",
    "brand": "Bluepet",
    "model": "TP-460",
    "category": "Betta Aquariums & Small Tanks",
    "categorySlug": "betta-aquariums-small-tanks",
    "description": "Genuine Bluepet Bluepet TP-460 with Filter & LED offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Features": "Large Desktop Curved Front Glass Tank with LED & Filter"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "bl-07",
    "name": "Bluepet BL-07",
    "brand": "Bluepet",
    "model": "BL-07",
    "category": "Betta Aquariums & Small Tanks",
    "categorySlug": "betta-aquariums-small-tanks",
    "description": "Genuine Bluepet Bluepet BL-07 offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Brand": "Bluepet",
      "Type": "Nano Starter Tank"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "tp-40-tv",
    "name": "Bluepet TP-40 TV",
    "brand": "Bluepet",
    "model": "TP-40 TV",
    "category": "Betta Aquariums & Small Tanks",
    "categorySlug": "betta-aquariums-small-tanks",
    "description": "Genuine Bluepet Bluepet TP-40 TV offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Shape": "Vintage TV Screen Curved Profile"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "wall-aqu",
    "name": "Wall-Hanging Aquarium",
    "brand": "SwimWithUs",
    "model": "WALL-AQU",
    "category": "Betta Aquariums & Small Tanks",
    "categorySlug": "betta-aquariums-small-tanks",
    "description": "Genuine SwimWithUs Wall-Hanging Aquarium offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Mount": "Wall Mounted Display Acrylic"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "acry-aqu",
    "name": "Acrylic Aquarium",
    "brand": "SwimWithUs",
    "model": "ACRY-AQU",
    "category": "Betta Aquariums & Small Tanks",
    "categorySlug": "betta-aquariums-small-tanks",
    "description": "Genuine SwimWithUs Acrylic Aquarium offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Material": "High-Clarity Optical Acrylic"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "bo-058",
    "name": "SOBO BO-058 Multifunctional Electric Cleaning Pump",
    "brand": "SOBO",
    "model": "BO-058",
    "category": "Aquarium Cleaning Products",
    "categorySlug": "aquarium-cleaning-products",
    "description": "Genuine SOBO SOBO BO-058 Multifunctional Electric Cleaning Pump offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Power": "Electric Corded",
      "Features": "Water Changer, Gravel Cleaner, Algae Filter"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1584467735871-8e85353a8413?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": true
  },
  {
    "id": "sb-6",
    "name": "SOBO SB-6 Glass Cleaner",
    "brand": "SOBO",
    "model": "SB-6",
    "category": "Aquarium Cleaning Products",
    "categorySlug": "aquarium-cleaning-products",
    "description": "Genuine SOBO SOBO SB-6 Glass Cleaner offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Type": "Magnetic Glass Cleaner (Small/Medium)"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1584467735871-8e85353a8413?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "sb-20",
    "name": "SOBO SB-20 Glass Cleaner",
    "brand": "SOBO",
    "model": "SB-20",
    "category": "Aquarium Cleaning Products",
    "categorySlug": "aquarium-cleaning-products",
    "description": "Genuine SOBO SOBO SB-20 Glass Cleaner offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Type": "Heavy Duty Magnetic Glass Cleaner (Thick Glass)"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1584467735871-8e85353a8413?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "nb-01",
    "name": "Bluepet Easy Siphon NB-01",
    "brand": "Bluepet",
    "model": "NB-01",
    "category": "Aquarium Cleaning Products",
    "categorySlug": "aquarium-cleaning-products",
    "description": "Genuine Bluepet Bluepet Easy Siphon NB-01 offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Feature": "Quick Squeeze Bulb Siphon"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1584467735871-8e85353a8413?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "scp-fc",
    "name": "Siphon Cleaner Pump with Flow Control",
    "brand": "SwimWithUs",
    "model": "SCP-FC",
    "category": "Aquarium Cleaning Products",
    "categorySlug": "aquarium-cleaning-products",
    "description": "Genuine SwimWithUs Siphon Cleaner Pump with Flow Control offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Valve": "Adjustable Water Flow Valve"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1584467735871-8e85353a8413?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "sp-hq",
    "name": "Heavy/Good Quality Siphon Pump",
    "brand": "SwimWithUs",
    "model": "SP-HQ",
    "category": "Aquarium Cleaning Products",
    "categorySlug": "aquarium-cleaning-products",
    "description": "Genuine SwimWithUs Heavy/Good Quality Siphon Pump offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Hose": "Reinforced Anti-Kink Hose"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1584467735871-8e85353a8413?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "fpd-51a",
    "name": "Bluepet FPD-51A 5-in-1 Cleaning Kit",
    "brand": "Bluepet",
    "model": "FPD-51A",
    "category": "Aquarium Cleaning Products",
    "categorySlug": "aquarium-cleaning-products",
    "description": "Genuine Bluepet Bluepet FPD-51A 5-in-1 Cleaning Kit offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Contents": "Fish Net, Algae Scraper, Sponge Brush, Plant Fork, Gravel Rake"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1584467735871-8e85353a8413?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "bg-5in1",
    "name": "Bodyguard 5-in-1 Cleaning Kit",
    "brand": "Bodyguard",
    "model": "BG-5IN1",
    "category": "Aquarium Cleaning Products",
    "categorySlug": "aquarium-cleaning-products",
    "description": "Genuine Bodyguard Bodyguard 5-in-1 Cleaning Kit offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Contents": "Telescopic Handle with 5 Interchangeable Tool Heads"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1584467735871-8e85353a8413?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "e-siphon",
    "name": "Electric Aquarium Siphon Pump",
    "brand": "SwimWithUs",
    "model": "E-SIPHON",
    "category": "Aquarium Cleaning Products",
    "categorySlug": "aquarium-cleaning-products",
    "description": "Genuine SwimWithUs Electric Aquarium Siphon Pump offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Motorized": "Battery / DC Electric Submersible Gravel Vacuum"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1584467735871-8e85353a8413?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "acb-set",
    "name": "Aquarium Cleaning Brushes",
    "brand": "SwimWithUs",
    "model": "ACB-SET",
    "category": "Aquarium Cleaning Products",
    "categorySlug": "aquarium-cleaning-products",
    "description": "Genuine SwimWithUs Aquarium Cleaning Brushes offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Type": "Flexible Double-Ended Tube & Hose Cleaning Brushes"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1584467735871-8e85353a8413?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "as-blade",
    "name": "Aquarium Scrapers",
    "brand": "SwimWithUs",
    "model": "AS-BLADE",
    "category": "Aquarium Cleaning Products",
    "categorySlug": "aquarium-cleaning-products",
    "description": "Genuine SwimWithUs Aquarium Scrapers offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Blades": "Rust-Resistant Stainless Steel Blades"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1584467735871-8e85353a8413?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "kx-001",
    "name": "KX-001 Glass Thermometer",
    "brand": "SwimWithUs",
    "model": "KX-001",
    "category": "Thermometers",
    "categorySlug": "thermometers",
    "description": "Genuine SwimWithUs KX-001 Glass Thermometer offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Type": "Glass Submersible Thermometer with Suction Cup"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "th-sticker",
    "name": "Sticker Thermometer",
    "brand": "SwimWithUs",
    "model": "TH-STICKER",
    "category": "Thermometers",
    "categorySlug": "thermometers",
    "description": "Genuine SwimWithUs Sticker Thermometer offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Type": "Adhesive Liquid Crystal External Strip"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "th-digi",
    "name": "Other Aquarium Thermometers",
    "brand": "SwimWithUs",
    "model": "TH-DIGI",
    "category": "Thermometers",
    "categorySlug": "thermometers",
    "description": "Genuine SwimWithUs Other Aquarium Thermometers offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Variants": "Digital Electronic Probe & Floating Models"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "opt-100g",
    "name": "Optimum Fish Food 100 g",
    "brand": "Optimum",
    "model": "OPT-100G",
    "category": "Fish Food",
    "categorySlug": "fish-food",
    "description": "Genuine Optimum Optimum Fish Food 100 g offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Weight": "100 g",
      "Formula": "Highly Nutritious Daily Pellets with Astaxanthin"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": true
  },
  {
    "id": "opt-betta-20g",
    "name": "Optimum Betta Food 20 g",
    "brand": "Optimum",
    "model": "OPT-BETTA-20G",
    "category": "Fish Food",
    "categorySlug": "fish-food",
    "description": "Genuine Optimum Optimum Betta Food 20 g offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Weight": "20 g",
      "Specialty": "Tail & Fin Color Enhancing Formula for Betta"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "ty-fd-bw20",
    "name": "Toyaa Freeze-Dried Bloodworms 20 g",
    "brand": "Toyaa",
    "model": "TY-FD-BW20",
    "category": "Fish Food",
    "categorySlug": "fish-food",
    "description": "Genuine Toyaa Toyaa Freeze-Dried Bloodworms 20 g offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Weight": "20 g",
      "Type": "100% Pure Freeze-Dried Natural Bloodworms",
      "Protein": "High Protein Content"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": true
  },
  {
    "id": "ty-mw30",
    "name": "Toyaa Mealworms 30 g",
    "brand": "Toyaa",
    "model": "TY-MW30",
    "category": "Fish Food",
    "categorySlug": "fish-food",
    "description": "Genuine Toyaa Toyaa Mealworms 30 g offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Weight": "30 g",
      "Target": "Arowana, Cichlids, Turtles & Carnivorous Fish"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "hk-scg",
    "name": "Hikari Sinking Cichlid Gold",
    "brand": "Hikari",
    "model": "HK-SCG",
    "category": "Fish Food",
    "categorySlug": "fish-food",
    "description": "Genuine Hikari Hikari Sinking Cichlid Gold offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Pellet Type": "Sinking Pellet",
      "Specialty": "Color & Growth Enhancer for Cichlids"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "sobo-shrimp",
    "name": "SOBO Dried Shrimp",
    "brand": "SOBO",
    "model": "SOBO-SHRIMP",
    "category": "Fish Food",
    "categorySlug": "fish-food",
    "description": "Genuine SOBO SOBO Dried Shrimp offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Type": "Natural Sun-Dried River Shrimps rich in Calcium"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "ff-cichlid",
    "name": "Cichlid Food",
    "brand": "SwimWithUs",
    "model": "FF-CICHLID",
    "category": "Fish Food",
    "categorySlug": "fish-food",
    "description": "Genuine SwimWithUs Cichlid Food offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Type": "Floating & Sinking Granules for African & South American Cichlids"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "ff-pellet",
    "name": "General Fish Pellets",
    "brand": "SwimWithUs",
    "model": "FF-PELLET",
    "category": "Fish Food",
    "categorySlug": "fish-food",
    "description": "Genuine SwimWithUs General Fish Pellets offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Type": "Balanced All-Life Stage Tropical Fish Pellets"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "ff-misc",
    "name": "Others Also Available",
    "brand": "SwimWithUs",
    "model": "FF-MISC",
    "category": "Fish Food",
    "categorySlug": "fish-food",
    "description": "Genuine SwimWithUs Others Also Available offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Note": "Inquire for specialized fry, spirulina, or wafer food diets"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "ty-net-40",
    "name": "Toyaa Fish Net – MRP ₹40 variant",
    "brand": "Toyaa",
    "model": "TY-NET-40",
    "category": "Fish Nets & Separators",
    "categorySlug": "fish-nets-separators",
    "description": "Genuine Toyaa Toyaa Fish Net – MRP ₹40 variant offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "MRP": "₹40",
      "Mesh": "Soft Fine Aquarium Safe Mesh",
      "Size": "Small (Approx. 3-4 inch)"
    },
    "flowRate": null,
    "price": 40,
    "images": [
      "https://images.unsplash.com/photo-1497671935048-ffb721869e9c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "ty-net-60",
    "name": "Toyaa Fish Net – MRP ₹60 variant",
    "brand": "Toyaa",
    "model": "TY-NET-60",
    "category": "Fish Nets & Separators",
    "categorySlug": "fish-nets-separators",
    "description": "Genuine Toyaa Toyaa Fish Net – MRP ₹60 variant offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "MRP": "₹60",
      "Mesh": "Durable Soft Nylon",
      "Size": "Medium (Approx. 5 inch)"
    },
    "flowRate": null,
    "price": 60,
    "images": [
      "https://images.unsplash.com/photo-1497671935048-ffb721869e9c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "ty-net-70",
    "name": "Toyaa Fish Net – MRP ₹70 variant",
    "brand": "Toyaa",
    "model": "TY-NET-70",
    "category": "Fish Nets & Separators",
    "categorySlug": "fish-nets-separators",
    "description": "Genuine Toyaa Toyaa Fish Net – MRP ₹70 variant offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "MRP": "₹70",
      "Mesh": "Durable Soft Nylon",
      "Size": "Medium-Large (Approx. 6 inch)"
    },
    "flowRate": null,
    "price": 70,
    "images": [
      "https://images.unsplash.com/photo-1497671935048-ffb721869e9c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "ty-net-75",
    "name": "Toyaa Fish Net – MRP ₹75 variant",
    "brand": "Toyaa",
    "model": "TY-NET-75",
    "category": "Fish Nets & Separators",
    "categorySlug": "fish-nets-separators",
    "description": "Genuine Toyaa Toyaa Fish Net – MRP ₹75 variant offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "MRP": "₹75",
      "Mesh": "Heavy Duty Handle & Deep Net Pocket",
      "Size": "Large (Approx. 8 inch)"
    },
    "flowRate": null,
    "price": 75,
    "images": [
      "https://images.unsplash.com/photo-1497671935048-ffb721869e9c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": true
  },
  {
    "id": "ty-sep-net",
    "name": "Toyaa Separate Net",
    "brand": "Toyaa",
    "model": "TY-SEP-NET",
    "category": "Fish Nets & Separators",
    "categorySlug": "fish-nets-separators",
    "description": "Genuine Toyaa Toyaa Separate Net offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Type": "Isolation Mesh Net for Injured or Fry Fish"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1497671935048-ffb721869e9c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "aq-sep-net",
    "name": "Aquarium Separator Net",
    "brand": "SwimWithUs",
    "model": "AQ-SEP-NET",
    "category": "Fish Nets & Separators",
    "categorySlug": "fish-nets-separators",
    "description": "Genuine SwimWithUs Aquarium Separator Net offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Type": "Suction Cup Mounted Tank Division Screen"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1497671935048-ffb721869e9c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "mj-cr400",
    "name": "Minjiang Ceramic Ring 400 g",
    "brand": "Minjiang",
    "model": "MJ-CR400",
    "category": "Filter Media",
    "categorySlug": "filter-media",
    "description": "Genuine Minjiang Minjiang Ceramic Ring 400 g offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Weight": "400 g",
      "Porosity": "High Biological Surface Area"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": true
  },
  {
    "id": "mj-ac400",
    "name": "Minjiang Activated Carbon 400 g",
    "brand": "Minjiang",
    "model": "MJ-AC400",
    "category": "Filter Media",
    "categorySlug": "filter-media",
    "description": "Genuine Minjiang Minjiang Activated Carbon 400 g offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Weight": "400 g",
      "Function": "Chemical Odor & Toxin Removal"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "sea-purigen",
    "name": "Seachem Purigen",
    "brand": "Seachem",
    "model": "SEA-PURIGEN",
    "category": "Filter Media",
    "categorySlug": "filter-media",
    "description": "Genuine Seachem Seachem Purigen offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Type": "Synthetic Macro-Porous Polymer Resin",
      "Regenerable": "Yes with Bleach"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": true
  },
  {
    "id": "sea-xpores",
    "name": "Seachem X-Pores",
    "brand": "Seachem",
    "model": "SEA-XPORES",
    "category": "Filter Media",
    "categorySlug": "filter-media",
    "description": "Genuine Seachem Seachem X-Pores offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Brand": "Seachem",
      "Type": "Bio-Filtration Porous Media"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "dop-cr",
    "name": "Dophin Ceramic Rings",
    "brand": "Dophin",
    "model": "DOP-CR",
    "category": "Filter Media",
    "categorySlug": "filter-media",
    "description": "Genuine Dophin Dophin Ceramic Rings offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Brand": "Dophin",
      "Type": "Porous Bio Rings"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "fm-cr-bulk",
    "name": "Ceramic Rings",
    "brand": "SwimWithUs",
    "model": "FM-CR-BULK",
    "category": "Filter Media",
    "categorySlug": "filter-media",
    "description": "Genuine SwimWithUs Ceramic Rings offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Type": "General Biological Ceramic Rings"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "fm-bioballs",
    "name": "Plastic Bio Balls",
    "brand": "SwimWithUs",
    "model": "FM-BIOBALLS",
    "category": "Filter Media",
    "categorySlug": "filter-media",
    "description": "Genuine SwimWithUs Plastic Bio Balls offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Internal Core": "Bio Sponge Interior",
      "Use": "Sump & Wet/Dry Trickle Filters"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "fm-ac-bulk",
    "name": "Activated Carbon",
    "brand": "SwimWithUs",
    "model": "FM-AC-BULK",
    "category": "Filter Media",
    "categorySlug": "filter-media",
    "description": "Genuine SwimWithUs Activated Carbon offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Type": "Granular Activated Carbon for Clear Odorless Water"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "fm-bio-misc",
    "name": "Biological Filter Media",
    "brand": "SwimWithUs",
    "model": "FM-BIO-MISC",
    "category": "Filter Media",
    "categorySlug": "filter-media",
    "description": "Genuine SwimWithUs Biological Filter Media offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Composition": "Sintered Glass / Quartz Rings & Balls"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "fm-sponge-sht",
    "name": "Filter Sponge Sheets",
    "brand": "SwimWithUs",
    "model": "FM-SPONGE-SHT",
    "category": "Filter Media",
    "categorySlug": "filter-media",
    "description": "Genuine SwimWithUs Filter Sponge Sheets offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Density": "Coarse, Medium & Fine Cut-to-Size Sheets"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "fm-mat",
    "name": "Filter Mats",
    "brand": "SwimWithUs",
    "model": "FM-MAT",
    "category": "Filter Media",
    "categorySlug": "filter-media",
    "description": "Genuine SwimWithUs Filter Mats offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Material": "Japanese Blue Mat style high durability mechanical/bio pad"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "fm-floss",
    "name": "Filter Floss",
    "brand": "SwimWithUs",
    "model": "FM-FLOSS",
    "category": "Filter Media",
    "categorySlug": "filter-media",
    "description": "Genuine SwimWithUs Filter Floss offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Type": "Ultra-Fine Mechanical Polishing Cotton Wool"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "ra-ac120",
    "name": "Rid-All Anti-Chlorine 120 ml",
    "brand": "Rid-All",
    "model": "RA-AC120",
    "category": "Fish Medicines & Water Care",
    "categorySlug": "fish-medicines-water-care",
    "description": "Genuine Rid-All Rid-All Anti-Chlorine 120 ml offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Volume": "120 ml",
      "Action": "Neutralizes Chlorine and Chloramines Instantly"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": true
  },
  {
    "id": "ra-ai120",
    "name": "Rid-All Anti-Ich 120 ml",
    "brand": "Rid-All",
    "model": "RA-AI120",
    "category": "Fish Medicines & Water Care",
    "categorySlug": "fish-medicines-water-care",
    "description": "Genuine Rid-All Rid-All Anti-Ich 120 ml offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Volume": "120 ml",
      "Action": "Effective Treatment for White Spot / Ich Disease"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "ra-ga120",
    "name": "Rid-All General Aid 120 ml",
    "brand": "Rid-All",
    "model": "RA-GA120",
    "category": "Fish Medicines & Water Care",
    "categorySlug": "fish-medicines-water-care",
    "description": "Genuine Rid-All Rid-All General Aid 120 ml offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Volume": "120 ml",
      "Action": "Broad Spectrum Treatment for Fin Rot, Fungal & Bacterial Infections"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "ar-ms2-200",
    "name": "Aquatic Remedies Microlife S2 200 ml",
    "brand": "Aquatic Remedies",
    "model": "AR-MS2-200",
    "category": "Fish Medicines & Water Care",
    "categorySlug": "fish-medicines-water-care",
    "description": "Genuine Aquatic Remedies Aquatic Remedies Microlife S2 200 ml offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Volume": "200 ml",
      "Function": "Live Nitrifying Bacteria Culture for Instant Tank Cycling"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "api-salt482",
    "name": "API Aquarium Salt 482 g",
    "brand": "API",
    "model": "API-SALT482",
    "category": "Fish Medicines & Water Care",
    "categorySlug": "fish-medicines-water-care",
    "description": "Genuine API API Aquarium Salt 482 g offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Weight": "482 g",
      "Function": "Promotes Electrolyte Balance & Gill Function"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": true
  },
  {
    "id": "api-sic118",
    "name": "API Super Ick Cure 118 ml",
    "brand": "API",
    "model": "API-SIC118",
    "category": "Fish Medicines & Water Care",
    "categorySlug": "fish-medicines-water-care",
    "description": "Genuine API API Super Ick Cure 118 ml offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Volume": "118 ml",
      "Action": "Fast-Acting White Spot & Ich Parasite Eradication"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "ar-phyt-250",
    "name": "Aquatic Remedies Phytocarb Liquid Carbon 250 ml",
    "brand": "Aquatic Remedies",
    "model": "AR-PHYT-250",
    "category": "Fish Medicines & Water Care",
    "categorySlug": "fish-medicines-water-care",
    "description": "Genuine Aquatic Remedies Aquatic Remedies Phytocarb Liquid Carbon 250 ml offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Volume": "250 ml",
      "Application": "Bioavailable Organic Carbon & Anti-Algae for Planted Aquariums"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "sea-prime-250",
    "name": "Seachem Prime 250 ml",
    "brand": "Seachem",
    "model": "SEA-PRIME-250",
    "category": "Fish Medicines & Water Care",
    "categorySlug": "fish-medicines-water-care",
    "description": "Genuine Seachem Seachem Prime 250 ml offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Volume": "250 ml",
      "Concentration": "5 ml treats 200 L, Detoxifies Ammonia, Nitrite & Heavy Metals"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": true
  },
  {
    "id": "sea-stability",
    "name": "Seachem Stability",
    "brand": "Seachem",
    "model": "SEA-STABILITY",
    "category": "Fish Medicines & Water Care",
    "categorySlug": "fish-medicines-water-care",
    "description": "Genuine Seachem Seachem Stability offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Formula": "Synergistic Blend of Aerobic, Anaerobic & Facultative Bacteria"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "sea-amm-alert",
    "name": "Seachem Ammonia Alert",
    "brand": "Seachem",
    "model": "SEA-AMM-ALERT",
    "category": "Fish Medicines & Water Care",
    "categorySlug": "fish-medicines-water-care",
    "description": "Genuine Seachem Seachem Ammonia Alert offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Duration": "Continuous Reading for up to 1 Year",
      "Monitors": "Free Toxic Ammonia"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "sea-ph-alert",
    "name": "Seachem pH Alert",
    "brand": "Seachem",
    "model": "SEA-PH-ALERT",
    "category": "Fish Medicines & Water Care",
    "categorySlug": "fish-medicines-water-care",
    "description": "Genuine Seachem Seachem pH Alert offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Duration": "Continuous Reading for 3-6 Months",
      "pH Range": "5.4 to 8.0"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "sea-alert-combo",
    "name": "Seachem Alert Combo",
    "brand": "Seachem",
    "model": "SEA-ALERT-COMBO",
    "category": "Fish Medicines & Water Care",
    "categorySlug": "fish-medicines-water-care",
    "description": "Genuine Seachem Seachem Alert Combo offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Package": "Contains both Seachem Ammonia Alert & pH Alert"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "ada-sp100",
    "name": "ADA Super Pour 100",
    "brand": "ADA",
    "model": "ADA-SP100",
    "category": "Fish Medicines & Water Care",
    "categorySlug": "fish-medicines-water-care",
    "description": "Genuine ADA ADA Super Pour 100 offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Brand": "Aqua Design Amano (ADA)",
      "Substrate Additive": "Microorganism Nutrient"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "sh-watercare",
    "name": "Stress Heal",
    "brand": "SwimWithUs",
    "model": "SH-WATERCARE",
    "category": "Fish Medicines & Water Care",
    "categorySlug": "fish-medicines-water-care",
    "description": "Genuine SwimWithUs Stress Heal offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Action": "Aloe Vera & Vitamin Infused Slime Coat Restorer"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "para-watercare",
    "name": "Paracidol",
    "brand": "SwimWithUs",
    "model": "PARA-WATERCARE",
    "category": "Fish Medicines & Water Care",
    "categorySlug": "fish-medicines-water-care",
    "description": "Genuine SwimWithUs Paracidol offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Action": "Effective Treatment for External Parasites, Flukes & Velvet"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "s3-wrgb-10w",
    "name": "SISO Flat Nano S3 WRGB 10W",
    "brand": "SISO",
    "model": "S3 WRGB 10W",
    "category": "Hanging WRGB Lights",
    "categorySlug": "hanging-wrgb-lights",
    "description": "Genuine SISO SISO Flat Nano S3 WRGB 10W offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Wattage": "10 Watts",
      "Spectrum": "Full Vivid WRGB Spectrum",
      "Mount": "Aluminium Hanging / Clamp Arm"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": true
  },
  {
    "id": "s4-wrgb-16w",
    "name": "SISO Flat Nano S4 WRGB 16W",
    "brand": "SISO",
    "model": "S4 WRGB 16W",
    "category": "Hanging WRGB Lights",
    "categorySlug": "hanging-wrgb-lights",
    "description": "Genuine SISO SISO Flat Nano S4 WRGB 16W offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Wattage": "16 Watts",
      "Spectrum": "High PAR Full WRGB Spectrum",
      "Mount": "Engineered Hanging Bracket"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": true
  },
  {
    "id": "al-280",
    "name": "SOBO AL-280 – 30 cm",
    "brand": "SOBO",
    "model": "AL-280",
    "category": "SOBO COB Clip Lights",
    "categorySlug": "sobo-cob-clip-lights",
    "description": "Genuine SOBO SOBO AL-280 – 30 cm offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Tank Span": "Suitable for 30 cm (1 ft) tanks",
      "Chip Type": "High Lumens COB LED"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": true
  },
  {
    "id": "al-380",
    "name": "SOBO AL-380 – 40 cm",
    "brand": "SOBO",
    "model": "AL-380",
    "category": "SOBO COB Clip Lights",
    "categorySlug": "sobo-cob-clip-lights",
    "description": "Genuine SOBO SOBO AL-380 – 40 cm offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Tank Span": "Suitable for 40 cm tanks",
      "Chip Type": "High Lumens COB LED"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "al-480",
    "name": "SOBO AL-480 – 50 cm",
    "brand": "SOBO",
    "model": "AL-480",
    "category": "SOBO COB Clip Lights",
    "categorySlug": "sobo-cob-clip-lights",
    "description": "Genuine SOBO SOBO AL-480 – 50 cm offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Tank Span": "Suitable for 50 cm tanks",
      "Chip Type": "High Lumens COB LED"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "al-580",
    "name": "SOBO AL-580 – 60 cm",
    "brand": "SOBO",
    "model": "AL-580",
    "category": "SOBO COB Clip Lights",
    "categorySlug": "sobo-cob-clip-lights",
    "description": "Genuine SOBO SOBO AL-580 – 60 cm offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Tank Span": "Suitable for 60 cm (2 ft) tanks",
      "Chip Type": "High Lumens COB LED"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "al-780",
    "name": "SOBO AL-780 – 80 cm",
    "brand": "SOBO",
    "model": "AL-780",
    "category": "SOBO COB Clip Lights",
    "categorySlug": "sobo-cob-clip-lights",
    "description": "Genuine SOBO SOBO AL-780 – 80 cm offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Tank Span": "Suitable for 80 cm tanks",
      "Chip Type": "High Lumens COB LED"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "st-300",
    "name": "SISO ST-300",
    "brand": "SISO",
    "model": "ST-300",
    "category": "Other Aquarium Lights",
    "categorySlug": "other-aquarium-lights",
    "description": "Genuine SISO SISO ST-300 offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Model": "ST-300 Slim Bracket LED"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1516683037151-9a17603a8dc7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "st-520",
    "name": "SISO ST-520",
    "brand": "SISO",
    "model": "ST-520",
    "category": "Other Aquarium Lights",
    "categorySlug": "other-aquarium-lights",
    "description": "Genuine SISO SISO ST-520 offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Model": "ST-520 Slim Bracket LED"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1516683037151-9a17603a8dc7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "st-750",
    "name": "SISO ST-750",
    "brand": "SISO",
    "model": "ST-750",
    "category": "Other Aquarium Lights",
    "categorySlug": "other-aquarium-lights",
    "description": "Genuine SISO SISO ST-750 offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Model": "ST-750 Slim Bracket LED"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1516683037151-9a17603a8dc7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "st-900",
    "name": "SISO ST-900",
    "brand": "SISO",
    "model": "ST-900",
    "category": "Other Aquarium Lights",
    "categorySlug": "other-aquarium-lights",
    "description": "Genuine SISO SISO ST-900 offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Model": "ST-900 Slim Bracket LED (3 ft Tanks)"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1516683037151-9a17603a8dc7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "st-1200",
    "name": "SISO ST-1200",
    "brand": "SISO",
    "model": "ST-1200",
    "category": "Other Aquarium Lights",
    "categorySlug": "other-aquarium-lights",
    "description": "Genuine SISO SISO ST-1200 offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Model": "ST-1200 Slim Bracket LED (4 ft Tanks)"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1516683037151-9a17603a8dc7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "t8-wrgb-10w",
    "name": "SISO T8 WRGB 10W",
    "brand": "SISO",
    "model": "T8 WRGB 10W",
    "category": "Other Aquarium Lights",
    "categorySlug": "other-aquarium-lights",
    "description": "Genuine SISO SISO T8 WRGB 10W offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Wattage": "10 Watts",
      "Form": "Submersible / Hood T8 Tube"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1516683037151-9a17603a8dc7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "t8-wrgb-16w",
    "name": "SISO T8 WRGB 16W",
    "brand": "SISO",
    "model": "T8 WRGB 16W",
    "category": "Other Aquarium Lights",
    "categorySlug": "other-aquarium-lights",
    "description": "Genuine SISO SISO T8 WRGB 16W offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Wattage": "16 Watts",
      "Form": "Submersible / Hood T8 Tube"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1516683037151-9a17603a8dc7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "bp-tm",
    "name": "Bluepet Tanning Master",
    "brand": "Bluepet",
    "model": "BP-TM",
    "category": "Other Aquarium Lights",
    "categorySlug": "other-aquarium-lights",
    "description": "Genuine Bluepet Bluepet Tanning Master offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Target": "Arowana & Flowerhorn Red/Gold Color Tanning"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1516683037151-9a17603a8dc7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": true
  },
  {
    "id": "bl-60",
    "name": "Bluepet BL-60",
    "brand": "Bluepet",
    "model": "BL-60",
    "category": "Other Aquarium Lights",
    "categorySlug": "other-aquarium-lights",
    "description": "Genuine Bluepet Bluepet BL-60 offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Brand": "Bluepet",
      "Length": "60 cm (2 ft)"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1516683037151-9a17603a8dc7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "bp-scb",
    "name": "Bluepet Solar Colour Booster",
    "brand": "Bluepet",
    "model": "BP-SCB",
    "category": "Other Aquarium Lights",
    "categorySlug": "other-aquarium-lights",
    "description": "Genuine Bluepet Bluepet Solar Colour Booster offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Technology": "Sun-Mimicking Spectrum for Enhanced Scales"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1516683037151-9a17603a8dc7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "bp-3ft",
    "name": "Bluepet 3-ft Light",
    "brand": "Bluepet",
    "model": "BP-3FT",
    "category": "Other Aquarium Lights",
    "categorySlug": "other-aquarium-lights",
    "description": "Genuine Bluepet Bluepet 3-ft Light offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Length": "3 Feet (90 cm)",
      "Mount": "Extendable Legs"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1516683037151-9a17603a8dc7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "bp-4ft",
    "name": "Bluepet 4-ft Light",
    "brand": "Bluepet",
    "model": "BP-4FT",
    "category": "Other Aquarium Lights",
    "categorySlug": "other-aquarium-lights",
    "description": "Genuine Bluepet Bluepet 4-ft Light offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Length": "4 Feet (120 cm)",
      "Mount": "Extendable Legs"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1516683037151-9a17603a8dc7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "bp-5ft",
    "name": "Bluepet 5-ft Light",
    "brand": "Bluepet",
    "model": "BP-5FT",
    "category": "Other Aquarium Lights",
    "categorySlug": "other-aquarium-lights",
    "description": "Genuine Bluepet Bluepet 5-ft Light offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Length": "5 Feet (150 cm)",
      "Mount": "Extendable Legs"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1516683037151-9a17603a8dc7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "bp-6ft",
    "name": "Bluepet 6-ft Light",
    "brand": "Bluepet",
    "model": "BP-6FT",
    "category": "Other Aquarium Lights",
    "categorySlug": "other-aquarium-lights",
    "description": "Genuine Bluepet Bluepet 6-ft Light offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Length": "6 Feet (180 cm)",
      "Mount": "Heavy Duty Aluminium Housing"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1516683037151-9a17603a8dc7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "bp-wifi",
    "name": "Bluepet Wi-Fi Aquarium Light",
    "brand": "Bluepet",
    "model": "BP-WIFI",
    "category": "Other Aquarium Lights",
    "categorySlug": "other-aquarium-lights",
    "description": "Genuine Bluepet Bluepet Wi-Fi Aquarium Light offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Control": "Mobile Smartphone App (iOS & Android)",
      "Features": "Sunrise, Sunset & Weather Modes"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1516683037151-9a17603a8dc7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": true
  },
  {
    "id": "hl-50",
    "name": "SOBO HL-50 Glass Heater",
    "brand": "SOBO",
    "model": "HL-50",
    "category": "Glass Aquarium Heaters",
    "categorySlug": "glass-aquarium-heaters",
    "description": "Genuine SOBO SOBO HL-50 Glass Heater offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Power": "50 Watts",
      "Thermostat": "18°C – 32°C Adjustable",
      "Tank Size": "Up to 50 Liters"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "hl-75",
    "name": "SOBO HL-75 Glass Heater",
    "brand": "SOBO",
    "model": "HL-75",
    "category": "Glass Aquarium Heaters",
    "categorySlug": "glass-aquarium-heaters",
    "description": "Genuine SOBO SOBO HL-75 Glass Heater offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Power": "75 Watts",
      "Thermostat": "18°C – 32°C Adjustable",
      "Tank Size": "Up to 75 Liters"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "rs-100",
    "name": "RS Electrical 100 Glass Heater",
    "brand": "RS Electrical",
    "model": "RS-100",
    "category": "Glass Aquarium Heaters",
    "categorySlug": "glass-aquarium-heaters",
    "description": "Genuine RS Electrical RS Electrical 100 Glass Heater offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Power": "100 Watts",
      "Material": "Explosion-Proof Quartz Glass",
      "Tank Size": "Up to 100 Liters"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": true
  },
  {
    "id": "hl-150",
    "name": "SOBO HL-150 Glass Heater",
    "brand": "SOBO",
    "model": "HL-150",
    "category": "Glass Aquarium Heaters",
    "categorySlug": "glass-aquarium-heaters",
    "description": "Genuine SOBO SOBO HL-150 Glass Heater offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Power": "150 Watts",
      "Thermostat": "18°C – 32°C Adjustable",
      "Tank Size": "Up to 150 Liters"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "hl-200",
    "name": "SOBO HL-200 Glass Heater",
    "brand": "SOBO",
    "model": "HL-200",
    "category": "Glass Aquarium Heaters",
    "categorySlug": "glass-aquarium-heaters",
    "description": "Genuine SOBO SOBO HL-200 Glass Heater offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Power": "200 Watts",
      "Thermostat": "18°C – 32°C Adjustable",
      "Tank Size": "Up to 200 Liters"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "rs-300",
    "name": "RS Electrical 300 Glass Heater",
    "brand": "RS Electrical",
    "model": "RS-300",
    "category": "Glass Aquarium Heaters",
    "categorySlug": "glass-aquarium-heaters",
    "description": "Genuine RS Electrical RS Electrical 300 Glass Heater offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Power": "300 Watts",
      "Material": "Explosion-Proof Quartz Glass",
      "Tank Size": "Up to 300 Liters"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": true
  },
  {
    "id": "hj-100",
    "name": "SOBO HJ-100 Steel Heater",
    "brand": "SOBO",
    "model": "HJ-100",
    "category": "Stainless-Steel Heaters",
    "categorySlug": "stainless-steel-heaters",
    "description": "Genuine SOBO SOBO HJ-100 Steel Heater offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Power": "100 Watts",
      "Material": "Marine-Grade Stainless Steel",
      "Feature": "100% Unbreakable"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "hj-200",
    "name": "SOBO HJ-200 Steel Heater",
    "brand": "SOBO",
    "model": "HJ-200",
    "category": "Stainless-Steel Heaters",
    "categorySlug": "stainless-steel-heaters",
    "description": "Genuine SOBO SOBO HJ-200 Steel Heater offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Power": "200 Watts",
      "Material": "Marine-Grade Stainless Steel",
      "Feature": "100% Unbreakable"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": true
  },
  {
    "id": "hj-300",
    "name": "SOBO HJ-300 Steel Heater",
    "brand": "SOBO",
    "model": "HJ-300",
    "category": "Stainless-Steel Heaters",
    "categorySlug": "stainless-steel-heaters",
    "description": "Genuine SOBO SOBO HJ-300 Steel Heater offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Power": "300 Watts",
      "Material": "Marine-Grade Stainless Steel",
      "Feature": "100% Unbreakable, Ideal for Turtles & Large Fish"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "rock-dragon",
    "name": "Dragon Rock",
    "brand": "SwimWithUs",
    "model": "ROCK-DRAGON",
    "category": "Aquascaping Rocks & Stones",
    "categorySlug": "aquascaping-rocks-stones",
    "description": "Genuine SwimWithUs Dragon Rock offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Origin": "Natural Ohko Dragon Rock",
      "Texture": "Clay-like layered holes ideal for moss and epiphytes",
      "pH Effect": "Neutral (Does not harden water)"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": true
  },
  {
    "id": "rock-blava",
    "name": "Black Lava Rock",
    "brand": "SwimWithUs",
    "model": "ROCK-BLAVA",
    "category": "Aquascaping Rocks & Stones",
    "categorySlug": "aquascaping-rocks-stones",
    "description": "Genuine SwimWithUs Black Lava Rock offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Origin": "Natural Volcanic Black Basalt",
      "Porosity": "Highly Porous for Beneficial Bacteria"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "rock-lava",
    "name": "Lava Rock",
    "brand": "SwimWithUs",
    "model": "ROCK-LAVA",
    "category": "Aquascaping Rocks & Stones",
    "categorySlug": "aquascaping-rocks-stones",
    "description": "Genuine SwimWithUs Lava Rock offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Origin": "Natural Red-Brown Volcanic Rock"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "rock-sansibar",
    "name": "Sansibar Rock",
    "brand": "SwimWithUs",
    "model": "ROCK-SANSIBAR",
    "category": "Aquascaping Rocks & Stones",
    "categorySlug": "aquascaping-rocks-stones",
    "description": "Genuine SwimWithUs Sansibar Rock offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Texture": "Deep Grooves, Grey Oceanic Rock"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "rock-dec",
    "name": "Decorative Aquarium Stones",
    "brand": "SwimWithUs",
    "model": "ROCK-DEC",
    "category": "Aquascaping Rocks & Stones",
    "categorySlug": "aquascaping-rocks-stones",
    "description": "Genuine SwimWithUs Decorative Aquarium Stones offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Type": "Smooth Hand-Selected River Pebbles"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "rock-marble",
    "name": "Aquarium Marbles",
    "brand": "SwimWithUs",
    "model": "ROCK-MARBLE",
    "category": "Aquascaping Rocks & Stones",
    "categorySlug": "aquascaping-rocks-stones",
    "description": "Genuine SwimWithUs Aquarium Marbles offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Type": "Translucent Colorful Glass Aquarium Marbles"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "rock-aqua-mix",
    "name": "Aquascaping Stones",
    "brand": "SwimWithUs",
    "model": "ROCK-AQUA-MIX",
    "category": "Aquascaping Rocks & Stones",
    "categorySlug": "aquascaping-rocks-stones",
    "description": "Genuine SwimWithUs Aquascaping Stones offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Selection": "Curated Mixed Hardscape Stones for Aquascapers"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "sand-imp-red",
    "name": "Imported Red Sand",
    "brand": "SwimWithUs",
    "model": "SAND-IMP-RED",
    "category": "Aquarium Sand, Gravel & Soil",
    "categorySlug": "aquarium-sand-gravel-soil",
    "description": "Genuine SwimWithUs Imported Red Sand offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Color": "Natural Terracotta Red",
      "Grain Size": "Fine Smooth Inert Quartz"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1508873696983-2df5293cb32b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "sand-black",
    "name": "Black Aquarium Sand",
    "brand": "SwimWithUs",
    "model": "SAND-BLACK",
    "category": "Aquarium Sand, Gravel & Soil",
    "categorySlug": "aquarium-sand-gravel-soil",
    "description": "Genuine SwimWithUs Black Aquarium Sand offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Color": "Jet Black",
      "Characteristics": "Non-toxic, Does not affect water chemistry"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1508873696983-2df5293cb32b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": true
  },
  {
    "id": "sand-premium",
    "name": "Premium Aquarium Sand",
    "brand": "SwimWithUs",
    "model": "SAND-PREMIUM",
    "category": "Aquarium Sand, Gravel & Soil",
    "categorySlug": "aquarium-sand-gravel-soil",
    "description": "Genuine SwimWithUs Premium Aquarium Sand offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Color": "Natural Golden Silica / River Sand",
      "Washed": "Triple Washed & Dust-Free"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1508873696983-2df5293cb32b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "gravel-std",
    "name": "Aquarium Gravel",
    "brand": "SwimWithUs",
    "model": "GRAVEL-STD",
    "category": "Aquarium Sand, Gravel & Soil",
    "categorySlug": "aquarium-sand-gravel-soil",
    "description": "Genuine SwimWithUs Aquarium Gravel offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Size": "2-4 mm Rounded Natural River Gravel"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1508873696983-2df5293cb32b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "soil-planted-imp",
    "name": "Imported Planted Aquarium Soil",
    "brand": "SwimWithUs",
    "model": "SOIL-PLANTED-IMP",
    "category": "Aquarium Sand, Gravel & Soil",
    "categorySlug": "aquarium-sand-gravel-soil",
    "description": "Genuine SwimWithUs Imported Planted Aquarium Soil offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Type": "Baked Nutrient-Rich Volcanic Granules",
      "Effect": "Buffs pH for Freshwater Plants & Caridina Shrimp"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1508873696983-2df5293cb32b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": true
  },
  {
    "id": "ada-amazonia-v2",
    "name": "ADA Amazonia Version 2",
    "brand": "ADA",
    "model": "ADA-AMAZONIA-V2",
    "category": "Aquarium Sand, Gravel & Soil",
    "categorySlug": "aquarium-sand-gravel-soil",
    "description": "Genuine ADA ADA Amazonia Version 2 offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Brand": "Aqua Design Amano (ADA)",
      "Supplement": "Includes Amazonia Nutrient Supplement Pack",
      "Standard": "World Benchmark for Planted Tanks"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1508873696983-2df5293cb32b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": true
  },
  {
    "id": "wood-spider",
    "name": "Spider Driftwood",
    "brand": "SwimWithUs",
    "model": "WOOD-SPIDER",
    "category": "Driftwood",
    "categorySlug": "driftwood",
    "description": "Genuine SwimWithUs Spider Driftwood offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Form": "Intricate Branching Spider Roots",
      "Best For": "Planted Aquascaping & Moss Attaching"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": true
  },
  {
    "id": "wood-heavy-br",
    "name": "Heavy Branch Driftwood",
    "brand": "SwimWithUs",
    "model": "WOOD-HEAVY-BR",
    "category": "Driftwood",
    "categorySlug": "driftwood",
    "description": "Genuine SwimWithUs Heavy Branch Driftwood offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Density": "Fast-Sinking Solid Hardwood Branches"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "wood-lg-prem",
    "name": "Large Premium Driftwood",
    "brand": "SwimWithUs",
    "model": "WOOD-LG-PREM",
    "category": "Driftwood",
    "categorySlug": "driftwood",
    "description": "Genuine SwimWithUs Large Premium Driftwood offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Size": "Large (Suitable for 3-4 ft Tanks)"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "wood-med",
    "name": "Medium Driftwood",
    "brand": "SwimWithUs",
    "model": "WOOD-MED",
    "category": "Driftwood",
    "categorySlug": "driftwood",
    "description": "Genuine SwimWithUs Medium Driftwood offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Size": "Medium (Suitable for 1.5 - 2.5 ft Tanks)"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "wood-sm",
    "name": "Small Driftwood",
    "brand": "SwimWithUs",
    "model": "WOOD-SM",
    "category": "Driftwood",
    "categorySlug": "driftwood",
    "description": "Genuine SwimWithUs Small Driftwood offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Size": "Small Nano Pieces"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "wood-handpick",
    "name": "Natural/Handpicked Driftwood",
    "brand": "SwimWithUs",
    "model": "WOOD-HANDPICK",
    "category": "Driftwood",
    "categorySlug": "driftwood",
    "description": "Genuine SwimWithUs Natural/Handpicked Driftwood offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Curated": "Individual Sculptural Showpiece"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "wood-monster",
    "name": "Monster Tank Driftwood",
    "brand": "SwimWithUs",
    "model": "WOOD-MONSTER",
    "category": "Driftwood",
    "categorySlug": "driftwood",
    "description": "Genuine SwimWithUs Monster Tank Driftwood offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Size": "Extra Large Jumbo Stump / Trunk for 5-8 ft Tanks"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": true
  },
  {
    "id": "dec-ceramic-hide",
    "name": "Ceramic Hiding Spots",
    "brand": "SwimWithUs",
    "model": "DEC-CERAMIC-HIDE",
    "category": "Decorations & Hiding Spots",
    "categorySlug": "decorations-hiding-spots",
    "description": "Genuine SwimWithUs Ceramic Hiding Spots offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Material": "Fish-Safe Inert Terracotta Clay",
      "Purpose": "Pleco & Cichlid Hiding Tube"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "dec-lg-ceramic",
    "name": "Large Ceramic Hiding Spots",
    "brand": "SwimWithUs",
    "model": "DEC-LG-CERAMIC",
    "category": "Decorations & Hiding Spots",
    "categorySlug": "decorations-hiding-spots",
    "description": "Genuine SwimWithUs Large Ceramic Hiding Spots offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Size": "Large Multi-Cave Stack"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "dec-sm-ceramic",
    "name": "Small Ceramic Hiding Spots",
    "brand": "SwimWithUs",
    "model": "DEC-SM-CERAMIC",
    "category": "Decorations & Hiding Spots",
    "categorySlug": "decorations-hiding-spots",
    "description": "Genuine SwimWithUs Small Ceramic Hiding Spots offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Size": "Small Shrimp & Fry Caves"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "dec-coconut",
    "name": "Coconut Hiding Cave",
    "brand": "SwimWithUs",
    "model": "DEC-COCONUT",
    "category": "Decorations & Hiding Spots",
    "categorySlug": "decorations-hiding-spots",
    "description": "Genuine SwimWithUs Coconut Hiding Cave offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Material": "100% Natural Boiled Coconut Shell"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "dec-plants",
    "name": "Artificial Aquarium Plants",
    "brand": "SwimWithUs",
    "model": "DEC-PLANTS",
    "category": "Decorations & Hiding Spots",
    "categorySlug": "decorations-hiding-spots",
    "description": "Genuine SwimWithUs Artificial Aquarium Plants offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Material": "Silk & Soft Non-Toxic Plastic Foliage"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "dec-skeleton",
    "name": "Dancing Skeleton",
    "brand": "SwimWithUs",
    "model": "DEC-SKELETON",
    "category": "Decorations & Hiding Spots",
    "categorySlug": "decorations-hiding-spots",
    "description": "Genuine SwimWithUs Dancing Skeleton offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Feature": "Air-Operated Moving Ornament"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "dec-mermaid",
    "name": "Mermaid Decorations",
    "brand": "SwimWithUs",
    "model": "DEC-MERMAID",
    "category": "Decorations & Hiding Spots",
    "categorySlug": "decorations-hiding-spots",
    "description": "Genuine SwimWithUs Mermaid Decorations offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Theme": "Detailed Painted Resin Mermaid Figure"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "dec-penguin",
    "name": "Penguin Decorations",
    "brand": "SwimWithUs",
    "model": "DEC-PENGUIN",
    "category": "Decorations & Hiding Spots",
    "categorySlug": "decorations-hiding-spots",
    "description": "Genuine SwimWithUs Penguin Decorations offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Theme": "Artistic Penguin Ornament"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "dec-skull",
    "name": "Decorative Skull",
    "brand": "SwimWithUs",
    "model": "DEC-SKULL",
    "category": "Decorations & Hiding Spots",
    "categorySlug": "decorations-hiding-spots",
    "description": "Genuine SwimWithUs Decorative Skull offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Theme": "Ancient Pirate Skull Cave with Swim-Through Orifices"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "dec-volcano-led",
    "name": "Volcano LED Decoration",
    "brand": "SwimWithUs",
    "model": "DEC-VOLCANO-LED",
    "category": "Decorations & Hiding Spots",
    "categorySlug": "decorations-hiding-spots",
    "description": "Genuine SwimWithUs Volcano LED Decoration offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Lighting": "Red LED Spot with Air Bubble Crater"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": true
  },
  {
    "id": "dec-float-tower",
    "name": "Floating Aquarium Tower",
    "brand": "SwimWithUs",
    "model": "DEC-FLOAT-TOWER",
    "category": "Decorations & Hiding Spots",
    "categorySlug": "decorations-hiding-spots",
    "description": "Genuine SwimWithUs Floating Aquarium Tower offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Suspension": "Invisible Nylon Floating Structure"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "dec-art-misc",
    "name": "Artificial Aquarium Decorations",
    "brand": "SwimWithUs",
    "model": "DEC-ART-MISC",
    "category": "Decorations & Hiding Spots",
    "categorySlug": "decorations-hiding-spots",
    "description": "Genuine SwimWithUs Artificial Aquarium Decorations offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Variety": "Castles, Shipwrecks, Roman Pillars & Bridges"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "betta-hammock",
    "name": "Betta Leaf Hammock with Suction Cup",
    "brand": "SwimWithUs",
    "model": "BETTA-HAMMOCK",
    "category": "Betta Accessories",
    "categorySlug": "betta-accessories",
    "description": "Genuine SwimWithUs Betta Leaf Hammock with Suction Cup offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Material": "Soft Silk-Feel Plastic",
      "Placement": "1-2 inches below water line for resting"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": true
  },
  {
    "id": "betta-mirror",
    "name": "Betta Training Floating Mirror",
    "brand": "SwimWithUs",
    "model": "BETTA-MIRROR",
    "category": "Betta Accessories",
    "categorySlug": "betta-accessories",
    "description": "Genuine SwimWithUs Betta Training Floating Mirror offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Purpose": "Short Daily Flaring Exercise to Maintain Fin Health"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "betta-tunnel",
    "name": "Betta Ceramic Resting Tunnel",
    "brand": "SwimWithUs",
    "model": "BETTA-TUNNEL",
    "category": "Betta Accessories",
    "categorySlug": "betta-accessories",
    "description": "Genuine SwimWithUs Betta Ceramic Resting Tunnel offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Material": "Smooth Glazed Ceramic Safe for Delicate Fins"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "betta-ring",
    "name": "Betta Floating Exercise Ring",
    "brand": "SwimWithUs",
    "model": "BETTA-RING",
    "category": "Betta Accessories",
    "categorySlug": "betta-accessories",
    "description": "Genuine SwimWithUs Betta Floating Exercise Ring offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Function": "Feeding & Stimulation Ring"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "breed-box-multi",
    "name": "Aquarium Multi-Chamber Breeding Box",
    "brand": "SwimWithUs",
    "model": "BREED-BOX-MULTI",
    "category": "Breeding Accessories",
    "categorySlug": "breeding-accessories",
    "description": "Genuine SwimWithUs Aquarium Multi-Chamber Breeding Box offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Material": "High Transparency Acrylic with V-Separator",
      "Use": "Livebearers, Guppy & Molly Fry Isolation"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": true
  },
  {
    "id": "breed-net-hatch",
    "name": "Mesh Fry Isolation Hatchery Net",
    "brand": "SwimWithUs",
    "model": "BREED-NET-HATCH",
    "category": "Breeding Accessories",
    "categorySlug": "breeding-accessories",
    "description": "Genuine SwimWithUs Mesh Fry Isolation Hatchery Net offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Mount": "Submerged Frame with Suction Brackets"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "breed-spawn-cone",
    "name": "Ceramic Fish Spawning Cone / Cave",
    "brand": "SwimWithUs",
    "model": "BREED-SPAWN-CONE",
    "category": "Breeding Accessories",
    "categorySlug": "breeding-accessories",
    "description": "Genuine SwimWithUs Ceramic Fish Spawning Cone / Cave offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Target": "Discus & Angelfish Egg Laying Cone"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "breed-grass-hide",
    "name": "Aquarium Breeding Grass Cluster",
    "brand": "SwimWithUs",
    "model": "BREED-GRASS-HIDE",
    "category": "Breeding Accessories",
    "categorySlug": "breeding-accessories",
    "description": "Genuine SwimWithUs Aquarium Breeding Grass Cluster offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Purpose": "Dense Soft Fibers for Fry Refuge"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "feed-ring-sq",
    "name": "Floating Square Feeding Ring",
    "brand": "SwimWithUs",
    "model": "FEED-RING-SQ",
    "category": "Feeding Accessories",
    "categorySlug": "feeding-accessories",
    "description": "Genuine SwimWithUs Floating Square Feeding Ring offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Mechanism": "Self-Adjusting Floating Level with Suction Arm",
      "Benefit": "Prevents Pellets from getting drawn into filters"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": true
  },
  {
    "id": "feed-pipette-35",
    "name": "Acrylic Coral & Fry Feeding Pipette (35 cm)",
    "brand": "SwimWithUs",
    "model": "FEED-PIPETTE-35",
    "category": "Feeding Accessories",
    "categorySlug": "feeding-accessories",
    "description": "Genuine SwimWithUs Acrylic Coral & Fry Feeding Pipette (35 cm) offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Length": "35 cm",
      "Material": "Clear Acrylic Tube with Soft Rubber Bulb"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "feed-cone-glass",
    "name": "Glass Worm Feeder Cone with Suction Cup",
    "brand": "SwimWithUs",
    "model": "FEED-CONE-GLASS",
    "category": "Feeding Accessories",
    "categorySlug": "feeding-accessories",
    "description": "Genuine SwimWithUs Glass Worm Feeder Cone with Suction Cup offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Design": "Perforated Funnel for Live Bloodworms & Tubifex"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "feed-auto-digi",
    "name": "Automatic Digital Aquarium Fish Feeder",
    "brand": "SwimWithUs",
    "model": "FEED-AUTO-DIGI",
    "category": "Feeding Accessories",
    "categorySlug": "feeding-accessories",
    "description": "Genuine SwimWithUs Automatic Digital Aquarium Fish Feeder offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Settings": "Programmable 1 to 4 Meals Daily",
      "Capacity": "Large Moisture-Proof Drum"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": true
  },
  {
    "id": "turtle-dock-float",
    "name": "Floating Turtle Basking Platform / Dock",
    "brand": "SwimWithUs",
    "model": "TURTLE-DOCK-FLOAT",
    "category": "Turtle Accessories",
    "categorySlug": "turtle-accessories",
    "description": "Genuine SwimWithUs Floating Turtle Basking Platform / Dock offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Action": "Automatically rises and falls with water levels",
      "Texture": "Textured Grip Ladder"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": true
  },
  {
    "id": "turtle-ramp-suct",
    "name": "Turtle Basking Ramp with Suction Cups",
    "brand": "SwimWithUs",
    "model": "TURTLE-RAMP-SUCT",
    "category": "Turtle Accessories",
    "categorySlug": "turtle-accessories",
    "description": "Genuine SwimWithUs Turtle Basking Ramp with Suction Cups offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Surface": "Non-Slip Artificial Turf Grass Lining"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "turtle-lamp-uv",
    "name": "Reptile / Turtle UVA+UVB Clip-on Heat Lamp",
    "brand": "SwimWithUs",
    "model": "TURTLE-LAMP-UV",
    "category": "Turtle Accessories",
    "categorySlug": "turtle-accessories",
    "description": "Genuine SwimWithUs Reptile / Turtle UVA+UVB Clip-on Heat Lamp offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Arm": "360-Degree Flexible Gooseneck",
      "Benefit": "Stimulates Vitamin D3 & Shell Calcium Absorption"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": true
  },
  {
    "id": "turtle-heat-guard",
    "name": "Anti-Bite Turtle Heating Rod Guard",
    "brand": "SwimWithUs",
    "model": "TURTLE-HEAT-GUARD",
    "category": "Turtle Accessories",
    "categorySlug": "turtle-accessories",
    "description": "Genuine SwimWithUs Anti-Bite Turtle Heating Rod Guard offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Material": "Heavy Impact Resistant Plastic Casing"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "wp-wm-series",
    "name": "SOBO Wave Maker Circulation Pump",
    "brand": "SOBO",
    "model": "WP-WM-SERIES",
    "category": "Pumps & Special Equipment",
    "categorySlug": "pumps-special-equipment",
    "description": "High performance SOBO Wave Maker Circulation Pump with rated flow rate of 3000 - 6000 L/H. Engineered for dependable filtration, optimal circulation and quiet operation. Pan India delivery available from SwimWithUs Aquatics.",
    "specifications": {
      "Mount": "360-Degree Ball Joint Magnetic / Suction",
      "Function": "Simulates Natural Reef & River Currents"
    },
    "flowRate": "3000 - 6000 L/H",
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": true
  },
  {
    "id": "jy-02",
    "name": "Aquarium Surface Skimmer JY-02",
    "brand": "SUNSUN",
    "model": "JY-02",
    "category": "Pumps & Special Equipment",
    "categorySlug": "pumps-special-equipment",
    "description": "High performance Aquarium Surface Skimmer JY-02 with rated flow rate of 300 L/H. Engineered for dependable filtration, optimal circulation and quiet operation. Pan India delivery available from SwimWithUs Aquatics.",
    "specifications": {
      "Flow Rate": "300 L/H",
      "Function": "Eliminates Surface Oil Film & Floating Debris"
    },
    "flowRate": "300 L/H",
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": true
  },
  {
    "id": "aq-cool-fan",
    "name": "Aquarium Multi-Speed Cooling Fan",
    "brand": "SwimWithUs",
    "model": "AQ-COOL-FAN",
    "category": "Pumps & Special Equipment",
    "categorySlug": "pumps-special-equipment",
    "description": "Genuine SwimWithUs Aquarium Multi-Speed Cooling Fan offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Cooling": "Reduces Water Temperature by 2°C - 4°C",
      "Clamp": "Adjustable Glass Rim Mount"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "uv-sterilizer",
    "name": "In-line Submersible UV Sterilizer Clarifier",
    "brand": "SwimWithUs",
    "model": "UV-STERILIZER",
    "category": "Pumps & Special Equipment",
    "categorySlug": "pumps-special-equipment",
    "description": "Genuine SwimWithUs In-line Submersible UV Sterilizer Clarifier offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "UV Tube": "Internal Quartz Protected Bulb",
      "Effect": "Cures Green Water & Destroys Free-Floating Pathogens"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "aqua-tool-5in1",
    "name": "Stainless Steel Aquascaping Tongs & Scissors Kit (5-in-1)",
    "brand": "SwimWithUs",
    "model": "AQUA-TOOL-5IN1",
    "category": "Other Aquarium Accessories",
    "categorySlug": "other-aquarium-accessories",
    "description": "Genuine SwimWithUs Stainless Steel Aquascaping Tongs & Scissors Kit (5-in-1) offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Material": "Forged Surgical Stainless Steel with Anti-Rust Coating",
      "Contents": "Straight Tweezer, Curved Tweezer, Wave Scissors, Straight Scissors, Substrate Spatula"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": true
  },
  {
    "id": "aq-poster-2ft",
    "name": "Double-Sided HD Aquarium Background Poster (2 ft)",
    "brand": "SwimWithUs",
    "model": "AQ-POSTER-2FT",
    "category": "Other Aquarium Accessories",
    "categorySlug": "other-aquarium-accessories",
    "description": "Genuine SwimWithUs Double-Sided HD Aquarium Background Poster (2 ft) offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Material": "Thick Waterproof Vinyl Film",
      "Styles": "Deep Ocean Blue / Lush Aquatic Scape"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "suct-clips-10p",
    "name": "Heavy Duty Airline Suction Cup Clips (Pack of 10)",
    "brand": "SwimWithUs",
    "model": "SUCT-CLIPS-10P",
    "category": "Other Aquarium Accessories",
    "categorySlug": "other-aquarium-accessories",
    "description": "Genuine SwimWithUs Heavy Duty Airline Suction Cup Clips (Pack of 10) offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Pack Size": "10 Clips",
      "Fit": "Standard 4 mm to 6 mm Tubing"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "mag-scraper-flt",
    "name": "Magnetic Floating Glass Algae Scraper",
    "brand": "SwimWithUs",
    "model": "MAG-SCRAPER-FLT",
    "category": "Other Aquarium Accessories",
    "categorySlug": "other-aquarium-accessories",
    "description": "Genuine SwimWithUs Magnetic Floating Glass Algae Scraper offering proven performance for freshwater and planted aquariums. Sourced directly from verified distributors by SwimWithUs Aquatics. Pan India shipping available.",
    "specifications": {
      "Floating": "Floats to surface if separated from outer handle"
    },
    "flowRate": null,
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": true
  },
  {
    "id": "wp-3200",
    "name": "SOBO WP-3200 Submersible Water Pump – 1200 L/H",
    "brand": "SOBO",
    "model": "WP-3200",
    "category": "Submersible Water Pumps",
    "categorySlug": "submersible-water-pumps",
    "description": "High performance SOBO WP-3200 Submersible Water Pump – 1200 L/H with rated flow rate of 1200 L/H. Engineered for dependable filtration, optimal circulation and quiet operation. Pan India delivery available from SwimWithUs Aquatics.",
    "specifications": {
      "Flow Rate": "1200 L/H",
      "Power": "Standard Electric Submersible",
      "Application": "Sumps, Fountains & Filtration"
    },
    "flowRate": "1200 L/H",
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": true
  },
  {
    "id": "wp-3550",
    "name": "SOBO WP-3550 Submersible Water Pump – 2800 L/H",
    "brand": "SOBO",
    "model": "WP-3550",
    "category": "Submersible Water Pumps",
    "categorySlug": "submersible-water-pumps",
    "description": "High performance SOBO WP-3550 Submersible Water Pump – 2800 L/H with rated flow rate of 2800 L/H. Engineered for dependable filtration, optimal circulation and quiet operation. Pan India delivery available from SwimWithUs Aquatics.",
    "specifications": {
      "Flow Rate": "2800 L/H",
      "Application": "Heavy Flow Sump Return & Water Circulation"
    },
    "flowRate": "2800 L/H",
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  },
  {
    "id": "wp-4000",
    "name": "SOBO WP-4000 Submersible Water Pump – 3000 L/H",
    "brand": "SOBO",
    "model": "WP-4000",
    "category": "Submersible Water Pumps",
    "categorySlug": "submersible-water-pumps",
    "description": "High performance SOBO WP-4000 Submersible Water Pump – 3000 L/H with rated flow rate of 3000 L/H. Engineered for dependable filtration, optimal circulation and quiet operation. Pan India delivery available from SwimWithUs Aquatics.",
    "specifications": {
      "Flow Rate": "3000 L/H",
      "Application": "Large Tanks & Sump Filtration"
    },
    "flowRate": "3000 L/H",
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": true
  },
  {
    "id": "mj-sub-1500",
    "name": "Minjiang Submersible Water Pump – 1500 L/H",
    "brand": "Minjiang",
    "model": "MJ-SUB-1500",
    "category": "Submersible Water Pumps",
    "categorySlug": "submersible-water-pumps",
    "description": "High performance Minjiang Submersible Water Pump – 1500 L/H with rated flow rate of 1500 L/H. Engineered for dependable filtration, optimal circulation and quiet operation. Pan India delivery available from SwimWithUs Aquatics.",
    "specifications": {
      "Flow Rate": "1500 L/H",
      "Brand": "Minjiang"
    },
    "flowRate": "1500 L/H",
    "price": null,
    "images": [
      "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
    ],
    "availability": "In Stock",
    "featured": false
  }
];

// Utility helper functions
function getProductById(id) {
  if (!id) return null;
  return PRODUCTS_DATA.find(p => p.id.toLowerCase() === id.toLowerCase()) || null;
}

function getProductsByCategory(slug) {
  if (!slug || slug === 'all') return PRODUCTS_DATA;
  return PRODUCTS_DATA.filter(p => p.categorySlug === slug);
}

function getFeaturedProducts(limit = 8) {
  return PRODUCTS_DATA.filter(p => p.featured).slice(0, limit);
}

function getAllBrands() {
  const brands = new Set();
  PRODUCTS_DATA.forEach(p => {
    if (p.brand) brands.add(p.brand);
  });
  return Array.from(brands).sort();
}

// Export for module systems or attach to window for vanilla browser use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { BUSINESS_INFO, CATEGORIES_DATA, PRODUCTS_DATA, getProductById, getProductsByCategory, getFeaturedProducts, getAllBrands };
} else {
  window.BUSINESS_INFO = BUSINESS_INFO;
  window.CATEGORIES_DATA = CATEGORIES_DATA;
  window.PRODUCTS_DATA = PRODUCTS_DATA;
  window.getProductById = getProductById;
  window.getProductsByCategory = getProductsByCategory;
  window.getFeaturedProducts = getFeaturedProducts;
  window.getAllBrands = getAllBrands;
}

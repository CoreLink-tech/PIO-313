/* ==========================================================================
   DATA — every station's full lesson content and quiz bank, drawn from the
   D/PIO 313 Environmental Physiology course notes (DELSU, 2026 session,
   Mr Shalom & Dr Ovili). Nothing here is a summary stand-in: each lesson is
   written to be read start to finish by someone who has never touched the
   subject before.

   PASS_THRESHOLD is the fraction of quiz points needed to unlock the next
   station (60%, per spec).
   ========================================================================== */

const PASS_THRESHOLD = 0.6;

const STATIONS = [

  // ============================================================
  // STATION 1 — FOUNDATIONS
  // ============================================================
  {
    id: "foundations",
    order: 1,
    title: "Foundations: Climate, Geography & Human Adaptation",
    tagline: "Why your body is shaped by the ground you stand on",
    icon: "foundations",
    lesson: {
      intro: [
        `Environmental physiology is the study of how the outside world, the air you breathe, the heat you feel, the water around you, shapes the way your body works. Before any of the deeper material in this course makes sense, you need to see the basic link this whole subject rests on: your environment is not separate from your health, it is one of the things that builds your health.`,
        `A good place to start is a question that sounds almost silly: is the earth flat or spherical? We walk on what feels like flat ground every day, so the question is not as obvious as it seems. One clue comes from travel: a plane that keeps flying in one direction eventually comes back to where it started, it does not fly off an edge. Another clue is that different regions of the earth experience daytime and nighttime at different times, which only makes sense if the earth is curved. For the purposes of this course, though, what matters more than the geometry is what that curve does: it creates two broad climate zones, a colder region and a hotter region, split roughly around the equator.`
      ],
      sections: [
        {
          heading: "Two extremes, one planet",
          body: [
            `Think about the Sahara Desert and Antarctica. The Sahara is hot and dry. Antarctica is bitterly cold and covered in ice. These are two of the most extreme environments on earth, and yet both are full of living things. The Sahara has cactus plants, camels, scorpions, and snakes. Antarctica has polar bears and seals. Life did not just survive in these places by accident, it adapted specific features that make survival possible in that specific extreme.`,
            `Take the camel. It stores large amounts of food as fat in its hump, so it can go long stretches without eating. It can retain a lot of water in its body, so it goes long stretches without drinking. Its hooves are a unique shape that spreads its weight and dissipates the sand's heat, so it does not sink into loose, hot sand and does not get burned by walking on it. Every one of these features exists because the environment demanded it. An animal without them would not have survived long enough in that climate to reproduce.`
          ]
        },
        {
          heading: "Human adaptation: melanin and nose shape",
          body: [
            `The same logic applies to humans. People whose ancestors lived for many generations in hot, sun-heavy regions like sub-Saharan Africa developed higher levels of melanin, the pigment in skin that determines how dark or light it is. Melanin absorbs and blocks ultraviolet radiation from the sun, which protects the deeper layers of skin from damage. This is why skin color varies across human populations: it is not random, it tracks how much protection from intense sun a population's ancestors needed.`,
            `Skin is not the only feature shaped this way. People from hotter regions also tend to have wider nostrils, and people from colder regions tend to have narrower ones. This is physiology working to keep the body's internal temperature balanced. A wider nostril allows more airflow, which helps the body lose heat faster, useful when you are trying to stay cool. A narrower nostril slows and warms incoming air before it reaches the lungs, useful when the air outside is cold and you need to conserve body heat rather than lose it.`,
            `You can see the same principle in machines. An airplane engine, a train engine, or a heavy truck engine that runs hot and burns a lot of fuel needs a wide exhaust pipe to release that heat efficiently. The body works on a comparable logic: a structure that needs to release more heat is built wider to do it faster. This is why, as the notes put it plainly, the black man's nose tends to be wider than in white populations, because bodies adapted in hot regions are built to lose heat efficiently, while bodies adapted in cold regions are built to conserve it.`,
            `This same heat-management logic extends beyond the body into the buildings people construct. Populations in hot regions traditionally build houses with more open, spacious rooms that let heat escape and air circulate. Populations in cold regions build more enclosed structures with small vents, designed to trap and hold warmth rather than lose it. Even water loss follows the same pattern: people in cold climates tend to lose more water through urination because sweating is less useful when it is cold, while people in hot climates sweat heavily as their main way of shedding excess heat.`
          ]
        },
        {
          heading: "When environments break down: desertification",
          body: [
            `Extreme environments can be managed so that more life, including human life, can thrive comfortably in them. Dubai is a real example: a naturally dry, hot environment that has been engineered and managed so that a large population can live there comfortably. But there is a destructive version of environmental extremity too, and that is desertification, the process by which land that was once fertile or livable turns into desert-like conditions.`,
            `Heat waves are one driver of desertification. So are anthropogenic factors, meaning factors caused by human activity, such as industrial smoke and vehicle exhaust, which can raise the local temperature and degrade the land if they are not managed. Lake Chad is a real, well-documented example: it has progressively shrunk over the years due to a mix of climate pressures and human water use, and its shrinking is a case of desertification in progress.`,
            `A key part of this process is the loss of what the notes call "desert-holders," meaning trees and other organisms that keep soil stable, keep it cooler, and help sustain other forms of life around them. When human activity clears these organisms away, faster than they can regrow, the desert has fewer barriers stopping it from encroaching further onto land that used to support life. Desertification is not just a distant environmental issue, it is a direct demonstration of the course's core idea: what happens to the environment happens to the humans depending on it.`
          ]
        },
        {
          heading: "Getting your water geography right: oceans, seas, rivers, lakes",
          body: [
            `Before moving forward, it helps to be precise about a few terms that get used loosely in everyday speech. The difference between an ocean, a sea, a river, and a lake is not about size, it is about role and origin. Oceans are the largest bodies of water and, together with land, make up the two basic divisions of the earth's surface. Oceans are the biggest reservoir of water on the planet and effectively originate from the crust of the earth itself.`,
            `Seas are best understood as washoff from the ocean onto land, smaller bodies connected to the ocean. Rivers are tributaries, meaning flowing channels of water, that carry water off the land and empty it into seas and oceans. Each of these plays a distinct role in the water cycle you will meet properly in the next station, and getting the vocabulary right now will make that next lesson much easier to follow.`
          ]
        }
      ],
      examples: [
        {
          title: "Camel adaptation",
          text: `Fat storage in the hump, high water retention, and heat-dissipating hoof shape all work together so the camel survives extreme desert heat without shade or standing water.`
        },
        {
          title: "Melanin and UV protection",
          text: `Populations with ancestral exposure to intense, constant sunlight developed higher melanin levels, which block more ultraviolet radiation and protect the skin's deeper layers from sun damage.`
        },
        {
          title: "Nostril width and thermoregulation",
          text: `Wider nostrils in populations from hot regions support faster heat loss through breathing; narrower nostrils in populations from cold regions warm incoming air and conserve body heat.`
        },
        {
          title: "Dubai vs. Lake Chad",
          text: `Dubai shows a hot, dry environment successfully engineered for comfortable large-scale human life. Lake Chad shows the opposite: an environment that has progressively degraded through desertification, driven partly by human activity.`
        }
      ],
      whyMatters: [
        `This station sets up the whole course. If you take away one idea, it should be this: the human body is not a fixed, generic machine, it is a product of the environment it evolved in, and it keeps responding to environmental pressure throughout life, not just across generations. When you study environmental physiology, you are really studying a two-way relationship: the environment shapes the body, and human activity shapes the environment right back, for better or for worse.`,
        `This matters clinically too. Understanding that traits like skin pigmentation and nasal structure are functional adaptations, not arbitrary differences, is foundational to practicing medicine and public health without bias, and to correctly interpreting how different populations respond to heat, cold, and other environmental stress.`
      ],
      glossary: [
        { term: "Environmental physiology", def: "The study of how external environmental factors (heat, cold, air, water, and so on) affect the body's internal functioning." },
        { term: "Melanin", def: "The pigment in skin that determines its color and absorbs ultraviolet radiation, protecting deeper skin layers from sun damage." },
        { term: "Thermoregulation", def: "The body's process of maintaining a stable internal temperature despite changes in the external environment." },
        { term: "Desertification", def: "The process by which fertile or livable land degrades into desert-like conditions, often driven by climate pressure and human activity." },
        { term: "Anthropogenic", def: "Caused by human activity, as opposed to occurring naturally." },
        { term: "Desert-holders", def: "Trees and other organisms that stabilize soil, moderate local temperature, and help sustain other life, whose loss accelerates desertification." },
        { term: "Ocean", def: "The largest body of water on earth, the biggest water reservoir, originating from the earth's crust." },
        { term: "Sea", def: "A body of water formed as washoff from the ocean onto land." },
        { term: "River", def: "A flowing tributary that carries water off the land into seas and oceans." }
      ]
    },
    quiz: {
      questions: [
        { type: "mcq", prompt: "What is the main reason given for why populations in sub-Saharan regions developed more melanin?", options: ["It made their skin waterproof", "It absorbs and blocks ultraviolet radiation from intense sun exposure", "It helps the body store more fat", "It was passed down randomly with no functional cause"], answerIndex: 1, explanation: "Melanin absorbs and blocks UV radiation, protecting deeper skin layers from sun damage in regions with intense, constant sunlight." },
        { type: "mcq", prompt: "Why do people from hotter regions tend to have wider nostrils?", options: ["Wider nostrils look better in hot climates", "It has no physiological function, it is purely cosmetic", "Wider nostrils allow faster airflow, helping the body lose heat more efficiently", "It reduces the amount of air a person can breathe in"], answerIndex: 2, explanation: "Wider nostrils increase airflow, which helps the body dissipate heat faster, the same logic as a wide exhaust pipe on an engine that runs hot." },
        { type: "mcq", prompt: "Which of these is NOT one of the camel's adaptations described in the lesson?", options: ["Storing large amounts of food as fat in its hump", "Uniquely shaped hooves that dissipate the sand's heat", "Retaining plenty of water in its body", "Producing extra melanin to survive desert sun"], answerIndex: 3, explanation: "The camel's adaptations covered were fat storage, water retention, and hoof shape. Melanin production was discussed in the context of human skin, not camels." },
        { type: "mcq", prompt: "What best distinguishes an ocean from a sea?", options: ["Oceans are always colder than seas", "Oceans are the biggest water reservoir originating from the earth's crust; seas are washoff from the ocean onto land", "A sea is simply a very large ocean", "There is no real difference, the terms are interchangeable"], answerIndex: 1, explanation: "Oceans are the largest reservoirs of water, originating from the earth's crust. Seas are smaller bodies formed as washoff from the ocean onto land." },
        { type: "mcq", prompt: "According to the lesson, what is desertification?", options: ["The natural formation of new deserts through plate tectonics", "The process by which fertile or livable land degrades into desert-like conditions", "The process of turning desert sand into farmland", "A term for any region with low rainfall"], answerIndex: 1, explanation: "Desertification is land degrading toward desert-like conditions, often driven by heat waves and anthropogenic (human-caused) factors." },
        { type: "mcq", prompt: "What real example does the lesson give of desertification in progress?", options: ["The Sahara Desert expanding into the ocean", "Lake Chad progressively shrinking over the years", "Antarctica's ice sheets melting", "Dubai's population growth"], answerIndex: 1, explanation: "Lake Chad is given as a documented example of desertification, having shrunk progressively due to climate pressure and human water use." },
        { type: "mcq", prompt: "Why do houses in traditionally hot regions tend to have more open, spacious rooms?", options: ["Because building materials are cheaper in hot regions", "To let heat escape and encourage air circulation, aiding heat loss", "Because open rooms are a cultural preference with no environmental basis", "To reduce construction time"], answerIndex: 1, explanation: "Open, spacious rooms let heat escape and circulate, matching a body and environment that needs to shed heat efficiently." },
        { type: "short", prompt: "In one or two sentences, explain what a 'desert-holder' is and why losing them speeds up desertification.", keywords: ["tree", "organism", "stabiliz", "soil", "temperature", "sustain"], explanation: "Desert-holders are trees and other organisms that stabilize soil, help moderate local temperature, and support other life. When human activity removes them faster than they regrow, there are fewer natural barriers stopping the desert from encroaching further onto once-livable land." },
        { type: "short", prompt: "Give the term used for factors caused by human activity (as opposed to naturally occurring ones).", keywords: ["anthropogenic"], explanation: "Anthropogenic describes anything caused by human activity, such as industrial smoke or vehicle exhaust contributing to desertification." },
        { type: "short", prompt: "In your own words, explain why narrower nostrils are an advantage for populations from cold regions.", keywords: ["warm", "air", "conserve", "heat", "cold"], explanation: "Narrower nostrils slow and warm incoming air before it reaches the lungs, helping the body conserve heat rather than lose it, which matters in cold climates." }
      ]
    }
  },

  // ============================================================
  // STATION 2 — ENVIRONMENTAL HEALTH & CYCLES
  // ============================================================
  {
    id: "cycles",
    order: 2,
    title: "Environmental Health & Natural Cycles",
    tagline: "Everything you release comes back to your dining table",
    icon: "cycles",
    lesson: {
      intro: [
        `Environmental health looks at health as having two connected halves: the outer half, the environment, and the inner half, the health of the person living in it. The central idea holding this whole station together is simple to state but easy to underestimate: whatever enters the environment eventually ends up on the dining table. Nothing you release into the world around you truly disappears, it moves through a system and, sooner or later, comes back to a human being, often to you.`,
        `Take a concrete case. Anything that enters a body of water enters the fish living in that water, and those fish are eventually consumed by people. Or take air: burning fossil fuels sends pollutants up into the sky, and those same pollutants fall back down to earth through rain. Environmental health, at its core, exposes how what we release into the environment comes back to us, whether we intended it to or not.`
      ],
      sections: [
        {
          heading: "Why everything in nature is a cycle",
          body: [
            `Everything in nature, and even a lot of what is not strictly natural, follows a cycle, a repeating loop where something leaves a starting point and eventually returns to it. Every one of these cycles involves at least three connected elements working together. The clearest example is the water cycle: the ocean and sea act as the source of water, the sun evaporates that water into the air, clouds form as the water vapor condenses, and then the ground receives the water back down as rain. Water leaves the ocean and eventually returns to the ocean, completing a full loop.`,
            `Because humans are consumers and disposers within these cycles, whatever we dispose of or release into the environment must, by the logic of a cycle, eventually come back to us. If something we release does not eventually return to the main source, then by definition it was never part of a real cycle, it was simply an unmanaged discharge. This is why life itself depends on functioning cycles: working and sleeping, plants growing and dying and growing again to provide food, all of it is cyclic, all of it repeats, and our survival depends on those repeating processes continuing to function properly.`
          ]
        },
        {
          heading: "Your environment as a readable sign of your health",
          body: [
            `Because health and environment are so tightly linked, you can often tell whether someone is sick, or is likely to become sick, simply by looking closely at their environment. This is sometimes summarized as "show me your environment, and I will tell you your health status." Environmental health is, formally, a subset of public health, and it sits alongside the wider set of concerns captured in the Sustainable Development Goals (SDGs), the United Nations' framework of development targets aimed at improving human and environmental wellbeing globally.`,
            `Beyond the strictly physiological angle, environmental health also teaches personal responsibility. The impact you make on your own environment is a visible reflection of your thinking and habits. How consistently you maintain your surroundings, how well you use the resources and opportunities available to you rather than making excuses, these are all, in a real sense, readable signs of a person's mindset and discipline, not just their circumstances.`,
            `There is also a natural principle worth noting: environments respond to what is encouraged in them. Birds nest in auditoriums because trees nearby attract them. In the same way, dirtiness attracts pests and disease-carrying vectors such as mosquitoes, flies, and cockroaches. A poorly kept environment does not just look bad, it actively invites the organisms that spread disease.`
          ]
        },
        {
          heading: "Water and sanitation",
          body: [
            `Contaminated water is a major, direct cause of disease. It causes bloodborne diseases like cholera, and it is linked to skin-associated diseases and irritations such as ringworm, eczema, and general skin breakouts. The core management strategy against this is proper waste disposal, meaning solid and liquid waste is handled through methods like incineration (controlled burning), burying, or otherwise keeping sewage and other waste away from drinking water sources. The goal is always the same: stop waste from crossing paths with water that people will eventually drink.`
          ]
        },
        {
          heading: "Food hygiene and safety",
          body: [
            `Food hygiene and safety involves monitoring and evaluating food practices to make sure the environment food is produced in is safe. In Nigeria, NAFDAC (the National Agency for Food and Drug Administration and Control) is the major regulatory agency responsible for this kind of monitoring, covering anything that is ingested, mainly food and drugs. Importantly, NAFDAC's approval is not based only on the quality of the final product, it also considers the conditions under which that product was produced.`,
            `NAFDAC does not, however, monitor domestic cooking in individual households. That responsibility sits at the local level, in the hands of the individual, to make sure safety practices are followed when preparing food for consumption. As a side note, NAFDAC typically only becomes formally involved once a food or drug product is trademarked, is expanding beyond a single locality, or is being packaged for mass distribution, not for small-scale or purely domestic food preparation.`
          ]
        }
      ],
      examples: [
        {
          title: "Fish and water contamination",
          text: `Anything that enters a body of water enters the fish living there, and those fish are eventually eaten by people, a direct, physical example of environmental contamination returning to the dining table.`
        },
        {
          title: "Fossil fuels and rainfall",
          text: `Burning fossil fuels releases pollutants into the sky. Those pollutants do not vanish, they eventually fall back to earth through rain, completing the loop back to humans and the environment.`
        },
        {
          title: "The water cycle",
          text: `Ocean and sea (source) → sun (evaporation) → clouds (condensation) → ground (precipitation) → back to the ocean. A complete, repeating loop involving at least three interacting elements.`
        },
        {
          title: "NAFDAC's scope",
          text: `NAFDAC regulates food and drug production conditions, but only formally engages once a product is trademarked, distributed beyond a locality, or mass-packaged, leaving domestic cooking safety as an individual responsibility.`
        }
      ],
      whyMatters: [
        `This station's real-world relevance is direct and personal: every decision about waste disposal, water use, and food handling in your own environment eventually affects your own body and the people around you, because the system is a cycle, not a one-way exit. Understanding this reframes environmental carelessness as something closer to self-harm delayed in time.`,
        `Clinically and in public health work, recognizing water and food as the two most common entry points for environmental contaminants gives you a practical starting point when investigating unexplained illness patterns in a community, especially bloodborne and skin-related conditions.`
      ],
      glossary: [
        { term: "Cycle", def: "A repeating loop in nature where something leaves a source and eventually returns to it, generally involving at least three connected elements." },
        { term: "Water cycle", def: "The repeating movement of water from ocean/sea, through evaporation by the sun, to clouds, to precipitation on the ground, and back to the ocean." },
        { term: "Sustainable Development Goals (SDGs)", def: "A United Nations framework of global development targets aimed at improving human and environmental wellbeing." },
        { term: "NAFDAC", def: "Nigeria's National Agency for Food and Drug Administration and Control, responsible for monitoring the safety of food and drug production, including the conditions of production, not just the final product." },
        { term: "Vector", def: "An organism, such as a mosquito, fly, or cockroach, that can carry and transmit disease-causing agents to humans." }
      ]
    },
    quiz: {
      questions: [
        { type: "mcq", prompt: "What is the central idea behind the phrase 'whatever enters the environment ends up on the dining table'?", options: ["Food always tastes like the environment it was grown in", "Substances released into the environment eventually cycle back to affect humans, often through food or water", "Restaurants should only serve locally grown food", "Dining tables are contaminated more than other surfaces"], answerIndex: 1, explanation: "It captures the core idea that nothing released into the environment disappears; it moves through natural cycles and eventually returns to affect human health, often via food or water." },
        { type: "mcq", prompt: "In the water cycle described in the lesson, which of the following is NOT one of its core elements?", options: ["The ocean and sea as the water source", "The sun, which evaporates water", "Clouds, which form from condensed water", "Underground mining activity"], answerIndex: 3, explanation: "The water cycle described involves the ocean/sea, the sun, clouds, and the ground receiving precipitation, not mining activity." },
        { type: "mcq", prompt: "According to the lesson, what does NAFDAC's approval of a food or drug product actually assess?", options: ["Only the taste and packaging design", "Only the final product's quality", "Both the final product's quality and the conditions under which it was produced", "Only whether the product is trademarked"], answerIndex: 2, explanation: "NAFDAC's approval considers not just the final product's quality but also the conditions under which it was produced." },
        { type: "mcq", prompt: "Who is responsible for food safety in domestic, at-home cooking, according to the lesson?", options: ["NAFDAC directly monitors all domestic cooking", "The local government exclusively", "The individual, since NAFDAC does not monitor domestic cooking", "No one; domestic cooking has no safety standard"], answerIndex: 2, explanation: "NAFDAC does not monitor domestic cooking, so that responsibility falls to the individual preparing the food." },
        { type: "mcq", prompt: "What diseases are specifically linked to contaminated water in the lesson?", options: ["Only respiratory diseases like asthma", "Bloodborne diseases like cholera, and skin diseases like ringworm and eczema", "Only mental health conditions", "Only diseases affecting the eyes"], answerIndex: 1, explanation: "Contaminated water is linked to bloodborne diseases like cholera and skin-associated diseases and irritations like ringworm and eczema." },
        { type: "mcq", prompt: "Why does dirtiness in an environment attract pests like mosquitoes and cockroaches?", options: ["Pests are randomly distributed regardless of cleanliness", "Environments respond to what is encouraged in them; dirtiness creates conditions pests thrive in", "Pests are attracted to the color of dirt", "This is a myth with no physiological basis"], answerIndex: 1, explanation: "The lesson frames this as environments responding to what is encouraged in them, dirtiness creates the conditions vectors and pests need to thrive." },
        { type: "short", prompt: "Name the three (or more) core elements of the water cycle described in the lesson.", keywords: ["ocean", "sea", "sun", "evaporat", "cloud", "ground", "rain"], explanation: "The ocean/sea as the source, the sun which evaporates water, clouds formed from condensed water, and the ground which receives precipitation, completing the loop back to the ocean." },
        { type: "short", prompt: "In your own words, explain when NAFDAC typically becomes formally involved with a food or drug product.", keywords: ["trademark", "distribut", "locality", "mass", "packag"], explanation: "NAFDAC typically gets formally involved once a product is trademarked, expands beyond a single locality, or is packaged for mass distribution, not for small-scale domestic preparation." },
        { type: "short", prompt: "What is a 'vector' in the context of environmental health, and give one example from the lesson.", keywords: ["organism", "carr", "transmit", "disease", "mosquito", "fly", "cockroach"], explanation: "A vector is an organism that carries and transmits disease-causing agents to humans; examples given include mosquitoes, flies, and cockroaches." },
        { type: "mcq", prompt: "Environmental health is described in the lesson as a subset of what broader field?", options: ["Veterinary science", "Public health", "Meteorology", "Agricultural economics"], answerIndex: 1, explanation: "Environmental health is described as a subset of public health, alongside broader frameworks like the SDGs." }
      ]
    }
  },

  // ============================================================
  // STATION 3 — HOUSING, VECTOR CONTROL & POLLUTION
  // ============================================================
  {
    id: "housing",
    order: 3,
    title: "Housing, Vector Control & Pollution",
    tagline: "How the built environment decides who gets sick",
    icon: "housing",
    lesson: {
      intro: [
        `This station covers three subjects that sound separate but are really one continuous idea: the way spaces are built, the way disease-carrying organisms are controlled, and the way pollution is defined all come down to how well an environment is managed for the humans living in it. Bad planning in any one of these areas quietly raises the risk of disease for everyone in that space, often without anyone realizing why.`
      ],
      sections: [
        {
          heading: "Housing and urban planning",
          body: [
            `Proper housing and urban planning directly affects health indices and reduces the risk of disasters like flooding. Planning has to take into account how a space will actually be used, not just how it looks. A clear example is seating capacity in auditoriums and the placement of windows: the bigger the expected audience, the more seating capacity is needed, and the more spacious the building has to be. A bigger, more crowded space also has a higher risk of congestion and heat build-up, so it needs its windows placed higher up.`,
            `This window placement rule exists because heat naturally rises, while cooler air sinks and moves in to replace the hot air that has risen and escaped. Placing vents and windows high up in a large or crowded building lets accumulated heat escape efficiently. This is a case of ordinary physics being applied directly to building design for the sake of comfort and health, and it is why warehouse vents are typically placed close to the roof: hot air collects there and needs an exit. In environments that are naturally cooler, buildings are more often constructed like basements, since retaining heat rather than releasing it is the priority there.`
          ]
        },
        {
          heading: "Vector control",
          body: [
            `A vector, introduced in the last station, is an organism like a mosquito that can transmit disease. Controlling vectors matters enormously for public health, but how you control them matters too. Natural methods of vector control are safer than chemical ones, because chemical methods are often quite toxic to human health as well, not just to the pest. If a chemical is toxic enough to kill an insect, there is good reason to ask what stops it from also being toxic to humans, given how much biological machinery insects and humans actually share at the cellular level.`,
            `Some chemical vector-control methods are, specifically, endocrine disruptors, meaning they interfere with the hormone systems of the organisms they are meant to kill, and that same disruptive mechanism does not switch off just because the exposed body happens to be human rather than insect. This connects directly to endocrine disrupting compounds, a full topic in its own right, covered later in this course.`
          ]
        },
        {
          heading: "Understanding pollution properly",
          body: [
            `Here is a detail that trips a lot of people up: a pollutant is not necessarily a bad thing in itself. A smartphone is not a pollutant sitting on a table. But drop that same smartphone into a mug of clean, drinkable water, and it has now become a pollutant in that context, because it does not belong there and it degrades the water's usefulness. Banana peels dropped on farmland are a useful source of manure. The same banana peels dropped on a paved road are a hazard that can make someone slip and fall.`,
            `So pollution is defined by context, not by the substance alone. A pollutant is something that has left its natural or intended place and, by being somewhere it does not belong, starts causing harmful effects in the environment it has entered. The definition of pollution is always relative to the specific environment a substance has been introduced into.`
          ]
        },
        {
          heading: "Types of pollution: noise, particulate matter, heavy metals",
          body: [
            `Noise pollution deserves a specific note: it is only possible because of air, or more precisely, because of what air actually is physically, a medium or conduit that allows a series of vibrations to travel. Sound needs a medium with room for those vibrations to move through, which is why noise pollution cannot exist in a true vacuum.`,
            `Particulate matter refers to particles that are not simply dust, they are far finer than that, light enough to fly and spread through the air like an aerosol. Particulate matter is categorized by size, commonly labeled PM 2.5 and PM 10 (referring to particle diameter in micrometers). Their real danger is how easily their small size lets them penetrate deep into body tissue and travel through the airways into the lungs.`,
            `Heavy metals are another major pollutant category, including mercury, cadmium, arsenic, nickel, and lead. Heavy metals are dangerous because the body cannot break them down or use them up the way it processes normal nutrients, so they accumulate. This can cause neurodegenerative diseases, because heavy metals can block vital sites in the brain or attach to locations where they interfere with normal brain function. Heavy metals also bind to receptor binding sites in tissue, physically preventing the tissue's normal, correct substrate from binding there instead. When this happens, tissue cells can misread instructions, shut down, bypass regulatory processes, grow abnormally without stopping (as in cancer), or simply fail to develop properly.`
          ]
        }
      ],
      examples: [
        {
          title: "Auditorium windows",
          text: `Windows placed high up let accumulated heat rise and escape, while cooler air sinks in to replace it, a direct application of thermal physics to reduce congestion and heat build-up in crowded spaces.`
        },
        {
          title: "Smartphone vs. water",
          text: `A smartphone is not a pollutant on its own. Dropped into a mug of clean drinking water, it becomes one, because it has entered a context where it does not belong and causes harm.`
        },
        {
          title: "Banana peel: manure vs. hazard",
          text: `On farmland, a banana peel is useful manure. On a paved road, the same banana peel is a slipping hazard, showing that pollution is defined by context, not by the substance itself.`
        },
        {
          title: "Chemical vector control as an EDC risk",
          text: `Some chemical mosquito and pest killers work by disrupting the pest's endocrine (hormone) system, the same disruptive mechanism that can affect human hormones on exposure.`
        }
      ],
      whyMatters: [
        `Good building design is preventive medicine you rarely see credited as medicine. Window placement, ventilation, and spacing decisions made by architects and planners directly change disease risk, heat stress, and congestion-related harm for everyone who uses that space, long before any doctor gets involved.`,
        `Understanding pollution as context-dependent, rather than substance-dependent, changes how you assess risk in the field: the question is never simply "is this substance dangerous," it is "is this substance in a place where it can cause harm right now."`
      ],
      glossary: [
        { term: "Vector control", def: "Methods used to manage or eliminate organisms, like mosquitoes, that transmit disease to humans." },
        { term: "Endocrine disruptor", def: "A substance that interferes with the normal functioning of hormone systems." },
        { term: "Pollutant", def: "A substance that has left its natural or intended place and, by being where it does not belong, causes harmful effects in that environment." },
        { term: "Noise pollution", def: "Harmful or disruptive sound, made possible by air acting as a medium through which sound vibrations travel." },
        { term: "Particulate matter (PM)", def: "Very fine airborne particles, categorized by size (e.g. PM 2.5, PM 10), small enough to penetrate deep into lung tissue." },
        { term: "Heavy metals", def: "Metallic elements such as mercury, cadmium, arsenic, nickel, and lead that the body cannot break down, so they accumulate and can damage tissue, particularly the nervous system." }
      ]
    },
    quiz: {
      questions: [
        { type: "mcq", prompt: "Why are windows and vents placed high up in large, crowded buildings like warehouses and auditoriums?", options: ["It looks more attractive architecturally", "Heat rises and needs a high exit point, while cooler air sinks to replace it", "It is cheaper to install windows near the roof", "It has no functional reason, it is purely traditional"], answerIndex: 1, explanation: "Heat naturally rises, so placing vents high up lets accumulated heat escape efficiently while cooler air sinks in to replace it, reducing congestion and heat build-up." },
        { type: "mcq", prompt: "According to the lesson, what makes something a pollutant?", options: ["Being toxic at the molecular level, regardless of location", "Being in a context where it does not belong and causes harm there", "Being man-made rather than natural", "Being visible to the human eye"], answerIndex: 1, explanation: "Pollution is defined by context: a substance becomes a pollutant when it leaves its natural or intended place and causes harm in the environment it enters." },
        { type: "mcq", prompt: "Why is noise pollution only possible because of air?", options: ["Air amplifies all sound automatically", "Air acts as a medium that allows sound vibrations to travel", "Air is the only gas that carries sound", "This is a myth, noise can travel through a vacuum"], answerIndex: 1, explanation: "Sound needs a medium with room for vibrations to travel through; air is that medium, without it there is no way for the noise to propagate." },
        { type: "mcq", prompt: "What makes particulate matter (PM 2.5, PM 10) especially dangerous to health?", options: ["Its strong odor causes headaches", "Its small size lets it penetrate deep into tissue and the airways", "It is always radioactive", "It only affects the skin, not internal organs"], answerIndex: 1, explanation: "Particulate matter's danger comes from its very small size, which lets it penetrate tissue and travel deep into the airways." },
        { type: "mcq", prompt: "Why can chemical vector control (like some mosquito killers) also pose a risk to humans?", options: ["Because insects and humans share no biological similarities, so this is not actually a risk", "Because some of these chemicals are endocrine disruptors that can affect human hormone systems too", "Because mosquitoes become more aggressive after exposure", "Because chemical killers are always more expensive than natural methods"], answerIndex: 1, explanation: "Some chemical vector-control agents are endocrine disruptors, meaning the same hormone-disrupting mechanism that kills the pest can also affect human hormone systems on exposure." },
        { type: "short", prompt: "Using the banana peel example, explain in your own words why pollution is context-dependent rather than substance-dependent.", keywords: ["context", "place", "farmland", "road", "belong"], explanation: "A banana peel on farmland is useful manure, but the same peel on a paved road is a hazard. The substance itself did not change, only its context did, showing pollution depends on where something is, not just what it is." },
        { type: "short", prompt: "Name at least three heavy metals mentioned in the lesson.", keywords: ["mercury", "cadmium", "arsenic", "nickel", "lead"], explanation: "The heavy metals mentioned include mercury, cadmium, arsenic, nickel, and lead." },
        { type: "short", prompt: "Explain why heavy metals can cause neurodegenerative disease.", keywords: ["accumulat", "block", "brain", "receptor", "bind"], explanation: "The body cannot break down or excrete heavy metals easily, so they accumulate and can block vital sites in the brain or bind to receptor sites meant for normal substrates, disrupting normal cell function." },
        { type: "mcq", prompt: "In cooler environments, how does the lesson say buildings are typically constructed differently?", options: ["With very high ceilings to trap cold air", "More like basements, to retain rather than release heat", "With no windows at all", "Identically to hot-climate buildings"], answerIndex: 1, explanation: "In naturally cooler environments, buildings tend to be constructed more like basements, since retaining heat is the priority rather than releasing it." }
      ]
    }
  },

  // ============================================================
  // STATION 4 — ENVIRONMENTAL EPIDEMIOLOGY
  // ============================================================
  {
    id: "epidemiology",
    order: 4,
    title: "Environmental Epidemiology",
    tagline: "Measuring how the environment writes itself into disease patterns",
    icon: "epidemiology",
    lesson: {
      intro: [
        `Epidemiology, as a field, studies the burden of disease on human health, meaning how much illness a population carries, how it spreads, and what drives it. Environmental epidemiology narrows that lens specifically onto the environment: it studies both the health problems that human activities cause in the environment, and the health burdens that the environment, in turn, causes for human activities. It is a two-way street, matching the two-way relationship you have already met in earlier stations.`,
        `Put simply: whatever affects the environment at large affects human health, and whatever humans do to their health-related behavior affects the environment right back. Demographics and statistics, taken together, form what are called health indices, measurable indicators used to assess a population's health status. Just as a doctor cannot say a person is healthy without measurements like BMI or blood pressure to base that judgment on, environmental epidemiologists cannot assess a population's environmental health status without measurable factors like air quality and water quality.`
      ],
      sections: [
        {
          heading: "The four domains of environmental exposure",
          body: [
            `Environmental epidemiologists organize the environmental factors that affect health into four broad domains. Learning these four domains gives you a mental checklist you can apply to almost any environmental health question: chemical, physical/climatic, biological, and the built and social environment.`
          ]
        },
        {
          heading: "1. Chemical factors",
          body: [
            `Air quality is judged by the concentration of particulate matter (PM 2.5 and PM 10), nitrogen dioxide (NO2), and ground-level ozone (O3), all of which affect respiratory and cardiovascular health. Water contaminants are tracked through the presence or levels of heavy metals, nitrates running off from agricultural land, and PFAs, sometimes called "forever chemicals" because they resist breaking down in the environment. Soil and food toxins include organic pollutants and pesticide residues, which accumulate as they move up the food chain from soil, to plants, to animals, to humans.`
          ]
        },
        {
          heading: "2. Physical and climatic factors",
          body: [
            `Ambient temperature is tracked through the frequency of extreme heat events and how well a given environment manages its thermal load. Ionizing and non-ionizing radiation exposure, such as UV radiation, is another physical factor. The acoustic environment matters too: environmental noise from traffic or industry acts as a stressor linked to sleep disturbance, high blood pressure (hypertension), and cognitive impairment specifically in children.`
          ]
        },
        {
          heading: "3. Biological factors",
          body: [
            `Vector density, meaning the population size of mosquitoes or ticks in an area, can be used to predict the risk of diseases like malaria, Lyme disease, or Zika. Aeroallergens, tracked through pollen counts and mold spore levels, are used to measure how climate change is affecting allergic airway diseases. Pathogen load can even be tracked through wastewater testing, for example testing sewage for viral load (as was widely done for SARS-CoV-2) to understand the hidden health status of an entire community without testing every individual person.`
          ]
        },
        {
          heading: "4. The built and social environment",
          body: [
            `Green and blue space refers to how close a population lives to parks (green space) or bodies of water (blue space). Both are protective factors, meaning their presence tends to reduce stress levels and improve mental health. Urban design and walkability, meaning how easy and safe it is to walk around a neighborhood, directly affects physical activity levels, which in turn affects obesity and metabolic health rates. Housing quality is assessed through indoor dampness, ventilation rates, and the presence of hazards like lead-based paint.`
          ]
        },
        {
          heading: "Medical rights that must be protected during testing",
          body: [
            `Whenever health tests or research are carried out on people, environmental epidemiology or otherwise, three specific rights must be respected. Every test performed on a person must have a specific, known purpose, the person tested must genuinely need it, and they must be made aware of why it is being carried out. This connects to the next station's material on research ethics.`
          ]
        }
      ],
      examples: [
        {
          title: "PFAs as 'forever chemicals'",
          text: `PFAs are water contaminants tracked as a chemical factor because they resist environmental breakdown, persisting for very long periods once they enter a water supply.`
        },
        {
          title: "Wastewater testing for SARS-CoV-2",
          text: `Testing wastewater for viral load became a real-world method during the pandemic for estimating a community's hidden infection status without testing every individual.`
        },
        {
          title: "Green/blue space as a protective factor",
          text: `Populations living closer to parks or water bodies show reduced stress levels and improved mental health outcomes, making proximity to these spaces a measurable, protective factor in the built environment.`
        },
        {
          title: "Noise as a physical stressor",
          text: `Environmental noise from traffic or industry is linked to sleep disturbance, hypertension, and cognitive impairment in children, showing a physical/climatic factor with direct measurable health consequences.`
        }
      ],
      whyMatters: [
        `Environmental epidemiology gives public health workers a structured, four-domain framework instead of a vague sense that "the environment matters." When investigating a disease cluster or planning an intervention, checking each of the four domains, chemical, physical/climatic, biological, and built/social, in turn is a practical, repeatable way to make sure nothing important gets missed.`
      ],
      glossary: [
        { term: "Epidemiology", def: "The study of how diseases are distributed in populations and what factors influence that distribution." },
        { term: "Environmental epidemiology", def: "The branch of epidemiology studying the two-way relationship between environmental factors and human health outcomes." },
        { term: "Health indices", def: "Measurable indicators (like BMI, blood pressure, or air quality) used to assess and compare health status." },
        { term: "PFAs", def: "Per- and polyfluoroalkyl substances, synthetic chemicals nicknamed 'forever chemicals' because they resist breaking down in the environment." },
        { term: "Aeroallergens", def: "Airborne allergy-triggering substances, such as pollen and mold spores." },
        { term: "Green space / blue space", def: "Green space refers to proximity to parks and vegetation; blue space refers to proximity to bodies of water. Both are protective factors for mental health and stress." },
        { term: "Walkability", def: "How easy, safe, and practical it is to walk around a neighborhood, which influences physical activity and metabolic health." }
      ]
    },
    quiz: {
      questions: [
        { type: "mcq", prompt: "What are the four domains of environmental exposure covered in this lesson?", options: ["Chemical, physical/climatic, biological, and built/social environment", "Genetic, chemical, viral, and psychological", "Urban, rural, coastal, and mountainous", "Air, water, soil, and space"], answerIndex: 0, explanation: "The four domains are chemical factors, physical and climatic factors, biological factors, and the built and social environment." },
        { type: "mcq", prompt: "PFAs are nicknamed 'forever chemicals' because:", options: ["They were the first chemicals ever synthesized", "They resist breaking down in the environment", "They only exist in laboratory conditions", "They evaporate instantly and cause no harm"], answerIndex: 1, explanation: "PFAs persist for very long periods without breaking down once released into the environment, hence the nickname 'forever chemicals'." },
        { type: "mcq", prompt: "Under which domain does 'vector density' (mosquito or tick populations) fall?", options: ["Chemical factors", "Physical and climatic factors", "Biological factors", "Built and social environment"], answerIndex: 2, explanation: "Vector density is a biological factor, used to predict disease risks like malaria, Lyme disease, or Zika." },
        { type: "mcq", prompt: "What health outcomes are linked to environmental noise from traffic or industry?", options: ["Improved sleep quality", "Sleep disturbance, hypertension, and cognitive impairment in children", "Only hearing loss", "No measurable health effects"], answerIndex: 1, explanation: "Environmental noise is linked to sleep disturbance, hypertension, and cognitive impairment specifically in children." },
        { type: "mcq", prompt: "How can wastewater testing be used in environmental epidemiology?", options: ["To test drinking water taste only", "To estimate a community's viral load and hidden health status without testing every individual", "To measure rainfall levels", "It has no epidemiological use"], answerIndex: 1, explanation: "Testing wastewater for pathogen load, as was done for SARS-CoV-2, helps estimate a community's hidden health status without testing each person individually." },
        { type: "mcq", prompt: "Why are green space and blue space considered 'protective factors'?", options: ["They increase property values only", "Proximity to them reduces stress levels and improves mental health", "They eliminate the need for healthcare entirely", "They only matter in rural areas"], answerIndex: 1, explanation: "Green space (parks) and blue space (water bodies) are protective factors because proximity to them is linked to reduced stress and improved mental health." },
        { type: "short", prompt: "List the three chemical factor sub-categories covered in the lesson (air, water, and one more).", keywords: ["air", "water", "soil", "food", "toxin"], explanation: "The three chemical factor sub-categories are air quality, water contaminants, and soil/food toxins." },
        { type: "short", prompt: "Explain in your own words why walkability affects metabolic health.", keywords: ["walk", "physical activity", "obesity", "metabolic"], explanation: "Walkability affects how much physical activity residents get day to day, which in turn directly affects obesity rates and overall metabolic health." },
        { type: "short", prompt: "What three things must be true whenever a health test is carried out on a person, according to the lesson?", keywords: ["purpose", "need", "aware", "known"], explanation: "The test must have a specific known purpose, the person must genuinely need it, and they must be made aware of why it is being carried out." }
      ]
    }
  },

  // ============================================================
  // STATION 5 — MEDICAL RESEARCH ETHICS
  // ============================================================
  {
    id: "ethics",
    order: 5,
    title: "Medical Research Ethics",
    tagline: "The rules written in response to real atrocities",
    icon: "ethics",
    lesson: {
      intro: [
        `Any test or procedure carried out on a human body, whether for medical treatment or for research, is not something to be done casually. This station covers the ethical rules that govern this, rules that exist not as abstract philosophy but as a direct response to real historical abuse. Understanding where these rules came from makes them much harder to treat as bureaucratic box-ticking.`
      ],
      sections: [
        {
          heading: "Three foundational medical rights",
          body: [
            `There are at least three specific rights every individual has when it comes to medical testing or procedures. The first is the right to anonymity: a person has the right not to disclose their personal details or health issues to the public. For example, a person has the right to keep an HIV diagnosis private and not have it disclosed publicly, even while receiving medical care for it.`,
            `The second is the right to informed consent: before any medical or research procedure is carried out on a person, they must consent to it freely, without coercion or force, and they must be made fully aware of the pros and cons involved, so that they genuinely understand what they are agreeing to before it happens.`,
            `The third is the right to no harm: any medical procedure carried out on a person, even one conducted for the sake of research, must not result in suffering to that individual. These three rights sound almost obvious stated plainly, but history shows how easily they can be, and have been, violated when they are not actively enforced.`
          ]
        },
        {
          heading: "How these rights were violated: the Nazi medical experiments",
          body: [
            `History provides a stark, documented example of what happens when these rights are ignored entirely. During the Nazi regime, Jewish people and other targeted groups were subjected to torture and inhumane experimentation, testing things like the maximum and minimum temperatures a human body could survive before death, and the maximum height a person could fall from before death. These experiments had no regard for the subjects' consent, wellbeing, or survival.`,
            `Beyond the experiments performed on living victims, the bodies of those who died were then used for anatomical and physiological medical research, again without any permission or consent from the individuals or their families, and without any compensation to the families of the victims. This systematic, large-scale violation of basic medical ethics is what directly led to the formulation of the Nuremberg principles, a set of rules established specifically to sanitize medical research and procedures going forward, and to hold researchers accountable to and punishable under ethical codes of medical conduct.`
          ]
        },
        {
          heading: "The Nuremberg Code, point by point",
          body: [
            `The three medical rights covered earlier map closely onto the ten-point Nuremberg Code, summarized here (following Britannica's ten-point summary): voluntary consent; the research must have utility to society; animals, not humans, should be used as experimental models wherever possible; the experiment must not cause physical or mental suffering or injury to subjects; experiments must not be conducted if disabling injury or death is a likely outcome; the degree of risk taken on by the subject must never exceed the humanitarian importance of the problem being studied; proper preparations and facilities must be in place to protect subjects against injury, disability, or death; only qualified people should conduct the experiments, applying the highest possible degree of skill and care; and human subjects must be free to end their participation at any point if they no longer wish to continue.`
          ]
        }
      ],
      examples: [
        {
          title: "Right to anonymity in practice",
          text: `A person receiving treatment for HIV has the right to keep that diagnosis private; medical staff cannot disclose it publicly without the patient's consent.`
        },
        {
          title: "Nazi medical experiments",
          text: `Systematic torture testing maximum and minimum survivable temperatures and fall heights, conducted without consent, without regard for suffering, and without any protection of the subjects, directly prompted the creation of the Nuremberg Code.`
        }
      ],
      whyMatters: [
        `These principles are not historical trivia, they are the reason informed consent forms exist today, the reason ethics boards review research before it happens, and the reason patient confidentiality is taken as seriously as it is. Every time you see a consent form or a confidentiality clause in a hospital or research setting, you are looking at a direct institutional response to the kind of abuse described in this lesson.`,
        `As a future health professional, internalizing these three rights, anonymity, informed consent, and no harm, gives you a working ethical checkpoint you can apply to any procedure or study you are ever involved in, regardless of how minor it seems.`
      ],
      glossary: [
        { term: "Right to anonymity", def: "A patient's right not to have their personal details or health issues disclosed to the public without consent." },
        { term: "Informed consent", def: "Consent to a medical or research procedure given freely, without coercion, after being made fully aware of its risks and benefits." },
        { term: "Right to no harm", def: "The principle that a medical or research procedure must not result in suffering to the person it is performed on." },
        { term: "Nuremberg Code", def: "A ten-point set of ethical principles for human research, established in response to Nazi medical atrocities, covering consent, risk, and researcher accountability." }
      ]
    },
    quiz: {
      questions: [
        { type: "mcq", prompt: "What are the three foundational medical rights described in the lesson?", options: ["Right to treatment, right to a second opinion, right to a translator", "Right to anonymity, right to informed consent, right to no harm", "Right to a private room, right to visitors, right to refuse food", "Right to compensation, right to a lawyer, right to an interpreter"], answerIndex: 1, explanation: "The three rights are the right to anonymity, the right to informed consent, and the right to no harm." },
        { type: "mcq", prompt: "What historical event directly led to the formulation of the Nuremberg principles?", options: ["The founding of the World Health Organization", "Nazi medical experiments conducted on prisoners without consent", "The invention of the polio vaccine", "The signing of the Geneva Convention"], answerIndex: 1, explanation: "The systematic, non-consensual, harmful experiments conducted during the Nazi regime directly led to the creation of the Nuremberg principles." },
        { type: "mcq", prompt: "According to the Nuremberg Code as summarized in the lesson, which subjects should be used as experimental models wherever possible?", options: ["Prisoners", "Animals, not humans", "Volunteers only, regardless of species", "There is no preference stated"], answerIndex: 1, explanation: "The Nuremberg Code states that animals, not humans, should be used as experimental models wherever possible." },
        { type: "mcq", prompt: "What does 'informed consent' require, according to the lesson?", options: ["A verbal 'yes' regardless of understanding", "Consent given freely, without coercion, after being made fully aware of pros and cons", "Written consent from a family member instead of the patient", "Consent is not legally required if the procedure is minor"], answerIndex: 1, explanation: "Informed consent requires that the person consents freely, without coercion, and fully understands the risks and benefits before agreeing." },
        { type: "short", prompt: "Give a real-world example of the 'right to anonymity' as described in the lesson.", keywords: ["hiv", "disclos", "public", "privacy", "diagnos"], explanation: "A person has the right to not have an HIV diagnosis (or any personal health issue) disclosed to the public without their consent, even while receiving care." },
        { type: "short", prompt: "According to the Nuremberg Code, what should happen if a human subject no longer wishes to continue an experiment?", keywords: ["free", "end", "stop", "withdraw", "continue"], explanation: "The Nuremberg Code states that human subjects must be permitted to bring the experimentation to an end at any point if they no longer wish to continue." },
        { type: "short", prompt: "Name two specific things Nazi medical experiments tested on victims, as described in the lesson.", keywords: ["temperature", "survivable", "height", "fall", "death"], explanation: "Experiments tested things like maximum and minimum survivable temperature and maximum survivable fall height before death, all without consent." }
      ]
    }
  },

  // ============================================================
  // STATION 6 — ENDOCRINE DISRUPTING COMPOUNDS (EDCs)
  // ============================================================
  {
    id: "edc",
    order: 6,
    title: "Endocrine Disrupting Compounds (EDCs)",
    tagline: "The chemicals that convince your body of lies",
    icon: "edc",
    lesson: {
      intro: [
        `This is the largest and most detailed topic in the course, so take your time with it. To understand EDCs, you first need to understand hormones. Hormones are chemical substances secreted by glands to regulate bodily functions that are not directly under the control of the brain and spinal cord. A useful analogy from the notes: just as everything in a car is either mechanical or electrical, everything in the body that is not directly regulated by the brain and spinal cord is regulated by hormones instead.`,
        `The major glands that secrete these hormones include the pituitary gland, the hypothalamus, the thyroid gland, the parathyroid glands, the adrenal glands, the pancreas, and the gonads (the testes and ovaries). These hormones act in different ways: some act on nearby cells (paracrine signaling), some act on the very cell that released them (autocrine signaling), and they work by binding either to receptors on the outside of a cell's membrane (typically peptide hormones) or to receptors inside the cell (typically steroid or thyroid hormones).`,
        `An Endocrine Disrupting Compound, or EDC, is, by definition (following the WHO and UNEP), an exogenous substance, meaning a substance from outside the body, that alters the normal functioning of the endocrine (hormone) system and causes adverse health effects, not just in the exposed individual but potentially in their offspring too. In simpler terms: an EDC is any substance able to shift or change the body's normal hormonal balance.`
      ],
      sections: [
        {
          heading: "What EDCs actually do inside the body",
          body: [
            `EDCs interfere with the endocrine system through several distinct mechanisms. They can mimic natural hormones, a process called hormonal mimicry, essentially wearing a disguise the body's receptors are fooled by. They can block hormonal receptors and binding sites outright, preventing the real hormone from attaching where it needs to. They can alter how hormones are synthesized (made), metabolized (broken down), and transported around the body. They can modify how much a receptor is expressed, changing the body's sensitivity to a given hormone. And they can interfere directly with the feedback mechanisms the body uses to regulate hormone levels in the first place.`,
            `A defining feature of EDCs is that their effects do not follow a simple "more chemical, more harm" pattern. They are characterized by low-dose effects, meaning harm can occur even at very small exposure levels, and by non-linear dose responses, meaning a higher dose does not always produce a proportionally bigger effect. Their impact also depends heavily on the timing of exposure, with developmental phases (such as pregnancy or childhood) being especially sensitive windows. EDCs can also cause transgenerational and epigenetic effects, meaning the harm can be passed down to children and grandchildren without changing the DNA sequence itself, and many EDCs bioaccumulate, meaning they build up and persist in the body over time rather than being cleared out quickly.`
          ]
        },
        {
          heading: "Classifying EDCs into four categories",
          body: [
            `EDCs can be organized into four broad categories. First, heavy metals, including copper, lead, zinc, mercury, and cadmium. Second, agricultural chemicals, including insecticides, fungicides, and herbicides. Third, synthetic industrial chemicals, including phthalates, bisphenol-A (BPA), PCBs (polychlorinated biphenyls), and dioxins, which are by-products of industrial processes and waste incineration. Fourth, natural endocrine disruptors, which are mostly natural hormone mimetics from natural sources, such as phytoestrogens (plant-based compounds that mimic estrogen) and mycotoxins (toxins produced by fungi).`
          ]
        },
        {
          heading: "Distinguishing toxins, poisons, contaminants, and pathogens",
          body: [
            `Because EDCs are discussed alongside these related terms constantly, it is worth being precise about the differences. A toxin is a poisonous substance produced biologically, within a living cell or organism, and it usually targets specific cellular functions, such as blocking nerve signals. Examples include snake venom, botulinum toxin, and mycotoxins like aflatoxin. A poison is a broader term for any substance, solid, liquid, or gas, that causes harm regardless of its origin, and it often implies high potency at low doses, such as arsenic, cyanide, or strychnine. A key rule to remember: all toxins are poisons, but not all poisons are toxins. If a harmful substance is made by a human in a lab, like Sarin gas, it is classified as a poison, not a toxin. If a frog produces the same kind of harmful substance in its own skin, that is a toxin, because a toxin's defining feature is a biological origin.`,
            `A contaminant is any substance, physical, chemical, or biological, found in an environment where it does not belong, or at levels high enough to cause harm. Importantly, a pathogen or a toxin can also be classified as a contaminant if it ends up somewhere like your food or drinking water, "contaminant" is a situational label describing a hazard's presence in the wrong place, not a separate category of substance. A pathogen is a living biological agent, an organism, that causes disease or illness in its host, such as E. coli bacteria, viruses like SARS-CoV-2, fungi, and protozoa. Pathogens are unique among these four terms because they are infectious and can replicate inside the host; toxins and poisons, by contrast, are static doses that do not grow or multiply once they are inside you.`
          ]
        },
        {
          heading: "How EDCs enter the body",
          body: [
            `EDCs have multiple routes of entry into the body: ingestion (eating or drinking), inhalation (breathing in), dermal absorption (through the skin), placental transfer (from mother to fetus during pregnancy), and through breastmilk. The oral (ingestion) route is the most common, largely because of food and drink packaging. Much of this packaging is plastic, which can leach phthalates and bisphenol A (BPA) directly into the food and drinks people consume.`,
            `Many EDCs, such as DDT (dichlorodiphenyltrichloroethane), PCBs, and dioxins, are lipophilic, meaning they dissolve in and are stored in fat rather than water. This lipophilic property lets them move up the food chain: they accumulate in animal fat, and when humans eat meat, fish, or other animal products, they consume the accumulated EDCs stored in that fat too. Inhalation is a close second common route, coming from sources like air fresheners and pest-control sprays that release EDCs into indoor air, where they gradually build up in the body with repeated exposure over time.`
          ]
        },
        {
          heading: "How EDCs disrupt specific hormone systems",
          body: [
            `EDCs that resemble the body's own hormones, such as bisphenol A mimicking estrogen, cause over-stimulation of the hormonal pathway they are mimicking, or trigger abnormal development. EDCs can also block hormone receptors directly, for example, certain pesticides affecting androgen (male sex hormone) receptors. They can interfere with enzyme systems too, such as certain EDCs disrupting the thyroid gland by inhibiting the uptake of iodine, an essential building block for thyroid hormones.`,
            `EDCs can also interfere with how hormones are transported through the blood, since hormones travel bound to carrier proteins like thyroxine-binding globulin and sex hormone-binding globulin. On top of this, EDCs can trigger epigenetic modifications, meaning changes to how genes are expressed without altering the underlying DNA sequence, through mechanisms like DNA methylation, histone modification, and altered mRNA regulation. Finally, EDCs can disrupt the neuroendocrine system overall by interfering with signaling between the hypothalamus and pituitary gland, the body's central hormone command center.`
          ]
        },
        {
          heading: "Five body systems altered by EDCs",
          body: [
            `The reproductive system is affected through estrogen-related effects, leading to infertility, low sperm count, and menstrual irregularity. The thyroid system is affected by disrupted T3 and T4 hormone synthesis and transport, leading to low T3/T4 levels and a slowed metabolism. The nervous system is affected through disrupted neurotransmitter activity and brain development, leading to behavioral disorders and cognitive deficits. The metabolic/endocrine system is affected through disrupted lipid metabolism, leading to insulin resistance and obesity. The immune system is affected through disrupted hormone-mediated immune responses, leading to immune suppression and a higher risk of autoimmune disease.`
          ]
        },
        {
          heading: "EDCs as hormonal mimetics: real cases",
          body: [
            `A hormonal mimetic is a substance that pretends to be a specific hormone, without actually being that hormone, and then occupies that hormone's natural binding site, causing an imbalance in the body's normal signaling. A useful comparison from the notes: carbon monoxide binds very strongly to hemoglobin in the blood, taking the place oxygen should occupy, and the body does not recognize it as a threat because it fits the same binding site. EDCs act on hormone receptors the same way, occupying a binding site meant for a different molecule and disrupting the system from the inside.`,
            `A concrete example is the progestin contraceptive drug Postinor II. It tricks the body into believing progesterone, the pregnancy hormone, is elevated, which signals pregnancy. Because the body is wired to prevent double implantation once it believes pregnancy has occurred, this false signal causes the body to prevent implantation of a fertilized egg, at least until the drug's effect wears off. During this period, the person who took the drug can even begin to show early signs of pregnancy, like weight gain, purely because the body believes the hormonal signal it is receiving.`,
            `Another example is semaglutide, used as a weight-loss and diabetes drug. It is a glucagon-like drug that mimics GLP-1, tricking the body into behaving as if blood sugar is high. This makes the body secrete more insulin to process the sugar it believes is present, while also inhibiting glucagon, the hormone that would normally release stored sugar from the liver's glycogen reserves. Semaglutide also suppresses appetite by inhibiting ghrelin (the hunger hormone) and elevating leptin (the satiety hormone), so the body is deceived into believing the stomach is full even when the person has not eaten for a long time.`,
            `Artificial food flavors are a further application. Flavors designed to mimic orange, apple, or meat work by binding to the same taste-receptor sites the natural compound would bind to, which is why an artificial flavor can convincingly imitate a real one. Air fresheners work the same way for scent, using hormonal mimetics to imitate natural, calming smells.`
          ]
        },
        {
          heading: "Unexpected sources of exposure",
          body: [
            `EDC exposure is not limited to obvious industrial sources. Household items marketed as harmless, like air fresheners, insecticides, and aerosol sprays, often contain toluene and other potentially carcinogenic compounds. Locally produced pest-control concoctions, common informal mosquito and roach killers, are frequently unregulated mixtures of highly toxic chemicals, unsafe for long-term exposure, especially in enclosed spaces. Notably, the people who prepare these concoctions often wear protective gear like nose masks and goggles themselves while encouraging others to use the same chemicals freely, without protection, even directly under a bed.`,
            `Because pests like mosquitoes, cockroaches, and especially rats share a surprisingly similar genetic makeup to humans, whatever kills them at a small dose can plausibly affect humans too, just more slowly. These small doses can settle on food and surfaces people come into regular contact with, accumulating gradually until they eventually cause noticeable disturbances in the body, low, steady, repeated self-dosing that can be the hidden cause behind otherwise unexplained illnesses.`,
            `Livestock farming introduces another route. It is common practice for abattoirs and farms to inject animals showing any sign of sickness with antibiotics, and these drugs are not always fully eliminated from the animal's body before slaughter, sometimes occurring just hours after injection. The parts of the animal most people enjoy eating, like the intestines, kidneys, and liver, are often exactly where these chemicals accumulate most, meaning a consumer can unknowingly ingest concentrated drug residues believing they are eating a delicacy.`,
            `Phytoremediation is a related plant-based phenomenon worth knowing: succulent plants like water hyacinth can trap significant amounts of pollutants in their roots and body due to their succulent nature. The same absorption happens with common succulent vegetables like cucumber and watermelon: as long as they draw water from contaminated soil, they will absorb and hold whatever toxic chemical is present in that water.`,
            `Finally, generator emissions are a serious and often fatal inhalation route. People have died overnight, painlessly and without warning, because a generator running near their room pumped exhaust fumes directly into their sleeping space. This is caused by carbon monoxide poisoning: carbon monoxide binds to hemoglobin far more strongly than oxygen does, and because it binds at the same site oxygen would use, the body does not register it as a threat. Cells are gradually deprived of oxygen, cannot survive, and cannot clear their own waste, making carbon monoxide a genuinely silent killer.`
          ]
        }
      ],
      examples: [
        {
          title: "Postinor II and false pregnancy signaling",
          text: `Mimics elevated progesterone to trick the body into believing pregnancy has occurred, preventing implantation and sometimes producing early pregnancy-like symptoms such as weight gain.`
        },
        {
          title: "Semaglutide and appetite suppression",
          text: `Mimics GLP-1 to trigger insulin release and suppress appetite via ghrelin/leptin manipulation, deceiving the body into believing it is full and blood sugar is high.`
        },
        {
          title: "Generator fume deaths",
          text: `Carbon monoxide from generator exhaust binds hemoglobin more strongly than oxygen, at the same binding site, causing undetected, painless, fatal oxygen deprivation overnight.`
        },
        {
          title: "Water hyacinth phytoremediation",
          text: `Succulent plants like water hyacinth absorb and trap pollutants from contaminated water in their roots and tissue, the same mechanism by which vegetables like cucumber can absorb toxins from contaminated soil.`
        },
        {
          title: "Antibiotic residue in slaughtered livestock",
          text: `Animals injected with antibiotics shortly before slaughter can retain drug residues in commonly eaten organs like the liver, kidneys, and intestines, exposing consumers unknowingly.`
        }
      ],
      whyMatters: [
        `EDCs sit at the intersection of everyday household life and serious clinical outcomes, infertility, thyroid disease, metabolic disorders, and neurological effects can all trace back to ordinary products most people never think twice about, from plastic food packaging to air fresheners. Recognizing hormonal mimicry as the underlying mechanism connects seemingly unrelated topics, contraceptives, weight-loss drugs, pesticides, and packaging, into one coherent physiological story.`,
        `Clinically, understanding EDC exposure routes gives you a genuinely useful diagnostic habit: when a patient presents with an unexplained hormonal, reproductive, or metabolic issue, their environment, packaging habits, occupation, and home chemical use are worth asking about, not just their diet and family history.`
      ],
      glossary: [
        { term: "Hormone", def: "A chemical substance secreted by a gland to regulate bodily functions not directly controlled by the brain and spinal cord." },
        { term: "Endocrine Disrupting Compound (EDC)", def: "An exogenous (external) substance that alters the normal functioning of the hormone system and causes adverse health effects." },
        { term: "Hormonal mimicry", def: "When a substance imitates a natural hormone closely enough to bind to its receptor and trigger (or block) its effects." },
        { term: "Bioaccumulation", def: "The build-up of a substance in the body over time because it is not efficiently broken down or excreted." },
        { term: "Lipophilic", def: "Fat-soluble; describes substances that dissolve in and are stored within body fat rather than water." },
        { term: "Toxin", def: "A poisonous substance produced biologically by a living organism, usually targeting specific cellular functions." },
        { term: "Poison", def: "Any substance, of any origin, that causes harm to the body, often at low doses." },
        { term: "Contaminant", def: "Any substance found in an environment where it does not belong or at levels that cause harm; a situational label rather than a fixed category." },
        { term: "Pathogen", def: "A living, infectious biological agent that causes disease and can replicate within its host." },
        { term: "Phytoremediation", def: "The use of plants to absorb and remove pollutants from soil or water." },
        { term: "Epigenetic modification", def: "A change in how genes are expressed without altering the underlying DNA sequence, e.g. through DNA methylation." }
      ]
    },
    quiz: {
      questions: [
        { type: "mcq", prompt: "By definition, what is an EDC (endocrine disrupting compound)?", options: ["Any substance produced only inside the human body", "An exogenous substance that alters the normal functioning of the hormone system and causes adverse health effects", "A hormone naturally secreted by the pituitary gland", "A substance that only affects plants, not animals"], answerIndex: 1, explanation: "An EDC is an exogenous (external) substance that shifts or alters the body's hormonal balance, causing adverse health effects." },
        { type: "mcq", prompt: "Which statement correctly distinguishes a toxin from a poison?", options: ["All poisons are toxins, but not all toxins are poisons", "All toxins are poisons, but not all poisons are toxins; toxins specifically have a biological origin", "Toxins and poisons are identical terms with no distinction", "Poisons only affect animals, toxins only affect humans"], answerIndex: 1, explanation: "All toxins are poisons, but not all poisons are toxins. A toxin specifically has a biological origin (like snake venom); a lab-made harmful substance like Sarin gas is a poison, not a toxin." },
        { type: "mcq", prompt: "What makes a pathogen unique compared to toxins and poisons?", options: ["Pathogens are always more dangerous", "Pathogens are infectious and can replicate inside the host, while toxins and poisons are static doses", "Pathogens cannot be found in water", "There is no meaningful difference"], answerIndex: 1, explanation: "Pathogens are living biological agents that are infectious and can replicate inside a host, unlike toxins and poisons, which are static doses that don't grow once inside the body." },
        { type: "mcq", prompt: "Why is the oral (ingestion) route the most common way EDCs enter the body?", options: ["Because people intentionally swallow EDCs for health reasons", "Because plastic food and drink packaging can leach phthalates and BPA into what we consume", "Because ingestion is the only route that actually works", "Because EDCs cannot be inhaled"], answerIndex: 1, explanation: "The oral route is most common largely because plastic packaging used for food and drinks can leach phthalates and bisphenol A (BPA) directly into what people consume." },
        { type: "mcq", prompt: "Why do many EDCs like DDT, PCBs, and dioxins accumulate up the food chain?", options: ["They are radioactive", "They are lipophilic, meaning they store in fat, which accumulates as you move up the food chain", "They dissolve completely in water and wash away", "They only affect plants, not animals"], answerIndex: 1, explanation: "These EDCs are lipophilic (fat-soluble), so they accumulate in animal fat, and that concentration increases as you move up the food chain toward humans." },
        { type: "mcq", prompt: "How does semaglutide affect appetite, according to the lesson?", options: ["It has no effect on appetite", "It inhibits ghrelin and elevates leptin, deceiving the body into feeling full", "It directly destroys fat cells", "It increases hunger to promote healthy eating habits"], answerIndex: 1, explanation: "Semaglutide suppresses appetite by inhibiting ghrelin (the hunger hormone) and elevating leptin (the satiety hormone), tricking the body into feeling full." },
        { type: "mcq", prompt: "Why is carbon monoxide from generator fumes especially dangerous and often undetected by the body?", options: ["It has a strong smell that people ignore", "It binds hemoglobin more strongly than oxygen, at the same site, so the body doesn't register it as a threat", "It only affects people while they are awake", "It is not actually harmful in small amounts"], answerIndex: 1, explanation: "Carbon monoxide binds hemoglobin far more strongly than oxygen, occupying the same binding site, so the body does not recognize it as a threat while oxygen delivery to tissue silently fails." },
        { type: "mcq", prompt: "Which of the following is one of the four classification categories of EDCs given in the lesson?", options: ["Radioactive isotopes", "Synthetic industrial chemicals (e.g. phthalates, BPA, PCBs)", "Household electronics", "Culinary spices"], answerIndex: 1, explanation: "The four EDC categories are heavy metals, agricultural chemicals, synthetic industrial chemicals, and natural endocrine disruptors." },
        { type: "short", prompt: "Explain what a 'hormonal mimetic' is, using the carbon monoxide/hemoglobin comparison from the lesson.", keywords: ["pretend", "bind", "site", "hormone", "occupy", "mimic"], explanation: "A hormonal mimetic is a substance that pretends to be a hormone and occupies its natural binding site, similar to how carbon monoxide occupies the binding site meant for oxygen on hemoglobin, causing the body's normal signaling to be disrupted." },
        { type: "short", prompt: "Name the five body systems described as altered by EDCs, and one effect on any one of them.", keywords: ["reproductive", "thyroid", "nervous", "metabolic", "immune"], explanation: "The five systems are reproductive (infertility, low sperm count), thyroid (low T3/T4, slowed metabolism), nervous (behavioral/cognitive issues), metabolic (insulin resistance, obesity), and immune (suppression, autoimmune risk)." },
        { type: "short", prompt: "Give an example from the lesson of an unexpected household source of EDC exposure.", keywords: ["air freshener", "insecticide", "aerosol", "spray", "pest"], explanation: "Household air fresheners, insecticides, and aerosol sprays often contain toluene and other potentially carcinogenic compounds that act as EDCs." },
        { type: "short", prompt: "In your own words, explain what phytoremediation is and give the plant example from the lesson.", keywords: ["plant", "absorb", "pollutant", "water hyacinth", "root"], explanation: "Phytoremediation is the use of plants to absorb and trap pollutants from soil or water. Water hyacinth is the example given, absorbing pollutants into its roots and succulent tissue." }
      ]
    }
  },

  // ============================================================
  // STATION 7 — WASTE MANAGEMENT & CONTAMINATION PATHWAYS
  // ============================================================
  {
    id: "waste",
    order: 7,
    title: "Waste Management & Contamination Pathways",
    tagline: "Where things go after we're done with them",
    icon: "waste",
    lesson: {
      intro: [
        `This station is short but important: it covers what actually happens to waste and spilled substances after release, the practical, downstream half of everything you learned about cycles and EDCs. Two related vocabulary terms open this topic. Emission refers specifically to the release of gases into the environment. Effluence refers specifically to liquids that spill off or are released into the environment. Keeping these two words distinct matters because the pathway a pollutant takes, and who it affects first, differs depending on whether it is a gas or a liquid.`
      ],
      sections: [
        {
          heading: "Who gets affected first: aquatic spillage",
          body: [
            `In aquatic areas, spillage effects chiefly the drinkers first, meaning the people and animals who draw drinking water directly from that body of water. When oil spillage from these aquatic incidents washes ashore, the farmers working that land are then affected next, since contaminated shoreline soil damages crops and farmland. This shows a pattern worth remembering: environmental contamination usually does not affect everyone equally or at once, it moves through a population in a predictable order based on who has the closest, most direct contact with the contaminated medium.`
          ]
        },
        {
          heading: "The three principles of waste management",
          body: [
            `Waste management is guided by three core principles: reduce, reuse, and recycle. Reduce means lowering the total amount of waste generated in the first place. A real example given in the notes is the standardization of chargers across devices: because chargers are now largely universal, new phones, laptops, and other devices increasingly do not need to come packaged with a new charger every time, directly reducing electronic waste.`,
            `Recycle means converting waste material into a new usable form rather than discarding it. A concrete example is the conversion of plastic and nylon waste into products like slippers, ovens, and clothes clips. Reuse, the third principle, means using an item again for its original or a similar purpose rather than discarding it after a single use, extending the useful life of a resource before it ever becomes waste in the first place.`
          ]
        },
        {
          heading: "Bioremediation and leaching",
          body: [
            `Bioremediation is a strategy that seeks to repair contaminated land, typically by using living organisms (plants or microbes) to break down or absorb pollutants, connecting directly to the phytoremediation example (water hyacinth) covered in the EDC station. Leaching into aquifers is a separate but related risk: this happens especially when soakaway pits (used for waste or wastewater disposal) are situated too close to boreholes used for drinking water. Because different water levels exist underground at different depths, contamination from a poorly placed soakaway pit can travel through the soil and reach the water table a nearby borehole draws from, contaminating the drinking water supply.`
          ]
        }
      ],
      examples: [
        {
          title: "Universal chargers as 'reduce' in action",
          text: `Standardizing charger types across devices means new electronics increasingly ship without an included charger, directly cutting down on electronic waste generation.`
        },
        {
          title: "Plastic-to-slipper recycling",
          text: `Waste plastics and nylons converted into everyday products like slippers, ovens, and clothes clips demonstrate the 'recycle' principle turning discarded material back into something usable.`
        },
        {
          title: "Oil spillage: drinkers first, then farmers",
          text: `Aquatic oil spillage affects those drinking from the water source first, then farmers when the spillage washes ashore and contaminates farmland soil.`
        },
        {
          title: "Soakaway pits near boreholes",
          text: `Placing a soakaway pit too close to a borehole risks leaching contaminants through underground water levels directly into the drinking water the borehole supplies.`
        }
      ],
      whyMatters: [
        `Waste management principles are not abstract environmentalism, they are direct disease-prevention tools. A soakaway pit placed carelessly near a borehole can contaminate an entire household's or community's drinking water supply, tying this station directly back to the water and sanitation material from earlier in the course.`
      ],
      glossary: [
        { term: "Emission", def: "The release of gases into the environment." },
        { term: "Effluence", def: "Liquids that spill off or are released into the environment." },
        { term: "Reduce, reuse, recycle", def: "The three core principles of waste management: lowering waste generated, reusing items, and converting waste into new usable products." },
        { term: "Bioremediation", def: "A strategy using living organisms to repair contaminated land by breaking down or absorbing pollutants." },
        { term: "Leaching", def: "The movement of contaminants through soil into groundwater, posing a risk when waste disposal sites are placed too close to water sources like boreholes." },
        { term: "Soakaway pit", def: "A pit used for disposing of wastewater or waste, which can contaminate nearby boreholes if placed too close to them." }
      ]
    },
    quiz: {
      questions: [
        { type: "mcq", prompt: "What is the difference between emission and effluence?", options: ["They are the same thing", "Emission refers to gases, effluence refers to liquids", "Emission refers to liquids, effluence refers to gases", "Emission refers to solids, effluence refers to gases"], answerIndex: 1, explanation: "Emission specifically refers to the release of gases into the environment, while effluence refers to liquids that spill off or are released." },
        { type: "mcq", prompt: "In an aquatic oil spillage scenario, who is affected first, according to the lesson?", options: ["Farmers, before anyone else", "Those who drink from the water source directly", "Fishing companies exclusively", "No one is affected unless the spill reaches land"], answerIndex: 1, explanation: "In aquatic areas, spillage chiefly affects the drinkers first, before farmers are affected once the oil washes ashore." },
        { type: "mcq", prompt: "Which example is given for 'reduce' as a waste management principle?", options: ["Turning plastic into slippers", "Using a shopping bag multiple times", "Universal chargers meaning new devices don't need to include a new charger", "Composting food scraps"], answerIndex: 2, explanation: "The universal charger example is given for 'reduce': standardized chargers mean new devices increasingly don't need to ship with a new one, cutting waste generation." },
        { type: "mcq", prompt: "Why is placing a soakaway pit close to a borehole risky?", options: ["It has no risk if the pit is covered", "Contaminants can leach through underground water levels into the borehole's water supply", "Boreholes are unaffected by nearby waste disposal", "It only affects soil quality, never water quality"], answerIndex: 1, explanation: "Different water levels exist underground, and contamination from a nearby soakaway pit can leach through soil into the water table a borehole draws from." },
        { type: "short", prompt: "Name the three core principles of waste management covered in the lesson.", keywords: ["reduce", "reuse", "recycle"], explanation: "The three core principles are reduce, reuse, and recycle." },
        { type: "short", prompt: "What is bioremediation, and how does it connect to a topic from the EDC station?", keywords: ["organism", "repair", "land", "plant", "absorb", "phytoremediation"], explanation: "Bioremediation uses living organisms to repair contaminated land, connecting to phytoremediation (like water hyacinth absorbing pollutants) from the EDC station." }
      ]
    }
  },

  // ============================================================
  // STATION 8 — ROUTINE ENVIRONMENTAL EXPOSURE & BIOMONITORING
  // ============================================================
  {
    id: "biomonitoring",
    order: 8,
    title: "Routine Environmental Exposure & Biomonitoring",
    tagline: "What your body absorbs quietly, every single day",
    icon: "biomonitoring",
    lesson: {
      intro: [
        `Environmental health physiology focuses on how external physical, chemical, and biological factors interact with human biological systems. Understanding these exposures is vital because the body's physiological response, ranging all the way from cellular stress up to systemic (whole-body) adaptation, determines whether a given exposure ends in homeostasis (a stable, balanced state) or in disease. This station looks specifically at the routine exposures people encounter in ordinary daily life, usually at low doses over long periods of time, and the tools used to detect and measure them.`
      ],
      sections: [
        {
          heading: "Key routine exposures: air pollutants",
          body: [
            `Air pollutants are broadly classified into two groups. The first is gaseous pollutants and particulate matter. Gaseous pollutants include nitrogen dioxide (NO2), sulphur dioxide, other NOx and SOx compounds, ground-level ozone (O3), carbon monoxide (CO), carbon dioxide (CO2), and methane (CH4). Several of these, including CO2 and methane, are also greenhouse gases (GHGs), meaning they trap heat in the atmosphere and contribute to climate change and global warming. Physiologically, contact with these pollutants results in systemic oxidative stress and inflammation, which can show up as organ or skin inflammation, allergic reactions, altered lung (pulmonary) function, and cardiovascular strain, including pulmonary inflammation and variability in blood vessel constriction (vasoconstriction).`,
            `The second group is chemical and heavy metal toxins. Endocrine disrupting chemicals, covered in depth in the EDC station, are common here, especially in plastics (BPA, phthalates) and pesticides, where they mimic or block hormones like estrogen and thyroid hormones. Heavy metals such as lead (Pb), cadmium (Cd), mercury (Hg), and arsenic (As) also fall into this group. These interfere with normal enzyme function by physically displacing essential minerals the body needs, like calcium (Ca2+) and zinc (Zn2+), from the sites those minerals should occupy.`
          ]
        },
        {
          heading: "Thermal stress as a routine exposure",
          body: [
            `Heat levels are a major indicator of metabolic balance, placing a burden on the hypothalamus (the brain region responsible for regulating body temperature) to keep the body's internal environment, the milieu intérieur, at a stable temperature around 37 degrees Celsius. Routine shifts in ambient (surrounding) temperature require the body to continually engage in thermoregulation, and prolonged exposure to temperature extremes can strain the renal (kidney) and circulatory systems over time, even without any single dramatic event.`
          ]
        },
        {
          heading: "How the body physiologically responds to these exposures",
          body: [
            `There are three key physiological mechanisms the body uses to respond to routine environmental exposure. The first is biotransformation via metabolism: the liver is the primary site where toxins are converted from lipid-soluble (fat-soluble) forms into water-soluble compounds, through what are called phase I and phase II reactions, so that they can be excreted from the body. This means exposure to toxins puts a substantial extra workload on the liver's normal metabolic function.`,
            `The second mechanism is oxidative stress. Most pollutants generate reactive oxygen species (ROS), unstable molecules that can damage cells. The body has its own antioxidant capacity, using molecules like glutathione (GSH), to neutralize this damage. When that antioxidant capacity is overwhelmed by too much exposure, actual cellular damage occurs, and this damage can be tracked using biomarkers of oxidative stress. The third mechanism is epigenetic modification: environmental factors and exposures, such as nuclear or radioactive exposure and prolonged biochemical ingestion, can silence or activate specific genes without changing the underlying DNA sequence, often through a process called DNA methylation, and this can influence a person's long-term physiological health.`
          ]
        },
        {
          heading: "Measuring exposure: exposure assessment",
          body: [
            `Exposure assessment measures the actual contact between an exposure agent (a pollutant or hazard) and the human body. The nature and extent of this contact determines how safe or unsafe the exposed person actually is. This can be measured through direct sensing, using personal monitors for things like air quality or radiation, worn by or placed near the individual, or through indirect modelling, which uses geographical data to estimate a person's likely exposure based on their proximity to a known source, without directly measuring them.`
          ]
        },
        {
          heading: "Biomonitoring and physiological testing",
          body: [
            `Biomonitoring is considered the gold standard for confirming physiological health in people exposed to particular environments, most often based on their occupation. It works by directly measuring toxicants, or their metabolites (breakdown products), within biological specimens taken from the person. Blood measures recent or ongoing exposure, such as current lead levels or alcohol. Urine measures water-soluble metabolites, such as pesticide breakdown products, useful for tracking long-term and chronic exposure to heavy metals. Hair and nails also measure long-term, chronic exposure to heavy metals, since these tissues grow slowly and retain a record of past exposure. Adipose tissue (body fat) measures lipophilic exposures, meaning fat-soluble, persistent organic pollutants (POPs) that have accumulated in fat stores over time.`,
            `Beyond specimen testing, other physiological tests may be used depending on a person's workplace: spirometry measures forced expiratory volume (FEV1), tracking lung function in response to air pollution exposure. Heart rate variability (HRV) is a marker of autonomic nervous system (ANS) health, which environmental stress can impact. Other biomarkers include C-reactive protein (CRP), which indicates inflammation, and 8-OHdG (8-hydroxy-2-deoxyguanine), a biomarker indicating DNA damage.`
          ]
        }
      ],
      examples: [
        {
          title: "Greenhouse gases as air pollutants",
          text: `CO2 and methane are both listed as gaseous air pollutants and greenhouse gases, showing how routine daily exposure and global climate change are driven by overlapping chemical sources.`
        },
        {
          title: "Heavy metals displacing calcium and zinc",
          text: `Lead, cadmium, mercury, and arsenic interfere with enzyme function specifically by displacing essential minerals like calcium and zinc from the binding sites those minerals are supposed to occupy.`
        },
        {
          title: "Liver biotransformation of toxins",
          text: `The liver converts fat-soluble toxins into water-soluble compounds through phase I and phase II reactions, enabling the body to excrete substances it otherwise could not eliminate.`
        },
        {
          title: "Hair and nails as long-term exposure records",
          text: `Because hair and nails grow slowly and retain material over time, they can be tested to reveal a person's chronic, long-term exposure to heavy metals that blood tests alone might miss.`
        }
      ],
      whyMatters: [
        `This station gives you the practical toolkit for turning "the environment affects health" from a general principle into something measurable. Knowing which specimen (blood, urine, hair, or fat) reveals which kind of exposure is directly useful for anyone working in occupational health, toxicology, or clinical diagnosis of unexplained chronic symptoms.`
      ],
      glossary: [
        { term: "Milieu intérieur", def: "The stable internal environment of the body that physiological systems work to maintain, including a temperature near 37°C." },
        { term: "Biotransformation", def: "The liver's process of converting fat-soluble toxins into water-soluble compounds (via phase I and phase II reactions) so they can be excreted." },
        { term: "Reactive oxygen species (ROS)", def: "Unstable, reactive molecules generated by pollutant exposure that can damage cells if not neutralized by the body's antioxidant capacity." },
        { term: "Exposure assessment", def: "Measuring the actual contact between a hazard and the human body, via direct sensing (personal monitors) or indirect modelling (geographic estimation)." },
        { term: "Biomonitoring", def: "Measuring toxicants or their metabolites directly within biological specimens (blood, urine, hair/nails, fat) to confirm physiological exposure." },
        { term: "Spirometry", def: "A lung function test measuring forced expiratory volume (FEV1), used to assess the respiratory impact of air pollution exposure." },
        { term: "Heart rate variability (HRV)", def: "A marker of autonomic nervous system health that can be affected by environmental stress." }
      ]
    },
    quiz: {
      questions: [
        { type: "mcq", prompt: "Which body specimen is best for detecting long-term, chronic exposure to heavy metals?", options: ["Blood only", "Hair and nails", "Saliva", "Sweat"], answerIndex: 1, explanation: "Hair and nails grow slowly and retain a record of exposure over time, making them ideal for detecting long-term, chronic heavy metal exposure." },
        { type: "mcq", prompt: "What does adipose tissue (body fat) biomonitoring specifically reveal?", options: ["Recent alcohol consumption", "Lipophilic exposures like persistent organic pollutants (POPs)", "Blood sugar levels", "Recent water intake"], answerIndex: 1, explanation: "Adipose tissue measures lipophilic (fat-soluble) exposures, such as persistent organic pollutants that accumulate in fat over time." },
        { type: "mcq", prompt: "Which organ is the primary site of toxin biotransformation, according to the lesson?", options: ["The kidneys", "The liver", "The lungs", "The skin"], answerIndex: 1, explanation: "The liver is the primary site where toxins are converted from lipid-soluble to water-soluble forms via phase I and phase II reactions, enabling excretion." },
        { type: "mcq", prompt: "What happens when the body's antioxidant capacity is overwhelmed by reactive oxygen species (ROS)?", options: ["Nothing, the body simply adapts instantly", "Cellular damage occurs", "The liver stops producing bile", "Hormone levels normalize automatically"], answerIndex: 1, explanation: "When ROS exceeds the body's antioxidant capacity (e.g. glutathione), actual cellular damage occurs, which can be tracked via biomarkers of oxidative stress." },
        { type: "mcq", prompt: "What does spirometry measure, and why is it relevant to environmental exposure?", options: ["Blood pressure in response to heat", "Forced expiratory volume (FEV1), tracking lung function affected by air pollution", "Heart rate during exercise only", "Skin reaction to UV exposure"], answerIndex: 1, explanation: "Spirometry measures FEV1, assessing lung function, which is relevant because air pollution exposure directly affects respiratory capacity." },
        { type: "mcq", prompt: "What is the difference between direct sensing and indirect modelling in exposure assessment?", options: ["They are the same method with different names", "Direct sensing uses personal monitors; indirect modelling estimates exposure using geographic proximity data", "Direct sensing is always less accurate", "Indirect modelling requires a blood sample"], answerIndex: 1, explanation: "Direct sensing uses personal monitors (e.g. for air quality or radiation) worn by the individual, while indirect modelling estimates exposure using geographic data based on proximity to a source." },
        { type: "short", prompt: "Explain, in your own words, what biomonitoring is and why it's called the 'gold standard'.", keywords: ["measure", "toxicant", "metabolite", "specimen", "biological"], explanation: "Biomonitoring measures toxicants or their metabolites directly within biological specimens like blood, urine, hair, or fat, giving a direct physiological confirmation of exposure, which is why it's considered the gold standard over indirect estimation methods." },
        { type: "short", prompt: "Name the two broad categories of air pollutants described in the lesson.", keywords: ["gaseous", "particulate", "chemical", "heavy metal"], explanation: "The two broad categories are (1) gaseous pollutants and particulate matter, and (2) chemical and heavy metal toxins." },
        { type: "short", prompt: "What biomarker mentioned in the lesson specifically indicates DNA damage?", keywords: ["8-ohdg", "8-hydroxy"], explanation: "8-OHdG (8-hydroxy-2-deoxyguanine) is the biomarker mentioned that indicates DNA damage." }
      ]
    }
  },

  // ============================================================
  // STATION 9 — OCCUPATIONAL HEALTH
  // ============================================================
  {
    id: "occupational",
    order: 9,
    title: "Occupational Health",
    tagline: "How the workplace itself becomes a risk factor",
    icon: "occupational",
    lesson: {
      intro: [
        `Occupational physiology is the study of how the body functions while at work, and occupational health is the applied field built on top of that study. It exists to improve worker competence, help people appreciate how their own bodies react to work conditions, design safer work environments, and detect illness early, before it becomes severe or irreversible.`
      ],
      sections: [
        {
          heading: "Basic principles of occupational health",
          body: [
            `Occupational health rests on three basic principles: health promotion, meaning actively encouraging healthy behavior among workers rather than only reacting to illness after it appears; workers' participation in work activities, meaning workers themselves are involved in shaping how their work environment is designed and monitored, not just subjected to rules made without their input; and continuous monitoring, meaning health and safety checks are ongoing, not a one-time inspection.`
          ]
        },
        {
          heading: "Environmental contribution to diabetes",
          body: [
            `Diabetes is a metabolic disease with two main types. Type 1 diabetes results from destruction of the pancreatic cells that produce insulin. Type 2 diabetes, the more common form, is largely caused by unhealthy lifestyle and diet. Several environmental and occupational causes are highlighted: fast food and refined fats combined with a sedentary lifestyle (from prolonged sitting or inactivity); pesticide exposure, since pesticides can act as EDCs disrupting normal metabolic hormone function; poor sleep, particularly from shift work schedules that disrupt normal sleep cycles; and socio-economic factors, including poor nutrition, limited access to proper healthcare, and increased chronic stress.`
          ]
        },
        {
          heading: "Environmental factors for hypertension",
          body: [
            `Hypertension is a constant elevation of arterial blood pressure. The environmental and occupational factors contributing to it include the nature of a person's job (physically or mentally stressful work); excess salt intake, especially from canned foods and fast food like burgers, since salt causes the body to retain sodium, which raises blood pressure by causing blood vessels to constrict and slowing arterial blood flow; low physical activity; smoking, because nicotine is a vasoconstrictor (it narrows blood vessels); environmental pollutants, which cause inflammation and oxidative stress; noise pollution; and poor sleep.`
          ]
        }
      ],
      examples: [
        {
          title: "Shift work and diabetes risk",
          text: `Poor sleep from shift work schedules is listed as a specific occupational contributor to Type 2 diabetes, alongside diet and sedentary behavior.`
        },
        {
          title: "Canned food and hypertension",
          text: `Excess salt in canned foods and fast food causes sodium retention, which raises blood pressure by constricting blood vessels and slowing arterial blood flow.`
        },
        {
          title: "Nicotine as a vasoconstrictor",
          text: `Smoking contributes to hypertension because nicotine narrows (constricts) blood vessels, directly raising blood pressure.`
        }
      ],
      whyMatters: [
        `Occupational health reframes chronic diseases like diabetes and hypertension as being partly environmental and workplace-driven, not purely a matter of individual willpower. This matters directly for workplace design and policy: shift schedules, food availability at work, noise levels, and stress management are all legitimate levers for reducing chronic disease risk at a population level.`
      ],
      glossary: [
        { term: "Occupational physiology", def: "The study of how the body functions during work." },
        { term: "Type 1 diabetes", def: "A form of diabetes caused by destruction of the insulin-producing cells of the pancreas." },
        { term: "Type 2 diabetes", def: "The more common form of diabetes, largely caused by unhealthy diet and lifestyle factors." },
        { term: "Hypertension", def: "A constant elevation of arterial blood pressure above normal levels." },
        { term: "Vasoconstrictor", def: "A substance, such as nicotine, that narrows blood vessels, raising blood pressure." }
      ]
    },
    quiz: {
      questions: [
        { type: "mcq", prompt: "What are the three basic principles of occupational health described in the lesson?", options: ["Diagnosis, treatment, discharge", "Health promotion, workers' participation, continuous monitoring", "Hiring, training, firing", "Salary, benefits, insurance"], answerIndex: 1, explanation: "The three basic principles are health promotion, workers' participation in work activities, and continuous monitoring." },
        { type: "mcq", prompt: "What is the main cause of Type 2 diabetes, according to the lesson?", options: ["Destruction of pancreatic cells", "Unhealthy diet and lifestyle", "A viral infection", "Genetic mutation only"], answerIndex: 1, explanation: "Type 2 diabetes, the more common form, is largely caused by unhealthy diet and lifestyle, unlike Type 1, which results from pancreatic cell destruction." },
        { type: "mcq", prompt: "Why does excess salt intake raise blood pressure?", options: ["Salt directly damages the heart muscle", "It causes sodium retention, leading to vessel constriction and slowed arterial blood flow", "It has no real effect on blood pressure", "It reduces the amount of blood in the body"], answerIndex: 1, explanation: "Salt causes the body to retain sodium, leading to blood vessel constriction and slowed arterial blood flow, which raises blood pressure." },
        { type: "mcq", prompt: "How does nicotine contribute to hypertension?", options: ["It has no effect on blood vessels", "It is a vasoconstrictor, narrowing blood vessels", "It dilates blood vessels, lowering pressure", "It only affects lung tissue"], answerIndex: 1, explanation: "Nicotine is a vasoconstrictor, meaning it narrows blood vessels, which raises blood pressure." },
        { type: "short", prompt: "List two environmental/occupational causes of diabetes mentioned in the lesson, besides diet.", keywords: ["pesticide", "sleep", "shift", "stress", "socio-economic"], explanation: "Environmental/occupational causes include pesticide exposure (acting as an EDC), poor sleep from shift work, and socio-economic factors like limited healthcare access and stress." },
        { type: "short", prompt: "Explain, in your own words, why occupational health treats disease risk as partly a workplace design issue, not just individual choice.", keywords: ["workplace", "design", "environment", "shift", "policy"], explanation: "Because factors like shift schedules, food availability, noise, and stress are shaped by workplace policy and design, not just personal choices, occupational health treats disease prevention as something employers and planners can directly influence." }
      ]
    }
  },

  // ============================================================
  // STATION 10 — ERGONOMICS / HUMAN FACTORS ENGINEERING
  // ============================================================
  {
    id: "ergonomics",
    order: 10,
    title: "Ergonomics / Human Factors Engineering",
    tagline: "Designing the world to fit the body, not the other way around",
    icon: "ergonomics",
    lesson: {
      intro: [
        `Ergonomics connects directly back to homeostasis, the body's drive to maintain a stable internal balance, and to how industries create products that are not harmful to users and whose intended use will not cause accidents. Ergonomics is, put simply, anything done to make the human body comfortable while using technology or interacting with a designed environment. In studying ergonomics within physiology, the goal is exploring how materials, products, built environments, and designed activities can achieve the highest possible level of safety for users, protecting health, preventing accidents, or reducing their effects when they do happen.`,
        `Ergonomics is also known by another name: Human Factors Engineering (HFE). It considers the protection of the musculoskeletal, cardiac-respiratory, nervous, and sensory systems. Although ergonomic thinking existed informally earlier, it was popularized in the modern era in 1857, and it gained its official, formal definition from the International Ergonomics Association (IEA) in 2000. The IEA defines ergonomics/HFE as the scientific discipline concerned with understanding the interactions among humans and other elements of a system, and the applied profession that uses theory, principles, data, and methods to design systems that optimize both human wellbeing and overall system performance.`
      ],
      sections: [
        {
          heading: "Four key fundamental concepts in human factors",
          body: [
            `First, human-centred design: this means actively considering human capabilities and limitations when designing anything, including ergonomic strength, physical endurance, and cognitive load (how much mental effort a task demands).`,
            `Second, prevention over cure: this concept focuses on proactive design that avoids work-related musculoskeletal disorders (WMSDs) before they happen, rather than treating them after the fact. Examples include conditions like rheumatoid arthritis, repetitive strain injury (RSI, caused by repeated motion patterns), and chronic fatigue.`,
            `Third, multidisciplinary span leverage: ergonomics, to be done properly for real people, must draw on multiple fields at once, including physiology, anatomy, biomechanics, psychology, engineering, anthropology, and statistics. No single discipline covers everything ergonomics needs to account for.`,
            `Fourth, the systems approach: this means being deliberate about viewing the human being as just one element within a larger socio-technical system, made up of the person, the machine, the environment, and the organization together, rather than designing for the human in isolation.`
          ]
        },
        {
          heading: "Ergonomic stressors: the key risk factors",
          body: [
            `A set of key ergonomic stressors must be considered when implementing ergonomics in any real setting: the use of force (how much physical effort a task requires), chronic static posture (staying in one fixed position for long periods), vibration (from tools or machinery), contact pressure (pressure on specific body parts from equipment or surfaces), temperature extremes, and duration of exposure. Each of these, on its own or combined with the others, poses a real risk factor for injury or long-term harm if left unmanaged.`
          ]
        }
      ],
      examples: [
        {
          title: "Standardized workstation design",
          text: `Human-centred design applied to a workstation means accounting for physical strength limits and cognitive load, not designing purely around what looks efficient on paper.`
        },
        {
          title: "RSI from repetitive tasks",
          text: `Repetitive strain injury is a direct real-world example of the kind of work-related musculoskeletal disorder that 'prevention over cure' thinking is meant to avoid through proactive design.`
        }
      ],
      whyMatters: [
        `Ergonomics is the practical, applied bridge between physiology and everyday industrial or office design. Every safety guideline about posture, workstation height, tool vibration limits, or rest breaks traces back to these same four fundamental concepts and six stressor categories.`
      ],
      glossary: [
        { term: "Ergonomics / Human Factors Engineering (HFE)", def: "The scientific discipline and applied profession concerned with optimizing the interaction between humans and the systems (products, environments, tasks) they use." },
        { term: "Cognitive load", def: "The amount of mental effort a task demands from a person." },
        { term: "Work-related musculoskeletal disorder (WMSD)", def: "An injury or disorder of the muscles, joints, or connective tissue caused or worsened by work conditions, e.g. RSI or arthritis." },
        { term: "Repetitive strain injury (RSI)", def: "An injury caused by repeated motion patterns, often from work tasks." },
        { term: "Socio-technical system", def: "A system viewing the human as one element among the machine, environment, and organization, rather than in isolation." },
        { term: "Ergonomic stressor", def: "A risk factor such as force, static posture, vibration, contact pressure, temperature extremes, or exposure duration that can cause harm if unmanaged." }
      ]
    },
    quiz: {
      questions: [
        { type: "mcq", prompt: "What is another official name for ergonomics, as given in the lesson?", options: ["Human Factors Engineering (HFE)", "Occupational Therapy", "Applied Kinesiology", "Systems Biology"], answerIndex: 0, explanation: "Ergonomics is also known as Human Factors Engineering (HFE), officially defined by the IEA in 2000." },
        { type: "mcq", prompt: "Which organization gave ergonomics its official definition in 2000?", options: ["World Health Organization (WHO)", "International Ergonomics Association (IEA)", "United Nations Environment Programme (UNEP)", "National Agency for Food and Drug Administration and Control (NAFDAC)"], answerIndex: 1, explanation: "The International Ergonomics Association (IEA) gave ergonomics/HFE its official definition in 2000." },
        { type: "mcq", prompt: "'Prevention over cure' in ergonomics focuses on:", options: ["Treating musculoskeletal disorders after they occur", "Proactive design to avoid work-related musculoskeletal disorders (WMSDs) before they happen", "Curing diseases faster through better medicine", "Reducing worker salaries to cut costs"], answerIndex: 1, explanation: "Prevention over cure means proactively designing work environments to avoid WMSDs like RSI and chronic fatigue before they occur." },
        { type: "mcq", prompt: "Which of these is NOT one of the four fundamental concepts of human factors in the lesson?", options: ["Human-centred design", "Prevention over cure", "Multidisciplinary span leverage", "Profit maximization"], answerIndex: 3, explanation: "The four fundamental concepts are human-centred design, prevention over cure, multidisciplinary span leverage, and the systems approach. Profit maximization is not one of them." },
        { type: "short", prompt: "List at least four ergonomic stressors mentioned in the lesson.", keywords: ["force", "posture", "vibration", "pressure", "temperature", "duration"], explanation: "The ergonomic stressors listed are: use of force, chronic static posture, vibration, contact pressure, temperature extremes, and duration of exposure." },
        { type: "short", prompt: "Explain what the 'systems approach' means in ergonomics.", keywords: ["person", "machine", "environment", "organization", "element"], explanation: "The systems approach means viewing the human as just one element within a larger socio-technical system made up of the person, machine, environment, and organization, rather than designing for the person alone." }
      ]
    }
  },

  // ============================================================
  // STATION 11 — DISASTER MANAGEMENT
  // ============================================================
  {
    id: "disaster",
    order: 11,
    title: "Basic Principles of Disaster Management",
    tagline: "What happens when a community can't cope alone",
    icon: "disaster",
    lesson: {
      intro: [
        `A disaster refers to a serious disruption in the functioning of a society or community. More precisely, it refers to a widespread human, material, or economic impact that exceeds the ability of the affected community to cope using only its own resources, the scale of the impact is what turns an incident into a disaster. Disaster management is the organized process of dealing with this impact: preparing for it, responding to it, and learning from it once it has passed.`
      ],
      sections: [
        {
          heading: "Types of disasters",
          body: [
            `Natural disasters are physical phenomena that occur either suddenly or gradually, and many have an immediate impact, with human health affected as a secondary consequence, through death, suffering, and property loss. They fall into categories: geophysical (earthquakes, landslides, tsunamis, volcanic activity), hydrological (storms, wave surges), and biological (epidemics, insect infestation, animal plagues).`,
            `Natural disasters are further characterized by three properties: duration, whether the event is slow or prolonged; speed of onset, whether it develops rapidly or slowly; and area of extent, whether it is localized or widespread. For example, earthquakes are short in duration and affect a relatively small area, whereas droughts are prolonged, slow-developing, and often cover a large area.`,
            `Man-made disasters are events caused by human activity, occurring in or near human settlements, such as environmental degradation, pollution, and accidents. A complex disaster results from a combination of both natural and man-made effects together, often leading to a breakdown of authority, looting, and consequences like food insecurity, armed conflict, and epidemics. A closely related term, complex emergencies, refers specifically to crises that combine humanitarian, political, and military challenges at once, characterized by extensive violence, large-scale displacement of populations, and significant loss of life.`
          ]
        },
        {
          heading: "The stages of disaster management",
          body: [
            `Disaster management is an organized effort to handle emergencies by managing resources and responsibilities, structured around three broad focuses: preparedness (planning ahead), response (acting during the disaster itself), and recovery (rebuilding afterward). Within this structure, there are five specific stages.`,
            `Prevention involves proactive measures taken to avoid or reduce disaster rates, such as a school's evacuation plan for fires or tornadoes, or city planning that includes dams or drainage channels specifically to prevent flooding. Mitigation focuses on limiting loss of life and damage once an event is unavoidable, and comes in two forms: structural mitigation involves physical changes, such as clearing trees near homes to reduce storm damage, while non-structural mitigation involves policies or building codes, such as requiring stronger buildings or regulations that guide the wider population's behavior and construction standards.`,
            `Preparedness involves continuous planning and training for emergencies, such as fire drills and active-shooter drills, along with evacuation rehearsals specifically. Response is the immediate action taken after a disaster strikes, coordinating personnel, supplies, and equipment to restore safety, for example extinguishing lingering fires after a wildfire or stabilizing damaged high-rise buildings. Recovery is the long-term rebuilding and restoration of community function, and it specifically prioritizes restoring essential services first: food, water, healthcare, utilities, and transportation.`
          ]
        }
      ],
      examples: [
        {
          title: "Earthquake vs. drought",
          text: `An earthquake is short in duration and localized in area; a drought is prolonged, slow in onset, and often covers a large area, illustrating how disasters differ along duration, speed of onset, and extent.`
        },
        {
          title: "Structural vs. non-structural mitigation",
          text: `Clearing trees near homes to reduce storm damage is structural mitigation (a physical change); requiring stronger building codes is non-structural mitigation (a policy change).`
        },
        {
          title: "Recovery's priority order",
          text: `Recovery efforts prioritize restoring food, water, healthcare, utilities, and transportation first, since these are the essential services a community needs functioning before broader rebuilding can proceed.`
        }
      ],
      whyMatters: [
        `Disaster management gives you a structured vocabulary, prevention, mitigation, preparedness, response, recovery, that maps directly onto real emergency planning at every level, from a single school's fire drill to national flood policy. Knowing which stage a given action belongs to helps you evaluate whether a community's disaster plan actually covers the full cycle or has gaps.`
      ],
      glossary: [
        { term: "Disaster", def: "A serious disruption to a society or community with impact that exceeds the community's ability to cope using its own resources." },
        { term: "Complex disaster", def: "A disaster resulting from a combination of natural and man-made effects, often leading to breakdown of authority and secondary crises like food insecurity or conflict." },
        { term: "Complex emergency", def: "A crisis combining humanitarian, political, and military challenges, marked by violence, displacement, and significant loss of life." },
        { term: "Prevention (disaster management)", def: "Proactive measures taken to avoid or reduce disaster occurrence, e.g. evacuation plans or flood-preventing city infrastructure." },
        { term: "Mitigation", def: "Measures taken to limit loss of life and damage, either structural (physical changes) or non-structural (policy/code changes)." },
        { term: "Preparedness", def: "Continuous planning and training for emergencies, such as drills and evacuation rehearsals." },
        { term: "Response", def: "Immediate action taken after a disaster to coordinate personnel, supplies, and equipment and restore safety." },
        { term: "Recovery", def: "Long-term rebuilding of community function, prioritizing essential services like food, water, healthcare, utilities, and transportation." }
      ]
    },
    quiz: {
      questions: [
        { type: "mcq", prompt: "What officially distinguishes a 'disaster' from a smaller incident, according to the lesson?", options: ["The number of news reports it generates", "Its impact exceeds the affected community's ability to cope using its own resources", "Whether it happens in a city or rural area", "Whether it is natural or man-made"], answerIndex: 1, explanation: "A disaster is defined by impact that exceeds the affected community's ability to cope using only its own resources." },
        { type: "mcq", prompt: "Which category do earthquakes, landslides, and volcanic activity fall under?", options: ["Hydrological", "Biological", "Geophysical", "Man-made"], answerIndex: 2, explanation: "Earthquakes, landslides, tsunamis, and volcanic activity are classified as geophysical natural disasters." },
        { type: "mcq", prompt: "What is the difference between structural and non-structural mitigation?", options: ["Structural mitigation is policy-based; non-structural is physical", "Structural mitigation involves physical changes; non-structural involves policies or codes", "They are the same thing", "Structural mitigation only applies to earthquakes"], answerIndex: 1, explanation: "Structural mitigation involves physical changes (like clearing trees near homes); non-structural mitigation involves policies or building codes." },
        { type: "mcq", prompt: "Which stage of disaster management focuses on restoring essential services like food, water, and healthcare?", options: ["Prevention", "Response", "Recovery", "Mitigation"], answerIndex: 2, explanation: "Recovery is the long-term rebuilding stage that specifically prioritizes restoring essential services like food, water, healthcare, utilities, and transportation." },
        { type: "mcq", prompt: "A 'complex emergency', as defined in the lesson, specifically combines which types of challenges?", options: ["Economic and technological", "Humanitarian, political, and military", "Agricultural and educational", "Only natural and biological"], answerIndex: 1, explanation: "A complex emergency combines humanitarian, political, and military challenges, marked by violence, displacement, and loss of life." },
        { type: "short", prompt: "Name the five stages of disaster management covered in the lesson.", keywords: ["prevention", "mitigation", "preparedness", "response", "recovery"], explanation: "The five stages are prevention, mitigation, preparedness, response, and recovery." },
        { type: "short", prompt: "Using the earthquake vs. drought comparison, explain the three characteristics used to describe natural disasters.", keywords: ["duration", "onset", "area", "extent", "speed"], explanation: "Natural disasters are characterized by duration (slow or prolonged), speed of onset (rapid or slow), and area of extent (localized or widespread). Earthquakes are short, rapid, and localized; droughts are prolonged, slow, and widespread." }
      ]
    }
  },

  // ============================================================
  // STATION 12 — SPECIAL PROTECTIVE DEVICES
  // ============================================================
  {
    id: "protective",
    order: 12,
    title: "Uses of Special Protective Devices",
    tagline: "The equipment standing between hazard and harm",
    icon: "protective",
    lesson: {
      intro: [
        `Special protective devices are tools, equipment, or systems specifically designed to safeguard individuals and the environment from hazards. They are widely used across disaster management and everyday occupational settings alike. Importantly, their real-world effect depends not only on whether they are available, but on whether people are properly trained to use them and whether they are properly integrated into a broader emergency response system, a protective device left unused in a cupboard protects no one.`
      ],
      sections: [
        {
          heading: "Category 1: Personal Protective Equipment (PPE)",
          body: [
            `Personal Protective Equipment, or PPE, includes items like helmets and hard hats, which protect against head injuries and falling hazards. Respirators and masks shield the wearer against harmful dust, smoke, chemical exposure, or infectious agents. Gloves, protective clothing, and eye protection round out the core PPE category, covering skin and eye exposure to hazards during direct hands-on work.`
          ]
        },
        {
          heading: "Category 2: Industrial and Environmental Protective Devices",
          body: [
            `This category is broader and covers fire extinguishers and radiation shielding sheets as direct-hazard countermeasures. It also includes emergency and protective devices such as isolation chambers, which prevent the spread of infectious disease, and protective barriers like plexiglass panels used in laboratories and hospitals to physically separate people from a hazard. Decontamination units are used specifically during chemical and biological emergencies to clean exposed individuals or equipment. Emergency breathing apparatus, such as oxygen masks used in fire or rescue operations, keep responders breathing safely in hazardous air.`,
            `The category also extends into technical and security protective devices: surge protectors and circuit breakers guard against electrical hazards, bulletproof vests and shields protect against physical/ballistic threats, cybersecurity firewalls protect digital infrastructure from cyberattack, and surveillance systems monitor and detect threats in both public and private spaces. The breadth of this category reflects a wider point: "protection" in disaster and occupational contexts spans physical, chemical, biological, electrical, and digital hazards, not just one type of danger.`
          ]
        },
        {
          heading: "Why protective devices matter",
          body: [
            `Special protective devices serve three main purposes. First, safety of personnel, reducing injuries and fatalities among the people directly exposed to a hazard. Second, operational continuity, ensuring businesses and essential services can keep functioning during a crisis rather than shutting down entirely. Third, risk reduction, minimizing overall exposure to hazards across a workplace or community, lowering the probability that a hazard turns into an actual injury or loss.`
          ]
        }
      ],
      examples: [
        {
          title: "Isolation chambers",
          text: `Used to physically contain and prevent the spread of infectious disease, an example of an industrial/environmental protective device rather than personal protective equipment.`
        },
        {
          title: "Plexiglass barriers in labs and hospitals",
          text: `Provide a physical barrier separating people from a hazard, without requiring each individual to wear separate protective gear.`
        },
        {
          title: "Cybersecurity firewalls as protective devices",
          text: `Included in the same broad protective-device category as PPE and fire extinguishers, illustrating how the concept of 'protection' spans physical and digital hazards alike.`
        }
      ],
      whyMatters: [
        `This closes out the course by tying disaster management and occupational health together: protective devices are the concrete, physical (and digital) implementation of everything covered in earlier stations, ergonomic stressor management, disaster mitigation, occupational hazard reduction, all of it ultimately relies on the right protective device being available, functional, and actually used by someone trained to use it.`
      ],
      glossary: [
        { term: "Personal Protective Equipment (PPE)", def: "Equipment worn by an individual, such as helmets, respirators, gloves, and eye protection, to protect against direct hazard exposure." },
        { term: "Isolation chamber", def: "A device or space used to contain and prevent the spread of infectious disease." },
        { term: "Decontamination unit", def: "Equipment used to clean exposed individuals or materials during chemical or biological emergencies." },
        { term: "Operational continuity", def: "The ability of a business or essential service to keep functioning during a crisis." }
      ]
    },
    quiz: {
      questions: [
        { type: "mcq", prompt: "What determines the real-world effectiveness of a protective device, beyond its availability, according to the lesson?", options: ["Its cost", "Proper training and integration into an emergency response system", "Its color and visibility", "How new the device is"], answerIndex: 1, explanation: "The lesson stresses that effectiveness depends on availability, proper training, and integration into a broader emergency response system, not availability alone." },
        { type: "mcq", prompt: "Which of these is classified as Personal Protective Equipment (PPE)?", options: ["A fire extinguisher", "A surveillance camera", "A respirator mask", "A cybersecurity firewall"], answerIndex: 2, explanation: "A respirator mask is PPE, worn directly by an individual to shield against dust, smoke, chemicals, or infectious agents." },
        { type: "mcq", prompt: "What is the specific purpose of an isolation chamber?", options: ["To store hazardous chemicals long-term", "To prevent the spread of infectious disease", "To generate emergency electricity", "To filter drinking water"], answerIndex: 1, explanation: "Isolation chambers are used specifically to prevent the spread of infectious disease by containing affected individuals or materials." },
        { type: "mcq", prompt: "Cybersecurity firewalls are grouped in the lesson under which broader category of protective devices?", options: ["Personal Protective Equipment (PPE)", "Technical and security protective devices", "Emergency breathing apparatus", "None; they aren't considered protective devices"], answerIndex: 1, explanation: "Cybersecurity firewalls fall under technical and security protective devices, alongside surge protectors, bulletproof vests, and surveillance systems." },
        { type: "short", prompt: "Name the three main purposes/importance of special protective devices given in the lesson.", keywords: ["safety", "personnel", "operational", "continuity", "risk", "reduction"], explanation: "The three main purposes are safety of personnel, operational continuity, and risk reduction." },
        { type: "short", prompt: "Give one example of an 'industrial and environmental protective device' (not PPE) from the lesson.", keywords: ["fire extinguisher", "radiation", "isolation", "decontamination", "plexiglass", "barrier"], explanation: "Examples include fire extinguishers, radiation shielding sheets, isolation chambers, decontamination units, and plexiglass barriers." }
      ]
    }
  },
];

/* ==========================================================================
   SPORT NUTRITION DATA — stations broken into study PARTS (flashcards +
   short quizzes), plus a station-level FINAL EXAM (objective MCQ pool +
   MBBS-level theory questions). Drawn from student lecture notes on
   Sport Nutrition and Supplementation to Athletic Performance.
   ========================================================================== */

const SN_STATIONS = [
  {
    "id": "sn-intro",
    "courseId": "sportnutrition",
    "order": 1,
    "title": "Introduction to Sport Nutrition",
    "tagline": "Why what you eat is part of your training program",
    "icon": "sn_intro",
    "lesson": {
      "intro": [
        "Sport nutrition is a dynamic and specialized branch of nutrition science that applies scientific principles of diet and metabolism to enhance athletic performance, support recovery, and maintain optimal health in physically active individuals. It draws extensively from human physiology, biochemistry, and exercise science to explain how nutrients are digested, absorbed, transported, and utilized during physical activity.",
        "Participation in competitive and recreational sport continues to rise globally, and that has made evidence-based sport nutrition increasingly central to two goals at once: getting more out of exercise (performance optimization) and getting hurt less often doing it (injury prevention). At the core of sport nutrition is a simple question with a complicated answer: how does the body generate and use energy? Human movement depends on complex metabolic pathways involving the ATP-phosphagen system, the glycolytic system, and the oxidative phosphorylation system, three systems you will meet properly in the next station."
      ],
      "sections": [
        {
          "heading": "The three reasons people train",
          "body": [
            "Most exercise goals reduce to three underlying reasons: endurance, strength, and fitness. Endurance training emphasizes the body's ability to sustain effort over time, and leans heavily on carbohydrate and fat metabolism. Strength training emphasizes force production and muscle growth, and leans heavily on protein and creatine-phosphate metabolism. Fitness training is the broader, general goal of overall health and conditioning, drawing on all three energy systems and a balanced diet. Nearly every nutrition decision an athlete makes traces back to which of these three goals they are training toward."
          ]
        },
        {
          "heading": "Exercise as metabolic stress",
          "body": [
            "Exercise imposes significant metabolic stress on the body, requiring careful coordination of energy sources, fluid balance, and micronutrients. Sport nutrition, at its core, examines how nutrients and micronutrients are used during exercise, and how their availability influences physiological responses such as energy production, muscle contraction, and recovery processes.",
            "Two clear examples make this concrete. Carbohydrate availability directly affects glycogen stores and endurance capacity, meaning a poorly fueled athlete will fatigue sooner regardless of fitness level. Hydration status influences thermal regulation and cardiovascular stability, meaning a dehydrated athlete's heart and temperature-control systems are both working under unnecessary strain. These are both acute effects, changes that show up during a single session of exercise."
          ]
        },
        {
          "heading": "Long-term adaptation: the chronic side of sport nutrition",
          "body": [
            "Beyond the acute, single-session effects, sport nutrition also explores how long-term dietary patterns support training adaptations. This includes muscle hypertrophy (growth in muscle size), mitochondrial biogenesis (the growth of more energy-producing structures inside cells), and improved metabolic efficiency over months and years of consistent training.",
            "Nutritional intake interacts with the molecular signaling pathways that regulate protein synthesis and energy metabolism, thereby influencing how well the body adapts to a training stimulus. This is why two athletes can follow the exact same training program and get different results, their nutrition is shaping how their body responds to that training at a molecular level, not just fueling the workout itself."
          ]
        },
        {
          "heading": "Fatigue, recovery, and the exercised body",
          "body": [
            "Sport nutrition also addresses the mechanisms underlying fatigue, recognizing that inadequate nutrient availability, dehydration, and electrolyte imbalance can significantly impair performance. Recovery itself should be understood as an active, nutritionally mediated process, involving glycogen resynthesis, muscle repair, and restoration of physiological homeostasis, not simply \"resting.\"",
            "There is a meaningful physiological difference between a body that trains regularly and one that does not. In the exercised person, there is higher protein turnover and greater protein synthesis after exercise, meaning better muscle adaptation, provided protein intake is adequate. In an inactive person, there is comparatively low protein synthesis, meaning more muscle loss over time. This single comparison is a useful lens for almost everything covered later in this course: consistent training plus adequate nutrition drives adaptation, while either one missing undermines the other."
          ]
        }
      ],
      "examples": [
        {
          "title": "Carbohydrate availability and endurance",
          "text": "A poorly fueled endurance athlete with low glycogen stores will fatigue sooner than a well-fueled one, even at identical fitness levels, showing how acute nutrient availability directly limits performance."
        },
        {
          "title": "Exercised vs. inactive protein synthesis",
          "text": "An exercising person shows higher protein turnover and greater synthesis after training if protein intake is adequate; an inactive person shows low protein synthesis and more muscle loss over time."
        },
        {
          "title": "Hydration and cardiovascular stability",
          "text": "A dehydrated athlete's thermal regulation and cardiovascular system are both under added strain during exercise, a direct acute consequence of poor fluid balance."
        }
      ],
      "whyMatters": [
        "This station sets the frame for the entire course: nutrition is not separate from training, it is part of the training stimulus itself. Whether the goal is winning a race, building muscle, or simply staying fit, the underlying energy systems, molecular adaptation pathways, and recovery processes covered in later stations all trace back to the ideas introduced here.",
        "Clinically and practically, this framing matters because it treats fatigue, poor recovery, and stalled progress as potentially nutritional problems, not just training problems, giving athletes and coaches a second lever to pull when performance plateaus."
      ],
      "glossary": [
        {
          "term": "Sport nutrition",
          "def": "A specialized branch of nutrition science applying diet and metabolism principles to enhance athletic performance, support recovery, and maintain health in physically active individuals."
        },
        {
          "term": "Endurance",
          "def": "The body's capacity to sustain physical effort over an extended period, relying heavily on carbohydrate and fat metabolism."
        },
        {
          "term": "Mitochondrial biogenesis",
          "def": "The growth of new mitochondria (energy-producing structures) within cells as a long-term adaptation to training."
        },
        {
          "term": "Muscle hypertrophy",
          "def": "An increase in the size of skeletal muscle, typically resulting from resistance training and adequate protein intake."
        },
        {
          "term": "Glycogen",
          "def": "The stored form of glucose in the liver and muscles, used as a ready energy reserve during exercise."
        },
        {
          "term": "Homeostasis",
          "def": "The body's maintenance of a stable internal environment despite external or internal changes."
        }
      ]
    },
    "parts": [
      {
        "id": "intro",
        "title": "Introduction",
        "cards": [
          {
            "front": "Introduction (1/2)",
            "back": "Sport nutrition is a dynamic and specialized branch of nutrition science that applies scientific principles of diet and metabolism to enhance athletic performance, support recovery, and maintain optimal health in physically active individuals. It draws extensively from human physiology, biochemistry, and exercise science to explain how nutrients are digested, absorbed, transported, and utilized during physical activity."
          },
          {
            "front": "Introduction (2/2)",
            "back": "Participation in competitive and recreational sport continues to rise globally, and that has made evidence-based sport nutrition increasingly central to two goals at once: getting more out of exercise (performance optimization) and getting hurt less often doing it (injury prevention). At the core of sport nutrition is a simple question with a complicated answer: how does the body generate and use energy? Human movement depends on complex metabolic pathways involving the ATP-phosphagen system, the glycolytic system, and the oxidative phosphorylation system, three systems you will meet properly in the next station."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "What does sport nutrition draw on to explain how nutrients are used during physical activity?",
              "options": [
                "Human physiology, biochemistry, and exercise science",
                "Only cooking techniques",
                "Only competitive sport rules",
                "Only pharmacology"
              ],
              "answerIndex": 0,
              "explanation": "Sport nutrition draws extensively from human physiology, biochemistry, and exercise science."
            },
            {
              "type": "short",
              "prompt": "Name the three energy systems mentioned as central to how the body generates energy for movement.",
              "keywords": [
                "phosphagen",
                "glycolytic",
                "oxidative"
              ],
              "explanation": "The ATP-phosphagen system, the glycolytic system, and the oxidative phosphorylation system."
            }
          ]
        }
      },
      {
        "id": "sec0",
        "title": "The three reasons people train",
        "cards": [
          {
            "front": "The three reasons people train",
            "back": "Most exercise goals reduce to three underlying reasons: endurance, strength, and fitness. Endurance training emphasizes the body's ability to sustain effort over time, and leans heavily on carbohydrate and fat metabolism. Strength training emphasizes force production and muscle growth, and leans heavily on protein and creatine-phosphate metabolism. Fitness training is the broader, general goal of overall health and conditioning, drawing on all three energy systems and a balanced diet. Nearly every nutrition decision an athlete makes traces back to which of these three goals they are training toward."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "Which training goal leans heavily on carbohydrate and fat metabolism?",
              "options": [
                "Endurance training",
                "Strength training",
                "None of them",
                "Only fitness training"
              ],
              "answerIndex": 0,
              "explanation": "Endurance training emphasizes sustained effort and leans heavily on carbohydrate and fat metabolism."
            },
            {
              "type": "short",
              "prompt": "What does strength training lean heavily on, nutritionally?",
              "keywords": [
                "protein",
                "creatine"
              ],
              "explanation": "Strength training leans heavily on protein and creatine-phosphate metabolism."
            }
          ]
        }
      },
      {
        "id": "sec1",
        "title": "Exercise as metabolic stress",
        "cards": [
          {
            "front": "Exercise as metabolic stress (1/2)",
            "back": "Exercise imposes significant metabolic stress on the body, requiring careful coordination of energy sources, fluid balance, and micronutrients. Sport nutrition, at its core, examines how nutrients and micronutrients are used during exercise, and how their availability influences physiological responses such as energy production, muscle contraction, and recovery processes."
          },
          {
            "front": "Exercise as metabolic stress (2/2)",
            "back": "Two clear examples make this concrete. Carbohydrate availability directly affects glycogen stores and endurance capacity, meaning a poorly fueled athlete will fatigue sooner regardless of fitness level. Hydration status influences thermal regulation and cardiovascular stability, meaning a dehydrated athlete's heart and temperature-control systems are both working under unnecessary strain. These are both acute effects, changes that show up during a single session of exercise."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "What does carbohydrate availability directly affect during exercise?",
              "options": [
                "Glycogen stores and endurance capacity",
                "Bone density only",
                "Vision",
                "Hair growth"
              ],
              "answerIndex": 0,
              "explanation": "Carbohydrate availability directly affects glycogen stores and endurance capacity."
            },
            {
              "type": "short",
              "prompt": "What does poor hydration status influence during exercise?",
              "keywords": [
                "thermal",
                "temperature",
                "cardiovascular"
              ],
              "explanation": "Hydration status influences thermal regulation and cardiovascular stability."
            }
          ]
        }
      },
      {
        "id": "sec2",
        "title": "Long-term adaptation: the chronic side of sport nutrition",
        "cards": [
          {
            "front": "Long-term adaptation: the chronic side of sport nutrition (1/2)",
            "back": "Beyond the acute, single-session effects, sport nutrition also explores how long-term dietary patterns support training adaptations. This includes muscle hypertrophy (growth in muscle size), mitochondrial biogenesis (the growth of more energy-producing structures inside cells), and improved metabolic efficiency over months and years of consistent training."
          },
          {
            "front": "Long-term adaptation: the chronic side of sport nutrition (2/2)",
            "back": "Nutritional intake interacts with the molecular signaling pathways that regulate protein synthesis and energy metabolism, thereby influencing how well the body adapts to a training stimulus. This is why two athletes can follow the exact same training program and get different results, their nutrition is shaping how their body responds to that training at a molecular level, not just fueling the workout itself."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "What are two examples of long-term training adaptations mentioned in the lesson?",
              "options": [
                "Muscle hypertrophy and mitochondrial biogenesis",
                "Hair loss and dehydration",
                "Vitamin deficiency and anemia",
                "Only weight loss"
              ],
              "answerIndex": 0,
              "explanation": "Muscle hypertrophy and mitochondrial biogenesis are both given as chronic training adaptations."
            },
            {
              "type": "short",
              "prompt": "What do nutritional intake and molecular signaling pathways together influence?",
              "keywords": [
                "adapt",
                "training stimulus"
              ],
              "explanation": "Nutritional intake interacts with molecular signaling pathways regulating protein synthesis and energy metabolism, influencing how well the body adapts to a training stimulus."
            }
          ]
        }
      },
      {
        "id": "sec3",
        "title": "Fatigue, recovery, and the exercised body",
        "cards": [
          {
            "front": "Fatigue, recovery, and the exercised body (1/2)",
            "back": "Sport nutrition also addresses the mechanisms underlying fatigue, recognizing that inadequate nutrient availability, dehydration, and electrolyte imbalance can significantly impair performance. Recovery itself should be understood as an active, nutritionally mediated process, involving glycogen resynthesis, muscle repair, and restoration of physiological homeostasis, not simply \"resting.\""
          },
          {
            "front": "Fatigue, recovery, and the exercised body (2/2)",
            "back": "There is a meaningful physiological difference between a body that trains regularly and one that does not. In the exercised person, there is higher protein turnover and greater protein synthesis after exercise, meaning better muscle adaptation, provided protein intake is adequate. In an inactive person, there is comparatively low protein synthesis, meaning more muscle loss over time. This single comparison is a useful lens for almost everything covered later in this course: consistent training plus adequate nutrition drives adaptation, while either one missing undermines the other."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "How should recovery be understood, according to the lesson?",
              "options": [
                "As an active, nutritionally mediated process",
                "As simply resting with no nutritional component",
                "As unrelated to nutrition",
                "As only relevant to elite athletes"
              ],
              "answerIndex": 0,
              "explanation": "Recovery is an active, nutritionally mediated process involving glycogen resynthesis, muscle repair, and restoring homeostasis."
            },
            {
              "type": "short",
              "prompt": "Compare protein synthesis in an exercised person versus an inactive person.",
              "keywords": [
                "higher",
                "turnover",
                "low",
                "muscle loss"
              ],
              "explanation": "An exercised person has higher protein turnover and greater synthesis (with adequate intake); an inactive person has low synthesis and more muscle loss over time."
            }
          ]
        }
      },
      {
        "id": "examples",
        "title": "Real-World Examples",
        "cards": [
          {
            "front": "Carbohydrate availability and endurance",
            "back": "A poorly fueled endurance athlete with low glycogen stores will fatigue sooner than a well-fueled one, even at identical fitness levels, showing how acute nutrient availability directly limits performance."
          },
          {
            "front": "Exercised vs. inactive protein synthesis",
            "back": "An exercising person shows higher protein turnover and greater synthesis after training if protein intake is adequate; an inactive person shows low protein synthesis and more muscle loss over time."
          },
          {
            "front": "Hydration and cardiovascular stability",
            "back": "A dehydrated athlete's thermal regulation and cardiovascular system are both under added strain during exercise, a direct acute consequence of poor fluid balance."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "What happens to a poorly fueled endurance athlete with low glycogen, even at a high fitness level?",
              "options": [
                "They fatigue sooner than a well-fueled athlete",
                "They perform identically to a well-fueled athlete",
                "They automatically burn more fat",
                "Nothing changes"
              ],
              "answerIndex": 0,
              "explanation": "A poorly fueled athlete with low glycogen stores will fatigue sooner, even at identical fitness levels."
            },
            {
              "type": "short",
              "prompt": "What is under added strain in a dehydrated athlete during exercise?",
              "keywords": [
                "thermal",
                "cardiovascular",
                "temperature"
              ],
              "explanation": "Both thermal regulation and the cardiovascular system are under added strain during exercise when dehydrated."
            }
          ]
        }
      },
      {
        "id": "wrapup",
        "title": "Why It Matters & Key Terms",
        "cards": [
          {
            "front": "Why This Matters (1/2)",
            "back": "This station sets the frame for the entire course: nutrition is not separate from training, it is part of the training stimulus itself. Whether the goal is winning a race, building muscle, or simply staying fit, the underlying energy systems, molecular adaptation pathways, and recovery processes covered in later stations all trace back to the ideas introduced here."
          },
          {
            "front": "Why This Matters (2/2)",
            "back": "Clinically and practically, this framing matters because it treats fatigue, poor recovery, and stalled progress as potentially nutritional problems, not just training problems, giving athletes and coaches a second lever to pull when performance plateaus."
          },
          {
            "front": "Key Term: Sport nutrition",
            "back": "A specialized branch of nutrition science applying diet and metabolism principles to enhance athletic performance, support recovery, and maintain health in physically active individuals."
          },
          {
            "front": "Key Term: Endurance",
            "back": "The body's capacity to sustain physical effort over an extended period, relying heavily on carbohydrate and fat metabolism."
          },
          {
            "front": "Key Term: Mitochondrial biogenesis",
            "back": "The growth of new mitochondria (energy-producing structures) within cells as a long-term adaptation to training."
          },
          {
            "front": "Key Term: Muscle hypertrophy",
            "back": "An increase in the size of skeletal muscle, typically resulting from resistance training and adequate protein intake."
          },
          {
            "front": "Key Term: Glycogen",
            "back": "The stored form of glucose in the liver and muscles, used as a ready energy reserve during exercise."
          },
          {
            "front": "Key Term: Homeostasis",
            "back": "The body's maintenance of a stable internal environment despite external or internal changes."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "Why does this station frame nutrition as 'part of the training stimulus itself'?",
              "options": [
                "Because energy systems, adaptation pathways, and recovery all depend on it, not just fueling the workout",
                "Because nutrition has nothing to do with training",
                "Because only supplements matter for training",
                "Because training and nutrition are entirely separate topics"
              ],
              "answerIndex": 0,
              "explanation": "Nutrition is treated as part of the training stimulus because it shapes energy systems, molecular adaptation, and recovery, not just fueling a single workout."
            },
            {
              "type": "short",
              "prompt": "Define mitochondrial biogenesis.",
              "keywords": [
                "mitochondria",
                "grow",
                "cell",
                "energy"
              ],
              "explanation": "The growth of new mitochondria (energy-producing structures) within cells as a long-term training adaptation."
            }
          ]
        }
      }
    ],
    "finalExam": {
      "mcq": [
        {
          "type": "mcq",
          "prompt": "Sport nutrition is best described as:",
          "options": [
            "A specialized branch of nutrition science applying diet/metabolism principles to athletic performance, recovery, and health",
            "A diet plan focused only on weight loss",
            "A branch of medicine treating sports injuries",
            "A general term for eating before exercise"
          ],
          "answerIndex": 0,
          "explanation": "Sport nutrition applies scientific principles of diet and metabolism to enhance performance, support recovery, and maintain health in physically active people."
        },
        {
          "type": "mcq",
          "prompt": "What are the three underlying reasons for exercise described in the lesson?",
          "options": [
            "Endurance, strength, fitness",
            "Speed, agility, balance",
            "Cardio, weights, stretching",
            "Diet, sleep, hydration"
          ],
          "answerIndex": 0,
          "explanation": "Endurance, strength, and fitness are the three underlying training goals discussed."
        },
        {
          "type": "mcq",
          "prompt": "What does 'mitochondrial biogenesis' refer to?",
          "options": [
            "The growth of new energy-producing structures inside cells from long-term training",
            "The breakdown of muscle tissue",
            "A type of injury from overtraining",
            "The digestion of carbohydrates"
          ],
          "answerIndex": 0,
          "explanation": "Mitochondrial biogenesis is the growth of more mitochondria (energy-producing structures) as a chronic training adaptation."
        },
        {
          "type": "short",
          "prompt": "Give one acute (single-session) effect of poor carbohydrate availability or poor hydration during exercise.",
          "keywords": [
            "fatigue",
            "glycogen",
            "endurance",
            "thermal",
            "cardiovascular",
            "dehydrat"
          ],
          "explanation": "Low carbohydrate availability lowers glycogen stores and reduces endurance capacity; poor hydration impairs thermal regulation and cardiovascular stability."
        },
        {
          "type": "short",
          "prompt": "Explain the difference in protein synthesis between an exercised person and an inactive person.",
          "keywords": [
            "higher",
            "turnover",
            "synthesis",
            "low",
            "muscle loss"
          ],
          "explanation": "An exercised person (with adequate protein) has higher protein turnover and greater synthesis; an inactive person has low protein synthesis and more muscle loss over time."
        }
      ],
      "theory": [
        {
          "type": "theory",
          "prompt": "Explain how exercise imposes 'metabolic stress' on the body, distinguishing between its acute and chronic effects, with an example of each.",
          "keywordGroups": [
            [
              "metabolic stress",
              "coordinat"
            ],
            [
              "acute",
              "glycogen",
              "hydration",
              "thermal"
            ],
            [
              "chronic",
              "hypertrophy",
              "mitochondrial",
              "adaptation"
            ],
            [
              "example"
            ]
          ],
          "minGroups": 3,
          "explanation": "Acute effects show up within a single session (e.g. carbohydrate availability affecting glycogen/endurance, hydration affecting thermal regulation); chronic effects build over months of training (e.g. muscle hypertrophy, mitochondrial biogenesis)."
        },
        {
          "type": "theory",
          "prompt": "Discuss the three underlying reasons people train (endurance, strength, fitness) and the nutritional emphasis each one leans on.",
          "keywordGroups": [
            [
              "endurance",
              "carbohydrate",
              "fat"
            ],
            [
              "strength",
              "protein",
              "creatine"
            ],
            [
              "fitness",
              "balanced",
              "all three"
            ]
          ],
          "minGroups": 2,
          "explanation": "Endurance leans on carbohydrate/fat metabolism, strength leans on protein/creatine-phosphate metabolism, and fitness draws on a balance of all systems."
        },
        {
          "type": "theory",
          "prompt": "Explain the physiological difference between an exercised body and an inactive body in terms of protein synthesis, and why this matters for recovery nutrition.",
          "keywordGroups": [
            [
              "exercised",
              "higher",
              "turnover",
              "synthesis"
            ],
            [
              "inactive",
              "low",
              "muscle loss"
            ],
            [
              "adequate protein",
              "adaptation"
            ],
            [
              "recovery"
            ]
          ],
          "minGroups": 3,
          "explanation": "An exercised, adequately-fed body shows higher protein turnover and greater post-exercise synthesis, driving adaptation; an inactive body shows low synthesis and progressive muscle loss."
        },
        {
          "type": "theory",
          "prompt": "Describe how nutrient intake interacts with molecular signaling pathways to influence training adaptation.",
          "keywordGroups": [
            [
              "molecular signaling",
              "pathway"
            ],
            [
              "protein synthesis",
              "energy metabolism"
            ],
            [
              "nutrient intake",
              "interact"
            ],
            [
              "adapt",
              "training stimulus"
            ]
          ],
          "minGroups": 3,
          "explanation": "Nutrient intake interacts with signaling pathways regulating protein synthesis and energy metabolism, influencing how effectively the body adapts to a given training stimulus."
        }
      ]
    }
  },
  {
    "id": "sn-energy",
    "courseId": "sportnutrition",
    "order": 2,
    "title": "The Energy Systems in Exercise",
    "tagline": "Every movement you make is paid for in ATP",
    "icon": "sn_energy",
    "lesson": {
      "intro": [
        "Whatever an athlete eats, whatever they train for, it all funnels down to one currency the body actually spends: ATP (adenosine triphosphate). The food of muscles is ATP, not glucose, not fat directly, ATP. Carbohydrates, fats, and to a lesser extent protein are all just different routes to the same destination: converting stored energy into usable ATP. Understanding the three systems the body uses to make that conversion is the key to understanding almost every other topic in this course."
      ],
      "sections": [
        {
          "heading": "Three stages of ATP conversion",
          "body": [
            "The body converts stored energy into ATP through three distinct systems, each suited to a different intensity and duration of effort: the phosphagen system, the oxidative (aerobic) system, and the lactic (glycolytic) system. These systems do not operate in strict isolation, at any given moment all three are active to some degree, but one typically dominates depending on how hard and how long the activity is."
          ]
        },
        {
          "heading": "The phosphagen system: immediate power",
          "body": [
            "The phosphagen system (also called the ATP-PC or ATP-phosphocreatine system) supplies energy immediately, without needing oxygen, by using stored ATP and phosphocreatine already present in the muscle. It is the fastest energy system the body has, but also the most limited, its stores are exhausted within about 10 seconds of maximal effort. This is the system behind a single explosive movement: a sprint start, a maximal lift, a jump."
          ]
        },
        {
          "heading": "The glycolytic (lactic) system: fast but limited",
          "body": [
            "The glycolytic system breaks down glucose (from blood glucose or stored muscle glycogen) without oxygen to rapidly produce ATP, producing lactic acid as a byproduct. It powers efforts lasting roughly 10 seconds to 2 minutes, think of a 400-meter sprint or a hard minute of repeated effort. It is faster than the oxidative system but cannot sustain effort as long, since lactic acid accumulation contributes to the burning fatigue felt during this kind of effort."
          ]
        },
        {
          "heading": "The oxidative system: the endurance engine",
          "body": [
            "The oxidative (aerobic) system uses oxygen to convert carbohydrates and fats into ATP, and is the dominant system for any activity lasting longer than a couple of minutes, walking, jogging, cycling, marathon running. It is slower to ramp up than the other two systems but can sustain effort for hours, since it can draw on the body's much larger fat stores once glycogen begins to run low. This is the system endurance training is specifically designed to improve."
          ]
        },
        {
          "heading": "Energy expenditure during exercise",
          "body": [
            "How much energy a bout of exercise costs, and which system supplies most of it, depends on intensity and duration together, not either one alone. A short, maximal effort draws almost entirely on the phosphagen system. A sustained, moderate effort draws increasingly on the oxidative system as it continues. Understanding this relationship is what lets coaches and athletes match their nutrition strategy, discussed properly in the nutrient timing station, to the actual energy demands of their specific sport."
          ]
        }
      ],
      "examples": [
        {
          "title": "A 100m sprint",
          "text": "Relies almost entirely on the phosphagen (ATP-PC) system, an explosive, all-out effort lasting well under 10 seconds."
        },
        {
          "title": "A 400m sprint",
          "text": "Draws heavily on the glycolytic system, an intense effort in the 10-second-to-2-minute range where lactic acid buildup contributes to fatigue."
        },
        {
          "title": "A marathon",
          "text": "Runs almost entirely on the oxidative system, using oxygen to convert carbohydrate and fat stores into ATP over hours of sustained, moderate effort."
        }
      ],
      "whyMatters": [
        "Every macronutrient station that follows, carbohydrates, protein, fats, is really answering the same underlying question from a different angle: how does this nutrient feed one or more of these three energy systems? Knowing which system dominates a given sport is what lets an athlete or coach make sensible, sport-specific decisions about diet, timing, and supplementation instead of following generic advice."
      ],
      "glossary": [
        {
          "term": "ATP (adenosine triphosphate)",
          "def": "The direct energy currency used by muscle cells; all other fuels must first be converted into ATP to be used."
        },
        {
          "term": "Phosphagen system",
          "def": "The immediate, oxygen-independent energy system using stored ATP and phosphocreatine, lasting about 10 seconds of maximal effort."
        },
        {
          "term": "Glycolytic system",
          "def": "The energy system breaking down glucose without oxygen to rapidly produce ATP, powering efforts of roughly 10 seconds to 2 minutes, producing lactic acid as a byproduct."
        },
        {
          "term": "Oxidative system",
          "def": "The aerobic energy system using oxygen to convert carbohydrate and fat into ATP, dominant for sustained efforts beyond a couple of minutes."
        },
        {
          "term": "Energy expenditure",
          "def": "The total energy cost of a bout of exercise, determined by the combination of its intensity and duration."
        }
      ]
    },
    "parts": [
      {
        "id": "intro",
        "title": "Introduction",
        "cards": [
          {
            "front": "Introduction",
            "back": "Whatever an athlete eats, whatever they train for, it all funnels down to one currency the body actually spends: ATP (adenosine triphosphate). The food of muscles is ATP, not glucose, not fat directly, ATP. Carbohydrates, fats, and to a lesser extent protein are all just different routes to the same destination: converting stored energy into usable ATP. Understanding the three systems the body uses to make that conversion is the key to understanding almost every other topic in this course."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "What is the direct fuel muscles use, according to the lesson?",
              "options": [
                "ATP",
                "Glucose",
                "Fat",
                "Protein"
              ],
              "answerIndex": 0,
              "explanation": "The food of muscles is ATP; other nutrients are just different routes to producing it."
            },
            {
              "type": "short",
              "prompt": "What do carbohydrates, fats, and protein all have in common in terms of energy?",
              "keywords": [
                "route",
                "atp",
                "convert"
              ],
              "explanation": "They are all just different routes to converting stored energy into usable ATP."
            }
          ]
        }
      },
      {
        "id": "sec0",
        "title": "Three stages of ATP conversion",
        "cards": [
          {
            "front": "Three stages of ATP conversion",
            "back": "The body converts stored energy into ATP through three distinct systems, each suited to a different intensity and duration of effort: the phosphagen system, the oxidative (aerobic) system, and the lactic (glycolytic) system. These systems do not operate in strict isolation, at any given moment all three are active to some degree, but one typically dominates depending on how hard and how long the activity is."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "Name the three systems the body uses to convert stored energy into ATP.",
              "options": [
                "Phosphagen, oxidative, and glycolytic (lactic) systems",
                "Digestive, respiratory, and circulatory systems",
                "Aerobic, anaerobic, and hormonal systems",
                "Muscular, skeletal, and nervous systems"
              ],
              "answerIndex": 0,
              "explanation": "The phosphagen system, the oxidative system, and the glycolytic (lactic) system."
            },
            {
              "type": "short",
              "prompt": "Do the three energy systems operate in strict isolation from each other?",
              "keywords": [
                "no",
                "all active",
                "dominate"
              ],
              "explanation": "No, at any given moment all three are active to some degree, but one typically dominates depending on intensity and duration."
            }
          ]
        }
      },
      {
        "id": "sec1",
        "title": "The phosphagen system: immediate power",
        "cards": [
          {
            "front": "The phosphagen system: immediate power",
            "back": "The phosphagen system (also called the ATP-PC or ATP-phosphocreatine system) supplies energy immediately, without needing oxygen, by using stored ATP and phosphocreatine already present in the muscle. It is the fastest energy system the body has, but also the most limited, its stores are exhausted within about 10 seconds of maximal effort. This is the system behind a single explosive movement: a sprint start, a maximal lift, a jump."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "How long does the phosphagen system's stores typically last during maximal effort?",
              "options": [
                "About 10 seconds",
                "About 2 minutes",
                "About 30 minutes",
                "Several hours"
              ],
              "answerIndex": 0,
              "explanation": "The phosphagen system's stores are exhausted within about 10 seconds of maximal effort."
            },
            {
              "type": "short",
              "prompt": "What does the phosphagen system use for immediate energy, and does it need oxygen?",
              "keywords": [
                "atp",
                "phosphocreatine",
                "no oxygen",
                "without oxygen"
              ],
              "explanation": "It uses stored ATP and phosphocreatine already in the muscle, without needing oxygen."
            }
          ]
        }
      },
      {
        "id": "sec2",
        "title": "The glycolytic (lactic) system: fast but limited",
        "cards": [
          {
            "front": "The glycolytic (lactic) system: fast but limited",
            "back": "The glycolytic system breaks down glucose (from blood glucose or stored muscle glycogen) without oxygen to rapidly produce ATP, producing lactic acid as a byproduct. It powers efforts lasting roughly 10 seconds to 2 minutes, think of a 400-meter sprint or a hard minute of repeated effort. It is faster than the oxidative system but cannot sustain effort as long, since lactic acid accumulation contributes to the burning fatigue felt during this kind of effort."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "What byproduct does the glycolytic system produce that contributes to fatigue?",
              "options": [
                "Lactic acid",
                "Carbon dioxide only",
                "Water",
                "Ammonia"
              ],
              "answerIndex": 0,
              "explanation": "The glycolytic system produces lactic acid as a byproduct, contributing to the burning fatigue felt during this kind of effort."
            },
            {
              "type": "short",
              "prompt": "What duration of effort does the glycolytic system power?",
              "keywords": [
                "10 second",
                "2 minute"
              ],
              "explanation": "Roughly 10 seconds to 2 minutes."
            }
          ]
        }
      },
      {
        "id": "sec3",
        "title": "The oxidative system: the endurance engine",
        "cards": [
          {
            "front": "The oxidative system: the endurance engine",
            "back": "The oxidative (aerobic) system uses oxygen to convert carbohydrates and fats into ATP, and is the dominant system for any activity lasting longer than a couple of minutes, walking, jogging, cycling, marathon running. It is slower to ramp up than the other two systems but can sustain effort for hours, since it can draw on the body's much larger fat stores once glycogen begins to run low. This is the system endurance training is specifically designed to improve."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "What two fuels does the oxidative system convert into ATP using oxygen?",
              "options": [
                "Carbohydrates and fats",
                "Only protein",
                "Only vitamins",
                "Only water"
              ],
              "answerIndex": 0,
              "explanation": "The oxidative system uses oxygen to convert both carbohydrates and fats into ATP."
            },
            {
              "type": "short",
              "prompt": "Why can the oxidative system sustain effort for hours?",
              "keywords": [
                "fat",
                "larger",
                "store"
              ],
              "explanation": "It can draw on the body's much larger fat stores once glycogen begins to run low."
            }
          ]
        }
      },
      {
        "id": "sec4",
        "title": "Energy expenditure during exercise",
        "cards": [
          {
            "front": "Energy expenditure during exercise",
            "back": "How much energy a bout of exercise costs, and which system supplies most of it, depends on intensity and duration together, not either one alone. A short, maximal effort draws almost entirely on the phosphagen system. A sustained, moderate effort draws increasingly on the oxidative system as it continues. Understanding this relationship is what lets coaches and athletes match their nutrition strategy, discussed properly in the nutrient timing station, to the actual energy demands of their specific sport."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "What two factors together determine how much energy a bout of exercise costs and which system supplies most of it?",
              "options": [
                "Intensity and duration",
                "Only body weight",
                "Only age",
                "Only time of day"
              ],
              "answerIndex": 0,
              "explanation": "Intensity and duration together determine energy expenditure and which system dominates."
            },
            {
              "type": "short",
              "prompt": "Which system does a short, maximal effort draw almost entirely on?",
              "keywords": [
                "phosphagen"
              ],
              "explanation": "A short, maximal effort draws almost entirely on the phosphagen system."
            }
          ]
        }
      },
      {
        "id": "examples",
        "title": "Real-World Examples",
        "cards": [
          {
            "front": "A 100m sprint",
            "back": "Relies almost entirely on the phosphagen (ATP-PC) system, an explosive, all-out effort lasting well under 10 seconds."
          },
          {
            "front": "A 400m sprint",
            "back": "Draws heavily on the glycolytic system, an intense effort in the 10-second-to-2-minute range where lactic acid buildup contributes to fatigue."
          },
          {
            "front": "A marathon",
            "back": "Runs almost entirely on the oxidative system, using oxygen to convert carbohydrate and fat stores into ATP over hours of sustained, moderate effort."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "Which energy system does a 100m sprint rely on almost entirely?",
              "options": [
                "The phosphagen (ATP-PC) system",
                "The oxidative system",
                "The glycolytic system exclusively",
                "None of the three"
              ],
              "answerIndex": 0,
              "explanation": "A 100m sprint relies almost entirely on the phosphagen system, an explosive effort under 10 seconds."
            },
            {
              "type": "short",
              "prompt": "Which energy system does a marathon run almost entirely on, and why?",
              "keywords": [
                "oxidative",
                "oxygen",
                "sustained"
              ],
              "explanation": "Almost entirely the oxidative system, since it can sustain effort over hours using oxygen to convert carbohydrate and fat."
            }
          ]
        }
      },
      {
        "id": "wrapup",
        "title": "Why It Matters & Key Terms",
        "cards": [
          {
            "front": "Why This Matters",
            "back": "Every macronutrient station that follows, carbohydrates, protein, fats, is really answering the same underlying question from a different angle: how does this nutrient feed one or more of these three energy systems? Knowing which system dominates a given sport is what lets an athlete or coach make sensible, sport-specific decisions about diet, timing, and supplementation instead of following generic advice."
          },
          {
            "front": "Key Term: ATP (adenosine triphosphate)",
            "back": "The direct energy currency used by muscle cells; all other fuels must first be converted into ATP to be used."
          },
          {
            "front": "Key Term: Phosphagen system",
            "back": "The immediate, oxygen-independent energy system using stored ATP and phosphocreatine, lasting about 10 seconds of maximal effort."
          },
          {
            "front": "Key Term: Glycolytic system",
            "back": "The energy system breaking down glucose without oxygen to rapidly produce ATP, powering efforts of roughly 10 seconds to 2 minutes, producing lactic acid as a byproduct."
          },
          {
            "front": "Key Term: Oxidative system",
            "back": "The aerobic energy system using oxygen to convert carbohydrate and fat into ATP, dominant for sustained efforts beyond a couple of minutes."
          },
          {
            "front": "Key Term: Energy expenditure",
            "back": "The total energy cost of a bout of exercise, determined by the combination of its intensity and duration."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "Why does understanding the three energy systems matter for the rest of this course?",
              "options": [
                "Every macronutrient station answers how that nutrient feeds one or more energy systems",
                "It has no connection to the rest of the course",
                "Only the supplements station relates to energy systems",
                "It only matters for doping regulations"
              ],
              "answerIndex": 0,
              "explanation": "Every later macronutrient station is really answering how that nutrient feeds one or more of these three energy systems."
            },
            {
              "type": "short",
              "prompt": "Define energy expenditure as used in this lesson.",
              "keywords": [
                "cost",
                "exercise",
                "intensity",
                "duration"
              ],
              "explanation": "The total energy cost of a bout of exercise, determined by the combination of its intensity and duration."
            }
          ]
        }
      }
    ],
    "finalExam": {
      "mcq": [
        {
          "type": "mcq",
          "prompt": "What is the direct fuel source muscles use for contraction?",
          "options": [
            "ATP",
            "Glucose directly",
            "Fat directly",
            "Protein directly"
          ],
          "answerIndex": 0,
          "explanation": "Muscles run on ATP; carbohydrates, fats, and protein are all just different routes to producing that ATP."
        },
        {
          "type": "mcq",
          "prompt": "Which energy system dominates a maximal, all-out effort lasting under 10 seconds?",
          "options": [
            "Phosphagen (ATP-PC) system",
            "Glycolytic system",
            "Oxidative system",
            "None, the body has no energy at this intensity"
          ],
          "answerIndex": 0,
          "explanation": "The phosphagen system supplies immediate energy from stored ATP and phosphocreatine, without oxygen, for about the first 10 seconds of maximal effort."
        },
        {
          "type": "mcq",
          "prompt": "Which system produces lactic acid as a byproduct?",
          "options": [
            "The glycolytic (lactic) system",
            "The phosphagen system",
            "The oxidative system",
            "All three equally"
          ],
          "answerIndex": 0,
          "explanation": "The glycolytic system breaks down glucose without oxygen, producing lactic acid, and powers efforts of roughly 10 seconds to 2 minutes."
        },
        {
          "type": "mcq",
          "prompt": "Why can the oxidative system sustain effort for hours while the other two cannot?",
          "options": [
            "It can draw on the body's much larger fat stores once glycogen runs low",
            "It doesn't require any fuel at all",
            "It only activates during sleep",
            "It uses phosphocreatine exclusively"
          ],
          "answerIndex": 0,
          "explanation": "The oxidative system uses oxygen to convert both carbohydrate and fat into ATP, and fat stores are far larger than glycogen stores, letting it sustain effort much longer."
        },
        {
          "type": "short",
          "prompt": "Which energy system would dominate during a marathon, and why?",
          "keywords": [
            "oxidative",
            "aerobic",
            "oxygen",
            "fat",
            "sustained"
          ],
          "explanation": "The oxidative system dominates, since it uses oxygen to convert carbohydrate and fat into ATP and can sustain effort over hours."
        }
      ],
      "theory": [
        {
          "type": "theory",
          "prompt": "Compare the phosphagen, glycolytic, and oxidative energy systems in terms of speed of ATP production, duration of use, and oxygen requirement.",
          "keywordGroups": [
            [
              "phosphagen",
              "immediate",
              "10 second"
            ],
            [
              "glycolytic",
              "lactic acid",
              "10 second",
              "2 minute"
            ],
            [
              "oxidative",
              "oxygen",
              "hours",
              "sustained"
            ],
            [
              "fastest",
              "slowest"
            ]
          ],
          "minGroups": 3,
          "explanation": "Phosphagen: fastest, no oxygen, ~10 seconds. Glycolytic: fast, no oxygen, produces lactic acid, ~10s-2min. Oxidative: slower to ramp up, requires oxygen, can sustain hours."
        },
        {
          "type": "theory",
          "prompt": "Using specific sport examples, explain how intensity and duration together determine which energy system dominates a given activity.",
          "keywordGroups": [
            [
              "sprint",
              "phosphagen"
            ],
            [
              "400m",
              "glycolytic"
            ],
            [
              "marathon",
              "oxidative"
            ],
            [
              "intensity",
              "duration"
            ]
          ],
          "minGroups": 3,
          "explanation": "A 100m sprint (short, maximal) draws on the phosphagen system; a 400m sprint (10s-2min, intense) draws on the glycolytic system; a marathon (long, sustained) draws on the oxidative system."
        },
        {
          "type": "theory",
          "prompt": "Explain why ATP, rather than glucose or fat directly, is described as the muscle's 'currency' of energy.",
          "keywordGroups": [
            [
              "atp",
              "currency",
              "direct fuel"
            ],
            [
              "convert",
              "route"
            ],
            [
              "carbohydrate",
              "fat",
              "protein"
            ]
          ],
          "minGroups": 2,
          "explanation": "Carbohydrates, fats, and protein are all just different routes the body uses to produce ATP, which is the actual, direct fuel muscle cells use for contraction."
        }
      ]
    }
  },
  {
    "id": "sn-carbs",
    "courseId": "sportnutrition",
    "order": 3,
    "title": "Carbohydrates and Performance",
    "tagline": "The body's preferred fuel, and the one it runs out of first",
    "icon": "sn_carbs",
    "lesson": {
      "intro": [
        "Carbohydrates matter more than fat and protein in sports specifically because of how quickly and directly the body can turn them into usable energy. When you take on carbohydrates, the timing of that intake, before, during, or after exercise, has real physiological implications, which is why nutrient timing gets its own station later in this course. For now, the goal is understanding what carbohydrates are, how the body breaks them down, and why running low on them is one of the most common causes of fatigue in sport."
      ],
      "sections": [
        {
          "heading": "Digesting carbohydrates, start to finish",
          "body": [
            "Carbohydrate digestion begins the moment food enters the mouth: salivary amylase starts breaking down starch immediately. In the stomach, very little further carbohydrate digestion happens, the stomach's job here is mostly just to hold and mix. The real work resumes in the small intestine, where pancreatic amylase breaks starch down into smaller sugars.",
            "From there, intestinal enzymes convert these smaller sugars into glucose, fructose, and galactose, the simplest sugar units the body can actually absorb. Absorption itself happens across the intestinal wall, where these sugars enter the bloodstream and become available to the rest of the body, including working muscle."
          ]
        },
        {
          "heading": "Simple vs. complex carbohydrates",
          "body": [
            "Simple sugars consist of one or two sugar units and are digested quickly, giving a fast but short-lived rise in blood glucose. Complex carbohydrates consist of many sugar units linked together and are digested more slowly, giving a steadier, more sustained release of glucose into the bloodstream. This distinction is why athletes are usually advised to favor complex carbohydrates for general fueling, and reserve simple sugars for moments needing a fast energy hit, like during prolonged exercise itself."
          ]
        },
        {
          "heading": "Glycogen: the body's carbohydrate reserve",
          "body": [
            "Glycogen is the storage form of glucose, the form the body keeps in reserve for when it needs energy fast. It is mainly stored in the liver and skeletal muscles, with a typical total store somewhere in the 300 to 500 gram range depending on training status and diet. Muscle glycogen specifically provides energy directly at the site of muscle contraction, and higher glycogen stores allow exercise to continue for longer periods before fatigue sets in.",
            "This is why muscle glycogen availability is one of the single biggest predictors of endurance performance: once it runs critically low, the athlete \"hits the wall,\" a sharp, sudden drop in capacity that no amount of willpower fully overcomes, because the body is running out of its preferred, fastest-access fuel."
          ]
        },
        {
          "heading": "Fiber and daily carbohydrate targets",
          "body": [
            "Not all carbohydrate is used purely for energy. Fiber, found in whole grains, vegetables, legumes, and fruit, is a carbohydrate the body cannot fully digest, and it plays a separate but important role: soluble fiber can help lower cholesterol and slow digestion, while insoluble fiber supports regular digestion and prevents constipation. A general target of around 25 grams of fiber a day is a reasonable guide for most active adults.",
            "For total carbohydrate intake, a baseline daily requirement is roughly 130 grams just to support normal brain and body function, but athletes in serious training need considerably more, commonly in the range of 5 to 12 grams per kilogram of body weight per day, more than the equivalent target for either fat or protein, scaled to the volume and intensity of their training."
          ]
        },
        {
          "heading": "Carbohydrate timing and recovery",
          "body": [
            "Post-exercise carbohydrate intake plays a specific recovery role: it replenishes depleted glycogen stores, restores blood glucose levels, and reduces the muscle breakdown that continues if the body is left under-fueled after a hard session. Sports drinks consumed after exercise work by replacing three things at once: water, electrolytes, and carbohydrates, which is precisely why they're formulated the way they are rather than being just flavored water."
          ]
        },
        {
          "heading": "When carbohydrate intake goes wrong",
          "body": [
            "Excess carbohydrate intake carries its own risks: weight gain, obesity, dental caries, and an increased risk of diabetes over time. At the opposite extreme sits the ketogenic diet, a very-low-carbohydrate, high-fat approach, with typical foods including walnuts, cheese, boiled eggs, and butter. For athletes specifically, excess carbohydrate intake can also show up as unwanted weight gain, reduced agility, and gastrointestinal discomfort during competition, none of which help performance even though the underlying nutrient is the body's preferred fuel in moderate amounts.",
            "One related but distinct term worth knowing is glycosaminoglycans, long chains of carbohydrates found in connective tissue rather than used for energy. Their function is structural: lubrication of joints, shock absorption, and structural support, a reminder that not every carbohydrate in the body exists to be burned for fuel."
          ]
        }
      ],
      "examples": [
        {
          "title": "Hitting the wall in a marathon",
          "text": "When muscle glycogen runs critically low during prolonged exercise, performance drops sharply and suddenly, a direct demonstration of how central glycogen availability is to endurance capacity."
        },
        {
          "title": "Post-exercise sports drinks",
          "text": "Formulated specifically to replace water, electrolytes, and carbohydrates together after exercise, restoring what a hard session actually depletes rather than just rehydrating."
        },
        {
          "title": "The ketogenic diet",
          "text": "A very-low-carbohydrate, high-fat eating pattern (walnuts, cheese, boiled eggs, butter) sitting at the opposite end of the spectrum from a high-carbohydrate athletic diet."
        }
      ],
      "whyMatters": [
        "Carbohydrate management is often the single most impactful nutritional lever available to an endurance athlete, more available glycogen at the start of an event, and steadier glucose delivery during it, directly translates into more usable energy before fatigue sets in. Understanding digestion, storage, and timing together explains why \"just eat more carbs\" is too simple as advice, when and in what form matters as much as how much."
      ],
      "glossary": [
        {
          "term": "Salivary amylase",
          "def": "An enzyme in saliva that begins starch digestion in the mouth."
        },
        {
          "term": "Pancreatic amylase",
          "def": "An enzyme released in the small intestine that breaks starch down into smaller sugars."
        },
        {
          "term": "Simple carbohydrate",
          "def": "A carbohydrate made of one or two sugar units, digested quickly for a fast rise in blood glucose."
        },
        {
          "term": "Complex carbohydrate",
          "def": "A carbohydrate made of many linked sugar units, digested slowly for a steadier release of glucose."
        },
        {
          "term": "Glycogen",
          "def": "The storage form of glucose, held mainly in the liver and skeletal muscles, used as a fast-access energy reserve."
        },
        {
          "term": "Fiber",
          "def": "A carbohydrate the body cannot fully digest; soluble fiber can lower cholesterol, insoluble fiber supports digestion."
        },
        {
          "term": "Ketogenic diet",
          "def": "A very-low-carbohydrate, high-fat dietary pattern."
        },
        {
          "term": "Glycosaminoglycans",
          "def": "Long chains of carbohydrates found in connective tissue, providing lubrication, shock absorption, and structural support rather than energy."
        }
      ]
    },
    "parts": [
      {
        "id": "intro",
        "title": "Introduction",
        "cards": [
          {
            "front": "Introduction",
            "back": "Carbohydrates matter more than fat and protein in sports specifically because of how quickly and directly the body can turn them into usable energy. When you take on carbohydrates, the timing of that intake, before, during, or after exercise, has real physiological implications, which is why nutrient timing gets its own station later in this course. For now, the goal is understanding what carbohydrates are, how the body breaks them down, and why running low on them is one of the most common causes of fatigue in sport."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "Why do carbohydrates matter more than fat/protein in sport, specifically?",
              "options": [
                "The body can turn them into usable energy quickly and directly",
                "They contain more calories per gram than fat",
                "They are the only nutrient the body can store",
                "They are the only source of vitamins"
              ],
              "answerIndex": 0,
              "explanation": "Carbohydrates matter because of how quickly and directly the body can turn them into usable energy."
            },
            {
              "type": "short",
              "prompt": "What aspect of carbohydrate intake has real physiological implications, covered in a later station?",
              "keywords": [
                "timing"
              ],
              "explanation": "The timing of carbohydrate intake, before, during, or after exercise, covered in the nutrient timing station."
            }
          ]
        }
      },
      {
        "id": "sec0",
        "title": "Digesting carbohydrates, start to finish",
        "cards": [
          {
            "front": "Digesting carbohydrates, start to finish (1/2)",
            "back": "Carbohydrate digestion begins the moment food enters the mouth: salivary amylase starts breaking down starch immediately. In the stomach, very little further carbohydrate digestion happens, the stomach's job here is mostly just to hold and mix. The real work resumes in the small intestine, where pancreatic amylase breaks starch down into smaller sugars."
          },
          {
            "front": "Digesting carbohydrates, start to finish (2/2)",
            "back": "From there, intestinal enzymes convert these smaller sugars into glucose, fructose, and galactose, the simplest sugar units the body can actually absorb. Absorption itself happens across the intestinal wall, where these sugars enter the bloodstream and become available to the rest of the body, including working muscle."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "Where does carbohydrate digestion begin, and with what enzyme?",
              "options": [
                "The mouth, via salivary amylase",
                "The stomach, via pepsin",
                "The small intestine, via pancreatic amylase only",
                "The large intestine"
              ],
              "answerIndex": 0,
              "explanation": "Digestion begins in the mouth via salivary amylase."
            },
            {
              "type": "short",
              "prompt": "What three simple sugars does the small intestine ultimately convert carbohydrates into for absorption?",
              "keywords": [
                "glucose",
                "fructose",
                "galactose"
              ],
              "explanation": "Glucose, fructose, and galactose."
            }
          ]
        }
      },
      {
        "id": "sec1",
        "title": "Simple vs. complex carbohydrates",
        "cards": [
          {
            "front": "Simple vs. complex carbohydrates",
            "back": "Simple sugars consist of one or two sugar units and are digested quickly, giving a fast but short-lived rise in blood glucose. Complex carbohydrates consist of many sugar units linked together and are digested more slowly, giving a steadier, more sustained release of glucose into the bloodstream. This distinction is why athletes are usually advised to favor complex carbohydrates for general fueling, and reserve simple sugars for moments needing a fast energy hit, like during prolonged exercise itself."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "What is a simple sugar, structurally?",
              "options": [
                "One or two sugar units, digested quickly",
                "Many sugar units, digested slowly",
                "A sugar with no calories",
                "A type of fiber"
              ],
              "answerIndex": 0,
              "explanation": "Simple sugars consist of one or two sugar units and are digested quickly."
            },
            {
              "type": "short",
              "prompt": "Why are athletes usually advised to favor complex carbohydrates for general fueling?",
              "keywords": [
                "steady",
                "sustained",
                "slow"
              ],
              "explanation": "Complex carbohydrates give a steadier, more sustained release of glucose, better for general fueling than the quick spike from simple sugars."
            }
          ]
        }
      },
      {
        "id": "sec2",
        "title": "Glycogen: the body's carbohydrate reserve",
        "cards": [
          {
            "front": "Glycogen: the body's carbohydrate reserve (1/2)",
            "back": "Glycogen is the storage form of glucose, the form the body keeps in reserve for when it needs energy fast. It is mainly stored in the liver and skeletal muscles, with a typical total store somewhere in the 300 to 500 gram range depending on training status and diet. Muscle glycogen specifically provides energy directly at the site of muscle contraction, and higher glycogen stores allow exercise to continue for longer periods before fatigue sets in."
          },
          {
            "front": "Glycogen: the body's carbohydrate reserve (2/2)",
            "back": "This is why muscle glycogen availability is one of the single biggest predictors of endurance performance: once it runs critically low, the athlete \"hits the wall,\" a sharp, sudden drop in capacity that no amount of willpower fully overcomes, because the body is running out of its preferred, fastest-access fuel."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "Where is glycogen mainly stored?",
              "options": [
                "Liver and skeletal muscles",
                "Adipose tissue only",
                "Blood plasma",
                "Bone marrow"
              ],
              "answerIndex": 0,
              "explanation": "Glycogen is mainly stored in the liver and skeletal muscles."
            },
            {
              "type": "short",
              "prompt": "What is the typical total glycogen store range mentioned in the lesson?",
              "keywords": [
                "300",
                "500",
                "gram"
              ],
              "explanation": "Roughly 300 to 500 grams, depending on training status and diet."
            }
          ]
        }
      },
      {
        "id": "sec3",
        "title": "Fiber and daily carbohydrate targets",
        "cards": [
          {
            "front": "Fiber and daily carbohydrate targets (1/2)",
            "back": "Not all carbohydrate is used purely for energy. Fiber, found in whole grains, vegetables, legumes, and fruit, is a carbohydrate the body cannot fully digest, and it plays a separate but important role: soluble fiber can help lower cholesterol and slow digestion, while insoluble fiber supports regular digestion and prevents constipation. A general target of around 25 grams of fiber a day is a reasonable guide for most active adults."
          },
          {
            "front": "Fiber and daily carbohydrate targets (2/2)",
            "back": "For total carbohydrate intake, a baseline daily requirement is roughly 130 grams just to support normal brain and body function, but athletes in serious training need considerably more, commonly in the range of 5 to 12 grams per kilogram of body weight per day, more than the equivalent target for either fat or protein, scaled to the volume and intensity of their training."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "What is the general daily fiber target mentioned in the lesson?",
              "options": [
                "About 25 grams a day",
                "About 5 grams a day",
                "About 100 grams a day",
                "There is no target"
              ],
              "answerIndex": 0,
              "explanation": "A general target of around 25 grams of fiber a day is reasonable for most active adults."
            },
            {
              "type": "short",
              "prompt": "What is the daily carbohydrate range for athletes in serious training, per kg of body weight?",
              "keywords": [
                "5",
                "12",
                "kg"
              ],
              "explanation": "Commonly 5 to 12 grams per kilogram of body weight per day, scaled to training volume and intensity."
            }
          ]
        }
      },
      {
        "id": "sec4",
        "title": "Carbohydrate timing and recovery",
        "cards": [
          {
            "front": "Carbohydrate timing and recovery",
            "back": "Post-exercise carbohydrate intake plays a specific recovery role: it replenishes depleted glycogen stores, restores blood glucose levels, and reduces the muscle breakdown that continues if the body is left under-fueled after a hard session. Sports drinks consumed after exercise work by replacing three things at once: water, electrolytes, and carbohydrates, which is precisely why they're formulated the way they are rather than being just flavored water."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "What three things does post-exercise carbohydrate intake do?",
              "options": [
                "Replenishes glycogen, restores blood glucose, reduces muscle breakdown",
                "Only adds calories",
                "Only affects taste preference",
                "Increases fat storage exclusively"
              ],
              "answerIndex": 0,
              "explanation": "It replenishes glycogen stores, restores blood glucose, and reduces ongoing muscle breakdown."
            },
            {
              "type": "short",
              "prompt": "What three things do post-exercise sports drinks replace at once?",
              "keywords": [
                "water",
                "electrolyte",
                "carbohydrate"
              ],
              "explanation": "Water, electrolytes, and carbohydrates together."
            }
          ]
        }
      },
      {
        "id": "sec5",
        "title": "When carbohydrate intake goes wrong",
        "cards": [
          {
            "front": "When carbohydrate intake goes wrong (1/2)",
            "back": "Excess carbohydrate intake carries its own risks: weight gain, obesity, dental caries, and an increased risk of diabetes over time. At the opposite extreme sits the ketogenic diet, a very-low-carbohydrate, high-fat approach, with typical foods including walnuts, cheese, boiled eggs, and butter. For athletes specifically, excess carbohydrate intake can also show up as unwanted weight gain, reduced agility, and gastrointestinal discomfort during competition, none of which help performance even though the underlying nutrient is the body's preferred fuel in moderate amounts."
          },
          {
            "front": "When carbohydrate intake goes wrong (2/2)",
            "back": "One related but distinct term worth knowing is glycosaminoglycans, long chains of carbohydrates found in connective tissue rather than used for energy. Their function is structural: lubrication of joints, shock absorption, and structural support, a reminder that not every carbohydrate in the body exists to be burned for fuel."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "What kind of diet sits at the opposite extreme from high carbohydrate intake?",
              "options": [
                "The ketogenic diet",
                "The Mediterranean diet",
                "The vegan diet",
                "The high-protein diet"
              ],
              "answerIndex": 0,
              "explanation": "The ketogenic diet, a very-low-carbohydrate, high-fat approach, sits at the opposite extreme."
            },
            {
              "type": "short",
              "prompt": "What are glycosaminoglycans, and what is their function?",
              "keywords": [
                "connective tissue",
                "lubricat",
                "shock absorption",
                "structural"
              ],
              "explanation": "Long chains of carbohydrates found in connective tissue, providing lubrication, shock absorption, and structural support."
            }
          ]
        }
      },
      {
        "id": "examples",
        "title": "Real-World Examples",
        "cards": [
          {
            "front": "Hitting the wall in a marathon",
            "back": "When muscle glycogen runs critically low during prolonged exercise, performance drops sharply and suddenly, a direct demonstration of how central glycogen availability is to endurance capacity."
          },
          {
            "front": "Post-exercise sports drinks",
            "back": "Formulated specifically to replace water, electrolytes, and carbohydrates together after exercise, restoring what a hard session actually depletes rather than just rehydrating."
          },
          {
            "front": "The ketogenic diet",
            "back": "A very-low-carbohydrate, high-fat eating pattern (walnuts, cheese, boiled eggs, butter) sitting at the opposite end of the spectrum from a high-carbohydrate athletic diet."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "What does 'hitting the wall' describe?",
              "options": [
                "A sharp, sudden drop in performance when glycogen runs critically low",
                "A planned break in a race",
                "An injury from poor form",
                "A sudden burst of speed"
              ],
              "answerIndex": 0,
              "explanation": "It describes the sharp drop in capacity once muscle glycogen runs critically low."
            },
            {
              "type": "short",
              "prompt": "Name two foods typical of a ketogenic diet, per the lesson.",
              "keywords": [
                "walnut",
                "cheese",
                "egg",
                "butter"
              ],
              "explanation": "Walnuts, cheese, boiled eggs, and butter are all mentioned."
            }
          ]
        }
      },
      {
        "id": "wrapup",
        "title": "Why It Matters & Key Terms",
        "cards": [
          {
            "front": "Why This Matters",
            "back": "Carbohydrate management is often the single most impactful nutritional lever available to an endurance athlete, more available glycogen at the start of an event, and steadier glucose delivery during it, directly translates into more usable energy before fatigue sets in. Understanding digestion, storage, and timing together explains why \"just eat more carbs\" is too simple as advice, when and in what form matters as much as how much."
          },
          {
            "front": "Key Term: Salivary amylase",
            "back": "An enzyme in saliva that begins starch digestion in the mouth."
          },
          {
            "front": "Key Term: Pancreatic amylase",
            "back": "An enzyme released in the small intestine that breaks starch down into smaller sugars."
          },
          {
            "front": "Key Term: Simple carbohydrate",
            "back": "A carbohydrate made of one or two sugar units, digested quickly for a fast rise in blood glucose."
          },
          {
            "front": "Key Term: Complex carbohydrate",
            "back": "A carbohydrate made of many linked sugar units, digested slowly for a steadier release of glucose."
          },
          {
            "front": "Key Term: Glycogen",
            "back": "The storage form of glucose, held mainly in the liver and skeletal muscles, used as a fast-access energy reserve."
          },
          {
            "front": "Key Term: Fiber",
            "back": "A carbohydrate the body cannot fully digest; soluble fiber can lower cholesterol, insoluble fiber supports digestion."
          },
          {
            "front": "Key Term: Ketogenic diet",
            "back": "A very-low-carbohydrate, high-fat dietary pattern."
          },
          {
            "front": "Key Term: Glycosaminoglycans",
            "back": "Long chains of carbohydrates found in connective tissue, providing lubrication, shock absorption, and structural support rather than energy."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "Why is 'just eat more carbs' too simple as advice, according to the lesson?",
              "options": [
                "When and in what form matters as much as how much",
                "Carbohydrates have no real effect on performance",
                "Only elite athletes need carbohydrates",
                "Carbohydrates should always be avoided"
              ],
              "answerIndex": 0,
              "explanation": "Timing and form of carbohydrate intake matter as much as total amount."
            },
            {
              "type": "short",
              "prompt": "What is the difference between soluble and insoluble fiber?",
              "keywords": [
                "cholesterol",
                "slow digestion",
                "regular digestion",
                "constipation"
              ],
              "explanation": "Soluble fiber can help lower cholesterol and slow digestion; insoluble fiber supports regular digestion and prevents constipation."
            }
          ]
        }
      }
    ],
    "finalExam": {
      "mcq": [
        {
          "type": "mcq",
          "prompt": "Where does carbohydrate digestion begin?",
          "options": [
            "The mouth, via salivary amylase",
            "The stomach",
            "The small intestine only",
            "The large intestine"
          ],
          "answerIndex": 0,
          "explanation": "Salivary amylase begins breaking down starch the moment food enters the mouth."
        },
        {
          "type": "mcq",
          "prompt": "What is the key difference between simple and complex carbohydrates?",
          "options": [
            "Simple carbs digest quickly for a fast glucose rise; complex carbs digest slowly for a steadier release",
            "Simple carbs contain more fiber than complex carbs",
            "Complex carbs are only found in fruit",
            "There is no meaningful difference"
          ],
          "answerIndex": 0,
          "explanation": "Simple carbohydrates (1-2 sugar units) digest quickly; complex carbohydrates (many sugar units) digest slowly for a more sustained glucose release."
        },
        {
          "type": "mcq",
          "prompt": "Where is glycogen mainly stored in the body?",
          "options": [
            "The liver and skeletal muscles",
            "The bloodstream only",
            "Adipose tissue",
            "The pancreas"
          ],
          "answerIndex": 0,
          "explanation": "Glycogen is stored mainly in the liver and skeletal muscles, typically totaling around 300-500g."
        },
        {
          "type": "mcq",
          "prompt": "What does 'hitting the wall' during endurance exercise refer to?",
          "options": [
            "A sharp drop in performance when muscle glycogen runs critically low",
            "A sudden increase in speed near the finish line",
            "An injury caused by poor form",
            "A planned rest stop during a race"
          ],
          "answerIndex": 0,
          "explanation": "Hitting the wall describes the sharp, sudden drop in capacity that happens once glycogen stores run critically low."
        },
        {
          "type": "mcq",
          "prompt": "What three things do post-exercise sports drinks specifically replace?",
          "options": [
            "Water, electrolytes, and carbohydrates",
            "Protein, fiber, and fat",
            "Vitamins, minerals, and caffeine",
            "Only water"
          ],
          "answerIndex": 0,
          "explanation": "Sports drinks are formulated to replace water, electrolytes, and carbohydrates all at once."
        },
        {
          "type": "short",
          "prompt": "What is the difference between soluble and insoluble fiber?",
          "keywords": [
            "soluble",
            "cholesterol",
            "insoluble",
            "digestion",
            "constipation"
          ],
          "explanation": "Soluble fiber can help lower cholesterol and slow digestion; insoluble fiber supports regular digestion and prevents constipation."
        },
        {
          "type": "short",
          "prompt": "What are glycosaminoglycans, and how are they different from typical carbohydrates?",
          "keywords": [
            "connective tissue",
            "lubricat",
            "shock absorption",
            "structural",
            "not energy"
          ],
          "explanation": "Glycosaminoglycans are long carbohydrate chains found in connective tissue, providing lubrication, shock absorption, and structural support, not used for energy."
        },
        {
          "type": "short",
          "prompt": "Name two risks of excess carbohydrate intake mentioned in the lesson.",
          "keywords": [
            "weight gain",
            "obesity",
            "dental",
            "diabetes"
          ],
          "explanation": "Weight gain, obesity, dental caries, and increased diabetes risk are all mentioned risks of excess carbohydrate intake."
        }
      ],
      "theory": [
        {
          "type": "theory",
          "prompt": "Trace the full digestion pathway of a starchy carbohydrate from the mouth to entering the bloodstream.",
          "keywordGroups": [
            [
              "mouth",
              "salivary amylase"
            ],
            [
              "small intestine",
              "pancreatic amylase"
            ],
            [
              "glucose",
              "fructose",
              "galactose"
            ],
            [
              "absorption",
              "bloodstream"
            ]
          ],
          "minGroups": 3,
          "explanation": "Salivary amylase begins digestion in the mouth, pancreatic amylase continues it in the small intestine breaking starch into smaller sugars, intestinal enzymes convert these into glucose/fructose/galactose, which are absorbed into the bloodstream."
        },
        {
          "type": "theory",
          "prompt": "Explain what glycogen is, where it's stored, and why 'hitting the wall' happens.",
          "keywordGroups": [
            [
              "glycogen",
              "storage",
              "glucose"
            ],
            [
              "liver",
              "muscle"
            ],
            [
              "hit the wall",
              "deplete",
              "critically low"
            ],
            [
              "fatigue",
              "performance drop"
            ]
          ],
          "minGroups": 3,
          "explanation": "Glycogen is stored glucose held in liver and muscle; once muscle glycogen runs critically low during prolonged exercise, performance drops sharply, known as hitting the wall."
        },
        {
          "type": "theory",
          "prompt": "Discuss the risks of both excess carbohydrate intake and very low carbohydrate intake (ketogenic diet), including effects specific to athletes.",
          "keywordGroups": [
            [
              "excess",
              "weight gain",
              "obesity",
              "diabetes"
            ],
            [
              "athlete",
              "agility",
              "gastrointestinal"
            ],
            [
              "ketogenic",
              "low carb",
              "high fat"
            ]
          ],
          "minGroups": 2,
          "explanation": "Excess carbohydrate intake risks weight gain, obesity, dental caries, and diabetes, and in athletes specifically can cause reduced agility and GI discomfort; a ketogenic diet is the low-carb, high-fat alternative with its own tradeoffs."
        },
        {
          "type": "theory",
          "prompt": "Explain the difference between simple and complex carbohydrates and when an athlete might deliberately choose one over the other.",
          "keywordGroups": [
            [
              "simple",
              "one or two",
              "quick"
            ],
            [
              "complex",
              "many",
              "slow",
              "sustained"
            ],
            [
              "during exercise",
              "fast energy"
            ],
            [
              "general fueling"
            ]
          ],
          "minGroups": 3,
          "explanation": "Simple carbs (1-2 units) digest quickly for a fast energy hit, useful during prolonged exercise; complex carbs (many units) digest slowly for sustained release, better for general fueling."
        }
      ]
    }
  },
  {
    "id": "sn-protein",
    "courseId": "sportnutrition",
    "order": 4,
    "title": "Proteins and Muscle Function",
    "tagline": "The building blocks your muscles are literally made of",
    "icon": "sn_protein",
    "lesson": {
      "intro": [
        "Proteins are organic compounds made of amino acids, used by the body for growth, repair, and maintenance of tissue. There are 20 amino acids in total, split into two groups: 9 essential amino acids, which the body cannot make itself and must get from food (histidine, isoleucine, leucine, lysine, methionine, phenylalanine, threonine, tryptophan, and valine), and 11 non-essential amino acids, which the body can synthesize on its own (alanine, arginine, asparagine, aspartic acid, cysteine, glycine, glutamine, glutamic acid, proline, serine, and tyrosine).",
        "Every amino acid shares the same basic structural backbone: an amine group and a carboxyl group attached to a central carbon, written as NH2-C-COOH. What makes each of the 20 amino acids different is the side chain attached to that same central structure."
      ],
      "sections": [
        {
          "heading": "How the body digests and uses protein",
          "body": [
            "Proteins are not digested in the muscles, they are digested in the gastrointestinal tract, absorbed into the bloodstream as individual amino acids, transported by the blood, and then taken up by muscle tissue for protein synthesis. Protein synthesis itself follows a specific pathway: DNA is transcribed into mRNA, the mRNA is carried to a ribosome, and amino acids are assembled there, in the sequence the mRNA specifies, into a finished protein.",
            "This means that whatever protein an athlete eats today does not become muscle today, it first has to be broken all the way down to its individual amino acid components before the body can reassemble anything useful from it."
          ]
        },
        {
          "heading": "The many jobs protein does in the body",
          "body": [
            "Protein can be classified by function, composition, shape, or structure, and the functional categories alone cover an enormous range: structural proteins, enzymes, contractile proteins, hormonal proteins, storage proteins, defence proteins, transport proteins, and receptor proteins. In muscle specifically, the contractile proteins are actin and myosin, the two proteins whose sliding interaction is what actually produces muscle contraction.",
            "Protein also plays a real role in cellular transport: hemoglobin transports oxygen, albumin transports fatty acids and hormones, and transferrin transports iron. Beyond transport, protein contributes directly to immune function, the amino acid glutamine specifically supplies energy to immune cells like lymphocytes and macrophages, improving immunity and recovery. This is one reason chronic protein deficiency doesn't just cause muscle wasting, it also shows up as reduced immunity and poor wound healing."
          ]
        },
        {
          "heading": "Protein and muscle hypertrophy",
          "body": [
            "Muscle hypertrophy is an increase in the size of skeletal muscle, resulting in increased muscle mass, and it occurs specifically when muscles adapt to repeated resistance or strength training. Protein's role in this process is direct: it stimulates muscle protein synthesis, repairs damaged muscle fibers, and increases muscle size over time as training continues.",
            "Among the essential amino acids, leucine plays an outsized role in this process. Leucine activates the mTOR pathway, a key signaling pathway that triggers new muscle protein formation, enhances muscle repair, and reduces muscle breakdown, which is why it's often singled out for attention alongside its fellow branched-chain amino acids (BCAAs), leucine, isoleucine, and valine."
          ]
        },
        {
          "heading": "How much protein, and what happens at the extremes",
          "body": [
            "Daily protein requirements scale with training demand. A healthy, sedentary adult needs roughly 0.8 grams per kilogram of body weight per day. An endurance athlete needs about 1.2 to 1.4 g/kg/day. A strength athlete needs about 1.6 to 2.0 g/kg/day. Someone in heavy training may need as much as 2 to 2.2 g/kg/day. Around exercise specifically, the recommended intake is 20 to 40 grams of high-quality protein within two hours after exercise, or roughly 0.25 to 0.4 grams per kilogram of body weight, to maximize the recovery window.",
            "At the low end, protein deficiency has serious consequences: muscle wasting, weakness, weight loss, reduced immunity, and poor wound healing, in its most severe form this is the condition known as kwashiorkor, along with stunted growth and slow healing. At the high end, taking in more than about 2.5 grams per kilogram daily brings its own problems: increased urea production (the body has to dispose of the nitrogen from all that extra amino acid breakdown), dehydration, a greater workload placed on the kidneys, and possible unwanted weight gain if the extra protein pushes total calories too high."
          ]
        },
        {
          "heading": "Nitrogen balance",
          "body": [
            "Nitrogen balance describes the relationship between nitrogen intake and nitrogen loss in the body, and it comes in three types. Positive nitrogen balance, where intake exceeds loss, occurs during growth, pregnancy, and in athletes actively building muscle. Negative nitrogen balance, where loss exceeds intake, occurs during illness or starvation. Nitrogen equilibrium, where intake and loss are matched, is the typical state of a healthy, weight-stable adult not actively building or losing muscle."
          ]
        }
      ],
      "examples": [
        {
          "title": "Actin and myosin",
          "text": "The contractile proteins in muscle, whose sliding interaction against each other is the physical basis of every muscle contraction the body performs."
        },
        {
          "title": "Leucine and the mTOR pathway",
          "text": "As one of the three branched-chain amino acids, leucine specifically activates the mTOR pathway, triggering new muscle protein formation and reducing muscle breakdown."
        },
        {
          "title": "Glutamine and immune cells",
          "text": "Glutamine supplies energy directly to immune cells like lymphocytes and macrophages, linking adequate protein intake to both muscle recovery and immune function at once."
        },
        {
          "title": "Kwashiorkor",
          "text": "The severe form of protein deficiency, marked by muscle wasting, stunted growth, and slow wound healing, an extreme illustration of what happens when protein intake falls far short of the body's needs."
        }
      ],
      "whyMatters": [
        "Protein is the one macronutrient whose story is really about repair and adaptation rather than immediate energy, most of the muscle-building benefit of a training program depends on protein intake matching that training demand, not just on the workouts themselves. Understanding the daily requirement ranges by training type gives a practical, individualized target instead of a vague \"eat more protein\" rule of thumb."
      ],
      "glossary": [
        {
          "term": "Essential amino acid",
          "def": "An amino acid the body cannot synthesize itself and must obtain from food; there are nine of these."
        },
        {
          "term": "Non-essential amino acid",
          "def": "An amino acid the body can synthesize on its own; there are eleven of these."
        },
        {
          "term": "Protein synthesis",
          "def": "The process of building a protein, following the pathway DNA → mRNA → ribosome → assembled amino acid chain."
        },
        {
          "term": "Actin and myosin",
          "def": "The two contractile proteins in muscle whose sliding interaction produces muscle contraction."
        },
        {
          "term": "Muscle hypertrophy",
          "def": "An increase in skeletal muscle size, occurring when muscle adapts to repeated resistance or strength training."
        },
        {
          "term": "mTOR pathway",
          "def": "A key cell-signaling pathway, activated by leucine, that triggers new muscle protein formation."
        },
        {
          "term": "BCAA (branched-chain amino acids)",
          "def": "Leucine, isoleucine, and valine, a subgroup of essential amino acids especially involved in muscle protein synthesis."
        },
        {
          "term": "Nitrogen balance",
          "def": "The relationship between nitrogen intake and nitrogen loss in the body; can be positive, negative, or in equilibrium."
        },
        {
          "term": "Kwashiorkor",
          "def": "A severe form of protein deficiency causing muscle wasting, stunted growth, and slow wound healing."
        }
      ]
    },
    "parts": [
      {
        "id": "intro",
        "title": "Introduction",
        "cards": [
          {
            "front": "Introduction (1/2)",
            "back": "Proteins are organic compounds made of amino acids, used by the body for growth, repair, and maintenance of tissue. There are 20 amino acids in total, split into two groups: 9 essential amino acids, which the body cannot make itself and must get from food (histidine, isoleucine, leucine, lysine, methionine, phenylalanine, threonine, tryptophan, and valine), and 11 non-essential amino acids, which the body can synthesize on its own (alanine, arginine, asparagine, aspartic acid, cysteine, glycine, glutamine, glutamic acid, proline, serine, and tyrosine)."
          },
          {
            "front": "Introduction (2/2)",
            "back": "Every amino acid shares the same basic structural backbone: an amine group and a carboxyl group attached to a central carbon, written as NH2-C-COOH. What makes each of the 20 amino acids different is the side chain attached to that same central structure."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "How many total amino acids are there, and how are they split?",
              "options": [
                "20 total: 9 essential, 11 non-essential",
                "10 total: 5 essential, 5 non-essential",
                "30 total: 15 essential, 15 non-essential",
                "20 total, all essential"
              ],
              "answerIndex": 0,
              "explanation": "20 amino acids total, 9 essential and 11 non-essential."
            },
            {
              "type": "short",
              "prompt": "What is the basic structure every amino acid shares?",
              "keywords": [
                "amine",
                "carboxyl",
                "nh2",
                "cooh"
              ],
              "explanation": "An amine group and a carboxyl group attached to a central carbon (NH2-C-COOH)."
            }
          ]
        }
      },
      {
        "id": "sec0",
        "title": "How the body digests and uses protein",
        "cards": [
          {
            "front": "How the body digests and uses protein (1/2)",
            "back": "Proteins are not digested in the muscles, they are digested in the gastrointestinal tract, absorbed into the bloodstream as individual amino acids, transported by the blood, and then taken up by muscle tissue for protein synthesis. Protein synthesis itself follows a specific pathway: DNA is transcribed into mRNA, the mRNA is carried to a ribosome, and amino acids are assembled there, in the sequence the mRNA specifies, into a finished protein."
          },
          {
            "front": "How the body digests and uses protein (2/2)",
            "back": "This means that whatever protein an athlete eats today does not become muscle today, it first has to be broken all the way down to its individual amino acid components before the body can reassemble anything useful from it."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "Where are proteins actually digested?",
              "options": [
                "The gastrointestinal tract",
                "Directly in the muscles",
                "In the bloodstream",
                "In the liver only"
              ],
              "answerIndex": 0,
              "explanation": "Proteins are digested in the GI tract, not in the muscles."
            },
            {
              "type": "short",
              "prompt": "Describe the protein synthesis pathway from DNA to finished protein.",
              "keywords": [
                "dna",
                "mrna",
                "ribosome"
              ],
              "explanation": "DNA is transcribed into mRNA, carried to a ribosome, where amino acids are assembled into a finished protein."
            }
          ]
        }
      },
      {
        "id": "sec1",
        "title": "The many jobs protein does in the body",
        "cards": [
          {
            "front": "The many jobs protein does in the body (1/2)",
            "back": "Protein can be classified by function, composition, shape, or structure, and the functional categories alone cover an enormous range: structural proteins, enzymes, contractile proteins, hormonal proteins, storage proteins, defence proteins, transport proteins, and receptor proteins. In muscle specifically, the contractile proteins are actin and myosin, the two proteins whose sliding interaction is what actually produces muscle contraction."
          },
          {
            "front": "The many jobs protein does in the body (2/2)",
            "back": "Protein also plays a real role in cellular transport: hemoglobin transports oxygen, albumin transports fatty acids and hormones, and transferrin transports iron. Beyond transport, protein contributes directly to immune function, the amino acid glutamine specifically supplies energy to immune cells like lymphocytes and macrophages, improving immunity and recovery. This is one reason chronic protein deficiency doesn't just cause muscle wasting, it also shows up as reduced immunity and poor wound healing."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "What are the contractile proteins in muscle called?",
              "options": [
                "Actin and myosin",
                "Hemoglobin and albumin",
                "Insulin and glucagon",
                "Collagen and elastin"
              ],
              "answerIndex": 0,
              "explanation": "Actin and myosin are the contractile proteins in muscle."
            },
            {
              "type": "short",
              "prompt": "What amino acid specifically supplies energy to immune cells, and which cells?",
              "keywords": [
                "glutamine",
                "lymphocyte",
                "macrophage"
              ],
              "explanation": "Glutamine supplies energy to immune cells like lymphocytes and macrophages."
            }
          ]
        }
      },
      {
        "id": "sec2",
        "title": "Protein and muscle hypertrophy",
        "cards": [
          {
            "front": "Protein and muscle hypertrophy (1/2)",
            "back": "Muscle hypertrophy is an increase in the size of skeletal muscle, resulting in increased muscle mass, and it occurs specifically when muscles adapt to repeated resistance or strength training. Protein's role in this process is direct: it stimulates muscle protein synthesis, repairs damaged muscle fibers, and increases muscle size over time as training continues."
          },
          {
            "front": "Protein and muscle hypertrophy (2/2)",
            "back": "Among the essential amino acids, leucine plays an outsized role in this process. Leucine activates the mTOR pathway, a key signaling pathway that triggers new muscle protein formation, enhances muscle repair, and reduces muscle breakdown, which is why it's often singled out for attention alongside its fellow branched-chain amino acids (BCAAs), leucine, isoleucine, and valine."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "What is muscle hypertrophy?",
              "options": [
                "An increase in the size of skeletal muscle from repeated resistance training",
                "A decrease in muscle size from inactivity",
                "A type of muscle injury",
                "A vitamin deficiency"
              ],
              "answerIndex": 0,
              "explanation": "Muscle hypertrophy is an increase in skeletal muscle size resulting from repeated resistance or strength training."
            },
            {
              "type": "short",
              "prompt": "Which amino acid activates the mTOR pathway, and what are the three BCAAs?",
              "keywords": [
                "leucine",
                "isoleucine",
                "valine"
              ],
              "explanation": "Leucine activates mTOR; the three BCAAs are leucine, isoleucine, and valine."
            }
          ]
        }
      },
      {
        "id": "sec3",
        "title": "How much protein, and what happens at the extremes",
        "cards": [
          {
            "front": "How much protein, and what happens at the extremes (1/2)",
            "back": "Daily protein requirements scale with training demand. A healthy, sedentary adult needs roughly 0.8 grams per kilogram of body weight per day. An endurance athlete needs about 1.2 to 1.4 g/kg/day. A strength athlete needs about 1.6 to 2.0 g/kg/day. Someone in heavy training may need as much as 2 to 2.2 g/kg/day. Around exercise specifically, the recommended intake is 20 to 40 grams of high-quality protein within two hours after exercise, or roughly 0.25 to 0.4 grams per kilogram of body weight, to maximize the recovery window."
          },
          {
            "front": "How much protein, and what happens at the extremes (2/2)",
            "back": "At the low end, protein deficiency has serious consequences: muscle wasting, weakness, weight loss, reduced immunity, and poor wound healing, in its most severe form this is the condition known as kwashiorkor, along with stunted growth and slow healing. At the high end, taking in more than about 2.5 grams per kilogram daily brings its own problems: increased urea production (the body has to dispose of the nitrogen from all that extra amino acid breakdown), dehydration, a greater workload placed on the kidneys, and possible unwanted weight gain if the extra protein pushes total calories too high."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "What is the daily protein requirement for a strength athlete?",
              "options": [
                "1.6-2.0 g/kg/day",
                "0.8 g/kg/day",
                "5 g/kg/day",
                "0.1 g/kg/day"
              ],
              "answerIndex": 0,
              "explanation": "Strength athletes need about 1.6-2.0 g/kg/day."
            },
            {
              "type": "short",
              "prompt": "What happens when protein intake exceeds about 2.5g/kg daily?",
              "keywords": [
                "urea",
                "dehydrat",
                "kidney"
              ],
              "explanation": "Increased urea production, dehydration risk, and greater kidney workload."
            }
          ]
        }
      },
      {
        "id": "sec4",
        "title": "Nitrogen balance",
        "cards": [
          {
            "front": "Nitrogen balance",
            "back": "Nitrogen balance describes the relationship between nitrogen intake and nitrogen loss in the body, and it comes in three types. Positive nitrogen balance, where intake exceeds loss, occurs during growth, pregnancy, and in athletes actively building muscle. Negative nitrogen balance, where loss exceeds intake, occurs during illness or starvation. Nitrogen equilibrium, where intake and loss are matched, is the typical state of a healthy, weight-stable adult not actively building or losing muscle."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "When does positive nitrogen balance occur?",
              "options": [
                "During growth, pregnancy, and in athletes building muscle",
                "During illness or starvation only",
                "In healthy, weight-stable adults only",
                "It never occurs"
              ],
              "answerIndex": 0,
              "explanation": "Positive nitrogen balance (intake exceeds loss) occurs during growth, pregnancy, and in athletes building muscle."
            },
            {
              "type": "short",
              "prompt": "What is nitrogen equilibrium?",
              "keywords": [
                "intake",
                "loss",
                "match",
                "healthy",
                "stable"
              ],
              "explanation": "A state where nitrogen intake and loss are matched, typical of a healthy, weight-stable adult."
            }
          ]
        }
      },
      {
        "id": "examples",
        "title": "Real-World Examples",
        "cards": [
          {
            "front": "Actin and myosin",
            "back": "The contractile proteins in muscle, whose sliding interaction against each other is the physical basis of every muscle contraction the body performs."
          },
          {
            "front": "Leucine and the mTOR pathway",
            "back": "As one of the three branched-chain amino acids, leucine specifically activates the mTOR pathway, triggering new muscle protein formation and reducing muscle breakdown."
          },
          {
            "front": "Glutamine and immune cells",
            "back": "Glutamine supplies energy directly to immune cells like lymphocytes and macrophages, linking adequate protein intake to both muscle recovery and immune function at once."
          },
          {
            "front": "Kwashiorkor",
            "back": "The severe form of protein deficiency, marked by muscle wasting, stunted growth, and slow wound healing, an extreme illustration of what happens when protein intake falls far short of the body's needs."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "What is kwashiorkor?",
              "options": [
                "A severe form of protein deficiency causing muscle wasting and stunted growth",
                "A type of protein supplement",
                "A vitamin overdose condition",
                "A form of muscle hypertrophy"
              ],
              "answerIndex": 0,
              "explanation": "Kwashiorkor is the severe form of protein deficiency described in the lesson."
            },
            {
              "type": "short",
              "prompt": "What does hemoglobin transport, as an example of protein's transport role?",
              "keywords": [
                "oxygen"
              ],
              "explanation": "Hemoglobin transports oxygen."
            }
          ]
        }
      },
      {
        "id": "wrapup",
        "title": "Why It Matters & Key Terms",
        "cards": [
          {
            "front": "Why This Matters",
            "back": "Protein is the one macronutrient whose story is really about repair and adaptation rather than immediate energy, most of the muscle-building benefit of a training program depends on protein intake matching that training demand, not just on the workouts themselves. Understanding the daily requirement ranges by training type gives a practical, individualized target instead of a vague \"eat more protein\" rule of thumb."
          },
          {
            "front": "Key Term: Essential amino acid",
            "back": "An amino acid the body cannot synthesize itself and must obtain from food; there are nine of these."
          },
          {
            "front": "Key Term: Non-essential amino acid",
            "back": "An amino acid the body can synthesize on its own; there are eleven of these."
          },
          {
            "front": "Key Term: Protein synthesis",
            "back": "The process of building a protein, following the pathway DNA → mRNA → ribosome → assembled amino acid chain."
          },
          {
            "front": "Key Term: Actin and myosin",
            "back": "The two contractile proteins in muscle whose sliding interaction produces muscle contraction."
          },
          {
            "front": "Key Term: Muscle hypertrophy",
            "back": "An increase in skeletal muscle size, occurring when muscle adapts to repeated resistance or strength training."
          },
          {
            "front": "Key Term: mTOR pathway",
            "back": "A key cell-signaling pathway, activated by leucine, that triggers new muscle protein formation."
          },
          {
            "front": "Key Term: BCAA (branched-chain amino acids)",
            "back": "Leucine, isoleucine, and valine, a subgroup of essential amino acids especially involved in muscle protein synthesis."
          },
          {
            "front": "Key Term: Nitrogen balance",
            "back": "The relationship between nitrogen intake and nitrogen loss in the body; can be positive, negative, or in equilibrium."
          },
          {
            "front": "Key Term: Kwashiorkor",
            "back": "A severe form of protein deficiency causing muscle wasting, stunted growth, and slow wound healing."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "Why is protein described as being about 'repair and adaptation' rather than immediate energy?",
              "options": [
                "Its main role is building/repairing tissue rather than being a primary fuel source",
                "Protein is never used for energy under any circumstance",
                "Protein is identical to carbohydrate in function",
                "Protein has no biological role"
              ],
              "answerIndex": 0,
              "explanation": "Protein's central role is repair and adaptation (muscle building/repair), distinguishing it from carbs/fat as primary energy sources."
            },
            {
              "type": "short",
              "prompt": "Define nitrogen balance.",
              "keywords": [
                "intake",
                "loss",
                "relationship"
              ],
              "explanation": "The relationship between nitrogen intake and nitrogen loss in the body."
            }
          ]
        }
      }
    ],
    "finalExam": {
      "mcq": [
        {
          "type": "mcq",
          "prompt": "How many essential amino acids are there, and what makes them 'essential'?",
          "options": [
            "Nine; the body cannot synthesize them and must get them from food",
            "Eleven; they are the most abundant amino acids",
            "Twenty; all amino acids are essential",
            "Nine; they are only needed by athletes"
          ],
          "answerIndex": 0,
          "explanation": "There are nine essential amino acids, which the body cannot make itself and must obtain from the diet."
        },
        {
          "type": "mcq",
          "prompt": "What are the two contractile proteins responsible for muscle contraction?",
          "options": [
            "Actin and myosin",
            "Hemoglobin and albumin",
            "Insulin and glucagon",
            "Collagen and keratin"
          ],
          "answerIndex": 0,
          "explanation": "Actin and myosin are the contractile proteins whose sliding interaction produces muscle contraction."
        },
        {
          "type": "mcq",
          "prompt": "Which amino acid specifically activates the mTOR pathway to trigger new muscle protein formation?",
          "options": [
            "Leucine",
            "Glycine",
            "Tryptophan",
            "Aspartic acid"
          ],
          "answerIndex": 0,
          "explanation": "Leucine, one of the three BCAAs, activates the mTOR pathway, a key trigger for new muscle protein formation."
        },
        {
          "type": "mcq",
          "prompt": "What is the recommended protein intake window and amount after exercise?",
          "options": [
            "20-40g of high-quality protein within 2 hours after exercise",
            "200g of protein immediately after exercise",
            "No protein needed for at least 24 hours",
            "5g of protein within 10 minutes"
          ],
          "answerIndex": 0,
          "explanation": "20-40g of high-quality protein (or about 0.25-0.4 g/kg body weight) within two hours after exercise is the recommended recovery window."
        },
        {
          "type": "mcq",
          "prompt": "What happens when daily protein intake exceeds roughly 2.5 g/kg?",
          "options": [
            "Increased urea production, dehydration, and greater kidney workload",
            "Immediate improvement in muscle mass with no downsides",
            "A drop in blood pressure",
            "Automatic conversion to muscle regardless of training"
          ],
          "answerIndex": 0,
          "explanation": "Excess protein (above ~2.5g/kg/day) increases urea production, risks dehydration, and places a greater workload on the kidneys."
        },
        {
          "type": "short",
          "prompt": "Explain, in your own words, the pathway of protein synthesis from DNA to finished protein.",
          "keywords": [
            "dna",
            "mrna",
            "ribosome",
            "amino acid"
          ],
          "explanation": "DNA is transcribed into mRNA, the mRNA travels to a ribosome, and amino acids are assembled there in sequence into a finished protein."
        },
        {
          "type": "short",
          "prompt": "What is glutamine's specific role in immune function?",
          "keywords": [
            "energy",
            "immune cell",
            "lymphocyte",
            "macrophage"
          ],
          "explanation": "Glutamine supplies energy to immune cells like lymphocytes and macrophages, improving immunity and recovery."
        },
        {
          "type": "short",
          "prompt": "Describe the three types of nitrogen balance and when each occurs.",
          "keywords": [
            "positive",
            "growth",
            "pregnancy",
            "negative",
            "illness",
            "starvation",
            "equilibrium"
          ],
          "explanation": "Positive (intake exceeds loss: growth, pregnancy, athletes), negative (loss exceeds intake: illness, starvation), and equilibrium (matched intake/loss: healthy stable adults)."
        }
      ],
      "theory": [
        {
          "type": "theory",
          "prompt": "Explain the process of protein digestion and synthesis, from a protein-containing meal to new muscle tissue.",
          "keywordGroups": [
            [
              "digest",
              "gi tract",
              "amino acid"
            ],
            [
              "absorb",
              "blood",
              "transport"
            ],
            [
              "dna",
              "mrna",
              "ribosome"
            ],
            [
              "muscle",
              "synthesis"
            ]
          ],
          "minGroups": 3,
          "explanation": "Protein is digested in the GI tract into amino acids, absorbed and transported by blood, taken up by muscle, and assembled into new protein via the DNA→mRNA→ribosome pathway."
        },
        {
          "type": "theory",
          "prompt": "Discuss the role of leucine and the mTOR pathway in muscle hypertrophy, and name the other two BCAAs.",
          "keywordGroups": [
            [
              "leucine",
              "mtor"
            ],
            [
              "isoleucine",
              "valine"
            ],
            [
              "muscle protein formation",
              "repair"
            ],
            [
              "hypertrophy",
              "resistance training"
            ]
          ],
          "minGroups": 3,
          "explanation": "Leucine activates the mTOR pathway, triggering new muscle protein formation and reducing breakdown; isoleucine and valine are the other two BCAAs; together they support hypertrophy from resistance training."
        },
        {
          "type": "theory",
          "prompt": "Compare the effects of protein deficiency and protein excess on the body.",
          "keywordGroups": [
            [
              "deficiency",
              "wasting",
              "weakness",
              "kwashiorkor"
            ],
            [
              "immunity",
              "wound healing"
            ],
            [
              "excess",
              "urea",
              "dehydration",
              "kidney"
            ]
          ],
          "minGroups": 2,
          "explanation": "Deficiency causes muscle wasting, weakness, reduced immunity, and poor wound healing (kwashiorkor in severe cases); excess (>2.5g/kg/day) causes increased urea production, dehydration risk, and greater kidney workload."
        },
        {
          "type": "theory",
          "prompt": "Explain nitrogen balance, describing all three types and when each occurs.",
          "keywordGroups": [
            [
              "positive",
              "growth",
              "pregnancy",
              "athlete"
            ],
            [
              "negative",
              "illness",
              "starvation"
            ],
            [
              "equilibrium",
              "healthy",
              "stable"
            ]
          ],
          "minGroups": 3,
          "explanation": "Positive (intake exceeds loss: growth, pregnancy, muscle-building athletes), negative (loss exceeds intake: illness, starvation), equilibrium (matched: healthy stable adults)."
        }
      ]
    }
  },
  {
    "id": "sn-fats",
    "courseId": "sportnutrition",
    "order": 5,
    "title": "Fats (Lipids) and Endurance",
    "tagline": "Slow-burning fuel for the long haul",
    "icon": "sn_fats",
    "lesson": {
      "intro": [
        "Lipids are organic compounds that are insoluble in water but soluble in organic solvents. In the body they provide energy, form cell membranes, and provide insulation. Measured by weight, fat is the most energy-dense macronutrient, supplying about 9 kilocalories per gram, roughly double what carbohydrate or protein provide gram for gram.",
        "There are three major classes of lipids relevant to sport nutrition: phospholipids, triglycerides (the storage form built from glycerol and fatty acids), and cholesterol. In sport specifically, lipids improve endurance capacity, protect internal organs, support hormone production, and help the body absorb fat-soluble vitamins."
      ],
      "sections": [
        {
          "heading": "Digesting fat, start to finish",
          "body": [
            "Fat digestion begins in a small way in the mouth and stomach, but most of the real digestive work happens in the duodenum, the first part of the small intestine. There, bile emulsifies the fat, breaking large fat globules into smaller droplets so digestive enzymes can work on them more effectively. Pancreatic lipase then breaks the emulsified triglycerides down into fatty acids and monoglycerides.",
            "These products form small structures called micelles, which are absorbed into the intestinal wall. Once inside, they are reformed back into triglycerides, packaged into transport particles called chylomicrons, and transported via the lymphatic system into the bloodstream, a notably different absorption route than the direct-to-bloodstream path carbohydrates and amino acids take."
          ]
        },
        {
          "heading": "Cholesterol: necessary and dangerous at once",
          "body": [
            "Cholesterol is a waxy lipid needed to build cell membranes, produce bile acids, and synthesize vitamin D. It becomes harmful specifically when blood cholesterol levels become excessively high. Cholesterol travels through the blood attached to two main types of carrier: high-density lipoprotein (HDL), often called \"good\" cholesterol because it removes excess cholesterol from tissues and carries it back to the liver for disposal, protecting against heart disease; and low-density lipoprotein (LDL), often called \"bad\" cholesterol because it carries cholesterol to body tissues, and excessive LDL contributes to plaque formation in arteries, increasing the risk of heart attack and stroke.",
            "A lipid profile is a blood test used to assess cardiovascular disease risk, typically measuring total cholesterol, LDL, HDL, triglycerides, and sometimes VLDL cholesterol together."
          ]
        },
        {
          "heading": "Saturated, unsaturated, and trans fats",
          "body": [
            "Saturated fats have no double bonds in their fatty acid chains, are usually solid at room temperature, and are found in foods like butter, cheese, and fatty meat, they tend to raise cholesterol levels. Unsaturated fats have one or more double bonds, are usually liquid at room temperature, and are found in foods like olive oil, avocado, and peanuts, they tend to improve heart health.",
            "Trans fats are unsaturated fats that have been chemically altered during industrial hydrogenation. Their risks are serious: increased heart disease risk, stroke, obesity, type 2 diabetes, reduced HDL, and increased LDL, making them the one fat category worth actively avoiding rather than just moderating. Omega-3 fatty acids (including EPA, DHA, and ALA), found in salmon, mackerel, sardines, and walnuts, sit at the opposite end of the spectrum: they reduce inflammation, improve heart health, and support brain function."
          ]
        },
        {
          "heading": "Fat as fuel for endurance",
          "body": [
            "Fat is stored in two main places relevant to exercise: adipose tissue (the body's general fat stores) and intramuscular fat, fat stored directly inside muscle fibers, which serves as an important fuel source during prolonged endurance exercise. The body draws more heavily on fat stores when carbohydrate levels are low and during long-duration exercise, since fat oxidation spares glycogen and delays fatigue, though it comes online more slowly than carbohydrate metabolism.",
            "This is why fat is best suited to long-duration, low-to-moderate-intensity exercise like marathon running, distance cycling, or long jogs, rather than short, high-intensity efforts. Trained athletes also use fat more efficiently than untrained individuals during exercise, a specific adaptation that helps preserve glycogen stores for when they're needed most, later in a race."
          ]
        },
        {
          "heading": "Fat guidelines and hormone production",
          "body": [
            "A general guideline for athletes is that roughly 20 to 35 percent of daily calories should come from fat. Meal timing matters here too: a meal containing healthy fat is best eaten about two to four hours before sport, oatmeal with nuts, banana, and peanut butter, or something like white bread, are reasonable examples suited to that timing window.",
            "Fat also plays an underappreciated role in hormone production. Cholesterol serves as the precursor material for the synthesis of steroid hormones, including testosterone, estrogen, progesterone, and cortisol. Through this route, adequate dietary fat supports the production of steroid hormones, regulation of reproduction, regulation of metabolism, growth, and development, the stress response, and the maintenance of fluid and electrolyte balance, meaning chronically too-low fat intake can quietly undermine hormone-dependent training adaptations."
          ]
        }
      ],
      "examples": [
        {
          "title": "HDL vs. LDL",
          "text": "HDL removes excess cholesterol from tissues and carries it to the liver, protecting against heart disease. LDL carries cholesterol to tissues, and in excess contributes to arterial plaque, raising heart attack and stroke risk."
        },
        {
          "title": "Trans fat vs. omega-3",
          "text": "Trans fats (industrially hydrogenated) raise heart disease, stroke, and diabetes risk. Omega-3s (from salmon, walnuts) reduce inflammation and support heart and brain health, opposite ends of the fat-quality spectrum."
        },
        {
          "title": "Pre-sport meal timing",
          "text": "A meal with healthy fat, like oatmeal with nuts, banana, and peanut butter, eaten 2-4 hours before sport, times fat digestion appropriately without leaving it undigested during competition."
        },
        {
          "title": "Intramuscular fat during a marathon",
          "text": "Fat stored directly inside muscle fibers becomes an increasingly important fuel source as a long-duration, low-to-moderate-intensity event continues and glycogen stores are being spared."
        }
      ],
      "whyMatters": [
        "Fat's reputation as \"the macronutrient to avoid\" doesn't hold up in sport nutrition, it is essential for hormone production, vitamin absorption, and long-duration fuel supply, and chronically restricting it can undermine exactly the training adaptations an athlete is working for. The real distinction that matters is fat quality, saturated and trans fats managed carefully, unsaturated and omega-3 fats prioritized, not fat quantity alone."
      ],
      "glossary": [
        {
          "term": "Triglyceride",
          "def": "The storage form of fat, built from a glycerol backbone with three attached fatty acids."
        },
        {
          "term": "Chylomicron",
          "def": "A transport particle that packages absorbed dietary fat for travel via the lymphatic system into the bloodstream."
        },
        {
          "term": "HDL (high-density lipoprotein)",
          "def": "\"Good\" cholesterol carrier that removes excess cholesterol from tissues and returns it to the liver for disposal."
        },
        {
          "term": "LDL (low-density lipoprotein)",
          "def": "\"Bad\" cholesterol carrier that delivers cholesterol to body tissues; excess LDL contributes to arterial plaque."
        },
        {
          "term": "Lipid profile",
          "def": "A blood test measuring total cholesterol, LDL, HDL, and triglycerides to assess cardiovascular disease risk."
        },
        {
          "term": "Trans fat",
          "def": "An unsaturated fat chemically altered by industrial hydrogenation, linked to heart disease, stroke, and diabetes risk."
        },
        {
          "term": "Intramuscular fat",
          "def": "Fat stored directly inside muscle fibers, serving as a fuel source during prolonged endurance exercise."
        }
      ]
    },
    "parts": [
      {
        "id": "intro",
        "title": "Introduction",
        "cards": [
          {
            "front": "Introduction (1/2)",
            "back": "Lipids are organic compounds that are insoluble in water but soluble in organic solvents. In the body they provide energy, form cell membranes, and provide insulation. Measured by weight, fat is the most energy-dense macronutrient, supplying about 9 kilocalories per gram, roughly double what carbohydrate or protein provide gram for gram."
          },
          {
            "front": "Introduction (2/2)",
            "back": "There are three major classes of lipids relevant to sport nutrition: phospholipids, triglycerides (the storage form built from glycerol and fatty acids), and cholesterol. In sport specifically, lipids improve endurance capacity, protect internal organs, support hormone production, and help the body absorb fat-soluble vitamins."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "How many kilocalories does one gram of fat provide?",
              "options": [
                "About 9 kcal",
                "About 4 kcal",
                "About 2 kcal",
                "About 15 kcal"
              ],
              "answerIndex": 0,
              "explanation": "Fat provides about 9 kcal per gram, roughly double carbohydrate or protein."
            },
            {
              "type": "short",
              "prompt": "Name the three major classes of lipids relevant to sport nutrition.",
              "keywords": [
                "phospholipid",
                "triglyceride",
                "cholesterol"
              ],
              "explanation": "Phospholipids, triglycerides, and cholesterol."
            }
          ]
        }
      },
      {
        "id": "sec0",
        "title": "Digesting fat, start to finish",
        "cards": [
          {
            "front": "Digesting fat, start to finish (1/2)",
            "back": "Fat digestion begins in a small way in the mouth and stomach, but most of the real digestive work happens in the duodenum, the first part of the small intestine. There, bile emulsifies the fat, breaking large fat globules into smaller droplets so digestive enzymes can work on them more effectively. Pancreatic lipase then breaks the emulsified triglycerides down into fatty acids and monoglycerides."
          },
          {
            "front": "Digesting fat, start to finish (2/2)",
            "back": "These products form small structures called micelles, which are absorbed into the intestinal wall. Once inside, they are reformed back into triglycerides, packaged into transport particles called chylomicrons, and transported via the lymphatic system into the bloodstream, a notably different absorption route than the direct-to-bloodstream path carbohydrates and amino acids take."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "What breaks down emulsified triglycerides into fatty acids and monoglycerides?",
              "options": [
                "Pancreatic lipase",
                "Salivary amylase",
                "Pepsin",
                "Bile alone"
              ],
              "answerIndex": 0,
              "explanation": "Pancreatic lipase breaks emulsified triglycerides into fatty acids and monoglycerides."
            },
            {
              "type": "short",
              "prompt": "What transport particle carries absorbed fat via the lymph into the bloodstream?",
              "keywords": [
                "chylomicron"
              ],
              "explanation": "Chylomicrons transport absorbed fat via the lymphatic system into the bloodstream."
            }
          ]
        }
      },
      {
        "id": "sec1",
        "title": "Cholesterol: necessary and dangerous at once",
        "cards": [
          {
            "front": "Cholesterol: necessary and dangerous at once (1/2)",
            "back": "Cholesterol is a waxy lipid needed to build cell membranes, produce bile acids, and synthesize vitamin D. It becomes harmful specifically when blood cholesterol levels become excessively high. Cholesterol travels through the blood attached to two main types of carrier: high-density lipoprotein (HDL), often called \"good\" cholesterol because it removes excess cholesterol from tissues and carries it back to the liver for disposal, protecting against heart disease; and low-density lipoprotein (LDL), often called \"bad\" cholesterol because it carries cholesterol to body tissues, and excessive LDL contributes to plaque formation in arteries, increasing the risk of heart attack and stroke."
          },
          {
            "front": "Cholesterol: necessary and dangerous at once (2/2)",
            "back": "A lipid profile is a blood test used to assess cardiovascular disease risk, typically measuring total cholesterol, LDL, HDL, triglycerides, and sometimes VLDL cholesterol together."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "Which cholesterol carrier is often called 'bad' cholesterol?",
              "options": [
                "LDL",
                "HDL",
                "VLDL only",
                "Neither is bad"
              ],
              "answerIndex": 0,
              "explanation": "LDL (low-density lipoprotein) is the 'bad' cholesterol, contributing to arterial plaque in excess."
            },
            {
              "type": "short",
              "prompt": "What does a lipid profile blood test typically measure?",
              "keywords": [
                "cholesterol",
                "ldl",
                "hdl",
                "triglyceride"
              ],
              "explanation": "Total cholesterol, LDL, HDL, triglycerides, and sometimes VLDL cholesterol."
            }
          ]
        }
      },
      {
        "id": "sec2",
        "title": "Saturated, unsaturated, and trans fats",
        "cards": [
          {
            "front": "Saturated, unsaturated, and trans fats (1/2)",
            "back": "Saturated fats have no double bonds in their fatty acid chains, are usually solid at room temperature, and are found in foods like butter, cheese, and fatty meat, they tend to raise cholesterol levels. Unsaturated fats have one or more double bonds, are usually liquid at room temperature, and are found in foods like olive oil, avocado, and peanuts, they tend to improve heart health."
          },
          {
            "front": "Saturated, unsaturated, and trans fats (2/2)",
            "back": "Trans fats are unsaturated fats that have been chemically altered during industrial hydrogenation. Their risks are serious: increased heart disease risk, stroke, obesity, type 2 diabetes, reduced HDL, and increased LDL, making them the one fat category worth actively avoiding rather than just moderating. Omega-3 fatty acids (including EPA, DHA, and ALA), found in salmon, mackerel, sardines, and walnuts, sit at the opposite end of the spectrum: they reduce inflammation, improve heart health, and support brain function."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "What are trans fats, and how are they created?",
              "options": [
                "Unsaturated fats chemically altered by industrial hydrogenation",
                "Naturally occurring saturated fats",
                "A type of protein",
                "A vitamin"
              ],
              "answerIndex": 0,
              "explanation": "Trans fats are unsaturated fats chemically altered during industrial hydrogenation."
            },
            {
              "type": "short",
              "prompt": "Name two omega-3 fatty acids and one food source.",
              "keywords": [
                "epa",
                "dha",
                "ala",
                "salmon",
                "walnut"
              ],
              "explanation": "EPA, DHA, and ALA are omega-3s; salmon, mackerel, sardines, and walnuts are sources."
            }
          ]
        }
      },
      {
        "id": "sec3",
        "title": "Fat as fuel for endurance",
        "cards": [
          {
            "front": "Fat as fuel for endurance (1/2)",
            "back": "Fat is stored in two main places relevant to exercise: adipose tissue (the body's general fat stores) and intramuscular fat, fat stored directly inside muscle fibers, which serves as an important fuel source during prolonged endurance exercise. The body draws more heavily on fat stores when carbohydrate levels are low and during long-duration exercise, since fat oxidation spares glycogen and delays fatigue, though it comes online more slowly than carbohydrate metabolism."
          },
          {
            "front": "Fat as fuel for endurance (2/2)",
            "back": "This is why fat is best suited to long-duration, low-to-moderate-intensity exercise like marathon running, distance cycling, or long jogs, rather than short, high-intensity efforts. Trained athletes also use fat more efficiently than untrained individuals during exercise, a specific adaptation that helps preserve glycogen stores for when they're needed most, later in a race."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "Where is intramuscular fat stored?",
              "options": [
                "Directly inside muscle fibers",
                "In the liver only",
                "In the bloodstream",
                "In the pancreas"
              ],
              "answerIndex": 0,
              "explanation": "Intramuscular fat is stored directly inside muscle fibers."
            },
            {
              "type": "short",
              "prompt": "When does the body draw more heavily on fat stores during exercise?",
              "keywords": [
                "low carbohydrate",
                "prolonged",
                "long duration"
              ],
              "explanation": "When carbohydrate levels are low and during prolonged/long-duration exercise."
            }
          ]
        }
      },
      {
        "id": "sec4",
        "title": "Fat guidelines and hormone production",
        "cards": [
          {
            "front": "Fat guidelines and hormone production (1/2)",
            "back": "A general guideline for athletes is that roughly 20 to 35 percent of daily calories should come from fat. Meal timing matters here too: a meal containing healthy fat is best eaten about two to four hours before sport, oatmeal with nuts, banana, and peanut butter, or something like white bread, are reasonable examples suited to that timing window."
          },
          {
            "front": "Fat guidelines and hormone production (2/2)",
            "back": "Fat also plays an underappreciated role in hormone production. Cholesterol serves as the precursor material for the synthesis of steroid hormones, including testosterone, estrogen, progesterone, and cortisol. Through this route, adequate dietary fat supports the production of steroid hormones, regulation of reproduction, regulation of metabolism, growth, and development, the stress response, and the maintenance of fluid and electrolyte balance, meaning chronically too-low fat intake can quietly undermine hormone-dependent training adaptations."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "What percentage of daily calories should come from fat for athletes, per the lesson?",
              "options": [
                "20-35%",
                "50-60%",
                "5-10%",
                "80-90%"
              ],
              "answerIndex": 0,
              "explanation": "Roughly 20-35% of daily calories should come from fat."
            },
            {
              "type": "short",
              "prompt": "What is cholesterol's role in hormone production?",
              "keywords": [
                "precursor",
                "steroid hormone"
              ],
              "explanation": "Cholesterol serves as the precursor material for synthesizing steroid hormones like testosterone, estrogen, progesterone, and cortisol."
            }
          ]
        }
      },
      {
        "id": "examples",
        "title": "Real-World Examples",
        "cards": [
          {
            "front": "HDL vs. LDL",
            "back": "HDL removes excess cholesterol from tissues and carries it to the liver, protecting against heart disease. LDL carries cholesterol to tissues, and in excess contributes to arterial plaque, raising heart attack and stroke risk."
          },
          {
            "front": "Trans fat vs. omega-3",
            "back": "Trans fats (industrially hydrogenated) raise heart disease, stroke, and diabetes risk. Omega-3s (from salmon, walnuts) reduce inflammation and support heart and brain health, opposite ends of the fat-quality spectrum."
          },
          {
            "front": "Pre-sport meal timing",
            "back": "A meal with healthy fat, like oatmeal with nuts, banana, and peanut butter, eaten 2-4 hours before sport, times fat digestion appropriately without leaving it undigested during competition."
          },
          {
            "front": "Intramuscular fat during a marathon",
            "back": "Fat stored directly inside muscle fibers becomes an increasingly important fuel source as a long-duration, low-to-moderate-intensity event continues and glycogen stores are being spared."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "Which cholesterol carrier protects against heart disease by removing excess cholesterol?",
              "options": [
                "HDL",
                "LDL",
                "VLDL",
                "None of them"
              ],
              "answerIndex": 0,
              "explanation": "HDL removes excess cholesterol from tissues and carries it to the liver, protecting against heart disease."
            },
            {
              "type": "short",
              "prompt": "Give a reasonable pre-sport meal example combining healthy fat and carbohydrate.",
              "keywords": [
                "oatmeal",
                "nut",
                "banana",
                "peanut butter"
              ],
              "explanation": "Oatmeal with nuts, banana, and peanut butter, or white bread."
            }
          ]
        }
      },
      {
        "id": "wrapup",
        "title": "Why It Matters & Key Terms",
        "cards": [
          {
            "front": "Why This Matters",
            "back": "Fat's reputation as \"the macronutrient to avoid\" doesn't hold up in sport nutrition, it is essential for hormone production, vitamin absorption, and long-duration fuel supply, and chronically restricting it can undermine exactly the training adaptations an athlete is working for. The real distinction that matters is fat quality, saturated and trans fats managed carefully, unsaturated and omega-3 fats prioritized, not fat quantity alone."
          },
          {
            "front": "Key Term: Triglyceride",
            "back": "The storage form of fat, built from a glycerol backbone with three attached fatty acids."
          },
          {
            "front": "Key Term: Chylomicron",
            "back": "A transport particle that packages absorbed dietary fat for travel via the lymphatic system into the bloodstream."
          },
          {
            "front": "Key Term: HDL (high-density lipoprotein)",
            "back": "\"Good\" cholesterol carrier that removes excess cholesterol from tissues and returns it to the liver for disposal."
          },
          {
            "front": "Key Term: LDL (low-density lipoprotein)",
            "back": "\"Bad\" cholesterol carrier that delivers cholesterol to body tissues; excess LDL contributes to arterial plaque."
          },
          {
            "front": "Key Term: Lipid profile",
            "back": "A blood test measuring total cholesterol, LDL, HDL, and triglycerides to assess cardiovascular disease risk."
          },
          {
            "front": "Key Term: Trans fat",
            "back": "An unsaturated fat chemically altered by industrial hydrogenation, linked to heart disease, stroke, and diabetes risk."
          },
          {
            "front": "Key Term: Intramuscular fat",
            "back": "Fat stored directly inside muscle fibers, serving as a fuel source during prolonged endurance exercise."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "What is the real distinction that matters most for fat intake, according to the lesson?",
              "options": [
                "Fat quality (type of fat), not just quantity",
                "Only total fat quantity, regardless of type",
                "Avoiding fat entirely",
                "Only eating trans fats"
              ],
              "answerIndex": 0,
              "explanation": "The real distinction is fat quality, managing saturated/trans fat while prioritizing unsaturated/omega-3 fats, not fat quantity alone."
            },
            {
              "type": "short",
              "prompt": "Why can chronically too-low fat intake undermine training adaptations?",
              "keywords": [
                "hormone",
                "steroid",
                "testosterone"
              ],
              "explanation": "Fat is needed for steroid hormone production, so too-low intake can undermine hormone-dependent training adaptations."
            }
          ]
        }
      }
    ],
    "finalExam": {
      "mcq": [
        {
          "type": "mcq",
          "prompt": "How many kilocalories does one gram of fat supply?",
          "options": [
            "About 9 kcal",
            "About 4 kcal",
            "About 2 kcal",
            "About 12 kcal"
          ],
          "answerIndex": 0,
          "explanation": "Fat supplies roughly 9 kilocalories per gram, about double carbohydrate or protein gram for gram."
        },
        {
          "type": "mcq",
          "prompt": "What is the role of bile in fat digestion?",
          "options": [
            "It emulsifies fat, breaking large globules into smaller droplets for enzymes to act on",
            "It directly breaks triglycerides into fatty acids",
            "It transports fat through the lymphatic system",
            "It has no role in fat digestion"
          ],
          "answerIndex": 0,
          "explanation": "Bile emulsifies fat in the duodenum, breaking large fat globules into smaller droplets so pancreatic lipase can act on them."
        },
        {
          "type": "mcq",
          "prompt": "What distinguishes HDL from LDL?",
          "options": [
            "HDL removes cholesterol from tissues to the liver ('good'); LDL delivers cholesterol to tissues and can cause plaque ('bad')",
            "HDL and LDL are identical in function",
            "LDL is always beneficial and HDL is always harmful",
            "HDL only matters for athletes"
          ],
          "answerIndex": 0,
          "explanation": "HDL is the 'good' cholesterol carrier removing excess cholesterol; LDL is the 'bad' carrier that, in excess, contributes to arterial plaque."
        },
        {
          "type": "mcq",
          "prompt": "What makes trans fats particularly risky compared to other fats?",
          "options": [
            "They are industrially hydrogenated and linked to heart disease, stroke, diabetes, and unfavorable cholesterol changes",
            "They are naturally occurring and beneficial",
            "They are identical to omega-3 fats",
            "They only affect athletes"
          ],
          "answerIndex": 0,
          "explanation": "Trans fats are chemically altered via industrial hydrogenation and are linked to increased heart disease, stroke, type 2 diabetes risk, reduced HDL, and increased LDL."
        },
        {
          "type": "mcq",
          "prompt": "Why is fat best suited to long-duration, low-to-moderate-intensity exercise rather than short, intense efforts?",
          "options": [
            "Fat oxidation comes online more slowly than carbohydrate metabolism, but spares glycogen over time",
            "Fat cannot be used for energy during exercise at all",
            "Fat is only used during rest, never during exercise",
            "Fat provides less total energy than carbohydrate"
          ],
          "answerIndex": 0,
          "explanation": "Fat oxidation ramps up more slowly than carbohydrate metabolism, but is well suited to sparing glycogen and fueling prolonged, lower-intensity effort."
        },
        {
          "type": "short",
          "prompt": "List the steps of fat digestion from the duodenum through to entering the bloodstream.",
          "keywords": [
            "bile",
            "emulsif",
            "lipase",
            "micelle",
            "chylomicron",
            "lymph"
          ],
          "explanation": "Bile emulsifies fat, pancreatic lipase breaks it into fatty acids/monoglycerides, these form micelles absorbed into the intestinal wall, reformed into triglycerides, packaged as chylomicrons, and transported via lymph into the bloodstream."
        },
        {
          "type": "short",
          "prompt": "Explain cholesterol's role in hormone production.",
          "keywords": [
            "precursor",
            "steroid hormone",
            "testosterone",
            "estrogen",
            "cortisol"
          ],
          "explanation": "Cholesterol serves as the precursor material for synthesizing steroid hormones, including testosterone, estrogen, progesterone, and cortisol."
        },
        {
          "type": "short",
          "prompt": "What percentage of daily calories should come from fat for athletes, per the lesson?",
          "keywords": [
            "20",
            "35",
            "percent"
          ],
          "explanation": "Roughly 20 to 35 percent of daily calories should come from fat."
        }
      ],
      "theory": [
        {
          "type": "theory",
          "prompt": "Trace the digestion of dietary fat from the duodenum to entering the bloodstream, naming each key step.",
          "keywordGroups": [
            [
              "bile",
              "emulsif"
            ],
            [
              "pancreatic lipase",
              "fatty acid",
              "monoglyceride"
            ],
            [
              "micelle"
            ],
            [
              "chylomicron",
              "lymph"
            ]
          ],
          "minGroups": 3,
          "explanation": "Bile emulsifies fat, pancreatic lipase breaks it into fatty acids/monoglycerides, these form micelles absorbed into the intestinal wall, reformed into triglycerides, packaged as chylomicrons, transported via lymph into the blood."
        },
        {
          "type": "theory",
          "prompt": "Explain the difference between HDL and LDL cholesterol, and how a lipid profile test uses this information.",
          "keywordGroups": [
            [
              "hdl",
              "good",
              "remove",
              "liver"
            ],
            [
              "ldl",
              "bad",
              "plaque",
              "artery"
            ],
            [
              "lipid profile",
              "blood test",
              "cardiovascular risk"
            ]
          ],
          "minGroups": 2,
          "explanation": "HDL removes excess cholesterol from tissues (protective); LDL delivers cholesterol to tissues and, in excess, causes plaque (risk); a lipid profile measures both plus triglycerides to assess cardiovascular risk."
        },
        {
          "type": "theory",
          "prompt": "Discuss why fat is well suited to long-duration, low-to-moderate-intensity exercise but not short, high-intensity efforts.",
          "keywordGroups": [
            [
              "slow",
              "ramp up",
              "oxidation"
            ],
            [
              "spare glycogen",
              "delay fatigue"
            ],
            [
              "long duration",
              "low intensity",
              "marathon"
            ],
            [
              "short",
              "high intensity",
              "phosphagen",
              "glycolytic"
            ]
          ],
          "minGroups": 3,
          "explanation": "Fat oxidation is slower to ramp up than carbohydrate metabolism, but sparing glycogen and delaying fatigue makes it ideal for long, lower-intensity effort; short, high-intensity efforts rely on the faster phosphagen/glycolytic systems instead."
        },
        {
          "type": "theory",
          "prompt": "Explain the difference between saturated, unsaturated, and trans fats, including their health effects.",
          "keywordGroups": [
            [
              "saturated",
              "solid",
              "raise cholesterol"
            ],
            [
              "unsaturated",
              "liquid",
              "heart health"
            ],
            [
              "trans",
              "hydrogenat",
              "heart disease",
              "diabetes"
            ]
          ],
          "minGroups": 3,
          "explanation": "Saturated fats (solid, no double bonds) raise cholesterol; unsaturated fats (liquid, double bonds) improve heart health; trans fats (hydrogenated) raise heart disease, stroke, and diabetes risk."
        }
      ]
    }
  },
  {
    "id": "sn-vitamins",
    "courseId": "sportnutrition",
    "order": 6,
    "title": "Vitamins & Antioxidants",
    "tagline": "Needed in tiny amounts, felt in big ways when missing",
    "icon": "sn_vitamins",
    "lesson": {
      "intro": [
        "Vitamins are organic compounds required in small amounts for normal growth, metabolism, immunity, and body function. Unlike carbohydrates, protein, and fat, vitamins do not provide energy themselves, instead they regulate the processes that let the body use energy properly. This is the core difference between a vitamin and a macronutrient: vitamins are needed in small amounts (measured in milligrams or micrograms) and don't provide energy, while macronutrients are needed in large amounts (measured in grams) and do provide energy or build tissue directly.",
        "Vitamins are classified into two broad groups based on solubility: fat-soluble vitamins (A, D, E, and K), which dissolve in and are stored alongside dietary fat, and water-soluble vitamins (vitamin C and the B-complex), which dissolve in water and are generally not stored in large amounts, meaning they need more regular replenishment. In total, the body relies on 13 essential vitamins."
      ],
      "sections": [
        {
          "heading": "The fat-soluble vitamins: A, D, E, K",
          "body": [
            "Vitamin A (retinol) supports eye health specifically and prevents night blindness; its deficiency causes blindness, and good dietary sources include mangoes and pumpkin, both rich in beta-carotene, which the body converts into vitamin A. Vitamin D increases calcium absorption, strengthens bones and teeth, supports immune function, and promotes muscle function; it is produced in the skin through exposure to UVB rays from sunlight, and deficiency has been linked to muscle cramps.",
            "Vitamin E deficiency causes muscle weakness, ataxia (loss of coordinated muscle movement), hemolytic anemia, and peripheral neuropathy. Vitamin K is essential for blood clotting, without it, even minor injuries can bleed excessively."
          ]
        },
        {
          "heading": "Vitamin C and the B-complex",
          "body": [
            "Vitamin C supports collagen synthesis and blood clotting, and acts as an antioxidant. Recommended daily intake is about 90mg for adult men and 75mg for adult women, with smokers advised to take an extra 35mg per day, since smoking increases the body's vitamin C turnover.",
            "The B-complex vitamins work as a group, acting as co-enzymes that help convert macronutrients into usable ATP through metabolic reactions, essentially helping the body's other fuels get turned into actual usable energy. Within this group, individual vitamins have specific signature roles: B3 (niacin) supports energy metabolism, healthy skin, and nervous system function. B7 (biotin) deficiency specifically causes hair loss. B9 (folate) supports DNA synthesis, cell division, and red blood cell formation, and is especially essential during pregnancy. Deficiencies in B12, B9, and B6 are all linked to anemia (a deficiency of healthy red blood cells). Good dietary sources of the B-complex vitamins as a group include liver, meat, fish, eggs, milk, beans, nuts, and fortified cereals."
          ]
        },
        {
          "heading": "Antioxidants and oxidative stress in exercise",
          "body": [
            "Intense physical training generates reactive oxygen species, unstable molecules produced as a byproduct of the elevated metabolic activity that hard exercise demands. Left unchecked, these reactive oxygen species cause oxidative stress, a state where cellular damage from these molecules outpaces the body's ability to neutralize them, contributing to muscle fatigue and slower recovery.",
            "Vitamin C and vitamin E both act as antioxidants in this context, helping neutralize reactive oxygen species and limit the resulting cellular damage. Interestingly, a certain amount of exercise-induced oxidative stress is not purely harmful, it's part of what signals the body to adapt and get fitter, so the goal for athletes is balancing antioxidant intake to support recovery without over-suppressing the normal training adaptation signal entirely."
          ]
        }
      ],
      "examples": [
        {
          "title": "Mangoes and pumpkin for vitamin A",
          "text": "Both rich in beta-carotene, which the body converts into vitamin A, supporting eye health and helping prevent night blindness."
        },
        {
          "title": "Sunlight and vitamin D",
          "text": "Vitamin D is produced in the skin through UVB ray exposure from sunlight, linking time outdoors directly to bone strength, immune support, and muscle function."
        },
        {
          "title": "B-complex as metabolic co-enzymes",
          "text": "Rather than providing energy directly, B-complex vitamins act as co-enzymes helping convert carbohydrates, fats, and protein into usable ATP, an invisible but essential role in every training session."
        }
      ],
      "whyMatters": [
        "Vitamin deficiencies rarely announce themselves clearly, hair loss, anemia, muscle cramps, and poor wound healing can all have several causes, but recognizing their specific vitamin links gives athletes and coaches a genuinely useful diagnostic starting point when performance or recovery unexpectedly declines. Antioxidant vitamins also matter directly for exercise recovery, tying this station back to the fatigue and recovery themes introduced in the intro station."
      ],
      "glossary": [
        {
          "term": "Fat-soluble vitamin",
          "def": "A vitamin (A, D, E, or K) that dissolves in and is stored alongside dietary fat."
        },
        {
          "term": "Water-soluble vitamin",
          "def": "A vitamin (C or the B-complex) that dissolves in water and is generally not stored in large amounts."
        },
        {
          "term": "Retinol (vitamin A)",
          "def": "The active form of vitamin A, supporting eye health and preventing night blindness."
        },
        {
          "term": "Niacin (vitamin B3)",
          "def": "A B-complex vitamin supporting energy metabolism, healthy skin, and nervous system function."
        },
        {
          "term": "Biotin (vitamin B7)",
          "def": "A B-complex vitamin whose deficiency specifically causes hair loss."
        },
        {
          "term": "Folate (vitamin B9)",
          "def": "A B-complex vitamin supporting DNA synthesis, cell division, and red blood cell formation."
        },
        {
          "term": "Reactive oxygen species",
          "def": "Unstable molecules produced as a byproduct of intense metabolic activity, capable of causing cellular damage if not neutralized."
        },
        {
          "term": "Oxidative stress",
          "def": "A state where cellular damage from reactive oxygen species outpaces the body's ability to neutralize them."
        },
        {
          "term": "Antioxidant",
          "def": "A compound, such as vitamin C or E, that helps neutralize reactive oxygen species and limit cellular damage."
        }
      ]
    },
    "parts": [
      {
        "id": "intro",
        "title": "Introduction",
        "cards": [
          {
            "front": "Introduction (1/2)",
            "back": "Vitamins are organic compounds required in small amounts for normal growth, metabolism, immunity, and body function. Unlike carbohydrates, protein, and fat, vitamins do not provide energy themselves, instead they regulate the processes that let the body use energy properly. This is the core difference between a vitamin and a macronutrient: vitamins are needed in small amounts (measured in milligrams or micrograms) and don't provide energy, while macronutrients are needed in large amounts (measured in grams) and do provide energy or build tissue directly."
          },
          {
            "front": "Introduction (2/2)",
            "back": "Vitamins are classified into two broad groups based on solubility: fat-soluble vitamins (A, D, E, and K), which dissolve in and are stored alongside dietary fat, and water-soluble vitamins (vitamin C and the B-complex), which dissolve in water and are generally not stored in large amounts, meaning they need more regular replenishment. In total, the body relies on 13 essential vitamins."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "What is the key difference between vitamins and macronutrients?",
              "options": [
                "Vitamins are needed in small amounts and don't provide energy; macronutrients are needed in large amounts and provide energy",
                "Vitamins provide more energy than macronutrients",
                "There is no difference",
                "Macronutrients are measured in micrograms"
              ],
              "answerIndex": 0,
              "explanation": "Vitamins are needed in small amounts (mg/µg) and don't provide energy; macronutrients are needed in large amounts (grams) and provide energy."
            },
            {
              "type": "short",
              "prompt": "How many essential vitamins does the body rely on in total?",
              "keywords": [
                "13",
                "thirteen"
              ],
              "explanation": "13 essential vitamins."
            }
          ]
        }
      },
      {
        "id": "sec0",
        "title": "The fat-soluble vitamins: A, D, E, K",
        "cards": [
          {
            "front": "The fat-soluble vitamins: A, D, E, K (1/2)",
            "back": "Vitamin A (retinol) supports eye health specifically and prevents night blindness; its deficiency causes blindness, and good dietary sources include mangoes and pumpkin, both rich in beta-carotene, which the body converts into vitamin A. Vitamin D increases calcium absorption, strengthens bones and teeth, supports immune function, and promotes muscle function; it is produced in the skin through exposure to UVB rays from sunlight, and deficiency has been linked to muscle cramps."
          },
          {
            "front": "The fat-soluble vitamins: A, D, E, K (2/2)",
            "back": "Vitamin E deficiency causes muscle weakness, ataxia (loss of coordinated muscle movement), hemolytic anemia, and peripheral neuropathy. Vitamin K is essential for blood clotting, without it, even minor injuries can bleed excessively."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "Which vitamin's deficiency causes night blindness, and what is it also called?",
              "options": [
                "Vitamin A (retinol)",
                "Vitamin D",
                "Vitamin E",
                "Vitamin K"
              ],
              "answerIndex": 0,
              "explanation": "Vitamin A (retinol) deficiency causes night blindness (and can progress to blindness)."
            },
            {
              "type": "short",
              "prompt": "How is vitamin D produced in the body, and what has its deficiency been linked to?",
              "keywords": [
                "skin",
                "uvb",
                "sunlight",
                "cramp"
              ],
              "explanation": "Produced in the skin via UVB ray exposure from sunlight; deficiency has been linked to muscle cramps."
            }
          ]
        }
      },
      {
        "id": "sec1",
        "title": "Vitamin C and the B-complex",
        "cards": [
          {
            "front": "Vitamin C and the B-complex (1/2)",
            "back": "Vitamin C supports collagen synthesis and blood clotting, and acts as an antioxidant. Recommended daily intake is about 90mg for adult men and 75mg for adult women, with smokers advised to take an extra 35mg per day, since smoking increases the body's vitamin C turnover."
          },
          {
            "front": "Vitamin C and the B-complex (2/2)",
            "back": "The B-complex vitamins work as a group, acting as co-enzymes that help convert macronutrients into usable ATP through metabolic reactions, essentially helping the body's other fuels get turned into actual usable energy. Within this group, individual vitamins have specific signature roles: B3 (niacin) supports energy metabolism, healthy skin, and nervous system function. B7 (biotin) deficiency specifically causes hair loss. B9 (folate) supports DNA synthesis, cell division, and red blood cell formation, and is especially essential during pregnancy. Deficiencies in B12, B9, and B6 are all linked to anemia (a deficiency of healthy red blood cells). Good dietary sources of the B-complex vitamins as a group include liver, meat, fish, eggs, milk, beans, nuts, and fortified cereals."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "What do B-complex vitamins do, as a group?",
              "options": [
                "Act as co-enzymes converting macronutrients into usable ATP",
                "Provide direct energy on their own",
                "Only support eye health",
                "Only support blood clotting"
              ],
              "answerIndex": 0,
              "explanation": "B-complex vitamins act as co-enzymes helping convert macronutrients into usable ATP."
            },
            {
              "type": "short",
              "prompt": "Which vitamin deficiency specifically causes hair loss?",
              "keywords": [
                "b7",
                "biotin"
              ],
              "explanation": "Vitamin B7 (biotin) deficiency specifically causes hair loss."
            }
          ]
        }
      },
      {
        "id": "sec2",
        "title": "Antioxidants and oxidative stress in exercise",
        "cards": [
          {
            "front": "Antioxidants and oxidative stress in exercise (1/2)",
            "back": "Intense physical training generates reactive oxygen species, unstable molecules produced as a byproduct of the elevated metabolic activity that hard exercise demands. Left unchecked, these reactive oxygen species cause oxidative stress, a state where cellular damage from these molecules outpaces the body's ability to neutralize them, contributing to muscle fatigue and slower recovery."
          },
          {
            "front": "Antioxidants and oxidative stress in exercise (2/2)",
            "back": "Vitamin C and vitamin E both act as antioxidants in this context, helping neutralize reactive oxygen species and limit the resulting cellular damage. Interestingly, a certain amount of exercise-induced oxidative stress is not purely harmful, it's part of what signals the body to adapt and get fitter, so the goal for athletes is balancing antioxidant intake to support recovery without over-suppressing the normal training adaptation signal entirely."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "What are reactive oxygen species?",
              "options": [
                "Unstable molecules produced as a byproduct of intense metabolic activity",
                "A type of vitamin",
                "A type of protein",
                "A digestive enzyme"
              ],
              "answerIndex": 0,
              "explanation": "Reactive oxygen species are unstable molecules produced as a byproduct of the elevated metabolic activity of hard exercise."
            },
            {
              "type": "short",
              "prompt": "Why is some exercise-induced oxidative stress not purely harmful?",
              "keywords": [
                "signal",
                "adapt",
                "fitter"
              ],
              "explanation": "It's part of what signals the body to adapt and get fitter."
            }
          ]
        }
      },
      {
        "id": "examples",
        "title": "Real-World Examples",
        "cards": [
          {
            "front": "Mangoes and pumpkin for vitamin A",
            "back": "Both rich in beta-carotene, which the body converts into vitamin A, supporting eye health and helping prevent night blindness."
          },
          {
            "front": "Sunlight and vitamin D",
            "back": "Vitamin D is produced in the skin through UVB ray exposure from sunlight, linking time outdoors directly to bone strength, immune support, and muscle function."
          },
          {
            "front": "B-complex as metabolic co-enzymes",
            "back": "Rather than providing energy directly, B-complex vitamins act as co-enzymes helping convert carbohydrates, fats, and protein into usable ATP, an invisible but essential role in every training session."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "What are mangoes and pumpkin good sources of, and why?",
              "options": [
                "Vitamin A, via beta-carotene",
                "Vitamin C, via citric acid",
                "Vitamin D, via UVB",
                "Vitamin K, via chlorophyll"
              ],
              "answerIndex": 0,
              "explanation": "Both are rich in beta-carotene, which the body converts into vitamin A."
            },
            {
              "type": "short",
              "prompt": "Name two food sources of B-complex vitamins as a group.",
              "keywords": [
                "liver",
                "meat",
                "fish",
                "egg",
                "milk",
                "bean",
                "nut",
                "cereal"
              ],
              "explanation": "Liver, meat, fish, eggs, milk, beans, nuts, and fortified cereals."
            }
          ]
        }
      },
      {
        "id": "wrapup",
        "title": "Why It Matters & Key Terms",
        "cards": [
          {
            "front": "Why This Matters",
            "back": "Vitamin deficiencies rarely announce themselves clearly, hair loss, anemia, muscle cramps, and poor wound healing can all have several causes, but recognizing their specific vitamin links gives athletes and coaches a genuinely useful diagnostic starting point when performance or recovery unexpectedly declines. Antioxidant vitamins also matter directly for exercise recovery, tying this station back to the fatigue and recovery themes introduced in the intro station."
          },
          {
            "front": "Key Term: Fat-soluble vitamin",
            "back": "A vitamin (A, D, E, or K) that dissolves in and is stored alongside dietary fat."
          },
          {
            "front": "Key Term: Water-soluble vitamin",
            "back": "A vitamin (C or the B-complex) that dissolves in water and is generally not stored in large amounts."
          },
          {
            "front": "Key Term: Retinol (vitamin A)",
            "back": "The active form of vitamin A, supporting eye health and preventing night blindness."
          },
          {
            "front": "Key Term: Niacin (vitamin B3)",
            "back": "A B-complex vitamin supporting energy metabolism, healthy skin, and nervous system function."
          },
          {
            "front": "Key Term: Biotin (vitamin B7)",
            "back": "A B-complex vitamin whose deficiency specifically causes hair loss."
          },
          {
            "front": "Key Term: Folate (vitamin B9)",
            "back": "A B-complex vitamin supporting DNA synthesis, cell division, and red blood cell formation."
          },
          {
            "front": "Key Term: Reactive oxygen species",
            "back": "Unstable molecules produced as a byproduct of intense metabolic activity, capable of causing cellular damage if not neutralized."
          },
          {
            "front": "Key Term: Oxidative stress",
            "back": "A state where cellular damage from reactive oxygen species outpaces the body's ability to neutralize them."
          },
          {
            "front": "Key Term: Antioxidant",
            "back": "A compound, such as vitamin C or E, that helps neutralize reactive oxygen species and limit cellular damage."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "Why is recognizing specific vitamin-deficiency links useful for athletes and coaches?",
              "options": [
                "It gives a genuine diagnostic starting point when performance or recovery unexpectedly declines",
                "It has no practical use",
                "Only doctors can use this information",
                "Vitamin deficiencies never affect athletes"
              ],
              "answerIndex": 0,
              "explanation": "Recognizing specific links (hair loss, anemia, cramps) gives a useful diagnostic starting point for unexplained performance or recovery issues."
            },
            {
              "type": "short",
              "prompt": "Deficiencies in which three B-vitamins are all linked to anemia?",
              "keywords": [
                "b12",
                "b9",
                "b6"
              ],
              "explanation": "B12, B9 (folate), and B6."
            }
          ]
        }
      }
    ],
    "finalExam": {
      "mcq": [
        {
          "type": "mcq",
          "prompt": "What is the key difference between a vitamin and a macronutrient?",
          "options": [
            "Vitamins are needed in small amounts and don't provide energy; macronutrients are needed in large amounts and do provide energy",
            "Vitamins provide more energy than macronutrients",
            "There is no real difference between them",
            "Macronutrients are only needed by athletes"
          ],
          "answerIndex": 0,
          "explanation": "Vitamins are needed in small amounts (mg/µg) and regulate body function without providing energy; macronutrients are needed in large amounts (grams) and provide energy or build tissue."
        },
        {
          "type": "mcq",
          "prompt": "Which vitamin deficiency specifically causes hair loss?",
          "options": [
            "Vitamin B7 (biotin)",
            "Vitamin A",
            "Vitamin K",
            "Vitamin B3 (niacin)"
          ],
          "answerIndex": 0,
          "explanation": "Vitamin B7 (biotin) deficiency specifically causes hair loss."
        },
        {
          "type": "mcq",
          "prompt": "How is vitamin D produced in the body?",
          "options": [
            "In the skin, through exposure to UVB rays from sunlight",
            "Only through dietary intake",
            "In the liver, from cholesterol alone",
            "It cannot be produced by the body at all"
          ],
          "answerIndex": 0,
          "explanation": "Vitamin D is produced in the skin through exposure to UVB rays from sunlight."
        },
        {
          "type": "mcq",
          "prompt": "What role do vitamin C and vitamin E play during intense exercise?",
          "options": [
            "They act as antioxidants, neutralizing reactive oxygen species",
            "They directly provide energy for muscle contraction",
            "They have no role during exercise",
            "They only matter for bone health"
          ],
          "answerIndex": 0,
          "explanation": "Vitamin C and E act as antioxidants, helping neutralize reactive oxygen species generated by intense training."
        },
        {
          "type": "mcq",
          "prompt": "Deficiencies in which vitamins are all linked to anemia?",
          "options": [
            "B12, B9, and B6",
            "A, D, and E",
            "K, C, and B7",
            "Only vitamin C"
          ],
          "answerIndex": 0,
          "explanation": "Deficiencies in B12, B9 (folate), and B6 are all linked to anemia."
        },
        {
          "type": "short",
          "prompt": "What is vitamin K essential for, and what happens without it?",
          "keywords": [
            "blood clotting",
            "bleed",
            "clot"
          ],
          "explanation": "Vitamin K is essential for blood clotting; without it, even minor injuries can bleed excessively."
        },
        {
          "type": "short",
          "prompt": "Explain why some exercise-induced oxidative stress isn't purely harmful.",
          "keywords": [
            "adapt",
            "signal",
            "training",
            "fitter"
          ],
          "explanation": "A certain amount of oxidative stress signals the body to adapt and get fitter, so antioxidant intake needs to be balanced rather than maximized."
        },
        {
          "type": "short",
          "prompt": "Name the recommended daily vitamin C intake for adult men, adult women, and smokers.",
          "keywords": [
            "90",
            "75",
            "35"
          ],
          "explanation": "About 90mg/day for adult men, 75mg/day for adult women, with smokers advised an extra 35mg/day."
        }
      ],
      "theory": [
        {
          "type": "theory",
          "prompt": "Explain the difference between fat-soluble and water-soluble vitamins, naming which vitamins fall into each group.",
          "keywordGroups": [
            [
              "fat-soluble",
              "a",
              "d",
              "e",
              "k"
            ],
            [
              "water-soluble",
              "c",
              "b-complex"
            ],
            [
              "stored",
              "not stored"
            ]
          ],
          "minGroups": 2,
          "explanation": "Fat-soluble vitamins (A, D, E, K) dissolve in and are stored with fat; water-soluble vitamins (C, B-complex) dissolve in water and aren't stored in large amounts."
        },
        {
          "type": "theory",
          "prompt": "Discuss the role of antioxidant vitamins in exercise recovery, and explain why athletes shouldn't try to eliminate oxidative stress entirely.",
          "keywordGroups": [
            [
              "vitamin c",
              "vitamin e",
              "antioxidant"
            ],
            [
              "reactive oxygen species",
              "neutraliz"
            ],
            [
              "adapt",
              "signal",
              "fitter"
            ],
            [
              "balance"
            ]
          ],
          "minGroups": 3,
          "explanation": "Vitamin C and E neutralize reactive oxygen species from intense training, but some oxidative stress signals useful training adaptation, so the goal is balance, not elimination."
        },
        {
          "type": "theory",
          "prompt": "Name at least four vitamins covered in this lesson, their deficiency effects, and one dietary source for each.",
          "keywordGroups": [
            [
              "a",
              "night blindness",
              "mango",
              "pumpkin"
            ],
            [
              "d",
              "cramp",
              "sunlight"
            ],
            [
              "b7",
              "hair loss"
            ],
            [
              "b12",
              "b9",
              "b6",
              "anemia"
            ]
          ],
          "minGroups": 3,
          "explanation": "Vitamin A (night blindness, mango/pumpkin), D (cramps, sunlight), B7 (hair loss), B12/B9/B6 (anemia) are all covered with sources and deficiency effects."
        }
      ]
    }
  },
  {
    "id": "sn-minerals",
    "courseId": "sportnutrition",
    "order": 7,
    "title": "Minerals & Hydration",
    "tagline": "Why most cramps are actually a water problem",
    "icon": "sn_minerals",
    "lesson": {
      "intro": [
        "Electrolytes, sodium (Na+), potassium (K+), and chloride (Cl-), are minerals that carry an electric charge in the body's fluids, and they are central to hydration and muscle function alike. A useful starting fact worth remembering before anything else in this station: most cramps in sport are actually due to loss of water, not simply loss of salt, even though electrolyte loss plays a real supporting role."
      ],
      "sections": [
        {
          "heading": "Why hydration matters in sport",
          "body": [
            "Hydration matters in sport for three connected reasons. First, it helps regulate body temperature, sweating is the body's primary cooling mechanism, and it depends on having enough fluid to spare. Second, it helps maintain blood volume, which keeps the cardiovascular system working efficiently to deliver oxygen and nutrients to working muscle. Third, adequate hydration helps prevent cramps, which occur more readily when fluid loss also reduces the body's electrolyte concentration."
          ]
        },
        {
          "heading": "Sodium and potassium: the muscle contraction pair",
          "body": [
            "Sodium (Na+) helps maintain the body's internal environment (the milieu intérieur) and helps preserve blood volume. It supports nerve impulse transmission, helps in muscle contraction, helps maintain blood pressure, and helps prevent dehydration. Good sources of sodium include table salt and sports drinks.",
            "Potassium (K+) works together with sodium to bring about both the contraction and relaxation of muscles. It helps in nerve function, helps maintain cellular fluid balance, and supports heart function. Good sources of potassium include bananas and vegetables. Sodium and potassium function as a genuine pair here, sodium driving one half of the muscle contraction cycle and potassium the other, which is part of why electrolyte drinks typically contain both rather than just one."
          ]
        },
        {
          "heading": "Calcium and magnesium: strength and relaxation",
          "body": [
            "Calcium (Ca2+) supports bone strength and is directly involved in muscle contraction, working through the same actin and myosin proteins covered in the protein station. It also helps in communication between nerves and helps in blood clotting. Low calcium levels are specifically linked to poor performance in athletes. Good sources of calcium include milk, cheese, and yoghurt.",
            "Magnesium (Mg2+) helps in energy production, supports muscle relaxation, assists protein synthesis, and helps activate enzymes throughout the body. A good source of magnesium is almond nuts. Between calcium and magnesium, there's a useful pattern worth noticing: calcium is heavily involved in triggering muscle contraction, while magnesium is heavily involved in muscle relaxation afterward, both minerals are needed for the full contract-relax cycle to work properly."
          ]
        },
        {
          "heading": "Chloride and electrolyte balance overall",
          "body": [
            "Chloride (Cl-) helps maintain the acid-base balance of the cell, aids in the digestion of macronutrients, and helps regulate body fluids more broadly. Taken together, the overall function of these electrolytes is to reduce cramps, tying this whole station back to the opening point that most sport-related cramping traces back to a fluid and electrolyte problem, not a single missing mineral.",
            "Two related clinical terms worth knowing are hyponatremia (abnormally low blood sodium) and hypernatremia (abnormally high blood sodium), both of which can occur in athletes, hyponatremia specifically can result from drinking excessive plain water during very long endurance events without adequately replacing sodium. Sodium levels in the body are measured through a blood serum sodium test."
          ]
        }
      ],
      "examples": [
        {
          "title": "Sodium and potassium as a working pair",
          "text": "Sodium and potassium work together to bring about both the contraction and relaxation of muscles, which is why electrolyte replacement drinks typically include both minerals rather than just one."
        },
        {
          "title": "Calcium's link to athletic performance",
          "text": "Low calcium levels are specifically linked to poor performance in athletes, connecting bone-mineral status directly to on-field output, not just long-term bone health."
        },
        {
          "title": "Hyponatremia in endurance events",
          "text": "Drinking excessive plain water during very long endurance events, without adequately replacing sodium, can dilute blood sodium levels to dangerously low levels, a real risk distinct from simple dehydration."
        }
      ],
      "whyMatters": [
        "Cramping is one of the most common in-competition problems athletes face, and the reflexive response is often \"eat more salt\" or \"drink more water,\" when the real answer usually depends on which specific mineral and fluid balance is off. Understanding each electrolyte's distinct role, and where to source it, turns a vague cramping problem into a specific, correctable one."
      ],
      "glossary": [
        {
          "term": "Electrolyte",
          "def": "A mineral (such as sodium, potassium, or chloride) that carries an electric charge in the body's fluids."
        },
        {
          "term": "Milieu intérieur",
          "def": "The body's stable internal fluid environment, which sodium helps maintain."
        },
        {
          "term": "Hyponatremia",
          "def": "An abnormally low level of sodium in the blood, which can result from excessive plain water intake during prolonged endurance events."
        },
        {
          "term": "Hypernatremia",
          "def": "An abnormally high level of sodium in the blood."
        }
      ]
    },
    "parts": [
      {
        "id": "intro",
        "title": "Introduction",
        "cards": [
          {
            "front": "Introduction",
            "back": "Electrolytes, sodium (Na+), potassium (K+), and chloride (Cl-), are minerals that carry an electric charge in the body's fluids, and they are central to hydration and muscle function alike. A useful starting fact worth remembering before anything else in this station: most cramps in sport are actually due to loss of water, not simply loss of salt, even though electrolyte loss plays a real supporting role."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "What are electrolytes, per the lesson?",
              "options": [
                "Minerals that carry an electric charge in body fluids",
                "Vitamins that provide energy",
                "A type of protein",
                "A type of carbohydrate"
              ],
              "answerIndex": 0,
              "explanation": "Electrolytes are minerals carrying an electric charge in the body's fluids."
            },
            {
              "type": "short",
              "prompt": "What is most sport cramping actually due to, per the lesson?",
              "keywords": [
                "water",
                "loss"
              ],
              "explanation": "Loss of water, not simply loss of salt."
            }
          ]
        }
      },
      {
        "id": "sec0",
        "title": "Why hydration matters in sport",
        "cards": [
          {
            "front": "Why hydration matters in sport",
            "back": "Hydration matters in sport for three connected reasons. First, it helps regulate body temperature, sweating is the body's primary cooling mechanism, and it depends on having enough fluid to spare. Second, it helps maintain blood volume, which keeps the cardiovascular system working efficiently to deliver oxygen and nutrients to working muscle. Third, adequate hydration helps prevent cramps, which occur more readily when fluid loss also reduces the body's electrolyte concentration."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "What are the three reasons hydration matters in sport?",
              "options": [
                "Regulating body temperature, maintaining blood volume, preventing cramps",
                "Building bone density, improving eyesight, boosting mood",
                "Only preventing thirst",
                "Only cooling the skin"
              ],
              "answerIndex": 0,
              "explanation": "Regulating body temperature, maintaining blood volume, and preventing cramps."
            },
            {
              "type": "short",
              "prompt": "What is the body's primary cooling mechanism, and what does it depend on?",
              "keywords": [
                "sweat",
                "fluid"
              ],
              "explanation": "Sweating is the primary cooling mechanism, and it depends on having enough fluid to spare."
            }
          ]
        }
      },
      {
        "id": "sec1",
        "title": "Sodium and potassium: the muscle contraction pair",
        "cards": [
          {
            "front": "Sodium and potassium: the muscle contraction pair (1/2)",
            "back": "Sodium (Na+) helps maintain the body's internal environment (the milieu intérieur) and helps preserve blood volume. It supports nerve impulse transmission, helps in muscle contraction, helps maintain blood pressure, and helps prevent dehydration. Good sources of sodium include table salt and sports drinks."
          },
          {
            "front": "Sodium and potassium: the muscle contraction pair (2/2)",
            "back": "Potassium (K+) works together with sodium to bring about both the contraction and relaxation of muscles. It helps in nerve function, helps maintain cellular fluid balance, and supports heart function. Good sources of potassium include bananas and vegetables. Sodium and potassium function as a genuine pair here, sodium driving one half of the muscle contraction cycle and potassium the other, which is part of why electrolyte drinks typically contain both rather than just one."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "What do sodium and potassium do together?",
              "options": [
                "Bring about both contraction and relaxation of muscles",
                "Only affect bone density",
                "Only affect vision",
                "Have no relationship to each other"
              ],
              "answerIndex": 0,
              "explanation": "Sodium and potassium work together to bring about both contraction and relaxation of muscles."
            },
            {
              "type": "short",
              "prompt": "Name two good sources of sodium and two good sources of potassium.",
              "keywords": [
                "salt",
                "sport drink",
                "banana",
                "vegetable"
              ],
              "explanation": "Sodium: table salt, sports drinks. Potassium: bananas, vegetables."
            }
          ]
        }
      },
      {
        "id": "sec2",
        "title": "Calcium and magnesium: strength and relaxation",
        "cards": [
          {
            "front": "Calcium and magnesium: strength and relaxation (1/2)",
            "back": "Calcium (Ca2+) supports bone strength and is directly involved in muscle contraction, working through the same actin and myosin proteins covered in the protein station. It also helps in communication between nerves and helps in blood clotting. Low calcium levels are specifically linked to poor performance in athletes. Good sources of calcium include milk, cheese, and yoghurt."
          },
          {
            "front": "Calcium and magnesium: strength and relaxation (2/2)",
            "back": "Magnesium (Mg2+) helps in energy production, supports muscle relaxation, assists protein synthesis, and helps activate enzymes throughout the body. A good source of magnesium is almond nuts. Between calcium and magnesium, there's a useful pattern worth noticing: calcium is heavily involved in triggering muscle contraction, while magnesium is heavily involved in muscle relaxation afterward, both minerals are needed for the full contract-relax cycle to work properly."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "What is calcium's link to athletic performance?",
              "options": [
                "Low calcium is linked to poor performance in athletes",
                "Calcium has no effect on performance",
                "Excess calcium always improves speed",
                "Calcium only matters after age 50"
              ],
              "answerIndex": 0,
              "explanation": "Low calcium levels are specifically linked to poor performance in athletes."
            },
            {
              "type": "short",
              "prompt": "What does magnesium help with, and what's a good source?",
              "keywords": [
                "energy",
                "relax",
                "almond"
              ],
              "explanation": "Energy production, muscle relaxation, protein synthesis, enzyme activation; almonds are a good source."
            }
          ]
        }
      },
      {
        "id": "sec3",
        "title": "Chloride and electrolyte balance overall",
        "cards": [
          {
            "front": "Chloride and electrolyte balance overall (1/2)",
            "back": "Chloride (Cl-) helps maintain the acid-base balance of the cell, aids in the digestion of macronutrients, and helps regulate body fluids more broadly. Taken together, the overall function of these electrolytes is to reduce cramps, tying this whole station back to the opening point that most sport-related cramping traces back to a fluid and electrolyte problem, not a single missing mineral."
          },
          {
            "front": "Chloride and electrolyte balance overall (2/2)",
            "back": "Two related clinical terms worth knowing are hyponatremia (abnormally low blood sodium) and hypernatremia (abnormally high blood sodium), both of which can occur in athletes, hyponatremia specifically can result from drinking excessive plain water during very long endurance events without adequately replacing sodium. Sodium levels in the body are measured through a blood serum sodium test."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "What does chloride help maintain in the body?",
              "options": [
                "Acid-base balance and fluid regulation",
                "Bone density only",
                "Vision only",
                "Hair growth"
              ],
              "answerIndex": 0,
              "explanation": "Chloride helps maintain acid-base balance of cells and helps regulate body fluids."
            },
            {
              "type": "short",
              "prompt": "What is hyponatremia, and what can cause it in endurance athletes?",
              "keywords": [
                "low sodium",
                "excessive water"
              ],
              "explanation": "Abnormally low blood sodium, which can result from drinking excessive plain water during long endurance events without replacing sodium."
            }
          ]
        }
      },
      {
        "id": "examples",
        "title": "Real-World Examples",
        "cards": [
          {
            "front": "Sodium and potassium as a working pair",
            "back": "Sodium and potassium work together to bring about both the contraction and relaxation of muscles, which is why electrolyte replacement drinks typically include both minerals rather than just one."
          },
          {
            "front": "Calcium's link to athletic performance",
            "back": "Low calcium levels are specifically linked to poor performance in athletes, connecting bone-mineral status directly to on-field output, not just long-term bone health."
          },
          {
            "front": "Hyponatremia in endurance events",
            "back": "Drinking excessive plain water during very long endurance events, without adequately replacing sodium, can dilute blood sodium levels to dangerously low levels, a real risk distinct from simple dehydration."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "Which minerals work together as the muscle contraction/relaxation pair?",
              "options": [
                "Sodium and potassium",
                "Calcium and chloride",
                "Magnesium and chloride",
                "Sodium and chloride"
              ],
              "answerIndex": 0,
              "explanation": "Sodium and potassium work together for muscle contraction and relaxation."
            },
            {
              "type": "short",
              "prompt": "What can cause hyponatremia specifically, per the example given?",
              "keywords": [
                "plain water",
                "endurance",
                "sodium"
              ],
              "explanation": "Drinking excessive plain water during very long endurance events without adequately replacing sodium."
            }
          ]
        }
      },
      {
        "id": "wrapup",
        "title": "Why It Matters & Key Terms",
        "cards": [
          {
            "front": "Why This Matters",
            "back": "Cramping is one of the most common in-competition problems athletes face, and the reflexive response is often \"eat more salt\" or \"drink more water,\" when the real answer usually depends on which specific mineral and fluid balance is off. Understanding each electrolyte's distinct role, and where to source it, turns a vague cramping problem into a specific, correctable one."
          },
          {
            "front": "Key Term: Electrolyte",
            "back": "A mineral (such as sodium, potassium, or chloride) that carries an electric charge in the body's fluids."
          },
          {
            "front": "Key Term: Milieu intérieur",
            "back": "The body's stable internal fluid environment, which sodium helps maintain."
          },
          {
            "front": "Key Term: Hyponatremia",
            "back": "An abnormally low level of sodium in the blood, which can result from excessive plain water intake during prolonged endurance events."
          },
          {
            "front": "Key Term: Hypernatremia",
            "back": "An abnormally high level of sodium in the blood."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "Why is understanding each electrolyte's distinct role useful for treating cramps?",
              "options": [
                "It turns a vague cramping problem into a specific, correctable one",
                "Cramps have only one possible cause",
                "Electrolytes have no connection to cramping",
                "Only water intake matters, minerals are irrelevant"
              ],
              "answerIndex": 0,
              "explanation": "Understanding each electrolyte's role turns a vague cramping problem into a specific, correctable one."
            },
            {
              "type": "short",
              "prompt": "How is sodium measured in the body?",
              "keywords": [
                "blood",
                "serum",
                "test"
              ],
              "explanation": "Through a blood serum sodium test."
            }
          ]
        }
      }
    ],
    "finalExam": {
      "mcq": [
        {
          "type": "mcq",
          "prompt": "According to the lesson, most cramps in sport are due to:",
          "options": [
            "Loss of water",
            "Excess protein intake",
            "Too much carbohydrate",
            "Lack of vitamin A"
          ],
          "answerIndex": 0,
          "explanation": "Most cramps in sports are due to loss of water, not simply loss of salt."
        },
        {
          "type": "mcq",
          "prompt": "What are the three reasons hydration matters in sport, per the lesson?",
          "options": [
            "Regulating body temperature, maintaining blood volume, preventing cramps",
            "Building muscle, improving vision, boosting immunity",
            "Increasing bone density, aiding digestion, improving mood",
            "None of these"
          ],
          "answerIndex": 0,
          "explanation": "Hydration regulates body temperature, maintains blood volume, and helps prevent cramps."
        },
        {
          "type": "mcq",
          "prompt": "Which two electrolytes work together to bring about muscle contraction and relaxation?",
          "options": [
            "Sodium and potassium",
            "Calcium and chloride",
            "Magnesium and sodium",
            "Potassium and chloride"
          ],
          "answerIndex": 0,
          "explanation": "Sodium and potassium work together to bring about both contraction and relaxation of muscles."
        },
        {
          "type": "mcq",
          "prompt": "What is calcium's specific link to athletic performance?",
          "options": [
            "Low calcium levels are linked to poor performance in athletes",
            "Excess calcium always improves speed",
            "Calcium has no effect on athletic performance",
            "Calcium only affects bone density, not performance"
          ],
          "answerIndex": 0,
          "explanation": "Low calcium levels are specifically linked to poor performance in athletes."
        },
        {
          "type": "mcq",
          "prompt": "What can cause hyponatremia in endurance athletes?",
          "options": [
            "Drinking excessive plain water during very long events without replacing sodium",
            "Eating too much salt before competition",
            "Taking too much vitamin C",
            "Consuming too much protein"
          ],
          "answerIndex": 0,
          "explanation": "Hyponatremia can result from drinking excessive plain water during very long endurance events without adequately replacing sodium."
        },
        {
          "type": "short",
          "prompt": "Name two good dietary sources of potassium mentioned in the lesson.",
          "keywords": [
            "banana",
            "vegetable"
          ],
          "explanation": "Bananas and vegetables are given as good sources of potassium."
        },
        {
          "type": "short",
          "prompt": "Explain the relationship between calcium and magnesium in the muscle contraction cycle.",
          "keywords": [
            "calcium",
            "contraction",
            "magnesium",
            "relax"
          ],
          "explanation": "Calcium is heavily involved in triggering muscle contraction, while magnesium is heavily involved in muscle relaxation afterward; both are needed for the full cycle."
        },
        {
          "type": "short",
          "prompt": "What is chloride's role in the body, according to the lesson?",
          "keywords": [
            "acid-base",
            "digestion",
            "fluid"
          ],
          "explanation": "Chloride helps maintain acid-base balance in cells, aids digestion of macronutrients, and helps regulate body fluids."
        }
      ],
      "theory": [
        {
          "type": "theory",
          "prompt": "Explain the roles of sodium, potassium, calcium, and magnesium in muscle function, and how they relate to each other.",
          "keywordGroups": [
            [
              "sodium",
              "contraction",
              "nerve"
            ],
            [
              "potassium",
              "relax",
              "pair"
            ],
            [
              "calcium",
              "contraction",
              "actin",
              "myosin"
            ],
            [
              "magnesium",
              "relax",
              "energy"
            ]
          ],
          "minGroups": 3,
          "explanation": "Sodium and potassium work together for contraction/relaxation; calcium triggers contraction via actin/myosin; magnesium supports relaxation and energy production, together completing the full muscle contraction cycle."
        },
        {
          "type": "theory",
          "prompt": "Discuss why hydration matters in sport beyond simply quenching thirst, covering all three reasons given in the lesson.",
          "keywordGroups": [
            [
              "temperature",
              "sweat",
              "cool"
            ],
            [
              "blood volume",
              "cardiovascular"
            ],
            [
              "cramp",
              "electrolyte"
            ]
          ],
          "minGroups": 3,
          "explanation": "Hydration regulates body temperature (via sweating), maintains blood volume (supporting cardiovascular function), and helps prevent cramps linked to electrolyte loss."
        },
        {
          "type": "theory",
          "prompt": "Explain hyponatremia and hypernatremia, what causes each, and why this matters specifically for endurance athletes.",
          "keywordGroups": [
            [
              "hyponatremia",
              "low sodium"
            ],
            [
              "hypernatremia",
              "high sodium"
            ],
            [
              "excessive water",
              "endurance",
              "long event"
            ],
            [
              "sodium replace"
            ]
          ],
          "minGroups": 3,
          "explanation": "Hyponatremia (low blood sodium) can result from drinking excessive plain water during long endurance events without replacing sodium; hypernatremia is the opposite, high blood sodium; both matter especially in prolonged endurance events."
        }
      ]
    }
  },
  {
    "id": "sn-timing",
    "courseId": "sportnutrition",
    "order": 8,
    "title": "Nutrient Timing & Recovery",
    "tagline": "The same meal, at the wrong time, does less for you",
    "icon": "sn_timing",
    "lesson": {
      "intro": [
        "Every macronutrient and micronutrient covered so far in this course has a timing dimension worth knowing on top of the \"what\" and \"how much.\" Nutrient timing is the practice of matching food and fluid intake to the specific phase of exercise, before, during, or after, to get the most physiological benefit out of it. The same total daily nutrient intake, arranged differently across the day, can produce meaningfully different performance and recovery outcomes."
      ],
      "sections": [
        {
          "heading": "Pre-exercise nutrition",
          "body": [
            "A meal eaten roughly two to four hours before sport gives the body enough time to digest while still topping up glycogen stores and providing a steady supply of blood glucose going into the session. A meal combining a healthy fat source with carbohydrate works well in this window, oatmeal with nuts, banana, and peanut butter, or something like white bread, are both reasonable pre-exercise choices, since they supply energy without sitting too heavily in the stomach once activity begins."
          ]
        },
        {
          "heading": "Nutrition during exercise",
          "body": [
            "For exercise lasting beyond roughly an hour, ongoing carbohydrate and fluid intake during the activity itself helps sustain performance that would otherwise decline as glycogen stores are progressively used up. This is precisely the role sports drinks are designed to fill, delivering carbohydrate, fluid, and electrolytes together in a form that's easy to consume without disrupting the activity in progress."
          ]
        },
        {
          "heading": "Post-exercise recovery nutrition",
          "body": [
            "Recovery nutrition has a fairly specific, evidence-based target: 20 to 40 grams of high-quality protein within about two hours after exercise, or roughly 0.25 to 0.4 grams per kilogram of body weight, alongside carbohydrate to replenish glycogen stores. This combination replenishes glycogen, restores fluid and electrolyte balance, and reduces the ongoing muscle protein breakdown that continues if the body is left under-fueled after a hard session.",
            "This single recovery window ties directly back to two earlier stations: the protein target here is the same post-exercise protein recommendation covered in the protein station, and the fluid/electrolyte replacement need here is the same hydration principle covered in the minerals and hydration station. Nutrient timing isn't a separate topic so much as it's the schedule that the other stations' recommendations actually get applied on."
          ]
        },
        {
          "heading": "Why timing changes the outcome",
          "body": [
            "The same 30 grams of protein eaten immediately after a workout versus eaten six hours later doesn't produce an identical physiological result, the muscle is more receptive to using that protein for repair and growth in the hours immediately following resistance exercise, a period sometimes loosely referred to as an anabolic window. The same logic applies to carbohydrate: consumed during or shortly after exercise, it directly supports the activity or the recovery from it; consumed at a randomly unrelated time of day, it still counts toward daily totals but does less to specifically support training adaptation."
          ]
        }
      ],
      "examples": [
        {
          "title": "Oatmeal with nuts, banana, and peanut butter",
          "text": "A practical pre-exercise meal example, combining healthy fat and carbohydrate, timed 2-4 hours before sport to digest fully before activity begins."
        },
        {
          "title": "Sports drinks during prolonged exercise",
          "text": "Deliver carbohydrate, fluid, and electrolytes together during activity lasting beyond about an hour, sustaining performance that would otherwise decline."
        },
        {
          "title": "The post-exercise protein window",
          "text": "20-40g of high-quality protein within roughly two hours after exercise is specifically timed to when muscle tissue is most receptive to using it for repair and growth."
        }
      ],
      "whyMatters": [
        "Nutrient timing is what turns the individual facts from earlier stations, carbohydrate needs, protein targets, hydration needs, into an actual daily plan an athlete can follow. Two athletes eating identical total daily nutrition can have meaningfully different recovery and performance outcomes purely based on when they ate it relative to training."
      ],
      "glossary": [
        {
          "term": "Nutrient timing",
          "def": "The practice of matching food and fluid intake to the specific phase of exercise (before, during, or after) to maximize physiological benefit."
        },
        {
          "term": "Anabolic window",
          "def": "The period immediately following resistance exercise during which muscle tissue is especially receptive to using protein for repair and growth."
        }
      ]
    },
    "parts": [
      {
        "id": "intro",
        "title": "Introduction",
        "cards": [
          {
            "front": "Introduction",
            "back": "Every macronutrient and micronutrient covered so far in this course has a timing dimension worth knowing on top of the \"what\" and \"how much.\" Nutrient timing is the practice of matching food and fluid intake to the specific phase of exercise, before, during, or after, to get the most physiological benefit out of it. The same total daily nutrient intake, arranged differently across the day, can produce meaningfully different performance and recovery outcomes."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "What is nutrient timing?",
              "options": [
                "Matching food/fluid intake to the phase of exercise to maximize benefit",
                "Eating the same thing every day regardless of training",
                "Only relevant to supplement use",
                "A term for meal portion sizes"
              ],
              "answerIndex": 0,
              "explanation": "Nutrient timing matches food and fluid intake to the specific phase of exercise (before, during, after) for maximum benefit."
            },
            {
              "type": "short",
              "prompt": "Can the same total daily nutrients produce different outcomes depending on timing?",
              "keywords": [
                "yes",
                "different",
                "arrange"
              ],
              "explanation": "Yes, the same total daily intake arranged differently across the day can produce meaningfully different performance and recovery outcomes."
            }
          ]
        }
      },
      {
        "id": "sec0",
        "title": "Pre-exercise nutrition",
        "cards": [
          {
            "front": "Pre-exercise nutrition",
            "back": "A meal eaten roughly two to four hours before sport gives the body enough time to digest while still topping up glycogen stores and providing a steady supply of blood glucose going into the session. A meal combining a healthy fat source with carbohydrate works well in this window, oatmeal with nuts, banana, and peanut butter, or something like white bread, are both reasonable pre-exercise choices, since they supply energy without sitting too heavily in the stomach once activity begins."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "What is the recommended pre-exercise meal timing window?",
              "options": [
                "2 to 4 hours before sport",
                "Immediately before",
                "12+ hours before",
                "Timing doesn't matter"
              ],
              "answerIndex": 0,
              "explanation": "A meal 2-4 hours before sport allows digestion time while topping up glycogen and blood glucose."
            },
            {
              "type": "short",
              "prompt": "Give an example of a suitable pre-exercise meal.",
              "keywords": [
                "oatmeal",
                "nut",
                "banana",
                "peanut butter"
              ],
              "explanation": "Oatmeal with nuts, banana, and peanut butter, or white bread."
            }
          ]
        }
      },
      {
        "id": "sec1",
        "title": "Nutrition during exercise",
        "cards": [
          {
            "front": "Nutrition during exercise",
            "back": "For exercise lasting beyond roughly an hour, ongoing carbohydrate and fluid intake during the activity itself helps sustain performance that would otherwise decline as glycogen stores are progressively used up. This is precisely the role sports drinks are designed to fill, delivering carbohydrate, fluid, and electrolytes together in a form that's easy to consume without disrupting the activity in progress."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "For exercise beyond about an hour, what helps sustain performance during the activity?",
              "options": [
                "Ongoing carbohydrate and fluid intake",
                "Complete fasting",
                "Only protein intake",
                "Stopping all intake"
              ],
              "answerIndex": 0,
              "explanation": "Ongoing carbohydrate and fluid intake during exercise helps sustain performance beyond about an hour."
            },
            {
              "type": "short",
              "prompt": "What role do sports drinks play during exercise?",
              "keywords": [
                "carbohydrate",
                "fluid",
                "electrolyte"
              ],
              "explanation": "They deliver carbohydrate, fluid, and electrolytes together in an easy-to-consume form during activity."
            }
          ]
        }
      },
      {
        "id": "sec2",
        "title": "Post-exercise recovery nutrition",
        "cards": [
          {
            "front": "Post-exercise recovery nutrition (1/2)",
            "back": "Recovery nutrition has a fairly specific, evidence-based target: 20 to 40 grams of high-quality protein within about two hours after exercise, or roughly 0.25 to 0.4 grams per kilogram of body weight, alongside carbohydrate to replenish glycogen stores. This combination replenishes glycogen, restores fluid and electrolyte balance, and reduces the ongoing muscle protein breakdown that continues if the body is left under-fueled after a hard session."
          },
          {
            "front": "Post-exercise recovery nutrition (2/2)",
            "back": "This single recovery window ties directly back to two earlier stations: the protein target here is the same post-exercise protein recommendation covered in the protein station, and the fluid/electrolyte replacement need here is the same hydration principle covered in the minerals and hydration station. Nutrient timing isn't a separate topic so much as it's the schedule that the other stations' recommendations actually get applied on."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "What is the recommended post-exercise protein target?",
              "options": [
                "20-40g within about 2 hours after exercise",
                "200g immediately after",
                "No protein needed after exercise",
                "Only the next morning"
              ],
              "answerIndex": 0,
              "explanation": "20-40g of high-quality protein (or ~0.25-0.4g/kg) within about 2 hours after exercise."
            },
            {
              "type": "short",
              "prompt": "What three things does post-exercise recovery nutrition accomplish?",
              "keywords": [
                "glycogen",
                "fluid",
                "electrolyte",
                "muscle breakdown"
              ],
              "explanation": "Replenishes glycogen, restores fluid/electrolyte balance, reduces muscle protein breakdown."
            }
          ]
        }
      },
      {
        "id": "sec3",
        "title": "Why timing changes the outcome",
        "cards": [
          {
            "front": "Why timing changes the outcome",
            "back": "The same 30 grams of protein eaten immediately after a workout versus eaten six hours later doesn't produce an identical physiological result, the muscle is more receptive to using that protein for repair and growth in the hours immediately following resistance exercise, a period sometimes loosely referred to as an anabolic window. The same logic applies to carbohydrate: consumed during or shortly after exercise, it directly supports the activity or the recovery from it; consumed at a randomly unrelated time of day, it still counts toward daily totals but does less to specifically support training adaptation."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "What is the 'anabolic window'?",
              "options": [
                "The period after resistance exercise when muscle is especially receptive to protein for repair/growth",
                "A period when no nutrients are absorbed",
                "A term for the pre-exercise meal window only",
                "A type of supplement"
              ],
              "answerIndex": 0,
              "explanation": "The anabolic window is the period immediately following resistance exercise when muscle is especially receptive to using protein for repair and growth."
            },
            {
              "type": "short",
              "prompt": "Does carbohydrate consumed at a random unrelated time of day support training the same way as carbs consumed during/after exercise?",
              "keywords": [
                "no",
                "less",
                "specific"
              ],
              "explanation": "No, it still counts toward daily totals but does less to specifically support training adaptation."
            }
          ]
        }
      },
      {
        "id": "examples",
        "title": "Real-World Examples",
        "cards": [
          {
            "front": "Oatmeal with nuts, banana, and peanut butter",
            "back": "A practical pre-exercise meal example, combining healthy fat and carbohydrate, timed 2-4 hours before sport to digest fully before activity begins."
          },
          {
            "front": "Sports drinks during prolonged exercise",
            "back": "Deliver carbohydrate, fluid, and electrolytes together during activity lasting beyond about an hour, sustaining performance that would otherwise decline."
          },
          {
            "front": "The post-exercise protein window",
            "back": "20-40g of high-quality protein within roughly two hours after exercise is specifically timed to when muscle tissue is most receptive to using it for repair and growth."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "Why is oatmeal with nuts, banana, and peanut butter a good pre-exercise example?",
              "options": [
                "It combines healthy fat and carbohydrate, timed 2-4 hours before sport",
                "It contains no nutrients relevant to exercise",
                "It should be eaten immediately before competing",
                "It is a post-exercise recovery meal only"
              ],
              "answerIndex": 0,
              "explanation": "It combines healthy fat and carbohydrate, appropriately timed 2-4 hours before sport to digest fully."
            },
            {
              "type": "short",
              "prompt": "Why are sports drinks specifically useful during prolonged exercise rather than short exercise?",
              "keywords": [
                "beyond",
                "hour",
                "sustain",
                "glycogen"
              ],
              "explanation": "For exercise beyond about an hour, they help sustain performance as glycogen stores are progressively used up."
            }
          ]
        }
      },
      {
        "id": "wrapup",
        "title": "Why It Matters & Key Terms",
        "cards": [
          {
            "front": "Why This Matters",
            "back": "Nutrient timing is what turns the individual facts from earlier stations, carbohydrate needs, protein targets, hydration needs, into an actual daily plan an athlete can follow. Two athletes eating identical total daily nutrition can have meaningfully different recovery and performance outcomes purely based on when they ate it relative to training."
          },
          {
            "front": "Key Term: Nutrient timing",
            "back": "The practice of matching food and fluid intake to the specific phase of exercise (before, during, or after) to maximize physiological benefit."
          },
          {
            "front": "Key Term: Anabolic window",
            "back": "The period immediately following resistance exercise during which muscle tissue is especially receptive to using protein for repair and growth."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "How does nutrient timing relate to the earlier protein and hydration stations?",
              "options": [
                "It's the schedule those stations' recommendations actually get applied on, not a separate topic",
                "It has nothing to do with those stations",
                "It replaces the need for protein and hydration",
                "It only applies to supplements"
              ],
              "answerIndex": 0,
              "explanation": "Nutrient timing is the schedule that the protein and hydration recommendations from earlier stations actually get applied on."
            },
            {
              "type": "short",
              "prompt": "Why can two athletes with identical total daily nutrition have different outcomes?",
              "keywords": [
                "timing",
                "when",
                "relative to training"
              ],
              "explanation": "Because of when they ate their nutrients relative to training, not just what or how much."
            }
          ]
        }
      }
    ],
    "finalExam": {
      "mcq": [
        {
          "type": "mcq",
          "prompt": "What is the recommended timing window for a pre-exercise meal?",
          "options": [
            "Roughly 2 to 4 hours before sport",
            "Immediately before starting",
            "At least 12 hours before",
            "Timing doesn't matter for pre-exercise meals"
          ],
          "answerIndex": 0,
          "explanation": "A meal eaten roughly 2-4 hours before sport allows time to digest while still topping up glycogen and blood glucose."
        },
        {
          "type": "mcq",
          "prompt": "For exercise lasting beyond about an hour, what helps sustain performance during the activity?",
          "options": [
            "Ongoing carbohydrate and fluid intake during exercise",
            "Complete fasting during exercise",
            "Only protein intake during exercise",
            "Avoiding all intake until the activity ends"
          ],
          "answerIndex": 0,
          "explanation": "Ongoing carbohydrate and fluid intake during exercise lasting beyond about an hour helps sustain performance as glycogen stores are used up."
        },
        {
          "type": "mcq",
          "prompt": "What is the recommended post-exercise protein target?",
          "options": [
            "20-40g of high-quality protein within about 2 hours after exercise",
            "200g of protein immediately after exercise",
            "No protein needed after exercise",
            "Protein only needed the next morning"
          ],
          "answerIndex": 0,
          "explanation": "20-40g of high-quality protein (or ~0.25-0.4 g/kg body weight) within about 2 hours after exercise is the recommended recovery target."
        },
        {
          "type": "short",
          "prompt": "Explain, in your own words, why the same nutrient can have a different effect depending on timing.",
          "keywords": [
            "receptive",
            "anabolic",
            "window",
            "repair",
            "growth"
          ],
          "explanation": "Muscle tissue is more receptive to using protein for repair and growth in the hours immediately following resistance exercise, the so-called anabolic window, so identical nutrients can have different effects depending on when they're consumed."
        },
        {
          "type": "short",
          "prompt": "Name the three things post-exercise recovery nutrition accomplishes.",
          "keywords": [
            "glycogen",
            "fluid",
            "electrolyte",
            "muscle breakdown"
          ],
          "explanation": "It replenishes glycogen, restores fluid and electrolyte balance, and reduces ongoing muscle protein breakdown."
        }
      ],
      "theory": [
        {
          "type": "theory",
          "prompt": "Explain the three phases of nutrient timing (pre-, during-, and post-exercise) and what each is designed to achieve.",
          "keywordGroups": [
            [
              "pre-exercise",
              "2-4 hour",
              "glycogen"
            ],
            [
              "during",
              "carbohydrate",
              "fluid",
              "sustain"
            ],
            [
              "post-exercise",
              "protein",
              "recovery",
              "glycogen"
            ]
          ],
          "minGroups": 3,
          "explanation": "Pre-exercise (2-4hrs before) tops up glycogen/glucose; during-exercise carb/fluid intake sustains performance beyond an hour; post-exercise protein/carb intake replenishes glycogen, restores fluid/electrolytes, and reduces muscle breakdown."
        },
        {
          "type": "theory",
          "prompt": "Discuss the concept of the 'anabolic window' and why identical nutrients can have different effects depending on timing.",
          "keywordGroups": [
            [
              "anabolic window",
              "receptive"
            ],
            [
              "resistance exercise",
              "repair",
              "growth"
            ],
            [
              "timing",
              "different effect"
            ]
          ],
          "minGroups": 2,
          "explanation": "Muscle is more receptive to using protein for repair/growth in the hours immediately following resistance exercise (the anabolic window), so the same protein amount produces different effects depending on when it's consumed."
        },
        {
          "type": "theory",
          "prompt": "Explain why nutrient timing is described as tying together, rather than replacing, the earlier protein and hydration/mineral stations.",
          "keywordGroups": [
            [
              "schedule",
              "apply"
            ],
            [
              "protein target",
              "post-exercise"
            ],
            [
              "hydration",
              "electrolyte"
            ],
            [
              "not separate"
            ]
          ],
          "minGroups": 2,
          "explanation": "Nutrient timing isn't a separate topic, it's the schedule on which the protein station's post-exercise target and the hydration station's fluid/electrolyte needs actually get applied."
        }
      ]
    }
  },
  {
    "id": "sn-supplements",
    "courseId": "sportnutrition",
    "order": 9,
    "title": "Sports Supplements",
    "tagline": "What actually works, and what just markets well",
    "icon": "sn_supplements",
    "lesson": {
      "intro": [
        "Sports supplements exist to enhance performance, improve recovery, and reduce fatigue for sports personnel. That said, the category covers an enormous range of products with very different evidence bases, some are genuinely well-supported and effective when used correctly, others are poorly regulated or simply unnecessary if diet is already adequate. Working through the main categories one at a time is the only way to actually evaluate them individually instead of treating \"supplements\" as one big undifferentiated topic."
      ],
      "sections": [
        {
          "heading": "Protein and creatine supplements",
          "body": [
            "Protein supplements, whey protein, casein, soy protein, and plant-based protein among them, work by increasing daily protein intake, promoting muscle repair and growth, and supporting recovery after exercise. Their benefits are greatest when combined with resistance training, protein powder alone, without a training stimulus, does relatively little. Risks include bloating, digestive discomfort, and weight gain from excess calories if overused, and poor-quality products may contain contaminants. The sensible precautions are to use protein supplements only when dietary protein is genuinely insufficient, follow recommended serving sizes, and choose tested, reputable brands.",
            "Creatine monohydrate is one of the most extensively studied sports supplements and improves short-duration, high-intensity performance, increases strength and power output, and supports muscle growth, making it particularly useful for activities like weightlifting, sprinting, and repeated explosive movements. Its risks are comparatively mild: water retention, temporary weight gain, and stomach upset. Prevention involves using standard doses, commonly 3 to 5 grams per day, maintaining adequate hydration, and people with kidney disease should seek medical advice before use."
          ]
        },
        {
          "heading": "Energy, performance, and carbohydrate supplements",
          "body": [
            "Caffeine and energy drinks increase alertness and focus, reduce the perception of fatigue, and improve exercise performance, effects that are genuinely well-documented in sport science. Their risks include increased heart rate and blood pressure, anxiety, insomnia, irritability, and dependence with regular high intake. Prevention means avoiding excessive caffeine intake, not combining multiple stimulant products at once, and avoiding use close to bedtime.",
            "Carbohydrate supplements, sports drinks, gels, and carbohydrate powders, provide rapid energy during prolonged exercise and help restore glucose stores, but are less necessary for short or low-intensity activities where the body's existing glycogen is more than adequate. Risks include excess sugar intake, weight gain if calories exceed need, and gastrointestinal discomfort. Prevention means using them according to actual exercise duration and intensity, and balancing intake with normal meals rather than layering supplemental carbs on top of an already sufficient diet."
          ]
        },
        {
          "heading": "Amino acid and fat-burning supplements",
          "body": [
            "Amino acid supplements, including branched-chain amino acids (BCAAs) and other essential amino acids, support muscle protein synthesis and are marketed to reduce fatigue and muscle breakdown. Risks include digestive problems and, indirectly, poor dietary habits if athletes start relying on supplements instead of complete food sources. The sensible approach is to prioritize complete protein sources first, and use isolated amino acid supplements only for specific nutritional needs rather than as a default.",
            "Fat-burning and weight-loss supplements, thermogenic products and fat burners, are marketed to increase metabolism and support fat loss. It's worth being direct about this category: fat loss ultimately depends on diet, activity level, and overall energy balance, not on a supplement working in isolation. Risks include increased heart rate, high blood pressure, and in some cases genuinely harmful ingredients in poorly regulated products. Prevention means avoiding unregulated products, choosing ingredients carefully, and relying on evidence-based weight management methods rather than shortcuts."
          ]
        },
        {
          "heading": "Using supplements safely, across every category",
          "body": [
            "A handful of precautions repeat across nearly every supplement category covered in this station, which is worth noticing as a pattern in its own right: use according to exercise duration and intensity rather than by default, balance supplement use with normal whole-food meals rather than replacing them, follow recommended serving sizes and standard doses, choose tested and reputable brands to avoid contaminants, and seek medical advice first if there's an existing health condition, kidney disease and creatine being one specific example already noted. Vitamins, minerals, and other recovery-support supplements generally follow this same logic: useful for filling a genuine, identified gap, unnecessary as a blanket default on top of an already adequate diet."
          ]
        }
      ],
      "examples": [
        {
          "title": "Creatine for a sprinter",
          "text": "Creatine monohydrate specifically supports short-duration, high-intensity performance and repeated explosive movements, making it well suited to sprinting or weightlifting rather than long-distance endurance events."
        },
        {
          "title": "Caffeine's double edge",
          "text": "Genuinely improves alertness and reduces perceived fatigue, but the same stimulant effect risks increased heart rate, anxiety, and insomnia if overused or taken too close to bedtime."
        },
        {
          "title": "Fat burners without diet change",
          "text": "Illustrates the recurring precaution in this station: a thermogenic supplement cannot substitute for the underlying diet, activity level, and energy balance that actually determine fat loss."
        }
      ],
      "whyMatters": [
        "Supplements are one of the most heavily marketed, least individually evaluated parts of sport nutrition, athletes are often sold a category (\"fat burners,\" \"recovery supplements\") rather than told what a specific product actually does, its real risk profile, and whether their diet already covers the same need. Working through each category on its own evidence and its own risks is what turns \"should I take supplements\" into a much more answerable, specific question."
      ],
      "glossary": [
        {
          "term": "Creatine monohydrate",
          "def": "A well-studied supplement that improves short-duration, high-intensity performance and supports muscle growth."
        },
        {
          "term": "Ergogenic aid",
          "def": "Any substance or method (including supplements like creatine or caffeine) used to enhance athletic performance."
        },
        {
          "term": "Thermogenic product",
          "def": "A supplement marketed to increase metabolism and support fat loss, typically containing stimulant ingredients."
        },
        {
          "term": "BCAA supplement",
          "def": "A supplement containing the branched-chain amino acids (leucine, isoleucine, valine), marketed to support muscle protein synthesis and reduce fatigue."
        }
      ]
    },
    "parts": [
      {
        "id": "intro",
        "title": "Introduction",
        "cards": [
          {
            "front": "Introduction",
            "back": "Sports supplements exist to enhance performance, improve recovery, and reduce fatigue for sports personnel. That said, the category covers an enormous range of products with very different evidence bases, some are genuinely well-supported and effective when used correctly, others are poorly regulated or simply unnecessary if diet is already adequate. Working through the main categories one at a time is the only way to actually evaluate them individually instead of treating \"supplements\" as one big undifferentiated topic."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "What do sports supplements exist to do?",
              "options": [
                "Enhance performance, improve recovery, reduce fatigue",
                "Replace the need for a balanced diet entirely",
                "Only build muscle with no other function",
                "Cure injuries"
              ],
              "answerIndex": 0,
              "explanation": "Sports supplements exist to enhance performance, improve recovery, and reduce fatigue for sports personnel."
            },
            {
              "type": "short",
              "prompt": "Why is it important to evaluate supplement categories individually rather than treating 'supplements' as one topic?",
              "keywords": [
                "different",
                "evidence",
                "effective",
                "unnecessary"
              ],
              "explanation": "The category covers products with very different evidence bases; some are well-supported, others are poorly regulated or unnecessary."
            }
          ]
        }
      },
      {
        "id": "sec0",
        "title": "Protein and creatine supplements",
        "cards": [
          {
            "front": "Protein and creatine supplements (1/2)",
            "back": "Protein supplements, whey protein, casein, soy protein, and plant-based protein among them, work by increasing daily protein intake, promoting muscle repair and growth, and supporting recovery after exercise. Their benefits are greatest when combined with resistance training, protein powder alone, without a training stimulus, does relatively little. Risks include bloating, digestive discomfort, and weight gain from excess calories if overused, and poor-quality products may contain contaminants. The sensible precautions are to use protein supplements only when dietary protein is genuinely insufficient, follow recommended serving sizes, and choose tested, reputable brands."
          },
          {
            "front": "Protein and creatine supplements (2/2)",
            "back": "Creatine monohydrate is one of the most extensively studied sports supplements and improves short-duration, high-intensity performance, increases strength and power output, and supports muscle growth, making it particularly useful for activities like weightlifting, sprinting, and repeated explosive movements. Its risks are comparatively mild: water retention, temporary weight gain, and stomach upset. Prevention involves using standard doses, commonly 3 to 5 grams per day, maintaining adequate hydration, and people with kidney disease should seek medical advice before use."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "When are protein supplements' benefits greatest?",
              "options": [
                "When combined with resistance training",
                "When taken without exercise",
                "Only on rest days",
                "Never, they have no benefit"
              ],
              "answerIndex": 0,
              "explanation": "Protein supplement benefits are greatest when combined with resistance training."
            },
            {
              "type": "short",
              "prompt": "What is the standard creatine monohydrate dose, and who should seek medical advice before use?",
              "keywords": [
                "3",
                "5",
                "gram",
                "kidney"
              ],
              "explanation": "Commonly 3-5g/day; people with kidney disease should seek medical advice first."
            }
          ]
        }
      },
      {
        "id": "sec1",
        "title": "Energy, performance, and carbohydrate supplements",
        "cards": [
          {
            "front": "Energy, performance, and carbohydrate supplements (1/2)",
            "back": "Caffeine and energy drinks increase alertness and focus, reduce the perception of fatigue, and improve exercise performance, effects that are genuinely well-documented in sport science. Their risks include increased heart rate and blood pressure, anxiety, insomnia, irritability, and dependence with regular high intake. Prevention means avoiding excessive caffeine intake, not combining multiple stimulant products at once, and avoiding use close to bedtime."
          },
          {
            "front": "Energy, performance, and carbohydrate supplements (2/2)",
            "back": "Carbohydrate supplements, sports drinks, gels, and carbohydrate powders, provide rapid energy during prolonged exercise and help restore glucose stores, but are less necessary for short or low-intensity activities where the body's existing glycogen is more than adequate. Risks include excess sugar intake, weight gain if calories exceed need, and gastrointestinal discomfort. Prevention means using them according to actual exercise duration and intensity, and balancing intake with normal meals rather than layering supplemental carbs on top of an already sufficient diet."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "What are the documented benefits of caffeine for exercise performance?",
              "options": [
                "Increased alertness/focus, reduced perception of fatigue, improved performance",
                "Only improved sleep",
                "Only reduced heart rate",
                "No documented benefits"
              ],
              "answerIndex": 0,
              "explanation": "Caffeine increases alertness/focus, reduces perceived fatigue, and improves exercise performance."
            },
            {
              "type": "short",
              "prompt": "When are carbohydrate supplements less necessary?",
              "keywords": [
                "short",
                "low intensity"
              ],
              "explanation": "For short or low-intensity activities, where existing glycogen is adequate."
            }
          ]
        }
      },
      {
        "id": "sec2",
        "title": "Amino acid and fat-burning supplements",
        "cards": [
          {
            "front": "Amino acid and fat-burning supplements (1/2)",
            "back": "Amino acid supplements, including branched-chain amino acids (BCAAs) and other essential amino acids, support muscle protein synthesis and are marketed to reduce fatigue and muscle breakdown. Risks include digestive problems and, indirectly, poor dietary habits if athletes start relying on supplements instead of complete food sources. The sensible approach is to prioritize complete protein sources first, and use isolated amino acid supplements only for specific nutritional needs rather than as a default."
          },
          {
            "front": "Amino acid and fat-burning supplements (2/2)",
            "back": "Fat-burning and weight-loss supplements, thermogenic products and fat burners, are marketed to increase metabolism and support fat loss. It's worth being direct about this category: fat loss ultimately depends on diet, activity level, and overall energy balance, not on a supplement working in isolation. Risks include increased heart rate, high blood pressure, and in some cases genuinely harmful ingredients in poorly regulated products. Prevention means avoiding unregulated products, choosing ingredients carefully, and relying on evidence-based weight management methods rather than shortcuts."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "What does fat loss ultimately depend on, regardless of fat-burning supplements?",
              "options": [
                "Diet, activity level, and overall energy balance",
                "The supplement alone",
                "Genetics only",
                "Sleep alone"
              ],
              "answerIndex": 0,
              "explanation": "Fat loss depends on diet, activity level, and energy balance, not the supplement in isolation."
            },
            {
              "type": "short",
              "prompt": "What should be prioritized before using amino acid supplements?",
              "keywords": [
                "complete protein",
                "whole food"
              ],
              "explanation": "Complete protein sources should be prioritized first."
            }
          ]
        }
      },
      {
        "id": "sec3",
        "title": "Using supplements safely, across every category",
        "cards": [
          {
            "front": "Using supplements safely, across every category",
            "back": "A handful of precautions repeat across nearly every supplement category covered in this station, which is worth noticing as a pattern in its own right: use according to exercise duration and intensity rather than by default, balance supplement use with normal whole-food meals rather than replacing them, follow recommended serving sizes and standard doses, choose tested and reputable brands to avoid contaminants, and seek medical advice first if there's an existing health condition, kidney disease and creatine being one specific example already noted. Vitamins, minerals, and other recovery-support supplements generally follow this same logic: useful for filling a genuine, identified gap, unnecessary as a blanket default on top of an already adequate diet."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "What precaution repeats across nearly every supplement category?",
              "options": [
                "Use according to need, follow recommended doses, choose reputable brands",
                "Always use the maximum possible dose",
                "Combine as many supplements as possible",
                "Avoid all whole foods once using supplements"
              ],
              "answerIndex": 0,
              "explanation": "Use according to actual need, follow recommended serving sizes, choose reputable tested brands, and seek medical advice if needed."
            },
            {
              "type": "short",
              "prompt": "What is the general rule for vitamin/mineral/recovery supplements, per the lesson?",
              "keywords": [
                "genuine gap",
                "unnecessary",
                "default"
              ],
              "explanation": "Useful for filling a genuine, identified gap; unnecessary as a blanket default on an already adequate diet."
            }
          ]
        }
      },
      {
        "id": "examples",
        "title": "Real-World Examples",
        "cards": [
          {
            "front": "Creatine for a sprinter",
            "back": "Creatine monohydrate specifically supports short-duration, high-intensity performance and repeated explosive movements, making it well suited to sprinting or weightlifting rather than long-distance endurance events."
          },
          {
            "front": "Caffeine's double edge",
            "back": "Genuinely improves alertness and reduces perceived fatigue, but the same stimulant effect risks increased heart rate, anxiety, and insomnia if overused or taken too close to bedtime."
          },
          {
            "front": "Fat burners without diet change",
            "back": "Illustrates the recurring precaution in this station: a thermogenic supplement cannot substitute for the underlying diet, activity level, and energy balance that actually determine fat loss."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "Why is creatine well suited to sprinting and weightlifting specifically?",
              "options": [
                "It improves short-duration, high-intensity performance",
                "It only helps marathon runners",
                "It has no effect on any sport",
                "It only affects flexibility"
              ],
              "answerIndex": 0,
              "explanation": "Creatine improves short-duration, high-intensity performance, suiting sprinting/weightlifting."
            },
            {
              "type": "short",
              "prompt": "What is the risk of relying on a fat burner without changing diet or activity?",
              "keywords": [
                "no",
                "ineffective",
                "diet",
                "activity"
              ],
              "explanation": "Fat loss ultimately depends on diet, activity, and energy balance, a supplement alone cannot substitute for these."
            }
          ]
        }
      },
      {
        "id": "wrapup",
        "title": "Why It Matters & Key Terms",
        "cards": [
          {
            "front": "Why This Matters",
            "back": "Supplements are one of the most heavily marketed, least individually evaluated parts of sport nutrition, athletes are often sold a category (\"fat burners,\" \"recovery supplements\") rather than told what a specific product actually does, its real risk profile, and whether their diet already covers the same need. Working through each category on its own evidence and its own risks is what turns \"should I take supplements\" into a much more answerable, specific question."
          },
          {
            "front": "Key Term: Creatine monohydrate",
            "back": "A well-studied supplement that improves short-duration, high-intensity performance and supports muscle growth."
          },
          {
            "front": "Key Term: Ergogenic aid",
            "back": "Any substance or method (including supplements like creatine or caffeine) used to enhance athletic performance."
          },
          {
            "front": "Key Term: Thermogenic product",
            "back": "A supplement marketed to increase metabolism and support fat loss, typically containing stimulant ingredients."
          },
          {
            "front": "Key Term: BCAA supplement",
            "back": "A supplement containing the branched-chain amino acids (leucine, isoleucine, valine), marketed to support muscle protein synthesis and reduce fatigue."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "What is the main problem with how supplements are often marketed, per the lesson?",
              "options": [
                "Athletes are sold a category rather than told what a specific product does and its real risk profile",
                "Supplements are always accurately marketed",
                "Marketing has no influence on supplement use",
                "All supplements are equally effective"
              ],
              "answerIndex": 0,
              "explanation": "Athletes are often sold a category rather than given specifics on what a product does and its risk profile."
            },
            {
              "type": "short",
              "prompt": "What turns 'should I take supplements' into a more answerable question?",
              "keywords": [
                "specific",
                "category",
                "evidence",
                "risk"
              ],
              "explanation": "Working through each category on its own evidence and risk profile."
            }
          ]
        }
      }
    ],
    "finalExam": {
      "mcq": [
        {
          "type": "mcq",
          "prompt": "When are protein supplements' benefits greatest, according to the lesson?",
          "options": [
            "When combined with resistance training",
            "When taken without any exercise",
            "Only when taken on an empty stomach",
            "Only when combined with fasting"
          ],
          "answerIndex": 0,
          "explanation": "Protein supplements' benefits are greatest when combined with resistance training; without a training stimulus, they do relatively little on their own."
        },
        {
          "type": "mcq",
          "prompt": "What is the standard recommended creatine monohydrate dose?",
          "options": [
            "3-5 grams per day",
            "50 grams per day",
            "1 gram per week",
            "There is no standard dose"
          ],
          "answerIndex": 0,
          "explanation": "Standard creatine doses are commonly 3-5g per day."
        },
        {
          "type": "mcq",
          "prompt": "What activities is creatine monohydrate particularly well-suited to?",
          "options": [
            "Weightlifting, sprinting, and repeated explosive movements",
            "Long-distance marathon running only",
            "Activities requiring no muscular effort",
            "Only swimming"
          ],
          "answerIndex": 0,
          "explanation": "Creatine improves short-duration, high-intensity performance, making it well suited to weightlifting, sprinting, and repeated explosive movements."
        },
        {
          "type": "mcq",
          "prompt": "What does fat loss ultimately depend on, according to the lesson, regardless of fat-burning supplements?",
          "options": [
            "Diet, activity level, and overall energy balance",
            "The supplement alone, independent of diet",
            "Genetics only",
            "Sleep alone"
          ],
          "answerIndex": 0,
          "explanation": "Fat loss ultimately depends on diet, activity level, and overall energy balance, not on a supplement working in isolation."
        },
        {
          "type": "mcq",
          "prompt": "Who should seek medical advice before using creatine, per the lesson?",
          "options": [
            "People with kidney disease",
            "People who exercise regularly",
            "People who eat a high-protein diet",
            "Everyone, with no exceptions"
          ],
          "answerIndex": 0,
          "explanation": "People with kidney disease should seek medical advice before using creatine."
        },
        {
          "type": "short",
          "prompt": "Name two risks of excessive caffeine intake mentioned in the lesson.",
          "keywords": [
            "heart rate",
            "blood pressure",
            "anxiety",
            "insomnia",
            "irritability",
            "dependence"
          ],
          "explanation": "Increased heart rate and blood pressure, anxiety, insomnia, irritability, and dependence are all mentioned risks."
        },
        {
          "type": "short",
          "prompt": "What precaution repeats across nearly every supplement category discussed in this station?",
          "keywords": [
            "balance",
            "whole food",
            "recommended",
            "reputable",
            "medical advice"
          ],
          "explanation": "Using supplements according to actual need rather than by default, balancing with normal meals, following recommended doses, choosing reputable brands, and seeking medical advice for existing health conditions."
        }
      ],
      "theory": [
        {
          "type": "theory",
          "prompt": "Compare protein, creatine, and caffeine supplements in terms of their evidence-based benefits and their risks.",
          "keywordGroups": [
            [
              "protein",
              "resistance training",
              "muscle repair"
            ],
            [
              "creatine",
              "strength",
              "power",
              "short duration"
            ],
            [
              "caffeine",
              "alertness",
              "fatigue perception"
            ],
            [
              "risk"
            ]
          ],
          "minGroups": 3,
          "explanation": "Protein supports muscle repair/growth (best with resistance training); creatine supports short-duration high-intensity performance; caffeine improves alertness and reduces perceived fatigue; each carries its own distinct risk profile."
        },
        {
          "type": "theory",
          "prompt": "Discuss why fat-burning supplements are described critically in the lesson, and what actually determines fat loss.",
          "keywordGroups": [
            [
              "thermogenic",
              "fat burner"
            ],
            [
              "diet",
              "activity",
              "energy balance"
            ],
            [
              "risk",
              "heart rate",
              "blood pressure"
            ],
            [
              "evidence-based"
            ]
          ],
          "minGroups": 3,
          "explanation": "Fat loss ultimately depends on diet, activity level, and energy balance, not the supplement alone; fat burners carry risks like increased heart rate/blood pressure and sometimes harmful ingredients, so evidence-based weight management is recommended instead."
        },
        {
          "type": "theory",
          "prompt": "Explain the safety precautions that apply across nearly every sports supplement category discussed in this station.",
          "keywordGroups": [
            [
              "exercise duration",
              "intensity",
              "need"
            ],
            [
              "whole food",
              "balance",
              "normal meal"
            ],
            [
              "recommended dose",
              "serving size"
            ],
            [
              "reputable",
              "tested",
              "medical advice"
            ]
          ],
          "minGroups": 3,
          "explanation": "Use according to actual exercise duration/intensity, balance with whole-food meals rather than replacing them, follow recommended doses, choose reputable tested brands, and seek medical advice for existing health conditions."
        }
      ]
    }
  },
  {
    "id": "sn-doping",
    "courseId": "sportnutrition",
    "order": 10,
    "title": "Doping & Ethics in Sport",
    "tagline": "Where performance enhancement crosses a line",
    "icon": "sn_doping",
    "lesson": {
      "intro": [
        "Doping is the use of prohibited substances or methods to artificially enhance athletic performance. It sits at the boundary between the legitimate performance-enhancement strategies covered throughout this course, nutrition timing, supplementation, training, and something categorically different: methods banned specifically because they undermine fair competition, endanger athlete health, or both at once. Understanding where that line is drawn, and why, is as much a part of sport nutrition as knowing what to eat before a race."
      ],
      "sections": [
        {
          "heading": "What counts as doping",
          "body": [
            "The World Anti-Doping Agency (WADA) maintains the internationally recognized list of banned substances and methods, updated annually, and most national and sport-specific federations adopt it directly. A substance or method typically ends up on this list if it meets at least two of three criteria: it has the potential to enhance performance, it poses a risk to athlete health, and its use violates the spirit of sport. Banned categories include anabolic agents (like anabolic steroids), hormones and metabolic modulators (like growth hormone and erythropoietin, or EPO), diuretics and masking agents, stimulants, narcotics, and certain methods like blood doping (artificially boosting red blood cell count) and gene doping."
          ]
        },
        {
          "heading": "Why banned substances are banned",
          "body": [
            "Different categories of banned substances are prohibited for overlapping but distinct reasons. Anabolic steroids and growth hormone are banned largely because they produce muscle growth and recovery effects far beyond what natural training and nutrition can achieve, creating an unfair advantage while carrying serious health risks including cardiovascular disease, liver damage, and hormonal disruption. EPO and blood doping are banned because artificially increasing red blood cell count improves oxygen delivery to muscles well beyond natural limits, while also thickening the blood dangerously, raising the risk of blood clots, stroke, and heart attack.",
            "Some substances are banned only during competition rather than year-round, certain stimulants, for instance, because their performance effect is specific to the moment of competition itself, while others are banned at all times because of their broader physiological effects on training adaptation or their health risk profile."
          ]
        },
        {
          "heading": "How doping is detected and regulated",
          "body": [
            "Doping control relies mainly on urine and blood testing, both in and out of competition, looking for banned substances or their metabolic byproducts directly, or for biological markers consistent with their use, such as an athlete's biological passport, a longitudinal record of blood values used to detect suspicious changes over time even without catching the substance itself in a single test. Athletes found to have violated anti-doping rules face sanctions ranging from disqualification and loss of results to multi-year competition bans, and in serious or repeated cases, lifetime bans.",
            "A detail worth knowing specifically in a nutrition context: some legitimate supplements have been found to be contaminated with banned substances not listed on their label, meaning an athlete can test positive without ever knowingly taking a banned substance. This is one of the strongest practical arguments, separate from any ethical one, for the supplement precautions covered in the previous station, choosing tested, reputable, third-party-certified products specifically to avoid this risk."
          ]
        },
        {
          "heading": "The ethical case against doping",
          "body": [
            "Beyond the rules themselves, the ethical argument against doping usually rests on a few related ideas. Fair competition assumes athletes are being compared on the basis of talent, training, and legitimate preparation, doping undermines that comparison by introducing an advantage unavailable to athletes who don't dope. Athlete health is a second concern, many banned substances carry serious long-term health risks, and a sporting culture that implicitly pressures athletes to dope to remain competitive creates harm that extends well beyond the individual choice to use them. A third concern is the example set for younger or developing athletes, who may look to elite competitors as models for what serious training looks like."
          ]
        }
      ],
      "examples": [
        {
          "title": "EPO and blood doping",
          "text": "Both artificially increase red blood cell count to improve oxygen delivery, but also thicken the blood, raising the risk of blood clots, stroke, and heart attack, illustrating how a banned method can be simultaneously performance-enhancing and dangerous."
        },
        {
          "title": "The athlete biological passport",
          "text": "A longitudinal record of an athlete's blood values over time, used to flag suspicious changes consistent with doping even when no single test catches the substance directly."
        },
        {
          "title": "Contaminated supplements",
          "text": "Some legitimate supplements have tested positive for banned substances not listed on their label, showing why supplement sourcing (covered in the previous station) is a genuine anti-doping concern, not just a quality concern."
        }
      ],
      "whyMatters": [
        "Every legitimate strategy covered elsewhere in this course, carbohydrate loading, protein timing, creatine, caffeine, works within the rules of fair competition. Understanding where doping crosses that line, and why it's banned rather than just discouraged, gives athletes a clear, informed basis for staying within it, including protecting themselves from the specific, non-obvious risk of supplement contamination."
      ],
      "glossary": [
        {
          "term": "Doping",
          "def": "The use of prohibited substances or methods to artificially enhance athletic performance."
        },
        {
          "term": "World Anti-Doping Agency (WADA)",
          "def": "The organization that maintains the internationally recognized list of banned substances and methods in sport."
        },
        {
          "term": "Erythropoietin (EPO)",
          "def": "A hormone that stimulates red blood cell production; banned when used to artificially boost oxygen-carrying capacity."
        },
        {
          "term": "Blood doping",
          "def": "A banned method of artificially increasing red blood cell count to improve oxygen delivery to muscles."
        },
        {
          "term": "Athlete biological passport",
          "def": "A longitudinal record of an athlete's blood values, used to detect patterns consistent with doping over time."
        }
      ]
    },
    "parts": [
      {
        "id": "intro",
        "title": "Introduction",
        "cards": [
          {
            "front": "Introduction",
            "back": "Doping is the use of prohibited substances or methods to artificially enhance athletic performance. It sits at the boundary between the legitimate performance-enhancement strategies covered throughout this course, nutrition timing, supplementation, training, and something categorically different: methods banned specifically because they undermine fair competition, endanger athlete health, or both at once. Understanding where that line is drawn, and why, is as much a part of sport nutrition as knowing what to eat before a race."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "What is doping?",
              "options": [
                "The use of prohibited substances or methods to artificially enhance performance",
                "Any use of nutrition strategy to improve performance",
                "A term for over-training",
                "A type of injury"
              ],
              "answerIndex": 0,
              "explanation": "Doping is the use of prohibited substances or methods to artificially enhance athletic performance."
            },
            {
              "type": "short",
              "prompt": "What makes doping categorically different from legitimate performance strategies like nutrition timing?",
              "keywords": [
                "banned",
                "fair competition",
                "health"
              ],
              "explanation": "It's banned specifically because it undermines fair competition, endangers athlete health, or both."
            }
          ]
        }
      },
      {
        "id": "sec0",
        "title": "What counts as doping",
        "cards": [
          {
            "front": "What counts as doping",
            "back": "The World Anti-Doping Agency (WADA) maintains the internationally recognized list of banned substances and methods, updated annually, and most national and sport-specific federations adopt it directly. A substance or method typically ends up on this list if it meets at least two of three criteria: it has the potential to enhance performance, it poses a risk to athlete health, and its use violates the spirit of sport. Banned categories include anabolic agents (like anabolic steroids), hormones and metabolic modulators (like growth hormone and erythropoietin, or EPO), diuretics and masking agents, stimulants, narcotics, and certain methods like blood doping (artificially boosting red blood cell count) and gene doping."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "Which organization maintains the internationally recognized banned substances list?",
              "options": [
                "WADA",
                "FIFA",
                "The United Nations",
                "Each individual gym"
              ],
              "answerIndex": 0,
              "explanation": "The World Anti-Doping Agency (WADA) maintains this list."
            },
            {
              "type": "short",
              "prompt": "Name two categories of banned substances or methods mentioned in the lesson.",
              "keywords": [
                "anabolic",
                "hormone",
                "diuretic",
                "stimulant",
                "blood doping"
              ],
              "explanation": "Anabolic agents, hormones/metabolic modulators, diuretics/masking agents, stimulants, narcotics, blood doping, gene doping."
            }
          ]
        }
      },
      {
        "id": "sec1",
        "title": "Why banned substances are banned",
        "cards": [
          {
            "front": "Why banned substances are banned (1/2)",
            "back": "Different categories of banned substances are prohibited for overlapping but distinct reasons. Anabolic steroids and growth hormone are banned largely because they produce muscle growth and recovery effects far beyond what natural training and nutrition can achieve, creating an unfair advantage while carrying serious health risks including cardiovascular disease, liver damage, and hormonal disruption. EPO and blood doping are banned because artificially increasing red blood cell count improves oxygen delivery to muscles well beyond natural limits, while also thickening the blood dangerously, raising the risk of blood clots, stroke, and heart attack."
          },
          {
            "front": "Why banned substances are banned (2/2)",
            "back": "Some substances are banned only during competition rather than year-round, certain stimulants, for instance, because their performance effect is specific to the moment of competition itself, while others are banned at all times because of their broader physiological effects on training adaptation or their health risk profile."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "Why are EPO and blood doping banned?",
              "options": [
                "They improve oxygen delivery beyond natural limits while thickening the blood dangerously",
                "They have no performance effect",
                "They only affect appearance",
                "They are banned for cost reasons only"
              ],
              "answerIndex": 0,
              "explanation": "They artificially boost oxygen-carrying capacity while also thickening blood, raising clot/stroke/heart attack risk."
            },
            {
              "type": "short",
              "prompt": "Why are some substances banned only during competition rather than year-round?",
              "keywords": [
                "performance effect",
                "specific to competition"
              ],
              "explanation": "Because their performance effect is specific to the moment of competition itself."
            }
          ]
        }
      },
      {
        "id": "sec2",
        "title": "How doping is detected and regulated",
        "cards": [
          {
            "front": "How doping is detected and regulated (1/2)",
            "back": "Doping control relies mainly on urine and blood testing, both in and out of competition, looking for banned substances or their metabolic byproducts directly, or for biological markers consistent with their use, such as an athlete's biological passport, a longitudinal record of blood values used to detect suspicious changes over time even without catching the substance itself in a single test. Athletes found to have violated anti-doping rules face sanctions ranging from disqualification and loss of results to multi-year competition bans, and in serious or repeated cases, lifetime bans."
          },
          {
            "front": "How doping is detected and regulated (2/2)",
            "back": "A detail worth knowing specifically in a nutrition context: some legitimate supplements have been found to be contaminated with banned substances not listed on their label, meaning an athlete can test positive without ever knowingly taking a banned substance. This is one of the strongest practical arguments, separate from any ethical one, for the supplement precautions covered in the previous station, choosing tested, reputable, third-party-certified products specifically to avoid this risk."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "What is the athlete biological passport used for?",
              "options": [
                "Tracking blood values over time to detect suspicious changes",
                "Recording travel history",
                "Verifying citizenship",
                "Tracking supplement purchases"
              ],
              "answerIndex": 0,
              "explanation": "It's a longitudinal record of blood values used to detect suspicious changes over time."
            },
            {
              "type": "short",
              "prompt": "How can an athlete test positive without knowingly taking a banned substance?",
              "keywords": [
                "contaminat",
                "supplement",
                "label"
              ],
              "explanation": "Some legitimate supplements have been found contaminated with banned substances not listed on the label."
            }
          ]
        }
      },
      {
        "id": "sec3",
        "title": "The ethical case against doping",
        "cards": [
          {
            "front": "The ethical case against doping",
            "back": "Beyond the rules themselves, the ethical argument against doping usually rests on a few related ideas. Fair competition assumes athletes are being compared on the basis of talent, training, and legitimate preparation, doping undermines that comparison by introducing an advantage unavailable to athletes who don't dope. Athlete health is a second concern, many banned substances carry serious long-term health risks, and a sporting culture that implicitly pressures athletes to dope to remain competitive creates harm that extends well beyond the individual choice to use them. A third concern is the example set for younger or developing athletes, who may look to elite competitors as models for what serious training looks like."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "What does the ethical case against doping usually rest on?",
              "options": [
                "Fair competition, athlete health, and the example set for younger athletes",
                "Only financial concerns",
                "Only legal technicalities",
                "There is no ethical case, only rules"
              ],
              "answerIndex": 0,
              "explanation": "Fair competition, athlete health, and the example set for younger/developing athletes."
            },
            {
              "type": "short",
              "prompt": "How does doping undermine fair competition?",
              "keywords": [
                "advantage",
                "unavailable",
                "talent",
                "training"
              ],
              "explanation": "It introduces an advantage unavailable to athletes who don't dope, undermining comparison based on talent and legitimate training."
            }
          ]
        }
      },
      {
        "id": "examples",
        "title": "Real-World Examples",
        "cards": [
          {
            "front": "EPO and blood doping",
            "back": "Both artificially increase red blood cell count to improve oxygen delivery, but also thicken the blood, raising the risk of blood clots, stroke, and heart attack, illustrating how a banned method can be simultaneously performance-enhancing and dangerous."
          },
          {
            "front": "The athlete biological passport",
            "back": "A longitudinal record of an athlete's blood values over time, used to flag suspicious changes consistent with doping even when no single test catches the substance directly."
          },
          {
            "front": "Contaminated supplements",
            "back": "Some legitimate supplements have tested positive for banned substances not listed on their label, showing why supplement sourcing (covered in the previous station) is a genuine anti-doping concern, not just a quality concern."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "What does the example of contaminated supplements illustrate?",
              "options": [
                "A genuine, non-obvious risk connecting supplement sourcing to anti-doping concerns",
                "That all supplements are automatically banned substances",
                "That doping tests are unreliable",
                "That contamination cannot happen in reputable products"
              ],
              "answerIndex": 0,
              "explanation": "It shows supplement sourcing is a genuine anti-doping concern, not just a quality concern."
            },
            {
              "type": "short",
              "prompt": "What sanctions can athletes face for anti-doping violations?",
              "keywords": [
                "disqualif",
                "ban",
                "loss of results"
              ],
              "explanation": "Disqualification, loss of results, multi-year bans, and in serious/repeated cases, lifetime bans."
            }
          ]
        }
      },
      {
        "id": "wrapup",
        "title": "Why It Matters & Key Terms",
        "cards": [
          {
            "front": "Why This Matters",
            "back": "Every legitimate strategy covered elsewhere in this course, carbohydrate loading, protein timing, creatine, caffeine, works within the rules of fair competition. Understanding where doping crosses that line, and why it's banned rather than just discouraged, gives athletes a clear, informed basis for staying within it, including protecting themselves from the specific, non-obvious risk of supplement contamination."
          },
          {
            "front": "Key Term: Doping",
            "back": "The use of prohibited substances or methods to artificially enhance athletic performance."
          },
          {
            "front": "Key Term: World Anti-Doping Agency (WADA)",
            "back": "The organization that maintains the internationally recognized list of banned substances and methods in sport."
          },
          {
            "front": "Key Term: Erythropoietin (EPO)",
            "back": "A hormone that stimulates red blood cell production; banned when used to artificially boost oxygen-carrying capacity."
          },
          {
            "front": "Key Term: Blood doping",
            "back": "A banned method of artificially increasing red blood cell count to improve oxygen delivery to muscles."
          },
          {
            "front": "Key Term: Athlete biological passport",
            "back": "A longitudinal record of an athlete's blood values, used to detect patterns consistent with doping over time."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "How does this station connect to the supplements station?",
              "options": [
                "It highlights supplement contamination as a specific, non-obvious anti-doping risk",
                "It has no connection to supplements",
                "It recommends avoiding all supplements entirely",
                "It only applies to Olympic athletes"
              ],
              "answerIndex": 0,
              "explanation": "Supplement contamination with banned substances is a genuine link between the two stations."
            },
            {
              "type": "short",
              "prompt": "What criteria determine whether a substance/method gets banned?",
              "keywords": [
                "performance",
                "health",
                "spirit of sport"
              ],
              "explanation": "Potential to enhance performance, risk to athlete health, and violating the spirit of sport (at least two of three)."
            }
          ]
        }
      }
    ],
    "finalExam": {
      "mcq": [
        {
          "type": "mcq",
          "prompt": "What organization maintains the internationally recognized list of banned substances and methods in sport?",
          "options": [
            "The World Anti-Doping Agency (WADA)",
            "The International Olympic Committee alone",
            "Each individual national government",
            "There is no such organization"
          ],
          "answerIndex": 0,
          "explanation": "WADA maintains the internationally recognized banned substances/methods list, adopted by most federations."
        },
        {
          "type": "mcq",
          "prompt": "Why are EPO and blood doping specifically banned?",
          "options": [
            "They improve oxygen delivery beyond natural limits while also raising the risk of blood clots, stroke, and heart attack",
            "They have no real performance effect",
            "They are banned only because they are expensive",
            "They only affect appearance, not performance"
          ],
          "answerIndex": 0,
          "explanation": "EPO and blood doping artificially boost red blood cell count, improving oxygen delivery but also dangerously thickening the blood."
        },
        {
          "type": "mcq",
          "prompt": "What is the athlete biological passport used for?",
          "options": [
            "Tracking an athlete's blood values over time to detect patterns consistent with doping",
            "Recording an athlete's travel history",
            "Verifying an athlete's citizenship for competition",
            "Tracking dietary supplement purchases"
          ],
          "answerIndex": 0,
          "explanation": "The athlete biological passport is a longitudinal record of blood values used to flag suspicious changes over time."
        },
        {
          "type": "mcq",
          "prompt": "Why can an athlete test positive for a banned substance without knowingly taking one?",
          "options": [
            "Some legitimate supplements have been found contaminated with banned substances not listed on the label",
            "Doping tests are always inaccurate",
            "All supplements automatically contain banned substances",
            "This cannot happen"
          ],
          "answerIndex": 0,
          "explanation": "Some legitimate supplements have been found contaminated with banned substances not disclosed on their label, a genuine risk distinct from intentional doping."
        },
        {
          "type": "short",
          "prompt": "Name the three criteria a substance or method typically must meet at least two of to be banned.",
          "keywords": [
            "performance",
            "health",
            "spirit of sport"
          ],
          "explanation": "Potential to enhance performance, risk to athlete health, and violating the spirit of sport."
        },
        {
          "type": "short",
          "prompt": "Give one practical reason (beyond ethics) for choosing tested, reputable supplement brands.",
          "keywords": [
            "contaminat",
            "banned substance",
            "positive test"
          ],
          "explanation": "Some legitimate supplements have been found contaminated with banned substances, so choosing tested, reputable brands helps avoid an unintentional positive test."
        }
      ],
      "theory": [
        {
          "type": "theory",
          "prompt": "Explain the criteria WADA uses to determine whether a substance or method should be banned, with an example substance and which criteria it meets.",
          "keywordGroups": [
            [
              "performance",
              "enhance"
            ],
            [
              "health",
              "risk"
            ],
            [
              "spirit of sport"
            ],
            [
              "example",
              "epo",
              "steroid"
            ]
          ],
          "minGroups": 3,
          "explanation": "A substance typically needs to meet at least two of three criteria: potential to enhance performance, risk to athlete health, and violating the spirit of sport; EPO, for example, meets both performance and health-risk criteria."
        },
        {
          "type": "theory",
          "prompt": "Discuss how doping is detected and regulated, including the role of the athlete biological passport.",
          "keywordGroups": [
            [
              "urine",
              "blood",
              "testing"
            ],
            [
              "biological passport",
              "longitudinal"
            ],
            [
              "sanction",
              "ban",
              "disqualif"
            ]
          ],
          "minGroups": 2,
          "explanation": "Doping control relies on urine/blood testing plus the athlete biological passport (tracking blood values over time to flag suspicious patterns); violations lead to sanctions from disqualification to lifetime bans."
        },
        {
          "type": "theory",
          "prompt": "Explain the ethical arguments against doping, covering fair competition, athlete health, and broader social effects.",
          "keywordGroups": [
            [
              "fair competition",
              "advantage"
            ],
            [
              "health",
              "risk",
              "long-term"
            ],
            [
              "younger athlete",
              "example",
              "culture"
            ]
          ],
          "minGroups": 2,
          "explanation": "Doping undermines fair competition by giving an unavailable advantage, risks serious athlete health harm, and can pressure a sporting culture and set a poor example for younger athletes."
        }
      ]
    }
  },
  {
    "id": "sn-specific",
    "courseId": "sportnutrition",
    "order": 11,
    "title": "Nutrition for Specific Sports",
    "tagline": "One diet doesn't fit every sport",
    "icon": "sn_specific",
    "lesson": {
      "intro": [
        "Every station so far has covered a nutrient or a principle in general terms, but real athletes don't train generally, they train for a specific sport with its own mix of intensity, duration, and physical demand. This station pulls the energy-systems station and the macronutrient stations together and applies them to three broad sport categories: endurance sports, strength and power sports, and team sports, each of which draws on the three energy systems in a genuinely different proportion."
      ],
      "sections": [
        {
          "heading": "Endurance sports and nutrition",
          "body": [
            "Endurance sports, marathon running, distance cycling, triathlon, swimming, and similar events, rely predominantly on the oxidative energy system over long, sustained efforts. Nutritionally, this translates into a high carbohydrate requirement to keep glycogen stores topped up, moderate protein intake to support the ongoing muscle repair that comes with high training volume, and careful attention to fat as a secondary long-duration fuel source once glycogen availability starts to decline.",
            "Hydration and electrolyte management, covered in depth in an earlier station, matter more here than in almost any other sport category, since endurance events are exactly the setting where both dehydration and hyponatremia are realistic risks over several hours of continuous effort. Carbohydrate intake during the event itself, not just before it, becomes essential once an event runs much beyond about 90 minutes."
          ]
        },
        {
          "heading": "Strength and power sports",
          "body": [
            "Strength and power sports, weightlifting, sprinting, throwing events, and similar, rely predominantly on the phosphagen and glycolytic systems for short, maximal or near-maximal efforts. Nutritionally, protein needs are typically higher here than in endurance sports, since building and repairing muscle tissue is more central to performance improvement in this category, and creatine supplementation (covered in the supplements station) has some of its strongest evidence specifically for this kind of activity.",
            "Carbohydrate needs are still real but proportionally lower than for endurance athletes, since total training volume, while intense, covers less overall time and distance. Recovery nutrition, the post-exercise protein window discussed in the nutrient timing station, carries particular weight for strength athletes given how central muscle repair and adaptation is to their performance goals."
          ]
        },
        {
          "heading": "Team sports",
          "body": [
            "Team sports like football, basketball, and similar field or court sports present a genuinely mixed demand: repeated short bursts of high-intensity effort (sprints, jumps, changes of direction) interspersed with longer periods of lower-intensity movement or rest, across a game that itself can last well over an hour. This intermittent pattern draws on all three energy systems at different points within the same match, unlike endurance or strength sports, which lean more heavily on one or two.",
            "Nutritionally, team-sport athletes typically need a balanced intake across all three macronutrients, moderate-to-high carbohydrate to fuel the repeated high-intensity bursts, adequate protein to support recovery across a long competitive season with frequent matches, and enough fat to support overall hormonal and energy needs. Because match schedules in team sports are often frequent and tightly spaced, nutrient timing and recovery nutrition, more than any single macronutrient target, tend to be the harder practical challenge."
          ]
        }
      ],
      "examples": [
        {
          "title": "A marathon runner's carbohydrate strategy",
          "text": "Requires high carbohydrate intake before the event to maximize glycogen stores, plus ongoing carbohydrate intake during the event itself once it runs beyond about 90 minutes, directly applying the carbohydrate-loading and nutrient-timing principles from earlier stations."
        },
        {
          "title": "A weightlifter's protein and creatine strategy",
          "text": "Prioritizes higher protein intake and creatine supplementation, both aimed at supporting the muscle repair and short-duration power output central to strength-sport performance."
        },
        {
          "title": "A footballer's recovery challenge",
          "text": "Faces a genuinely mixed energy demand across 90 minutes of play, plus a schedule of frequent matches, making recovery nutrition and timing the harder practical problem compared to hitting any single macronutrient target."
        }
      ],
      "whyMatters": [
        "Generic sport nutrition advice, \"eat more protein,\" \"carb-load,\" breaks down quickly once you account for how differently endurance, strength, and team sports actually load the body's three energy systems. Matching nutrition strategy to sport category, rather than applying one-size-fits-all guidance, is what turns the earlier stations' general principles into something an athlete can actually use."
      ],
      "glossary": [
        {
          "term": "Endurance sport",
          "def": "A sport category relying predominantly on the oxidative energy system over long, sustained effort, e.g. marathon running, distance cycling."
        },
        {
          "term": "Strength and power sport",
          "def": "A sport category relying predominantly on the phosphagen and glycolytic systems for short, maximal efforts, e.g. weightlifting, sprinting."
        },
        {
          "term": "Team sport",
          "def": "A sport category with a mixed, intermittent energy demand, combining short high-intensity bursts with longer lower-intensity periods."
        }
      ]
    },
    "parts": [
      {
        "id": "intro",
        "title": "Introduction",
        "cards": [
          {
            "front": "Introduction",
            "back": "Every station so far has covered a nutrient or a principle in general terms, but real athletes don't train generally, they train for a specific sport with its own mix of intensity, duration, and physical demand. This station pulls the energy-systems station and the macronutrient stations together and applies them to three broad sport categories: endurance sports, strength and power sports, and team sports, each of which draws on the three energy systems in a genuinely different proportion."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "What does this station pull together from earlier stations?",
              "options": [
                "The energy systems and macronutrient stations, applied to specific sport categories",
                "Only the supplements station",
                "Only the doping station",
                "Nothing from earlier stations"
              ],
              "answerIndex": 0,
              "explanation": "This station applies the energy systems and macronutrient principles to three broad sport categories."
            },
            {
              "type": "short",
              "prompt": "Name the three broad sport categories covered in this station.",
              "keywords": [
                "endurance",
                "strength",
                "power",
                "team"
              ],
              "explanation": "Endurance sports, strength and power sports, and team sports."
            }
          ]
        }
      },
      {
        "id": "sec0",
        "title": "Endurance sports and nutrition",
        "cards": [
          {
            "front": "Endurance sports and nutrition (1/2)",
            "back": "Endurance sports, marathon running, distance cycling, triathlon, swimming, and similar events, rely predominantly on the oxidative energy system over long, sustained efforts. Nutritionally, this translates into a high carbohydrate requirement to keep glycogen stores topped up, moderate protein intake to support the ongoing muscle repair that comes with high training volume, and careful attention to fat as a secondary long-duration fuel source once glycogen availability starts to decline."
          },
          {
            "front": "Endurance sports and nutrition (2/2)",
            "back": "Hydration and electrolyte management, covered in depth in an earlier station, matter more here than in almost any other sport category, since endurance events are exactly the setting where both dehydration and hyponatremia are realistic risks over several hours of continuous effort. Carbohydrate intake during the event itself, not just before it, becomes essential once an event runs much beyond about 90 minutes."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "What energy system do endurance sports rely on predominantly?",
              "options": [
                "The oxidative system",
                "The phosphagen system",
                "The glycolytic system exclusively",
                "None"
              ],
              "answerIndex": 0,
              "explanation": "Endurance sports rely predominantly on the oxidative system."
            },
            {
              "type": "short",
              "prompt": "Why does hydration/electrolyte management matter more in endurance sports than most other categories?",
              "keywords": [
                "dehydrat",
                "hyponatremia",
                "hours"
              ],
              "explanation": "Endurance events are exactly the setting where both dehydration and hyponatremia are realistic risks over several hours of continuous effort."
            }
          ]
        }
      },
      {
        "id": "sec1",
        "title": "Strength and power sports",
        "cards": [
          {
            "front": "Strength and power sports (1/2)",
            "back": "Strength and power sports, weightlifting, sprinting, throwing events, and similar, rely predominantly on the phosphagen and glycolytic systems for short, maximal or near-maximal efforts. Nutritionally, protein needs are typically higher here than in endurance sports, since building and repairing muscle tissue is more central to performance improvement in this category, and creatine supplementation (covered in the supplements station) has some of its strongest evidence specifically for this kind of activity."
          },
          {
            "front": "Strength and power sports (2/2)",
            "back": "Carbohydrate needs are still real but proportionally lower than for endurance athletes, since total training volume, while intense, covers less overall time and distance. Recovery nutrition, the post-exercise protein window discussed in the nutrient timing station, carries particular weight for strength athletes given how central muscle repair and adaptation is to their performance goals."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "Which energy systems dominate strength and power sports?",
              "options": [
                "The phosphagen and glycolytic systems",
                "The oxidative system exclusively",
                "None of the three systems",
                "Only the phosphagen system"
              ],
              "answerIndex": 0,
              "explanation": "Strength and power sports rely predominantly on the phosphagen and glycolytic systems."
            },
            {
              "type": "short",
              "prompt": "Why does creatine have some of its strongest evidence for strength/power sports specifically?",
              "keywords": [
                "short duration",
                "high intensity",
                "power"
              ],
              "explanation": "Creatine improves short-duration, high-intensity performance, aligning closely with strength/power sport demands."
            }
          ]
        }
      },
      {
        "id": "sec2",
        "title": "Team sports",
        "cards": [
          {
            "front": "Team sports (1/2)",
            "back": "Team sports like football, basketball, and similar field or court sports present a genuinely mixed demand: repeated short bursts of high-intensity effort (sprints, jumps, changes of direction) interspersed with longer periods of lower-intensity movement or rest, across a game that itself can last well over an hour. This intermittent pattern draws on all three energy systems at different points within the same match, unlike endurance or strength sports, which lean more heavily on one or two."
          },
          {
            "front": "Team sports (2/2)",
            "back": "Nutritionally, team-sport athletes typically need a balanced intake across all three macronutrients, moderate-to-high carbohydrate to fuel the repeated high-intensity bursts, adequate protein to support recovery across a long competitive season with frequent matches, and enough fat to support overall hormonal and energy needs. Because match schedules in team sports are often frequent and tightly spaced, nutrient timing and recovery nutrition, more than any single macronutrient target, tend to be the harder practical challenge."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "What makes team sports nutritionally distinct?",
              "options": [
                "A mixed, intermittent demand drawing on all three energy systems within a match",
                "Reliance on only the oxidative system",
                "No need for carbohydrate at all",
                "No need for recovery nutrition"
              ],
              "answerIndex": 0,
              "explanation": "Team sports have a mixed, intermittent demand drawing on all three energy systems within the same match."
            },
            {
              "type": "short",
              "prompt": "What tends to be the harder practical nutrition challenge for team-sport athletes?",
              "keywords": [
                "timing",
                "recovery",
                "frequent",
                "schedule"
              ],
              "explanation": "Nutrient timing and recovery nutrition, given frequent, tightly spaced match schedules."
            }
          ]
        }
      },
      {
        "id": "examples",
        "title": "Real-World Examples",
        "cards": [
          {
            "front": "A marathon runner's carbohydrate strategy",
            "back": "Requires high carbohydrate intake before the event to maximize glycogen stores, plus ongoing carbohydrate intake during the event itself once it runs beyond about 90 minutes, directly applying the carbohydrate-loading and nutrient-timing principles from earlier stations."
          },
          {
            "front": "A weightlifter's protein and creatine strategy",
            "back": "Prioritizes higher protein intake and creatine supplementation, both aimed at supporting the muscle repair and short-duration power output central to strength-sport performance."
          },
          {
            "front": "A footballer's recovery challenge",
            "back": "Faces a genuinely mixed energy demand across 90 minutes of play, plus a schedule of frequent matches, making recovery nutrition and timing the harder practical problem compared to hitting any single macronutrient target."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "What does a marathon runner's carbohydrate strategy typically involve?",
              "options": [
                "High carbohydrate intake before, plus ongoing intake during the event beyond ~90 minutes",
                "Avoiding carbohydrates entirely",
                "Only protein intake before the event",
                "No specific strategy needed"
              ],
              "answerIndex": 0,
              "explanation": "High carbohydrate intake before the event, plus ongoing intake during it once it runs beyond about 90 minutes."
            },
            {
              "type": "short",
              "prompt": "What does a weightlifter's nutrition strategy typically prioritize?",
              "keywords": [
                "protein",
                "creatine"
              ],
              "explanation": "Higher protein intake and creatine supplementation."
            }
          ]
        }
      },
      {
        "id": "wrapup",
        "title": "Why It Matters & Key Terms",
        "cards": [
          {
            "front": "Why This Matters",
            "back": "Generic sport nutrition advice, \"eat more protein,\" \"carb-load,\" breaks down quickly once you account for how differently endurance, strength, and team sports actually load the body's three energy systems. Matching nutrition strategy to sport category, rather than applying one-size-fits-all guidance, is what turns the earlier stations' general principles into something an athlete can actually use."
          },
          {
            "front": "Key Term: Endurance sport",
            "back": "A sport category relying predominantly on the oxidative energy system over long, sustained effort, e.g. marathon running, distance cycling."
          },
          {
            "front": "Key Term: Strength and power sport",
            "back": "A sport category relying predominantly on the phosphagen and glycolytic systems for short, maximal efforts, e.g. weightlifting, sprinting."
          },
          {
            "front": "Key Term: Team sport",
            "back": "A sport category with a mixed, intermittent energy demand, combining short high-intensity bursts with longer lower-intensity periods."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "Why does generic sport nutrition advice break down across sport categories?",
              "options": [
                "Endurance, strength, and team sports load the body's energy systems very differently",
                "All sports have identical energy demands",
                "Generic advice always works regardless of sport",
                "Nutrition doesn't differ meaningfully between sports"
              ],
              "answerIndex": 0,
              "explanation": "Different sport categories load the three energy systems in genuinely different proportions, so generic advice breaks down."
            },
            {
              "type": "short",
              "prompt": "What matters most for team-sport nutrition, per the wrap-up?",
              "keywords": [
                "balanced",
                "timing",
                "recovery"
              ],
              "explanation": "A balanced macronutrient intake, with nutrient timing and recovery nutrition being the harder practical challenge."
            }
          ]
        }
      }
    ],
    "finalExam": {
      "mcq": [
        {
          "type": "mcq",
          "prompt": "Which energy system do endurance sports rely on predominantly?",
          "options": [
            "The oxidative system",
            "The phosphagen system",
            "The glycolytic system exclusively",
            "None of the three systems"
          ],
          "answerIndex": 0,
          "explanation": "Endurance sports rely predominantly on the oxidative system, sustaining long, continuous effort."
        },
        {
          "type": "mcq",
          "prompt": "Why is creatine supplementation particularly well-evidenced for strength and power sports?",
          "options": [
            "It improves short-duration, high-intensity performance central to strength/power activity",
            "It has no real evidence in any sport",
            "It only benefits endurance athletes",
            "It replaces the need for protein entirely"
          ],
          "answerIndex": 0,
          "explanation": "Creatine improves short-duration, high-intensity performance, aligning closely with the demands of strength and power sports."
        },
        {
          "type": "mcq",
          "prompt": "What makes team sports nutritionally distinct from endurance or strength sports?",
          "options": [
            "A mixed, intermittent demand drawing on all three energy systems within the same match",
            "They require no carbohydrate at all",
            "They rely exclusively on the phosphagen system",
            "They have no need for recovery nutrition"
          ],
          "answerIndex": 0,
          "explanation": "Team sports combine short high-intensity bursts with longer lower-intensity periods, drawing on all three energy systems within a single match."
        },
        {
          "type": "short",
          "prompt": "Why does carbohydrate intake during the event itself become essential for endurance athletes once an event runs beyond about 90 minutes?",
          "keywords": [
            "glycogen",
            "deplete",
            "sustain",
            "fatigue"
          ],
          "explanation": "Glycogen stores become progressively depleted the longer the event runs, so ongoing carbohydrate intake during the event helps sustain performance and delay fatigue."
        },
        {
          "type": "short",
          "prompt": "What tends to be the harder practical nutrition challenge for team-sport athletes compared to a single macronutrient target?",
          "keywords": [
            "timing",
            "recovery",
            "frequent",
            "schedule"
          ],
          "explanation": "Because match schedules are often frequent and tightly spaced, nutrient timing and recovery nutrition tend to be the harder practical challenge."
        }
      ],
      "theory": [
        {
          "type": "theory",
          "prompt": "Compare the nutritional priorities of endurance, strength/power, and team sport athletes, linking each to its dominant energy system.",
          "keywordGroups": [
            [
              "endurance",
              "oxidative",
              "carbohydrate",
              "hydration"
            ],
            [
              "strength",
              "power",
              "phosphagen",
              "glycolytic",
              "protein",
              "creatine"
            ],
            [
              "team sport",
              "mixed",
              "intermittent",
              "timing"
            ]
          ],
          "minGroups": 3,
          "explanation": "Endurance athletes (oxidative system) prioritize carbohydrate and hydration; strength/power athletes (phosphagen/glycolytic) prioritize protein and creatine; team-sport athletes face mixed energy demands and prioritize timing/recovery."
        },
        {
          "type": "theory",
          "prompt": "Explain why hydration and electrolyte management are especially critical for endurance athletes specifically, referencing risks covered in an earlier station.",
          "keywordGroups": [
            [
              "dehydration",
              "hours",
              "continuous"
            ],
            [
              "hyponatremia",
              "sodium"
            ],
            [
              "endurance",
              "prolonged"
            ]
          ],
          "minGroups": 2,
          "explanation": "Endurance events involve several hours of continuous effort, making both dehydration and hyponatremia realistic risks, tying back to the minerals and hydration station."
        }
      ]
    }
  },
  {
    "id": "sn-weight",
    "courseId": "sportnutrition",
    "order": 12,
    "title": "Weight Management in Sports",
    "tagline": "Where performance goals and body image collide",
    "icon": "sn_weight",
    "lesson": {
      "intro": [
        "Body weight and body composition matter in many sports, sometimes for genuine performance reasons (power-to-weight ratio in cycling or distance running, weight classes in combat sports), and sometimes for less legitimate aesthetic or cultural pressures that have nothing to do with actual performance. This closing station covers how weight management should be approached safely in an athletic context, and where it goes wrong."
      ],
      "sections": [
        {
          "heading": "Body composition, not just body weight",
          "body": [
            "Body composition refers to the relative proportion of fat mass versus fat-free mass (muscle, bone, water, and organs) that makes up total body weight. Two athletes at the identical body weight can have very different body compositions, and very different performance capacities as a result, which is why sport science generally treats body composition as the more meaningful measure than weight alone. Common methods for estimating it include skinfold measurements, bioelectrical impedance, and more precise laboratory methods like DEXA scanning."
          ]
        },
        {
          "heading": "Safe weight loss strategy",
          "body": [
            "For athletes who do need to lose body fat, a safe rate of loss is generally considered to be around 0.5 to 1kg per week, achieved through a moderate calorie deficit rather than an extreme one. Rapid or extreme weight loss risks losing muscle mass alongside fat, impairing the very performance the athlete is trying to protect, along with more immediate risks like fatigue, poor recovery, and hormonal disruption. Timing also matters, attempting significant weight loss during a heavy competition or training block is generally discouraged, since the calorie deficit competes directly with recovery and performance needs at the worst possible time."
          ]
        },
        {
          "heading": "Safe weight (and muscle) gain strategy",
          "body": [
            "For athletes aiming to gain weight, typically muscle mass rather than fat, a similarly moderate approach applies: a modest calorie surplus combined with adequate protein intake and resistance training, gaining muscle without a training stimulus simply isn't possible regardless of how much is eaten. A gain of roughly 0.25 to 0.5kg per week is a reasonable target for building muscle while minimizing unwanted fat gain alongside it."
          ]
        },
        {
          "heading": "Eating disorders in athletes",
          "body": [
            "Sports with an aesthetic component, weight class, or a perceived performance advantage to leanness, gymnastics, distance running, wrestling, and figure skating among them, carry an elevated risk of disordered eating compared to the general population. This is sometimes referred to under the broader term Relative Energy Deficiency in Sport (RED-S), a condition where an athlete's energy intake is insufficient to support both their training demands and normal body function, leading to consequences well beyond just low body weight: impaired bone health, hormonal disruption, weakened immune function, and reduced performance, the exact opposite of what the athlete is usually trying to achieve by restricting intake.",
            "Warning signs worth taking seriously include an excessive focus on weight or body image disproportionate to actual performance needs, skipping meals or rigid food rules that interfere with normal training or social life, and continued weight loss efforts despite already being at a healthy or low body weight. Because these patterns can be genuinely dangerous and are outside the scope of nutrition advice alone to address, the appropriate response, for a coach, teammate, or the athlete themselves, is to involve qualified medical and mental health professionals rather than trying to manage it through diet adjustments alone."
          ]
        }
      ],
      "examples": [
        {
          "title": "Two athletes, same weight, different composition",
          "text": "Illustrates why sport science favors body composition over body weight alone, identical scale weight can represent very different proportions of muscle versus fat, with very different performance implications."
        },
        {
          "title": "RED-S in a distance runner",
          "text": "A runner restricting intake to stay lean may develop impaired bone health and hormonal disruption despite low body weight, a case where the pursuit of a performance advantage produces the opposite outcome."
        }
      ],
      "whyMatters": [
        "Weight and body composition genuinely affect performance in many sports, which is exactly what makes this area risky, a legitimate performance consideration can tip into disordered eating if it isn't approached carefully and safely. Recognizing the warning signs, and knowing that this specific problem needs professional support rather than a diet adjustment, matters more here than in any other station in this course."
      ],
      "glossary": [
        {
          "term": "Body composition",
          "def": "The relative proportion of fat mass versus fat-free mass (muscle, bone, water, organs) making up total body weight."
        },
        {
          "term": "Relative Energy Deficiency in Sport (RED-S)",
          "def": "A condition where an athlete's energy intake is insufficient to support both training demands and normal body function, causing impaired bone health, hormonal disruption, and reduced performance."
        },
        {
          "term": "DEXA scan",
          "def": "A precise laboratory imaging method used to measure body composition, including fat mass and bone density."
        }
      ]
    },
    "parts": [
      {
        "id": "intro",
        "title": "Introduction",
        "cards": [
          {
            "front": "Introduction",
            "back": "Body weight and body composition matter in many sports, sometimes for genuine performance reasons (power-to-weight ratio in cycling or distance running, weight classes in combat sports), and sometimes for less legitimate aesthetic or cultural pressures that have nothing to do with actual performance. This closing station covers how weight management should be approached safely in an athletic context, and where it goes wrong."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "Why does body weight matter in many sports, per the lesson?",
              "options": [
                "Sometimes for genuine performance reasons, sometimes due to illegitimate aesthetic pressures",
                "Only for cosmetic reasons",
                "It never matters in sport",
                "Only in combat sports"
              ],
              "answerIndex": 0,
              "explanation": "Sometimes for genuine performance reasons (power-to-weight ratio, weight classes), sometimes for illegitimate aesthetic/cultural pressure."
            },
            {
              "type": "short",
              "prompt": "Give an example of a genuine performance reason weight matters in sport.",
              "keywords": [
                "power-to-weight",
                "weight class"
              ],
              "explanation": "Power-to-weight ratio in cycling/distance running, or weight classes in combat sports."
            }
          ]
        }
      },
      {
        "id": "sec0",
        "title": "Body composition, not just body weight",
        "cards": [
          {
            "front": "Body composition, not just body weight",
            "back": "Body composition refers to the relative proportion of fat mass versus fat-free mass (muscle, bone, water, and organs) that makes up total body weight. Two athletes at the identical body weight can have very different body compositions, and very different performance capacities as a result, which is why sport science generally treats body composition as the more meaningful measure than weight alone. Common methods for estimating it include skinfold measurements, bioelectrical impedance, and more precise laboratory methods like DEXA scanning."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "What is body composition?",
              "options": [
                "The relative proportion of fat mass versus fat-free mass making up total body weight",
                "The total number on a scale",
                "A measure of height only",
                "A measure of flexibility"
              ],
              "answerIndex": 0,
              "explanation": "Body composition is the relative proportion of fat mass versus fat-free mass (muscle, bone, water, organs)."
            },
            {
              "type": "short",
              "prompt": "Name a precise laboratory method for measuring body composition.",
              "keywords": [
                "dexa"
              ],
              "explanation": "DEXA scanning."
            }
          ]
        }
      },
      {
        "id": "sec1",
        "title": "Safe weight loss strategy",
        "cards": [
          {
            "front": "Safe weight loss strategy",
            "back": "For athletes who do need to lose body fat, a safe rate of loss is generally considered to be around 0.5 to 1kg per week, achieved through a moderate calorie deficit rather than an extreme one. Rapid or extreme weight loss risks losing muscle mass alongside fat, impairing the very performance the athlete is trying to protect, along with more immediate risks like fatigue, poor recovery, and hormonal disruption. Timing also matters, attempting significant weight loss during a heavy competition or training block is generally discouraged, since the calorie deficit competes directly with recovery and performance needs at the worst possible time."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "What is a generally safe rate of weight loss for athletes?",
              "options": [
                "About 0.5 to 1kg per week",
                "5kg per week",
                "As fast as possible",
                "Rate doesn't matter"
              ],
              "answerIndex": 0,
              "explanation": "About 0.5-1kg per week through a moderate calorie deficit."
            },
            {
              "type": "short",
              "prompt": "Why is attempting significant weight loss during a heavy competition/training block generally discouraged?",
              "keywords": [
                "deficit",
                "compete",
                "recovery",
                "performance"
              ],
              "explanation": "The calorie deficit competes directly with recovery and performance needs at the worst possible time."
            }
          ]
        }
      },
      {
        "id": "sec2",
        "title": "Safe weight (and muscle) gain strategy",
        "cards": [
          {
            "front": "Safe weight (and muscle) gain strategy",
            "back": "For athletes aiming to gain weight, typically muscle mass rather than fat, a similarly moderate approach applies: a modest calorie surplus combined with adequate protein intake and resistance training, gaining muscle without a training stimulus simply isn't possible regardless of how much is eaten. A gain of roughly 0.25 to 0.5kg per week is a reasonable target for building muscle while minimizing unwanted fat gain alongside it."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "What is required, alongside a calorie surplus and protein, to actually gain muscle?",
              "options": [
                "Resistance training",
                "Only rest",
                "Only more sleep",
                "Nothing else is needed"
              ],
              "answerIndex": 0,
              "explanation": "Resistance training is required, gaining muscle without a training stimulus isn't possible regardless of diet."
            },
            {
              "type": "short",
              "prompt": "What is a reasonable weekly weight gain target for building muscle?",
              "keywords": [
                "0.25",
                "0.5",
                "kg"
              ],
              "explanation": "Roughly 0.25 to 0.5kg per week."
            }
          ]
        }
      },
      {
        "id": "sec3",
        "title": "Eating disorders in athletes",
        "cards": [
          {
            "front": "Eating disorders in athletes (1/2)",
            "back": "Sports with an aesthetic component, weight class, or a perceived performance advantage to leanness, gymnastics, distance running, wrestling, and figure skating among them, carry an elevated risk of disordered eating compared to the general population. This is sometimes referred to under the broader term Relative Energy Deficiency in Sport (RED-S), a condition where an athlete's energy intake is insufficient to support both their training demands and normal body function, leading to consequences well beyond just low body weight: impaired bone health, hormonal disruption, weakened immune function, and reduced performance, the exact opposite of what the athlete is usually trying to achieve by restricting intake."
          },
          {
            "front": "Eating disorders in athletes (2/2)",
            "back": "Warning signs worth taking seriously include an excessive focus on weight or body image disproportionate to actual performance needs, skipping meals or rigid food rules that interfere with normal training or social life, and continued weight loss efforts despite already being at a healthy or low body weight. Because these patterns can be genuinely dangerous and are outside the scope of nutrition advice alone to address, the appropriate response, for a coach, teammate, or the athlete themselves, is to involve qualified medical and mental health professionals rather than trying to manage it through diet adjustments alone."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "What is RED-S?",
              "options": [
                "Relative Energy Deficiency in Sport, insufficient energy intake for training and body function",
                "A type of supplement",
                "A training technique",
                "A body composition measurement method"
              ],
              "answerIndex": 0,
              "explanation": "RED-S describes insufficient energy intake to support both training demands and normal body function."
            },
            {
              "type": "short",
              "prompt": "Name two warning signs of disordered eating in an athlete mentioned in the lesson.",
              "keywords": [
                "excessive focus",
                "skip meal",
                "rigid",
                "continued weight loss"
              ],
              "explanation": "Excessive focus on weight/body image, skipping meals or rigid food rules, continued weight loss despite already healthy/low weight."
            }
          ]
        }
      },
      {
        "id": "examples",
        "title": "Real-World Examples",
        "cards": [
          {
            "front": "Two athletes, same weight, different composition",
            "back": "Illustrates why sport science favors body composition over body weight alone, identical scale weight can represent very different proportions of muscle versus fat, with very different performance implications."
          },
          {
            "front": "RED-S in a distance runner",
            "back": "A runner restricting intake to stay lean may develop impaired bone health and hormonal disruption despite low body weight, a case where the pursuit of a performance advantage produces the opposite outcome."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "What does the 'two athletes, same weight' example illustrate?",
              "options": [
                "Identical scale weight can represent very different body compositions and performance implications",
                "Body weight is the only measure that matters",
                "All athletes at the same weight perform identically",
                "Body composition cannot vary at the same weight"
              ],
              "answerIndex": 0,
              "explanation": "It illustrates why body composition, not weight alone, is the more meaningful measure."
            },
            {
              "type": "short",
              "prompt": "What can RED-S cause in a distance runner restricting intake to stay lean?",
              "keywords": [
                "bone",
                "hormonal",
                "disruption"
              ],
              "explanation": "Impaired bone health and hormonal disruption, despite low body weight, the opposite of the intended performance benefit."
            }
          ]
        }
      },
      {
        "id": "wrapup",
        "title": "Why It Matters & Key Terms",
        "cards": [
          {
            "front": "Why This Matters",
            "back": "Weight and body composition genuinely affect performance in many sports, which is exactly what makes this area risky, a legitimate performance consideration can tip into disordered eating if it isn't approached carefully and safely. Recognizing the warning signs, and knowing that this specific problem needs professional support rather than a diet adjustment, matters more here than in any other station in this course."
          },
          {
            "front": "Key Term: Body composition",
            "back": "The relative proportion of fat mass versus fat-free mass (muscle, bone, water, organs) making up total body weight."
          },
          {
            "front": "Key Term: Relative Energy Deficiency in Sport (RED-S)",
            "back": "A condition where an athlete's energy intake is insufficient to support both training demands and normal body function, causing impaired bone health, hormonal disruption, and reduced performance."
          },
          {
            "front": "Key Term: DEXA scan",
            "back": "A precise laboratory imaging method used to measure body composition, including fat mass and bone density."
          }
        ],
        "quiz": {
          "questions": [
            {
              "type": "mcq",
              "prompt": "What is the appropriate response to warning signs of disordered eating, per the lesson?",
              "options": [
                "Involve qualified medical and mental health professionals",
                "Only adjust the athlete's diet plan",
                "Ignore it if performance seems fine",
                "Increase training to compensate"
              ],
              "answerIndex": 0,
              "explanation": "Because these patterns can be genuinely dangerous, the appropriate response is involving qualified medical and mental health professionals."
            },
            {
              "type": "short",
              "prompt": "Why is this station described as riskier than the others in the course?",
              "keywords": [
                "legitimate",
                "tip into",
                "disordered"
              ],
              "explanation": "A legitimate performance consideration around weight can tip into disordered eating if not approached carefully and safely."
            }
          ]
        }
      }
    ],
    "finalExam": {
      "mcq": [
        {
          "type": "mcq",
          "prompt": "Why does sport science generally treat body composition as more meaningful than body weight alone?",
          "options": [
            "Two athletes at identical weight can have very different fat vs. fat-free mass proportions, with different performance implications",
            "Body weight is always a perfect measure of fitness",
            "Body composition cannot actually be measured",
            "Weight and composition are always identical"
          ],
          "answerIndex": 0,
          "explanation": "Two athletes at the same body weight can have very different body compositions and very different performance capacities as a result."
        },
        {
          "type": "mcq",
          "prompt": "What is generally considered a safe rate of weight loss for athletes?",
          "options": [
            "About 0.5 to 1kg per week",
            "5kg per week",
            "As fast as possible before competition",
            "Weight loss rate doesn't matter for athletes"
          ],
          "answerIndex": 0,
          "explanation": "A safe rate of loss is generally around 0.5-1kg per week through a moderate calorie deficit."
        },
        {
          "type": "mcq",
          "prompt": "What is Relative Energy Deficiency in Sport (RED-S)?",
          "options": [
            "A condition where energy intake is insufficient to support both training and normal body function, causing broader health consequences",
            "A supplement used to boost energy",
            "A type of high-intensity training program",
            "A method for measuring body fat percentage"
          ],
          "answerIndex": 0,
          "explanation": "RED-S describes insufficient energy intake to support both training demands and normal body function, leading to impaired bone health, hormonal disruption, and reduced performance."
        },
        {
          "type": "mcq",
          "prompt": "What is the recommended response to warning signs of disordered eating in an athlete?",
          "options": [
            "Involve qualified medical and mental health professionals",
            "Only adjust their diet plan",
            "Ignore it unless performance is affected",
            "Increase training volume to compensate"
          ],
          "answerIndex": 0,
          "explanation": "Because disordered eating patterns can be genuinely dangerous and go beyond nutrition alone, the appropriate response is involving qualified medical and mental health professionals."
        },
        {
          "type": "short",
          "prompt": "Why is rapid or extreme weight loss risky for athletes specifically?",
          "keywords": [
            "muscle",
            "loss",
            "fatigue",
            "recovery",
            "hormon"
          ],
          "explanation": "Rapid or extreme weight loss risks losing muscle mass alongside fat, along with fatigue, poor recovery, and hormonal disruption, undermining the performance the athlete is trying to protect."
        },
        {
          "type": "short",
          "prompt": "Name two sports mentioned as carrying elevated risk of disordered eating, and explain why.",
          "keywords": [
            "gymnastics",
            "distance running",
            "wrestling",
            "figure skating",
            "aesthetic",
            "weight class",
            "lean"
          ],
          "explanation": "Sports with an aesthetic component, a weight class, or a perceived performance advantage to leanness (gymnastics, distance running, wrestling, figure skating) carry elevated risk."
        }
      ],
      "theory": [
        {
          "type": "theory",
          "prompt": "Explain why body composition is a more meaningful measure than body weight alone, and describe safe rates of weight loss and gain for athletes.",
          "keywordGroups": [
            [
              "body composition",
              "fat mass",
              "fat-free"
            ],
            [
              "weight loss",
              "0.5",
              "1kg"
            ],
            [
              "weight gain",
              "0.25",
              "0.5kg",
              "resistance training"
            ]
          ],
          "minGroups": 2,
          "explanation": "Body composition captures fat vs fat-free mass, which weight alone can't; safe loss is ~0.5-1kg/week via moderate deficit, safe gain is ~0.25-0.5kg/week with adequate protein and resistance training."
        },
        {
          "type": "theory",
          "prompt": "Discuss Relative Energy Deficiency in Sport (RED-S), including which athletes are at elevated risk and its broader health consequences.",
          "keywordGroups": [
            [
              "red-s",
              "energy deficiency",
              "insufficient"
            ],
            [
              "gymnastics",
              "distance running",
              "wrestling",
              "aesthetic",
              "weight class"
            ],
            [
              "bone health",
              "hormonal",
              "immune",
              "performance"
            ]
          ],
          "minGroups": 3,
          "explanation": "RED-S is insufficient energy intake to support training and body function; athletes in aesthetic, weight-class, or leanness-advantage sports are at elevated risk; consequences include impaired bone health, hormonal disruption, weakened immunity, and reduced performance."
        },
        {
          "type": "theory",
          "prompt": "Explain why weight management is described as riskier to approach than other topics in this course, and what the appropriate response is to warning signs of disordered eating.",
          "keywordGroups": [
            [
              "legitimate",
              "performance",
              "tip into",
              "disordered"
            ],
            [
              "warning sign",
              "excessive focus",
              "rigid"
            ],
            [
              "medical",
              "mental health",
              "professional"
            ]
          ],
          "minGroups": 2,
          "explanation": "A legitimate performance consideration around weight can tip into disordered eating if not handled carefully; the appropriate response to warning signs is involving qualified medical and mental health professionals rather than adjusting diet alone."
        }
      ]
    }
  }
];

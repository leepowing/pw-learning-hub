import type { Lesson, WritingTask } from "@/lib/englishWriting/types";

export const COURSE_VERSION = "y8-writing-foundations-2026-10-19-v1";
export const lessons: Lesson[] = [
  {
    week: 1, title: "Make every sentence clear", subtitle: "Sentence boundaries, full stops and a steady tense",
    skills: ["sentence-control", "tense", "proofreading"],
    goals: ["Separate complete ideas with suitable punctuation.", "Keep a clear past or present tense.", "Use a short sentence deliberately."],
    teaching: [
      { title: "Find the complete idea", text: "A complete sentence normally has a subject and a verb and makes sense on its own: The corridor smelled of paint. In this lesson, practise complete sentences before experimenting with deliberate fragments." },
      { title: "Give ideas a boundary", text: "Do not join two complete sentences with just a comma. Write The bell rang. Nobody moved. Or join the ideas: The bell rang, but nobody moved. Choose the connection that matches your meaning." },
      { title: "Choose your time", text: "For a past-tense scene, use walked, noticed and heard consistently. Change time only when you mean to. Read each verb during your final check." },
      { title: "Control the pace", text: "A longer sentence can develop a detail. A short complete sentence can draw attention to a moment: Then the handle turned. Sentence length should serve the scene." },
    ],
    before: "I entered the room, it was empty and the window is open I hear something outside.",
    after: "I entered the room. It was empty, and the window was open. Beyond the glass, something scraped against the wall.",
    commentary: "Full stops separate the ideas. Was and scraped keep the scene in the past. The final sentence gives the reader one sound to focus on.",
    vocabulary: [
      { word: "hesitated", meaning: "paused before acting because of uncertainty", example: "I hesitated beside the unfamiliar door." },
      { word: "scraped", meaning: "rubbed against a surface with a rough sound", example: "A branch scraped against the glass." },
      { word: "faint", meaning: "difficult to hear or see clearly", example: "A faint hum came from the cupboard." },
    ],
    checks: [
      { question: "Which version gives two complete ideas a correct boundary?", options: ["The door opened, I stepped inside.", "The door opened. I stepped inside.", "The door opened I stepped inside."], answer: 1, explanation: "Both ideas can stand alone, so a full stop works. A conjunction could also connect them." },
      { question: "Which sentence stays in the past tense?", options: ["I looked up and hear a noise.", "I look up and heard a noise.", "I looked up and heard a noise."], answer: 2, explanation: "Looked and heard both place the actions in the past." },
      { question: "Why might a writer use 'Nobody answered.' after a longer sentence?", options: ["To focus attention on the silence.", "Because every paragraph must end with a short sentence.", "To guarantee extra marks."], answer: 0, explanation: "The short sentence can make the silence stand out. There is no compulsory sentence pattern." },
    ],
    microPrompt: "Rewrite these ideas as three or four clear past-tense sentences: I reach the unfamiliar classroom, the lights were off a chair moves near the window I stop.",
    microExample: "I reached the unfamiliar classroom. The lights were off. Near the window, a chair moved. I stopped.",
    checklist: ["Can I locate the end of each complete idea?", "Have I joined any complete sentences with only a comma?", "Do my verbs keep a clear tense?"],
    mainTaskId: "week-1-classroom", transferTaskId: "transfer-1-hall",
  },
  {
    week: 2, title: "Turn an opinion into a reasoned paragraph", subtitle: "A clear viewpoint, explanation and a relevant example",
    skills: ["development", "audience", "sentence-control"],
    goals: ["State a clear viewpoint.", "Explain why a reason matters.", "Use an example and explain its link to the argument."],
    teaching: [
      { title: "Answer the actual question", text: "Decide what you want the reader to believe. A clear viewpoint can support, oppose or qualify the statement. Keep returning to the issue rather than listing unrelated complaints." },
      { title: "Follow the reason", text: "After making a claim, ask why and what the result would be. Homework can support learning because short practice helps pupils recall a method. Explain the connection instead of repeating the claim." },
      { title: "Make the example useful", text: "Give a specific situation that helps the reader understand. Then explain what it shows. A hypothetical example is fine if it is clearly presented as an example; do not invent surveys or present made-up statistics as facts." },
      { title: "Write for your reader", text: "A school-magazine article can sound lively and thoughtful. Respect readers who disagree. Choose a title, an opening that introduces the issue and paragraphs that develop related ideas." },
    ],
    before: "Homework is bad. It takes time. Pupils do not like it. It should stop.",
    after: "Homework should be short and purposeful. After a full school day, pupils need time to rest, yet a brief task can help them remember a new method. For example, five carefully chosen maths questions could reveal a misunderstanding without taking the whole evening. The quality of the task matters more than its length.",
    commentary: "The viewpoint is qualified. The writer explains a consequence, gives a clearly hypothetical example and connects it to the main argument.",
    vocabulary: [
      { word: "purposeful", meaning: "designed to achieve a useful aim", example: "Practice should be purposeful." },
      { word: "manageable", meaning: "possible to deal with successfully", example: "A manageable task leaves time for rest." },
      { word: "therefore", meaning: "for that reason", example: "The task repeats yesterday's work; therefore, its purpose needs explaining." },
    ],
    checks: [
      { question: "Which sentence explains rather than repeats the opinion?", options: ["Breaks should be longer because longer breaks are better.", "Longer breaks are good. They are really good.", "A longer break would give pupils time to eat without rushing, helping them return ready to learn."], answer: 2, explanation: "The sentence explains a consequence and links it to learning." },
      { question: "Which example is presented honestly?", options: ["For example, a pupil might need ten minutes to queue for lunch.", "A recent survey proves that 97% agree, although I have no source.", "Everyone always misses lunch."], answer: 0, explanation: "Might makes it clear that this is an illustrative situation." },
      { question: "What should follow a useful example?", options: ["An unrelated point.", "An explanation of how it supports the viewpoint.", "The same example repeated."], answer: 1, explanation: "Explain the link so the reader can follow the argument." },
    ],
    microPrompt: "Write four or five connected sentences arguing for or against a longer lunch break. Include a reason, a specific example and an explanation of what the example shows.",
    microExample: "A slightly longer lunch break could help pupils return to lessons ready to learn. Queuing and eating can leave little time to relax. For example, a pupil who spends much of the break waiting for food might have to rush the meal. A few extra minutes would make the afternoon feel less hurried.",
    checklist: ["Is my viewpoint clear?", "Have I explained why my reason matters?", "Does my example support this reason?", "Have I avoided invented facts?"],
    mainTaskId: "week-2-homework", transferTaskId: "transfer-2-breaks",
  },
  {
    week: 3, title: "Choose details that create a scene", subtitle: "Precise verbs, sensory detail and a clear focus",
    skills: ["word-choice", "description", "organisation"],
    goals: ["Replace vague words with accurate choices.", "Select details that work together to create a mood.", "Move the reader's attention in a deliberate order."],
    teaching: [
      { title: "Choose a precise verb", text: "Walked, shuffled and strode suggest different movements. Choose the word that fits what you mean. An unfamiliar word is useful only when it is accurate and natural in the sentence." },
      { title: "Select, rather than list", text: "A description does not need every sense. Two or three connected details can suggest an empty playground: a swinging gate, a single shoe print, a whistle heard far away. Decide which mood you want to create." },
      { title: "Move the focus", text: "Begin with a wider view, move to a detail and then let something change. This is one possible structure, not a compulsory formula. Keep the reader able to picture where things are." },
      { title: "Make comparisons earn their place", text: "A comparison should clarify a detail or strengthen the atmosphere. Remove one if it distracts from the scene. You do not need a simile, metaphor or personification in every paragraph." },
    ],
    before: "The playground was very empty. The wind was very strong. There was a gate and it was noisy.",
    after: "Beyond the classrooms, the playground lay deserted. Wind dragged a crisp packet across the painted lines. At the far fence, a loose gate tapped its metal post, paused, then tapped again.",
    commentary: "Dragged and tapped are precise. The details suggest emptiness without repeatedly naming it. The focus moves from the whole playground towards one small sound.",
    vocabulary: [
      { word: "deserted", meaning: "empty of people", example: "The playground was deserted." },
      { word: "drifted", meaning: "moved slowly and gently", example: "A scrap of paper drifted beneath the bench." },
      { word: "rattled", meaning: "made a quick series of short knocking sounds", example: "The loose sign rattled in the wind." },
    ],
    checks: [
      { question: "Which verb best suggests slow, uncertain movement?", options: ["Marched", "Hesitated", "Shuffled"], answer: 2, explanation: "Shuffled describes slow steps. Hesitated describes pausing, rather than the movement itself." },
      { question: "Which pair of details most strongly suggests an empty playground?", options: ["An abandoned ball and a gate knocking in the wind.", "Cheering spectators and a crowded bench.", "A red door and a blue bag, with no other context."], answer: 0, explanation: "The abandoned object and isolated sound work together to suggest absence." },
      { question: "When should you keep a comparison?", options: ["Whenever it contains a difficult word.", "When it makes the detail clearer or supports the intended effect.", "Only when you already have three other techniques."], answer: 1, explanation: "Judge the effect and suitability, not the number of techniques." },
    ],
    microPrompt: "Describe an empty bus shelter in four to six sentences. Choose a mood, use two precise verbs and connect two or three sensory details. You do not need to use all five senses.",
    microExample: "Rain gathered along the roof of the empty shelter. A timetable curled away from the glass. Each passing car lifted a sheet of water from the road, then left the bench in silence again.",
    checklist: ["Do my words mean exactly what I intend?", "Do the details support a clear mood?", "Can the reader follow the movement of my attention?", "Have I removed any distracting comparison?"],
    mainTaskId: "week-3-playground", transferTaskId: "transfer-3-station",
  },
  {
    week: 4, title: "Build an argument the reader can follow", subtitle: "Connected paragraphs, useful examples and a purposeful ending",
    skills: ["development", "organisation", "audience", "proofreading"],
    goals: ["Develop two different, relevant reasons.", "Connect paragraphs through ideas.", "End by drawing the argument together."],
    teaching: [
      { title: "Plan the route", text: "Decide your viewpoint and choose two reasons that do different jobs. For a longer break, one reason could concern eating; another could concern physical activity. Decide which order will help the reader follow." },
      { title: "Give each paragraph a job", text: "Introduce an idea, explain it, use a relevant example when helpful and show why it supports your view. This is a planning aid. You can vary the order and length when the meaning remains clear." },
      { title: "Connect the meaning", text: "Transitions should show a real connection: contrast, addition, cause or consequence. Beyond giving pupils time to eat introduces a further reason more precisely than adding Furthermore to an unrelated point." },
      { title: "Finish with purpose", text: "Draw together the most important reasons and leave the reader with a clear judgement or sensible action. Avoid introducing a completely new argument in the final sentence. Check full stops, agreement and the words you personally tend to misspell." },
    ],
    before: "Breaks should be longer. Pupils need food. Also sport is good. Furthermore there are queues. In conclusion breaks are good.",
    after: "A slightly longer break would give pupils time to eat without hurrying. A pupil who has queued for lunch should still have time to finish the meal comfortably.\n\nBeyond giving pupils time to eat, the change could make room for movement. Even a short walk with friends could offer a welcome pause after sitting in class.\n\nThe school should trial a modest extension and ask pupils and staff whether afternoons improve.",
    commentary: "Each paragraph develops a different reason. The second opening connects to the first idea. The ending proposes a modest action that follows from the argument.",
    vocabulary: [
      { word: "consequence", meaning: "a result of an action or situation", example: "Explain a likely consequence of the change." },
      { word: "modest", meaning: "limited or fairly small", example: "A modest extension may be practical." },
      { word: "trial", meaning: "test an idea for a limited time", example: "The school could trial the new arrangement." },
    ],
    checks: [
      { question: "Which pair offers two genuinely different reasons for a longer break?", options: ["More eating time; less rushed eating.", "Enough time to eat; a chance to move after sitting.", "Long breaks are good; short breaks are bad."], answer: 1, explanation: "Eating and movement are distinct reasons. Each can be developed." },
      { question: "What makes a useful transition?", options: ["It accurately shows how the ideas connect.", "It is the longest word available.", "It starts every paragraph with the same phrase."], answer: 0, explanation: "Choose the connection after you know what the ideas are doing." },
      { question: "Which ending follows from an argument for longer breaks?", options: ["Another issue is the cost of school uniform.", "Here is a completely new reason with no explanation.", "The school could test a small extension and review its effects."], answer: 2, explanation: "The proposed action grows from the argument." },
    ],
    microPrompt: "Plan three short paragraphs about whether a school should provide more outdoor seating. Give each paragraph a clear job, then write one connecting sentence between the two main reasons.",
    microExample: "Paragraph 1: viewpoint and shelter from wet grass. Paragraph 2: a place for quiet conversations. Paragraph 3: a practical proposal. Connection: As well as providing a dry place to sit, outdoor benches could give pupils a calmer space to talk.",
    checklist: ["Do my reasons do different jobs?", "Have I developed each reason?", "Do the paragraphs connect through meaning?", "Does the ending follow from my argument?", "Have I checked sentence boundaries and common errors?"],
    mainTaskId: "week-4-breaks", transferTaskId: "transfer-4-seating",
  },
];

export const writingTasks: WritingTask[] = [
  { id: "baseline-creative", title: "Starting point: before the storm", week: 0, kind: "baseline", paper: 1, form: "description", audience: "readers of a young writers' collection", purpose: "create an atmosphere", prompt: "Describe a place just before a storm. You may choose a real or imagined place.", minutes: 20, suggestedWords: "About 150–250 words if manageable", skills: ["sentence-control", "tense", "word-choice", "description", "organisation"], planPrompts: ["Optional: note the place and one change you want the reader to notice."] },
  { id: "baseline-viewpoint", title: "Starting point: choosing homework", week: 0, kind: "baseline", paper: 2, form: "article", audience: "readers of your school magazine", purpose: "argue a viewpoint", prompt: "'Pupils should have more choice over their homework.' Write an article for your school magazine in which you argue your point of view.", minutes: 20, suggestedWords: "About 150–250 words if manageable", skills: ["sentence-control", "development", "organisation", "audience"], planPrompts: ["Optional: note your viewpoint and the reasons you want to explore."] },
  { id: "week-1-classroom", title: "An unfamiliar classroom", week: 1, kind: "practice", paper: 1, form: "description", audience: "readers of a young writers' collection", purpose: "help the reader picture an unfamiliar room", prompt: "Describe an unfamiliar classroom as someone enters it for the first time. Focus on clear sentences and a consistent tense.", minutes: 20, suggestedWords: "About 100–150 words", skills: lessons[0].skills, planPrompts: ["Which tense will you use?", "What three details will the reader notice?", "Where might a short sentence help?"] },
  { id: "transfer-1-hall", title: "Try it again: an empty hall", week: 1, kind: "transfer", paper: 1, form: "description", audience: "readers of a young writers' collection", purpose: "create a clear scene", prompt: "Describe an empty hall just before an event begins. Work independently and apply what you remember about sentence boundaries and tense.", minutes: 15, suggestedWords: "About 100–150 words", skills: lessons[0].skills, planPrompts: ["Make your own brief plan without looking at an old answer."] },
  { id: "week-2-homework", title: "Should homework be optional?", week: 2, kind: "practice", paper: 2, form: "article", audience: "readers of your school magazine", purpose: "argue a viewpoint", prompt: "'Homework should be optional.' Write a short article for your school magazine arguing your point of view. Develop a reason with a useful example.", minutes: 20, suggestedWords: "About 120–180 words", skills: lessons[1].skills, planPrompts: ["What is your viewpoint?", "Why does your main reason matter?", "What specific example could help the reader?", "What does that example show?"] },
  { id: "transfer-2-breaks", title: "Try it again: a longer break", week: 2, kind: "transfer", paper: 2, form: "article", audience: "readers of your school magazine", purpose: "argue a viewpoint", prompt: "'The school day should include a longer lunch break.' Write a short article for your school magazine arguing your point of view. Develop your reasoning independently.", minutes: 15, suggestedWords: "About 120–180 words", skills: lessons[1].skills, planPrompts: ["Make your own brief plan without opening your previous article."] },
  { id: "week-3-playground", title: "The playground after everyone has left", week: 3, kind: "practice", paper: 1, form: "description", audience: "readers of a young writers' collection", purpose: "create a chosen mood", prompt: "Describe a playground after everyone has left. Select precise words and details that work together to create a mood.", minutes: 20, suggestedWords: "About 120–180 words", skills: lessons[2].skills, planPrompts: ["Which mood do you want to create?", "Which two or three details support it?", "How will the focus move?", "Which verbs need particular care?"] },
  { id: "transfer-3-station", title: "Try it again: the last bus", week: 3, kind: "transfer", paper: 1, form: "description", audience: "readers of a young writers' collection", purpose: "create an atmosphere", prompt: "Describe a small bus station after the last bus has departed. Choose your own mood, precise verbs and connected details.", minutes: 15, suggestedWords: "About 120–180 words", skills: lessons[2].skills, planPrompts: ["Make a fresh plan without copying the playground example."] },
  { id: "week-4-breaks", title: "Time for a better break?", week: 4, kind: "practice", paper: 2, form: "article", audience: "readers of your school magazine", purpose: "argue a viewpoint", prompt: "'School breaks should be longer, even if lessons have to finish later.' Write an article for your school magazine arguing your point of view. Develop two connected reasons and a purposeful ending.", minutes: 25, suggestedWords: "About 180–250 words", skills: lessons[3].skills, planPrompts: ["What is your response to the whole statement?", "What different job will each main paragraph do?", "How do the reasons connect?", "What judgement or action will your ending offer?"] },
  { id: "transfer-4-seating", title: "Try it again: outdoor seating", week: 4, kind: "transfer", paper: 2, form: "letter", audience: "your headteacher", purpose: "argue a viewpoint respectfully", prompt: "'Our school should spend more money on outdoor seating.' Write a letter to your headteacher arguing your point of view. Develop your reasons and end purposefully.", minutes: 20, suggestedWords: "About 180–250 words", skills: lessons[3].skills, planPrompts: ["Plan independently. Consider the change in reader and form."] },
  { id: "aqa-creative", title: "AQA-style practice: the closed gates", week: 0, kind: "aqa", paper: 1, form: "story opening", audience: "readers of a young writers' anthology", purpose: "engage readers with a story opening", prompt: "A young writers' anthology is inviting entries. Write the opening of a story about someone arriving at a place whose gates are closed.", minutes: 45, suggestedWords: "Develop a sustained response; there is no fixed word target", skills: ["sentence-control", "tense", "word-choice", "description", "organisation", "audience"], planPrompts: ["Plan your response independently. Leave time to check it."] },
  { id: "aqa-viewpoint", title: "AQA-style practice: time outdoors", week: 0, kind: "aqa", paper: 2, form: "speech", audience: "pupils and staff at a school meeting", purpose: "argue a viewpoint", prompt: "'Schools should make time for outdoor activities every day, even if this means less classroom time.' Write a speech for a school meeting in which you argue your point of view on this statement.", minutes: 45, suggestedWords: "Develop a sustained response; there is no fixed word target", skills: ["sentence-control", "tense", "word-choice", "development", "organisation", "audience"], planPrompts: ["Plan your response independently. Leave time to check it."] },
];
export function getWritingTask(id: string) { return writingTasks.find(task => task.id === id); }
export function getWritingLesson(week: number) { return lessons.find(lesson => lesson.week === week); }

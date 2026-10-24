window.__ModuleLoader__.load({
  id: "dsh-typing-studio",
  factory(require) {
    "use strict";

    const React = require("react");
    const h = React.createElement;

    const NS = "typing-studio";
    const MAIN_ID = "typing-studio";
    const HISTORY_KEY = "dsh.typing-studio.history.v1";
    const PREFS_KEY = "dsh.typing-studio.prefs.v1";
    const CUSTOM_KEY = "dsh.typing-studio.custom.v1";
    const CUSTOM_LIMIT = 50;
    const CUSTOM_BYTES = 200 * 1024;
    const CUSTOM_TEXT_MAX = 2000;
    const HISTORY_LIMIT = 16;
    const LANGUAGES = ["zh", "en"];
    const DURATIONS = [30, 60, 120];
    const TOPICS = ["all", "daily", "tech", "culture", "custom"];

    const PASSAGES = {
      zh: [
        {
          id: "zh-daily-1",
          topic: "daily",
          title: "清晨的便利店",
          text: "清晨六点半，街角的便利店刚亮起灯。店员把新煮的茶叶蛋摆到收银台边，门口的风铃被推门的人撞得轻轻作响。公交站台下，穿校服的女孩一边背单词，一边用手心暖着耳机。城市还没有完全醒来，却已经有人把生活安排得井井有条。我喜欢在这样的时刻出门，买一杯热豆浆，看阳光慢慢爬上玻璃窗。那些看似普通的早晨，其实藏着许多不动声色的努力。每一个准时抵达的人，都在替自己的明天铺路。日子不会因为匆忙而变短，认真却能让它变得清晰。"
        },
        {
          id: "zh-daily-2",
          topic: "daily",
          title: "雨后的旧书店",
          text: "午后的雨刚停，楼下那家旧书店把门板卸下来，让潮湿的风吹进屋子。书页带着纸张和灰尘混合的味道，像一段被遗忘的时光。老板坐在窗边修一本掉了封面的诗集，动作很慢，却很稳。我在最底层的书架上找到一本很旧的旅行笔记，扉页写着：愿你走过的路，都成为抬头时能看见的星光。我没有买下它，只在原地读完了那一页。离开时，天边露出一点蓝色，积水里倒映着屋檐和云。原来有些相遇不需要带走什么，它只要在某个下午，安静地提醒你：世界仍然值得期待。"
        },
        {
          id: "zh-tech-1",
          topic: "tech",
          title: "给未来的一封信",
          text: "如果给十年后的自己写一封信，你会写些什么？也许可以告诉那个更成熟的人，今天的你正在学习一项新技能，常常出错，也常常想要放弃；但你还是会打开电脑，把练习往前推进一点点。技术更新得很快，真正可靠的能力却往往来自反复的练习：理解问题，拆解步骤，验证结果，再从失败里找出下一次的线索。不要害怕工具变得更聪明，因为好奇心、耐心和判断力，始终属于愿意思考的人。写信的意义，不是预测未来，而是记住此刻为什么出发。等那封信被拆开时，希望你还保有今天这份笨拙而坚定的勇气。"
        },
        {
          id: "zh-tech-2",
          topic: "tech",
          title: "屏幕背后的城市",
          text: "我们每天在屏幕之间穿梭：早晨查天气，中午点一份外卖，深夜用地图寻找回家的路。那些看似安静的应用，背后是一整套不停运行的系统。数据在机房之间流动，算法在一瞬间完成排序，工程师则为了一次微小的延迟反复排查日志。技术并不神秘，它只是被拆成许多清楚的小问题，再逐一解决。真正困难的，是在效率之外记住人的感受：按钮是否好找，提示是否友善，出错时有没有人愿意解释。城市因为这些看不见的工作而变得顺畅，而当有人俯身倾听，冷冰冰的代码才真正有了温度。"
        },
        {
          id: "zh-culture-1",
          topic: "culture",
          title: "一碗面的时间",
          text: "北方人习惯用一碗面开启一天。和面、醒面、擀面，每一步都急不得。水开之后，面条下锅，翻两个身就熟；浇上刚炒好的番茄鸡蛋，热气立刻把窗子蒙白。长辈常说，吃饭要慢一点，话也要慢一点。年轻时我不懂，总觉得时间不够用。后来才发现，很多重要的事情，恰恰是在饭桌上被说清楚的：谁最近遇到了困难，谁又悄悄完成了一件小愿望。一碗面的时间不长，却足够让一家人重新对上线。所谓烟火气，大概就是有人记得你的口味，也愿意为你多等一会儿。"
        },
        {
          id: "zh-culture-2",
          topic: "culture",
          title: "巷口的修伞匠",
          text: "巷口有一间很小的铺子，门楣上挂着几把颜色褪尽的伞。修伞的老人总是戴着眼镜，把细长的伞骨一根根理顺。有人问他，如今伞坏了就换新的，为什么还要修？他抬头笑了笑：东西用久了，总有些舍不得。说话间，他挑出与原样相近的线，把最后一处裂口缝好，又撑开伞面转了一圈。阳光透过补过的地方，落下浅浅的影子。我们都在快速向前的时代里生活，习惯把旧物和旧事留在身后。但总有人愿意慢下来，替一把旧伞续上几年的风雨，也替匆忙的路人守住一点耐心。"
        }
      ],
      en: [
        {
          id: "en-daily-1",
          topic: "daily",
          title: "The Quiet Before the City",
          text: "At half past six in the morning, the city is still soft around the edges. A bakery on the corner has just switched on its lights, and the first tray of bread is resting on the counter, filling the street with a warmth that feels almost personal. Buses pass with their windows dark, carrying people who stare at their phones or close their eyes for one more minute of sleep. A woman in running shoes stops at the crosswalk, checks her watch, and decides to take the longer path around the park. Nothing about this scene is remarkable, and that is exactly what makes it worth noticing. Most of our lives are built from mornings like this one: ordinary, repeatable, and quietly generous. We wake up, choose a direction, and start again. The light does not arrive all at once. It slips between buildings, touches the tops of the trees, and finally settles on the pavement. By then, the city is fully awake. But for a few minutes, there was room enough to breathe, and a chance to remember that every day begins before anyone has decided how it will go."
        },
        {
          id: "en-daily-2",
          topic: "daily",
          title: "A Table for Two",
          text: "On Sunday afternoons, my grandmother used to set the table long before dinner. She would smooth the cloth with both hands, place two cups where the light fell best, and put a small dish of salted peanuts between them. No one had arrived yet. She simply liked the table to look as if good company were already on the way. I did not understand this habit when I was young. It seemed like an unnecessary amount of work. Now I think it was her way of making time visible. A table set early is a small promise: someone will sit here, someone will talk, and the day will not pass without a little warmth in it. We live in a world that rewards speed, and there is nothing wrong with moving quickly. But some of the best moments happen while we are waiting: water coming to a boil, a friend running late, the sound of rain beginning on the roof. Those minutes are not empty. They are the table being set for something we cannot quite name yet."
        },
        {
          id: "en-tech-1",
          topic: "tech",
          title: "The Invisible Architecture",
          text: "Every morning, we move through systems we never see. We unlock a phone, check the weather, send a message, and join a call, rarely pausing to think about the number of decisions that had to be made before any of it could work. Behind a single search box sits a long chain of coordination: power, networks, data centers, software, and people who wake up early to make sure the chain holds. The most useful technology tends to disappear. It asks for less attention, not more. A good tool does not demand that we admire it; it simply helps us finish the thought we were already having. That is harder to build than it looks. It requires engineers to think about failure, designers to think about confusion, and writers to think about the person reading the instructions at midnight. The result feels effortless only because someone removed the friction on purpose. The next time something works on the first try, it is worth a moment of appreciation. Somewhere, a person chose to make your day slightly easier, and that choice is a kind of architecture too."
        },
        {
          id: "en-tech-2",
          topic: "tech",
          title: "Learning in Public",
          text: "We often imagine learning as a private room: the door closed, the desk tidy, the learner waiting until everything is understood before speaking. In practice, the best learning happens in public. We ask a question that reveals how little we know. We share a draft that is not finished. We try to explain an idea and discover, halfway through the sentence, that we have not understood it at all. These moments feel uncomfortable, which is precisely why they are useful. A mistake made in front of others becomes a landmark: we remember it, adjust, and move on with a better map. The same is true of software. A system tested only in perfect conditions is not ready for the real world. It needs users, odd inputs, and honest feedback. Of course, not every mistake should be broadcast. Trust matters, and so does context. But the fear of looking foolish keeps far more people from improving than any lack of talent ever could. The next time you do not know the answer, say so, then go find it. That small act of honesty is not a detour from learning. It is the road itself."
        },
        {
          id: "en-culture-1",
          topic: "culture",
          title: "The Museum of Small Things",
          text: "At the edge of our town, there was a museum with only one room. The building used to be a post office, and it still had the old wooden counter and a clock that ran three minutes late. Inside, the displays were modest: a handwritten recipe, a ticket from a ferry that no longer operated, a child's drawing of a house with too many windows. Each object came with a short note explaining who had kept it and why. None of them would be considered valuable by an auction house. That was the point. The museum was not trying to tell the story of important people. It was collecting the evidence of ordinary lives: a summer job, a first apartment, a song learned by heart. Walking through that room felt like listening to a town remember itself. We tend to believe that history belongs to monuments and famous names. But most of it lives in kitchen drawers and cardboard boxes. A receipt can hold a marriage, a bus ticket can hold a departure, and a recipe can hold a person's voice for another generation. Perhaps every family is a small museum. We are simply not always sure which objects to keep."
        },
        {
          id: "en-culture-2",
          topic: "culture",
          title: "A Letter Arrives",
          text: "Once a month, my neighbor receives a letter from a friend who lives by the sea. It is always handwritten, as far as I can tell. She opens the envelope at the kitchen table, reads it twice, and then leaves it near the fruit bowl, where the morning light can reach it. I asked her once why she did not simply call. She said that a phone call is a conversation with the person who is present, while a letter is a conversation with the person they were when they wrote it. The words have time to settle. A pause is not awkward; it becomes white space. I have thought about that answer many times since. Most of the messages we send are designed to disappear quickly. They arrive, they are answered, and they are gone. There is nothing wrong with that; speed has its own kindness. But some thoughts need a slower road. They need to be chosen, written down, folded, and carried across a distance. When the letter finally arrives, it says something more than its contents. It says: you were worth the wait."
        }
      ]
    };

    // Pinyin guides for the Chinese passages. Readings generated with pypinyin
    // and reviewed for polyphones and structural particles.
    const PINYIN = {
      "zh-daily-1": "qīng chén liù diǎn bàn jiē jiǎo de biàn lì diàn gāng liàng qǐ dēng diàn yuán bǎ xīn zhǔ de chá yè dàn bǎi dào shōu yín tái biān mén kǒu de fēng líng bèi tuī mén de rén zhuàng de qīng qīng zuò xiǎng gōng jiāo zhàn tái xià chuān xiào fú de nǚ hái yī biān bèi dān cí yī biān yòng shǒu xīn nuǎn zhe ěr jī chéng shì hái méi yǒu wán quán xǐng lái què yǐ jīng yǒu rén bǎ shēng huó ān pái de jǐng jǐng yǒu tiáo wǒ xǐ huan zài zhè yàng de shí kè chū mén mǎi yī bēi rè dòu jiāng kàn yáng guāng màn màn pá shàng bō li chuāng nà xiē kàn sì pǔ tōng de zǎo chén qí shí cáng zhe xǔ duō bù dòng shēng sè de nǔ lì měi yí gè zhǔn shí dǐ dá de rén dōu zài tì zì jǐ de míng tiān pū lù rì zi bú huì yīn wèi cōng máng ér biàn duǎn rèn zhēn què néng ràng tā biàn de qīng xī",
      "zh-daily-2": "wǔ hòu de yǔ gāng tíng lóu xià nà jiā jiù shū diàn bǎ mén bǎn xiè xià lái ràng cháo shī de fēng chuī jìn wū zi shū yè dài zhe zhǐ zhāng hé huī chén hùn hé de wèi dào xiàng yī duàn bèi yí wàng de shí guāng lǎo bǎn zuò zài chuāng biān xiū yī běn diào le fēng miàn de shī jí dòng zuò hěn màn què hěn wěn wǒ zài zuì dǐ céng de shū jià shàng zhǎo dào yī běn hěn jiù de lǚ xíng bǐ jì fēi yè xiě zhe yuàn nǐ zǒu guò de lù dōu chéng wéi tái tóu shí néng kàn jiàn de xīng guāng wǒ méi yǒu mǎi xià tā zhǐ zài yuán dì dú wán le nà yī yè lí kāi shí tiān biān lù chū yì diǎn lán sè jī shuǐ lǐ dào yìng zhe wū yán hé yún yuán lái yǒu xiē xiāng yù bù xū yào dài zǒu shén me tā zhǐ yào zài mǒu gè xià wǔ ān jìng de tí xǐng nǐ shì jiè réng rán zhí de qī dài",
      "zh-tech-1": "rú guǒ gěi shí nián hòu de zì jǐ xiě yī fēng xìn nǐ huì xiě xiē shén me yě xǔ kě yǐ gào su nà ge gèng chéng shú de rén jīn tiān de nǐ zhèng zài xué xí yī xiàng xīn jì néng cháng cháng chū cuò yě cháng cháng xiǎng yào fàng qì dàn nǐ hái shì huì dǎ kāi diàn nǎo bǎ liàn xí wǎng qián tuī jìn yì diǎn diǎn jì shù gēng xīn de hěn kuài zhēn zhèng kě kào de néng lì què wǎng wǎng lái zì fǎn fù de liàn xí lǐ jiě wèn tí chāi jiě bù zhòu yàn zhèng jié guǒ zài cóng shī bài lǐ zhǎo chū xià yī cì de xiàn suǒ bú yào hài pà gōng jù biàn de gèng cōng míng yīn wèi hào qí xīn nài xīn hé pàn duàn lì shǐ zhōng shǔ yú yuàn yì si kǎo de rén xiě xìn de yì yì bú shì yù cè wèi lái ér shì jì zhù cǐ kè wèi shén me chū fā děng nà fēng xìn bèi chāi kāi shí xī wàng nǐ hái bǎo yǒu jīn tiān zhè fèn bèn zhuō ér jiān dìng de yǒng qì",
      "zh-tech-2": "wǒ men měi tiān zài píng mù zhī jiān chuān suō zǎo chén chá tiān qì zhōng wǔ diǎn yī fèn wài mài shēn yè yòng dì tú xún zhǎo huí jiā de lù nà xiē kàn sì ān jìng de yìng yòng bèi hòu shì yī zhěng tào bù tíng yùn xíng de xì tǒng shù jù zài jī fáng zhī jiān liú dòng suàn fǎ zài yī shùn jiān wán chéng pái xù gōng chéng shī zé wèi le yī cì wēi xiǎo de yán chí fǎn fù pái chá rì zhì jì shù bìng bù shén mì tā zhǐ shì bèi chāi chéng xǔ duō qīng chu de xiǎo wèn tí zài zhú yī jiě jué zhēn zhèng kùn nán de shì zài xiào lǜ zhī wài jì zhù rén de gǎn shòu àn niǔ shì fǒu hǎo zhǎo tí shì shì fǒu yǒu shàn chū cuò shí yǒu méi yǒu rén yuàn yì jiě shì chéng shì yīn wèi zhè xiē kàn bú jiàn de gōng zuò ér biàn de shùn chàng ér dāng yǒu rén fǔ shēn qīng tīng lěng bīng bīng de dài mǎ cái zhēn zhèng yǒu le wēn dù",
      "zh-culture-1": "běi fāng rén xí guàn yòng yī wǎn miàn kāi qǐ yī tiān huó miàn xǐng miàn gǎn miàn měi yī bù dōu jí bu de shuǐ kāi zhī hòu miàn tiáo xià guō fān liǎng gè shēn jiù shú jiāo shàng gāng chǎo hǎo de fān qié jī dàn rè qì lì kè bǎ chuāng zi méng bái zhǎng bèi cháng shuō chī fàn yào màn yì diǎn huà yě yào màn yì diǎn nián qīng shí wǒ bù dǒng zǒng jué de shí jiān bù gòu yòng hòu lái cái fā xiàn hěn duō zhòng yào de shì qing qià qià shì zài fàn zhuō shàng bèi shuō qīng chu de shuí zuì jìn yù dào le kùn nán shuí yòu qiāo qiāo wán chéng le yī jiàn xiǎo yuàn wàng yī wǎn miàn de shí jiān bù cháng què zú gòu ràng yī jiā rén chóng xīn duì shàng xiàn suǒ wèi yān huǒ qì dà gài jiù shì yǒu rén jì de nǐ de kǒu wèi yě yuàn yì wèi nǐ duō děng yī huì er",
      "zh-culture-2": "xiàng kǒu yǒu yī jiān hěn xiǎo de pù zi mén méi shàng guà zhe jǐ bǎ yán sè tuì jìn de sǎn xiū sǎn de lǎo rén zǒng shì dài zhe yǎn jìng bǎ xì cháng de sǎn gǔ yī gēn gēn lǐ shùn yǒu rén wèn tā rú jīn sǎn huài le jiù huàn xīn de wèi shén me hái yào xiū tā tái tóu xiào le xiào dōng xi yòng jiǔ le zǒng yǒu xiē shě bu de shuō huà jiān tā tiāo chū yǔ yuán yàng xiāng jìn de xiàn bǎ zuì hòu yī chù liè kǒu féng hǎo yòu chēng kāi sǎn miàn zhuàn le yī quān yáng guāng tòu guò bǔ guò de dì fang luò xià qiǎn qiǎn de yǐng zi wǒ men dōu zài kuài sù xiàng qián de shí dài lǐ shēng huó xí guàn bǎ jiù wù hé jiù shì liú zài shēn hòu dàn zǒng yǒu rén yuàn yì màn xià lái tì yī bǎ jiù sǎn xù shàng jǐ nián de fēng yǔ yě tì cōng máng de lù rén shǒu zhù yì diǎn nài xīn",
    };

    const EN = {
      "nav.label": "Typing Studio",
      "brand.name": "KeyFlow",
      "brand.sub": "TYPING STUDIO",
      "hero.kicker": "BILINGUAL TYPING PRACTICE",
      "hero.title": "Make every keystroke count.",
      "hero.lead": "Choose a passage, set a rhythm, and let precision lead. Every record stays on this device.",
      "hero.tag.bilingual": "Chinese + English",
      "hero.tag.local": "Stored locally",
      "studio.kicker": "PRACTICE DESK",
      "studio.title": "A small session for today.",
      "controls.language": "Language",
      "controls.duration": "Duration",
      "controls.topic": "Theme",
      "topics.all": "All",
      "topics.daily": "Everyday",
      "topics.tech": "Technology",
      "topics.culture": "Culture",
      "topics.custom": "Mine",
      "custom.open": "Manage passages",
      "custom.kicker": "CUSTOM PASSAGES",
      "custom.title": "Your own passages",
      "custom.intro": "Paste any text and save it as a passage. Separate several passages with a blank line.",
      "custom.name": "Title (optional)",
      "custom.namePlaceholder": "Defaults to the first words of the passage",
      "custom.body": "Text",
      "custom.bodyPlaceholder": "Paste the text you want to practise",
      "custom.add": "Save passage",
      "custom.close": "Done",
      "custom.delete": "Delete",
      "custom.empty": "No custom passages yet.",
      "custom.meter": "Stored",
      "custom.needText": "Paste some text first.",
      "custom.saved": "Added",
      "custom.rejected": "skipped",
      "custom.full": "The list is full: delete a passage first.",
      "custom.tooLong": "Long text was shortened to 2000 characters",
      "custom.noPinyin": "Chinese custom passages are practised without pinyin guides.",
      "languages.zh": "Chinese",
      "languages.en": "English",
      "pinyin.label": "Pinyin",
      "pinyin.show": "Show pinyin guides",
      "pinyin.hide": "Hide pinyin guides",
      "hint.zh": "Chinese uses your system IME. Pinyin guides follow each character; scoring reads committed text only.",
      "hint.en": "Mind case and punctuation. Spaces count toward progress.",
      "passage.preview": "PRACTICE PASSAGE",
      "passage.unit": "chars",
      "passage.shuffle": "Another passage",
      "timer.label": "Time left",
      "console.inputLabel": "Typing input",
      "console.placeholder": "Start typing here...",
      "console.imeComposing": "Composing with your IME...",
      "console.start": "Start typing",
      "console.idleKicker": "READY",
      "console.idleTitle": "Settle in, then begin.",
      "console.idleBody": "The clock starts on click and the input takes focus automatically.",
      "console.liveHint": "Keep a steady rhythm. Whole-word Chinese input is welcome.",
      "console.restart": "Restart",
      "metrics.time": "Time left",
      "metrics.speed": "Speed",
      "metrics.accuracy": "Accuracy",
      "metrics.progress": "Progress",
      "progress.label": "Passage progress",
      "unit.cpm": "CPM",
      "unit.wpm": "WPM",
      "unit.secondsShort": "s",
      "result.kickerComplete": "PASSAGE COMPLETE",
      "result.kickerTime": "TIME UP",
      "result.titleComplete": "A clean finish.",
      "result.titleTime": "Time's up.",
      "result.bodyComplete": "Every character landed where it belonged.",
      "result.bodyTime": "Speed is the result. Accuracy is the foundation.",
      "result.speedLabel": "Your pace",
      "result.accuracy": "Accuracy",
      "result.progress": "Completion",
      "result.correct": "Correct characters",
      "result.elapsed": "Elapsed",
      "result.attempts": "Committed attempts",
      "result.retry": "Go again",
      "result.next": "Try a new passage",
      "result.newBest": "New personal best",
      "result.notRanked": "Not enough time or correct characters to rank this session. Practice a little longer.",
      "result.noInput": "Nothing typed yet. Next time, begin with the first character.",
      "rail.label": "Practice overview",
      "rail.best.title": "Personal best",
      "rail.best.subtitle": "Your best in the current language",
      "rail.best.none": "No score yet. The first passage starts now.",
      "rail.best.accuracy": "accuracy",
      "rail.best.runs": "practice runs",
      "rail.history.title": "Recent sessions",
      "rail.history.empty": "Each practice run will leave a line here.",
      "rail.history.clear": "Clear",
      "rail.history.confirm": "Clear all locally stored practice records? This cannot be undone.",
      "rail.method.title": "How scoring works",
      "rail.method.speed": "English speed uses 5 characters per word. Chinese speed uses committed characters.",
      "rail.method.accuracy": "Accuracy counts first-commit correct characters over all attempts. Corrections do not erase earlier misses.",
      "rail.method.rank": "At least 10 seconds and enough correct characters are required for the personal best.",
      "rail.method.local": "Records stay in this browser and are never uploaded.",
      "footer": "KeyFlow · Keep the practice close."
    };

    const ZH = {
      "nav.label": "打字训练",
      "brand.name": "KeyFlow · 键语",
      "brand.sub": "打字训练室",
      "hero.kicker": "中英双语 · 打字训练",
      "hero.title": "让指尖，记住语言。",
      "hero.lead": "选一段文字，留一段时间。先求准确，再让速度自然发生。所有记录只留在这台设备上。",
      "hero.tag.bilingual": "中英双语",
      "hero.tag.local": "本地保存",
      "studio.kicker": "训练台",
      "studio.title": "今天，练一段。",
      "controls.language": "语言",
      "controls.duration": "时长",
      "controls.topic": "主题",
      "topics.all": "全部",
      "topics.daily": "日常",
      "topics.tech": "科技",
      "topics.culture": "人文",
      "topics.custom": "自定义",
      "custom.open": "管理段落",
      "custom.kicker": "自定义段落",
      "custom.title": "你自己的段落",
      "custom.intro": "粘贴任意文字并存为段落；空一行可以一次存多段。",
      "custom.name": "标题（可选）",
      "custom.namePlaceholder": "默认取段落开头几个字",
      "custom.body": "正文",
      "custom.bodyPlaceholder": "粘贴你想练的文字",
      "custom.add": "保存段落",
      "custom.close": "完成",
      "custom.delete": "删除",
      "custom.empty": "还没有自定义段落。",
      "custom.meter": "已存",
      "custom.needText": "先粘贴一些文字。",
      "custom.saved": "已添加",
      "custom.rejected": "跳过",
      "custom.full": "已经存满：先删掉一段。",
      "custom.tooLong": "过长的文字已截到 2000 字",
      "custom.noPinyin": "中文自定义段落没有拼音标注，练习时不显示拼音。",
      "languages.zh": "中文",
      "languages.en": "英文",
      "pinyin.label": "拼音",
      "pinyin.show": "显示拼音",
      "pinyin.hide": "隐藏拼音",
      "hint.zh": "使用系统输入法，逐字拼音可辅助练习；评分以上屏文字为准。",
      "hint.en": "注意大小写与标点，空格也计入进度。",
      "passage.preview": "练习文本",
      "passage.unit": "字",
      "passage.shuffle": "换一段",
      "timer.label": "剩余",
      "console.inputLabel": "打字输入区",
      "console.placeholder": "在这里输入…",
      "console.imeComposing": "输入法组词中…",
      "console.start": "开始训练",
      "console.idleKicker": "准备就绪",
      "console.idleTitle": "准备好，就开始计时。",
      "console.idleBody": "点击开始后立即计时，输入框会自动获得焦点。",
      "console.liveHint": "保持节奏。中文可整词上屏，标点也算字符。",
      "console.restart": "重新开始",
      "metrics.time": "剩余时间",
      "metrics.speed": "速度",
      "metrics.accuracy": "准确率",
      "metrics.progress": "进度",
      "progress.label": "本段完成进度",
      "unit.cpm": "字/分",
      "unit.wpm": "WPM",
      "unit.secondsShort": "秒",
      "result.kickerComplete": "本段完成",
      "result.kickerTime": "时间到",
      "result.titleComplete": "干净收尾，漂亮。",
      "result.titleTime": "这一程，结束了。",
      "result.bodyComplete": "每个字符都落在了正确的位置。",
      "result.bodyTime": "速度只是结果，准确才是底盘。",
      "result.speedLabel": "本次速度",
      "result.accuracy": "准确率",
      "result.progress": "完成进度",
      "result.correct": "正确字符",
      "result.elapsed": "用时",
      "result.attempts": "上屏尝试",
      "result.retry": "再来一次",
      "result.next": "换一段再练",
      "result.newBest": "新的个人最佳",
      "result.notRanked": "练习时间或有效字符不足，本次暂不计入最佳。再多练一会儿。",
      "result.noInput": "还没有输入。下一次，先敲下第一个字。",
      "rail.label": "练习概览",
      "rail.best.title": "个人最佳",
      "rail.best.subtitle": "当前语言的历史最好成绩",
      "rail.best.none": "还没有成绩。第一段，从现在开始。",
      "rail.best.accuracy": "准确率",
      "rail.best.runs": "次练习",
      "rail.history.title": "最近练习",
      "rail.history.empty": "每一次练习，都会在这里留下一行。",
      "rail.history.clear": "清空",
      "rail.history.confirm": "确定清空本机的全部练习记录吗？此操作无法撤销。",
      "rail.method.title": "计分方式",
      "rail.method.speed": "英文按 5 个字符计 1 个词；中文按上屏字符计算速度。",
      "rail.method.accuracy": "准确率记录首次上屏的结果，修正不会抹掉旧错误。",
      "rail.method.rank": "至少练习 10 秒且有效字符足够，才会计入个人最佳。",
      "rail.method.local": "练习记录只保存在当前浏览器，不会上传。",
      "footer": "键语 KeyFlow · 把练习，留在此刻。"
    };

    const CSS = `
      .ts-app {
        min-height: 100%;
        overflow-y: auto;
        background: var(--dsw-alias-bg-base);
        background-image: radial-gradient(1100px 520px at 88% -8%, color-mix(in srgb, var(--dsw-alias-brand-primary) 8%, transparent), transparent 68%);
        color: var(--dsw-alias-label-primary);
        font-family: inherit;
        -webkit-font-smoothing: antialiased;
      }
      .ts-app *,
      .ts-app *::before,
      .ts-app *::after { box-sizing: border-box; }
      .ts-shell {
        width: min(1180px, 100%);
        margin: 0 auto;
        padding: 30px clamp(18px, 3.4vw, 44px) 30px;
      }
      .ts-hero { margin-bottom: 24px; }
      .ts-brand-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        margin-bottom: 30px;
      }
      .ts-brand { display: flex; align-items: center; gap: 11px; min-width: 0; }
      .ts-mark { display: block; flex: 0 0 auto; border-radius: 11px; }
      .ts-brand-copy { display: flex; flex-direction: column; gap: 1px; min-width: 0; }
      .ts-brand-name {
        font-size: 15px;
        font-weight: 650;
        letter-spacing: -0.01em;
        color: var(--dsw-alias-label-primary);
      }
      .ts-brand-sub {
        font-size: 10px;
        line-height: 1.4;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        color: var(--dsw-alias-label-secondary);
      }
      .ts-local-pill {
        display: inline-flex;
        align-items: center;
        gap: 7px;
        height: 27px;
        padding: 0 11px;
        border: 1px solid var(--dsw-alias-border-l1);
        border-radius: 999px;
        background: color-mix(in srgb, var(--dsw-alias-bg-layer-1) 72%, transparent);
        font-size: 10px;
        font-weight: 600;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: var(--dsw-alias-label-secondary);
        white-space: nowrap;
      }
      .ts-local-pill::before {
        content: "";
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: var(--dsw-alias-state-success-primary);
      }
      .ts-hero-main {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        gap: 28px;
      }
      .ts-hero-copy { max-width: 720px; }
      .ts-kicker {
        display: inline-block;
        font-size: 10px;
        font-weight: 650;
        line-height: 1.5;
        letter-spacing: 0.16em;
        text-transform: uppercase;
        color: var(--dsw-alias-label-secondary);
      }
      .ts-hero h1 {
        margin: 9px 0 11px;
        font-size: clamp(32px, 4.2vw, 50px);
        line-height: 1.14;
        letter-spacing: -0.035em;
        font-weight: 620;
        color: var(--dsw-alias-label-primary);
      }
      .ts-hero-lead {
        max-width: 620px;
        margin: 0;
        font-size: 14px;
        line-height: 1.8;
        color: var(--dsw-alias-label-secondary);
      }
      .ts-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 18px; }
      .ts-tag {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        min-height: 25px;
        padding: 3px 10px;
        border: 1px solid var(--dsw-alias-border-l1);
        border-radius: 999px;
        font-size: 11px;
        line-height: 1.4;
        color: var(--dsw-alias-label-secondary);
        background: color-mix(in srgb, var(--dsw-alias-bg-layer-1) 60%, transparent);
      }
      .ts-tag::before {
        content: "";
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background: var(--dsw-alias-brand-primary);
        opacity: 0.85;
      }
      .ts-key-motif {
        display: flex;
        align-items: flex-end;
        gap: 7px;
        padding: 12px 4px 4px;
        opacity: 0.82;
        user-select: none;
      }
      .ts-keycap {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border: 1px solid var(--dsw-alias-border-l2);
        border-bottom-width: 3px;
        border-radius: 9px;
        background: var(--dsw-alias-bg-layer-1);
        color: var(--dsw-alias-label-secondary);
        font-family: ui-monospace, SFMono-Regular, Consolas, monospace;
        font-size: 14px;
        font-weight: 600;
      }
      .ts-keycap:nth-child(2) { transform: translateY(-6px); }
      .ts-keycap:nth-child(3) { transform: translateY(2px); }
      .ts-keycap.ts-keycap-accent {
        color: var(--dsw-alias-brand-primary);
        border-color: color-mix(in srgb, var(--dsw-alias-brand-primary) 45%, var(--dsw-alias-border-l1));
        background: color-mix(in srgb, var(--dsw-alias-brand-primary) 10%, var(--dsw-alias-bg-layer-1));
      }
      .ts-layout {
        display: grid;
        grid-template-columns: minmax(0, 1fr) 292px;
        align-items: start;
        gap: 20px;
      }
      .ts-custom {
        margin: 16px 22px 0;
        padding: 15px 16px 16px;
        border: 1px solid var(--dsw-alias-border-l1);
        border-radius: 14px;
        background: color-mix(in srgb, var(--dsw-alias-bg-layer-1) 72%, transparent);
      }
      .ts-custom-head {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 12px;
      }
      .ts-custom-head h3 {
        margin: 4px 0 0;
        font-size: 14px;
        line-height: 1.3;
        font-weight: 620;
      }
      .ts-custom-intro {
        margin: 8px 0 12px;
        font-size: 11px;
        line-height: 1.6;
        color: var(--dsw-alias-label-secondary);
      }
      .ts-custom-field {
        display: flex;
        flex-direction: column;
        gap: 6px;
        margin-bottom: 10px;
      }
      .ts-custom-field input,
      .ts-custom-field textarea {
        width: 100%;
        box-sizing: border-box;
        padding: 8px 10px;
        border: 1px solid var(--dsw-alias-border-l1);
        border-radius: 8px;
        background: var(--dsw-alias-bg-layer-1);
        color: inherit;
        font: inherit;
        font-size: 12px;
        line-height: 1.5;
        resize: vertical;
      }
      .ts-custom-field input:focus-visible,
      .ts-custom-field textarea:focus-visible {
        outline: 2px solid var(--dsw-alias-border-l2, #4d6bfe);
        outline-offset: 1px;
      }
      .ts-custom-actions {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 10px;
      }
      .ts-btn-primary {
        appearance: none;
        border: 1px solid transparent;
        border-radius: 8px;
        padding: 7px 14px;
        font: inherit;
        font-size: 12px;
        font-weight: 560;
        color: var(--dsw-alias-label-on-brand, #fff);
        background: var(--dsw-alias-bg-brand, #4d6bfe);
        cursor: pointer;
      }
      .ts-btn-primary:hover:not(:disabled) { filter: brightness(1.06); }
      .ts-btn-primary:disabled { opacity: 0.5; cursor: default; }
      .ts-btn-primary:focus-visible { outline: 2px solid var(--dsw-alias-border-l2, #4d6bfe); outline-offset: 2px; }
      .ts-custom-meter {
        font-size: 10px;
        color: var(--dsw-alias-label-secondary);
        font-variant-numeric: tabular-nums;
      }
      .ts-custom-note {
        margin: 10px 0 0;
        font-size: 11px;
        line-height: 1.5;
        color: var(--dsw-alias-label-secondary);
      }
      .ts-custom-note.is-error { color: var(--dsw-alias-label-error, #d33f3f); }
      .ts-custom-warn {
        margin: 10px 0 0;
        font-size: 11px;
        line-height: 1.5;
        color: var(--dsw-alias-label-secondary);
      }
      .ts-custom-list {
        list-style: none;
        margin: 12px 0 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 6px;
      }
      .ts-custom-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        padding: 7px 10px;
        border: 1px solid var(--dsw-alias-border-l1);
        border-radius: 9px;
      }
      .ts-custom-item-main {
        display: flex;
        flex-direction: column;
        gap: 2px;
        min-width: 0;
      }
      .ts-custom-item-title {
        font-size: 12px;
        line-height: 1.4;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .ts-custom-item-meta {
        font-size: 10px;
        color: var(--dsw-alias-label-secondary);
      }
      .ts-custom-empty {
        margin: 12px 0 0;
        font-size: 11px;
        color: var(--dsw-alias-label-secondary);
      }
      .ts-panel {
        min-width: 0;
        overflow: hidden;
        border: 1px solid var(--dsw-alias-border-l1);
        border-radius: 20px;
        background: var(--dsw-alias-bg-layer-1);
      }
      .ts-panel-head {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 18px;
        padding: 22px 22px 0;
      }
      .ts-panel-head h2 {
        margin: 5px 0 0;
        font-size: 20px;
        line-height: 1.3;
        letter-spacing: -0.02em;
        font-weight: 620;
      }
      .ts-panel-note {
        max-width: 220px;
        margin: 2px 0 0;
        text-align: right;
        font-size: 11px;
        line-height: 1.6;
        color: var(--dsw-alias-label-secondary);
      }
      .ts-controls {
        display: flex;
        flex-wrap: wrap;
        gap: 12px 20px;
        padding: 19px 22px 0;
      }
      .ts-field { display: flex; flex-direction: column; gap: 7px; min-width: 0; }
      .ts-field-label {
        font-size: 10px;
        font-weight: 600;
        line-height: 1.4;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: var(--dsw-alias-label-secondary);
      }
      .ts-seg {
        display: inline-flex;
        align-items: center;
        gap: 3px;
        min-height: 34px;
        padding: 3px;
        border: 1px solid var(--dsw-alias-border-l1);
        border-radius: 10px;
        background: var(--dsw-alias-bg-layer-2);
      }
      .ts-seg-btn {
        appearance: none;
        border: 1px solid transparent;
        border-radius: 7px;
        margin: 0;
        padding: 0 10px;
        height: 27px;
        background: transparent;
        color: var(--dsw-alias-label-secondary);
        font: inherit;
        font-size: 12px;
        line-height: 1;
        white-space: nowrap;
        cursor: pointer;
        transition: background-color 140ms ease, color 140ms ease, border-color 140ms ease;
      }
      .ts-seg-btn:hover:not(:disabled) {
        color: var(--dsw-alias-label-primary);
        background: color-mix(in srgb, var(--dsw-alias-bg-base) 46%, transparent);
      }
      .ts-seg-btn[aria-pressed="true"] {
        color: var(--dsw-alias-label-primary);
        background: var(--dsw-alias-bg-layer-1);
        border-color: var(--dsw-alias-border-l1);
        font-weight: 600;
      }
      .ts-seg-btn:focus-visible,
      .ts-btn:focus-visible,
      .ts-textbtn:focus-visible,
      .ts-badge-btn:focus-visible,
      .ts-input:focus-visible {
        outline: 2px solid var(--dsw-alias-brand-primary);
        outline-offset: 2px;
      }
      .ts-seg-btn:disabled { cursor: default; opacity: 0.55; }
      .ts-hint {
        margin: 11px 22px 0;
        font-size: 12px;
        line-height: 1.6;
        color: var(--dsw-alias-label-secondary);
      }
      .ts-preview {
        margin: 18px 22px 0;
        overflow: hidden;
        border: 1px solid var(--dsw-alias-border-l1);
        border-radius: 15px;
        background: var(--dsw-alias-bg-layer-2);
      }
      .ts-preview-head {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 14px;
        padding: 16px 18px 0;
      }
      .ts-preview-title {
        display: flex;
        flex-direction: column;
        gap: 5px;
        min-width: 0;
      }
      .ts-passage-title {
        margin: 0;
        font-size: 17px;
        line-height: 1.35;
        letter-spacing: -0.015em;
        font-weight: 600;
        color: var(--dsw-alias-label-primary);
      }
      .ts-badges {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: flex-end;
        gap: 6px;
        flex: 0 0 auto;
      }
      .ts-badge {
        display: inline-flex;
        align-items: center;
        min-height: 23px;
        padding: 2px 8px;
        border: 1px solid var(--dsw-alias-border-l1);
        border-radius: 6px;
        font-size: 10px;
        line-height: 1.4;
        color: var(--dsw-alias-label-secondary);
        background: color-mix(in srgb, var(--dsw-alias-bg-layer-1) 58%, transparent);
        white-space: nowrap;
      }
      button.ts-badge-btn {
        appearance: none;
        border-style: dashed;
        font: inherit;
        font-size: 10px;
        line-height: 1.4;
        cursor: pointer;
      }
      button.ts-badge-btn:hover {
        color: var(--dsw-alias-label-primary);
        border-color: var(--dsw-alias-border-l2);
      }
      button.ts-badge-btn.is-active {
        color: var(--dsw-alias-brand-primary);
        border-style: solid;
        border-color: color-mix(in srgb, var(--dsw-alias-brand-primary) 36%, var(--dsw-alias-border-l1));
        background: color-mix(in srgb, var(--dsw-alias-brand-primary) 9%, transparent);
      }
      button.ts-badge-btn.is-active::before {
        content: "";
        width: 4px;
        height: 4px;
        margin-right: 5px;
        border-radius: 50%;
        background: var(--dsw-alias-brand-primary);
      }
      button.ts-badge-btn.is-active:hover {
        color: var(--dsw-alias-brand-primary);
        border-color: color-mix(in srgb, var(--dsw-alias-brand-primary) 52%, var(--dsw-alias-border-l1));
      }
      .ts-timer-pill {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        min-height: 23px;
        padding: 2px 9px;
        border: 1px solid color-mix(in srgb, var(--dsw-alias-brand-primary) 30%, var(--dsw-alias-border-l1));
        border-radius: 6px;
        font-family: ui-monospace, SFMono-Regular, Consolas, monospace;
        font-size: 11px;
        font-variant-numeric: tabular-nums;
        color: var(--dsw-alias-brand-primary);
        background: color-mix(in srgb, var(--dsw-alias-brand-primary) 8%, transparent);
        white-space: nowrap;
      }
      .ts-timer-pill::before {
        content: "";
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: var(--dsw-alias-brand-primary);
      }
      .ts-target-scroll {
        max-height: 270px;
        overflow-y: auto;
        overscroll-behavior: contain;
        scrollbar-width: thin;
        scrollbar-color: var(--dsw-alias-border-l2) transparent;
        padding: 14px 18px 20px;
      }
      .ts-target {
        margin: 0;
        color: var(--dsw-alias-label-secondary);
        font-family: ui-serif, "Iowan Old Style", "Palatino Linotype", "Songti SC", "Noto Serif CJK SC", serif;
        font-size: 19px;
        line-height: 1.95;
        letter-spacing: 0.002em;
        overflow-wrap: break-word;
      }
      .ts-target.ts-lang-zh {
        font-size: 22px;
        line-height: 2;
        letter-spacing: 0.018em;
      }
      .ts-target.has-pinyin { line-height: 2.55; }
      .ts-target.ts-lang-zh.has-pinyin { line-height: 2.55; }
      .ts-word { display: inline-block; white-space: nowrap; }
      .ts-ruby {
        ruby-align: center;
        white-space: nowrap;
      }
      .ts-ruby .ts-ch { white-space: nowrap; }
      .ts-rt {
        padding-bottom: 1px;
        font-family: "Segoe UI", "PingFang SC", "Microsoft YaHei", ui-sans-serif, sans-serif;
        font-size: 0.44em;
        font-weight: 500;
        line-height: 1.1;
        letter-spacing: 0.015em;
        color: var(--dsw-alias-label-secondary);
        opacity: 0.76;
      }
      .ts-ruby.is-ok .ts-rt { opacity: 0.58; }
      .ts-ruby.is-bad .ts-rt {
        color: var(--dsw-alias-state-error-primary);
        opacity: 0.95;
      }
      .ts-ruby.is-current .ts-rt {
        color: var(--dsw-alias-brand-primary);
        opacity: 1;
      }
      .ts-ch {
        border-radius: 3px;
        color: var(--dsw-alias-label-secondary);
        transition: color 120ms ease, background-color 120ms ease;
      }
      .ts-ch.is-ok { color: var(--dsw-alias-state-success-primary); }
      .ts-ch.is-bad {
        color: var(--dsw-alias-state-error-primary);
        background: color-mix(in srgb, var(--dsw-alias-state-error-primary) 12%, transparent);
        text-decoration: underline wavy var(--dsw-alias-state-error-primary);
        text-decoration-thickness: 1px;
        text-underline-offset: 4px;
      }
      .ts-ch.is-current {
        color: var(--dsw-alias-label-primary);
        background: color-mix(in srgb, var(--dsw-alias-brand-primary) 14%, transparent);
        box-shadow: inset 0 -2px 0 var(--dsw-alias-brand-primary);
      }
      .ts-space { display: inline-block; width: 0.4em; }
      .ts-ch.is-bad.ts-space,
      .ts-ch.is-current.ts-space {
        width: 0.5em;
        margin: 0 0.04em;
      }
      .ts-console { padding: 16px 22px 22px; }
      .ts-readystate {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 22px;
        padding: 19px 20px;
        border: 1px solid var(--dsw-alias-border-l1);
        border-radius: 14px;
        background: color-mix(in srgb, var(--dsw-alias-brand-primary) 4%, var(--dsw-alias-bg-layer-2));
      }
      .ts-readystate-copy { min-width: 0; }
      .ts-readystate h3 {
        margin: 4px 0 5px;
        font-size: 16px;
        line-height: 1.4;
        font-weight: 600;
        letter-spacing: -0.01em;
      }
      .ts-readystate p {
        margin: 0;
        max-width: 460px;
        font-size: 12px;
        line-height: 1.7;
        color: var(--dsw-alias-label-secondary);
      }
      .ts-btn {
        appearance: none;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        flex: 0 0 auto;
        min-height: 38px;
        padding: 0 15px;
        border: 1px solid var(--dsw-alias-border-l1);
        border-radius: 9px;
        background: var(--dsw-alias-bg-layer-1);
        color: var(--dsw-alias-label-primary);
        font: inherit;
        font-size: 12px;
        font-weight: 560;
        line-height: 1;
        white-space: nowrap;
        cursor: pointer;
        transition: border-color 140ms ease, background-color 140ms ease, color 140ms ease;
      }
      .ts-btn:hover { border-color: var(--dsw-alias-border-l2); }
      .ts-btn-primary {
        border-color: color-mix(in srgb, var(--dsw-alias-brand-primary) 38%, var(--dsw-alias-border-l1));
        background: color-mix(in srgb, var(--dsw-alias-brand-primary) 12%, var(--dsw-alias-bg-layer-1));
        color: var(--dsw-alias-brand-primary);
      }
      .ts-btn-primary:hover {
        background: color-mix(in srgb, var(--dsw-alias-brand-primary) 18%, var(--dsw-alias-bg-layer-1));
        border-color: color-mix(in srgb, var(--dsw-alias-brand-primary) 54%, var(--dsw-alias-border-l1));
      }
      .ts-start-btn { min-height: 44px; padding: 0 19px; font-size: 13px; }
      .ts-btn-arrow {
        font-family: ui-monospace, SFMono-Regular, Consolas, monospace;
        font-size: 14px;
        line-height: 1;
        transform: translateY(-0.5px);
      }
      .ts-livestate { display: flex; flex-direction: column; gap: 12px; }
      .ts-input-wrap { display: flex; flex-direction: column; gap: 7px; }
      .ts-input {
        width: 100%;
        height: 54px;
        padding: 0 15px;
        border: 1px solid var(--dsw-alias-border-l2);
        border-radius: 11px;
        outline: none;
        background: var(--dsw-alias-bg-layer-2);
        color: var(--dsw-alias-label-primary);
        caret-color: var(--dsw-alias-brand-primary);
        font: inherit;
        font-size: 16px;
        line-height: 1.4;
        letter-spacing: 0.01em;
        transition: border-color 140ms ease, background-color 140ms ease;
      }
      .ts-input::placeholder { color: var(--dsw-alias-label-secondary); opacity: 0.72; }
      .ts-input:focus {
        border-color: color-mix(in srgb, var(--dsw-alias-brand-primary) 60%, var(--dsw-alias-border-l2));
        background: var(--dsw-alias-bg-layer-1);
        box-shadow: 0 0 0 3px color-mix(in srgb, var(--dsw-alias-brand-primary) 12%, transparent);
      }
      .ts-input-meta {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 14px;
        min-height: 17px;
      }
      .ts-input-hint {
        min-width: 0;
        font-size: 11px;
        line-height: 1.5;
        color: var(--dsw-alias-label-secondary);
      }
      .ts-input-hint.is-composing { color: var(--dsw-alias-brand-primary); }
      .ts-textbtn {
        appearance: none;
        flex: 0 0 auto;
        padding: 0;
        border: 0;
        background: transparent;
        color: var(--dsw-alias-label-secondary);
        font: inherit;
        font-size: 11px;
        line-height: 1.5;
        text-decoration: underline;
        text-underline-offset: 3px;
        cursor: pointer;
      }
      .ts-textbtn:hover { color: var(--dsw-alias-label-primary); }
      .ts-textbtn.is-danger:hover { color: var(--dsw-alias-state-error-primary); }
      .ts-progress {
        width: 100%;
        height: 4px;
        overflow: hidden;
        border-radius: 999px;
        background: var(--dsw-alias-bg-layer-2);
      }
      .ts-progress-fill {
        display: block;
        height: 100%;
        border-radius: inherit;
        background: var(--dsw-alias-brand-primary);
        transition: width 120ms linear;
      }
      .ts-stats {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 8px;
      }
      .ts-stat {
        min-width: 0;
        padding: 10px 11px;
        border: 1px solid var(--dsw-alias-border-l1);
        border-radius: 9px;
        background: var(--dsw-alias-bg-layer-2);
      }
      .ts-stat-label {
        display: block;
        margin-bottom: 5px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 10px;
        font-weight: 600;
        line-height: 1.4;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: var(--dsw-alias-label-secondary);
      }
      .ts-stat-value {
        display: flex;
        align-items: baseline;
        gap: 4px;
        min-width: 0;
        font-family: ui-monospace, SFMono-Regular, Consolas, monospace;
        font-variant-numeric: tabular-nums;
        color: var(--dsw-alias-label-primary);
      }
      .ts-stat-value strong {
        font-size: 17px;
        line-height: 1.2;
        font-weight: 600;
        letter-spacing: -0.02em;
      }
      .ts-stat-value span {
        font-size: 10px;
        line-height: 1.2;
        color: var(--dsw-alias-label-secondary);
      }
      .ts-result {
        padding: 19px;
        border: 1px solid color-mix(in srgb, var(--dsw-alias-brand-primary) 26%, var(--dsw-alias-border-l1));
        border-radius: 15px;
        background: linear-gradient(150deg, color-mix(in srgb, var(--dsw-alias-brand-primary) 9%, var(--dsw-alias-bg-layer-2)), var(--dsw-alias-bg-layer-2) 62%);
      }
      .ts-result-head {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 20px;
      }
      .ts-result-copy { min-width: 0; }
      .ts-result-kicker {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-size: 10px;
        font-weight: 650;
        line-height: 1.5;
        letter-spacing: 0.15em;
        text-transform: uppercase;
        color: var(--dsw-alias-brand-primary);
      }
      .ts-result-kicker::before {
        content: "";
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: var(--dsw-alias-brand-primary);
      }
      .ts-result h3 {
        margin: 6px 0 5px;
        font-size: 20px;
        line-height: 1.35;
        letter-spacing: -0.02em;
        font-weight: 620;
      }
      .ts-result-copy p {
        margin: 0;
        font-size: 12px;
        line-height: 1.65;
        color: var(--dsw-alias-label-secondary);
      }
      .ts-result-score {
        flex: 0 0 auto;
        text-align: right;
        padding-left: 12px;
      }
      .ts-result-score strong {
        display: block;
        font-family: ui-monospace, SFMono-Regular, Consolas, monospace;
        font-variant-numeric: tabular-nums;
        font-size: 43px;
        line-height: 1;
        letter-spacing: -0.055em;
        font-weight: 590;
        color: var(--dsw-alias-label-primary);
      }
      .ts-result-score span {
        display: block;
        margin-top: 5px;
        font-size: 10px;
        line-height: 1.4;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--dsw-alias-label-secondary);
      }
      .ts-result-score .ts-result-score-label {
        margin: 0 0 6px;
        color: var(--dsw-alias-label-secondary);
      }
      .ts-result-stats {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 8px;
        margin-top: 17px;
      }
      .ts-result .ts-stat { background: color-mix(in srgb, var(--dsw-alias-bg-layer-1) 66%, transparent); }
      .ts-result-foot {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        gap: 14px;
        margin-top: 16px;
        padding-top: 14px;
        border-top: 1px solid color-mix(in srgb, var(--dsw-alias-border-l1) 78%, transparent);
      }
      .ts-result-message {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        flex: 1 1 280px;
        gap: 8px;
        min-width: 0;
        margin: 0;
        font-size: 11px;
        line-height: 1.6;
        color: var(--dsw-alias-label-secondary);
      }
      .ts-best-badge {
        display: inline-flex;
        align-items: center;
        min-height: 24px;
        padding: 2px 9px;
        border: 1px solid color-mix(in srgb, var(--dsw-alias-brand-primary) 34%, var(--dsw-alias-border-l1));
        border-radius: 999px;
        background: color-mix(in srgb, var(--dsw-alias-brand-primary) 10%, transparent);
        color: var(--dsw-alias-brand-primary);
        font-size: 10px;
        font-weight: 600;
        white-space: nowrap;
      }
      .ts-result-actions { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; margin-left: auto; }
      .ts-sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }
      .ts-rail {
        display: flex;
        flex-direction: column;
        gap: 12px;
        min-width: 0;
        position: sticky;
        top: 18px;
      }
      .ts-card {
        min-width: 0;
        padding: 17px;
        border: 1px solid var(--dsw-alias-border-l1);
        border-radius: 16px;
        background: var(--dsw-alias-bg-layer-1);
      }
      .ts-card-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        margin-bottom: 13px;
      }
      .ts-card-head h3 {
        margin: 0;
        font-size: 13px;
        line-height: 1.4;
        font-weight: 600;
        letter-spacing: -0.01em;
      }
      .ts-card-head .ts-textbtn { font-size: 10px; }
      .ts-best {
        background: linear-gradient(152deg, color-mix(in srgb, var(--dsw-alias-brand-primary) 13%, var(--dsw-alias-bg-layer-1)), var(--dsw-alias-bg-layer-1) 64%);
      }
      .ts-best-head {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 12px;
      }
      .ts-best-head .ts-kicker { font-size: 10px; letter-spacing: 0.14em; }
      .ts-best-lang {
        display: inline-flex;
        align-items: center;
        min-height: 21px;
        padding: 1px 7px;
        border: 1px solid var(--dsw-alias-border-l1);
        border-radius: 5px;
        font-size: 10px;
        line-height: 1.3;
        color: var(--dsw-alias-label-secondary);
        background: color-mix(in srgb, var(--dsw-alias-bg-layer-1) 65%, transparent);
        white-space: nowrap;
      }
      .ts-best-subtitle {
        margin: 9px 0 0;
        font-size: 11px;
        line-height: 1.5;
        color: var(--dsw-alias-label-secondary);
      }
      .ts-best-score {
        display: flex;
        align-items: baseline;
        gap: 7px;
        margin-top: 6px;
      }
      .ts-best-score strong {
        font-family: ui-monospace, SFMono-Regular, Consolas, monospace;
        font-variant-numeric: tabular-nums;
        font-size: 46px;
        line-height: 1.06;
        font-weight: 580;
        letter-spacing: -0.065em;
      }
      .ts-best-score span {
        font-size: 10px;
        line-height: 1.4;
        letter-spacing: 0.06em;
        color: var(--dsw-alias-label-secondary);
      }
      .ts-best-meta {
        display: flex;
        flex-wrap: wrap;
        gap: 5px 12px;
        margin-top: 9px;
        padding-top: 11px;
        border-top: 1px solid color-mix(in srgb, var(--dsw-alias-border-l1) 76%, transparent);
        font-size: 11px;
        line-height: 1.5;
        color: var(--dsw-alias-label-secondary);
      }
      .ts-best-empty {
        display: flex;
        align-items: center;
        min-height: 57px;
        margin-top: 5px;
        font-family: ui-monospace, SFMono-Regular, Consolas, monospace;
        font-size: 33px;
        line-height: 1;
        color: var(--dsw-alias-label-secondary);
        opacity: 0.62;
      }
      .ts-best-empty-note {
        margin: 0;
        font-size: 11px;
        line-height: 1.65;
        color: var(--dsw-alias-label-secondary);
      }
      .ts-history-empty {
        margin: 0;
        padding: 7px 0 2px;
        font-size: 11px;
        line-height: 1.7;
        color: var(--dsw-alias-label-secondary);
      }
      .ts-history-list {
        display: flex;
        flex-direction: column;
        gap: 0;
        margin: 0;
        padding: 0;
        list-style: none;
      }
      .ts-history-row {
        display: grid;
        grid-template-columns: 24px minmax(0, 1fr) auto;
        align-items: center;
        gap: 9px;
        padding: 9px 0;
        border-top: 1px solid color-mix(in srgb, var(--dsw-alias-border-l1) 68%, transparent);
      }
      .ts-history-row:first-child { border-top: 0; padding-top: 1px; }
      .ts-history-row:last-child { padding-bottom: 1px; }
      .ts-history-lang {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
        border: 1px solid var(--dsw-alias-border-l1);
        border-radius: 6px;
        background: var(--dsw-alias-bg-layer-2);
        color: var(--dsw-alias-label-secondary);
        font-family: ui-monospace, SFMono-Regular, Consolas, monospace;
        font-size: 10px;
        line-height: 1;
      }
      .ts-history-main { min-width: 0; }
      .ts-history-speed {
        display: flex;
        align-items: baseline;
        gap: 4px;
        min-width: 0;
        font-family: ui-monospace, SFMono-Regular, Consolas, monospace;
        font-variant-numeric: tabular-nums;
        font-size: 13px;
        line-height: 1.25;
        font-weight: 560;
        color: var(--dsw-alias-label-primary);
      }
      .ts-history-speed span {
        font-size: 9px;
        font-weight: 500;
        letter-spacing: 0.03em;
        color: var(--dsw-alias-label-secondary);
      }
      .ts-history-meta {
        display: flex;
        gap: 6px;
        margin-top: 2px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 10px;
        line-height: 1.4;
        color: var(--dsw-alias-label-secondary);
      }
      .ts-history-time {
        align-self: start;
        padding-top: 1px;
        font-size: 10px;
        line-height: 1.4;
        color: var(--dsw-alias-label-secondary);
        white-space: nowrap;
      }
      .ts-history-note {
        margin: 10px 0 0;
        font-size: 10px;
        line-height: 1.5;
        color: var(--dsw-alias-label-secondary);
        opacity: 0.8;
      }
      .ts-method-list {
        display: flex;
        flex-direction: column;
        gap: 11px;
        margin: 0;
        padding: 0;
        list-style: none;
      }
      .ts-method-list li {
        display: grid;
        grid-template-columns: 18px minmax(0, 1fr);
        gap: 8px;
        align-items: start;
      }
      .ts-method-index {
        font-family: ui-monospace, SFMono-Regular, Consolas, monospace;
        font-size: 10px;
        line-height: 1.7;
        color: var(--dsw-alias-brand-primary);
        opacity: 0.8;
      }
      .ts-method-list p {
        margin: 0;
        font-size: 11px;
        line-height: 1.7;
        color: var(--dsw-alias-label-secondary);
      }
      .ts-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        margin: 14px 2px 0;
        font-size: 10px;
        line-height: 1.5;
        letter-spacing: 0.02em;
        color: var(--dsw-alias-label-secondary);
        opacity: 0.78;
      }
      @media (max-width: 1000px) {
        .ts-layout { grid-template-columns: 1fr; }
        .ts-rail {
          position: static;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          align-items: start;
        }
        .ts-method-card { grid-column: 1 / -1; }
        .ts-method-list { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 18px; }
      }
      @media (max-width: 760px) {
        .ts-shell { padding: 22px 14px 24px; }
        .ts-brand-row { margin-bottom: 24px; }
        .ts-hero-main { display: block; }
        .ts-hero h1 { font-size: clamp(30px, 8vw, 40px); }
        .ts-key-motif { display: none; }
        .ts-panel-head { padding: 19px 17px 0; }
        .ts-panel-note { display: none; }
        .ts-controls { padding: 16px 17px 0; gap: 11px 16px; }
        .ts-hint { margin: 10px 17px 0; }
        .ts-preview { margin: 15px 17px 0; }
        .ts-preview-head { padding: 14px 14px 0; display: block; }
        .ts-badges { justify-content: flex-start; margin-top: 9px; }
        .ts-target-scroll { max-height: 230px; padding: 12px 14px 16px; }
        .ts-target { font-size: 17px; }
        .ts-target.ts-lang-zh { font-size: 20px; }
        .ts-console { padding: 14px 17px 17px; }
        .ts-readystate { align-items: flex-start; flex-direction: column; gap: 15px; }
        .ts-start-btn { width: 100%; }
        .ts-stats { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        .ts-result-head { display: block; }
        .ts-result-score { text-align: left; padding: 14px 0 0; display: flex; align-items: baseline; gap: 8px; }
        .ts-result-score .ts-result-score-label { display: none; }
        .ts-result-score strong { display: inline; }
        .ts-result-score span { display: inline; margin-top: 0; }
        .ts-result-stats { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        .ts-result-foot { align-items: flex-start; flex-direction: column; }
        .ts-result-actions { width: 100%; }
        .ts-result-actions .ts-btn { flex: 1 1 auto; }
        .ts-rail { grid-template-columns: 1fr; }
        .ts-method-card { grid-column: auto; }
        .ts-method-list { display: flex; flex-direction: column; gap: 11px; }
        .ts-footer { flex-direction: column; align-items: flex-start; gap: 3px; }
      }
      @media (max-width: 480px) {
        .ts-local-pill { display: none; }
        .ts-tags { margin-top: 14px; }
        .ts-seg-btn { padding: 0 8px; }
        .ts-readystate { padding: 16px; }
        .ts-result { padding: 15px; }
        .ts-result-score strong { font-size: 37px; }
      }
      @media (max-height: 940px) {
        .ts-shell { padding-top: 20px; }
        .ts-brand-row { margin-bottom: 18px; }
        .ts-hero { margin-bottom: 16px; }
        .ts-hero h1 {
          margin: 6px 0 8px;
          font-size: clamp(28px, 3.8vw, 42px);
        }
        .ts-tags { display: none; }
        .ts-key-motif { display: none; }
        .ts-panel-head { padding-top: 18px; }
        .ts-controls { padding-top: 15px; }
        .ts-preview { margin-top: 15px; }
        .ts-target-scroll { max-height: 220px; }
        .ts-readystate { padding-top: 15px; padding-bottom: 15px; }
      }
      @media (prefers-reduced-motion: reduce) {
        .ts-app *, .ts-app *::before, .ts-app *::after {
          scroll-behavior: auto !important;
          transition-duration: 0.01ms !important;
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
        }
      }
    `;

    const CJK_PATTERN = /[\u3400-\u9fff\uf900-\ufaff]/;
    const LATIN_WORD_PATTERN = /[A-Za-z0-9'\-]/;

    function isRecord(value) {
      return !!value && typeof value === "object" && (value.lang === "zh" || value.lang === "en");
    }

    function readStorageJSON(key, fallback) {
      try {
        const raw = window.localStorage.getItem(key);
        if (!raw) return fallback;
        return JSON.parse(raw);
      } catch (error) {
        return fallback;
      }
    }

    function writeStorageJSON(key, value) {
      try {
        window.localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        /* A private or full storage must never break practice. */
      }
    }

    function loadPreferences(localeId) {
      const fallbackLang = String(localeId || "").toLowerCase().indexOf("en") === 0 ? "en" : "zh";
      const stored = readStorageJSON(PREFS_KEY, null);
      const source = stored && typeof stored === "object" ? stored : {};
      return {
        lang: LANGUAGES.indexOf(source.lang) >= 0 ? source.lang : fallbackLang,
        duration: DURATIONS.indexOf(Number(source.duration)) >= 0 ? Number(source.duration) : 60,
        topic: TOPICS.indexOf(source.topic) >= 0 ? source.topic : "all"
      };
    }

    function sanitizeHistory(value) {
      if (!Array.isArray(value)) return [];
      const records = [];
      for (let i = 0; i < value.length; i += 1) {
        const raw = value[i];
        if (!isRecord(raw)) continue;
        const at = Number(raw.at);
        if (!Number.isFinite(at) || at <= 0) continue;
        const topic = raw.topic === "daily" || raw.topic === "tech" || raw.topic === "culture" || raw.topic === "custom" ? raw.topic : "daily";
        records.push({
          id: typeof raw.id === "string" ? raw.id : "record-" + at + "-" + i,
          at,
          lang: raw.lang,
          duration: DURATIONS.indexOf(Number(raw.duration)) >= 0 ? Number(raw.duration) : 60,
          topic,
          title: typeof raw.title === "string" ? raw.title.slice(0, 120) : "",
          speed: Math.max(0, Math.round(Number(raw.speed) || 0)),
          accuracy: Math.min(100, Math.max(0, Math.round(Number(raw.accuracy) || 0))),
          progress: Math.min(100, Math.max(0, Math.round(Number(raw.progress) || 0))),
          correct: Math.max(0, Math.round(Number(raw.correct) || 0)),
          attempts: Math.max(0, Math.round(Number(raw.attempts) || 0)),
          elapsedMs: Math.max(0, Math.round(Number(raw.elapsedMs) || 0)),
          reason: raw.reason === "complete" ? "complete" : "time",
          ranked: raw.ranked === true
        });
      }
      records.sort(function (left, right) { return right.at - left.at; });
      return records.slice(0, HISTORY_LIMIT);
    }

    function loadHistory() {
      return sanitizeHistory(readStorageJSON(HISTORY_KEY, []));
    }

    // Custom passages -------------------------------------------------------
    // These are pasted by the user, so they carry no pinyin guides and no
    // reviewed polyphone readings. They live in their own storage key so a
    // large custom list never slows down the small preferences read.

    function passageLanguage(text) {
      return CJK_PATTERN.test(String(text || "")) ? "zh" : "en";
    }

    function customTitleOf(text) {
      const clean = String(text || "").replace(/\s+/g, " ").trim();
      if (!clean) return "-";
      return clean.length > 22 ? clean.slice(0, 22) + "…" : clean;
    }

    function sanitizeCustomPassages(value) {
      if (!Array.isArray(value)) return [];
      const out = [];
      for (let i = 0; i < value.length && out.length < CUSTOM_LIMIT; i += 1) {
        const raw = value[i];
        if (!raw || typeof raw !== "object") continue;
        const text = typeof raw.text === "string" ? raw.text.replace(/\s+/g, " ").trim().slice(0, CUSTOM_TEXT_MAX) : "";
        if (!text) continue;
        const at = Number(raw.createdAt);
        const stored = typeof raw.id === "string" && raw.id ? raw.id : "";
        out.push({
          id: stored || "custom-" + (Number.isFinite(at) && at > 0 ? at : Date.now()) + "-" + i,
          topic: "custom",
          title: typeof raw.title === "string" && raw.title.trim() ? raw.title.trim().slice(0, 60) : customTitleOf(text),
          text: text,
          createdAt: Number.isFinite(at) && at > 0 ? at : Date.now()
        });
      }
      return out;
    }

    function loadCustomPassages() {
      return sanitizeCustomPassages(readStorageJSON(CUSTOM_KEY, []));
    }

    function saveCustomPassages(list) {
      writeStorageJSON(CUSTOM_KEY, list);
    }

    function customBytes(list) {
      let total = 0;
      for (let i = 0; i < list.length; i += 1) {
        total += list[i].text.length + list[i].title.length;
      }
      return total;
    }

    function splitCustomInput(raw) {
      const blocks = String(raw == null ? "" : raw).split(/\r?\n\s*\r?\n/);
      const out = [];
      for (let i = 0; i < blocks.length; i += 1) {
        const text = blocks[i].replace(/\s*\r?\n\s*/g, " ").trim();
        if (text) out.push(text);
      }
      return out;
    }

    function makeCustomPassage(text) {
      const at = Date.now();
      return {
        id: "custom-" + at.toString(36) + "-" + Math.random().toString(36).slice(2, 6),
        topic: "custom",
        title: customTitleOf(text),
        text: text,
        createdAt: at
      };
    }

    function customPoolFor(custom, lang) {
      return (Array.isArray(custom) ? custom : []).filter(function (item) {
        return passageLanguage(item.text) === lang;
      });
    }


    function pickPassage(lang, topic, excludeId, custom) {
      const builtIn = PASSAGES[lang] || PASSAGES.zh;
      const all = builtIn.concat(customPoolFor(custom, lang));
      const filtered = all.filter(function (item) { return topic === "all" || item.topic === topic; });
      const pool = filtered.length ? filtered : all;
      const candidates = pool.filter(function (item) { return item.id !== excludeId; });
      const source = candidates.length ? candidates : pool;
      return source[Math.floor(Math.random() * source.length)];
    }

    function countCorrect(target, typed) {
      let correct = 0;
      const limit = Math.min(target.length, typed.length);
      for (let i = 0; i < limit; i += 1) {
        if (target[i] === typed[i]) correct += 1;
      }
      return correct;
    }

    function speedOf(lang, correct, elapsedMs) {
      if (!Number.isFinite(elapsedMs) || elapsedMs < 1200) return 0;
      const units = lang === "en" ? correct / 5 : correct;
      return Math.max(0, Math.round(units / (elapsedMs / 60000)));
    }

    function formatClock(ms) {
      const total = Math.max(0, Math.ceil(Number(ms) / 1000));
      const minutes = Math.floor(total / 60);
      const seconds = total % 60;
      return String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0");
    }

    function formatWhen(timestamp, localeId) {
      try {
        const date = new Date(timestamp);
        const today = new Date();
        const sameDay = date.getFullYear() === today.getFullYear() &&
          date.getMonth() === today.getMonth() &&
          date.getDate() === today.getDate();
        return new Intl.DateTimeFormat(localeId || undefined, sameDay
          ? { hour: "2-digit", minute: "2-digit" }
          : { month: "numeric", day: "numeric" }).format(date);
      } catch (error) {
        return "--";
      }
    }

    function isoWhen(timestamp) {
      try {
        return new Date(timestamp).toISOString();
      } catch (error) {
        return undefined;
      }
    }

    function unitFor(t, lang) {
      return t(lang === "zh" ? "unit.cpm" : "unit.wpm");
    }

    function topicFor(t, topic) {
      if (topic === "daily" || topic === "tech" || topic === "culture" || topic === "custom") return t("topics." + topic);
      return t("topics.all");
    }

    function findBest(history, lang) {
      let best = null;
      const minimumCorrect = lang === "en" ? 20 : 10;
      for (let i = 0; i < history.length; i += 1) {
        const record = history[i];
        if (record.lang !== lang || record.attempts <= 0) continue;
        if (record.elapsedMs < 10000 || record.correct < minimumCorrect) continue;
        if (!best || record.speed > best.speed || (record.speed === best.speed && record.accuracy > best.accuracy)) {
          best = record;
        }
      }
      return best;
    }

    function tokenizeTarget(text) {
      const tokens = [];
      let index = 0;
      while (index < text.length) {
        const char = text[index];
        if (char === " " || char === "\n" || char === "\t") {
          tokens.push({ type: "space", start: index, value: char });
          index += 1;
          continue;
        }
        if (CJK_PATTERN.test(char)) {
          tokens.push({ type: "char", start: index, value: char });
          index += 1;
          continue;
        }
        if (LATIN_WORD_PATTERN.test(char)) {
          const start = index;
          while (index < text.length && LATIN_WORD_PATTERN.test(text[index])) index += 1;
          tokens.push({ type: "word", start, value: text.slice(start, index) });
          continue;
        }
        tokens.push({ type: "char", start: index, value: char });
        index += 1;
      }
      return tokens;
    }

    function buildPinyinMap(text, pinyin) {
      const map = new Array(text.length).fill("");
      if (!pinyin) return map;
      const syllables = String(pinyin).trim().split(/\s+/);
      let syllableIndex = 0;
      for (let index = 0; index < text.length; index += 1) {
        if (!CJK_PATTERN.test(text[index])) continue;
        if (syllableIndex < syllables.length) map[index] = syllables[syllableIndex];
        syllableIndex += 1;
      }
      return map;
    }

    function characterClass(target, typed, index, running) {
      if (index < typed.length) {
        return target[index] === typed[index] ? "is-ok" : "is-bad";
      }
      if (running && index === typed.length) return "is-current";
      return "is-pending";
    }

    function Mark() {
      return h(
        "svg",
        {
          className: "ts-mark",
          width: 34,
          height: 34,
          viewBox: "0 0 64 64",
          "aria-hidden": "true",
          focusable: "false"
        },
        h("rect", { width: 64, height: 64, rx: 16, fill: "#16233d" }),
        h("rect", {
          x: 11,
          y: 23,
          width: 36,
          height: 24,
          rx: 6,
          fill: "none",
          stroke: "#9dbcff",
          strokeWidth: 2.5
        }),
        h("rect", { x: 17, y: 29, width: 6, height: 4, rx: 1.4, fill: "#9dbcff" }),
        h("rect", { x: 26, y: 29, width: 6, height: 4, rx: 1.4, fill: "#9dbcff" }),
        h("rect", { x: 35, y: 29, width: 6, height: 4, rx: 1.4, fill: "#ffc37a" }),
        h("rect", { x: 17, y: 36, width: 6, height: 4, rx: 1.4, fill: "#9dbcff" }),
        h("rect", { x: 26, y: 36, width: 6, height: 4, rx: 1.4, fill: "#9dbcff" }),
        h("rect", { x: 35, y: 36, width: 12, height: 4, rx: 1.4, fill: "#9dbcff" }),
        h("path", {
          d: "M51 16v13M46.5 20.5L51 16l4.5 4.5",
          fill: "none",
          stroke: "#ffc37a",
          strokeWidth: 2.6,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        })
      );
    }

    function SidebarIcon(props) {
      const size = Math.max(16, Number(props && props.size) || 20);
      const active = !!(props && props.active);
      return h(
        "svg",
        {
          width: size,
          height: size,
          viewBox: "0 0 24 24",
          fill: "none",
          "aria-hidden": "true",
          focusable: "false",
          style: {
            display: "block",
            color: active ? "var(--dsw-alias-brand-primary)" : "currentColor"
          }
        },
        h("rect", {
          x: 2.75,
          y: 6.5,
          width: 18.5,
          height: 12,
          rx: 3,
          stroke: "currentColor",
          strokeWidth: 1.6
        }),
        h("rect", { x: 6.4, y: 9.5, width: 3.1, height: 2.2, rx: 0.7, fill: "currentColor", opacity: active ? 1 : 0.82 }),
        h("rect", { x: 10.5, y: 9.5, width: 3.1, height: 2.2, rx: 0.7, fill: "currentColor", opacity: active ? 1 : 0.82 }),
        h("rect", { x: 14.6, y: 9.5, width: 3.1, height: 2.2, rx: 0.7, fill: "currentColor", opacity: active ? 1 : 0.82 }),
        h("rect", { x: 6.4, y: 13.1, width: 7.1, height: 2.2, rx: 0.7, fill: "currentColor", opacity: active ? 1 : 0.82 }),
        h("rect", { x: 14.6, y: 13.1, width: 3.1, height: 2.2, rx: 0.7, fill: "currentColor", opacity: active ? 1 : 0.82 })
      );
    }

    const TargetText = React.memo(function TargetText(props) {
      const text = props.text;
      const typed = props.typed;
      const running = props.running;
      const lang = props.lang;
      const showPinyin = props.showPinyin;
      const scrollRef = props.scrollRef;
      const tokens = React.useMemo(function () { return tokenizeTarget(text); }, [text]);
      const pinyinMap = React.useMemo(
        function () { return buildPinyinMap(text, props.pinyin); },
        [text, props.pinyin]
      );
      const hasPinyin = !!(showPinyin && props.pinyin);

      return h(
        "div",
        { className: "ts-target-scroll", ref: scrollRef },
        h(
          "div",
          {
            className: "ts-target " + (lang === "zh" ? "ts-lang-zh" : "ts-lang-en") + (hasPinyin ? " has-pinyin" : ""),
            lang: lang === "zh" ? "zh-CN" : "en"
          },
          tokens.map(function (token) {
            if (token.type === "space") {
              const state = characterClass(text, typed, token.start, running);
              return h(
                "span",
                {
                  key: "s-" + token.start,
                  className: "ts-ch ts-space " + state,
                  "data-current": running && token.start === typed.length ? "true" : undefined
                },
                " "
              );
            }
            if (token.type === "word") {
              const chars = [];
              for (let i = 0; i < token.value.length; i += 1) {
                const charIndex = token.start + i;
                const state = characterClass(text, typed, charIndex, running);
                chars.push(
                  h(
                    "span",
                    {
                      key: charIndex,
                      className: "ts-ch " + state,
                      "data-current": running && charIndex === typed.length ? "true" : undefined
                    },
                    token.value[i]
                  )
                );
              }
              return h("span", { key: "w-" + token.start, className: "ts-word" }, chars);
            }
            const state = characterClass(text, typed, token.start, running);
            const pinyinText = showPinyin ? pinyinMap[token.start] : "";
            if (pinyinText) {
              return h(
                "ruby",
                { key: "c-" + token.start, className: "ts-ruby " + state },
                h(
                  "span",
                  {
                    className: "ts-ch " + state,
                    "data-current": running && token.start === typed.length ? "true" : undefined
                  },
                  token.value
                ),
                h("rt", { className: "ts-rt", lang: "zh-Latn" }, pinyinText)
              );
            }
            return h(
              "span",
              {
                key: "c-" + token.start,
                className: "ts-ch " + state,
                "data-current": running && token.start === typed.length ? "true" : undefined
              },
              token.value
            );
          })
        )
      );
    });

    function Segmented(props) {
      const groupId = props.labelId;
      return h(
        "div",
        { className: "ts-field" },
        h("span", { className: "ts-field-label", id: groupId }, props.label),
        h(
          "div",
          { className: "ts-seg", role: "group", "aria-labelledby": groupId },
          props.options.map(function (option) {
            const selected = option.value === props.value;
            return h(
              "button",
              {
                key: String(option.value),
                type: "button",
                className: "ts-seg-btn",
                "aria-pressed": selected ? "true" : "false",
                disabled: props.disabled,
                onClick: function () { props.onChange(option.value); }
              },
              option.label
            );
          })
        )
      );
    }

    function Stat(props) {
      return h(
        "div",
        { className: "ts-stat" },
        h("span", { className: "ts-stat-label" }, props.label),
        h(
          "div",
          { className: "ts-stat-value" },
          h("strong", null, props.value),
          props.unit ? h("span", null, props.unit) : null
        )
      );
    }


    function CustomManager(props) {
      const tr = props.tr;
      const passages = props.passages;
      const [title, setTitle] = React.useState("");
      const [body, setBody] = React.useState("");
      const [note, setNote] = React.useState(null);
      const bytes = customBytes(passages);

      function submit() {
        const blocks = splitCustomInput(body);
        if (!blocks.length) {
          setNote({ kind: "error", text: tr("custom.needText") });
          return;
        }
        const list = passages.slice();
        let rejected = 0;
        let shortened = 0;
        for (let i = 0; i < blocks.length; i += 1) {
          let text = blocks[i];
          if (text.length > CUSTOM_TEXT_MAX) {
            text = text.slice(0, CUSTOM_TEXT_MAX);
            shortened += 1;
          }
          if (list.length >= CUSTOM_LIMIT) {
            rejected += 1;
            continue;
          }
          const next = makeCustomPassage(text);
          if (!next.title) next.title = customTitleOf(text);
          if (blocks.length === 1 && title.trim()) next.title = title.trim().slice(0, 60);
          if (customBytes(list) + next.text.length + next.title.length > CUSTOM_BYTES) {
            rejected += 1;
            continue;
          }
          list.push(next);
        }
        if (list.length === passages.length) {
          setNote({ kind: "error", text: tr("custom.full") });
          return;
        }
        props.onSave(list);
        setBody("");
        setTitle("");
        const added = list.length - passages.length;
        let message = tr("custom.saved") + " " + added;
        if (rejected > 0) message += " · " + tr("custom.rejected") + " " + rejected;
        if (shortened > 0) message += " · " + tr("custom.tooLong");
        setNote({ kind: "ok", text: message });
      }

      return h(
        "section",
        { className: "ts-custom", "aria-label": tr("custom.title") },
        h(
          "div",
          { className: "ts-custom-head" },
          h(
            "div",
            null,
            h("span", { className: "ts-kicker" }, tr("custom.kicker")),
            h("h3", null, tr("custom.title"))
          ),
          h(
            "button",
            { type: "button", className: "ts-badge ts-badge-btn", onClick: props.onClose },
            tr("custom.close")
          )
        ),
        h("p", { className: "ts-custom-intro" }, tr("custom.intro")),
        h(
          "label",
          { className: "ts-custom-field" },
          h("span", { className: "ts-field-label" }, tr("custom.name")),
          h("input", {
            type: "text",
            value: title,
            maxLength: 60,
            placeholder: tr("custom.namePlaceholder"),
            onChange: function (event) { setTitle(event.target.value); }
          })
        ),
        h(
          "label",
          { className: "ts-custom-field" },
          h("span", { className: "ts-field-label" }, tr("custom.body")),
          h("textarea", {
            value: body,
            rows: 5,
            placeholder: tr("custom.bodyPlaceholder"),
            onChange: function (event) { setBody(event.target.value); }
          })
        ),
        h(
          "div",
          { className: "ts-custom-actions" },
          h(
            "button",
            { type: "button", className: "ts-btn-primary", onClick: submit, disabled: !body.trim() },
            tr("custom.add")
          ),
          h(
            "span",
            { className: "ts-custom-meter" },
            tr("custom.meter") + " " + passages.length + "/" + CUSTOM_LIMIT + " · " + Math.round(bytes / 1024) + "/" + Math.round(CUSTOM_BYTES / 1024) + " KB"
          )
        ),
        note ? h("p", { className: "ts-custom-note" + (note.kind === "error" ? " is-error" : "") }, note.text) : null,
        passages.length
          ? h(
              "ul",
              { className: "ts-custom-list" },
              passages.map(function (item) {
                const itemLang = passageLanguage(item.text) === "zh" ? tr("languages.zh") : tr("languages.en");
                return h(
                  "li",
                  { key: item.id, className: "ts-custom-item" },
                  h(
                    "div",
                    { className: "ts-custom-item-main" },
                    h("span", { className: "ts-custom-item-title" }, item.title),
                    h(
                      "span",
                      { className: "ts-custom-item-meta" },
                      itemLang + " · " + item.text.length + " " + tr("passage.unit")
                    )
                  ),
                  h(
                    "button",
                    { type: "button", className: "ts-badge ts-badge-btn", onClick: function () { props.onRemove(item.id); } },
                    tr("custom.delete")
                  )
                );
              })
            )
          : h("p", { className: "ts-custom-empty" }, tr("custom.empty")),
        passageLanguage(body) === "zh" && body.trim()
          ? h("p", { className: "ts-custom-warn" }, tr("custom.noPinyin"))
          : null
      );
    }

    function TypingStudio(props) {
      const t = props.t;
      const localeId = props.localeId;
      const tr = React.useCallback(
        function (key) {
          const value = t(key);
          return typeof value === "string" && value !== key ? value : EN[key] || key;
        },
        [t]
      );

      const uid = "ts" + React.useId().replace(/[^a-zA-Z0-9_-]/g, "");
      const languageLabelId = uid + "-language";
      const durationLabelId = uid + "-duration";
      const topicLabelId = uid + "-topic";
      const panelTitleId = uid + "-panel-title";
      const passageTitleId = uid + "-passage-title";

      const [settings, setSettings] = React.useState(function () { return loadPreferences(localeId); });
      const [passage, setPassage] = React.useState(function () { return pickPassage(settings.lang, settings.topic, undefined, loadCustomPassages()); });
      const [phase, setPhase] = React.useState("idle");
      const [typed, setTyped] = React.useState("");
      const [attempts, setAttempts] = React.useState(0);
      const [correctAttempts, setCorrectAttempts] = React.useState(0);
      const [remainingMs, setRemainingMs] = React.useState(settings.duration * 1000);
      const [composing, setComposing] = React.useState(false);
      const [showPinyin, setShowPinyin] = React.useState(true);
      const [result, setResult] = React.useState(null);
      const [history, setHistory] = React.useState(loadHistory);
      const [customPassages, setCustomPassages] = React.useState(loadCustomPassages);
      const [customOpen, setCustomOpen] = React.useState(false);
      const [runId, setRunId] = React.useState(0);

      const phaseRef = React.useRef("idle");
      const typedRef = React.useRef("");
      const attemptsRef = React.useRef(0);
      const correctAttemptsRef = React.useRef(0);
      const composingRef = React.useRef(false);
      const startedAtRef = React.useRef(0);
      const runTokenRef = React.useRef(0);
      const finishRef = React.useRef(function () {});
      const inputRef = React.useRef(null);
      const targetRef = React.useRef(null);

      const lang = settings.lang;
      const duration = settings.duration;
      const topic = settings.topic;
      const running = phase === "running";
      const done = phase === "done";
      const targetLength = passage.text.length;
      const pinyinForPassage = lang === "zh" ? PINYIN[passage.id] || "" : "";
      const correctTyped = React.useMemo(function () { return countCorrect(passage.text, typed); }, [passage.text, typed]);
      const best = React.useMemo(function () { return findBest(history, lang); }, [history, lang]);
      const langRuns = React.useMemo(
        function () { return history.filter(function (record) { return record.lang === lang; }).length; },
        [history, lang]
      );
      const liveElapsed = running ? Math.max(0, duration * 1000 - remainingMs) : 0;
      const liveSpeed = running ? speedOf(lang, correctTyped, liveElapsed) : 0;
      const liveAccuracy = attempts > 0 ? Math.round((correctAttempts / attempts) * 100) : null;
      const progressPct = targetLength > 0 ? Math.min(100, Math.round((typed.length / targetLength) * 100)) : 0;
      const speedUnit = unitFor(tr, lang);
      const langLabel = tr(lang === "zh" ? "languages.zh" : "languages.en");
      const langHint = tr("hint." + lang);
      const passageUnit = tr("passage.unit");
      const dateLocale = localeId || undefined;

      const languageOptions = LANGUAGES.map(function (value) {
        return { value, label: tr("languages." + value) };
      });
      const durationOptions = DURATIONS.map(function (value) {
        return { value, label: String(value) + tr("unit.secondsShort") };
      });
      const topicOptions = TOPICS.map(function (value) {
        return { value, label: tr("topics." + value) };
      });

      function resetAttempt(nextDuration) {
        runTokenRef.current += 1;
        phaseRef.current = "idle";
        setPhase("idle");
        typedRef.current = "";
        setTyped("");
        attemptsRef.current = 0;
        setAttempts(0);
        correctAttemptsRef.current = 0;
        setCorrectAttempts(0);
        composingRef.current = false;
        setComposing(false);
        setResult(null);
        const seconds = typeof nextDuration === "number" ? nextDuration : duration;
        setRemainingMs(seconds * 1000);
      }

      function beginWith(nextPassage) {
        const currentPassage = nextPassage || passage;
        runTokenRef.current += 1;
        startedAtRef.current = Date.now();
        phaseRef.current = "running";
        typedRef.current = "";
        attemptsRef.current = 0;
        correctAttemptsRef.current = 0;
        composingRef.current = false;
        setPassage(currentPassage);
        setPhase("running");
        setTyped("");
        setAttempts(0);
        setCorrectAttempts(0);
        setComposing(false);
        setCustomOpen(false);
        setResult(null);
        setRemainingMs(duration * 1000);
        setRunId(runTokenRef.current);
      }

      function changeLanguage(nextLang) {
        if (running || nextLang === lang) return;
        const nextSettings = { ...settings, lang: nextLang };
        setSettings(nextSettings);
        writeStorageJSON(PREFS_KEY, nextSettings);
        setPassage(pickPassage(nextLang, topic, passage.id, customPassages));
        resetAttempt(nextSettings.duration);
      }

      function changeDuration(nextDuration) {
        if (running || nextDuration === duration) return;
        const nextSettings = { ...settings, duration: nextDuration };
        setSettings(nextSettings);
        writeStorageJSON(PREFS_KEY, nextSettings);
        resetAttempt(nextDuration);
      }

      function changeTopic(nextTopic) {
        if (running || nextTopic === topic) return;
        const nextSettings = { ...settings, topic: nextTopic };
        setSettings(nextSettings);
        writeStorageJSON(PREFS_KEY, nextSettings);
        setPassage(pickPassage(lang, nextTopic, passage.id, customPassages));
        resetAttempt(nextSettings.duration);
      }

      function handleCustomSave(nextList) {
        saveCustomPassages(nextList);
        setCustomPassages(nextList);
      }

      function handleCustomRemove(id) {
        const nextList = customPassages.filter(function (item) { return item.id !== id; });
        saveCustomPassages(nextList);
        setCustomPassages(nextList);
        if (passage.id === id && phase !== "running") {
          setPassage(pickPassage(lang, topic, id, nextList));
          resetAttempt(duration);
        }
      }

      function handleToggleCustom() {
        setCustomOpen(function (value) { return !value; });
      }

      function finishRun(reason, forcedValue, token) {
        if (token !== undefined && token !== runTokenRef.current) return;
        if (phaseRef.current !== "running") return;
        phaseRef.current = "done";
        setPhase("done");
        composingRef.current = false;
        setComposing(false);

        const finalText = typeof forcedValue === "string" ? forcedValue : typedRef.current;
        const durationMs = duration * 1000;
        const actualElapsed = Math.max(0, Math.min(durationMs, Date.now() - startedAtRef.current));
        const elapsedMs = reason === "time" ? durationMs : Math.max(250, actualElapsed);
        const correct = countCorrect(passage.text, finalText);
        const attemptsMade = Math.max(attemptsRef.current, finalText.length);
        const correctMade = Math.min(attemptsMade, Math.max(correctAttemptsRef.current, correct));
        const accuracy = attemptsMade > 0 ? Math.round((correctMade / attemptsMade) * 100) : 0;
        const speed = speedOf(lang, correct, elapsedMs);
        const progress = targetLength > 0 ? finalText.length / targetLength : 0;
        const progressPercent = Math.min(100, Math.round(progress * 100));
        const ranked = finalText.length > 0 && elapsedMs >= 10000 && correct >= (lang === "en" ? 20 : 10);
        const bestBefore = findBest(history, lang);
        const newBest = ranked && (!bestBefore || speed > bestBefore.speed || (speed === bestBefore.speed && accuracy > bestBefore.accuracy));
        const now = Date.now();
        const record = {
          id: String(now) + "-" + Math.random().toString(36).slice(2, 7),
          at: now,
          lang,
          duration,
          topic: passage.topic,
          title: passage.title,
          speed,
          accuracy,
          progress: progressPercent,
          correct,
          attempts: attemptsMade,
          elapsedMs,
          reason,
          ranked
        };

        setRemainingMs(reason === "time" ? 0 : Math.max(0, durationMs - elapsedMs));
        if (finalText.length > 0) {
          const nextHistory = [record, ...history].slice(0, HISTORY_LIMIT);
          setHistory(nextHistory);
          writeStorageJSON(HISTORY_KEY, nextHistory);
        }
        setResult({ ...record, newBest });
      }

      finishRef.current = finishRun;

      function commitValue(rawValue) {
        if (phaseRef.current !== "running") return;
        const targetText = passage.text;
        let value = String(rawValue == null ? "" : rawValue).replace(/[\r\n]/g, "");
        if (value.length > targetText.length) value = value.slice(0, targetText.length);
        const previous = typedRef.current;
        if (value === previous) return;

        let nextAttempts = attemptsRef.current;
        let nextCorrectAttempts = correctAttemptsRef.current;
        let prefix = 0;
        while (prefix < previous.length && prefix < value.length && previous[prefix] === value[prefix]) prefix += 1;
        let suffix = 0;
        while (
          suffix < previous.length - prefix &&
          suffix < value.length - prefix &&
          previous[previous.length - 1 - suffix] === value[value.length - 1 - suffix]
        ) {
          suffix += 1;
        }
        const changedEnd = value.length - suffix;
        for (let i = prefix; i < changedEnd; i += 1) {
          nextAttempts += 1;
          if (value[i] === targetText[i]) nextCorrectAttempts += 1;
        }
        attemptsRef.current = nextAttempts;
        correctAttemptsRef.current = nextCorrectAttempts;
        setAttempts(nextAttempts);
        setCorrectAttempts(nextCorrectAttempts);
        typedRef.current = value;
        setTyped(value);

        if (value === targetText) {
          finishRef.current("complete", value, runTokenRef.current);
        }
      }

      function handleInputChange(event) {
        if (composingRef.current) return;
        commitValue(event.currentTarget.value);
      }

      function handleCompositionStart() {
        composingRef.current = true;
        setComposing(true);
      }

      function handleCompositionEnd(event) {
        composingRef.current = false;
        setComposing(false);
        const value = event.currentTarget.value;
        const token = runTokenRef.current;
        window.setTimeout(function () {
          if (runTokenRef.current !== token) return;
          commitValue(value);
        }, 0);
      }

      function handleRestart() {
        beginWith(passage);
      }

      function handleTogglePinyin() {
        setShowPinyin(function (value) { return !value; });
        if (phaseRef.current === "running") {
          window.setTimeout(function () {
            if (inputRef.current) inputRef.current.focus({ preventScroll: true });
          }, 0);
        }
      }

      function handleShuffle() {
        if (phaseRef.current === "running") return;
        setPassage(pickPassage(lang, topic, passage.id, customPassages));
      }

      function handleNext() {
        beginWith(pickPassage(lang, topic, passage.id, customPassages));
      }

      function handleClearHistory() {
        if (typeof window.confirm === "function") {
          try {
            if (!window.confirm(tr("rail.history.confirm"))) return;
          } catch (error) {
            return;
          }
        }
        setHistory([]);
        writeStorageJSON(HISTORY_KEY, []);
      }

      React.useEffect(
        function () {
          return function () {
            phaseRef.current = "stopped";
            runTokenRef.current += 1;
          };
        },
        []
      );

      React.useEffect(
        function () {
          if (phase !== "idle") return;
          if (targetRef.current) targetRef.current.scrollTop = 0;
        },
        [passage.id, phase]
      );

      React.useEffect(
        function () {
          if (!running) return undefined;
          const timer = window.setTimeout(function () {
            const input = inputRef.current;
            if (input) input.focus({ preventScroll: true });
            if (targetRef.current) targetRef.current.scrollTop = 0;
          }, 40);
          return function () { window.clearTimeout(timer); };
        },
        [running, runId]
      );

      React.useEffect(
        function () {
          if (!running) return;
          const box = targetRef.current;
          if (!box) return;
          const current = box.querySelector('[data-current="true"]');
          if (!current) return;
          const boxRect = box.getBoundingClientRect();
          const currentRect = current.getBoundingClientRect();
          const margin = 26;
          if (currentRect.bottom > boxRect.bottom - margin) {
            box.scrollTop += currentRect.bottom - boxRect.bottom + margin;
          } else if (currentRect.top < boxRect.top + margin) {
            box.scrollTop += currentRect.top - boxRect.top - margin;
          }
        },
        [typed, running, showPinyin]
      );

      React.useEffect(
        function () {
          if (!running) return undefined;
          const token = runTokenRef.current;
          const deadline = startedAtRef.current + duration * 1000;
          const tick = function () {
            if (token !== runTokenRef.current || phaseRef.current !== "running") {
              window.clearInterval(intervalId);
              return;
            }
            const left = Math.max(0, deadline - Date.now());
            setRemainingMs(left);
            if (left <= 0) {
              window.clearInterval(intervalId);
              finishRef.current("time", undefined, token);
            }
          };
          const intervalId = window.setInterval(tick, 120);
          tick();
          return function () { window.clearInterval(intervalId); };
        },
        [running, runId, duration]
      );

      const secondsLeft = running ? formatClock(remainingMs) : formatClock(duration * 1000);
      const attemptLabel = result ? result.attempts : 0;
      const message = result && result.attempts === 0
        ? tr("result.noInput")
        : result && !result.ranked
          ? tr("result.notRanked")
          : "";

      return h(
        "div",
        { className: "ts-app", lang: localeId || undefined },
        h("style", null, CSS),
        h(
          "div",
          { className: "ts-shell" },
          h(
            "header",
            { className: "ts-hero" },
            h(
              "div",
              { className: "ts-brand-row" },
              h(
                "div",
                { className: "ts-brand" },
                h(Mark),
                h(
                  "div",
                  { className: "ts-brand-copy" },
                  h("span", { className: "ts-brand-name" }, tr("brand.name")),
                  h("span", { className: "ts-brand-sub" }, tr("brand.sub"))
                )
              ),
              h("span", { className: "ts-local-pill" }, tr("hero.tag.local"))
            ),
            h(
              "div",
              { className: "ts-hero-main" },
              h(
                "div",
                { className: "ts-hero-copy" },
                h("span", { className: "ts-kicker" }, tr("hero.kicker")),
                h("h1", null, tr("hero.title")),
                h("p", { className: "ts-hero-lead" }, tr("hero.lead")),
                h(
                  "div",
                  { className: "ts-tags" },
                  h("span", { className: "ts-tag" }, tr("hero.tag.bilingual")),
                  h("span", { className: "ts-tag" }, tr("hero.tag.local"))
                )
              ),
              h(
                "div",
                { className: "ts-key-motif", "aria-hidden": "true" },
                h("span", { className: "ts-keycap" }, "A"),
                h("span", { className: "ts-keycap" }, "S"),
                h("span", { className: "ts-keycap" }, "D"),
                h("span", { className: "ts-keycap ts-keycap-accent" }, "中")
              )
            )
          ),
          h(
            "div",
            { className: "ts-layout" },
            h(
              "section",
              { className: "ts-panel", "aria-labelledby": panelTitleId },
              h(
                "div",
                { className: "ts-panel-head" },
                h(
                  "div",
                  null,
                  h("span", { className: "ts-kicker" }, tr("studio.kicker")),
                  h("h2", { id: panelTitleId }, tr("studio.title"))
                ),
                h("p", { className: "ts-panel-note" }, langLabel + " · " + speedUnit)
              ),
              h(
                "div",
                { className: "ts-controls" },
                h(Segmented, {
                  label: tr("controls.language"),
                  labelId: languageLabelId,
                  value: lang,
                  options: languageOptions,
                  disabled: running,
                  onChange: changeLanguage
                }),
                h(Segmented, {
                  label: tr("controls.duration"),
                  labelId: durationLabelId,
                  value: duration,
                  options: durationOptions,
                  disabled: running,
                  onChange: changeDuration
                }),
                h(Segmented, {
                  label: tr("controls.topic"),
                  labelId: topicLabelId,
                  value: topic,
                  options: topicOptions,
                  disabled: running,
                  onChange: changeTopic
                })
              ),
              h("p", { className: "ts-hint" }, langHint),
              customOpen
                ? h(CustomManager, {
                    tr: tr,
                    passages: customPassages,
                    onSave: handleCustomSave,
                    onRemove: handleCustomRemove,
                    onClose: function () { setCustomOpen(false); }
                  })
                : null,
              h(
                "section",
                { className: "ts-preview", "aria-labelledby": passageTitleId },
                h(
                  "div",
                  { className: "ts-preview-head" },
                  h(
                    "div",
                    { className: "ts-preview-title" },
                    h("span", { className: "ts-kicker" }, tr("passage.preview") + " · " + topicFor(tr, passage.topic)),
                    h("h3", { className: "ts-passage-title", id: passageTitleId }, passage.title)
                  ),
                  h(
                    "div",
                    { className: "ts-badges" },
                    phase === "idle"
                      ? h(
                          "button",
                          { type: "button", className: "ts-badge ts-badge-btn", onClick: handleShuffle },
                          tr("passage.shuffle")
                        )
                      : null,
                    phase === "idle"
                      ? h(
                          "button",
                          {
                            type: "button",
                            className: "ts-badge ts-badge-btn" + (customOpen ? " is-active" : ""),
                            "aria-expanded": customOpen ? "true" : "false",
                            onClick: handleToggleCustom
                          },
                          tr("custom.open")
                        )
                      : null,
                    lang === "zh" && pinyinForPassage
                      ? h(
                          "button",
                          {
                            type: "button",
                            className: "ts-badge ts-badge-btn ts-pinyin-toggle" + (showPinyin ? " is-active" : ""),
                            "aria-pressed": showPinyin ? "true" : "false",
                            "aria-label": tr(showPinyin ? "pinyin.hide" : "pinyin.show"),
                            title: tr(showPinyin ? "pinyin.hide" : "pinyin.show"),
                            onClick: handleTogglePinyin
                          },
                          tr("pinyin.label")
                        )
                      : null,
                    h("span", { className: "ts-badge" }, langLabel),
                    h("span", { className: "ts-badge" }, String(targetLength) + " " + passageUnit),
                    running ? h("span", { className: "ts-timer-pill", role: "timer", "aria-label": tr("timer.label") + " " + secondsLeft }, secondsLeft) : null
                  )
                ),
                h(TargetText, {
                  text: passage.text,
                  typed,
                  running,
                  lang,
                  pinyin: pinyinForPassage,
                  showPinyin,
                  scrollRef: targetRef
                })
              ),
              h(
                "div",
                { className: "ts-console" },
                h(
                  "div",
                  { className: "ts-console-inner" },
                  phase === "idle"
                    ? h(
                        "div",
                        { className: "ts-readystate" },
                        h(
                          "div",
                          { className: "ts-readystate-copy" },
                          h("span", { className: "ts-kicker" }, tr("console.idleKicker")),
                          h("h3", null, tr("console.idleTitle")),
                          h("p", null, tr("console.idleBody"))
                        ),
                        h(
                          "button",
                          {
                            type: "button",
                            className: "ts-btn ts-btn-primary ts-start-btn",
                            onClick: function () { beginWith(passage); }
                          },
                          tr("console.start"),
                          h("span", { className: "ts-btn-arrow", "aria-hidden": "true" }, "→")
                        )
                      )
                    : null,
                  running
                    ? h(
                        "div",
                        { className: "ts-livestate" },
                        h(
                          "div",
                          { className: "ts-input-wrap" },
                          h("input", {
                            key: runId,
                            ref: inputRef,
                            className: "ts-input",
                            type: "text",
                            lang: lang === "zh" ? "zh-CN" : "en",
                            autoComplete: "off",
                            autoCorrect: "off",
                            autoCapitalize: "off",
                            autoFocus: true,
                            spellCheck: false,
                            maxLength: targetLength,
                            placeholder: tr("console.placeholder"),
                            "aria-label": tr("console.inputLabel"),
                            onChange: handleInputChange,
                            onCompositionStart: handleCompositionStart,
                            onCompositionEnd: handleCompositionEnd,
                            onPaste: function (event) { event.preventDefault(); },
                            onDrop: function (event) { event.preventDefault(); }
                          }),
                          h(
                            "div",
                            { className: "ts-input-meta" },
                            h(
                              "span",
                              { className: "ts-input-hint" + (composing ? " is-composing" : ""), "aria-live": "polite" },
                              composing ? tr("console.imeComposing") : tr("console.liveHint")
                            ),
                            h(
                              "button",
                              { type: "button", className: "ts-textbtn", onClick: handleRestart },
                              tr("console.restart")
                            )
                          )
                        ),
                        h(
                          "div",
                          {
                            className: "ts-progress",
                            role: "progressbar",
                            "aria-label": tr("progress.label"),
                            "aria-valuemin": 0,
                            "aria-valuemax": 100,
                            "aria-valuenow": progressPct
                          },
                          h("span", { className: "ts-progress-fill", style: { width: progressPct + "%" } })
                        ),
                        h(
                          "div",
                          { className: "ts-stats ts-live-stats" },
                          h(Stat, { label: tr("metrics.time"), value: secondsLeft }),
                          h(Stat, { label: tr("metrics.speed"), value: String(liveSpeed), unit: speedUnit }),
                          h(Stat, {
                            label: tr("metrics.accuracy"),
                            value: liveAccuracy === null ? "—" : String(liveAccuracy),
                            unit: liveAccuracy === null ? "" : "%"
                          }),
                          h(Stat, { label: tr("metrics.progress"), value: String(progressPct), unit: "%" })
                        )
                      )
                    : null,
                  done && result
                    ? h(
                        "div",
                        { className: "ts-result" },
                        h(
                          "div",
                          { className: "ts-result-head" },
                          h(
                            "div",
                            { className: "ts-result-copy" },
                            h("span", { className: "ts-result-kicker" }, tr(result.reason === "complete" ? "result.kickerComplete" : "result.kickerTime")),
                            h("h3", null, tr(result.reason === "complete" ? "result.titleComplete" : "result.titleTime")),
                            h("p", null, tr(result.reason === "complete" ? "result.bodyComplete" : "result.bodyTime"))
                          ),
                          h(
                            "div",
                            { className: "ts-result-score" },
                            h("span", { className: "ts-result-score-label" }, tr("result.speedLabel")),
                            h("div", null, h("strong", null, String(result.speed)), h("span", null, unitFor(tr, result.lang)))
                          )
                        ),
                        h(
                          "div",
                          { className: "ts-result-stats" },
                          h(Stat, { label: tr("result.accuracy"), value: String(result.accuracy), unit: "%" }),
                          h(Stat, { label: tr("result.progress"), value: String(result.progress), unit: "%" }),
                          h(Stat, { label: tr("result.correct"), value: String(result.correct), unit: "/ " + targetLength }),
                          h(Stat, { label: tr("result.elapsed"), value: formatClock(result.elapsedMs) })
                        ),
                        h(
                          "div",
                          { className: "ts-result-foot" },
                          h(
                            "p",
                            { className: "ts-result-message" },
                            result.newBest ? h("span", { className: "ts-best-badge" }, tr("result.newBest")) : null,
                            message ? h("span", null, message) : null,
                            h("span", null, tr("result.attempts") + " " + attemptLabel)
                          ),
                          h(
                            "div",
                            { className: "ts-result-actions" },
                            h(
                              "button",
                              { type: "button", className: "ts-btn ts-btn-primary", onClick: function () { beginWith(passage); } },
                              tr("result.retry")
                            ),
                            h(
                              "button",
                              { type: "button", className: "ts-btn", onClick: handleNext },
                              tr("result.next")
                            )
                          )
                        ),
                        h(
                          "div",
                          { className: "ts-sr-only", role: "status", "aria-live": "polite" },
                          tr(result.reason === "complete" ? "result.titleComplete" : "result.titleTime") + " " +
                            String(result.speed) + " " + unitFor(tr, result.lang) + ", " +
                            tr("result.accuracy") + " " + String(result.accuracy) + "%"
                        )
                      )
                    : null
                )
              )
            ),
            h(
              "aside",
              { className: "ts-rail", "aria-label": tr("rail.label") },
              h(
                "section",
                { className: "ts-best ts-card" },
                h(
                  "div",
                  { className: "ts-best-head" },
                  h("span", { className: "ts-kicker" }, tr("rail.best.title")),
                  h("span", { className: "ts-best-lang" }, langLabel)
                ),
                best
                  ? h(
                      React.Fragment,
                      null,
                      h("p", { className: "ts-best-subtitle" }, tr("rail.best.subtitle")),
                      h(
                        "div",
                        { className: "ts-best-score" },
                        h("strong", null, String(best.speed)),
                        h("span", null, unitFor(tr, best.lang))
                      ),
                      h(
                        "div",
                        { className: "ts-best-meta" },
                        h("span", null, tr("rail.best.accuracy") + " " + String(best.accuracy) + "%"),
                        h("span", null, String(langRuns) + " " + tr("rail.best.runs"))
                      )
                    )
                  : h(
                      React.Fragment,
                      null,
                      h("div", { className: "ts-best-empty", "aria-hidden": "true" }, "—"),
                      h("p", { className: "ts-best-empty-note" }, tr("rail.best.none"))
                    )
              ),
              h(
                "section",
                { className: "ts-card" },
                h(
                  "div",
                  { className: "ts-card-head" },
                  h("h3", null, tr("rail.history.title")),
                  history.length > 0
                    ? h(
                        "button",
                        { type: "button", className: "ts-textbtn is-danger", onClick: handleClearHistory },
                        tr("rail.history.clear")
                      )
                    : null
                ),
                history.length === 0
                  ? h("p", { className: "ts-history-empty" }, tr("rail.history.empty"))
                  : h(
                      "ol",
                      { className: "ts-history-list" },
                      history.slice(0, 4).map(function (record) {
                        return h(
                          "li",
                          { key: record.id, className: "ts-history-row", title: record.title || "" },
                          h("span", { className: "ts-history-lang" }, record.lang === "zh" ? "中" : "EN"),
                          h(
                            "div",
                            { className: "ts-history-main" },
                            h(
                              "div",
                              { className: "ts-history-speed" },
                              String(record.speed),
                              h("span", null, unitFor(tr, record.lang))
                            ),
                            h(
                              "div",
                              { className: "ts-history-meta" },
                              String(record.accuracy) + "%",
                              " · ",
                              String(record.duration) + tr("unit.secondsShort"),
                              " · ",
                              topicFor(tr, record.topic)
                            )
                          ),
                          h(
                            "time",
                            { className: "ts-history-time", dateTime: isoWhen(record.at) },
                            formatWhen(record.at, dateLocale)
                          )
                        );
                      })
                    ),
                history.length > 0 ? h("p", { className: "ts-history-note" }, tr("rail.method.local")) : null
              ),
              h(
                "section",
                { className: "ts-card ts-method-card" },
                h("div", { className: "ts-card-head" }, h("h3", null, tr("rail.method.title"))),
                h(
                  "ul",
                  { className: "ts-method-list" },
                  h(
                    "li",
                    null,
                    h("span", { className: "ts-method-index" }, "01"),
                    h("p", null, tr("rail.method.speed"))
                  ),
                  h(
                    "li",
                    null,
                    h("span", { className: "ts-method-index" }, "02"),
                    h("p", null, tr("rail.method.accuracy"))
                  ),
                  h(
                    "li",
                    null,
                    h("span", { className: "ts-method-index" }, "03"),
                    h("p", null, tr("rail.method.rank"))
                  ),
                  h(
                    "li",
                    null,
                    h("span", { className: "ts-method-index" }, "04"),
                    h("p", null, tr("rail.method.local"))
                  )
                )
              )
            )
          ),
          h(
            "footer",
            { className: "ts-footer" },
            h("span", null, tr("footer")),
            h("span", null, "KEYFLOW · " + tr("hero.tag.local"))
          )
        )
      );
    }

    function makeEntry(locale, t) {
      function LocaleBoundEntry() {
        const snapshot = React.useSyncExternalStore(
          React.useCallback(function (callback) { return locale.subscribe(callback); }, [locale]),
          React.useCallback(function () { return locale.getSnapshot(); }, [locale]),
          React.useCallback(function () { return locale.getSnapshot(); }, [locale])
        );
        return h(TypingStudio, { t, localeId: snapshot && snapshot.active ? snapshot.active : "zh" });
      }
      return LocaleBoundEntry;
    }

    return {
      inject: ["slots", "locale"],
      apply(ctx) {
        ctx.effect(function () {
          const disposeEn = ctx.locale.register(NS, "en", EN);
          const disposeZh = ctx.locale.register(NS, "zh", ZH);
          return function () {
            disposeEn();
            disposeZh();
          };
        }, "typing-studio: locale dictionaries");

        const t = ctx.locale.bind(NS);
        const Entry = makeEntry(ctx.locale, t);

        ctx.slots.inject("sidebar.panellist", function () {
          return ctx.slots.register(
            {
              name: "sidebar.panellist",
              id: MAIN_ID,
              order: 17,
              label: function () {
                const label = t("nav.label");
                return label === "nav.label" ? EN["nav.label"] : label;
              }
            },
            SidebarIcon
          );
        });

        ctx.slots.inject("main", function () {
          return ctx.slots.register({ name: "main", key: MAIN_ID }, Entry);
        });
      }
    };
  }
});

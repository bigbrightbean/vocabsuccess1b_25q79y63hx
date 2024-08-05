// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The factory's __________ of smoke and chemicals into the air has been a major concern for environmentalists.",
        chinese_question: "工厂向空气中 __________ 烟雾和化学物质一直是环保人士关注的主要问题。",
        answers: [
            { option: "A", answer: "transmission", chinese_answer: "传送", chinese_romanization: "chuánsòng" },
            { option: "B", answer: "emission", chinese_answer: "排放", chinese_romanization: "páifàng" },
            { option: "C", answer: "omission", chinese_answer: "遗漏", chinese_romanization: "yílòu" },
            { option: "D", answer: "submission", chinese_answer: "提交", chinese_romanization: "tíjiāo" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'emission' means the production and discharge of something, especially gas or radiation." +
            "<br><br>" +
            "(A) 'transmission' means the act of passing something from one place or person to another." +
            "<br><br>" +
            "(C) 'omission' means something that has been left out or excluded." +
            "<br><br>" +
            "(D) 'submission' means the act of yielding to a superior force or the act of presenting something for consideration.",
        chinese_explanation: "(B) '排放' 一词意味着生产和排放某物，尤其是气体或辐射。" +
            "<br><br>" +
            "(A) '传送' 意味着将某物从一个地方或人传递到另一个地方。" +
            "<br><br>" +
            "(C) '遗漏' 意味着某物已被遗漏或排除。" +
            "<br><br>" +
            "(D) '提交' 意味着屈服于一种优越的力量或提出某事供考虑。"
    },
    {
        id: 2,
        question: "As she watched her friend win the award, the __________ in her eyes was clear, revealing the longing and resentment in her heart.",
        chinese_question: "当她看着朋友获奖时，眼中的 __________ 显而易见，显示出她心中的渴望和怨恨。",
        answers: [
            { option: "A", answer: "pity", chinese_answer: "同情", chinese_romanization: "tóngqíng" },
            { option: "B", answer: "joy", chinese_answer: "喜悦", chinese_romanization: "xǐyuè" },
            { option: "C", answer: "boredom", chinese_answer: "无聊", chinese_romanization: "wúliáo" },
            { option: "D", answer: "envy", chinese_answer: "嫉妒", chinese_romanization: "jídù" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'envy' means a feeling of discontented or resentful longing aroused by someone else's possessions, qualities, or luck." +
            "<br><br>" +
            "(A) 'pity' means the feeling of sorrow and compassion caused by the suffering and misfortunes of others." +
            "<br><br>" +
            "(B) 'joy' means a feeling of great pleasure and happiness." +
            "<br><br>" +
            "(C) 'boredom' means a state of being bored or uninterested.",
        chinese_explanation: "(D) '嫉妒' 意味着对他人的财产、品质或运气产生不满或怨恨的感觉。" +
            "<br><br>" +
            "(A) '同情' 意味着因他人的痛苦和不幸而产生的悲伤和怜悯。" +
            "<br><br>" +
            "(B) '喜悦' 意味着极大的快乐和幸福。" +
            "<br><br>" +
            "(C) '无聊' 意味着感到无趣或不感兴趣的状态。"
    },
    {
        id: 3,
    question: "The magician's act of __________ left the audience in awe as he appeared to float effortlessly above the stage.",
    chinese_question: "魔术师的 __________ 表演让观众惊叹不已，因为他看起来毫不费力地漂浮在舞台上方。",
    answers: [
        { option: "A", answer: "levitation", chinese_answer: "悬浮", chinese_romanization: "xuánfú" },
        { option: "B", answer: "confusion", chinese_answer: "困惑", chinese_romanization: "kùnhuò" },
        { option: "C", answer: "routine", chinese_answer: "常规", chinese_romanization: "chángguī" },
        { option: "D", answer: "acrobatics", chinese_answer: "杂技", chinese_romanization: "zájì" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'levitation' means the action of rising or causing something to rise and hover in the air, typically by means of supposed magical powers." +
        "<br><br>" +
        "(B) 'confusion' means the state of being bewildered or unclear in one's mind about something." +
        "<br><br>" +
        "(C) 'routine' means a sequence of actions regularly followed." +
        "<br><br>" +
        "(D) 'acrobatics' means spectacular gymnastic feats.",
    chinese_explanation: "(A) '悬浮'一词意味着上升或使某物在空中悬浮的动作，通常通过假想的魔力。" +
        "<br><br>" +
        "(B) '困惑' 意味着在某件事上感到困惑或不清楚的状态。" +
        "<br><br>" +
        "(C) '常规' 意味着定期遵循的一系列动作。" +
        "<br><br>" +
        "(D) '杂技' 意味着精彩的体操特技。"
    },
    {
        id: 4,
        question: "The political __________ was often featured on news programs to provide analysis and commentary on current events.",
        chinese_question: "这位政治 __________ 经常出现在新闻节目中，为当前事件提供分析和评论。",
        answers: [
            { option: "A", answer: "novice", chinese_answer: "新手", chinese_romanization: "xīnshǒu" },
            { option: "B", answer: "pundit", chinese_answer: "专家", chinese_romanization: "zhuānjiā" },
            { option: "C", answer: "amateur", chinese_answer: "业余爱好者", chinese_romanization: "yèyú àihào zhě" },
            { option: "D", answer: "spectator", chinese_answer: "观众", chinese_romanization: "guānzhòng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'pundit' means an expert in a particular subject or field who is frequently called upon to give opinions about it to the public." +
            "<br><br>" +
            "(A) 'novice' means a person new to or inexperienced in a field or situation." +
            "<br><br>" +
            "(C) 'amateur' means a person who engages in a pursuit, especially a sport, on an unpaid basis." +
            "<br><br>" +
            "(D) 'spectator' means a person who watches at a show, game, or other event.",
        chinese_explanation: "(B) '专家'一词意味着在特定学科或领域的专家，经常被要求向公众提供意见。" +
            "<br><br>" +
            "(A) '新手' 意味着在某个领域或情况下的新手或缺乏经验的人。" +
            "<br><br>" +
            "(C) '业余爱好者' 意味着从事追求，特别是体育活动，而没有报酬的人。" +
            "<br><br>" +
            "(D) '观众' 意味着在演出、比赛或其他活动中观看的人。"
    },
    {
        id: 5,
        question: "The city council explored every __________ for improving public transportation, including new bus routes and bike lanes.",
        chinese_question: "市议会探讨了改善公共交通的每一个 __________，包括新的公交线路和自行车道。",
        answers: [
            { option: "A", answer: "avenue", chinese_answer: "途径", chinese_romanization: "tújìng" },
            { option: "B", answer: "obstacle", chinese_answer: "障碍", chinese_romanization: "zhàng'ài" },
            { option: "C", answer: "problem", chinese_answer: "问题", chinese_romanization: "wèntí" },
            { option: "D", answer: "restriction", chinese_answer: "限制", chinese_romanization: "xiànzhì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'avenue' means a way of approaching a problem or making progress toward something." +
            "<br><br>" +
            "(B) 'obstacle' means a thing that blocks one's way or prevents or hinders progress." +
            "<br><br>" +
            "(C) 'problem' means a matter or situation regarded as unwelcome or harmful and needing to be dealt with and overcome." +
            "<br><br>" +
            "(D) 'restriction' means a limiting condition or measure.",
        chinese_explanation: "(A) '途径' 意味着解决问题或取得进展的方法。" +
            "<br><br>" +
            "(B) '障碍' 意味着阻挡某人前进的事物或阻碍进展的事物。" +
            "<br><br>" +
            "(C) '问题' 意味着被认为不受欢迎或有害并需要解决和克服的事项或情况。" +
            "<br><br>" +
            "(D) '限制' 意味着限制的条件或措施。"
    },
    {
        id: 6,
        question: "The data scientist found an __________ in the dataset, where one value was drastically different from the others.",
        chinese_question: "数据科学家在数据集中发现了一个 __________，其中一个值与其他值大不相同。",
        answers: [
            { option: "A", answer: "anomaly", chinese_answer: "异常现象", chinese_romanization: "yìcháng xiànxiàng" },
            { option: "B", answer: "trend", chinese_answer: "趋势", chinese_romanization: "qūshì" },
            { option: "C", answer: "regularity", chinese_answer: "规律性", chinese_romanization: "guīlǜ xìng" },
            { option: "D", answer: "predictability", chinese_answer: "可预测性", chinese_romanization: "kě yùcè xìng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'anomaly' figuratively means something that deviates from what is standard, normal, or expected." +
            "<br><br>" +
            "(B) 'trend' means a general direction in which something is developing or changing." +
            "<br><br>" +
            "(C) 'regularity' means the state or quality of being regular." +
            "<br><br>" +
            "(D) 'predictability' means the quality of being regarded as likely to happen, especially as a result of previous knowledge or experience.",
        chinese_explanation: "(A) '异常现象' 在此语境下意指偏离标准、正常或预期的事物。" +
            "<br><br>" +
            "(B) '趋势' 意味着某事物发展的或变化的一般方向。" +
            "<br><br>" +
            "(C) '规律性' 意味着规则的状态或质量。" +
            "<br><br>" +
            "(D) '可预测性' 意味着被认为可能发生的质量，尤其是由于先前的知识或经验。"
    },
    {
        id: 7,
        question: "The children's __________ in the playground could be heard from several blocks away.",
        chinese_question: "操场上孩子们的 __________ 在几个街区外都能听到。",
        answers: [
            { option: "A", answer: "murmur", chinese_answer: "低语", chinese_romanization: "dīyǔ" },
            { option: "B", answer: "din", chinese_answer: "喧闹", chinese_romanization: "xuānnào" },
            { option: "C", answer: "whisper", chinese_answer: "耳语", chinese_romanization: "ěryǔ" },
            { option: "D", answer: "mutter", chinese_answer: "嘀咕", chinese_romanization: "dígū" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'din' means a loud, unpleasant, and prolonged noise." +
            "<br><br>" +
            "(A) 'murmur' means a soft, indistinct sound made by a person or group of people speaking quietly or at a distance." +
            "<br><br>" +
            "(C) 'whisper' means to speak very softly using one's breath without one's vocal cords, especially for the sake of privacy." +
            "<br><br>" +
            "(D) 'mutter' means to say something in a low or barely audible voice, especially in dissatisfaction or irritation.",
        chinese_explanation: "(B) '喧闹'一词意味着嘈杂、令人不愉快且持续的噪音。" +
            "<br><br>" +
            "(A) '低语' 意味着人或一群人轻声或远距离说话时发出的柔和、模糊的声音。" +
            "<br><br>" +
            "(C) '耳语' 意味着不使用声带而非常轻柔地说话，尤其是为了隐私。" +
            "<br><br>" +
            "(D) '嘀咕' 意味着以低声或几乎听不见的声音说话，尤其是在不满或恼怒中。"
    },
    {
        id: 8,
        question: "The police finally apprehended the __________ who had been orchestrating a series of cybercrimes, including hacking into bank systems and stealing personal information.",
        chinese_question: "警方终于逮捕了那个 __________ ，他一直在策划一系列网络犯罪，包括入侵银行系统和窃取个人信息。",
        answers: [
            { option: "A", answer: "benefactor", chinese_answer: "恩人", chinese_romanization: "ēnrén" },
            { option: "B", answer: "philanthropist", chinese_answer: "慈善家", chinese_romanization: "císhànjiā" },
            { option: "C", answer: "altruist", chinese_answer: "利他主义者", chinese_romanization: "lìtā zhǔyì zhě" },
            { option: "D", answer: "malefactor", chinese_answer: "罪犯", chinese_romanization: "zuìfàn" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'malefactor' means a person who commits a crime or some other wrong." +
            "<br><br>" +
            "(A) 'benefactor' means a person who gives money or other help to a person or cause." +
            "<br><br>" +
            "(B) 'philanthropist' means a person who seeks to promote the welfare of others, especially by donating money to good causes." +
            "<br><br>" +
            "(C) 'altruist' means a person who is selflessly concerned for the well-being of others.",
        chinese_explanation: "(D) '罪犯' 是指犯下犯罪或其他错误的人。" +
            "<br><br>" +
            "(A) '恩人' 是指为他人或事业提供资金或其他帮助的人。" +
            "<br><br>" +
            "(B) '慈善家' 是指通过捐赠金钱促进他人福利的人。" +
            "<br><br>" +
            "(C) '利他主义者' 是指无私地关心他人福利的人。"
    },
    {
        id: 9,
        question: "The detective uncovered the criminal's elaborate __________ to steal the priceless artifact when he found the detailed blueprints and secret messages.",
        chinese_question: "侦探在发现详细的蓝图和秘密信息时揭露了罪犯精心策划的 __________，试图偷走无价的文物。",
        answers: [
            { option: "A", answer: "honesty", chinese_answer: "诚实", chinese_romanization: "chéngshí" },
            { option: "B", answer: "machination", chinese_answer: "阴谋", chinese_romanization: "yīnmóu" },
            { option: "C", answer: "generosity", chinese_answer: "慷慨", chinese_romanization: "kāngkǎi" },
            { option: "D", answer: "oversight", chinese_answer: "疏忽", chinese_romanization: "shūhū" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'machination' means a plot or scheme." +
            "<br><br>" +
            "(A) 'honesty' means the quality of being honest." +
            "<br><br>" +
            "(C) 'generosity' means the quality of being kind and generous." +
            "<br><br>" +
            "(D) 'oversight' means an unintentional failure to notice or do something.",
        chinese_explanation: "(B) '阴谋' 意味着一个阴谋或计划。" +
            "<br><br>" +
            "(A) '诚实' 意味着诚实的品质。" +
            "<br><br>" +
            "(C) '慷慨' 意味着善良和慷慨的品质。" +
            "<br><br>" +
            "(D) '疏忽' 意味着未注意或未做某事的无意失误。"
    },
    {
        id: 10,
    question: "The tree can be a __________ to numerous bird species, providing shelter and food.",
    chinese_question: "这棵树可以成为许多鸟类的 __________ ，提供庇护和食物。",
    answers: [
        { option: "A", answer: "host", chinese_answer: "宿主", chinese_romanization: "sùzhǔ" },
        { option: "B", answer: "predator", chinese_answer: "捕食者", chinese_romanization: "bǔshí zhě" },
        { option: "C", answer: "competitor", chinese_answer: "竞争者", chinese_romanization: "jìngzhēng zhě" },
        { option: "D", answer: "enemy", chinese_answer: "敌人", chinese_romanization: "dírén" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'host' means an organism that provides food or shelter to another organism." +
        "<br><br>" +
        "(B) 'predator' means an animal that naturally preys on others." +
        "<br><br>" +
        "(C) 'competitor' means an organism that competes with another for resources." +
        "<br><br>" +
        "(D) 'enemy' means a person who is actively opposed or hostile to someone or something.",
    chinese_explanation: "(A) '宿主' 意味着为另一生物提供食物或庇护的生物。" +
        "<br><br>" +
        "(B) '捕食者' 意味着自然捕食其他动物的动物。" +
        "<br><br>" +
        "(C) '竞争者' 意味着为资源与另一个生物竞争的生物。" +
        "<br><br>" +
        "(D) '敌人' 意味着积极反对或敌对某人或某物的人。"
    }
];


// Function to restart the quiz
function restartQuiz() {
    // Reload the page to restart the quiz
    location.reload();
}

// Variable to keep track of the current question index
var currentQuestionIndex = 0;

// Variable to keep track of the total score
var totalScore = 0;

// Array to store the selected answers for each question
var selectedAnswers = new Array(questions.length).fill(null);

// Variable to track the state of the Chinese translations checkbox
var chineseTranslationsChecked = false;

// Function to toggle Chinese translations
function toggleChineseTranslations() {
    var toggleChineseCheckbox = document.getElementById('toggleChinese');
    chineseTranslationsChecked = !chineseTranslationsChecked; // Toggle checkbox state
    // Call the displayQuestion() function to update the display based on the checkbox state
    displayQuestion(chineseTranslationsChecked);
}



// Function to toggle question shuffling
function toggleQuestionShuffle() {
    var shuffleCheckbox = document.getElementById('shuffleQuestions');
    var shuffleEnabled = shuffleCheckbox.checked;

    // Check if the current question has been answered
    var currentQuestionAnswered = selectedAnswers[currentQuestionIndex] !== null;

    // If the current question has been answered and shuffling is enabled
    if (currentQuestionAnswered && shuffleEnabled) {
        // Move to the next question automatically
        nextQuestion();
    }

    // Call the shuffleQuestions() function to update the questions based on the checkbox state
    shuffleQuestions(shuffleEnabled);
}


// Function to shuffle the remaining unanswered questions
function shuffleQuestions(shuffleEnabled) {
    // Clear the selected answer for the current question
    selectedAnswers[currentQuestionIndex] = null;

    // Copy the questions array
    var remainingQuestions = questions.slice(currentQuestionIndex);

    // Sort the remaining questions based on their IDs
    remainingQuestions.sort((a, b) => a.id - b.id);

    // If shuffling is enabled, shuffle the remaining questions
    if (shuffleEnabled) {
        // Shuffle the remaining questions array using Fisher-Yates algorithm
        for (var i = remainingQuestions.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = remainingQuestions[i];
            remainingQuestions[i] = remainingQuestions[j];
            remainingQuestions[j] = temp;
        }
    }

    // Update the questions array with the shuffled remaining questions
    questions.splice(currentQuestionIndex, remainingQuestions.length, ...remainingQuestions);

    // Clear the selected MCQ option buttons
    var buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(function(btn) {
        btn.classList.remove('option-selected', 'correct', 'wrong');
    });

    // Display the current question after shuffling
    displayQuestion(document.getElementById('toggleChinese').checked);

    // Update the progress bar
    updateProgressBar();
}


// Function to display the current question
function displayQuestion() {
    // Get the current question object
    var currentQuestion = questions[currentQuestionIndex];
    
    // Extract question texts and options
    var questionText = currentQuestion.question;
    var questionTextCN = currentQuestion.chinese_question;
    var options = currentQuestion.answers;

    // Display the question text in English without the question number
    document.getElementById('question').innerHTML = questionText;

    // Display the question text in Chinese if the checkbox is checked or if Chinese translations were manually toggled on
    if (document.getElementById('toggleChinese').checked || chineseTranslationsChecked) {
        document.getElementById('question_cn').innerHTML = questionTextCN;
    } else {
        document.getElementById('question_cn').innerHTML = ""; // Clear Chinese question
    }

    // Display the options as buttons with selected state
    var optionsHTML = "";
    for (var i = 0; i < options.length; i++) {
        var isSelected = selectedAnswers[currentQuestionIndex] === options[i].option;
        var optionClass = "option-btn";
        if (isSelected) {
            optionClass += ' option-selected'; // Add option-selected class if option is selected
            // Add correct or wrong class based on the correctness of the option
            if (options[i].option === currentQuestion.correctAnswer) {
                optionClass += ' correct';
            } else {
                optionClass += ' wrong';
            }
        }
        optionsHTML += '<button class="' + optionClass + '" onclick="selectAnswer(' + i + ')" value="' + options[i].option + '">' + options[i].option + '. ' + options[i].answer;
        
        // Append Chinese translation if the checkbox is checked or if Chinese translations were manually toggled on
        if (document.getElementById('toggleChinese').checked || chineseTranslationsChecked) {
            optionsHTML += ' (' + options[i].chinese_answer + ' ' + options[i].chinese_romanization + ')';
        }
        
        optionsHTML += '</button><br>'; // Modify this line to remove the "-"
    }
    document.getElementById('options').innerHTML = optionsHTML;

    // Update the progress bar
    updateProgressBar();
}




// Function to handle the answer selection
function selectAnswer(optionIndex) {
    // Update the selected answer for the current question
    selectedAnswers[currentQuestionIndex] = questions[currentQuestionIndex].answers[optionIndex].option;

    // Disable all option buttons to prevent further selection
    var buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(function(btn) {
        btn.disabled = true;
    });

    // Check if the selected answer is correct
    var isCorrect = selectedAnswers[currentQuestionIndex] === questions[currentQuestionIndex].correctAnswer;

    // Display the result
    checkAnswer(selectedAnswers[currentQuestionIndex], isCorrect);
}


// Function to check the answer and display the result
function checkAnswer(selectedOption, isCorrect) {
    // Extract correct answer and explanation
    var correctAnswer = questions[currentQuestionIndex].correctAnswer;
    var correctAnswerEN = questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).answer;
    var correctAnswerCN = questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).chinese_answer;
    var correctAnswerRomanization = questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).chinese_romanization; // Add this line to extract the romanization
    var explanation = questions[currentQuestionIndex].explanation;
    var chineseExplanation = questions[currentQuestionIndex].chinese_explanation;

    // Display result and score
    var resultHTML = "";
    if (isCorrect) {
        // Increase the total score
        totalScore++;

        // Play correct sound
        var audio = new Audio('correct.mp3');
        audio.play();

        // Display correct message and explanation
        resultHTML += "<span class='correct-explanation'>Correct</span><br>"; // Added class for correct explanation
    } else {
        // Play incorrect sound
        var audio = new Audio('incorrect.mp3');
        audio.play();

        // Display incorrect message and correct answer
        resultHTML += "<span class='wrong-explanation'>Incorrect</span><br>"; // Added class for wrong explanation
    }

    resultHTML += "The correct answer is: " + correctAnswer + ": " + correctAnswerEN + ", " + correctAnswerCN + " (" + correctAnswerRomanization + ")<br><br>"; // Modify this line to include the romanization
    resultHTML += "Explanation (English):<br>" + explanation + "<br><br>";
    resultHTML += "Explanation (Chinese):<br>" + chineseExplanation + "<br><br>";

    // Display total score
    resultHTML += "Total Score: " + totalScore + "/" + questions.length;
    document.getElementById('result').innerHTML = resultHTML;

    // Apply correct or incorrect styling to the selected MCQ option button
    var selectedOptionButton = document.querySelector('.option-btn[value="' + selectedOption + '"]');
    if (isCorrect) {
        selectedOptionButton.classList.add('correct');
    } else {
        selectedOptionButton.classList.add('wrong');
    }
}



// Function to update the progress bar
function updateProgressBar() {
    // Calculate the progress percentage
    var progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    
    // Update the width of the progress bar
    document.getElementById('progress-bar').style.width = progress + '%';
}


// Function to move to the previous question
function previousQuestion() {
    // Decrease the current question index
    currentQuestionIndex--;

    // Ensure the index does not go below 0
    if (currentQuestionIndex < 0) {
        currentQuestionIndex = 0;
    }

    // Check the state of the checkbox for Chinese translations
    var showChineseTranslations = document.getElementById('toggleChinese').checked;

    // Display the previous question with the appropriate translations
    displayQuestion(showChineseTranslations);

    // Disable all MCQ buttons
    var buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(function(btn) {
        btn.disabled = true;
    });

    // Enable the previously selected MCQ button
    var previousSelectedAnswer = selectedAnswers[currentQuestionIndex];
    buttons.forEach(function(btn) {
        if (btn.value === previousSelectedAnswer) {
            btn.disabled = false;
            // Check if the previously selected answer is correct or wrong and apply the appropriate class
            if (previousSelectedAnswer === questions[currentQuestionIndex].correctAnswer) {
                btn.classList.add('correct');
            } else {
                btn.classList.add('wrong');
            }
        }
    });

    // Show the selected answer and its correctness for the previous question
    var correctAnswer = questions[currentQuestionIndex].correctAnswer;

    // Display the explanation for the previous question
    var explanationHTML = "";
    if (previousSelectedAnswer) {
        var answerColorClass = previousSelectedAnswer === correctAnswer ? 'correct' : 'wrong';
        explanationHTML += "<span class='" + answerColorClass + "-explanation'>Your Answer is: " + (previousSelectedAnswer === correctAnswer ? "Correct" : "Incorrect") + "</span><br>";
    }
    explanationHTML += "The correct answer is: " + correctAnswer + " (" + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).answer + ", " + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).chinese_answer + ")<br><br>";
    explanationHTML += "Explanation (English):<br>" + questions[currentQuestionIndex].explanation + "<br><br>";
    explanationHTML += "Explanation (Chinese):<br>" + questions[currentQuestionIndex].chinese_explanation + "<br><br>";
    document.getElementById('result').innerHTML = explanationHTML;
}




// Function to end the quiz and display the total score in a popup box
function endQuiz() {
    // Display a popup box with the quiz ended message and total score
    alert("Congratulations! You've reached the end.\n\nYour Total Score: " + totalScore + "/" + questions.length);
}



// Function to move to the next question
// Function to move to the next question
function nextQuestion() {
    // Ensure the "Turn on Chinese translations" checkbox remains unchecked
    chineseTranslationsChecked = false;

    // Check if the player has selected an answer for the current question
    if (selectedAnswers[currentQuestionIndex] === null) {
        // If no answer is selected, display an error message in a popup box
        alert("Please select an answer for Question " + (currentQuestionIndex + 1) + " before moving to the next question.");
        return; // Exit the function to prevent moving to the next question
    }

    // Increase the current question index
    currentQuestionIndex++;

    // Check if all questions have been answered
    if (currentQuestionIndex >= questions.length) {
        // If all questions have been answered, end the quiz
        endQuiz();
        // Reset the current question index to prevent accessing out of bounds
        currentQuestionIndex = questions.length - 1;
    } else {
        // Display the next question with both English and Chinese translations by default
        displayQuestion(chineseTranslationsChecked);

        // Show the selected answer and its correctness for the next question
        var selectedAnswer = selectedAnswers[currentQuestionIndex];
        var correctAnswer = questions[currentQuestionIndex].correctAnswer;

        // Find the button corresponding to the selected answer
        var buttons = document.querySelectorAll('.option-btn');
        buttons.forEach(function(btn) {
            if (btn.value === selectedAnswer) {
                if (selectedAnswer === correctAnswer) {
                    btn.classList.add('correct');
                } else {
                    btn.classList.add('wrong');
                }
            }
        });

        // Display the explanation for the next question
        var explanationHTML = "";
        if (selectedAnswer) {
            var answerColorClass = selectedAnswer === correctAnswer ? 'correct' : 'wrong';
            explanationHTML += "<span class='" + answerColorClass + "-explanation'>Your Answer is: " + (selectedAnswer === correctAnswer ? "Correct" : "Incorrect") + "</span><br>";
            explanationHTML += "The correct answer is: " + correctAnswer + " (" + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).answer + ", " + questions[currentQuestionIndex].answers.find(option => option.option === correctAnswer).chinese_answer + ")<br><br>";
            explanationHTML += "Explanation (English):<br>" + questions[currentQuestionIndex].explanation + "<br><br>";
            explanationHTML += "Explanation (Chinese):<br>" + questions[currentQuestionIndex].chinese_explanation + "<br><br>";
        }
        document.getElementById('result').innerHTML = explanationHTML;
    }
}



function startOver() {
    // Reset the current question index to the first question
    currentQuestionIndex = 0;

    // Reset the total score and selected answers
    totalScore = 0;
    selectedAnswers.fill(null);

    // Uncheck the checkbox for Chinese translations
    document.getElementById('toggleChinese').checked = false;

    // Uncheck the checkbox for shuffling questions
    document.getElementById('shuffleQuestions').checked = false;

    // Reset the order of questions to the default state
    // Sort the questions array based on the 'id' property to revert to the original order
    questions.sort((a, b) => a.id - b.id);

    // Display the first question
    // Display only English translations by passing 'false' to the displayQuestion function
    displayQuestion(false);

    // Clear the result section
    document.getElementById('result').innerHTML = "";

    // Reset font size to default
    increaseFontSize = true; // Set the flag to true for increasing font size
    adjustFontSize(); // Adjust font size of all elements
    adjustChineseFontSize(); // Adjust font size of Chinese elements and explanations
}




// Function to adjust font size of all elements
function adjustFontSize() {
    var container = document.querySelector('.container');
    var elements = container.querySelectorAll('*');
    var scaleFactor = increaseFontSize ? 1.1 : 0.9; // Scale factor for increasing or decreasing font size

    elements.forEach(function(element) {
        var currentFontSize = parseInt(window.getComputedStyle(element).fontSize);
        var newFontSize = currentFontSize * scaleFactor;
        element.style.fontSize = newFontSize + 'px';
    });
}

// Function to adjust font size of Chinese elements and explanations
function adjustChineseFontSize() {
    var container = document.querySelector('.container');
    var chineseElements = container.querySelectorAll('[lang="zh"]');
    var explanations = document.querySelectorAll('.explanation');
    var allElements = [...chineseElements, ...explanations];
    var scaleFactor = increaseFontSize ? 1.1 : 0.9; // Use the same scale factor as other elements

    allElements.forEach(function(element) {
        var currentFontSize = parseInt(window.getComputedStyle(element).fontSize);
        var newFontSize = currentFontSize * scaleFactor;
        element.style.fontSize = newFontSize + 'px';
    });
}

// Display the first question when the page loads with both English and Chinese translations by default
window.onload = function() {
    toggleChineseTranslations();
    adjustFontSize(); // Initialize font size
    adjustChineseFontSize(); // Initialize Chinese font size
};


// + button event listener
document.getElementById('increase-font-size').addEventListener('click', function() {
    increaseFontSize = true;
    adjustFontSize();
    adjustChineseFontSize();
});

// - button event listener
document.getElementById('decrease-font-size').addEventListener('click', function() {
    increaseFontSize = false;
    adjustFontSize();
    adjustChineseFontSize();
});

// Chinese translation checkbox event listener
document.getElementById('toggleChinese').addEventListener('click', function() {
    adjustChineseFontSize();
});

// Shuffle checkbox event listener
document.getElementById('shuffleQuestions').addEventListener('click', function() {
    adjustFontSize();
    adjustChineseFontSize();
});


function goToHomePage() {
    // Redirect to the main index page
    window.location.href = "../index.html";
}

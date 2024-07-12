// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The fortress, once thought to be __________, was breached by the enemy forces after only a few days of siege.",
        chinese_question: "这座堡垒曾被认为是 __________ 的，但在敌军围攻几天后就被攻破了。",
        answers: [
            { option: "A", answer: "penetrable", chinese_answer: "可穿透的", chinese_romanization: "kě chuāntòu de" },
            { option: "B", answer: "invincible", chinese_answer: "不可战胜的", chinese_romanization: "bùkě zhànshèng de" },
            { option: "C", answer: "impenetrable", chinese_answer: "无法穿透的", chinese_romanization: "wúfǎ chuāntòu de" },
            { option: "D", answer: "indestructible", chinese_answer: "不可破坏的", chinese_romanization: "bùkě pòhuài de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'impenetrable' means impossible to pass through or enter." +
            "<br><br>" +
            "(A) 'penetrable' means able to be penetrated or passed through." +
            "<br><br>" +
            "(B) 'invincible' means too powerful to be defeated or overcome." +
            "<br><br>" +
            "(D) 'indestructible' means not able to be destroyed.",
        chinese_explanation: "(C) '无法穿透的' 意味着无法穿透或进入的。" +
            "<br><br>" +
            "(A) '可穿透的' 意味着能够穿透或通过。" +
            "<br><br>" +
            "(B) '不可战胜的' 意味着过于强大而无法被击败或克服。" +
            "<br><br>" +
            "(D) '不可破坏的' 意味着不能被破坏的。"
    },
    {
        id: 2,
        question: "She gazed out the window with a __________ expression, remembering the days of her youth.",
        chinese_question: "她带着 __________ 的表情望着窗外，回忆着她的青春岁月。",
        answers: [
            { option: "A", answer: "joyous", chinese_answer: "欢乐的", chinese_romanization: "huānlè de" },
            { option: "B", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
            { option: "C", answer: "wistful", chinese_answer: "忧思的", chinese_romanization: "yōusī de" },
            { option: "D", answer: "angry", chinese_answer: "愤怒的", chinese_romanization: "fènnù de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'wistful' means having or showing a feeling of vague or regretful longing." +
            "<br><br>" +
            "(A) 'joyous' means feeling, expressing, or causing great pleasure and happiness." +
            "<br><br>" +
            "(B) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(D) 'angry' means feeling or showing strong annoyance, displeasure, or hostility.",
        chinese_explanation: "(C) '忧思的' 意味着有或表现出模糊或遗憾的渴望。" +
            "<br><br>" +
            "(A) '欢乐的' 意味着感到、表达或引起极大的快乐和幸福。" +
            "<br><br>" +
            "(B) '冷漠的' 意味着没有特别的兴趣或同情；不关心。" +
            "<br><br>" +
            "(D) '愤怒的' 意味着感到或表现出强烈的恼怒、不满或敌意。"
    },
    {
        id: 3,
        question: "The __________ dictator showed no mercy to his opponents, enforcing strict and brutal policies.",
        chinese_question: "这位 __________ 的独裁者对他的对手毫不留情，执行严格而残酷的政策。",
        answers: [
            { option: "A", answer: "compassionate", chinese_answer: "有同情心的", chinese_romanization: "yǒu tóngqíng xīn de" },
            { option: "B", answer: "lenient", chinese_answer: "宽容的", chinese_romanization: "kuānróng de" },
            { option: "C", answer: "ruthless", chinese_answer: "残忍的", chinese_romanization: "cánrěn de" },
            { option: "D", answer: "gentle", chinese_answer: "温和的", chinese_romanization: "wēnhé de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'ruthless' means having or showing no pity or compassion for others." +
            "<br><br>" +
            "(A) 'compassionate' means feeling or showing sympathy and concern for others." +
            "<br><br>" +
            "(B) 'lenient' means more merciful or tolerant than expected." +
            "<br><br>" +
            "(D) 'gentle' means having or showing a mild, kind, or tender temperament or character.",
        chinese_explanation: "(C) '残忍的' 意味着对他人没有怜悯或同情心的。" +
            "<br><br>" +
            "(A) '有同情心的' 意味着感到或表现出对他人的同情和关心。" +
            "<br><br>" +
            "(B) '宽容的' 意味着比预期的更仁慈或宽容的。" +
            "<br><br>" +
            "(D) '温和的' 意味着拥有或表现出温和、善良或温柔的性格或性情的。"
    },
    {
        id: 4,
    question: "The garden was filled with __________ decorations, including fairy lights and gnome statues, creating a magical atmosphere.",
    chinese_question: "花园里充满了 __________ 的装饰，包括仙女灯和侏儒雕像，营造出一种神奇的氛围。",
    answers: [
        { option: "A", answer: "serious", chinese_answer: "严肃的", chinese_romanization: "yánsù de" },
        { option: "B", answer: "boring", chinese_answer: "无聊的", chinese_romanization: "wúliáo de" },
        { option: "C", answer: "plain", chinese_answer: "朴素的", chinese_romanization: "pǔsù de" },
        { option: "D", answer: "whimsical", chinese_answer: "异想天开的", chinese_romanization: "yìxiǎng tiān kāi de" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'whimsical' means playfully quaint or fanciful, especially in an appealing and amusing way." +
        "<br><br>" +
        "(A) 'serious' means solemn or thoughtful in character or manner." +
        "<br><br>" +
        "(B) 'boring' means not interesting; tedious." +
        "<br><br>" +
        "(C) 'plain' means not decorated or elaborate; simple or ordinary in character.",
    chinese_explanation: "(D) '异想天开的' 意味着玩味古怪或异想天开，特别是以一种吸引人和有趣的方式。" +
        "<br><br>" +
        "(A) '严肃的' 意味着性格或举止严肃或深思的。" +
        "<br><br>" +
        "(B) '无聊的' 意味着不有趣的；乏味的。" +
        "<br><br>" +
        "(C) '朴素的' 意味着不装饰或不复杂；简单或普通的。"
    },
    {
        id: 5,
    question: "The explorers ventured into the __________ territory, eager to discover new lands.",
    chinese_question: "探险者们进入了 __________ 的领土，渴望发现新大陆。",
    answers: [
        { option: "A", answer: "familiar", chinese_answer: "熟悉的", chinese_romanization: "shúxī de" },
        { option: "B", answer: "mapped", chinese_answer: "制图的", chinese_romanization: "zhìtú de" },
        { option: "C", answer: "known", chinese_answer: "已知的", chinese_romanization: "yǐzhī de" },
        { option: "D", answer: "uncharted", chinese_answer: "未知的", chinese_romanization: "wèizhī de" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'uncharted' means not mapped or surveyed." +
        "<br><br>" +
        "(A) 'familiar' means well known from long or close association." +
        "<br><br>" +
        "(B) 'mapped' means represented on a map." +
        "<br><br>" +
        "(C) 'known' means recognized, familiar, or within the scope of knowledge.",
    chinese_explanation: "(D) '未知的' 意味着未绘制地图或未勘测的。" +
        "<br><br>" +
        "(A) '熟悉的' 意味着因长期或密切联系而闻名的。" +
        "<br><br>" +
        "(B) '制图的' 意味着在地图上表示的。" +
        "<br><br>" +
        "(C) '已知的' 意味着被认识、熟悉或在知识范围内的。"
    },
    {
        id: 6,
        question: "The comedian's __________ performance had everyone laughing and applauding throughout the night.",
        chinese_question: "这位喜剧演员的 __________ 表演让所有人整晚都在笑和鼓掌。",
        answers: [
            { option: "A", answer: "dull", chinese_answer: "沉闷的", chinese_romanization: "chénmèn de" },
            { option: "B", answer: "boring", chinese_answer: "无聊的", chinese_romanization: "wúliáo de" },
            { option: "C", answer: "scintillating", chinese_answer: "闪耀的", chinese_romanization: "shǎnyào de" },
            { option: "D", answer: "tedious", chinese_answer: "乏味的", chinese_romanization: "fáwèi de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'scintillating' means brilliantly and excitingly clever or skillful." +
            "<br><br>" +
            "(A) 'dull' means lacking interest or excitement." +
            "<br><br>" +
            "(B) 'boring' means not interesting; tedious." +
            "<br><br>" +
            "(D) 'tedious' means too long, slow, or dull; tiresome or monotonous.",
        chinese_explanation: "(C) '闪耀的' 意味着非常聪明和令人兴奋的。" +
            "<br><br>" +
            "(A) '沉闷的' 意味着缺乏兴趣或兴奋的。" +
            "<br><br>" +
            "(B) '无聊的' 意味着不有趣的；乏味的。" +
            "<br><br>" +
            "(D) '乏味的' 意味着太长、太慢或太无聊的；令人厌烦的或单调的。"
    },
    {
        id: 7,
        question: "The journalist uncovered the __________ details of the scandal, shocking the public with the corruption involved.",
        chinese_question: "记者揭露了丑闻的 __________ 细节，使公众对其中涉及的腐败感到震惊。",
        answers: [
            { option: "A", answer: "honorable", chinese_answer: "荣誉的", chinese_romanization: "róngyù de" },
            { option: "B", answer: "sordid", chinese_answer: "肮脏的", chinese_romanization: "āngzāng de" },
            { option: "C", answer: "noble", chinese_answer: "高尚的", chinese_romanization: "gāoshàng de" },
            { option: "D", answer: "virtuous", chinese_answer: "道德高尚的", chinese_romanization: "dàodé gāoshàng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'sordid' means involving immoral or dishonorable actions and motives." +
            "<br><br>" +
            "(A) 'honorable' means bringing or deserving honor." +
            "<br><br>" +
            "(C) 'noble' means having or showing fine personal qualities." +
            "<br><br>" +
            "(D) 'virtuous' means having high moral standards.",
        chinese_explanation: "(B) '肮脏的' 意味着涉及不道德或不光彩的行为和动机的。" +
            "<br><br>" +
            "(A) '荣誉的' 意味着带来或应得荣誉的。" +
            "<br><br>" +
            "(C) '高尚的' 意味着具有或展示优秀个人品质的。" +
            "<br><br>" +
            "(D) '道德高尚的' 意味着有高道德标准的。"
    },
    {
        id: 8,
        question: "The cabin stood alone __________, far away from any other houses.",
        chinese_question: "小屋孤零零地矗立在__________，远离任何其他房屋。",
        answers: [
            { option: "A", answer: "nearby", chinese_answer: "附近", chinese_romanization: "fùjìn" },
            { option: "B", answer: "yonder", chinese_answer: "那边", chinese_romanization: "nàbiān" },
            { option: "C", answer: "close", chinese_answer: "近处", chinese_romanization: "jìnchù" },
            { option: "D", answer: "adjacent", chinese_answer: "毗邻", chinese_romanization: "pílín" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'yonder' means at some distance in the direction indicated; over there." +
            "<br><br>" +
            "(A) 'nearby' means not far away; close." +
            "<br><br>" +
            "(C) 'close' means a short distance away or apart in space or time." +
            "<br><br>" +
            "(D) 'adjacent' means next to or adjoining something else.",
        chinese_explanation: "(B) '那边'一词意味着在指示的方向上的某个距离处；在那里。" +
            "<br><br>" +
            "(A) '附近' 意味着不远的；近的。" +
            "<br><br>" +
            "(C) '近处' 意味着在空间或时间上相隔不远或接近。" +
            "<br><br>" +
            "(D) '毗邻' 意味着在或邻接其他事物。"
    },
    {
        id: 9,
    question: "Her __________ efforts to complete the project on time impressed her supervisor.",
    chinese_question: "她__________的努力按时完成项目给她的主管留下了深刻的印象。",
    answers: [
        { option: "A", answer: "lazy", chinese_answer: "懒惰的", chinese_romanization: "lǎnduò de" },
        { option: "B", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
        { option: "C", answer: "apathetic", chinese_answer: "无动于衷的", chinese_romanization: "wúdòngyúzhōng de" },
        { option: "D", answer: "earnest", chinese_answer: "认真的", chinese_romanization: "rènzhēn de" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'earnest' means showing sincere and intense conviction." +
        "<br><br>" +
        "(A) 'lazy' means unwilling to work or use energy." +
        "<br><br>" +
        "(B) 'indifferent' means having no particular interest or sympathy; unconcerned." +
        "<br><br>" +
        "(C) 'apathetic' means showing or feeling no interest, enthusiasm, or concern.",
    chinese_explanation: "(D) '认真的'一词意味着表现出真诚和强烈的信念。" +
        "<br><br>" +
        "(A) '懒惰的' 意味着不愿工作或使用能量的。" +
        "<br><br>" +
        "(B) '冷漠的' 意味着没有特别的兴趣或同情；漠不关心的。" +
        "<br><br>" +
        "(C) '无动于衷的' 意味着表现出或感到没有兴趣、热情或关心。"
    },
    {
        id: 10,
        question: "After years of working tirelessly for the company, he became __________ when he realized his efforts were not appreciated.",
        chinese_question: "在为公司不懈工作多年后，当他意识到自己的努力不被欣赏时，他变得 __________。",
        answers: [
            { option: "A", answer: "motivated", chinese_answer: "有动力的", chinese_romanization: "yǒu dònglì de" },
            { option: "B", answer: "inspired", chinese_answer: "受启发的", chinese_romanization: "shòu qǐfā de" },
            { option: "C", answer: "disillusioned", chinese_answer: "幻灭的", chinese_romanization: "huànmiè de" },
            { option: "D", answer: "enthusiastic", chinese_answer: "热情的", chinese_romanization: "rèqíng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'disillusioned' means disappointed in someone or something that one discovers to be less good than one had believed." +
            "<br><br>" +
            "(A) 'motivated' means provided with a reason to act in a certain way." +
            "<br><br>" +
            "(B) 'inspired' means filled with the urge or ability to do or feel something, especially to do something creative." +
            "<br><br>" +
            "(D) 'enthusiastic' means having or showing intense and eager enjoyment, interest, or approval.",
        chinese_explanation: "(C) '幻灭的' 意味着对发现某人或某事物不如自己所信的那样好而感到失望的。" +
            "<br><br>" +
            "(A) '有动力的' 意味着有理由以某种方式行事的。" +
            "<br><br>" +
            "(B) '受启发的' 意味着充满冲动或能力去做或感觉某事，尤其是做某些创造性的事情。" +
            "<br><br>" +
            "(D) '热情的' 意味着有或表现出强烈和急切的享受、兴趣或赞同的。"
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

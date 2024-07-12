// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The __________ diplomat was able to negotiate a peaceful resolution to the conflict.",
    chinese_question: "这位__________的外交官能够谈判达成和平解决方案。",
    answers: [
        { option: "A", answer: "aggressive", chinese_answer: "具有攻击性的", chinese_romanization: "jùyǒu gōngjī xìng de" },
        { option: "B", answer: "combative", chinese_answer: "好斗的", chinese_romanization: "hàodòu de" },
        { option: "C", answer: "hostile", chinese_answer: "敌对的", chinese_romanization: "díduì de" },
        { option: "D", answer: "pacific", chinese_answer: "和平的", chinese_romanization: "hépíng de" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'pacific' means peaceful in character or intent." +
        "<br><br>" +
        "(A) 'aggressive' means ready or likely to attack or confront; characterized by or resulting from aggression." +
        "<br><br>" +
        "(B) 'combative' means ready or eager to fight; pugnacious." +
        "<br><br>" +
        "(C) 'hostile' means unfriendly; antagonistic.",
    chinese_explanation: "(D) '和平的'一词意味着性格或意图和平的。" +
        "<br><br>" +
        "(A) '具有攻击性的' 意味着准备或可能攻击或对抗的；由攻击引起的或导致攻击的。" +
        "<br><br>" +
        "(B) '好斗的' 意味着准备或渴望战斗的；好斗的。" +
        "<br><br>" +
        "(C) '敌对的' 意味着不友好的；敌对的。"
    },
    {
        id: 2,
    question: "The __________ fan attended every game, cheering loudly for his team regardless of their performance.",
    chinese_question: "这个 __________ 的球迷参加了每场比赛，不论球队表现如何都大声为他们加油。",
    answers: [
        { option: "A", answer: "apathetic", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
        { option: "B", answer: "occasional", chinese_answer: "偶尔的", chinese_romanization: "ǒu'ěr de" },
        { option: "C", answer: "avid", chinese_answer: "热衷的", chinese_romanization: "rèzhōng de" },
        { option: "D", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mòbùguānxīn de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'avid' means having or showing a keen interest in or enthusiasm for something." +
        "<br><br>" +
        "(A) 'apathetic' means showing or feeling no interest, enthusiasm, or concern." +
        "<br><br>" +
        "(B) 'occasional' means occurring, appearing, or done infrequently and irregularly." +
        "<br><br>" +
        "(D) 'indifferent' means having no particular interest or sympathy; unconcerned.",
    chinese_explanation: "(C) '热衷的' 意味着对某事有或表现出浓厚兴趣或热情。" +
        "<br><br>" +
        "(A) '冷漠的' 意味着表现出或感到没有兴趣、热情或关心的。" +
        "<br><br>" +
        "(B) '偶尔的' 意味着不频繁和不规则发生的。" +
        "<br><br>" +
        "(D) '漠不关心的' 意味着没有特别兴趣或同情的；不关心的。"
    },
    {
        id: 3,
        question: "The __________ feast spread across the table, offering an overwhelming variety of dishes.",
        chinese_question: "这场__________的盛宴铺满了整张桌子，提供了种类繁多的菜肴。",
        answers: [
            { option: "A", answer: "tiny", chinese_answer: "微小的", chinese_romanization: "wēixiǎo de" },
            { option: "B", answer: "meager", chinese_answer: "贫乏的", chinese_romanization: "pínfá de" },
            { option: "C", answer: "gargantuan", chinese_answer: "巨大的", chinese_romanization: "jùdà de" },
            { option: "D", answer: "small", chinese_answer: "小的", chinese_romanization: "xiǎo de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'gargantuan' means enormous." +
            "<br><br>" +
            "(A) 'tiny' means very small." +
            "<br><br>" +
            "(B) 'meager' means lacking in quantity or quality." +
            "<br><br>" +
            "(D) 'small' means of a size that is less than normal or usual.",
        chinese_explanation: "(C) '巨大的'一词意味着非常大的。" +
            "<br><br>" +
            "(A) '微小的' 意味着非常小的。" +
            "<br><br>" +
            "(B) '贫乏的' 意味着数量或质量不足的。" +
            "<br><br>" +
            "(D) '小的' 意味着尺寸小于正常或通常的。"
    },
    {
        id: 4,
        question: "The __________ melody of the song brought tears to everyone's eyes at the memorial service.",
        chinese_question: "那首歌的 __________ 曲调让每个人在追悼会上流下了眼泪。",
        answers: [
            { option: "A", answer: "joyful", chinese_answer: "欢乐的", chinese_romanization: "huānlè de" },
            { option: "B", answer: "lively", chinese_answer: "活泼的", chinese_romanization: "huópō de" },
            { option: "C", answer: "mournful", chinese_answer: "悲伤的", chinese_romanization: "bēishāng de" },
            { option: "D", answer: "cheerful", chinese_answer: "愉快的", chinese_romanization: "yúkuài de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'mournful' means feeling, expressing, or inducing sadness, regret, or grief." +
            "<br><br>" +
            "(A) 'joyful' means feeling, expressing, or causing great pleasure and happiness." +
            "<br><br>" +
            "(B) 'lively' means full of life and energy; active and outgoing." +
            "<br><br>" +
            "(D) 'cheerful' means noticeably happy and optimistic.",
        chinese_explanation: "(C) '悲伤的' 意味着感到、表达或引起悲伤、遗憾或悲痛的。" +
            "<br><br>" +
            "(A) '欢乐的' 意味着感到、表达或引起极大的快乐和幸福的。" +
            "<br><br>" +
            "(B) '活泼的' 意味着充满生命和活力的；活跃和外向的。" +
            "<br><br>" +
            "(D) '愉快的' 意味着明显的快乐和乐观的。"
    },
    {
        id: 5,
        question: "The hero finally faced his __________ in an epic battle that would decide the fate of the kingdom.",
        chinese_question: "英雄终于在一场决定王国命运的史诗般战斗中面对他的 __________。",
        answers: [
            { option: "A", answer: "friend", chinese_answer: "朋友", chinese_romanization: "péngyǒu" },
            { option: "B", answer: "ally", chinese_answer: "盟友", chinese_romanization: "méngyǒu" },
            { option: "C", answer: "nemesis", chinese_answer: "宿敌", chinese_romanization: "sùdí" },
            { option: "D", answer: "supporter", chinese_answer: "支持者", chinese_romanization: "zhīchí zhě" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'nemesis' means a long-standing rival; an archenemy." +
            "<br><br>" +
            "(A) 'friend' means a person with whom one has a bond of mutual affection." +
            "<br><br>" +
            "(B) 'ally' means a state formally cooperating with another for a military or other purpose." +
            "<br><br>" +
            "(D) 'supporter' means a person who approves of and encourages someone or something.",
        chinese_explanation: "(C) '宿敌' 意味着长期存在的竞争对手；死敌。" +
            "<br><br>" +
            "(A) '朋友' 意味着与自己有相互喜爱关系的人。" +
            "<br><br>" +
            "(B) '盟友' 意味着正式合作以实现军事或其他目的的国家。" +
            "<br><br>" +
            "(D) '支持者' 意味着赞同并鼓励某人或某事的人。"
    },
    {
        id: 6,
        question: "The room was decorated in __________ colors that clashed and overwhelmed the senses.",
        chinese_question: "房间装饰得 __________，颜色冲突且让人眼花缭乱。",
        answers: [
            { option: "A", answer: "subtle", chinese_answer: "细腻的", chinese_romanization: "xìnì de" },
            { option: "B", answer: "muted", chinese_answer: "柔和的", chinese_romanization: "róuhé de" },
            { option: "C", answer: "garish", chinese_answer: "俗丽的", chinese_romanization: "súlì de" },
            { option: "D", answer: "tasteful", chinese_answer: "雅致的", chinese_romanization: "yǎzhì de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'garish' means obtrusively bright and showy; lurid." +
            "<br><br>" +
            "(A) 'subtle' means delicate or precise as to be difficult to analyze or describe." +
            "<br><br>" +
            "(B) 'muted' means quiet and soft in color or tone." +
            "<br><br>" +
            "(D) 'tasteful' means showing good aesthetic judgment or appropriate behavior.",
        chinese_explanation: "(C) '俗丽的' 意味着刺眼的，显眼而俗气的。" +
            "<br><br>" +
            "(A) '细腻的' 意味着精细或精确，难以分析或描述。" +
            "<br><br>" +
            "(B) '柔和的' 意味着颜色或音调安静和柔和。" +
            "<br><br>" +
            "(D) '雅致的' 意味着显示出良好的审美判断或适当的行为。"
    },
    {
        id: 7,
        question: "The letter from her childhood friend was __________, reminding her of the bond they once shared.",
        chinese_question: "她童年朋友的信非常 __________，让她想起了他们曾经的友情。",
        answers: [
            { option: "A", answer: "trivial", chinese_answer: "无关紧要的", chinese_romanization: "wúguān jǐnyào de" },
            { option: "B", answer: "poignant", chinese_answer: "令人心痛的", chinese_romanization: "lìng rén xīntòng de" },
            { option: "C", answer: "irrelevant", chinese_answer: "不相关的", chinese_romanization: "bù xiāngguān de" },
            { option: "D", answer: "superficial", chinese_answer: "表面的", chinese_romanization: "biǎomiàn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'poignant' means evoking a keen sense of sadness or regret." +
            "<br><br>" +
            "(A) 'trivial' means of little value or importance." +
            "<br><br>" +
            "(C) 'irrelevant' means not connected with or relevant to something." +
            "<br><br>" +
            "(D) 'superficial' means existing or occurring at or on the surface.",
        chinese_explanation: "(B) '令人心痛的' 意味着引起强烈的悲伤或遗憾感。" +
            "<br><br>" +
            "(A) '无关紧要的' 意味着价值或重要性很小的。" +
            "<br><br>" +
            "(C) '不相关的' 意味着与某事无关的。" +
            "<br><br>" +
            "(D) '表面的' 意味着存在或发生在表面上。"
    },
    {
        id: 8,
        question: "Her __________ remarks often got her into trouble, but they also made her friends laugh.",
        chinese_question: "她的__________言辞经常让她惹上麻烦，但也让朋友们发笑。",
        answers: [
            { option: "A", answer: "polite", chinese_answer: "礼貌的", chinese_romanization: "lǐmào de" },
            { option: "B", answer: "meek", chinese_answer: "温顺的", chinese_romanization: "wēnshùn de" },
            { option: "C", answer: "sassy", chinese_answer: "活泼的", chinese_romanization: "huópō de" },
            { option: "D", answer: "respectful", chinese_answer: "尊敬的", chinese_romanization: "zūnjìng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'sassy' means lively, bold, and full of spirit; cheeky." +
            "<br><br>" +
            "(A) 'polite' means having or showing behavior that is respectful and considerate of other people." +
            "<br><br>" +
            "(B) 'meek' means quiet, gentle, and easily imposed on; submissive." +
            "<br><br>" +
            "(D) 'respectful' means feeling or showing deference and respect.",
        chinese_explanation: "(C) '活泼的'一词意味着活泼、大胆且充满活力的；无礼的。" +
            "<br><br>" +
            "(A) '礼貌的' 意味着表现出对他人的尊重和体贴行为的。" +
            "<br><br>" +
            "(B) '温顺的' 意味着安静、温柔且容易被强加的；顺从的。" +
            "<br><br>" +
            "(D) '尊敬的' 意味着感到或表现出敬意的。"
    },
    {
        id: 9,
        question: "Her __________ decorations for the party included fairy lights, giant mushrooms, and floating lanterns, creating a magical atmosphere.",
        chinese_question: "她为派对设计的 __________ 装饰包括仙女灯、大蘑菇和漂浮的灯笼，营造出一种魔幻的氛围。",
        answers: [
            { option: "A", answer: "dull", chinese_answer: "单调的", chinese_romanization: "dāndiào de" },
            { option: "B", answer: "whimsical", chinese_answer: "异想天开的", chinese_romanization: "yìxiǎng tiānkāi de" },
            { option: "C", answer: "mundane", chinese_answer: "平凡的", chinese_romanization: "píngfán de" },
            { option: "D", answer: "ordinary", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'whimsical' means playfully quaint or fanciful, especially in an appealing and amusing way." +
            "<br><br>" +
            "(A) 'dull' means lacking interest or excitement." +
            "<br><br>" +
            "(C) 'mundane' means lacking interest or excitement; dull." +
            "<br><br>" +
            "(D) 'ordinary' means with no special or distinctive features; normal.",
        chinese_explanation: "(B) '异想天开的' 意味着玩笑般古怪的，特别是以一种吸引人和有趣的方式。" +
            "<br><br>" +
            "(A) '单调的' 意味着缺乏兴趣或兴奋的。" +
            "<br><br>" +
            "(C) '平凡的' 意味着缺乏兴趣或兴奋的；单调的。" +
            "<br><br>" +
            "(D) '普通的' 意味着没有特别或独特的特征；正常的。"
    },
    {
        id: 10,
        question: "The professor's __________ articles were published in numerous academic journals.",
        chinese_question: "这位教授的 __________ 文章发表在许多学术期刊上。",
        answers: [
            { option: "A", answer: "casual", chinese_answer: "随意的", chinese_romanization: "suíyì de" },
            { option: "B", answer: "scholarly", chinese_answer: "学术的", chinese_romanization: "xuéshù de" },
            { option: "C", answer: "informal", chinese_answer: "非正式的", chinese_romanization: "fēizhèngshì de" },
            { option: "D", answer: "frivolous", chinese_answer: "无聊的", chinese_romanization: "wúliáo de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'scholarly' means involving or relating to serious academic study." +
            "<br><br>" +
            "(A) 'casual' means relaxed and unconcerned." +
            "<br><br>" +
            "(C) 'informal' means having a relaxed, friendly, or unofficial style, manner, or nature." +
            "<br><br>" +
            "(D) 'frivolous' means not having any serious purpose or value.",
        chinese_explanation: "(B) '学术的' 意味着涉及或与严肃的学术研究有关的。" +
            "<br><br>" +
            "(A) '随意的' 意味着放松和不关心的。" +
            "<br><br>" +
            "(C) '非正式的' 意味着具有轻松、友好或非正式的风格、方式或性质。" +
            "<br><br>" +
            "(D) '无聊的' 意味着没有任何严肃目的或价值的。"
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

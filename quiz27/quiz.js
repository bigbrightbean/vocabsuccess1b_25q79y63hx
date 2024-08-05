// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "She gave a __________ speech that moved everyone in the audience to tears.",
        chinese_question: "她发表了一篇__________的演讲，感动了在场的每一个人。",
        answers: [
            { option: "A", answer: "indifferent", chinese_answer: "无动于衷的", chinese_romanization: "wúdòngyúzhōng de" },
            { option: "B", answer: "dispassionate", chinese_answer: "冷静的", chinese_romanization: "lěngjìng de" },
            { option: "C", answer: "passionate", chinese_answer: "充满激情的", chinese_romanization: "chōngmǎn jīqíng de" },
            { option: "D", answer: "apathetic", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'passionate' means showing or caused by strong feelings or a strong belief." +
            "<br><br>" +
            "(A) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(B) 'dispassionate' means not influenced by strong emotion, and so able to be rational and impartial." +
            "<br><br>" +
            "(D) 'apathetic' means showing or feeling no interest, enthusiasm, or concern.",
        chinese_explanation: "(C) '充满激情的'一词意味着表现出或由强烈的感情或信念引起的。" +
            "<br><br>" +
            "(A) '无动于衷的' 意味着没有特别的兴趣或同情；不关心的。" +
            "<br><br>" +
            "(B) '冷静的' 意味着不受强烈情感影响的，因此能够理性和公正的。" +
            "<br><br>" +
            "(D) '冷漠的' 意味着表现出或感受不到兴趣、热情或关心的。"
    },
    {
        id: 2,
        question: "Her __________ comments about how others should live their lives were not well received.",
        chinese_question: "她关于别人应该如何生活的 __________ 评论并不受欢迎。",
        answers: [
            { option: "A", answer: "humble", chinese_answer: "谦逊的", chinese_romanization: "qiānxùn de" },
            { option: "B", answer: "sanctimonious", chinese_answer: "假装虔诚的", chinese_romanization: "jiǎzhuāng qiánchéng de" },
            { option: "C", answer: "respectful", chinese_answer: "尊敬的", chinese_romanization: "zūnjìng de" },
            { option: "D", answer: "sincere", chinese_answer: "真诚的", chinese_romanization: "zhēnchéng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'sanctimonious' means making a show of being morally superior to other people." +
            "<br><br>" +
            "(A) 'humble' means having or showing a modest or low estimate of one's own importance." +
            "<br><br>" +
            "(C) 'respectful' means feeling or showing deference and respect." +
            "<br><br>" +
            "(D) 'sincere' means free from pretense or deceit; proceeding from genuine feelings.",
        chinese_explanation: "(B) '假装虔诚的' 意味着表现出道德优越于他人的样子。" +
            "<br><br>" +
            "(A) '谦逊的' 意味着对自己的重要性有或表现出谦逊或低估。" +
            "<br><br>" +
            "(C) '尊敬的' 意味着感到或表现出敬意和尊重的。" +
            "<br><br>" +
            "(D) '真诚的' 意味着没有伪装或欺骗的；出于真诚的感情的。"
    },
    {
        id: 3,
    question: "The community center was designed to be a __________ space, offering art classes, social gatherings, and a welcoming environment for all.",
    chinese_question: "社区中心被设计为一个 __________ 的空间，提供艺术课程、社交聚会和对所有人友好的环境。",
    answers: [
        { option: "A", answer: "hostile", chinese_answer: "敌对的", chinese_romanization: "díduì de" },
        { option: "B", answer: "unpleasant", chinese_answer: "不愉快的", chinese_romanization: "bù yúkuài de" },
        { option: "C", answer: "unfriendly", chinese_answer: "不友好的", chinese_romanization: "bù yǒuhǎo de" },
        { option: "D", answer: "congenial", chinese_answer: "友善的", chinese_romanization: "yǒushàn de" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'congenial' means pleasant and friendly, often used to describe a welcoming environment." +
        "<br><br>" +
        "(A) 'hostile' means unfriendly or antagonistic." +
        "<br><br>" +
        "(B) 'unpleasant' means causing discomfort or unhappiness." +
        "<br><br>" +
        "(C) 'unfriendly' means not friendly or kind.",
    chinese_explanation: "(D) '友善的' 意味着愉快和友好，通常用来形容一个热情的环境。" +
        "<br><br>" +
        "(A) '敌对的' 意味着不友好或对抗的。" +
        "<br><br>" +
        "(B) '不愉快的' 意味着引起不适或不快。" +
        "<br><br>" +
        "(C) '不友好的' 意味着不友好或不亲切的。"
    },
    {
        id: 4,
        question: "The couple hosted a __________ party at their new penthouse, impressing all their guests with the luxurious decor.",
        chinese_question: "这对夫妇在他们的新顶层公寓举办了一场 __________ 的派对，以豪华的装饰给所有客人留下深刻印象。",
        answers: [
            { option: "A", answer: "modest", chinese_answer: "谦虚的", chinese_romanization: "qiānxū de" },
            { option: "B", answer: "swanky", chinese_answer: "豪华的", chinese_romanization: "háohuá de" },
            { option: "C", answer: "humble", chinese_answer: "谦逊的", chinese_romanization: "qiānxùn de" },
            { option: "D", answer: "plain", chinese_answer: "朴素的", chinese_romanization: "pǔsù de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'swanky' means stylishly luxurious and expensive." +
            "<br><br>" +
            "(A) 'modest' means unassuming in the estimation of one's abilities or achievements." +
            "<br><br>" +
            "(C) 'humble' means having or showing a modest or low estimate of one's importance." +
            "<br><br>" +
            "(D) 'plain' means not decorated or elaborate; simple or ordinary in character.",
        chinese_explanation: "(B) '豪华的' 意味着时尚奢华和昂贵的。" +
            "<br><br>" +
            "(A) '谦虚的' 意味着对自己的能力或成就不夸张的。" +
            "<br><br>" +
            "(C) '谦逊的' 意味着对自己的重要性有谦虚或低估。" +
            "<br><br>" +
            "(D) '朴素的' 意味着没有装饰或不奢华的；简单或普通的。"
    },
    {
        id: 5,
        question: "Aside from the immediate relief it provides, the __________ goal of the project is to improve access to clean water for all residents in the region.",
        chinese_question: "撇开它提供的即时救济，该项目的 __________ 目标是改善该地区所有居民的清洁水供应。",
        answers: [
            { option: "A", answer: "arcane", chinese_answer: "神秘的", chinese_romanization: "shénmì de" },
            { option: "B", answer: "labyrinthine", chinese_answer: "复杂的", chinese_romanization: "fùzá de" },
            { option: "C", answer: "esoteric", chinese_answer: "深奥的", chinese_romanization: "shēn'ào de" },
            { option: "D", answer: "ultimate", chinese_answer: "最终的", chinese_romanization: "zuìzhōng de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'ultimate' means being or happening at the end of a process; final." +
            "<br><br>" +
            "(A) 'arcane' means understood by few; mysterious or secret." +
            "<br><br>" +
            "(B) 'labyrinthine' means intricate and confusing." +
            "<br><br>" +
            "(C) 'esoteric' means intended for or likely to be understood by only a small number of people with a specialized knowledge or interest." +
            "<br><br>",
        chinese_explanation: "(D) '最终的' 意味着发生在过程结束时的；最终的。" +
            "<br><br>" +
            "(A) '神秘的' 意味着很少人理解的；神秘的或秘密的。" +
            "<br><br>" +
            "(B) '复杂的' 意味着错综复杂的。" +
            "<br><br>" +
            "(C) '深奥的' 意味着仅适用于或可能仅为拥有专业知识或兴趣的小部分人所理解的。"
    },
    {
        id: 6,
        question: "The criminal mastermind was known for his __________ plans, which often involved harming innocent people.",
        chinese_question: "这位犯罪天才以其 __________ 的计划而闻名，这些计划往往涉及伤害无辜的人。",
        answers: [
            { option: "A", answer: "virtuous", chinese_answer: "善良的", chinese_romanization: "shànliáng de" },
            { option: "B", answer: "noble", chinese_answer: "高尚的", chinese_romanization: "gāoshàng de" },
            { option: "C", answer: "nefarious", chinese_answer: "邪恶的", chinese_romanization: "xié'è de" },
            { option: "D", answer: "honorable", chinese_answer: "光荣的", chinese_romanization: "guāngróng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'nefarious' means wicked or criminal." +
            "<br><br>" +
            "(A) 'virtuous' means having or showing high moral standards." +
            "<br><br>" +
            "(B) 'noble' means having or showing fine personal qualities or high moral principles." +
            "<br><br>" +
            "(D) 'honorable' means bringing or worthy of honor.",
        chinese_explanation: "(C) '邪恶的' 意味着邪恶或犯罪的。" +
            "<br><br>" +
            "(A) '善良的' 意味着有或表现出高尚的道德标准。" +
            "<br><br>" +
            "(B) '高尚的' 意味着有或表现出优秀的个人品质或高尚的道德原则。" +
            "<br><br>" +
            "(D) '光荣的' 意味着带来或值得荣誉的。"
    },
    {
        id: 7,
        question: "In many cultures, it is __________ to remove your shoes before entering someone's home, as a sign of cleanliness and respect.",
        chinese_question: "在许多文化中，进入别人家之前脱鞋是 __________ 的，表示干净和尊重。",
        answers: [
            { option: "A", answer: "unusual", chinese_answer: "不寻常的", chinese_romanization: "bù xúncháng de" },
            { option: "B", answer: "forbidden", chinese_answer: "被禁止的", chinese_romanization: "bèi jìnzhǐ de" },
            { option: "C", answer: "customary", chinese_answer: "习惯的", chinese_romanization: "xíguàn de" },
            { option: "D", answer: "optional", chinese_answer: "可选的", chinese_romanization: "kěxuǎn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'customary' means according to the customs or usual practices associated with a particular society, place, or set of circumstances." +
            "<br><br>" +
            "(A) 'unusual' means not habitually or commonly occurring or done." +
            "<br><br>" +
            "(B) 'forbidden' means not allowed; banned." +
            "<br><br>" +
            "(D) 'optional' means available to be chosen but not obligatory.",
        chinese_explanation: "(C) '习惯的' 意味着根据特定社会、地方或情况的习俗或惯常做法。" +
            "<br><br>" +
            "(A) '不寻常的' 意味着不习惯性或不常发生的。" +
            "<br><br>" +
            "(B) '被禁止的' 意味着不允许的；被禁止的。" +
            "<br><br>" +
            "(D) '可选的' 意味着可以选择但不是强制性的。"
    },
    {
        id: 8,
    question: "The chef's __________ skills were evident in the perfectly cooked dishes, artistic plating, and seamless service.",
    chinese_question: "厨师的 __________ 技能在完美的烹饪、艺术的摆盘和流畅的服务中显而易见。",
    answers: [
        { option: "A", answer: "amateurish", chinese_answer: "业余的", chinese_romanization: "yèyú de" },
        { option: "B", answer: "incompetent", chinese_answer: "无能的", chinese_romanization: "wúnéng de" },
        { option: "C", answer: "unskilled", chinese_answer: "不熟练的", chinese_romanization: "bù shúliàn de" },
        { option: "D", answer: "consummate", chinese_answer: "完美的", chinese_romanization: "wánměi de" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'consummate' means showing a high degree of skill and flair; complete or perfect." +
        "<br><br>" +
        "(A) 'amateurish' means lacking professional skill or expertise." +
        "<br><br>" +
        "(B) 'incompetent' means not having the necessary skills to do something successfully." +
        "<br><br>" +
        "(C) 'unskilled' means lacking training or experience.",
    chinese_explanation: "(D) '完美的' 意味着表现出高超的技艺和风格；完整或完美。" +
        "<br><br>" +
        "(A) '业余的' 意味着缺乏专业技能或专长。" +
        "<br><br>" +
        "(B) '无能的' 意味着缺乏成功完成某事的必要技能。" +
        "<br><br>" +
        "(C) '不熟练的' 意味着缺乏培训或经验。"
    },
    {
        id: 9,
        question: "The __________ energy in the room was palpable as everyone waited anxiously for the results.",
        chinese_question: "房间里的 __________ 能量是显而易见的，大家都在焦急地等待结果。",
        answers: [
            { option: "A", answer: "relaxed", chinese_answer: "放松的", chinese_romanization: "fàngsōng de" },
            { option: "B", answer: "tranquil", chinese_answer: "宁静的", chinese_romanization: "níngjìng de" },
            { option: "C", answer: "serene", chinese_answer: "安详的", chinese_romanization: "ānxiáng de" },
            { option: "D", answer: "restless", chinese_answer: "焦躁的", chinese_romanization: "jiāozào de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'restless' means unable to rest or relax as a result of anxiety or boredom, often used figuratively to describe a tense and anxious atmosphere." +
            "<br><br>" +
            "(A) 'relaxed' means free from tension and anxiety." +
            "<br><br>" +
            "(B) 'tranquil' means free from disturbance; calm." +
            "<br><br>" +
            "(C) 'serene' means calm, peaceful, and untroubled.",
        chinese_explanation: "(D) '焦躁的' 意味着由于焦虑或无聊而无法休息或放松的，通常用作比喻来形容紧张和焦虑的气氛。" +
            "<br><br>" +
            "(A) '放松的' 意味着没有紧张和焦虑的。" +
            "<br><br>" +
            "(B) '宁静的' 意味着没有干扰的；平静的。" +
            "<br><br>" +
            "(C) '安详的' 意味着平静、宁静和不受困扰的。"
    },
    {
        id: 10,
        question: "The festival aims to be __________, celebrating the diverse cultures and traditions of all attendees.",
        chinese_question: "该节日旨在成为 __________ 的，庆祝所有参与者的多元文化和传统。",
        answers: [
            { option: "A", answer: "narrow", chinese_answer: "狭窄的", chinese_romanization: "xiázhǎi de" },
            { option: "B", answer: "restricted", chinese_answer: "受限的", chinese_romanization: "shòu xiàn de" },
            { option: "C", answer: "inclusive", chinese_answer: "包容的", chinese_romanization: "bāoróng de" },
            { option: "D", answer: "exclusive", chinese_answer: "排外的", chinese_romanization: "páiwài de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'inclusive' means not excluding any section of society or any party involved in something." +
            "<br><br>" +
            "(A) 'narrow' means limited in extent, amount, or scope." +
            "<br><br>" +
            "(B) 'restricted' means limited in extent, number, scope, or action." +
            "<br><br>" +
            "(D) 'exclusive' means excluding or not admitting other things.",
        chinese_explanation: "(C) '包容的' 意味着不排斥社会的任何部分或参与其中的任何一方。" +
            "<br><br>" +
            "(A) '狭窄的' 意味着在范围、数量或范围上有限的。" +
            "<br><br>" +
            "(B) '受限的' 意味着在范围、数量、范围或行动上有限的。" +
            "<br><br>" +
            "(D) '排外的' 意味着排斥或不承认其他事物的。"
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

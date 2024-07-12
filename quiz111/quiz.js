// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The pain in his leg began to __________ after he took the medication.",
    chinese_question: "吃药后，他腿部的疼痛开始 __________。",
    answers: [
        { option: "A", answer: "abate", chinese_answer: "减轻", chinese_romanization: "jiǎnqīng" },
        { option: "B", answer: "escalate", chinese_answer: "升级", chinese_romanization: "shēngjí" },
        { option: "C", answer: "surge", chinese_answer: "激增", chinese_romanization: "jīzēng" },
        { option: "D", answer: "mount", chinese_answer: "增加", chinese_romanization: "zēngjiā" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'abate' means to become less intense or widespread." +
        "<br><br>" +
        "(B) 'escalate' means to increase rapidly." +
        "<br><br>" +
        "(C) 'surge' means to move suddenly and powerfully forward or upward." +
        "<br><br>" +
        "(D) 'mount' means to increase in amount or extent.",
    chinese_explanation: "(A) '减轻' 意味着变得不那么强烈或不那么广泛。" +
        "<br><br>" +
        "(B) '升级' 意味着迅速增加。" +
        "<br><br>" +
        "(C) '激增' 意味着突然有力地向前或向上移动。" +
        "<br><br>" +
        "(D) '增加' 意味着数量或程度增加。"
    },
    {
        id: 2,
        question: "He was known to __________ at every opportunity, indulging in excessive drinking and partying.",
        chinese_question: "他以每次都有机会就 __________ 而闻名，沉迷于酗酒和聚会。",
        answers: [
            { option: "A", answer: "abstain", chinese_answer: "克制", chinese_romanization: "kèzhì" },
            { option: "B", answer: "meditate", chinese_answer: "冥想", chinese_romanization: "míngxiǎng" },
            { option: "C", answer: "conserve", chinese_answer: "保存", chinese_romanization: "bǎocún" },
            { option: "D", answer: "debauch", chinese_answer: "堕落", chinese_romanization: "duòluò" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'debauch' means to destroy or debase the moral purity of; corrupt. It also means to indulge in sensual pleasures, typically involving excessive drinking and promiscuity." +
            "<br><br>" +
            "(A) 'abstain' means to restrain oneself from doing or enjoying something." +
            "<br><br>" +
            "(B) 'meditate' means to think deeply or focus one's mind for a period of time." +
            "<br><br>" +
            "(C) 'conserve' means to protect from harm or destruction.",
        chinese_explanation: "(D) '堕落' 意味着摧毁或贬低道德纯洁性；腐败。它还意味着沉迷于感官享受，通常涉及酗酒和淫乱。" +
            "<br><br>" +
            "(A) '克制' 意味着抑制自己不做或不享受某事。" +
            "<br><br>" +
            "(B) '冥想' 意味着深思或集中注意力一段时间。" +
            "<br><br>" +
            "(C) '保存' 意味着保护免受伤害或破坏。"
    },
    {
        id: 3,
    question: "After hours of speculation, it finally __________ that the missing documents were accidentally filed in the wrong cabinet.",
    chinese_question: "经过几个小时的猜测，最终 __________ 那些丢失的文件是被意外归档到错误的柜子里。",
    answers: [
        { option: "A", answer: "concealed", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
        { option: "B", answer: "transpired", chinese_answer: "透露", chinese_romanization: "tòulù" },
        { option: "C", answer: "fabricated", chinese_answer: "捏造", chinese_romanization: "niēzào" },
        { option: "D", answer: "vanished", chinese_answer: "消失", chinese_romanization: "xiāoshī" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'transpired' means to become known or revealed." +
        "<br><br>" +
        "(A) 'concealed' means to hide." +
        "<br><br>" +
        "(C) 'fabricated' means to invent or make up." +
        "<br><br>" +
        "(D) 'vanished' means to disappear.",
    chinese_explanation: "(B) '透露' 一词意味着变得为人所知或被揭示。" +
        "<br><br>" +
        "(A) '隐藏' 意味着隐藏。" +
        "<br><br>" +
        "(C) '捏造' 意味着编造或虚构。" +
        "<br><br>" +
        "(D) '消失' 意味着消失。"
    },
    {
        id: 4,
    question: "The startup aims to __________ the home cleaning industry by offering an app that connects customers with independent cleaners.",
    chinese_question: "这家初创公司旨在通过提供一个将客户与独立清洁工连接起来的应用程序来 __________ 家政服务行业。",
    answers: [
        { option: "A", answer: "uberize", chinese_answer: "优步化", chinese_romanization: "yōubù huà" },
        { option: "B", answer: "centralize", chinese_answer: "集中", chinese_romanization: "jízhōng" },
        { option: "C", answer: "complicate", chinese_answer: "复杂化", chinese_romanization: "fùzá huà" },
        { option: "D", answer: "discourage", chinese_answer: "劝阻", chinese_romanization: "quànzǔ" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'uberize' means to transform a service by using a business model similar to that of Uber, usually involving an app-based platform connecting consumers with service providers." +
        "<br><br>" +
        "(B) 'centralize' means to bring activities together in one place or under a single authority." +
        "<br><br>" +
        "(C) 'complicate' means to make something more difficult or confusing." +
        "<br><br>" +
        "(D) 'discourage' means to cause someone to lose confidence or enthusiasm.",
    chinese_explanation: "(A) '优步化' 意味着通过使用类似于优步的商业模式来改变一种服务，通常涉及一个将消费者与服务提供商连接起来的应用程序平台。" +
        "<br><br>" +
        "(B) '集中' 意味着将活动集中在一个地方或一个单一的权威下。" +
        "<br><br>" +
        "(C) '复杂化' 意味着使某事更加困难或混乱。" +
        "<br><br>" +
        "(D) '劝阻' 意味着使某人失去信心或热情。"
    },
    {
        id: 5,
    question: "The townspeople __________ the local hero for his bravery during the fire.",
    chinese_question: "镇上的人们 __________ 当地的英雄，因为他在火灾中的英勇行为。",
    answers: [
        { option: "A", answer: "criticized", chinese_answer: "批评", chinese_romanization: "pīpíng" },
        { option: "B", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "C", answer: "hailed", chinese_answer: "欢呼", chinese_romanization: "huānhū" },
        { option: "D", answer: "dismissed", chinese_answer: "解雇", chinese_romanization: "jiěgù" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'hailed' means to acclaim enthusiastically." +
        "<br><br>" + 
        "(A) 'criticized' means to indicate the faults of someone or something in a disapproving way." +
        "<br><br>" + 
        "(B) 'ignored' means to refuse to take notice of or acknowledge; disregard intentionally." +
        "<br><br>" + 
        "(D) 'dismissed' means to order or allow someone to leave.",
    chinese_explanation: "(C) “欢呼” 意味着热情地欢呼。" +
        "<br><br>" + 
        "(A) '批评' 意味着以不赞成的方式指出某人或某事的缺点。" +
        "<br><br>" + 
        "(B) '忽视' 意味着拒绝注意或承认；有意无视。" +
        "<br><br>" + 
        "(D) '解雇' 意味着命令或允许某人离开。"
    },
    {
        id: 6,
    question: "Constant praise can __________ a child, making them believe they are perfect and need no improvement.",
    chinese_question: "不断的赞美会 __________ 一个孩子，让他们认为自己是完美的，不需要改进。",
    answers: [
        { option: "A", answer: "encourage", chinese_answer: "鼓励", chinese_romanization: "gǔlì" },
        { option: "B", answer: "spoil", chinese_answer: "宠坏", chinese_romanization: "chǒnghuài" },
        { option: "C", answer: "educate", chinese_answer: "教育", chinese_romanization: "jiàoyù" },
        { option: "D", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'spoil' means to harm the character of a child by being too lenient or indulgent." +
        "<br><br>" +
        "(A) 'encourage' means to give support, confidence, or hope to someone." +
        "<br><br>" +
        "(C) 'educate' means to give intellectual, moral, and social instruction to someone." +
        "<br><br>" +
        "(D) 'support' means to bear all or part of the weight of something or someone; hold up.",
    chinese_explanation: "(B) '宠坏' 意味着通过过于宽容或纵容来损害孩子的性格。" +
        "<br><br>" +
        "(A) '鼓励' 意味着给予某人支持、信心或希望。" +
        "<br><br>" +
        "(C) '教育' 意味着给某人提供智力、道德和社会指导。" +
        "<br><br>" +
        "(D) '支持' 意味着承受某物或某人的全部或部分重量；支撑。"
    },
    {
        id: 7,
    question: "Teachers often encourage students to think critically rather than simply __________ information.",
    chinese_question: "老师们通常鼓励学生批判性地思考，而不是简单地 __________ 信息。",
    answers: [
        { option: "A", answer: "understand", chinese_answer: "理解", chinese_romanization: "lǐjiě" },
        { option: "B", answer: "regurgitate", chinese_answer: "机械重复", chinese_romanization: "jīxiè chóngfù" },
        { option: "C", answer: "appreciate", chinese_answer: "欣赏", chinese_romanization: "xīnshǎng" },
        { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'regurgitate' means to repeat information without understanding it." +
        "<br><br>" +
        "(A) 'understand' means to grasp the meaning of something." +
        "<br><br>" +
        "(C) 'appreciate' means to recognize the full worth of." +
        "<br><br>" +
        "(D) 'ignore' means to refuse to take notice of.",
    chinese_explanation: "(B) '机械重复' 意味着重复信息而不理解。" +
        "<br><br>" +
        "(A) '理解' 意味着掌握某事的含义。" +
        "<br><br>" +
        "(C) '欣赏' 意味着认识到某物的全部价值。" +
        "<br><br>" +
        "(D) '忽视' 意味着拒绝注意。"
    },
    {
        id: 8,
    question: "During the meeting, he continued to __________ the same point, even though everyone had already agreed.",
    chinese_question: "在会议期间，即使每个人都已经同意，他仍继续 __________ 同一点。",
    answers: [
        { option: "A", answer: "belabor", chinese_answer: "反复强调", chinese_romanization: "fǎnfù qiángdiào" },
        { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "C", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" },
        { option: "D", answer: "summarize", chinese_answer: "总结", chinese_romanization: "zǒngjié" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'belabor' means to argue or elaborate on a subject excessively." +
        "<br><br>" + 
        "(B) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" + 
        "(C) 'simplify' means to make something simpler or easier to do or understand." +
        "<br><br>" + 
        "(D) 'summarize' means to give a brief statement of the main points.",
    chinese_explanation: "(A) '反复强调' 意味着过度地争论或阐述某个主题。" +
        "<br><br>" + 
        "(B) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" + 
        "(C) '简化' 意味着使某事更简单或更容易做或理解。" +
        "<br><br>" + 
        "(D) '总结' 意味着对主要观点进行简要说明。"
    },
    {
        id: 9,
        question: "To ensure the building's safety, engineers decided to __________ the foundation.",
        chinese_question: "为了确保建筑的安全，工程师们决定 __________ 地基。",
        answers: [
            { option: "A", answer: "reinforce", chinese_answer: "加固", chinese_romanization: "jiāgù" },
            { option: "B", answer: "compromise", chinese_answer: "妥协", chinese_romanization: "tuǒxié" },
            { option: "C", answer: "weaken", chinese_answer: "削弱", chinese_romanization: "xuēruò" },
            { option: "D", answer: "undermine", chinese_answer: "破坏", chinese_romanization: "pòhuài" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'reinforce' means to strengthen or support an idea, behavior, or feeling." +
            "<br><br>" +
            "(B) 'compromise' means to settle a dispute by mutual concession." +
            "<br><br>" +
            "(C) 'weaken' means to make or become weaker in power, resolve, or physical strength." +
            "<br><br>" +
            "(D) 'undermine' means to damage or weaken someone or something, especially gradually.",
        chinese_explanation: "(A) '加固' 意味着增强或支持一个想法、行为或感觉。" +
            "<br><br>" +
            "(B) '妥协' 意味着通过相互让步来解决争端。" +
            "<br><br>" +
            "(C) '削弱' 意味着使力量、决心或体力减弱。" +
            "<br><br>" +
            "(D) '破坏' 意味着损害或削弱某人或某物，尤其是逐渐地。"
    },
    {
        id: 10,
        question: "The start of the school year will __________ with the end of summer vacation.",
        chinese_question: "开学日期将与暑假结束 __________。",
        answers: [
            { option: "A", answer: "conflict", chinese_answer: "冲突", chinese_romanization: "chōngtū" },
            { option: "B", answer: "coincide", chinese_answer: "同时发生", chinese_romanization: "tóngshí fāshēng" },
            { option: "C", answer: "disrupt", chinese_answer: "打乱", chinese_romanization: "dǎluàn" },
            { option: "D", answer: "separate", chinese_answer: "分离", chinese_romanization: "fēnlí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'coincide' means to occur at the same time." +
            "<br><br>" +
            "(A) 'conflict' means to be incompatible or at variance; clash." +
            "<br><br>" +
            "(C) 'disrupt' means to interrupt an event, activity, or process by causing a disturbance or problem." +
            "<br><br>" +
            "(D) 'separate' means to cause to move or be apart.",
        chinese_explanation: "(B) '同时发生'一词意味着在同一时间发生。" +
            "<br><br>" +
            "(A) '冲突' 意味着不相容或有差异；冲突。" +
            "<br><br>" +
            "(C) '打乱' 意味着通过引起干扰或问题来中断事件、活动或过程。" +
            "<br><br>" +
            "(D) '分离' 意味着使分开或分离。"
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

// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The district attorney decided to __________ the suspect for the alleged crime by gathering substantial evidence and presenting a strong case in court.",
        chinese_question: "地区检察官决定通过收集大量证据并在法庭上提出有力的案件来 __________ 嫌疑人的指控。",
        answers: [
            { option: "A", answer: "defend", chinese_answer: "辩护", chinese_romanization: "biànhù" },
            { option: "B", answer: "prosecute", chinese_answer: "起诉", chinese_romanization: "qǐsù" },
            { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "release", chinese_answer: "释放", chinese_romanization: "shìfàng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'prosecute' means to institute legal proceedings against someone." +
            "<br><br>" +
            "(A) 'defend' means to resist an attack made on someone or something; protect from harm or danger." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'release' means to set someone or something free from confinement, restraint, or bondage.",
        chinese_explanation: "(B) '起诉'一词意味着对某人提起法律诉讼。" +
            "<br><br>" +
            "(A) '辩护' 意味着抵御对某人或某物的攻击；保护免受伤害或危险。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '释放' 意味着将某人或某物从监禁、束缚或奴役中释放出来。"
    },
    {
        id: 2,
        question: "The technician needed to __________ the equipment by fine-tuning the settings, to ensure accurate measurements.",
        chinese_question: "技术人员需要通过微调设置来 __________ 设备，以确保测量准确。",
        answers: [
            { option: "A", answer: "calibrate", chinese_answer: "校准", chinese_romanization: "xiàozhǔn" },
            { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "dismantle", chinese_answer: "拆卸", chinese_romanization: "chāixiè" },
            { option: "D", answer: "confuse", chinese_answer: "迷惑", chinese_romanization: "míhuò" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'calibrate' means to adjust (a measuring instrument) to ensure its accuracy." +
            "<br><br>" +
            "(B) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(C) 'dismantle' means to take (a machine or structure) to pieces." +
            "<br><br>" +
            "(D) 'confuse' means to make (someone) unable to think clearly.",
        chinese_explanation: "(A) '校准' 意味着调整（测量仪器）以确保其准确性。" +
            "<br><br>" +
            "(B) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(C) '拆卸' 意味着将（机器或结构）拆成碎片。" +
            "<br><br>" +
            "(D) '迷惑' 意味着使（某人）无法清晰思考。"
    },
    {
        id: 3,
        question: "The detective began to __________ the evidence carefully, looking for any clues that might solve the case.",
        chinese_question: "侦探开始仔细 __________ 证据，寻找任何可能破案的线索。",
        answers: [
            { option: "A", answer: "glance", chinese_answer: "瞥一眼", chinese_romanization: "piē yī yǎn" },
            { option: "B", answer: "overlook", chinese_answer: "忽略", chinese_romanization: "hūlüè" },
            { option: "C", answer: "scrutinize", chinese_answer: "仔细检查", chinese_romanization: "zǐxì jiǎnchá" },
            { option: "D", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'scrutinize' means to examine or inspect closely and thoroughly." +
            "<br><br>" +
            "(A) 'glance' means to take a brief or hurried look." +
            "<br><br>" +
            "(B) 'overlook' means to fail to notice something." +
            "<br><br>" +
            "(D) 'neglect' means to fail to care for properly.",
        chinese_explanation: "(C) '仔细检查' 意味着仔细地检查或察看。" +
            "<br><br>" +
            "(A) '瞥一眼' 意味着快速或匆忙地看一眼。" +
            "<br><br>" +
            "(B) '忽略' 意味着未能注意到某事。" +
            "<br><br>" +
            "(D) '忽视' 意味着未能妥善照顾。"
    },
    {
        id: 4,
    question: "The scientist began to __________ that a new particle could explain the unusual experimental results.",
    chinese_question: "科学家开始 __________ 一种新粒子可以解释异常的实验结果。",
    answers: [
        { option: "A", answer: "deny", chinese_answer: "否认", chinese_romanization: "fǒurèn" },
        { option: "B", answer: "postulate", chinese_answer: "假设", chinese_romanization: "jiǎshè" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "reject", chinese_answer: "拒绝", chinese_romanization: "jùjué" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'postulate' means to suggest or assume the existence, fact, or truth of something as a basis for reasoning, discussion, or belief." +
        "<br><br>" +
        "(A) 'deny' means to refuse to admit the truth or existence of something." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of." +
        "<br><br>" +
        "(D) 'reject' means to dismiss as inadequate, unacceptable, or faulty.",
    chinese_explanation: "(B) '假设' 意味着建议或假定某事物的存在、事实或真实性作为推理、讨论或信仰的基础。" +
        "<br><br>" +
        "(A) '否认' 意味着拒绝承认某事的真实性或存在。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意。" +
        "<br><br>" +
        "(D) '拒绝' 意味着因不充分、不接受或有缺陷而驳回。"
    },
    {
        id: 5,
                question: "The scholar was determined to __________ the outdated theories with his new research findings.",
                chinese_question: "学者决心用他的新研究成果 __________ 过时的理论。",
                answers: [
                    { option: "A", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
                    { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
                    { option: "C", answer: "accept", chinese_answer: "接受", chinese_romanization: "jiēshòu" },
                    { option: "D", answer: "refute", chinese_answer: "反驳", chinese_romanization: "fǎnbó" }
                ],
                correctAnswer: "D",
                explanation: "(D) 'refute' means to prove a statement or theory to be wrong or false." +
                    "<br><br>" +
                    "(A) 'support' means to bear all or part of the weight of; hold up." +
                    "<br><br>" +
                    "(C) 'accept' means to consent to receive or undertake something offered." +
                    "<br><br>" +
                    "(B) 'ignore' means to refuse to take notice of or acknowledge.",
                chinese_explanation: "(D) '反驳'一词意味着证明一个陈述或理论是错误的或虚假的。" +
                    "<br><br>" +
                    "(A) '支持' 意味着承受全部或部分重量；支撑。" +
                    "<br><br>" +
                    "(C) '接受' 意味着同意接受或承担提供的东西。" +
                    "<br><br>" +
                    "(B) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 6,
    question: "She managed to __________ a plan to solve the problem quickly by brainstorming ideas, and organizing them efficiently.",
    chinese_question: "她设法通过头脑风暴并高效组织想法，迅速 __________ 出解决问题的计划。",
        answers: [
            { option: "A", answer: "devise", chinese_answer: "设计", chinese_romanization: "shèjì" },
            { option: "B", answer: "forget", chinese_answer: "忘记", chinese_romanization: "wàngjì" },
            { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "D", answer: "simplify", chinese_answer: "简化", chinese_romanization: "jiǎnhuà" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'devise' means to plan or invent (a complex procedure, system, or mechanism) by careful thought." +
            "<br><br>" +
            "(B) 'forget' means to fail to remember." +
            "<br><br>" +
            "(C) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(D) 'simplify' means to make something simpler or easier to do or understand.",
        chinese_explanation: "(A) '设计' 意味着通过仔细思考来计划或发明（复杂的程序、系统或机制）。" +
            "<br><br>" +
            "(B) '忘记' 意味着未能记住。" +
            "<br><br>" +
            "(C) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(D) '简化' 意味着使某事物更简单或更容易做或理解。"
    },
    {
        id: 7,
        question: "The decision to not wear a seatbelt __________ safety regulations, leading to a fine.",
        chinese_question: "不系安全带的决定 __________ 了安全法规，导致罚款。",
        answers: [
            { option: "A", answer: "upheld", chinese_answer: "维护了", chinese_romanization: "wéihùle" },
            { option: "B", answer: "contravened", chinese_answer: "违反了", chinese_romanization: "wéifǎnle" },
            { option: "C", answer: "respected", chinese_answer: "尊重了", chinese_romanization: "zūnzhòngle" },
            { option: "D", answer: "followed", chinese_answer: "遵循了", chinese_romanization: "zūnxúnle" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'contravened' means to violate or conflict with a law, rule, or agreement." +
            "<br><br>" +
            "(A) 'upheld' means to maintain or support." +
            "<br><br>" +
            "(C) 'respected' means to show consideration for." +
            "<br><br>" +
            "(D) 'followed' means to act according to.",
        chinese_explanation: "(B) '违反了'一词意味着违反或与法律、规则或协议相冲突。" +
            "<br><br>" +
            "(A) '维护了' 意味着维护或支持。" +
            "<br><br>" +
            "(C) '尊重了' 意味着表示考虑。" +
            "<br><br>" +
            "(D) '遵循了' 意味着按照做。"
    },
    {
        id: 8,
        question: "During the game of dodgeball, she skillfully __________ every ball thrown at her, staying in the game until the very end.",
        chinese_question: "在躲避球比赛中，她熟练地 __________ 每一个扔向她的球，直到最后都留在游戏中。",
        answers: [
            { option: "A", answer: "faced", chinese_answer: "面对", chinese_romanization: "miànduì" },
            { option: "B", answer: "ignored", chinese_answer: "忽略", chinese_romanization: "hūlüè" },
            { option: "C", answer: "dodged", chinese_answer: "躲避", chinese_romanization: "duǒbì" },
            { option: "D", answer: "caught", chinese_answer: "接住", chinese_romanization: "jiē zhù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'dodged' means avoided by moving quickly aside." +
            "<br><br>" +
            "(A) 'faced' means confronted and dealt with." +
            "<br><br>" +
            "(B) 'ignored' means refused to take notice of." +
            "<br><br>" +
            "(D) 'caught' means intercepted and held something that was moving.",
        chinese_explanation: "(C) '躲避' 意味着通过快速移动避开。" +
            "<br><br>" +
            "(A) '面对' 意味着面对和处理。" +
            "<br><br>" +
            "(B) '忽略' 意味着拒绝注意。" +
            "<br><br>" +
            "(D) '接住' 意味着拦截并抓住移动的东西。"
    },
    {
        id: 9,
    question: "The doctor was able to __________ the patient's concerns by explaining the procedure in detail.",
    chinese_question: "医生通过详细解释手术过程来 __________ 患者的担忧。",
    answers: [
        { option: "A", answer: "alleviate", chinese_answer: "缓和", chinese_romanization: "huǎnhé" },
        { option: "B", answer: "assuage", chinese_answer: "缓解", chinese_romanization: "huǎnjiě" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "exacerbate", chinese_answer: "加剧", chinese_romanization: "jiājù" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'assuage' means to make an unpleasant feeling less intense." +
        "<br><br>" +
        "(A) 'alleviate' means to make suffering, deficiency, or a problem less severe." +
        "<br><br>" +
        "(C) 'ignore' means to refuse to take notice of." +
        "<br><br>" +
        "(D) 'exacerbate' means to make a problem, bad situation, or negative feeling worse.",
    chinese_explanation: "(B) '缓解' 意味着减轻不愉快的感觉。" +
        "<br><br>" +
        "(A) '缓和' 意味着减轻痛苦、缺陷或问题的严重性。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意。" +
        "<br><br>" +
        "(D) '加剧' 意味着使问题、糟糕的情况或负面情绪变得更糟。"
    },
    {
        id: 10,
    question: "The journalist promised not to __________ the source of the confidential information to protect their anonymity.",
    chinese_question: "记者承诺不 __________ 机密信息的来源，以保护他们的匿名性。",
    answers: [
        { option: "A", answer: "conceal", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
        { option: "B", answer: "divulge", chinese_answer: "泄露", chinese_romanization: "xièlòu" },
        { option: "C", answer: "fabricate", chinese_answer: "捏造", chinese_romanization: "niēzào" },
        { option: "D", answer: "obscure", chinese_answer: "模糊", chinese_romanization: "móhú" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'divulge' means to make known (private or sensitive information)." +
        "<br><br>" +
        "(A) 'conceal' means to hide." +
        "<br><br>" +
        "(C) 'fabricate' means to invent or make up." +
        "<br><br>" +
        "(D) 'obscure' means to make unclear.",
    chinese_explanation: "(B) '泄露' 一词意味着使（私人或敏感信息）变得公开。" +
        "<br><br>" +
        "(A) '隐藏' 意味着隐藏。" +
        "<br><br>" +
        "(C) '捏造' 意味着编造或虚构。" +
        "<br><br>" +
        "(D) '模糊' 意味着使不清楚。"
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

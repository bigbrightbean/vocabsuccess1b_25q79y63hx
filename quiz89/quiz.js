// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The voters __________ the mayor for failing to keep his campaign promises, by holding protests and writing critical articles.",
    chinese_question: "选民们通过举行抗议活动和撰写批评文章来 __________ 市长没有履行竞选承诺。",
    answers: [
        { option: "A", answer: "lambasted", chinese_answer: "严厉批评", chinese_romanization: "yánlì pīpíng" },
        { option: "B", answer: "praised", chinese_answer: "赞美", chinese_romanization: "zànměi" },
        { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "assisted", chinese_answer: "帮助", chinese_romanization: "bāngzhù" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'lambasted' means to criticize someone harshly, used figuratively here." +
        "<br><br>" +
        "(B) 'praised' means to express warm approval or admiration." +
        "<br><br>" +
        "(C) 'ignored' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(D) 'assisted' means to help someone.",
    chinese_explanation: "(A) '严厉批评' 意味着严厉地批评某人，这里是比喻用法。" +
        "<br><br>" +
        "(B) '赞美' 意味着表达热烈的赞同或钦佩。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(D) '帮助' 意味着帮助某人。"
    },
    {
        id: 2,
    question: "In his groundbreaking paper, he __________ that the universe is expanding at an accelerating rate.",
    chinese_question: "在他开创性的论文中，他 __________ 宇宙正在以加速的速度膨胀。",
    answers: [
        { option: "A", answer: "refuted", chinese_answer: "反驳", chinese_romanization: "fǎnbó" },
        { option: "B", answer: "postulated", chinese_answer: "假设", chinese_romanization: "jiǎshè" },
        { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "questioned", chinese_answer: "质疑", chinese_romanization: "zhìyí" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'postulated' means to suggest or assume the existence, fact, or truth of something as a basis for reasoning, discussion, or belief." +
        "<br><br>" +
        "(A) 'refuted' means to prove a statement or theory to be wrong or false." +
        "<br><br>" +
        "(C) 'ignored' means to refuse to take notice of." +
        "<br><br>" +
        "(D) 'questioned' means to ask questions about something, especially in order to express doubt.",
    chinese_explanation: "(B) '假设' 意味着建议或假定某事物的存在、事实或真实性作为推理、讨论或信仰的基础。" +
        "<br><br>" +
        "(A) '反驳' 意味着证明某个陈述或理论是错误的或虚假的。" +
        "<br><br>" +
        "(C) '忽视' 意味着拒绝注意。" +
        "<br><br>" +
        "(D) '质疑' 意味着对某事提出问题，特别是为了表达怀疑。"
    },
    {
        id: 3,
    question: "The young girl was __________ by the handsome actor, daydreaming about him constantly.",
    chinese_question: "小女孩被英俊的演员 __________，不断地幻想着他。",
    answers: [
        { option: "A", answer: "disgusted", chinese_answer: "厌恶", chinese_romanization: "yànwù" },
        { option: "B", answer: "infatuated", chinese_answer: "迷恋", chinese_romanization: "míliàn" },
        { option: "C", answer: "detested", chinese_answer: "厌恶", chinese_romanization: "yànwù" },
        { option: "D", answer: "repelled", chinese_answer: "排斥", chinese_romanization: "páichì" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'infatuated' means to be inspired with an intense but short-lived passion or admiration." +
        "<br><br>" +
        "(A) 'disgusted' means to feel revulsion or profound disapproval." +
        "<br><br>" +
        "(C) 'detested' means to dislike intensely." +
        "<br><br>" +
        "(D) 'repelled' means to drive or force back.",
    chinese_explanation: "(B) '迷恋' 一词意味着受到强烈但短暂的激情或钦佩的激励。" +
        "<br><br>" +
        "(A) '厌恶' 意味着感到厌恶或强烈不满。" +
        "<br><br>" +
        "(C) '厌恶' 意味着强烈地不喜欢。" +
        "<br><br>" +
        "(D) '排斥' 意味着驱逐或迫使回去。"
    },
    {
        id: 4,
    question: "The teacher's encouraging words served to __________ the students' spirits before the exam, helping them feel more confident and motivated.",
    chinese_question: "老师鼓励的话语在考试前 __________ 了学生们的情绪，帮助他们感到更自信和有动力。",
    answers: [
        { option: "A", answer: "leaven", chinese_answer: "激励", chinese_romanization: "jīlì" },
        { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "C", answer: "diminish", chinese_answer: "减少", chinese_romanization: "jiǎnshǎo" },
        { option: "D", answer: "celebrate", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'leaven' means to permeate and modify or transform something for the better." +
        "<br><br>" +
        "(B) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" +
        "(C) 'diminish' means to make or become less." +
        "<br><br>" +
        "(D) 'celebrate' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity.",
    chinese_explanation: "(A) '激励' 意味着渗透和改变或改善某事物。" +
        "<br><br>" +
        "(B) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" +
        "(C) '减少' 意味着使变少或变少。" +
        "<br><br>" +
        "(D) '庆祝' 意味着通过社交聚会或愉快的活动来承认一个重要或快乐的日子或事件。"
    },
    {
        id: 5,
        question: "In order to maintain a healthy lifestyle, she decided to __________ junk food and focus on eating nutritious meals.",
        chinese_question: "为了保持健康的生活方式，她决定 __________ 垃圾食品，并专注于食用营养餐。",
        answers: [
            { option: "A", answer: "indulge", chinese_answer: "放纵", chinese_romanization: "fàngzòng" },
            { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "embrace", chinese_answer: "接受", chinese_romanization: "jiēshòu" },
            { option: "D", answer: "eschew", chinese_answer: "避免", chinese_romanization: "bìmiǎn" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'eschew' means to deliberately avoid or abstain from." +
            "<br><br>" +
            "(A) 'indulge' means to allow oneself to enjoy the pleasure of." +
            "<br><br>" +
            "(B) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(C) 'embrace' means to accept or support willingly and enthusiastically.",
        chinese_explanation: "(D) '避免' 意味着故意避免或戒绝。" +
            "<br><br>" +
            "(A) '放纵' 意味着允许自己享受。" +
            "<br><br>" +
            "(B) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(C) '接受' 意味着愿意和热情地支持。"
    },
    {
        id: 6,
    question: "Hoping to be chosen as the team captain, he would __________ over the coach by offering constant compliments and doing extra tasks.",
    chinese_question: "希望被选为队长，他会通过不断奉承和做额外的任务来 __________ 教练。",
    answers: [
        { option: "A", answer: "fawn", chinese_answer: "奉承", chinese_romanization: "fèngchéng" },
        { option: "B", answer: "challenge", chinese_answer: "挑战", chinese_romanization: "tiǎozhàn" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "reprimand", chinese_answer: "训斥", chinese_romanization: "xùnchì" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'fawn' means to give a servile display of exaggerated flattery or affection, typically to gain favor, used figuratively here." +
        "<br><br>" + 
        "(B) 'challenge' means to dispute the truth or validity of." +
        "<br><br>" + 
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" + 
        "(D) 'reprimand' means to rebuke someone, especially officially.",
    chinese_explanation: "(A) '奉承' 意味着表现出卑微的、夸张的恭维或爱慕，通常是为了获得青睐，这里是比喻用法。" +
        "<br><br>" + 
        "(B) '挑战' 意味着质疑真理或有效性。" +
        "<br><br>" + 
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" + 
        "(D) '训斥' 意味着斥责某人，尤指官方的。"
    },
    {
        id: 7,
    question: "The company's logo was __________ on all the employee uniforms to promote brand visibility, so that it would be easily recognized by customers.",
    chinese_question: "公司的标志被 __________ 在所有员工制服上，以提升品牌知名度，这样顾客就能轻易识别。",
    answers: [
        { option: "A", answer: "emblazoned", chinese_answer: "醒目地展示", chinese_romanization: "xǐngmù dì zhǎnshì" },
        { option: "B", answer: "erased", chinese_answer: "擦掉", chinese_romanization: "cādiào" },
        { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "concealed", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'emblazoned' means to display a design prominently or vividly." +
        "<br><br>" + 
        "(B) 'erased' means to remove all traces of something." +
        "<br><br>" + 
        "(C) 'ignored' means to refuse to take notice of or acknowledge." +
        "<br><br>" + 
        "(D) 'concealed' means to keep something secret or hidden.",
    chinese_explanation: "(A) '醒目地展示' 意味着突出或生动地展示设计。" +
        "<br><br>" + 
        "(B) '擦掉' 意味着去除所有痕迹。" +
        "<br><br>" + 
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" + 
        "(D) '隐藏' 意味着保密或隐藏某物。"
    },
    {
        id: 8,
        question: "The rebels managed to __________ the dictator and establish a new government by rallying support and coordinating strategic attacks.",
        chinese_question: "叛军通过争取支持和协调战略攻击设法 __________ 独裁者，建立了一个新政府。",
        answers: [
            { option: "A", answer: "praise", chinese_answer: "赞扬", chinese_romanization: "zànyáng" },
            { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
            { option: "D", answer: "depose", chinese_answer: "罢免", chinese_romanization: "bàmiǎn" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'depose' means to remove from office suddenly and forcefully." +
            "<br><br>" +
            "(A) 'praise' means to express warm approval or admiration." +
            "<br><br>" +
            "(B) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(C) 'support' means to bear all or part of the weight of something; to hold up.",
        chinese_explanation: "(D) '罢免' 意味着突然且强制地将其免职。" +
            "<br><br>" +
            "(A) '赞扬' 意味着表达热烈的赞同或钦佩。" +
            "<br><br>" +
            "(B) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(C) '支持' 意味着承担某物的全部或部分重量；支撑。"
    },
    {
        id: 9,
    question: "The gymnast could __________ her body into seemingly impossible positions by stretching extensively and training rigorously.",
    chinese_question: "这名体操运动员可以通过大量拉伸和严格训练将她的身体 __________ 成看似不可能的姿势。",
    answers: [
        { option: "A", answer: "relax", chinese_answer: "放松", chinese_romanization: "fàngsōng" },
        { option: "B", answer: "contort", chinese_answer: "扭曲", chinese_romanization: "niǔqū" },
        { option: "C", answer: "soothe", chinese_answer: "抚慰", chinese_romanization: "fǔwèi" },
        { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'contort' means to twist or bend out of its normal shape." +
        "<br><br>" + 
        "(A) 'relax' means to make or become less tense or anxious." +
        "<br><br>" + 
        "(C) 'soothe' means to gently calm or relieve pain." +
        "<br><br>" + 
        "(D) 'ignore' means to refuse to take notice of or acknowledge.",
    chinese_explanation: "(B) '扭曲' 意味着将某物扭曲或弯曲至其正常形状之外。" +
        "<br><br>" + 
        "(A) '放松' 意味着使紧张或焦虑减轻。" +
        "<br><br>" + 
        "(C) '抚慰' 意味着轻轻地安抚或缓解疼痛。" +
        "<br><br>" + 
        "(D) '忽视' 意味着拒绝注意或承认。"
    },
    {
        id: 10,
    question: "The statue had been __________ from a single block of marble with incredible precision.",
    chinese_question: "这座雕像是从一整块大理石中 __________ 出来的，非常精确。",
    answers: [
        { option: "A", answer: "chiselled", chinese_answer: "雕刻", chinese_romanization: "diāokè" },
        { option: "B", answer: "painted", chinese_answer: "涂漆", chinese_romanization: "túqī" },
        { option: "C", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "damaged", chinese_answer: "损坏", chinese_romanization: "sǔnhuài" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'chiselled' means to shape or cut with a chisel, especially with great precision." +
        "<br><br>" + 
        "(B) 'painted' means to cover the surface of something with paint." +
        "<br><br>" + 
        "(C) 'ignored' means to refuse to take notice of or acknowledge." +
        "<br><br>" + 
        "(D) 'damaged' means to harm or injure.",
    chinese_explanation: "(A) '雕刻' 意味着用凿子雕刻或切割，特别是非常精确地。" +
        "<br><br>" + 
        "(B) '涂漆' 意味着在某物表面覆盖油漆。" +
        "<br><br>" + 
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" + 
        "(D) '损坏' 意味着伤害或损害。"
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

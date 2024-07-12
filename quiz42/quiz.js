// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The __________ manners of the diplomat impressed everyone at the international conference.",
        chinese_question: "这位外交官 __________ 的举止给国际会议上的每个人留下了深刻印象。",
        answers: [
            { option: "A", answer: "coarse", chinese_answer: "粗糙的", chinese_romanization: "cūcāo de" },
            { option: "B", answer: "crude", chinese_answer: "天然的", chinese_romanization: "tiānrán de" },
            { option: "C", answer: "refined", chinese_answer: "优雅的", chinese_romanization: "yōuyǎ de" },
            { option: "D", answer: "rough", chinese_answer: "粗暴的", chinese_romanization: "cūbào de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'refined' means elegant and cultured in appearance, manner, or taste." +
            "<br><br>" +
            "(A) 'coarse' means rough or harsh in texture." +
            "<br><br>" +
            "(B) 'crude' means in a natural or raw state; not yet processed or refined." +
            "<br><br>" +
            "(D) 'rough' means having an uneven or irregular surface; not smooth or level.",
        chinese_explanation: "(C) '优雅的' 意味着外表、举止或品味优雅和有文化的。" +
            "<br><br>" +
            "(A) '粗糙的' 意味着质地粗糙或粗糙的。" +
            "<br><br>" +
            "(B) '天然的' 意味着处于自然状态或原始状态的；未经加工或提炼的。" +
            "<br><br>" +
            "(D) '粗暴的' 意味着表面不平或不规则的；不光滑或不平整的。"
    },
    {
        id: 2,
        question: "Her __________ dedication to ethics earned her the respect of colleagues and clients alike.",
        chinese_question: "她对伦理的 __________ 奉献赢得了同事和客户的尊敬。",
        answers: [
            { option: "A", answer: "unscrupulous", chinese_answer: "不道德的", chinese_romanization: "bù dàodé de" },
            { option: "B", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mòbùguānxīn de" },
            { option: "C", answer: "scrupulous", chinese_answer: "细心的", chinese_romanization: "xìxīn de" },
            { option: "D", answer: "lax", chinese_answer: "松懈的", chinese_romanization: "sōngxiè de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'scrupulous' means having moral integrity; acting in strict regard for what is considered right or proper." +
            "<br><br>" +
            "(A) 'unscrupulous' means having or showing no moral principles; not honest or fair." +
            "<br><br>" +
            "(B) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(D) 'lax' means not sufficiently strict, severe, or careful.",
        chinese_explanation: "(C) '细心的' 意味着有道德诚信；严格遵守被认为是正确或适当的事情。" +
            "<br><br>" +
            "(A) '不道德的' 意味着没有或表现出没有道德原则的；不诚实或不公平的。" +
            "<br><br>" +
            "(B) '漠不关心的' 意味着没有特别的兴趣或同情；不关心的。" +
            "<br><br>" +
            "(D) '松懈的' 意味着不够严格、严厉或小心的。"
    },
    {
        id: 3,
        question: "He seemed genuinely friendly, but his __________ motives soon became clear when he asked for a large favor.",
        chinese_question: "他看起来真的很友好，但当他要求一个大忙时，他的 __________ 动机很快就显露出来了。",
        answers: [
            { option: "A", answer: "honest", chinese_answer: "诚实的", chinese_romanization: "chéngshí de" },
            { option: "B", answer: "transparent", chinese_answer: "透明的", chinese_romanization: "tòumíng de" },
            { option: "C", answer: "ulterior", chinese_answer: "隐秘的", chinese_romanization: "yǐnmì de" },
            { option: "D", answer: "open", chinese_answer: "开放的", chinese_romanization: "kāifàng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'ulterior' means existing beyond what is obvious or admitted; intentionally hidden." +
            "<br><br>" +
            "(A) 'honest' means free of deceit; truthful and sincere." +
            "<br><br>" +
            "(B) 'transparent' means easy to perceive or detect." +
            "<br><br>" +
            "(D) 'open' means allowing access, passage, or a view through an empty space; not closed or blocked up.",
        chinese_explanation: "(C) '隐秘的' 意味着存在于明显或承认之外的；故意隐藏的。" +
            "<br><br>" +
            "(A) '诚实的' 意味着没有欺骗；真实和真诚的。" +
            "<br><br>" +
            "(B) '透明的' 意味着容易察觉或发现的。" +
            "<br><br>" +
            "(D) '开放的' 意味着允许通过空旷的空间进入、通过或看到；未关闭或未阻塞的。"
    },
    {
        id: 4,
        question: "They decided to take a __________ trip to the beach, packing their bags and leaving within the hour without any prior planning.",
        chinese_question: "他们决定来一次 __________ 的海滩旅行，打包行李，在一个小时内出发，没有任何事先计划。",
        answers: [
            { option: "A", answer: "spur-of-the-moment", chinese_answer: "一时冲动的", chinese_romanization: "yīshí chōngdòng de" },
            { option: "B", answer: "well-planned", chinese_answer: "精心计划的", chinese_romanization: "jīngxīn jìhuà de" },
            { option: "C", answer: "premeditated", chinese_answer: "预谋的", chinese_romanization: "yùmóu de" },
            { option: "D", answer: "deliberate", chinese_answer: "深思熟虑的", chinese_romanization: "shēnsī shúlǜ de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'spur-of-the-moment' means done suddenly without planning; spontaneous." +
            "<br><br>" +
            "(B) 'well-planned' means thought out or arranged in advance." +
            "<br><br>" +
            "(C) 'premeditated' means thought out or planned beforehand." +
            "<br><br>" +
            "(D) 'deliberate' means done consciously and intentionally.",
        chinese_explanation: "(A) '一时冲动的' 意味着突然做的，没有计划的；自发的。" +
            "<br><br>" +
            "(B) '精心计划的' 意味着事先思考或安排的。" +
            "<br><br>" +
            "(C) '预谋的' 意味着事先思考或计划的。" +
            "<br><br>" +
            "(D) '深思熟虑的' 意味着有意识和故意做的。"
    },
    {
        id: 5,
        question: "The beauty of her painting was __________, capturing subtle details that only the keenest observers noticed.",
        chinese_question: "她的画作美得 __________，捕捉到了只有最敏锐的观察者才能注意到的微妙细节。",
        answers: [
            { option: "A", answer: "ostentatious", chinese_answer: "炫耀的", chinese_romanization: "xuànyào de" },
            { option: "B", answer: "garish", chinese_answer: "花哨的", chinese_romanization: "huāshào de" },
            { option: "C", answer: "understated", chinese_answer: "低调的", chinese_romanization: "dīdiào de" },
            { option: "D", answer: "flamboyant", chinese_answer: "华丽的", chinese_romanization: "huálì de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'understated' means presented or expressed in a subtle and effective way." +
            "<br><br>" +
            "(A) 'ostentatious' means characterized by vulgar or pretentious display; designed to impress or attract notice." +
            "<br><br>" +
            "(B) 'garish' means obtrusively bright and showy; lurid." +
            "<br><br>" +
            "(D) 'flamboyant' means tending to attract attention because of their exuberance, confidence, and stylishness.",
        chinese_explanation: "(C) '低调' 意味着以微妙而有效的方式呈现或表达。" +
            "<br><br>" +
            "(A) '炫耀' 意味着以粗俗或自命不凡的展示为特征；旨在给人留下深刻印象或吸引注意力。" +
            "<br><br>" +
            "(B) '花哨' 意味着显眼地明亮和俗丽。" +
            "<br><br>" +
            "(D) '华丽' 意味着因其热情、自信和时尚而倾向于吸引注意力。"
    },
    {
        id: 6,
        question: "The child was very __________ to loud noises and would cover his ears when he heard them.",
        chinese_question: "孩子对大声的噪音非常 __________，听到时会捂住耳朵。",
        answers: [
            { option: "A", answer: "immune", chinese_answer: "免疫的", chinese_romanization: "miǎnyì de" },
            { option: "B", answer: "sensitive", chinese_answer: "敏感的", chinese_romanization: "mǐngǎn de" },
            { option: "C", answer: "unaware", chinese_answer: "不知道的", chinese_romanization: "bù zhīdào de" },
            { option: "D", answer: "resistant", chinese_answer: "抵抗的", chinese_romanization: "dǐkàng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'sensitive' means quick to detect or respond to slight changes, signals, or influences." +
            "<br><br>" +
            "(A) 'immune' means resistant to a particular infection or toxin." +
            "<br><br>" +
            "(C) 'unaware' means having no knowledge of a situation or fact." +
            "<br><br>" +
            "(D) 'resistant' means offering resistance to something or someone.",
        chinese_explanation: "(B) '敏感的' 意味着对轻微的变化、信号或影响反应迅速。" +
            "<br><br>" +
            "(A) '免疫的' 意味着对某种特定感染或毒素有抵抗力的。" +
            "<br><br>" +
            "(C) '不知道的' 意味着对情况或事实没有了解。" +
            "<br><br>" +
            "(D) '抵抗的' 意味着对某事或某人提供抵抗。"
    },
    {
        id: 7,
    question: "His __________ behaviour at the meeting raised many eyebrows.",
    chinese_question: "他在会议上的 __________ 行为引起了很多人的注意。",
    answers: [
        { option: "A", answer: "usual", chinese_answer: "通常的", chinese_romanization: "tōngcháng de" },
        { option: "B", answer: "normal", chinese_answer: "正常的", chinese_romanization: "zhèngcháng de" },
        { option: "C", answer: "expected", chinese_answer: "预期的", chinese_romanization: "yùqī de" },
        { option: "D", answer: "peculiar", chinese_answer: "奇怪的", chinese_romanization: "qíguài de" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'peculiar' means strange or unusual." +
        "<br><br>" +
        "(A) 'usual' means habitual or customary." +
        "<br><br>" +
        "(B) 'normal' means conforming to a standard; usual, typical, or expected." +
        "<br><br>" +
        "(C) 'expected' means regarded as likely to happen.",
    chinese_explanation: "(D) '奇怪的' 意味着奇怪或不寻常。" +
        "<br><br>" +
        "(A) '通常的' 意味着习惯性的或惯常的。" +
        "<br><br>" +
        "(B) '正常的' 意味着符合标准的；通常的，典型的，或预期的。" +
        "<br><br>" +
        "(C) '预期的' 意味着被认为可能会发生的。"
    },
    {
        id: 8,
        question: "The __________ waves during the storm caused extensive damage to the coastal areas.",
        chinese_question: "风暴期间的 __________ 海浪对沿海地区造成了广泛的破坏。",
        answers: [
            { option: "A", answer: "enormous", chinese_answer: "巨大", chinese_romanization: "jùdà" },
            { option: "B", answer: "gentle", chinese_answer: "温和", chinese_romanization: "wēnhé" },
            { option: "C", answer: "mild", chinese_answer: "温和", chinese_romanization: "wēnhé" },
            { option: "D", answer: "calm", chinese_answer: "平静", chinese_romanization: "píngjìng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'enormous' means very large in size, quantity, or extent." +
            "<br><br>" +
            "(B) 'gentle' means having or showing a mild, kind, or tender temperament or character." +
            "<br><br>" +
            "(C) 'mild' means not severe, serious, or harsh." +
            "<br><br>" +
            "(D) 'calm' means not showing or feeling nervousness, anger, or other strong emotions.",
        chinese_explanation: "(A) '巨大' 意味着尺寸、数量或程度非常大。" +
            "<br><br>" +
            "(B) '温和' 意味着表现出温和、善良或温柔的气质或性格。" +
            "<br><br>" +
            "(C) '温和' 意味着不严厉、严重或苛刻。" +
            "<br><br>" +
            "(D) '平静' 意味着不表现或感到紧张、愤怒或其他强烈的情绪。"
    },
    {
        id: 9,
        question: "The view from the top of the mountain was __________, with a panoramic scene of the entire valley.",
        chinese_question: "从山顶看到的景色 __________ ，可以看到整个山谷的全景。",
        answers: [
            { option: "A", answer: "outstanding", chinese_answer: "杰出", chinese_romanization: "jiéchū" },
            { option: "B", answer: "dull", chinese_answer: "无趣", chinese_romanization: "wúqù" },
            { option: "C", answer: "unimpressive", chinese_answer: "不令人印象深刻", chinese_romanization: "bù lìng rén yìnxiàng shēnkè" },
            { option: "D", answer: "lackluster", chinese_answer: "平淡", chinese_romanization: "píngdàn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'outstanding' means exceptionally good or impressive." +
            "<br><br>" +
            "(B) 'dull' means lacking interest or excitement." +
            "<br><br>" +
            "(C) 'unimpressive' means not evoking admiration or respect." +
            "<br><br>" +
            "(D) 'lackluster' means lacking in vitality, force, or conviction; uninspired or uninspiring.",
        chinese_explanation: "(A) '杰出' 意味着特别好或令人印象深刻。" +
            "<br><br>" +
            "(B) '无趣' 意味着缺乏兴趣或兴奋。" +
            "<br><br>" +
            "(C) '不令人印象深刻' 意味着不引起钦佩或尊重。" +
            "<br><br>" +
            "(D) '平淡' 意味着缺乏活力、力量或信念；没有灵感或不鼓舞人心。"
    },
    {
        id: 10,
        question: "The __________ beauty of the artwork captivated everyone in the gallery.",
        chinese_question: "艺术品的__________美丽吸引了画廊里的所有人。",
        answers: [
            { option: "A", answer: "singular", chinese_answer: "独特", chinese_romanization: "dútè" },
            { option: "B", answer: "multiple", chinese_answer: "多重", chinese_romanization: "duōchóng" },
            { option: "C", answer: "common", chinese_answer: "普通", chinese_romanization: "pǔtōng" },
            { option: "D", answer: "complex", chinese_answer: "复杂", chinese_romanization: "fùzá" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'singular' means exceptionally good or great; remarkable." +
            "<br><br>" +
            "(B) 'multiple' means having or involving several parts, elements, or members." +
            "<br><br>" +
            "(C) 'common' means occurring, found, or done often." +
            "<br><br>" +
            "(D) 'complex' means consisting of many different and connected parts.",
        chinese_explanation: "(A) '独特'一词意味着特别好或伟大；显著。" +
            "<br><br>" +
            "(B) '多重' 意味着有或涉及多个部分、元素或成员。" +
            "<br><br>" +
            "(C) '普通' 意味着经常发生、发现或做的。" +
            "<br><br>" +
            "(D) '复杂' 意味着由许多不同和相互连接的部分组成的。"
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

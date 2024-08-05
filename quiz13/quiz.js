// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Their attempts to fix the broken machine were __________, and they eventually had to buy a new one.",
        chinese_question: "他们修理坏机器的尝试是 __________ 的，最终不得不买一台新机器。",
        answers: [
            { option: "A", answer: "successful", chinese_answer: "成功", chinese_romanization: "chénggōng" },
            { option: "B", answer: "effective", chinese_answer: "有效", chinese_romanization: "yǒuxiào" },
            { option: "C", answer: "futile", chinese_answer: "无效", chinese_romanization: "wúxiào" },
            { option: "D", answer: "productive", chinese_answer: "高效", chinese_romanization: "gāoxiào" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'futile' means incapable of producing any useful result; pointless." +
            "<br><br>" +
            "(A) 'successful' means accomplishing a desired aim or result." +
            "<br><br>" +
            "(B) 'effective' means successful in producing a desired or intended result." +
            "<br><br>" +
            "(D) 'productive' means achieving or producing a significant amount or result.",
        chinese_explanation: "(C) '无效' 意味着不能产生任何有用的结果；无意义的。" +
            "<br><br>" +
            "(A) '成功' 意味着完成预期的目标或结果。" +
            "<br><br>" +
            "(B) '有效' 意味着成功地产生预期的或预定的结果。" +
            "<br><br>" +
            "(D) '高效' 意味着实现或产生显著的数量或结果。"
    },
    {
        id: 2,
    question: "The artist was known for his __________ behavior, often dressing in unusual clothes and speaking in riddles.",
    chinese_question: "这位艺术家以其__________的行为而闻名，经常穿着奇怪的衣服并说些谜语。",
    answers: [
        { option: "A", answer: "conventional", chinese_answer: "传统的", chinese_romanization: "chuántǒng de" },
        { option: "B", answer: "normal", chinese_answer: "正常的", chinese_romanization: "zhèngcháng de" },
        { option: "C", answer: "eccentric", chinese_answer: "古怪的", chinese_romanization: "gǔguài de" },
        { option: "D", answer: "typical", chinese_answer: "典型的", chinese_romanization: "diǎnxíng de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'eccentric' means (of a person or their behavior) unconventional and slightly strange." +
        "<br><br>" +
        "(A) 'conventional' means based on or in accordance with what is generally done or believed." +
        "<br><br>" +
        "(B) 'normal' means conforming to a standard; usual, typical, or expected." +
        "<br><br>" +
        "(D) 'typical' means having the distinctive qualities of a particular type of person or thing.",
    chinese_explanation: "(C) '古怪的' 一词意味着（一个人或他们的行为）不拘一格和稍微奇怪的。" +
        "<br><br>" +
        "(A) '传统的' 意味着基于或符合通常的做法或信念的。" +
        "<br><br>" +
        "(B) '正常的' 意味着符合标准的；通常的、典型的或预期的。" +
        "<br><br>" +
        "(D) '典型的' 意味着具有特定类型的人或事物的典型特征。"
    },
    {
        id: 3,
    question: "After the heavy meal, he felt __________ and unmotivated to do any physical activity.",
    chinese_question: "吃完大餐后，他感到 __________，不想做任何体力活动。",
    answers: [
        { option: "A", answer: "energetic", chinese_answer: "精力充沛的", chinese_romanization: "jīnglì chōngpèi de" },
        { option: "B", answer: "brisk", chinese_answer: "轻快的", chinese_romanization: "qīngkuài de" },
        { option: "C", answer: "sluggish", chinese_answer: "迟缓的", chinese_romanization: "chíhuǎn de" },
        { option: "D", answer: "lively", chinese_answer: "活跃的", chinese_romanization: "huóyuè de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'sluggish' means slow-moving or inactive." +
        "<br><br>" +
        "(A) 'energetic' means showing or involving great activity or vitality." +
        "<br><br>" +
        "(B) 'brisk' means active, fast, and energetic." +
        "<br><br>" +
        "(D) 'lively' means full of life and energy; active and outgoing.",
    chinese_explanation: "(C) '迟缓的' 意味着移动缓慢或不活跃的。" +
        "<br><br>" +
        "(A) '精力充沛的' 意味着表现出或涉及极大的活动或活力的。" +
        "<br><br>" +
        "(B) '轻快的' 意味着活跃、快速和精力充沛的。" +
        "<br><br>" +
        "(D) '活跃的' 意味着充满活力和能量的；积极和外向的。"
    },
    {
        id: 4,
        question: "The owl is a __________ creature, hunting for its prey during the night and resting during the day.",
        chinese_question: "猫头鹰是一种 __________ 的生物，晚上捕猎，白天休息。",
        answers: [
            { option: "A", answer: "diurnal", chinese_answer: "昼行性的", chinese_romanization: "zhòuxíngxìng de" },
            { option: "B", answer: "nocturnal", chinese_answer: "夜行性的", chinese_romanization: "yèxíngxìng de" },
            { option: "C", answer: "daytime", chinese_answer: "白天的", chinese_romanization: "báitiān de" },
            { option: "D", answer: "morning", chinese_answer: "早晨的", chinese_romanization: "zǎochén de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'nocturnal' means active at night." +
            "<br><br>" +
            "(A) 'diurnal' means active during the day." +
            "<br><br>" +
            "(C) 'daytime' means the time between sunrise and sunset." +
            "<br><br>" +
            "(D) 'morning' means the early part of the day.",
        chinese_explanation: "(B) '夜行性的' 意味着在夜间活动的。" +
            "<br><br>" +
            "(A) '昼行性的' 意味着在白天活动的。" +
            "<br><br>" +
            "(C) '白天的' 意味着从日出到日落的时间。" +
            "<br><br>" +
            "(D) '早晨的' 意味着一天的早期部分。"
    },
    {
        id: 5,
        question: "After a long, tiring day, he became __________ and snapped at everyone.",
        chinese_question: "在漫长而疲惫的一天后，他变得__________，对每个人都发脾气。",
        answers: [
            { option: "A", answer: "cheerful", chinese_answer: "愉快的", chinese_romanization: "yúkuài de" },
            { option: "B", answer: "peevish", chinese_answer: "易怒的", chinese_romanization: "yìnù de" },
            { option: "C", answer: "pleasant", chinese_answer: "令人愉快的", chinese_romanization: "lìng rén yúkuài de" },
            { option: "D", answer: "amiable", chinese_answer: "和蔼的", chinese_romanization: "hé'ǎi de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'peevish' means easily irritated, especially by unimportant things." +
            "<br><br>" +
            "(A) 'cheerful' means noticeably happy and optimistic." +
            "<br><br>" +
            "(C) 'pleasant' means giving a sense of happy satisfaction or enjoyment." +
            "<br><br>" +
            "(D) 'amiable' means having or displaying a friendly and pleasant manner.",
        chinese_explanation: "(B) '易怒的'一词意味着容易被激怒的，尤其是因不重要的事情。" +
            "<br><br>" +
            "(A) '愉快的' 意味着明显快乐和乐观的。" +
            "<br><br>" +
            "(C) '令人愉快的' 意味着给予愉快的满足或享受的。" +
            "<br><br>" +
            "(D) '和蔼的' 意味着表现出友好和令人愉快的方式的。"
    },
    {
        id: 6,
        question: "The proposal was __________, with several potential issues that needed to be addressed.",
        chinese_question: "这个提议是__________的，有几个潜在的问题需要解决。",
        answers: [
            { option: "A", answer: "flawless", chinese_answer: "无瑕疵的", chinese_romanization: "wú xiácī de" },
            { option: "B", answer: "perfect", chinese_answer: "完美的", chinese_romanization: "wánměi de" },
            { option: "C", answer: "problematic", chinese_answer: "有问题的", chinese_romanization: "yǒu wèntí de" },
            { option: "D", answer: "untroubled", chinese_answer: "无忧无虑的", chinese_romanization: "wú yōu wúlǜ de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'problematic' means constituting or presenting a problem or difficulty." +
            "<br><br>" +
            "(A) 'flawless' means without any imperfections or defects; perfect." +
            "<br><br>" +
            "(B) 'perfect' means having all the required or desirable elements, qualities, or characteristics; as good as it is possible to be." +
            "<br><br>" +
            "(D) 'untroubled' means not feeling, showing, or affected by anxiety or problems.",
        chinese_explanation: "(C) '有问题的'一词意味着构成或呈现问题或困难的。" +
            "<br><br>" +
            "(A) '无瑕疵的' 意味着没有任何缺陷或缺点的；完美的。" +
            "<br><br>" +
            "(B) '完美的' 意味着具有所有要求或可取的元素、品质或特征；尽可能好的。" +
            "<br><br>" +
            "(D) '无忧无虑的' 意味着没有感到、表现出或受到焦虑或问题的影响。"
    },
    {
        id: 7,
    question: "His __________ remarks often hurt people's feelings, even though he thought he was just being funny.",
    chinese_question: "他 __________ 的言辞经常伤害别人的感情，尽管他认为自己只是在开玩笑。",
    answers: [
        { option: "A", answer: "sincere", chinese_answer: "真诚的", chinese_romanization: "zhēnchéng de" },
        { option: "B", answer: "kind", chinese_answer: "友善的", chinese_romanization: "yǒushàn de" },
        { option: "C", answer: "genuine", chinese_answer: "真实的", chinese_romanization: "zhēnshí de" },
        { option: "D", answer: "sarcastic", chinese_answer: "讽刺的", chinese_romanization: "fèngcì de" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'sarcastic' means marked by or given to using irony in order to mock or convey contempt." +
        "<br><br>" +
        "(A) 'sincere' means free from pretense or deceit; proceeding from genuine feelings." +
        "<br><br>" +
        "(B) 'kind' means having or showing a friendly, generous, and considerate nature." +
        "<br><br>" +
        "(C) 'genuine' means truly what something is said to be; authentic.",
    chinese_explanation: "(D) '讽刺的' 意味着以讽刺的方式进行，或用来讥讽或传达轻蔑的。" +
        "<br><br>" +
        "(A) '真诚的' 意味着没有伪装或欺骗的；出于真诚的感情的。" +
        "<br><br>" +
        "(B) '友善的' 意味着具有或表现出友好、慷慨和体贴的性格。" +
        "<br><br>" +
        "(C) '真实的' 意味着真正的，所说的就是其所是的；真实的。"
    },
    {
        id: 8,
        question: "The scientist conducted a __________ series of tests to ensure the accuracy of the results.",
        chinese_question: "科学家进行了 __________ 的一系列测试，以确保结果的准确性。",
        answers: [
            { option: "A", answer: "lax", chinese_answer: "松懈的", chinese_romanization: "sōngxiè de" },
            { option: "B", answer: "rigorous", chinese_answer: "严格的", chinese_romanization: "yángé de" },
            { option: "C", answer: "casual", chinese_answer: "随意的", chinese_romanization: "suíyì de" },
            { option: "D", answer: "lenient", chinese_answer: "宽松的", chinese_romanization: "kuānsōng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'rigorous' means extremely thorough, exhaustive, or accurate." +
            "<br><br>" +
            "(A) 'lax' means not sufficiently strict, severe, or careful." +
            "<br><br>" +
            "(C) 'casual' means relaxed and unconcerned." +
            "<br><br>" +
            "(D) 'lenient' means permissive, merciful, or tolerant.",
        chinese_explanation: "(B) '严格的' 意味着极其彻底、详尽或准确的。" +
            "<br><br>" +
            "(A) '松懈的' 意味着不够严格、严厉或小心的。" +
            "<br><br>" +
            "(C) '随意的' 意味着放松和不关心的。" +
            "<br><br>" +
            "(D) '宽松的' 意味着宽容、仁慈或容忍的。"
    },
    {
        id: 9,
        question: "In his research, he was __________, always double-checking his sources and verifying facts.",
        chinese_question: "在他的研究中，他是 __________ 的，总是反复核对他的来源并验证事实。",
        answers: [
            { option: "A", answer: "haphazard", chinese_answer: "随意的", chinese_romanization: "suíyì de" },
            { option: "B", answer: "scrupulous", chinese_answer: "细心的", chinese_romanization: "xìxīn de" },
            { option: "C", answer: "sloppy", chinese_answer: "马虎的", chinese_romanization: "mǎhǔ de" },
            { option: "D", answer: "cursory", chinese_answer: "草率的", chinese_romanization: "cǎoshuài de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'scrupulous' means diligent, thorough, and extremely attentive to details." +
            "<br><br>" +
            "(A) 'haphazard' means lacking any obvious principle of organization." +
            "<br><br>" +
            "(C) 'sloppy' means careless and unsystematic; excessively casual." +
            "<br><br>" +
            "(D) 'cursory' means hasty and therefore not thorough or detailed.",
        chinese_explanation: "(B) '细心的' 意味着勤奋、彻底、非常注意细节的。" +
            "<br><br>" +
            "(A) '随意的' 意味着缺乏任何明显的组织原则的。" +
            "<br><br>" +
            "(C) '马虎的' 意味着粗心和不系统的；过于随意的。" +
            "<br><br>" +
            "(D) '草率的' 意味着匆忙的，因此不彻底或不详细的。"
    },
    {
        id: 10,
        question: "Her __________ movements made her seem younger than her years.",
        chinese_question: "她__________的动作使她看起来比实际年龄更年轻。",
        answers: [
            { option: "A", answer: "sluggish", chinese_answer: "缓慢的", chinese_romanization: "huǎnmàn de" },
            { option: "B", answer: "sprightly", chinese_answer: "活泼的", chinese_romanization: "huópō de" },
            { option: "C", answer: "lethargic", chinese_answer: "昏昏欲睡的", chinese_romanization: "hūnhūn yùshuì de" },
            { option: "D", answer: "weary", chinese_answer: "疲倦的", chinese_romanization: "píjuàn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'sprightly' means lively; full of energy." +
            "<br><br>" +
            "(A) 'sluggish' means slow-moving or inactive." +
            "<br><br>" +
            "(C) 'lethargic' means affected by lethargy; sluggish and apathetic." +
            "<br><br>" +
            "(D) 'weary' means feeling or showing tiredness, especially as a result of excessive exertion or lack of sleep.",
        chinese_explanation: "(B) '活泼的' 意味着充满活力的。" +
            "<br><br>" +
            "(A) '缓慢的' 意味着移动缓慢或不活跃的。" +
            "<br><br>" +
            "(C) '昏昏欲睡的' 意味着受嗜睡影响的；迟钝和冷漠的。" +
            "<br><br>" +
            "(D) '疲倦的' 意味着感到或表现出疲劳，尤其是由于过度劳累或缺乏睡眠。"
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

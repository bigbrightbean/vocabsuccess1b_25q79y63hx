// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The sail was __________ against the wind, propelling the boat forward with great speed.",
        chinese_question: "帆在风中被拉得 __________，推动船只高速前进。",
        answers: [
            { option: "A", answer: "flapping", chinese_answer: "拍打的", chinese_romanization: "pāidǎ de" },
            { option: "B", answer: "slack", chinese_answer: "松弛的", chinese_romanization: "sōngchí de" },
            { option: "C", answer: "taut", chinese_answer: "拉紧的", chinese_romanization: "lā jǐn de" },
            { option: "D", answer: "loose", chinese_answer: "松的", chinese_romanization: "sōng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'taut' means stretched or pulled tight; not slack." +
            "<br><br>" +
            "(A) 'flapping' means moving up and down or back and forth." +
            "<br><br>" +
            "(B) 'slack' means not taut or held tightly in position; loose." +
            "<br><br>" +
            "(D) 'loose' means not firmly or tightly fixed in place; detached or able to be detached.",
        chinese_explanation: "(C) '拉紧的' 意味着拉伸或拉紧；不松弛的。" +
            "<br><br>" +
            "(A) '拍打的' 意味着上下或来回移动的。" +
            "<br><br>" +
            "(B) '松弛的' 意味着不拉紧或不牢固固定的；松弛的。" +
            "<br><br>" +
            "(D) '松的' 意味着没有牢固或紧紧固定在原地的；分离或能够分离的。"
    },
    {
        id: 2,
        question: "His __________ decision to go on a road trip surprised everyone.",
        chinese_question: "他 __________ 决定去公路旅行，令所有人感到惊讶。",
        answers: [
            { option: "A", answer: "planned", chinese_answer: "计划好的", chinese_romanization: "jìhuà hǎo de" },
            { option: "B", answer: "spontaneous", chinese_answer: "自发的", chinese_romanization: "zìfā de" },
            { option: "C", answer: "calculated", chinese_answer: "经过计算的", chinese_romanization: "jīngguò jìsuàn de" },
            { option: "D", answer: "deliberate", chinese_answer: "深思熟虑的", chinese_romanization: "shēnsī shúlǜ de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'spontaneous' means performed or occurring as a result of a sudden inner impulse or inclination and without premeditation." +
            "<br><br>" +
            "(A) 'planned' means decided on and arranged in advance." +
            "<br><br>" +
            "(B) 'spontaneous' means performed or occurring as a result of a sudden inner impulse or inclination and without premeditation." +
            "<br><br>" +
            "(C) 'calculated' means done with full awareness of the likely consequences." +
            "<br><br>" +
            "(D) 'deliberate' means done consciously and intentionally.",
        chinese_explanation: "(B) '自发的' 意味着由于突然的内心冲动或倾向而发生或表现出来，没有预先计划。" +
            "<br><br>" +
            "(A) '计划好的' 意味着预先决定和安排的。" +
            "<br><br>" +
            "(B) '自发的' 意味着由于突然的内心冲动或倾向而发生或表现出来，没有预先计划。" +
            "<br><br>" +
            "(C) '经过计算的' 意味着完全意识到可能的后果。" +
            "<br><br>" +
            "(D) '深思熟虑的' 意味着有意识地和故意地做的。"
    },
    {
        id: 3,
        question: "The company's __________ policies on data security ensured that all sensitive information was protected at all times.",
        chinese_question: "公司对数据安全的 __________ 政策确保所有敏感信息始终受到保护。",
        answers: [
            { option: "A", answer: "stringent", chinese_answer: "严格的", chinese_romanization: "yángé de" },
            { option: "B", answer: "lenient", chinese_answer: "宽容的", chinese_romanization: "kuānróng de" },
            { option: "C", answer: "relaxed", chinese_answer: "放松的", chinese_romanization: "fàngsōng de" },
            { option: "D", answer: "indulgent", chinese_answer: "放纵的", chinese_romanization: "fàngzòng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'stringent' means strict, precise, and exacting." +
            "<br><br>" +
            "(B) 'lenient' means permissive, merciful, or tolerant." +
            "<br><br>" +
            "(C) 'relaxed' means less strict or severe than is usual." +
            "<br><br>" +
            "(D) 'indulgent' means having or indicating a tendency to be overly generous to or lenient with someone.",
        chinese_explanation: "(A) '严格的' 意味着严格、精确和要求严格的。" +
            "<br><br>" +
            "(B) '宽容的' 意味着宽松、仁慈或宽容的。" +
            "<br><br>" +
            "(C) '放松的' 意味着比通常情况不那么严格或严厉的。" +
            "<br><br>" +
            "(D) '放纵的' 意味着有或表示对某人过于慷慨或宽容的倾向的。"
    },
    {
        id: 4,
        question: "His __________ nature made it hard for his friends to rely on him, as he often changed his mind at the last minute.",
        chinese_question: "他 __________ 的性格使朋友们难以依赖他，因为他经常在最后一刻改变主意。",
        answers: [
            { option: "A", answer: "dependable", chinese_answer: "可靠的", chinese_romanization: "kěkào de" },
            { option: "B", answer: "steadfast", chinese_answer: "坚定的", chinese_romanization: "jiāndìng de" },
            { option: "C", answer: "fickle", chinese_answer: "变化无常的", chinese_romanization: "biànhuà wúcháng de" },
            { option: "D", answer: "reliable", chinese_answer: "可信的", chinese_romanization: "kěxìn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'fickle' means changing frequently, especially as regards one's loyalties or affections." +
            "<br><br>" +
            "(A) 'dependable' means trustworthy and reliable." +
            "<br><br>" +
            "(B) 'steadfast' means resolutely or dutifully firm and unwavering." +
            "<br><br>" +
            "(D) 'reliable' means consistently good in quality or performance; able to be trusted.",
        chinese_explanation: "(C) '变化无常的' 意味着经常变化，尤其是指忠诚或感情的变化。" +
            "<br><br>" +
            "(A) '可靠的' 意味着值得信赖和可靠的。" +
            "<br><br>" +
            "(B) '坚定的' 意味着坚决或尽职尽责地坚定不移的。" +
            "<br><br>" +
            "(D) '可信的' 意味着质量或性能始终如一的；值得信赖的。"
    },
    {
        id: 5,
        question: "The museum's __________ artifacts provided a glimpse into ancient civilizations and their cultures.",
        chinese_question: "博物馆的 __________ 文物提供了对古代文明及其文化的窥见。",
        answers: [
            { option: "A", answer: "modern", chinese_answer: "现代的", chinese_romanization: "xiàndài de" },
            { option: "B", answer: "futuristic", chinese_answer: "未来的", chinese_romanization: "wèilái de" },
            { option: "C", answer: "historical", chinese_answer: "历史的", chinese_romanization: "lìshǐ de" },
            { option: "D", answer: "contemporary", chinese_answer: "当代的", chinese_romanization: "dāngdài de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'historical' means concerning history or past events." +
            "<br><br>" +
            "(A) 'modern' means relating to the present or recent times as opposed to the remote past." +
            "<br><br>" +
            "(B) 'futuristic' means having or involving very modern technology or design." +
            "<br><br>" +
            "(D) 'contemporary' means living or occurring at the same time.",
        chinese_explanation: "(C) '历史的' 意味着涉及历史或过去事件的。" +
            "<br><br>" +
            "(A) '现代的' 意味着与现在或最近的时间有关的，而不是遥远的过去。" +
            "<br><br>" +
            "(B) '未来的' 意味着拥有或涉及非常现代的技术或设计的。" +
            "<br><br>" +
            "(D) '当代的' 意味着同时存在或发生的。"
    },
    {
        id: 6,
        question: "The fort was __________ to attack due to its weak defenses.",
        chinese_question: "由于防御薄弱，这座堡垒很 __________ 受到攻击。",
        answers: [
            { option: "A", answer: "invulnerable", chinese_answer: "无法伤害的", chinese_romanization: "wúfǎ shānghài de" },
            { option: "B", answer: "secure", chinese_answer: "安全的", chinese_romanization: "ānquán de" },
            { option: "C", answer: "vulnerable", chinese_answer: "易受攻击的", chinese_romanization: "yì shòu gōngjí de" },
            { option: "D", answer: "protected", chinese_answer: "受保护的", chinese_romanization: "shòu bǎohù de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'vulnerable' means susceptible to physical or emotional attack or harm." +
            "<br><br>" +
            "(A) 'invulnerable' means impossible to harm or damage." +
            "<br><br>" +
            "(B) 'secure' means fixed or fastened so as not to give way, become loose, or be lost." +
            "<br><br>" +
            "(D) 'protected' means kept safe from harm or injury.",
        chinese_explanation: "(C) '易受攻击的' 意味着容易受到身体或情感上的攻击或伤害。" +
            "<br><br>" +
            "(A) '无法伤害的' 意味着不可能受到伤害或损害的。" +
            "<br><br>" +
            "(B) '安全的' 意味着固定或系牢，不会松动或丢失的。" +
            "<br><br>" +
            "(D) '受保护的' 意味着免受伤害或损伤的。"
    },
    {
        id: 7,
        question: "Her attention to her studies became __________ after the long holiday.",
        chinese_question: "长假后，她对学习的注意力变得__________。",
        answers: [
            { option: "A", answer: "intense", chinese_answer: "强烈", chinese_romanization: "qiángliè" },
            { option: "B", answer: "slack", chinese_answer: "松懈", chinese_romanization: "sōngxiè" },
            { option: "C", answer: "focused", chinese_answer: "专注", chinese_romanization: "zhuānzhù" },
            { option: "D", answer: "meticulous", chinese_answer: "一丝不苟", chinese_romanization: "yīsībùgǒu" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'slack' means not showing enough care or effort." +
            "<br><br>" +
            "(A) 'intense' means of extreme force, degree, or strength." +
            "<br><br>" +
            "(C) 'focused' means directed at something specific." +
            "<br><br>" +
            "(D) 'meticulous' means showing great attention to detail; very careful and precise.",
        chinese_explanation: "(B) '松懈' 意味着没有表现出足够的关心或努力。" +
            "<br><br>" +
            "(A) '强烈' 意味着极大的力量、程度或强度。" +
            "<br><br>" +
            "(C) '专注' 意味着针对某些具体事物。" +
            "<br><br>" +
            "(D) '一丝不苟' 意味着非常注重细节；非常小心和精确。"
    },
    {
        id: 8,
        question: "The abandoned building was __________, with broken windows and graffiti-covered walls.",
        chinese_question: "这座废弃的建筑物 __________，窗户破碎，墙上满是涂鸦。",
        answers: [
            { option: "A", answer: "beautiful", chinese_answer: "美丽的", chinese_romanization: "měilì de" },
            { option: "B", answer: "picturesque", chinese_answer: "如画的", chinese_romanization: "rú huà de" },
            { option: "C", answer: "unsightly", chinese_answer: "难看的", chinese_romanization: "nánkàn de" },
            { option: "D", answer: "charming", chinese_answer: "迷人的", chinese_romanization: "mírén de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'unsightly' means unpleasant to look at; ugly." +
            "<br><br>" +
            "(A) 'beautiful' means pleasing the senses or mind aesthetically." +
            "<br><br>" +
            "(B) 'picturesque' means visually attractive, especially in a quaint or charming way." +
            "<br><br>" +
            "(D) 'charming' means very pleasant or attractive.",
        chinese_explanation: "(C) '难看的' 意味着不悦目；丑陋的。" +
            "<br><br>" +
            "(A) '美丽的' 意味着在美学上令人愉悦的感官或心灵。" +
            "<br><br>" +
            "(B) '如画的' 意味着视觉上吸引人的，尤其是以古雅或迷人的方式。" +
            "<br><br>" +
            "(D) '迷人的' 意味着非常愉快或有吸引力的。"
    },
    {
        id: 9,
        question: "The __________ smell from the garbage made everyone in the room feel sick.",
        chinese_question: "垃圾散发出的 __________ 气味让房间里的每个人都感到恶心。",
        answers: [
            { option: "A", answer: "pleasant", chinese_answer: "令人愉快的", chinese_romanization: "lìng rén yúkuài de" },
            { option: "B", answer: "delightful", chinese_answer: "令人高兴的", chinese_romanization: "lìng rén gāoxìng de" },
            { option: "C", answer: "nauseating", chinese_answer: "令人作呕的", chinese_romanization: "lìng rén zuò'ǒu de" },
            { option: "D", answer: "fragrant", chinese_answer: "芳香的", chinese_romanization: "fāngxiāng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'nauseating' means causing or liable to cause a feeling of nausea or disgust." +
            "<br><br>" +
            "(A) 'pleasant' means giving a sense of happy satisfaction or enjoyment." +
            "<br><br>" +
            "(B) 'delightful' means causing delight; charming." +
            "<br><br>" +
            "(D) 'fragrant' means having a pleasant or sweet smell.",
        chinese_explanation: "(C) '令人作呕的' 意味着引起或可能引起恶心或厌恶感的。" +
            "<br><br>" +
            "(A) '令人愉快的' 意味着带来快乐满意或享受的感觉。" +
            "<br><br>" +
            "(B) '令人高兴的' 意味着引起愉快的；迷人的。" +
            "<br><br>" +
            "(D) '芳香的' 意味着有令人愉快或甜美的气味。"
    },
    {
        id: 10,
        question: "The car accident was __________, resulting in several casualties.",
        chinese_question: "这起车祸是__________的，造成了几人伤亡。",
        answers: [
            { option: "A", answer: "harmless", chinese_answer: "无害的", chinese_romanization: "wúhài de" },
            { option: "B", answer: "trivial", chinese_answer: "微不足道的", chinese_romanization: "wēibùzúdào de" },
            { option: "C", answer: "fatal", chinese_answer: "致命的", chinese_romanization: "zhìmìng de" },
            { option: "D", answer: "minor", chinese_answer: "轻微的", chinese_romanization: "qīngwēi de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'fatal' means causing death." +
            "<br><br>" +
            "(A) 'harmless' means not able or likely to cause harm." +
            "<br><br>" +
            "(B) 'trivial' means of little value or importance." +
            "<br><br>" +
            "(D) 'minor' means lesser in importance, seriousness, or significance.",
        chinese_explanation: "(C) '致命的'一词意味着导致死亡的。" +
            "<br><br>" +
            "(A) '无害的' 意味着不能或不太可能造成伤害的。" +
            "<br><br>" +
            "(B) '微不足道的' 意味着价值或重要性很小的。" +
            "<br><br>" +
            "(D) '轻微的' 意味着在重要性、严重性或意义上较小的。"
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

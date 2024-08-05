// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "In the business world, he was known for his __________ tactics, always putting profit above all else.",
        chinese_question: "在商业世界中，他以 __________ 的手段而闻名，总是将利润置于一切之上。",
        answers: [
            { option: "A", answer: "fair", chinese_answer: "公平的", chinese_romanization: "gōngpíng de" },
            { option: "B", answer: "ethical", chinese_answer: "伦理的", chinese_romanization: "lúnlǐ de" },
            { option: "C", answer: "ruthless", chinese_answer: "无情的", chinese_romanization: "wúqíng de" },
            { option: "D", answer: "considerate", chinese_answer: "体贴的", chinese_romanization: "tǐtiē de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'ruthless' means having or showing no pity or compassion for others, often used figuratively to describe someone who is relentless and merciless in their actions." +
            "<br><br>" +
            "(A) 'fair' means in accordance with the rules or standards; legitimate." +
            "<br><br>" +
            "(B) 'ethical' means relating to moral principles or the branch of knowledge dealing with these." +
            "<br><br>" +
            "(D) 'considerate' means careful not to cause inconvenience or hurt to others.",
        chinese_explanation: "(C) '无情的' 意味着对他人没有怜悯或同情心的，通常用作比喻来描述在行动中毫不留情和无情的人。" +
            "<br><br>" +
            "(A) '公平的' 意味着符合规则或标准的；合法的。" +
            "<br><br>" +
            "(B) '伦理的' 意味着与道德原则或处理这些原则的知识分支有关的。" +
            "<br><br>" +
            "(D) '体贴的' 意味着小心不引起不便或伤害他人的。"
    },
    {
        id: 2,
        question: "Her __________ smile and charming personality made her instantly likable to everyone she met.",
        chinese_question: "她的 __________ 微笑和迷人的个性使她在遇见的每个人中立刻受欢迎。",
        answers: [
            { option: "A", answer: "grim", chinese_answer: "严肃的", chinese_romanization: "yánsù de" },
            { option: "B", answer: "stern", chinese_answer: "严厉的", chinese_romanization: "yánlì de" },
            { option: "C", answer: "winsome", chinese_answer: "迷人的", chinese_romanization: "mírén de" },
            { option: "D", answer: "harsh", chinese_answer: "苛刻的", chinese_romanization: "kēkè de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'winsome' means attractive or appealing in appearance or character." +
            "<br><br>" +
            "(A) 'grim' means forbidding or uninviting." +
            "<br><br>" +
            "(B) 'stern' means serious and unrelenting, especially in the assertion of authority and exercise of discipline." +
            "<br><br>" +
            "(D) 'harsh' means unpleasantly rough or jarring to the senses.",
        chinese_explanation: "(C) '迷人的' 意味着在外貌或性格上有吸引力的或迷人的。" +
            "<br><br>" +
            "(A) '严肃的' 意味着令人望而生畏或不友好的。" +
            "<br><br>" +
            "(B) '严厉的' 意味着特别是在主张权威和行使纪律方面严肃和坚定的。" +
            "<br><br>" +
            "(D) '苛刻的' 意味着令人不愉快的粗糙或刺耳的。"
    },
    {
        id: 3,
        question: "The complicated plot twists in the novel left readers __________, struggling to keep track of the characters and events.",
        chinese_question: "小说中复杂的情节转折让读者感到 __________，难以跟上人物和事件。",
        answers: [
            { option: "A", answer: "attentive", chinese_answer: "专心的", chinese_romanization: "zhuānxīn de" },
            { option: "B", answer: "engaged", chinese_answer: "忙碌的", chinese_romanization: "mánglù de" },
            { option: "C", answer: "befuddled", chinese_answer: "困惑的", chinese_romanization: "kùnhuò de" },
            { option: "D", answer: "interested", chinese_answer: "感兴趣的", chinese_romanization: "gǎn xìngqù de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'befuddled' means unable to think clearly; confused." +
            "<br><br>" +
            "(A) 'attentive' means paying close attention to something." +
            "<br><br>" +
            "(B) 'engaged' means busy; occupied." +
            "<br><br>" +
            "(D) 'interested' means showing curiosity or concern about something or someone.",
        chinese_explanation: "(C) '困惑的' 意味着无法清晰思考；感到困惑的。" +
            "<br><br>" +
            "(A) '专心的' 意味着密切注意某事。" +
            "<br><br>" +
            "(B) '忙碌的' 意味着忙碌的；被占据的。" +
            "<br><br>" +
            "(D) '感兴趣的' 意味着对某事或某人表现出好奇或关注。"
    },
    {
        id: 4,
        question: "The __________ beauty of the sunset left everyone in awe, knowing it would soon fade.",
        chinese_question: "日落的 __________ 美丽让所有人惊叹，因为他们知道它很快就会消失。",
        answers: [
            { option: "A", answer: "permanent", chinese_answer: "永久的", chinese_romanization: "yǒngjiǔ de" },
            { option: "B", answer: "lasting", chinese_answer: "持久的", chinese_romanization: "chíjiǔ de" },
            { option: "C", answer: "transient", chinese_answer: "短暂的", chinese_romanization: "duǎnzàn de" },
            { option: "D", answer: "enduring", chinese_answer: "持续的", chinese_romanization: "chíxù de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'transient' means lasting only for a short time." +
            "<br><br>" +
            "(A) 'permanent' means lasting or intended to last or remain unchanged indefinitely." +
            "<br><br>" +
            "(B) 'lasting' means enduring or able to endure over a long period of time." +
            "<br><br>" +
            "(D) 'enduring' means continuing or long-lasting.",
        chinese_explanation: "(C) '短暂的' 意味着只持续很短的时间。" +
            "<br><br>" +
            "(A) '永久的' 意味着持续或打算无限期持续或保持不变的。" +
            "<br><br>" +
            "(B) '持久的' 意味着能够忍受或能够在长时间内持续的。" +
            "<br><br>" +
            "(D) '持续的' 意味着继续或持久的。"
    },
    {
        id: 5,
        question: "Her __________ approach to problem-solving often led to innovative solutions.",
        chinese_question: "她__________的解决问题方法常常导致创新的解决方案。",
        answers: [
            { option: "A", answer: "conventional", chinese_answer: "常规的", chinese_romanization: "chángguī de" },
            { option: "B", answer: "unconventional", chinese_answer: "非传统的", chinese_romanization: "fēi chuántǒng de" },
            { option: "C", answer: "traditional", chinese_answer: "传统的", chinese_romanization: "chuántǒng de" },
            { option: "D", answer: "routine", chinese_answer: "常规的", chinese_romanization: "chángguī de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'unconventional' means not based on or conforming to what is generally done or believed." +
            "<br><br>" +
            "(A) 'conventional' means based on or in accordance with what is generally done or believed." +
            "<br><br>" +
            "(C) 'traditional' means existing in or as part of a tradition; long-established." +
            "<br><br>" +
            "(D) 'routine' means a sequence of actions regularly followed; a fixed program.",
        chinese_explanation: "(B) '非传统的'一词意味着不基于或不符合普遍做法或信仰的。" +
            "<br><br>" +
            "(A) '常规的' 意味着基于或符合普遍做法或信仰的。" +
            "<br><br>" +
            "(C) '传统的' 意味着存在于或作为传统的一部分；长期存在的。" +
            "<br><br>" +
            "(D) '常规的' 意味着定期遵循的一系列动作；一个固定的程序。"
    },
    {
        id: 6,
        question: "He looked absolutely __________ in that oversized costume, but it made everyone laugh.",
        chinese_question: "他穿着那件过大的戏服看起来绝对 __________，但这让所有人都笑了。",
        answers: [
            { option: "A", answer: "dignified", chinese_answer: "庄重的", chinese_romanization: "zhuāngzhòng de" },
            { option: "B", answer: "elegant", chinese_answer: "优雅的", chinese_romanization: "yōuyǎ de" },
            { option: "C", answer: "serious", chinese_answer: "严肃的", chinese_romanization: "yánsù de" },
            { option: "D", answer: "ridiculous", chinese_answer: "荒谬的", chinese_romanization: "huāngmiù de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'ridiculous' means deserving or inviting mockery or derision." +
            "<br><br>" +
            "(A) 'dignified' means having or showing a composed or serious manner." +
            "<br><br>" +
            "(B) 'elegant' means graceful and stylish." +
            "<br><br>" +
            "(C) 'serious' means solemn or thoughtful.",
        chinese_explanation: "(D) '荒谬的' 意味着值得或引发嘲笑或奚落的。" +
            "<br><br>" +
            "(A) '庄重的' 意味着表现出镇定或严肃的态度。" +
            "<br><br>" +
            "(B) '优雅的' 意味着优美和时尚的。" +
            "<br><br>" +
            "(C) '严肃的' 意味着庄重或深思的。"
    },
    {
        id: 7,
        question: "The __________ artist often had mood swings that made it difficult to predict his behavior from one day to the next.",
        chinese_question: "这位 __________ 的艺术家经常情绪波动，使人难以预测他每天的行为。",
        answers: [
            { option: "A", answer: "consistent", chinese_answer: "稳定的", chinese_romanization: "wěndìng de" },
            { option: "B", answer: "temperamental", chinese_answer: "喜怒无常的", chinese_romanization: "xǐnù wúcháng de" },
            { option: "C", answer: "reliable", chinese_answer: "可靠的", chinese_romanization: "kěkào de" },
            { option: "D", answer: "stable", chinese_answer: "稳定的", chinese_romanization: "wěndìng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'temperamental' means liable to unreasonable changes of mood." +
            "<br><br>" +
            "(A) 'consistent' means acting or done in the same way over time, especially so as to be fair or accurate." +
            "<br><br>" +
            "(C) 'reliable' means consistently good in quality or performance; able to be trusted." +
            "<br><br>" +
            "(D) 'stable' means not likely to change or fail; firmly established.",
        chinese_explanation: "(B) '喜怒无常的' 意味着容易出现不合理的情绪变化。" +
            "<br><br>" +
            "(A) '稳定的' 意味着行为或做事方式在一段时间内保持不变，尤其是公平或准确的。" +
            "<br><br>" +
            "(C) '可靠的' 意味着质量或性能始终如一的；值得信赖的。" +
            "<br><br>" +
            "(D) '稳定的' 意味着不太可能改变或失败的；牢固确立的。"
    },
    {
        id: 8,
        question: "The __________ weather conditions forced the cancellation of the outdoor event.",
        chinese_question: "恶劣的天气条件迫使户外活动取消。",
        answers: [
            { option: "A", answer: "severe", chinese_answer: "严重的", chinese_romanization: "yánzhòng de" },
            { option: "B", answer: "pleasant", chinese_answer: "愉快的", chinese_romanization: "yúkuài de" },
            { option: "C", answer: "moderate", chinese_answer: "中等的", chinese_romanization: "zhōngděng de" },
            { option: "D", answer: "mild", chinese_answer: "温和的", chinese_romanization: "wēnhé de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'severe' means very great; intense." +
            "<br><br>" +
            "(B) 'pleasant' means giving a sense of happy satisfaction or enjoyment." +
            "<br><br>" +
            "(C) 'moderate' means average in amount, intensity, quality, or degree." +
            "<br><br>" +
            "(D) 'mild' means not severe, serious, or harsh.",
        chinese_explanation: "(A) '严重的' 意味着非常大的；强烈的。" +
            "<br><br>" +
            "(B) '愉快的' 意味着给人一种愉快满足或享受的感觉。" +
            "<br><br>" +
            "(C) '中等的' 意味着数量、强度、质量或程度适中。" +
            "<br><br>" +
            "(D) '温和的' 意味着不严重、严厉或苛刻。"
    },
    {
        id: 9,
        question: "The wires became __________ after being stored in the box for too long.",
        chinese_question: "电线在盒子里存放太久后变得 __________。",
        answers: [
            { option: "A", answer: "straightened", chinese_answer: "拉直", chinese_romanization: "lāzhí" },
            { option: "B", answer: "convoluted", chinese_answer: "纠缠", chinese_romanization: "jiūchán" },
            { option: "C", answer: "aligned", chinese_answer: "排列", chinese_romanization: "páiliè" },
            { option: "D", answer: "separated", chinese_answer: "分开", chinese_romanization: "fēnkāi" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'convoluted' means twisted or coiled." +
            "<br><br>" +
            "(A) 'straightened' means made or become straight." +
            "<br><br>" +
            "(C) 'aligned' means placed or arranged in a straight line." +
            "<br><br>" +
            "(D) 'separated' means moved or caused to move apart.",
        chinese_explanation: "(B) '纠缠' 意味着扭曲或缠绕在一起。" +
            "<br><br>" +
            "(A) '拉直' 意味着使变直或变成直线。" +
            "<br><br>" +
            "(C) '排列' 意味着排成一条直线。" +
            "<br><br>" +
            "(D) '分开' 意味着移动或导致移动分开。"
    },
    {
        id: 10,
        question: "His __________ reaction to her troubles made her feel supported and understood.",
        chinese_question: "他对她困境的 __________ 反应让她感到被支持和理解。",
        answers: [
            { option: "A", answer: "apathetic", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
            { option: "B", answer: "empathetic", chinese_answer: "有同理心的", chinese_romanization: "yǒu tónglǐxīn de" },
            { option: "C", answer: "indifferent", chinese_answer: "无动于衷的", chinese_romanization: "wúdòngyúzhōng de" },
            { option: "D", answer: "critical", chinese_answer: "批评的", chinese_romanization: "pīpíng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'empathetic' means showing an ability to understand and share the feelings of others." +
            "<br><br>" +
            "(A) 'apathetic' means showing or feeling no interest, enthusiasm, or concern." +
            "<br><br>" +
            "(C) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(D) 'critical' means expressing adverse or disapproving comments or judgments.",
        chinese_explanation: "(B) '有同理心的' 意味着表现出理解和分享他人感受的能力。" +
            "<br><br>" +
            "(A) '冷漠的' 意味着没有兴趣、热情或关心。" +
            "<br><br>" +
            "(C) '无动于衷的' 意味着没有特别的兴趣或同情；不关心。" +
            "<br><br>" +
            "(D) '批评的' 意味着表达不赞成的或不满的评论或判断。"
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

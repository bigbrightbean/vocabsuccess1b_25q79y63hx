// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The __________ building stood out as an eyesore in the otherwise beautiful neighborhood.",
        chinese_question: "那座__________的建筑在本来美丽的社区中显得很碍眼。",
        answers: [
            { option: "A", answer: "beautiful", chinese_answer: "美丽的", chinese_romanization: "měilì de" },
            { option: "B", answer: "unsightly", chinese_answer: "难看的", chinese_romanization: "nánkàn de" },
            { option: "C", answer: "attractive", chinese_answer: "吸引人的", chinese_romanization: "xīyǐn rén de" },
            { option: "D", answer: "charming", chinese_answer: "迷人的", chinese_romanization: "mírén de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'unsightly' means unpleasant to look at; ugly." +
            "<br><br>" +
            "(A) 'beautiful' means pleasing the senses or mind aesthetically." +
            "<br><br>" +
            "(C) 'attractive' means pleasing or appealing to the senses." +
            "<br><br>" +
            "(D) 'charming' means very pleasant or attractive.",
        chinese_explanation: "(B) '难看的'一词意味着看起来不舒服的；丑陋的。" +
            "<br><br>" +
            "(A) '美丽的' 意味着在美学上令人愉悦的感官或心灵。" +
            "<br><br>" +
            "(C) '吸引人的' 意味着使感官愉悦或吸引人的。" +
            "<br><br>" +
            "(D) '迷人的' 意味着非常愉快或有吸引力的。"
    },
    {
        id: 2,
        question: "The doctor warned about the __________ tumor, noting its aggressive growth and potential to spread rapidly.",
        chinese_question: "医生警告说这个 __________ 肿瘤，指出其生长迅速且具有快速扩散的潜力。",
        answers: [
            { option: "A", answer: "benign", chinese_answer: "良性的", chinese_romanization: "liángxìng de" },
            { option: "B", answer: "small", chinese_answer: "小的", chinese_romanization: "xiǎo de" },
            { option: "C", answer: "malign", chinese_answer: "恶性的", chinese_romanization: "èxìng de" },
            { option: "D", answer: "heavy", chinese_answer: "重的", chinese_romanization: "zhòng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'malign' means very dangerous or harmful in effect, especially referring to tumors." +
            "<br><br>" +
            "(A) 'benign' means not harmful in effect." +
            "<br><br>" +
            "(B) 'small' means of a size that is less than normal or usual." +
            "<br><br>" +
            "(D) 'heavy' means of great weight; difficult to lift or move.",
        chinese_explanation: "(C) '恶性的' 意味着非常危险或有害的，尤其是指肿瘤。" +
            "<br><br>" +
            "(A) '良性的' 意味着在效果上无害的。" +
            "<br><br>" +
            "(B) '小的' 意味着比正常或通常的尺寸小。" +
            "<br><br>" +
            "(D) '重的' 意味着很重的；难以举起或移动的。"
    },
    {
        id: 3,
        question: "With a __________ motion, she caught the falling glass before it hit the ground.",
        chinese_question: "她用 __________ 的动作接住了掉落的玻璃杯，避免了它落地。",
        answers: [
            { option: "A", answer: "clumsy", chinese_answer: "笨拙的", chinese_romanization: "bènzhuō de" },
            { option: "B", answer: "swift", chinese_answer: "快速的", chinese_romanization: "kuàisù de" },
            { option: "C", answer: "hesitant", chinese_answer: "犹豫的", chinese_romanization: "yóuyù de" },
            { option: "D", answer: "awkward", chinese_answer: "尴尬的", chinese_romanization: "gāngà de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'swift' means moving very fast." +
            "<br><br>" +
            "(A) 'clumsy' means awkward in movement or in handling things." +
            "<br><br>" +
            "(C) 'hesitant' means tentative, unsure, or slow in acting or speaking." +
            "<br><br>" +
            "(D) 'awkward' means causing difficulty; hard to do or deal with.",
        chinese_explanation: "(B) '快速的' 意味着移动非常快。" +
            "<br><br>" +
            "(A) '笨拙的' 意味着在移动或处理事情时笨拙的。" +
            "<br><br>" +
            "(C) '犹豫的' 意味着行动或说话时犹豫不决或不确定的。" +
            "<br><br>" +
            "(D) '尴尬的' 意味着造成困难的；难以处理或应对的。"
    },
    {
        id: 4,
        question: "The __________ appearance of the room, with clothes strewn everywhere and dirty dishes piled up, was shocking.",
        chinese_question: "房间的 __________ 外观令人震惊，衣服到处都是，脏盘子堆积如山。",
        answers: [
            { option: "A", answer: "neat", chinese_answer: "整洁的", chinese_romanization: "zhěngjié de" },
            { option: "B", answer: "organized", chinese_answer: "有条理的", chinese_romanization: "yǒu tiáolǐ de" },
            { option: "C", answer: "slovenly", chinese_answer: "邋遢的", chinese_romanization: "lātà de" },
            { option: "D", answer: "tidy", chinese_answer: "干净的", chinese_romanization: "gānjìng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'slovenly' means (especially of a person or their appearance) messy and dirty." +
            "<br><br>" +
            "(A) 'neat' means arranged in an orderly, tidy way." +
            "<br><br>" +
            "(B) 'organized' means arranged or structured in a systematic way." +
            "<br><br>" +
            "(D) 'tidy' means arranged neatly and in order.",
        chinese_explanation: "(C) '邋遢的' 意味着（尤其指人或他们的外表）凌乱和肮脏的。" +
            "<br><br>" +
            "(A) '整洁的' 意味着有条不紊地排列的。" +
            "<br><br>" +
            "(B) '有条理的' 意味着系统地安排或结构的。" +
            "<br><br>" +
            "(D) '干净的' 意味着整洁和有秩序地排列的。"
    },
    {
        id: 5,
        question: "Her __________ response to the tragic news comforted those who were grieving.",
        chinese_question: "她对悲惨消息的 __________ 反应安慰了那些悲痛的人。",
        answers: [
            { option: "A", answer: "indifferent", chinese_answer: "无动于衷的", chinese_romanization: "wúdòngyúzhōng de" },
            { option: "B", answer: "critical", chinese_answer: "批评的", chinese_romanization: "pīpíng de" },
            { option: "C", answer: "apathetic", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
            { option: "D", answer: "empathetic", chinese_answer: "有同理心的", chinese_romanization: "yǒu tónglǐxīn de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'empathetic' means showing an ability to understand and share the feelings of others." +
            "<br><br>" +
            "(A) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(B) 'critical' means expressing adverse or disapproving comments or judgments." +
            "<br><br>" +
            "(C) 'apathetic' means showing or feeling no interest, enthusiasm, or concern.",
        chinese_explanation: "(D) '有同理心的' 意味着表现出理解和分享他人感受的能力。" +
            "<br><br>" +
            "(A) '无动于衷的' 意味着没有特别的兴趣或同情；不关心。" +
            "<br><br>" +
            "(B) '批评的' 意味着表达不赞成的或不满的评论或判断。" +
            "<br><br>" +
            "(C) '冷漠的' 意味着没有兴趣、热情或关心。"
    },
    {
        id: 6,
        question: "The project required an __________ amount of time and resources to complete, and will likely take several years to finish.",
        chinese_question: "这个项目需要 __________ 的时间和资源来完成，并且可能需要几年的时间才能完成。",
        answers: [
            { option: "A", answer: "enormous", chinese_answer: "巨大", chinese_romanization: "jùdà" },
            { option: "B", answer: "insignificant", chinese_answer: "无关紧要", chinese_romanization: "wúguān jǐn yào" },
            { option: "C", answer: "trivial", chinese_answer: "琐碎", chinese_romanization: "suǒsuì" },
            { option: "D", answer: "minimal", chinese_answer: "最小", chinese_romanization: "zuìxiǎo" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'enormous' means very large in size, quantity, or extent." +
            "<br><br>" +
            "(B) 'insignificant' means too small or unimportant to be worth consideration." +
            "<br><br>" +
            "(C) 'trivial' means of little value or importance." +
            "<br><br>" +
            "(D) 'minimal' means of a minimum amount, quantity, or degree.",
        chinese_explanation: "(A) '巨大' 意味着尺寸、数量或程度非常大。" +
            "<br><br>" +
            "(B) '无关紧要' 意味着太小或不重要而不值得考虑。" +
            "<br><br>" +
            "(C) '琐碎' 意味着价值或重要性很小。" +
            "<br><br>" +
            "(D) '最小' 意味着最小的数量、数量或程度。"
    },
    {
        id: 7,
        question: "The __________ opponent had never lost a match, making the team anxious about the game.",
        chinese_question: "这位 __________ 的对手从未输过比赛，这让球队对比赛感到紧张。",
        answers: [
            { option: "A", answer: "weak", chinese_answer: "弱", chinese_romanization: "ruò" },
            { option: "B", answer: "harmless", chinese_answer: "无害", chinese_romanization: "wúhài" },
            { option: "C", answer: "formidable", chinese_answer: "强大", chinese_romanization: "qiángdà" },
            { option: "D", answer: "easy", chinese_answer: "容易", chinese_romanization: "róngyì" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'formidable' means inspiring fear or respect through being impressively large, powerful, intense, or capable." +
            "<br><br>" +
            "(A) 'weak' means lacking the power to perform physically demanding tasks; lacking physical strength and energy." +
            "<br><br>" +
            "(B) 'harmless' means not able or likely to cause harm." +
            "<br><br>" +
            "(D) 'easy' means achieved without great effort; presenting few difficulties.",
        chinese_explanation: "(C) '强大' 意味着通过令人印象深刻的大、强大、强烈或有能力而激发恐惧或尊重。" +
            "<br><br>" +
            "(A) '弱' 意味着缺乏执行体力要求高的任务的力量；缺乏体力和能量。" +
            "<br><br>" +
            "(B) '无害' 意味着不能或不太可能造成伤害。" +
            "<br><br>" +
            "(D) '容易' 意味着没有付出很大努力就能实现；难度不大。"
    },
    {
        id: 8,
        question: "Her __________ use of the limited resources ensured that the project was completed on time and within budget.",
        chinese_question: "她对有限资源的 __________ 使用确保了项目按时并在预算内完成。",
        answers: [
            { option: "A", answer: "wasteful", chinese_answer: "浪费的", chinese_romanization: "làngfèi de" },
            { option: "B", answer: "reckless", chinese_answer: "鲁莽的", chinese_romanization: "lǔmǎng de" },
            { option: "C", answer: "careless", chinese_answer: "粗心的", chinese_romanization: "cūxīn de" },
            { option: "D", answer: "judicious", chinese_answer: "明智的", chinese_romanization: "míngzhì de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'judicious' means having, showing, or done with good judgment or sense." +
            "<br><br>" +
            "(A) 'wasteful' means using or expending something of value carelessly, extravagantly, or to no purpose." +
            "<br><br>" +
            "(B) 'reckless' means without thinking or caring about the consequences of an action." +
            "<br><br>" +
            "(C) 'careless' means not giving sufficient attention or thought to avoiding harm or errors.",
        chinese_explanation: "(D) '明智的' 意味着有、表现出或用良好的判断或感觉完成的。" +
            "<br><br>" +
            "(A) '浪费的' 意味着不加注意地、奢侈地或无目的地使用或消耗有价值的东西。" +
            "<br><br>" +
            "(B) '鲁莽的' 意味着不考虑或不在乎行为的后果。" +
            "<br><br>" +
            "(C) '粗心的' 意味着没有给予足够的关注或考虑以避免伤害或错误。"
    },
    {
        id: 9,
        question: "The __________ growth in the popularity of the new fitness app indicates a significant shift in how people approach exercise.",
        chinese_question: "新健身应用的 __________ 流行增长表明人们对待锻炼方式的重大转变。",
        answers: [
            { option: "A", answer: "steady", chinese_answer: "稳定的", chinese_romanization: "wěndìng de" },
            { option: "B", answer: "minor", chinese_answer: "次要的", chinese_romanization: "cìyào de" },
            { option: "C", answer: "minimal", chinese_answer: "最小的", chinese_romanization: "zuìxiǎo de" },
            { option: "D", answer: "exponential", chinese_answer: "指数的", chinese_romanization: "zhǐshù de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'exponential' means (of an increase) becoming more and more rapid." +
            "<br><br>" +
            "(A) 'steady' means firmly fixed, supported, or balanced; not shaking or moving." +
            "<br><br>" +
            "(B) 'minor' means lesser in importance, seriousness, or significance." +
            "<br><br>" +
            "(C) 'minimal' means of a minimum amount, quantity, or degree.",
        chinese_explanation: "(D) '指数的' 意味着（增长）变得越来越迅速的。" +
            "<br><br>" +
            "(A) '稳定的' 意味着牢固地固定、支持或平衡的；不摇晃或移动的。" +
            "<br><br>" +
            "(B) '次要的' 意味着在重要性、严重性或意义上较小的。" +
            "<br><br>" +
            "(C) '最小的' 意味着最低数量、数量或程度的。"
    },
    {
        id: 10,
    question: "The family meal on Sundays was a __________ tradition that everyone cherished and looked forward to.",
    chinese_question: "周日的家庭聚餐是一个 __________ 的传统，大家都珍惜并期待。",
    answers: [
        { option: "A", answer: "casual", chinese_answer: "随意的", chinese_romanization: "suíyì de" },
        { option: "B", answer: "common", chinese_answer: "普遍的", chinese_romanization: "pǔbiàn de" },
        { option: "C", answer: "trivial", chinese_answer: "琐碎的", chinese_romanization: "suǒsuì de" },
        { option: "D", answer: "sacred", chinese_answer: "神圣的", chinese_romanization: "shénshèng de" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'sacred' means regarded with great respect and reverence." +
        "<br><br>" +
        "(A) 'casual' means relaxed and unconcerned." +
        "<br><br>" +
        "(B) 'common' means occurring, found, or done often; prevalent." +
        "<br><br>" +
        "(C) 'trivial' means of little value or importance.",
    chinese_explanation: "(D) '神圣的' 意味着被视为极为尊重和崇敬的。" +
        "<br><br>" +
        "(A) '随意的' 意味着放松和不关心的。" +
        "<br><br>" +
        "(B) '普遍的' 意味着经常发生、发现或完成的；普遍的。" +
        "<br><br>" +
        "(C) '琐碎的' 意味着价值或重要性很小的。"
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

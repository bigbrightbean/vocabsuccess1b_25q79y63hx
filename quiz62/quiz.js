// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The eerie silence in the abandoned house filled her with __________.",
        chinese_question: "废弃房屋内的诡异寂静让她感到 __________ 。",
        answers: [
            { option: "A", answer: "disquiet", chinese_answer: "不安", chinese_romanization: "bùān" },
            { option: "B", answer: "comfort", chinese_answer: "舒适", chinese_romanization: "shūshì" },
            { option: "C", answer: "delight", chinese_answer: "高兴", chinese_romanization: "gāoxìng" },
            { option: "D", answer: "relaxation", chinese_answer: "放松", chinese_romanization: "fàngsōng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'disquiet' means a feeling of anxiety or worry." +
            "<br><br>" +
            "(B) 'comfort' means a state of physical ease and freedom from pain or constraint." +
            "<br><br>" +
            "(C) 'delight' means great pleasure." +
            "<br><br>" +
            "(D) 'relaxation' means the state of being free from tension and anxiety.",
        chinese_explanation: "(A) '不安' 意味着焦虑或担忧的感觉。" +
            "<br><br>" +
            "(B) '舒适' 意味着身体的舒适和无痛或无约束状态。" +
            "<br><br>" +
            "(C) '高兴' 意味着极大的愉快。" +
            "<br><br>" +
            "(D) '放松' 意味着没有紧张和焦虑的状态。"
    },
    {
        id: 2,
        question: "The movie was filled with __________, evoking deep emotions from the audience as they watched the tragic love story unfold.",
        chinese_question: "这部电影充满了 __________，观众在观看这段悲惨的爱情故事时深受触动。",
        answers: [
            { option: "A", answer: "humor", chinese_answer: "幽默", chinese_romanization: "yōumò" },
            { option: "B", answer: "pathos", chinese_answer: "悲情", chinese_romanization: "bēiqíng" },
            { option: "C", answer: "excitement", chinese_answer: "兴奋", chinese_romanization: "xīngfèn" },
            { option: "D", answer: "apathy", chinese_answer: "冷漠", chinese_romanization: "lěngmò" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'pathos' means a quality that evokes pity or sadness." +
            "<br><br>" +
            "(A) 'humor' means the quality of being amusing or comic." +
            "<br><br>" +
            "(C) 'excitement' means a feeling of great enthusiasm and eagerness." +
            "<br><br>" +
            "(D) 'apathy' means lack of interest, enthusiasm, or concern.",
        chinese_explanation: "(B) '悲情'一词意味着引发怜悯或悲伤的品质。" +
            "<br><br>" +
            "(A) '幽默' 意味着令人发笑或滑稽的品质。" +
            "<br><br>" +
            "(C) '兴奋' 意味着极大的热情和渴望。" +
            "<br><br>" +
            "(D) '冷漠' 意味着缺乏兴趣、热情或关心。"
    },
    {
        id: 3,
        question: "The company's financial __________ included cutting unnecessary expenses and investing in new technologies.",
        chinese_question: "公司的财务 __________ 包括削减不必要的开支和投资新技术。",
        answers: [
            { option: "A", answer: "reforms", chinese_answer: "改革", chinese_romanization: "gǎigé" },
            { option: "B", answer: "failures", chinese_answer: "失败", chinese_romanization: "shībài" },
            { option: "C", answer: "stagnation", chinese_answer: "停滞", chinese_romanization: "tíngzhì" },
            { option: "D", answer: "distractions", chinese_answer: "分心", chinese_romanization: "fēnxīn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'reforms' means changes made to improve a system, organization, or law." +
            "<br><br>" +
            "(B) 'failures' means lack of success." +
            "<br><br>" +
            "(C) 'stagnation' means lack of activity, growth, or development." +
            "<br><br>" +
            "(D) 'distractions' means things that prevent someone from giving full attention to something else.",
        chinese_explanation: "(A) '改革' 意味着对系统、组织或法律进行改进的变化。" +
            "<br><br>" +
            "(B) '失败' 意味着缺乏成功。" +
            "<br><br>" +
            "(C) '停滞' 意味着缺乏活动、增长或发展。" +
            "<br><br>" +
            "(D) '分心' 意味着阻止某人全神贯注于其他事情的东西。"
    },
    {
        id: 4,
        question: "The __________ of social media platforms has changed how people interact and share experiences globally.",
        chinese_question: "社交媒体平台的 __________ 改变了人们在全球范围内互动和分享经验的方式。",
        answers: [
            { option: "A", answer: "demise", chinese_answer: "终结", chinese_romanization: "zhōngjié" },
            { option: "B", answer: "end", chinese_answer: "结束", chinese_romanization: "jiéshù" },
            { option: "C", answer: "withdrawal", chinese_answer: "撤回", chinese_romanization: "chèhuí" },
            { option: "D", answer: "advent", chinese_answer: "到来", chinese_romanization: "dàolái" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'advent' means the arrival of a notable person, thing, or event." +
            "<br><br>" +
            "(A) 'demise' means the end or failure of an enterprise or institution." +
            "<br><br>" +
            "(B) 'end' means the final part of something, especially a period of time, an activity, or a story." +
            "<br><br>" +
            "(C) 'withdrawal' means the action of withdrawing something.",
        chinese_explanation: "(D) '到来' 意味着一个显著的人、事或事件的到来。" +
            "<br><br>" +
            "(A) '终结' 意味着企业或机构的终结或失败。" +
            "<br><br>" +
            "(B) '结束' 意味着某物的最后部分，尤其是时间、活动或故事的最后部分。" +
            "<br><br>" +
            "(C) '撤回' 意味着撤回某事的行为。"
    },
    {
        id: 5,
        question: "Her __________ for gardening was so strong that she spent every weekend working in her garden.",
        chinese_question: "她对园艺的 __________ 如此强烈，每个周末都在花园里工作。",
        answers: [
            { option: "A", answer: "hesitation", chinese_answer: "犹豫", chinese_romanization: "yóuyù" },
            { option: "B", answer: "apathy", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "C", answer: "doubt", chinese_answer: "怀疑", chinese_romanization: "huáiyí" },
            { option: "D", answer: "zeal", chinese_answer: "热情", chinese_romanization: "rèqíng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'zeal' means great energy or enthusiasm in pursuit of a cause or an objective." +
            "<br><br>" +
            "(A) 'hesitation' means the action of pausing or hesitating before saying or doing something." +
            "<br><br>" +
            "(B) 'apathy' means lack of interest, enthusiasm, or concern." +
            "<br><br>" +
            "(C) 'doubt' means a feeling of uncertainty or lack of conviction.",
        chinese_explanation: "(D) '热情'一词意味着在追求事业或目标时充满巨大能量或热情。" +
            "<br><br>" +
            "(A) '犹豫' 意味着在说或做某事前暂停或犹豫的动作。" +
            "<br><br>" +
            "(B) '冷漠' 意味着缺乏兴趣、热情或关心。" +
            "<br><br>" +
            "(C) '怀疑' 意味着不确定的感觉或缺乏信念。"
    },
    {
        id: 6,
        question: "The success of the training program was evident in the high __________ of information by the participants.",
        chinese_question: "培训项目的成功在于参与者对信息的高 __________。",
        answers: [
            { option: "A", answer: "retention", chinese_answer: "保留", chinese_romanization: "bǎoliú" },
            { option: "B", answer: "loss", chinese_answer: "丧失", chinese_romanization: "sàngshī" },
            { option: "C", answer: "confusion", chinese_answer: "混乱", chinese_romanization: "hùnluàn" },
            { option: "D", answer: "dismissal", chinese_answer: "解雇", chinese_romanization: "jiěgù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'retention' figuratively means the continued possession, use, or control of something." +
            "<br><br>" +
            "(B) 'loss' means the fact or process of losing something or someone." +
            "<br><br>" +
            "(C) 'confusion' means lack of understanding; uncertainty." +
            "<br><br>" +
            "(D) 'dismissal' means the act of ordering or allowing someone to leave.",
        chinese_explanation: "(A) '保留' 在此语境下意指继续持有、使用或控制某物。" +
            "<br><br>" +
            "(B) '丧失' 意味着失去某物或某人的事实或过程。" +
            "<br><br>" +
            "(C) '混乱' 意味着缺乏理解；不确定性。" +
            "<br><br>" +
            "(D) '解雇' 意味着命令或允许某人离开的行为。"
    },
    {
        id: 7,
        question: "She has a __________ for collecting rare books, often spending weekends browsing antique shops.",
        chinese_question: "她有收集稀有书籍的 __________，经常在周末浏览古董店。",
        answers: [
            { option: "A", answer: "dislike", chinese_answer: "反感", chinese_romanization: "fǎngǎn" },
            { option: "B", answer: "penchant", chinese_answer: "嗜好", chinese_romanization: "shìhào" },
            { option: "C", answer: "indifference", chinese_answer: "漠不关心", chinese_romanization: "mòbùguānxīn" },
            { option: "D", answer: "aversion", chinese_answer: "厌恶", chinese_romanization: "yànwù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'penchant' means a strong or habitual liking for something or tendency to do something." +
            "<br><br>" +
            "(A) 'dislike' means a feeling of not liking or being opposed to someone or something." +
            "<br><br>" +
            "(C) 'indifference' means lack of interest, concern, or sympathy." +
            "<br><br>" +
            "(D) 'aversion' means a strong dislike or disinclination.",
        chinese_explanation: "(B) '嗜好'一词意味着对某事的强烈或习惯性喜好或倾向于做某事。" +
            "<br><br>" +
            "(A) '反感' 意味着不喜欢或反对某人或某事的感觉。" +
            "<br><br>" +
            "(C) '漠不关心' 意味着缺乏兴趣、关心或同情。" +
            "<br><br>" +
            "(D) '厌恶' 意味着强烈的不喜欢或不情愿。"
    },
    {
        id: 8,
        question: "Calling the tiny dog 'Giant' is quite a __________.",
        chinese_question: "把这只小狗叫做“巨人”真是一个 __________。",
        answers: [
            { option: "A", answer: "misnomer", chinese_answer: "用词不当", chinese_romanization: "yòngcí bùdàng" },
            { option: "B", answer: "compliment", chinese_answer: "赞美", chinese_romanization: "zànměi" },
            { option: "C", answer: "mischief", chinese_answer: "恶作剧", chinese_romanization: "èzuòjù" },
            { option: "D", answer: "understatement", chinese_answer: "轻描淡写", chinese_romanization: "qīngmiáo-dànxiě" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'misnomer' means a wrong or inaccurate name or designation." +
            "<br><br>" +
            "(B) 'compliment' means a polite expression of praise or admiration." +
            "<br><br>" +
            "(C) 'mischief' means playful misbehavior or troublemaking." +
            "<br><br>" +
            "(D) 'understatement' means the presentation of something as being smaller or less important than it actually is.",
        chinese_explanation: "(A) '用词不当' 意味着错误或不准确的名称或指定。" +
            "<br><br>" +
            "(B) '赞美' 意味着一种礼貌的赞扬或钦佩的表达。" +
            "<br><br>" +
            "(C) '恶作剧' 意味着顽皮的行为或捣乱。" +
            "<br><br>" +
            "(D) '轻描淡写' 意味着将某事物描述得比实际小或不重要。"
    },
    {
        id: 9,
        question: "The manager decided to follow the __________ set by his predecessor in handling employee disputes.",
        chinese_question: "经理决定遵循前任在处理员工纠纷时设定的 __________。",
        answers: [
            { option: "A", answer: "precedent", chinese_answer: "先例", chinese_romanization: "xiānlì" },
            { option: "B", answer: "guideline", chinese_answer: "指导方针", chinese_romanization: "zhǐdǎo fāngzhēn" },
            { option: "C", answer: "suggestion", chinese_answer: "建议", chinese_romanization: "jiànyì" },
            { option: "D", answer: "error", chinese_answer: "错误", chinese_romanization: "cuòwù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'precedent' means an earlier event or action that is regarded as an example or guide to be considered in subsequent similar circumstances." +
            "<br><br>" +
            "(B) 'guideline' means a general rule, principle, or piece of advice." +
            "<br><br>" +
            "(C) 'suggestion' means an idea or plan put forward for consideration." +
            "<br><br>" +
            "(D) 'error' means a mistake.",
        chinese_explanation: "(A) '先例' 意味着被认为在随后的类似情况下作为示例或指南的早期事件或行动。" +
            "<br><br>" +
            "(B) '指导方针' 意味着一般规则、原则或建议。" +
            "<br><br>" +
            "(C) '建议' 意味着提出供考虑的想法或计划。" +
            "<br><br>" +
            "(D) '错误' 意味着错误。"
    },
    {
        id: 10,
        question: "She looked at the broken vase with __________, knowing it was a priceless heirloom.",
        chinese_question: "她看着破碎的花瓶，感到 __________，因为那是无价的传家宝。",
        answers: [
            { option: "A", answer: "dismay", chinese_answer: "沮丧", chinese_romanization: "jǔsàng" },
            { option: "B", answer: "joy", chinese_answer: "喜悦", chinese_romanization: "xǐyuè" },
            { option: "C", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "D", answer: "satisfaction", chinese_answer: "满足", chinese_romanization: "mǎnzú" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'dismay' means distress caused by something unexpected." +
            "<br><br>" +
            "(B) 'joy' means a feeling of great pleasure and happiness." +
            "<br><br>" +
            "(C) 'indifference' means lack of interest, concern, or sympathy." +
            "<br><br>" +
            "(D) 'satisfaction' means fulfillment of one's wishes, expectations, or needs, or the pleasure derived from this.",
        chinese_explanation: "(A) '沮丧' 意味着因意外的事情引起的忧虑。" +
            "<br><br>" +
            "(B) '喜悦' 意味着极大的快乐和幸福。" +
            "<br><br>" +
            "(C) '冷漠' 意味着缺乏兴趣、关心或同情。" +
            "<br><br>" +
            "(D) '满足' 意味着满足某人的愿望、期望或需要，或由此产生的快乐。"
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

// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The novel explores the __________ between good and evil, showing that every character has both light and dark within them.",
        chinese_question: "这部小说探讨了善与恶之间的 __________，展示了每个角色都有光明和黑暗的两面。",
        answers: [
            { option: "A", answer: "unity", chinese_answer: "统一", chinese_romanization: "tǒngyī" },
            { option: "B", answer: "dichotomy", chinese_answer: "二分法", chinese_romanization: "èrfēnfǎ" },
            { option: "C", answer: "harmony", chinese_answer: "和谐", chinese_romanization: "héxié" },
            { option: "D", answer: "similarity", chinese_answer: "相似", chinese_romanization: "xiāngsì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'dichotomy' means a division or contrast between two things that are represented as being opposed or entirely different." +
            "<br><br>" +
            "(A) 'unity' means the state of being united or joined as a whole." +
            "<br><br>" +
            "(C) 'harmony' means agreement or concord." +
            "<br><br>" +
            "(D) 'similarity' means the state or fact of being similar.",
        chinese_explanation: "(B) '二分法'一词意味着两个事物之间的分裂或对比，这两个事物被描述为对立或完全不同。" +
            "<br><br>" +
            "(A) '统一' 意味着团结或联合为一个整体的状态。" +
            "<br><br>" +
            "(C) '和谐' 意味着协议或和睦。" +
            "<br><br>" +
            "(D) '相似' 意味着相似的状态或事实。"
    },
    {
        id: 2,
        question: "The unexpected praise from the CEO gave the team a much-needed __________ in morale.",
        chinese_question: "首席执行官的意外表扬给团队士气带来了急需的 __________。",
        answers: [
            { option: "A", answer: "boost", chinese_answer: "提升", chinese_romanization: "tíshēng" },
            { option: "B", answer: "decline", chinese_answer: "下降", chinese_romanization: "xiàjiàng" },
            { option: "C", answer: "setback", chinese_answer: "挫折", chinese_romanization: "cuòzhé" },
            { option: "D", answer: "hindrance", chinese_answer: "阻碍", chinese_romanization: "zǔ'ài" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'boost' means an increase or improvement." +
            "<br><br>" +
            "(B) 'decline' means a gradual and continuous loss of strength, numbers, quality, or value." +
            "<br><br>" +
            "(C) 'setback' means a reversal or check in progress." +
            "<br><br>" +
            "(D) 'hindrance' means a thing that provides resistance, delay, or obstruction to something or someone.",
        chinese_explanation: "(A) '提升' 意味着增加或改善。" +
            "<br><br>" +
            "(B) '下降' 意味着力量、数量、质量或价值的逐渐和持续的损失。" +
            "<br><br>" +
            "(C) '挫折' 意味着进展中的逆转或检查。" +
            "<br><br>" +
            "(D) '阻碍' 意味着对某事或某人的抵抗、延迟或障碍。"
    },
    {
        id: 3,
        question: "He felt __________ about going to the party because he wanted to see his friends but also needed to study for an exam.",
        chinese_question: "他对去参加聚会感到 __________，因为他想见朋友，但也需要为考试学习。",
        answers: [
            { option: "A", answer: "ambivalence", chinese_answer: "矛盾心理", chinese_romanization: "máodùn xīnlǐ" },
            { option: "B", answer: "excitement", chinese_answer: "兴奋", chinese_romanization: "xīngfèn" },
            { option: "C", answer: "determination", chinese_answer: "决心", chinese_romanization: "juéxīn" },
            { option: "D", answer: "certainty", chinese_answer: "确定性", chinese_romanization: "quèdìng xìng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'ambivalence' means having mixed feelings or contradictory ideas about something or someone." +
            "<br><br>" +
            "(B) 'excitement' means a feeling of great enthusiasm and eagerness." +
            "<br><br>" +
            "(C) 'determination' means firmness of purpose; resoluteness." +
            "<br><br>" +
            "(D) 'certainty' means firm conviction that something is the case.",
        chinese_explanation: "(A) '矛盾心理' 意味着对某事或某人有混合的感觉或矛盾的想法。" +
            "<br><br>" +
            "(B) '兴奋' 意味着极大的热情和渴望的感觉。" +
            "<br><br>" +
            "(C) '决心' 意味着坚定的目标；果断。" +
            "<br><br>" +
            "(D) '确定性' 意味着坚信某事是事实。"
    },
    {
        id: 4,
        question: "He resisted the __________ to spend his savings on a new car, knowing he needed the money for more important things.",
        chinese_question: "他克制住了用积蓄买新车的 __________，因为他知道他需要这些钱来做更重要的事情。",
        answers: [
            { option: "A", answer: "impulse", chinese_answer: "冲动", chinese_romanization: "chōngdòng" },
            { option: "B", answer: "urge", chinese_answer: "冲动", chinese_romanization: "chōngdòng" },
            { option: "C", answer: "compulsion", chinese_answer: "强迫", chinese_romanization: "qiǎngpò" },
            { option: "D", answer: "desire", chinese_answer: "渴望", chinese_romanization: "kěwàng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'urge' means a strong desire or impulse." +
            "<br><br>" +
            "(A) 'impulse' means a sudden strong and unreflective urge or desire to act." +
            "<br><br>" +
            "(C) 'compulsion' means the action or state of forcing or being forced to do something; constraint." +
            "<br><br>" +
            "(D) 'desire' means a strong feeling of wanting to have something or wishing for something to happen.",
        chinese_explanation: "(B) '冲动'一词意味着强烈的愿望或冲动。" +
            "<br><br>" +
            "(A) '冲动' 意味着突然的强烈和不加思索的冲动或行动愿望。" +
            "<br><br>" +
            "(C) '强迫' 意味着被迫做某事的行为或状态；约束。" +
            "<br><br>" +
            "(D) '渴望' 意味着强烈希望拥有某物或希望某事发生的感觉。"
    },
    {
        id: 5,
        question: "Despite the __________ from the audience, the speaker continued with his controversial talk, undeterred by the negativity.",
        chinese_question: "尽管观众的 __________，演讲者继续他的争议性演讲，不为负面情绪所动。",
        answers: [
            { option: "A", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
            { option: "B", answer: "derision", chinese_answer: "嘲笑", chinese_romanization: "cháoxiào" },
            { option: "C", answer: "praise", chinese_answer: "赞美", chinese_romanization: "zànměi" },
            { option: "D", answer: "silence", chinese_answer: "沉默", chinese_romanization: "chénmò" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'derision' means contemptuous ridicule or mockery." +
            "<br><br>" +
            "(A) 'support' means giving assistance or approval to." +
            "<br><br>" +
            "(C) 'praise' means the expression of approval or admiration for someone or something." +
            "<br><br>" +
            "(D) 'silence' means complete absence of sound.",
        chinese_explanation: "(B) '嘲笑'一词意味着轻蔑的嘲讽或戏弄。" +
            "<br><br>" +
            "(A) '支持' 意味着给予援助或同意。" +
            "<br><br>" +
            "(C) '赞美' 意味着对某人或某事表示赞许或钦佩。" +
            "<br><br>" +
            "(D) '沉默' 意味着完全没有声音。"
    },
    {
        id: 6,
        question: "The company's rapid growth sparked __________ among its competitors, who struggled to keep up.",
        chinese_question: "公司的快速增长引发了竞争对手的 __________，他们努力跟上。",
        answers: [
            { option: "A", answer: "envy", chinese_answer: "嫉妒", chinese_romanization: "jídù" },
            { option: "B", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
            { option: "C", answer: "collaboration", chinese_answer: "合作", chinese_romanization: "hézuò" },
            { option: "D", answer: "sympathy", chinese_answer: "同情", chinese_romanization: "tóngqíng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'envy' figuratively means a feeling of discontented or resentful longing aroused by someone else's success." +
            "<br><br>" +
            "(B) 'support' means to bear all or part of the weight of; hold up." +
            "<br><br>" +
            "(C) 'collaboration' means the action of working with someone to produce or create something." +
            "<br><br>" +
            "(D) 'sympathy' means feelings of pity and sorrow for someone else's misfortune.",
        chinese_explanation: "(A) '嫉妒' 在此语境下意指因他人的成功而引起的不满或愤恨的渴望。" +
            "<br><br>" +
            "(B) '支持' 意味着承受全部或部分重量；支撑。" +
            "<br><br>" +
            "(C) '合作' 意味着与他人合作生产或创造某物的行为。" +
            "<br><br>" +
            "(D) '同情' 意味着对他人不幸的怜悯和悲伤。"
    },
    {
        id: 7,
        question: "Her __________ in studying for the exams paid off when she scored the highest marks in the class.",
        chinese_question: "她在为考试学习中的 __________ 得到了回报，她取得了全班最高的分数。",
        answers: [
            { option: "A", answer: "laziness", chinese_answer: "懒惰", chinese_romanization: "lǎnduò" },
            { option: "B", answer: "diligence", chinese_answer: "勤奋", chinese_romanization: "qínfèn" },
            { option: "C", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "D", answer: "neglect", chinese_answer: "忽视", chinese_romanization: "hūshì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'diligence' means careful and persistent work or effort." +
            "<br><br>" +
            "(A) 'laziness' means the quality of being unwilling to work or use energy; idleness." +
            "<br><br>" +
            "(C) 'indifference' means lack of interest, concern, or sympathy." +
            "<br><br>" +
            "(D) 'neglect' means failure to take proper care over something.",
        chinese_explanation: "(B) '勤奋'一词意味着细致和坚持不懈的工作或努力。" +
            "<br><br>" +
            "(A) '懒惰' 意味着不愿意工作或使用精力的品质；懒散。" +
            "<br><br>" +
            "(C) '冷漠' 意味着缺乏兴趣、关心或同情。" +
            "<br><br>" +
            "(D) '忽视' 意味着未能妥善照顾某事。"
    },
    {
        id: 8,
        question: "His __________ that hard work leads to success motivated him to put in extra hours at the office.",
        chinese_question: "他坚定地相信努力工作会带来成功，这激励他在办公室加班。",
        answers: [
            { option: "A", answer: "apathy", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "B", answer: "conviction", chinese_answer: "信念", chinese_romanization: "xìnniàn" },
            { option: "C", answer: "doubt", chinese_answer: "怀疑", chinese_romanization: "huáiyí" },
            { option: "D", answer: "hesitation", chinese_answer: "犹豫", chinese_romanization: "yóuyù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'conviction' means a firmly held belief or opinion." +
            "<br><br>" +
            "(A) 'apathy' means lack of interest, enthusiasm, or concern." +
            "<br><br>" +
            "(C) 'doubt' means a feeling of uncertainty or lack of conviction." +
            "<br><br>" +
            "(D) 'hesitation' means the action of pausing or hesitating before saying or doing something.",
        chinese_explanation: "(B) '信念'一词意味着坚定的信仰或意见。" +
            "<br><br>" +
            "(A) '冷漠' 意味着缺乏兴趣、热情或关心。" +
            "<br><br>" +
            "(C) '怀疑' 意味着不确定的感觉或缺乏信念。" +
            "<br><br>" +
            "(D) '犹豫' 意味着在说或做某事前暂停或犹豫的动作。"
    },
    {
        id: 9,
        question: "The rebels were offered __________ in exchange for laying down their arms.",
        chinese_question: "叛乱者被提供 __________ 以换取他们放下武器。",
        answers: [
            { option: "A", answer: "exile", chinese_answer: "流放", chinese_romanization: "liúfàng" },
            { option: "B", answer: "condemnation", chinese_answer: "谴责", chinese_romanization: "qiǎnzé" },
            { option: "C", answer: "amnesty", chinese_answer: "大赦", chinese_romanization: "dàshè" },
            { option: "D", answer: "sentence", chinese_answer: "判刑", chinese_romanization: "pànxíng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'amnesty' means an official pardon for people who have been convicted of political offenses." +
            "<br><br>" +
            "(A) 'exile' means the state of being barred from one's native country, typically for political or punitive reasons." +
            "<br><br>" +
            "(B) 'condemnation' means the expression of very strong disapproval; censure." +
            "<br><br>" +
            "(D) 'sentence' means the punishment assigned to a defendant found guilty by a court, or fixed by law for a particular offense.",
        chinese_explanation: "(C) “大赦” 意味着对被判有政治罪的人进行官方赦免。" +
            "<br><br>" +
            "(A) '流放' 意味着因政治或惩罚原因被禁止回到自己的祖国的状态。" +
            "<br><br>" +
            "(B) '谴责' 意味着非常强烈的反对或谴责。" +
            "<br><br>" +
            "(D) '判刑' 意味着法院对被判有罪的被告或法律规定的特定罪行所分配的惩罚。"
    },
    {
        id: 10,
    question: "The economic downturn caused widespread __________ for many families struggling to make ends meet.",
    chinese_question: "经济衰退导致许多挣扎于维持生计的家庭面临广泛的 __________ 。",
    answers: [
        { option: "A", answer: "hardship", chinese_answer: "困苦", chinese_romanization: "kùnkǔ" },
        { option: "B", answer: "wealth", chinese_answer: "财富", chinese_romanization: "cáifù" },
        { option: "C", answer: "freedom", chinese_answer: "自由", chinese_romanization: "zìyóu" },
        { option: "D", answer: "success", chinese_answer: "成功", chinese_romanization: "chénggōng" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'hardship' means severe suffering or privation." +
        "<br><br>" +
        "(B) 'wealth' means an abundance of valuable possessions or money." +
        "<br><br>" +
        "(C) 'freedom' means the power or right to act, speak, or think as one wants without hindrance or restraint." +
        "<br><br>" +
        "(D) 'success' means the accomplishment of an aim or purpose.",
    chinese_explanation: "(A) '困苦' 意味着严重的痛苦或贫困。" +
        "<br><br>" +
        "(B) '财富' 意味着大量的有价值的财产或金钱。" +
        "<br><br>" +
        "(C) '自由' 意味着在没有阻碍或限制的情况下自由行动、说话或思考的权利。" +
        "<br><br>" +
        "(D) '成功' 意味着目标或目的的实现。"
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

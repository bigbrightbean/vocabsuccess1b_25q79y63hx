// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The company's decision to allow remote work during the pandemic set a new __________ for the industry.",
        chinese_question: "公司在疫情期间允许远程工作的决定为行业设立了一个新的 __________。",
        answers: [
            { option: "A", answer: "precedent", chinese_answer: "先例", chinese_romanization: "xiānlì" },
            { option: "B", answer: "anomaly", chinese_answer: "异常", chinese_romanization: "yìcháng" },
            { option: "C", answer: "deviation", chinese_answer: "偏差", chinese_romanization: "piānchā" },
            { option: "D", answer: "outlier", chinese_answer: "异类", chinese_romanization: "yìlèi" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'precedent' means an earlier event or action that is regarded as an example or guide to be considered in subsequent similar circumstances." +
            "<br><br>" +
            "(B) 'anomaly' means something that deviates from what is standard, normal, or expected." +
            "<br><br>" +
            "(C) 'deviation' means the action of departing from an established course or accepted standard." +
            "<br><br>" +
            "(D) 'outlier' means a person or thing situated away or detached from the main body or system.",
        chinese_explanation: "(A) '先例'一词意味着被认为在随后的类似情况下考虑的示例或指南的早期事件或行动。" +
            "<br><br>" +
            "(B) '异常' 意味着与标准、正常或预期情况不同的事物。" +
            "<br><br>" +
            "(C) '偏差' 意味着偏离既定路线或接受标准的行为。" +
            "<br><br>" +
            "(D) '异类' 意味着位于主体或系统之外或分离的人或事物。"
    },
    {
        id: 2,
        question: "He felt a sudden __________ to call his old friend and reminisce about the good times they had shared.",
        chinese_question: "他突然有一种 __________，想打电话给老朋友，回忆他们一起度过的美好时光。",
        answers: [
            { option: "A", answer: "reluctance", chinese_answer: "勉强", chinese_romanization: "miǎnqiǎng" },
            { option: "B", answer: "urge", chinese_answer: "冲动", chinese_romanization: "chōngdòng" },
            { option: "C", answer: "aversion", chinese_answer: "厌恶", chinese_romanization: "yànwù" },
            { option: "D", answer: "hesitation", chinese_answer: "犹豫", chinese_romanization: "yóuyù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'urge' means a strong desire or impulse." +
            "<br><br>" +
            "(A) 'reluctance' means unwillingness or disinclination to do something." +
            "<br><br>" +
            "(C) 'aversion' means a strong dislike or disinclination." +
            "<br><br>" +
            "(D) 'hesitation' means the action of pausing or hesitating before saying or doing something.",
        chinese_explanation: "(B) '冲动'一词意味着强烈的愿望或冲动。" +
            "<br><br>" +
            "(A) '勉强' 意味着不愿意或不情愿做某事。" +
            "<br><br>" +
            "(C) '厌恶' 意味着强烈的厌恶或不情愿。" +
            "<br><br>" +
            "(D) '犹豫' 意味着在说或做某事前暂停或犹豫的动作。"
    },
    {
        id: 3,
        question: "Her __________ for exaggerating stories often made people question the truth of her tales.",
        chinese_question: "她夸大故事的 __________ 经常让人们质疑她故事的真实性。",
        answers: [
            { option: "A", answer: "propensity", chinese_answer: "倾向", chinese_romanization: "qīngxiàng" },
            { option: "B", answer: "dislike", chinese_answer: "不喜欢", chinese_romanization: "bù xǐhuān" },
            { option: "C", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "D", answer: "hesitance", chinese_answer: "犹豫", chinese_romanization: "yóuyù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'propensity' figuratively means an inclination or natural tendency to behave in a particular way." +
            "<br><br>" +
            "(B) 'dislike' means a feeling of distaste or hostility." +
            "<br><br>" +
            "(C) 'indifference' means lack of interest, concern, or sympathy." +
            "<br><br>" +
            "(D) 'hesitance' means the quality or state of being hesitant.",
        chinese_explanation: "(A) '倾向' 在此语境下意指行为上的倾向或自然倾向。" +
            "<br><br>" +
            "(B) '不喜欢' 意味着厌恶或敌意的感觉。" +
            "<br><br>" +
            "(C) '冷漠' 意味着缺乏兴趣、关心或同情。" +
            "<br><br>" +
            "(D) '犹豫' 意味着犹豫的质量或状态。"
    },
    {
        id: 4,
        question: "The stranger's __________ made her feel uneasy as she walked by.",
        chinese_question: "陌生人的 __________ 让她走过时感到不安。",
        answers: [
            { option: "A", answer: "leer", chinese_answer: "奸笑", chinese_romanization: "jiānxiào" },
            { option: "B", answer: "smile", chinese_answer: "微笑", chinese_romanization: "wēixiào" },
            { option: "C", answer: "glance", chinese_answer: "一瞥", chinese_romanization: "yīpiē" },
            { option: "D", answer: "laugh", chinese_answer: "笑", chinese_romanization: "xiào" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'leer' means to look or gaze in an unpleasant, malicious, or lascivious way." +
            "<br><br>" +
            "(B) 'smile' means a pleased, kind, or amused expression." +
            "<br><br>" +
            "(C) 'glance' means to take a brief or hurried look." +
            "<br><br>" +
            "(D) 'laugh' means to make sounds and movements of the face and body that express amusement.",
        chinese_explanation: "(A) '奸笑' 意味着以不愉快、恶意或淫秽的方式看或注视。" +
            "<br><br>" +
            "(B) '微笑' 意味着愉快、友好或感到好笑的表情。" +
            "<br><br>" +
            "(C) '一瞥' 意味着快速或匆忙地看一眼。" +
            "<br><br>" +
            "(D) '笑' 意味着发出声音和面部和身体的动作，表示愉快。"
    },
    {
        id: 5,
    question: "Learning a new language is a gradual __________ that requires patience and practice.",
    chinese_question: "学习一门新语言是一个需要耐心和练习的渐进 __________。",
    answers: [
        { option: "A", answer: "outcome", chinese_answer: "结果", chinese_romanization: "jiéguǒ" },
        { option: "B", answer: "process", chinese_answer: "过程", chinese_romanization: "guòchéng" },
        { option: "C", answer: "error", chinese_answer: "错误", chinese_romanization: "cuòwù" },
        { option: "D", answer: "reaction", chinese_answer: "反应", chinese_romanization: "fǎnyìng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'process' means a series of actions or steps taken in order to achieve a particular end." +
        "<br><br>" +
        "(A) 'outcome' means the way a thing turns out; a consequence." +
        "<br><br>" +
        "(C) 'error' means a mistake." +
        "<br><br>" +
        "(D) 'reaction' means an action performed or a feeling experienced in response to a situation or event.",
    chinese_explanation: "(B) '过程' 意味着为了实现特定目标而采取的一系列行动或步骤。" +
        "<br><br>" +
        "(A) '结果' 意味着事情的结果；后果。" +
        "<br><br>" +
        "(C) '错误' 意味着错误。" +
        "<br><br>" +
        "(D) '反应' 意味着对情况或事件的反应或感受。"
    },
    {
        id: 6,
    question: "Despite several __________, the team couldn't solve the complex puzzle.",
    chinese_question: "尽管多次 __________，团队还是没能解决这个复杂的难题。",
    answers: [
        { option: "A", answer: "successes", chinese_answer: "成功", chinese_romanization: "chénggōng" },
        { option: "B", answer: "victories", chinese_answer: "胜利", chinese_romanization: "shènglì" },
        { option: "C", answer: "attempts", chinese_answer: "尝试", chinese_romanization: "chángshì" },
        { option: "D", answer: "achievements", chinese_answer: "成就", chinese_romanization: "chéngjiù" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'attempts' means efforts to achieve or complete a difficult task or action." +
        "<br><br>" +
        "(A) 'successes' means accomplishments of aims or purposes." +
        "<br><br>" +
        "(B) 'victories' means acts of defeating an enemy or opponent in a battle, game, or other competition." +
        "<br><br>" +
        "(D) 'achievements' means things done successfully, typically by effort, courage, or skill.",
    chinese_explanation: "(C) '尝试' 意味着努力完成一项困难的任务或行动。" +
        "<br><br>" +
        "(A) '成功' 意味着实现目标或目的。" +
        "<br><br>" +
        "(B) '胜利' 意味着在战斗、比赛或其他竞争中击败敌人或对手的行为。" +
        "<br><br>" +
        "(D) '成就' 意味着通过努力、勇气或技巧成功完成的事情。"
    },
    {
        id: 7,
        question: "The farmer planted a variety of fruit trees in his __________, ensuring a bountiful harvest each season.",
        chinese_question: "农民在他的 __________ 里种植了各种果树，确保每个季节都有丰富的收成。",
        answers: [
            { option: "A", answer: "orchard", chinese_answer: "果园", chinese_romanization: "guǒyuán" },
            { option: "B", answer: "garden", chinese_answer: "花园", chinese_romanization: "huāyuán" },
            { option: "C", answer: "meadow", chinese_answer: "草地", chinese_romanization: "cǎodì" },
            { option: "D", answer: "forest", chinese_answer: "森林", chinese_romanization: "sēnlín" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'orchard' means a piece of land planted with fruit trees." +
            "<br><br>" +
            "(B) 'garden' means a piece of ground, often near a house, used for growing flowers, fruit, or vegetables." +
            "<br><br>" +
            "(C) 'meadow' means a field of grass, especially one used for hay." +
            "<br><br>" +
            "(D) 'forest' means a large area covered chiefly with trees and undergrowth.",
        chinese_explanation: "(A) '果园' 意味着种植果树的一块土地。" +
            "<br><br>" +
            "(B) '花园' 意味着经常在房子附近的一块地，用来种花、果实或蔬菜。" +
            "<br><br>" +
            "(C) '草地' 意味着一片草地，尤其是用来做干草的草地。" +
            "<br><br>" +
            "(D) '森林' 意味着主要由树木和灌木覆盖的大面积。"
    },
    {
        id: 8,
        question: "The referee's __________ was evident when he repeatedly favoured one team with his calls, leading to an unfair advantage.",
        chinese_question: "当裁判反复偏袒一个队时，他的 __________ 显而易见，导致了不公平的优势。",
        answers: [
            { option: "A", answer: "bias", chinese_answer: "偏见", chinese_romanization: "piānjiàn" },
            { option: "B", answer: "fairness", chinese_answer: "公正", chinese_romanization: "gōngzhèng" },
            { option: "C", answer: "neutrality", chinese_answer: "中立", chinese_romanization: "zhōnglì" },
            { option: "D", answer: "justice", chinese_answer: "正义", chinese_romanization: "zhèngyì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'bias' figuratively means inclination or prejudice for or against one person or group, especially in a way considered to be unfair." +
            "<br><br>" +
            "(B) 'fairness' means impartial and just treatment or behavior without favoritism or discrimination." +
            "<br><br>" +
            "(C) 'neutrality' means the state of not supporting or helping either side in a conflict or disagreement." +
            "<br><br>" +
            "(D) 'justice' means just behavior or treatment.",
        chinese_explanation: "(A) '偏见' 在此语境下意指对一个人或一个群体的倾向或偏见，尤其是被认为不公平的方式。" +
            "<br><br>" +
            "(B) '公正' 意味着没有偏袒或歧视的公平和公正的待遇或行为。" +
            "<br><br>" +
            "(C) '中立' 意味着在冲突或争执中不支持或帮助任何一方的状态。" +
            "<br><br>" +
            "(D) '正义' 意味着正义的行为或待遇。"
    },
    {
        id: 9,
        question: "The artist received a __________ to create a mural for the new community center.",
        chinese_question: "这位艺术家接到了为新社区中心创作壁画的 __________。",
        answers: [
            { option: "A", answer: "commission", chinese_answer: "委托", chinese_romanization: "wěituō" },
            { option: "B", answer: "rejection", chinese_answer: "拒绝", chinese_romanization: "jùjué" },
            { option: "C", answer: "proposal", chinese_answer: "建议", chinese_romanization: "jiànyì" },
            { option: "D", answer: "dismissal", chinese_answer: "解雇", chinese_romanization: "jiěgù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'commission' means an instruction, command, or duty given to a person or group of people." +
            "<br><br>" +
            "(B) 'rejection' means the dismissing or refusing of a proposal, idea, etc." +
            "<br><br>" +
            "(C) 'proposal' means a plan or suggestion, especially a formal or written one, put forward for consideration by others." +
            "<br><br>" +
            "(D) 'dismissal' means the act of ordering or allowing someone to leave.",
        chinese_explanation: "(A) '委托'一词意味着给某人或一群人下达的指示、命令或职责。" +
            "<br><br>" +
            "(B) '拒绝' 意味着对提议、想法等的拒绝或拒绝。" +
            "<br><br>" +
            "(C) '建议' 意味着特别是由他人提出的考虑或讨论的计划或建议。" +
            "<br><br>" +
            "(D) '解雇' 意味着下令或允许某人离开的行为。"
    },
    {
        id: 10,
        question: "His boss gave him a look of __________ when he arrived late to the important meeting.",
        chinese_question: "当他在重要会议上迟到时，他的老板给了他一个 __________ 的眼神。",
        answers: [
            { option: "A", answer: "praise", chinese_answer: "赞美", chinese_romanization: "zànměi" },
            { option: "B", answer: "reproach", chinese_answer: "责备", chinese_romanization: "zébèi" },
            { option: "C", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" },
            { option: "D", answer: "joy", chinese_answer: "喜悦", chinese_romanization: "xǐyuè" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'reproach' means expressing disapproval or disappointment." +
            "<br><br>" +
            "(A) 'praise' means the expression of approval or admiration for someone or something." +
            "<br><br>" +
            "(C) 'support' means to bear all or part of the weight of; hold up." +
            "<br><br>" +
            "(D) 'joy' means a feeling of great pleasure and happiness.",
        chinese_explanation: "(B) '责备'一词意味着表示不赞成或失望。" +
            "<br><br>" +
            "(A) '赞美' 意味着对某人或某事表示赞同或钦佩。" +
            "<br><br>" +
            "(C) '支持' 意味着承受全部或部分重量；支撑。" +
            "<br><br>" +
            "(D) '喜悦' 意味着极大的愉快和幸福的感觉。"
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

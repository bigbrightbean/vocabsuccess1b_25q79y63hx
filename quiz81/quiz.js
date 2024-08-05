// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The scientist presented the __________ of his findings to the committee, leaving no room for doubt.",
    chinese_question: "科学家向委员会提交了他的发现的 __________，毫无疑问。",
    answers: [
        { option: "A", answer: "guess", chinese_answer: "猜测", chinese_romanization: "cāicè" },
        { option: "B", answer: "proof", chinese_answer: "证据", chinese_romanization: "zhèngjù" },
        { option: "C", answer: "opinion", chinese_answer: "意见", chinese_romanization: "yìjiàn" },
        { option: "D", answer: "suggestion", chinese_answer: "建议", chinese_romanization: "jiànyì" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'proof' means evidence or argument establishing a fact or the truth of a statement." +
        "<br><br>" +
        "(A) 'guess' means an estimate or conjecture without sufficient information." +
        "<br><br>" +
        "(C) 'opinion' means a belief or judgment that rests on grounds insufficient to produce complete certainty." +
        "<br><br>" +
        "(D) 'suggestion' means an idea or plan put forward for consideration.",
    chinese_explanation: "(B) '证据' 意味着确立事实或陈述真理的证据或论据。" +
        "<br><br>" +
        "(A) '猜测' 意味着在信息不足的情况下进行估计或推测。" +
        "<br><br>" +
        "(C) '意见' 意味着基于不足以产生完全确定性的理由的信念或判断。" +
        "<br><br>" +
        "(D) '建议' 意味着提出供考虑的想法或计划。"
    },
    {
        id: 2,
        question: "His __________ during the meeting annoyed the serious-minded participants.",
        chinese_question: "他在会议上的 __________ 让严肃的参与者感到恼火。",
        answers: [
            { option: "A", answer: "professionalism", chinese_answer: "专业精神", chinese_romanization: "zhuānyè jīngshén" },
            { option: "B", answer: "maturity", chinese_answer: "成熟", chinese_romanization: "chéngshú" },
            { option: "C", answer: "wisdom", chinese_answer: "智慧", chinese_romanization: "zhìhuì" },
            { option: "D", answer: "silliness", chinese_answer: "愚蠢", chinese_romanization: "yúchǔn" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'silliness' means the quality of being silly or foolish." +
            "<br><br>" +
            "(A) 'professionalism' means the competence or skill expected of a professional." +
            "<br><br>" +
            "(B) 'maturity' means the state of being fully developed in body or mind." +
            "<br><br>" +
            "(C) 'wisdom' means the quality of having experience, knowledge, and good judgment.",
        chinese_explanation: "(D) '愚蠢' 意味着愚蠢或愚蠢的品质。" +
            "<br><br>" +
            "(A) '专业精神' 意味着专业人员应具备的能力或技能。" +
            "<br><br>" +
            "(B) '成熟' 意味着身体或心灵的完全发育状态。" +
            "<br><br>" +
            "(C) '智慧' 意味着拥有经验、知识和良好判断力的品质。"
    },
    {
        id: 3,
    question: "When the fire alarm went off, the school hallways erupted into __________, with students running in every direction.",
    chinese_question: "当火警响起时，学校走廊里一片 __________，学生们四处奔跑。",
    answers: [
        { option: "A", answer: "silence", chinese_answer: "安静", chinese_romanization: "ānjìng" },
        { option: "B", answer: "pandemonium", chinese_answer: "混乱", chinese_romanization: "hùnluàn" },
        { option: "C", answer: "order", chinese_answer: "秩序", chinese_romanization: "zhìxù" },
        { option: "D", answer: "calm", chinese_answer: "平静", chinese_romanization: "píngjìng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'pandemonium' means wild and noisy disorder or confusion; uproar." +
        "<br><br>" +
        "(A) 'silence' means complete absence of sound." +
        "<br><br>" +
        "(C) 'order' means the arrangement or disposition of people or things in relation to each other according to a particular sequence, pattern, or method." +
        "<br><br>" +
        "(D) 'calm' means the absence of violent or confrontational activity.",
    chinese_explanation: "(B) '混乱' 意味着狂野和嘈杂的混乱或骚动。" +
        "<br><br>" +
        "(A) '安静' 意味着完全没有声音。" +
        "<br><br>" +
        "(C) '秩序' 意味着按照特定顺序、模式或方法排列人或物。" +
        "<br><br>" +
        "(D) '平静' 意味着没有暴力或对抗活动。"
    },
    {
        id: 4,
        question: "He expressed a common __________ among his peers about the need for change in the education system.",
        chinese_question: "他表达了同龄人普遍的 __________，认为教育系统需要改变。",
        answers: [
            { option: "A", answer: "whim", chinese_answer: "奇想", chinese_romanization: "qíxiǎng" },
            { option: "B", answer: "aversion", chinese_answer: "厌恶", chinese_romanization: "yànwù" },
            { option: "C", answer: "sentiment", chinese_answer: "情感", chinese_romanization: "qínggǎn" },
            { option: "D", answer: "hesitation", chinese_answer: "犹豫", chinese_romanization: "yóuyù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'sentiment' means a view or attitude toward a situation or event; an opinion or feeling." +
            "<br><br>" +
            "(A) 'whim' means a sudden desire or change of mind, especially one that is unusual or unexplained." +
            "<br><br>" +
            "(B) 'aversion' means a strong dislike or disinclination." +
            "<br><br>" +
            "(D) 'hesitation' means the action of pausing or hesitating before saying or doing something.",
        chinese_explanation: "(C) '情感'一词意味着对某种情况或事件的看法或态度；意见或感觉。" +
            "<br><br>" +
            "(A) '奇想' 意味着一种突然的愿望或改变主意，尤其是非同寻常或无法解释的。" +
            "<br><br>" +
            "(B) '厌恶' 意味着强烈的厌恶或不情愿。" +
            "<br><br>" +
            "(D) '犹豫' 意味着在说或做某事前暂停或犹豫的动作。"
    },
    {
        id: 5,
    question: "The meeting is on the __________ for 3 PM this afternoon.",
    chinese_question: "会议安排在今天下午3点。",
    answers: [
        { option: "A", answer: "schedule", chinese_answer: "时间表", chinese_romanization: "shíjiān biǎo" },
        { option: "B", answer: "delay", chinese_answer: "延迟", chinese_romanization: "yánchí" },
        { option: "C", answer: "postponement", chinese_answer: "推迟", chinese_romanization: "tuīchí" },
        { option: "D", answer: "cancellation", chinese_answer: "取消", chinese_romanization: "qǔxiāo" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'schedule' means a plan for carrying out a process or procedure, giving lists of intended events and times." +
        "<br><br>" +
        "(B) 'delay' means a period of time by which something is late or postponed." +
        "<br><br>" +
        "(C) 'postponement' means the action of delaying something." +
        "<br><br>" +
        "(D) 'cancellation' means the action of canceling something that has been arranged or planned.",
    chinese_explanation: "(A) '时间表' 意味着计划执行的过程或程序，列出预定的事件和时间。" +
        "<br><br>" +
        "(B) '延迟' 意味着某事迟到或推迟的一段时间。" +
        "<br><br>" +
        "(C) '推迟' 意味着延迟某事的行动。" +
        "<br><br>" +
        "(D) '取消' 意味着取消已经安排或计划的事情的行为。"
    },
    {
        id: 6,
    question: "He grabbed his __________ and headed out for a weekend of camping in the mountains.",
    chinese_question: "他拿起他的 __________，准备去山区露营一个周末。",
    answers: [
        { option: "A", answer: "bundle", chinese_answer: "捆", chinese_romanization: "kǔn" },
        { option: "B", answer: "pack", chinese_answer: "背包", chinese_romanization: "bēibāo" },
        { option: "C", answer: "load", chinese_answer: "负荷", chinese_romanization: "fùhè" },
        { option: "D", answer: "crate", chinese_answer: "箱子", chinese_romanization: "xiāngzi" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'pack' means a backpack or bag used for carrying items, especially when traveling or hiking." +
        "<br><br>" +
        "(A) 'bundle' means a collection of things, or a quantity of material, tied or wrapped up together." +
        "<br><br>" +
        "(C) 'load' means a heavy or bulky thing that is being carried or is about to be carried." +
        "<br><br>" +
        "(D) 'crate' means a slatted wooden case used for transporting or storing goods.",
    chinese_explanation: "(B) '背包' 意味着用于携带物品的背包，尤其是在旅行或远足时。" +
        "<br><br>" +
        "(A) '捆' 意味着捆绑在一起的东西或材料的数量。" +
        "<br><br>" +
        "(C) '负荷' 意味着将要携带的重物或大件物品。" +
        "<br><br>" +
        "(D) '箱子' 意味着用于运输或存储货物的条板木箱。"
    },
    {
        id: 7,
    question: "The driver's __________ led to a severe accident on the highway.",
    chinese_question: "司机的 __________ 导致了高速公路上的严重事故。",
    answers: [
        { option: "A", answer: "recklessness", chinese_answer: "鲁莽", chinese_romanization: "lǔmǎng" },
        { option: "B", answer: "caution", chinese_answer: "小心", chinese_romanization: "xiǎoxīn" },
        { option: "C", answer: "prudence", chinese_answer: "谨慎", chinese_romanization: "jǐnshèn" },
        { option: "D", answer: "vigilance", chinese_answer: "警惕", chinese_romanization: "jǐngtì" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'recklessness' means lack of regard for the danger or consequences of one's actions." +
        "<br><br>" +
        "(B) 'caution' means care taken to avoid danger or mistakes." +
        "<br><br>" +
        "(C) 'prudence' means the quality of being prudent; cautiousness." +
        "<br><br>" +
        "(D) 'vigilance' means the action or state of keeping careful watch for possible danger or difficulties.",
    chinese_explanation: "(A) '鲁莽' 意味着对危险或后果缺乏关注。" +
        "<br><br>" +
        "(B) '小心' 意味着避免危险或错误的谨慎。" +
        "<br><br>" +
        "(C) '谨慎' 意味着谨慎的品质。" +
        "<br><br>" +
        "(D) '警惕' 意味着对可能的危险或困难保持警惕的行为或状态。"
    },
    {
        id: 8,
        question: "She found herself in a __________ when both job offers she received were equally appealing.",
        chinese_question: "当她收到的两个工作机会都同样有吸引力时，她陷入了 __________。",
        answers: [
            { option: "A", answer: "solution", chinese_answer: "解决", chinese_romanization: "jiějué" },
            { option: "B", answer: "quandary", chinese_answer: "困境", chinese_romanization: "kùnjìng" },
            { option: "C", answer: "certainty", chinese_answer: "确定性", chinese_romanization: "quèdìng xìng" },
            { option: "D", answer: "satisfaction", chinese_answer: "满意", chinese_romanization: "mǎnyì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'quandary' means a state of perplexity or uncertainty over what to do in a difficult situation." +
            "<br><br>" +
            "(A) 'solution' means a means of solving a problem or dealing with a difficult situation." +
            "<br><br>" +
            "(C) 'certainty' means the quality of being reliably true." +
            "<br><br>" +
            "(D) 'satisfaction' means fulfillment of one's wishes, expectations, or needs.",
        chinese_explanation: "(B) '困境'一词意味着在面对困难情况时感到困惑或不确定的状态。" +
            "<br><br>" +
            "(A) '解决' 意味着解决问题或处理困难情况的方法。" +
            "<br><br>" +
            "(C) '确定性' 意味着可靠真实的质量。" +
            "<br><br>" +
            "(D) '满意' 意味着满足一个人的愿望、期望或需要。"
    },
    {
        id: 9,
        question: "Completing the marathon brought her immense __________, as she had trained for months.",
        chinese_question: "完成马拉松给她带来了巨大的 __________ ，因为她训练了好几个月。",
        answers: [
            { option: "A", answer: "gratification", chinese_answer: "满足", chinese_romanization: "mǎnzú" },
            { option: "B", answer: "frustration", chinese_answer: "挫折", chinese_romanization: "cuòzhé" },
            { option: "C", answer: "disappointment", chinese_answer: "失望", chinese_romanization: "shīwàng" },
            { option: "D", answer: "boredom", chinese_answer: "无聊", chinese_romanization: "wúliáo" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'gratification' means pleasure, especially when gained from the satisfaction of a desire." +
            "<br><br>" +
            "(B) 'frustration' means the feeling of being upset or annoyed as a result of being unable to change or achieve something." +
            "<br><br>" +
            "(C) 'disappointment' means sadness or displeasure caused by the non-fulfillment of one's hopes or expectations." +
            "<br><br>" +
            "(D) 'boredom' means the state of feeling bored.",
        chinese_explanation: "(A) '满足' 意味着快乐，尤其是从实现愿望中获得的快乐。" +
            "<br><br>" +
            "(B) '挫折' 意味着因无法改变或实现某事而感到沮丧或恼怒。" +
            "<br><br>" +
            "(C) '失望' 意味着因希望或期望未实现而产生的悲伤或不快。" +
            "<br><br>" +
            "(D) '无聊' 意味着感到无趣的状态。"
    },
    {
        id: 10,
    question: "The knight's __________ to his king was evident when he defended the castle from invaders and refused bribes from the enemy.",
    chinese_question: "骑士对国王的 __________ 显而易见，当他保卫城堡免受入侵者的攻击并拒绝敌人的贿赂时。",
    answers: [
        { option: "A", answer: "betrayal", chinese_answer: "背叛", chinese_romanization: "bèipàn" },
        { option: "B", answer: "disloyalty", chinese_answer: "不忠", chinese_romanization: "bùzhōng" },
        { option: "C", answer: "treachery", chinese_answer: "背信弃义", chinese_romanization: "bèixìn qìyì" },
        { option: "D", answer: "fealty", chinese_answer: "忠诚", chinese_romanization: "zhōngchéng" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'fealty' means loyalty and faithfulness, especially to a lord or king." +
        "<br><br>" +
        "(A) 'betrayal' means the action of betraying one's country, a group, or a person; treachery." +
        "<br><br>" +
        "(B) 'disloyalty' means lack of loyalty." +
        "<br><br>" +
        "(C) 'treachery' means betrayal of trust.",
    chinese_explanation: "(D) '忠诚' 意味着忠诚和信实，特别是对领主或国王的。" +
        "<br><br>" +
        "(A) '背叛' 意味着背叛国家、团体或个人的行为；背信弃义。" +
        "<br><br>" +
        "(B) '不忠' 意味着缺乏忠诚。" +
        "<br><br>" +
        "(C) '背信弃义' 意味着背叛信任。"
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

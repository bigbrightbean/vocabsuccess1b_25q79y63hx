// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Her memories of the trip were like a __________, filled with colorful and vivid images.",
        chinese_question: "她对旅行的记忆如同一个 __________，充满了多彩而生动的画面。",
        answers: [
            { option: "A", answer: "dream", chinese_answer: "梦", chinese_romanization: "mèng" },
            { option: "B", answer: "storybook", chinese_answer: "故事书", chinese_romanization: "gùshìshū" },
            { option: "C", answer: "panorama", chinese_answer: "全景", chinese_romanization: "quánjǐng" },
            { option: "D", answer: "kaleidoscope", chinese_answer: "万花筒", chinese_romanization: "wànhuātǒng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'kaleidoscope' means a constantly changing pattern or sequence of elements, often used to describe vivid and colorful memories." +
            "<br><br>" +
            "(A) 'dream' means a series of thoughts, images, and sensations occurring in a person's mind during sleep." +
            "<br><br>" +
            "(B) 'storybook' means a book containing a story or collection of stories intended for children." +
            "<br><br>" +
            "(C) 'panorama' means an unbroken view of the whole region surrounding an observer.",
        chinese_explanation: "(D) '万花筒'一词意味着不断变化的元素或序列的图案，常用来描述生动而多彩的记忆。" +
            "<br><br>" +
            "(A) '梦' 意味着人在睡眠期间头脑中出现的一系列思想、图像和感觉。" +
            "<br><br>" +
            "(B) '故事书' 意味着一本包含故事或儿童故事集的书。" +
            "<br><br>" +
            "(C) '全景' 意味着观察者周围整个区域的连续视图。"
    },
    {
        id: 2,
        question: "She couldn't help but feel a pang of __________ when she saw her friend's new car.",
        chinese_question: "看到朋友的新车时，她不禁感到一阵 __________。",
        answers: [
            { option: "A", answer: "envy", chinese_answer: "嫉妒", chinese_romanization: "jídù" },
            { option: "B", answer: "joy", chinese_answer: "喜悦", chinese_romanization: "xǐyuè" },
            { option: "C", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "D", answer: "satisfaction", chinese_answer: "满足", chinese_romanization: "mǎnzú" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'envy' means a feeling of discontented or resentful longing aroused by someone else's possessions, qualities, or luck." +
            "<br><br>" +
            "(B) 'joy' means a feeling of great pleasure and happiness." +
            "<br><br>" +
            "(C) 'indifference' means lack of interest, concern, or sympathy." +
            "<br><br>" +
            "(D) 'satisfaction' means fulfillment of one's wishes, expectations, or needs, or the pleasure derived from this.",
        chinese_explanation: "(A) '嫉妒' 意味着因他人的财产、品质或运气而引起的不满或愤恨的渴望。" +
            "<br><br>" +
            "(B) '喜悦' 意味着极大的快乐和幸福。" +
            "<br><br>" +
            "(C) '冷漠' 意味着缺乏兴趣、关心或同情。" +
            "<br><br>" +
            "(D) '满足' 意味着满足某人的愿望、期望或需要，或由此产生的快乐。"
    },
    {
        id: 3,
        question: "The farmer’s decision to focus on crop __________ included growing fruits, vegetables, and grains to ensure a stable income.",
        chinese_question: "农民决定专注于作物的 __________，包括种植水果、蔬菜和谷物，以确保稳定的收入。",
        answers: [
            { option: "A", answer: "diversification", chinese_answer: "多元化", chinese_romanization: "duōyuán huà" },
            { option: "B", answer: "limitation", chinese_answer: "限制", chinese_romanization: "xiànzhì" },
            { option: "C", answer: "concentration", chinese_answer: "集中", chinese_romanization: "jízhōng" },
            { option: "D", answer: "homogenization", chinese_answer: "同质化", chinese_romanization: "tóngzhì huà" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'diversification' means the process of varying products to increase income and manage risks." +
            "<br><br>" +
            "(B) 'limitation' means a restricting condition or limitation." +
            "<br><br>" +
            "(C) 'concentration' means focusing on a single area or aspect." +
            "<br><br>" +
            "(D) 'homogenization' means the process of making things uniform or similar.",
        chinese_explanation: "(A) '多元化' 意味着改变产品以增加收入并管理风险的过程。" +
            "<br><br>" +
            "(B) '限制' 意味着限制条件或限制。" +
            "<br><br>" +
            "(C) '集中' 意味着专注于单一领域或方面。" +
            "<br><br>" +
            "(D) '同质化' 意味着使事物统一或相似的过程。"
    },
    {
        id: 4,
        question: "The scientist's __________ to the prevailing theory offered a new perspective that sparked further research and debate.",
        chinese_question: "这位科学家对现有理论的 __________ 提供了一个新的视角，引发了进一步的研究和讨论。",
        answers: [
            { option: "A", answer: "agreement", chinese_answer: "同意", chinese_romanization: "tóngyì" },
            { option: "B", answer: "counterargument", chinese_answer: "反驳", chinese_romanization: "fǎnbó" },
            { option: "C", answer: "confirmation", chinese_answer: "确认", chinese_romanization: "quèrèn" },
            { option: "D", answer: "acceptance", chinese_answer: "接受", chinese_romanization: "jiēshòu" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'counterargument' means an argument or set of reasons put forward to oppose an idea or theory developed in another argument." +
            "<br><br>" +
            "(A) 'agreement' means harmony or accordance in opinion or feeling." +
            "<br><br>" +
            "(C) 'confirmation' means the action of confirming something or the state of being confirmed." +
            "<br><br>" +
            "(D) 'acceptance' means the action of consenting to receive or undertake something offered.",
        chinese_explanation: "(B) '反驳'一词意味着为反对在另一争论中提出的观点或理论而提出的论点或理由。" +
            "<br><br>" +
            "(A) '同意' 意味着意见或感觉上的和谐或一致。" +
            "<br><br>" +
            "(C) '确认' 意味着确认某事的行为或状态。" +
            "<br><br>" +
            "(D) '接受' 意味着同意接受或承担所提供的某事的行为。"
    },
    {
        id: 5,
        question: "Her calm and patient __________ made her an excellent teacher, able to handle even the most challenging students.",
        chinese_question: "她冷静和耐心的 __________ 使她成为一名优秀的教师，能够应对最具挑战性的学生。",
        answers: [
            { option: "A", answer: "mood", chinese_answer: "情绪", chinese_romanization: "qíngxù" },
            { option: "B", answer: "whim", chinese_answer: "奇想", chinese_romanization: "qíxiǎng" },
            { option: "C", answer: "temperament", chinese_answer: "性情", chinese_romanization: "xìngqíng" },
            { option: "D", answer: "impulse", chinese_answer: "冲动", chinese_romanization: "chōngdòng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'temperament' means a person's or animal's nature, especially as it permanently affects their behavior." +
            "<br><br>" +
            "(A) 'mood' means a temporary state of mind or feeling." +
            "<br><br>" +
            "(B) 'whim' means a sudden desire or change of mind, especially one that is unusual or unexplained." +
            "<br><br>" +
            "(D) 'impulse' means a sudden strong and unreflective urge or desire to act.",
        chinese_explanation: "(C) '性情'一词意味着一个人或动物的本性，尤其是它永久地影响他们的行为。" +
            "<br><br>" +
            "(A) '情绪' 意味着一种暂时的心情或感觉。" +
            "<br><br>" +
            "(B) '奇想' 意味着一种突然的愿望或改变主意，尤其是非同寻常或无法解释的。" +
            "<br><br>" +
            "(D) '冲动' 意味着一种突然的强烈和不加思索的冲动或行动愿望。"
    },
    {
        id: 6,
        question: "She had no __________ about questioning the CEO's decision during the meeting, despite the risk of backlash.",
        chinese_question: "尽管冒着遭到反击的风险，她在会议上毫无 __________ 地质疑了首席执行官的决定。",
        answers: [
            { option: "A", answer: "qualms", chinese_answer: "不安", chinese_romanization: "bù'ān" },
            { option: "B", answer: "acceptance", chinese_answer: "接受", chinese_romanization: "jiēshòu" },
            { option: "C", answer: "devotion", chinese_answer: "奉献", chinese_romanization: "fèngxiàn" },
            { option: "D", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'qualms' figuratively means uneasy feelings of doubt, worry, or fear, especially about one's own conduct; misgivings." +
            "<br><br>" +
            "(B) 'acceptance' means the action of consenting to receive or undertake something offered." +
            "<br><br>" +
            "(C) 'devotion' means love, loyalty, or enthusiasm for a person, activity, or cause." +
            "<br><br>" +
            "(D) 'indifference' means lack of interest, concern, or sympathy.",
        chinese_explanation: "(A) '不安' 在此语境下意指对某事感到怀疑、担忧或恐惧的不安感觉，尤其是关于自己的行为；不安。" +
            "<br><br>" +
            "(B) '接受' 意味着同意接受或承担提供的某物的行为。" +
            "<br><br>" +
            "(C) '奉献' 意味着对某人、活动或事业的爱、忠诚或热情。" +
            "<br><br>" +
            "(D) '冷漠' 意味着缺乏兴趣、关心或同情。"
    },
    {
        id: 7,
        question: "Her true __________ was nursing, a career that allowed her to care for others and make a difference in their lives.",
        chinese_question: "她真正的 __________ 是护理，这份职业使她能够照顾他人并改变他们的生活。",
        answers: [
            { option: "A", answer: "pastime", chinese_answer: "消遣", chinese_romanization: "xiāoqiǎn" },
            { option: "B", answer: "vocation", chinese_answer: "职业", chinese_romanization: "zhíyè" },
            { option: "C", answer: "recreation", chinese_answer: "娱乐", chinese_romanization: "yúlè" },
            { option: "D", answer: "amusement", chinese_answer: "娱乐", chinese_romanization: "yúlè" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'vocation' means a strong feeling of suitability for a particular career or occupation." +
            "<br><br>" +
            "(A) 'pastime' means an activity that someone does regularly for enjoyment rather than work; a hobby." +
            "<br><br>" +
            "(C) 'recreation' means activity done for enjoyment when one is not working." +
            "<br><br>" +
            "(D) 'amusement' means the state or experience of finding something funny.",
        chinese_explanation: "(B) '职业'一词意味着对特定职业或职业的强烈适应感。" +
            "<br><br>" +
            "(A) '消遣' 意味着某人定期为享乐而不是工作而做的活动；爱好。" +
            "<br><br>" +
            "(C) '娱乐' 意味着不工作时为了享乐而进行的活动。" +
            "<br><br>" +
            "(D) '娱乐' 意味着发现某事有趣的状态或经历。"
    },
    {
        id: 8,
        question: "The committee was commended for its __________ in evaluating all proposals without any bias.",
        chinese_question: "委员会因在评估所有提案时表现出的 __________ 而受到称赞，没有任何偏见。",
        answers: [
            { option: "A", answer: "impartiality", chinese_answer: "公正", chinese_romanization: "gōngzhèng" },
            { option: "B", answer: "subjectivity", chinese_answer: "主观性", chinese_romanization: "zhǔguān xìng" },
            { option: "C", answer: "prejudice", chinese_answer: "偏见", chinese_romanization: "piānjiàn" },
            { option: "D", answer: "favoritism", chinese_answer: "偏爱", chinese_romanization: "piān'ài" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'impartiality' figuratively means evaluating all proposals equally, without bias." +
            "<br><br>" +
            "(B) 'subjectivity' means the quality of being based on or influenced by personal feelings, tastes, or opinions." +
            "<br><br>" +
            "(C) 'prejudice' means preconceived opinion that is not based on reason or actual experience." +
            "<br><br>" +
            "(D) 'favoritism' means the practice of giving unfair preferential treatment to one person or group at the expense of another.",
        chinese_explanation: "(A) '公正' 在此语境下意指平等评估所有提案，没有偏见。" +
            "<br><br>" +
            "(B) '主观性' 意味着基于或受个人感情、品味或意见影响的性质。" +
            "<br><br>" +
            "(C) '偏见' 意味着基于无理性或实际经验的先入之见。" +
            "<br><br>" +
            "(D) '偏爱' 意味着给予一个人或群体不公平的优待。"
    },
    {
        id: 9,
        question: "The __________ of the colors in the painting created a jarring effect.",
        chinese_question: "画作中颜色的 __________ 造成了刺耳的效果。",
        answers: [
            { option: "A", answer: "dissonance", chinese_answer: "不和谐", chinese_romanization: "bù héxié" },
            { option: "B", answer: "balance", chinese_answer: "平衡", chinese_romanization: "pínghéng" },
            { option: "C", answer: "symmetry", chinese_answer: "对称", chinese_romanization: "duìchèn" },
            { option: "D", answer: "alignment", chinese_answer: "对齐", chinese_romanization: "duìqí" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'dissonance' means a lack of harmony or agreement." +
            "<br><br>" +
            "(B) 'balance' means an even distribution of weight enabling someone or something to remain upright and steady." +
            "<br><br>" +
            "(C) 'symmetry' means the quality of being made up of exactly similar parts facing each other or around an axis." +
            "<br><br>" +
            "(D) 'alignment' means arrangement in a straight line, or in correct or appropriate relative positions.",
        chinese_explanation: "(A) '不和谐'一词意味着缺乏和谐或一致。" +
            "<br><br>" +
            "(B) '平衡' 意味着重量均匀分布，使某人或某物保持直立和稳定。" +
            "<br><br>" +
            "(C) '对称' 意味着由完全相似的部分构成，这些部分彼此面对或围绕一个轴。" +
            "<br><br>" +
            "(D) '对齐' 意味着排列成一条直线，或在正确或适当的相对位置。"
    },
    {
        id: 10,
        question: "His heart __________ increased as he waited for the exam results.",
        chinese_question: "当他等待考试结果时，他的心跳 __________ 加快了。",
        answers: [
            { option: "A", answer: "speed", chinese_answer: "速度", chinese_romanization: "sùdù" },
            { option: "B", answer: "error", chinese_answer: "错误", chinese_romanization: "cuòwù" },
            { option: "C", answer: "delay", chinese_answer: "延迟", chinese_romanization: "yánchí" },
            { option: "D", answer: "rate", chinese_answer: "速度", chinese_romanization: "sùdù" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'rate' means a measure, quantity, or frequency, typically one measured against another quantity or measure." +
            "<br><br>" +
            "(A) 'speed' means the rate at which someone or something moves or operates." +
            "<br><br>" +
            "(B) 'error' means a mistake." +
            "<br><br>" +
            "(C) 'delay' means a period of time by which something is late or postponed.",
        chinese_explanation: "(D) '速度' 意味着一种度量、数量或频率，通常与另一数量或度量相比较。" +
            "<br><br>" +
            "(A) '速度' 意味着某人或某物移动或操作的速度。" +
            "<br><br>" +
            "(B) '错误' 意味着误导或错误的行为或判断。" +
            "<br><br>" +
            "(C) '延迟' 意味着某事迟到或推迟的一段时间。"
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

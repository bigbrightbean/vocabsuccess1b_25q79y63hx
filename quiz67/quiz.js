// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "Their spontaneous __________ led them to explore the hidden trails of the ancient forest.",
    chinese_question: "他们即兴的 __________ 带他们探索古老森林的隐秘小径。",
    answers: [
        { option: "A", answer: "conference", chinese_answer: "会议", chinese_romanization: "huìyì" },
        { option: "B", answer: "examination", chinese_answer: "考试", chinese_romanization: "kǎoshì" },
        { option: "C", answer: "escapade", chinese_answer: "冒险行为", chinese_romanization: "màoxiǎn xíngwéi" },
        { option: "D", answer: "training", chinese_answer: "训练", chinese_romanization: "xùnliàn" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'escapade' means an act or incident involving excitement, daring, or adventure." +
        "<br><br>" +
        "(A) 'conference' means a formal meeting for discussion." +
        "<br><br>" +
        "(B) 'examination' means a detailed inspection or study." +
        "<br><br>" +
        "(D) 'training' means the action of teaching a person or animal a particular skill or type of behavior.",
    chinese_explanation: "(C) '冒险行为'一词意味着涉及兴奋、大胆或冒险的行为或事件。" +
        "<br><br>" +
        "(A) '会议' 意味着讨论的正式会议。" +
        "<br><br>" +
        "(B) '考试' 意味着详细的检查或研究。" +
        "<br><br>" +
        "(D) '训练' 意味着教某人或动物特定技能或行为的动作。"
    },
    {
        id: 2,
        question: "The unfair decision by the referee ignited the __________ of the fans, who started booing loudly.",
        chinese_question: "裁判的不公平决定激起了球迷们的 __________，他们开始大声嘘声。",
        answers: [
            { option: "A", answer: "joy", chinese_answer: "喜悦", chinese_romanization: "xǐyuè" },
            { option: "B", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "C", answer: "ire", chinese_answer: "愤怒", chinese_romanization: "fènnù" },
            { option: "D", answer: "amusement", chinese_answer: "娱乐", chinese_romanization: "yúlè" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'ire' means anger." +
            "<br><br>" +
            "(A) 'joy' means a feeling of great pleasure and happiness." +
            "<br><br>" +
            "(B) 'indifference' means lack of interest, concern, or sympathy." +
            "<br><br>" +
            "(D) 'amusement' means the state or experience of finding something funny.",
        chinese_explanation: "(C) '愤怒' 意味着愤怒。" +
            "<br><br>" +
            "(A) '喜悦' 意味着极大的愉快和幸福感。" +
            "<br><br>" +
            "(B) '冷漠' 意味着缺乏兴趣、关心或同情。" +
            "<br><br>" +
            "(D) '娱乐' 意味着发现某事有趣的状态或体验。"
    },
    {
        id: 3,
        question: "There was visible __________ among the employees regarding the new dress code policy, with many voicing their objections.",
        chinese_question: "员工们对新的着装规定有明显的 __________，许多人表达了他们的反对意见。",
        answers: [
            { option: "A", answer: "approval", chinese_answer: "赞成", chinese_romanization: "zànchéng" },
            { option: "B", answer: "dissent", chinese_answer: "异议", chinese_romanization: "yìyì" },
            { option: "C", answer: "agreement", chinese_answer: "一致", chinese_romanization: "yīzhì" },
            { option: "D", answer: "support", chinese_answer: "支持", chinese_romanization: "zhīchí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'dissent' means the expression or holding of opinions at variance with those previously, commonly, or officially held." +
            "<br><br>" +
            "(A) 'approval' means the belief that something or someone is good or acceptable." +
            "<br><br>" +
            "(C) 'agreement' means harmony or accordance in opinion or feeling." +
            "<br><br>" +
            "(D) 'support' means to bear all or part of the weight of; hold up.",
        chinese_explanation: "(B) '异议'一词意味着表达或持有与以前、通常或正式持有的意见不同的意见。" +
            "<br><br>" +
            "(A) '赞成' 意味着相信某事或某人是好的或可以接受的。" +
            "<br><br>" +
            "(C) '一致' 意味着意见或感觉上的和谐或一致。" +
            "<br><br>" +
            "(D) '支持' 意味着承受所有或部分重量；支撑。"
    },
    {
        id: 4,
        question: "His smoking habit was a serious __________ to his health.",
        chinese_question: "他的吸烟习惯对他的健康是一个严重的 __________。",
        answers: [
            { option: "A", answer: "benefit", chinese_answer: "益处", chinese_romanization: "yìchù" },
            { option: "B", answer: "advantage", chinese_answer: "优势", chinese_romanization: "yōushì" },
            { option: "C", answer: "aid", chinese_answer: "帮助", chinese_romanization: "bāngzhù" },
            { option: "D", answer: "detriment", chinese_answer: "损害", chinese_romanization: "sǔnhài" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'detriment' means a cause of harm or damage." +
            "<br><br>" +
            "(A) 'benefit' means an advantage or profit gained from something." +
            "<br><br>" +
            "(B) 'advantage' means a condition or circumstance that puts one in a favorable or superior position." +
            "<br><br>" +
            "(C) 'aid' means help, typically of a practical nature.",
        chinese_explanation: "(D) '损害'一词意味着造成伤害或损害的原因。" +
            "<br><br>" +
            "(A) '益处' 意味着从某事中获得的优势或利润。" +
            "<br><br>" +
            "(B) '优势' 意味着使某人处于有利或优越地位的条件或环境。" +
            "<br><br>" +
            "(C) '帮助' 意味着通常是实质性的帮助。"
    },
    {
        id: 5,
        question: "The company's innovation efforts have hit a __________, with no new products being developed recently.",
        chinese_question: "公司的创新努力已达到 __________，最近没有开发新产品。",
        answers: [
            { option: "A", answer: "peak", chinese_answer: "顶峰", chinese_romanization: "dǐngfēng" },
            { option: "B", answer: "plateau", chinese_answer: "停滞", chinese_romanization: "tíngzhì" },
            { option: "C", answer: "rise", chinese_answer: "上升", chinese_romanization: "shàngshēng" },
            { option: "D", answer: "fall", chinese_answer: "下降", chinese_romanization: "xiàjiàng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'plateau' figuratively means a period or state of little or no growth or decline." +
            "<br><br>" +
            "(A) 'peak' means the highest point." +
            "<br><br>" +
            "(C) 'rise' means an upward movement." +
            "<br><br>" +
            "(D) 'fall' means a downward movement.",
        chinese_explanation: "(B) '停滞' 在此语境下意指几乎没有增长或下降的时期或状态。" +
            "<br><br>" +
            "(A) '顶峰' 意味着最高点。" +
            "<br><br>" +
            "(C) '上升' 意味着向上的运动。" +
            "<br><br>" +
            "(D) '下降' 意味着向下的运动。"
    },
    {
        id: 6,
        question: "The __________ between their skills was apparent during the competition, with one team clearly outperforming the other.",
        chinese_question: "在比赛中，他们的技能 __________ 显而易见，一支队伍明显胜过另一支队伍。",
        answers: [
            { option: "A", answer: "similarity", chinese_answer: "相似", chinese_romanization: "xiāngsì" },
            { option: "B", answer: "alliance", chinese_answer: "联盟", chinese_romanization: "liánméng" },
            { option: "C", answer: "connection", chinese_answer: "连接", chinese_romanization: "liánjiē" },
            { option: "D", answer: "disparity", chinese_answer: "差距", chinese_romanization: "chājù" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'disparity' figuratively means a great difference in quality, quantity, or degree." +
            "<br><br>" +
            "(A) 'similarity' means the state of being similar." +
            "<br><br>" +
            "(B) 'alliance' means a union or association formed for mutual benefit." +
            "<br><br>" +
            "(C) 'connection' means a relationship in which a person or thing is linked or associated with something else.",
        chinese_explanation: "(D) '差距' 在此语境下意指质量、数量或程度上的巨大差异。" +
            "<br><br>" +
            "(A) '相似' 意味着相似的状态。" +
            "<br><br>" +
            "(B) '联盟' 意味着为互利而形成的联合或协会。" +
            "<br><br>" +
            "(C) '连接' 意味着人与事物之间的关系或联系。"
    },
    {
        id: 7,
        question: "Memory __________ can be improved through regular practice and using various mnemonic devices.",
        chinese_question: "通过定期练习和使用各种记忆术可以提高记忆 __________。",
        answers: [
            { option: "A", answer: "retention", chinese_answer: "保留", chinese_romanization: "bǎoliú" },
            { option: "B", answer: "loss", chinese_answer: "丧失", chinese_romanization: "sàngshī" },
            { option: "C", answer: "confusion", chinese_answer: "混乱", chinese_romanization: "hùnluàn" },
            { option: "D", answer: "fatigue", chinese_answer: "疲劳", chinese_romanization: "píláo" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'retention' means the continued possession, use, or control of something." +
            "<br><br>" +
            "(B) 'loss' means the fact or process of losing something or someone." +
            "<br><br>" +
            "(C) 'confusion' means lack of understanding; uncertainty." +
            "<br><br>" +
            "(D) 'fatigue' means extreme tiredness resulting from mental or physical exertion or illness.",
        chinese_explanation: "(A) '保留' 意味着继续持有、使用或控制某物。" +
            "<br><br>" +
            "(B) '丧失' 意味着失去某物或某人的事实或过程。" +
            "<br><br>" +
            "(C) '混乱' 意味着缺乏理解；不确定性。" +
            "<br><br>" +
            "(D) '疲劳' 意味着由于精神或身体上的努力或疾病而导致的极度疲倦。"
    },
    {
        id: 8,
        question: "The team finally achieved a __________ on the project timeline, ensuring everyone was on the same page.",
        chinese_question: "团队最终在项目时间表上达成了 __________，确保所有人意见一致。",
        answers: [
            { option: "A", answer: "consensus", chinese_answer: "共识", chinese_romanization: "gòngshí" },
            { option: "B", answer: "conflict", chinese_answer: "冲突", chinese_romanization: "chōngtū" },
            { option: "C", answer: "opposition", chinese_answer: "反对", chinese_romanization: "fǎnduì" },
            { option: "D", answer: "controversy", chinese_answer: "争论", chinese_romanization: "zhēnglùn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'consensus' means general agreement among a group of people." +
            "<br><br>" +
            "(B) 'conflict' means a serious disagreement or argument." +
            "<br><br>" +
            "(C) 'opposition' means resistance or dissent." +
            "<br><br>" +
            "(D) 'controversy' means prolonged public disagreement or heated discussion.",
        chinese_explanation: "(A) '共识' 意味着一群人之间的普遍同意。" +
            "<br><br>" +
            "(B) '冲突' 意味着严重的分歧或争论。" +
            "<br><br>" +
            "(C) '反对' 意味着抵抗或异议。" +
            "<br><br>" +
            "(D) '争论' 意味着长期的公众分歧或激烈讨论。"
    },
    {
        id: 9,
        question: "After the storm, the trail through the forest was a __________ of mud and fallen branches.",
        chinese_question: "暴风雨过后，穿过森林的小径成了泥泞和倒下的树枝的 __________。",
        answers: [
            { option: "A", answer: "quagmire", chinese_answer: "沼泽地", chinese_romanization: "zhǎozédì" },
            { option: "B", answer: "paradise", chinese_answer: "天堂", chinese_romanization: "tiāntáng" },
            { option: "C", answer: "highway", chinese_answer: "公路", chinese_romanization: "gōnglù" },
            { option: "D", answer: "meadow", chinese_answer: "草地", chinese_romanization: "cǎodì" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'quagmire' means a soft, boggy area of land that gives way underfoot." +
            "<br><br>" +
            "(B) 'paradise' means an ideal or idyllic place or state." +
            "<br><br>" +
            "(C) 'highway' means a main road, especially one connecting major towns or cities." +
            "<br><br>" +
            "(D) 'meadow' means a piece of grassland, especially one used for hay.",
        chinese_explanation: "(A) '沼泽地'一词意味着一块松软的、沼泽的土地，在脚下会塌陷。" +
            "<br><br>" +
            "(B) '天堂' 意味着一个理想或田园诗般的地方或状态。" +
            "<br><br>" +
            "(C) '公路' 意味着连接主要城镇或城市的主要道路。" +
            "<br><br>" +
            "(D) '草地' 意味着一块草地，尤指用作干草地。"
    },
    {
        id: 10,
        question: "When he tripped over his own feet, he was met with a hearty __________ from his friends.",
        chinese_question: "当他绊倒自己的脚时，他的朋友们发出了一阵欢快的 __________。",
        answers: [
            { option: "A", answer: "applause", chinese_answer: "掌声", chinese_romanization: "zhǎngshēng" },
            { option: "B", answer: "guffaw", chinese_answer: "哄笑", chinese_romanization: "hōngxiào" },
            { option: "C", answer: "sigh", chinese_answer: "叹息", chinese_romanization: "tànxī" },
            { option: "D", answer: "scold", chinese_answer: "责骂", chinese_romanization: "zémà" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'guffaw' means a loud and boisterous laugh." +
            "<br><br>" +
            "(A) 'applause' means the clapping of hands to show approval." +
            "<br><br>" +
            "(C) 'sigh' means to emit a long, deep, audible breath expressing sadness, relief, or weariness." +
            "<br><br>" +
            "(D) 'scold' means to remonstrate with or rebuke someone angrily.",
        chinese_explanation: "(B) '哄笑' 意味着响亮而欢闹的笑声。" +
            "<br><br>" +
            "(A) '掌声' 意味着拍手表示赞同。" +
            "<br><br>" +
            "(C) '叹息' 意味着发出长而深的声音，表达悲伤、宽慰或疲倦。" +
            "<br><br>" +
            "(D) '责骂' 意味着愤怒地责备某人。"
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

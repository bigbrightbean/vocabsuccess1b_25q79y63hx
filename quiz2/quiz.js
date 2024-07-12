// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "After the illness, he felt __________ and struggled to regain his strength.",
        chinese_question: "生病后，他感到__________，努力恢复体力。",
        answers: [
            { option: "A", answer: "strong", chinese_answer: "强壮的", chinese_romanization: "qiángzhuàng de" },
            { option: "B", answer: "robust", chinese_answer: "健壮的", chinese_romanization: "jiànzhuàng de" },
            { option: "C", answer: "feeble", chinese_answer: "虚弱的", chinese_romanization: "xūruò de" },
            { option: "D", answer: "powerful", chinese_answer: "强大的", chinese_romanization: "qiángdà de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'feeble' means lacking physical strength, especially as a result of age or illness." +
            "<br><br>" +
            "(A) 'strong' means having great physical power and ability." +
            "<br><br>" +
            "(B) 'robust' means strong and healthy; vigorous." +
            "<br><br>" +
            "(D) 'powerful' means having great power or strength.",
        chinese_explanation: "(C) '虚弱的'一词意味着缺乏体力的，尤其是由于年龄或疾病。" +
            "<br><br>" +
            "(A) '强壮的' 意味着具有很大的体力和能力。" +
            "<br><br>" +
            "(B) '健壮的' 意味着强壮和健康的；充满活力的。" +
            "<br><br>" +
            "(D) '强大的' 意味着具有强大力量或力量的。"
    },
    {
        id: 2,
        question: "The early morning sun cast a __________ light over the dewy grass, making it sparkle.",
        chinese_question: "清晨的阳光在带露水的草地上投下 __________ 的光芒，使其闪闪发光。",
        answers: [
            { option: "A", answer: "harsh", chinese_answer: "刺眼的", chinese_romanization: "cìyǎn de" },
            { option: "B", answer: "glimmering", chinese_answer: "闪烁的", chinese_romanization: "shǎnshuò de" },
            { option: "C", answer: "blinding", chinese_answer: "眩目的", chinese_romanization: "xuànmù de" },
            { option: "D", answer: "muted", chinese_answer: "柔和的", chinese_romanization: "róuhé de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'glimmering' means shining faintly with a wavering light." +
            "<br><br>" +
            "(A) 'harsh' means unpleasantly rough or jarring to the senses." +
            "<br><br>" +
            "(C) 'blinding' means (of light) very bright and likely to cause temporary loss of vision." +
            "<br><br>" +
            "(D) 'muted' means (of color or light) not bright; subdued.",
        chinese_explanation: "(B) '闪烁的' 意味着以微弱的光摇曳地照耀。" +
            "<br><br>" +
            "(A) '刺眼的' 意味着令人不愉快地粗糙或震撼感官的。" +
            "<br><br>" +
            "(C) '眩目的' 意味着（光）非常明亮，可能导致暂时失明的。" +
            "<br><br>" +
            "(D) '柔和的' 意味着（颜色或光）不亮的；柔和的。"
    },
    {
        id: 3,
        question: "The team achieved a __________ victory, changing the course of the championship.",
        chinese_question: "球队取得了__________的胜利，改变了冠军赛的进程。",
        answers: [
            { option: "A", answer: "minor", chinese_answer: "次要的", chinese_romanization: "cìyào de" },
            { option: "B", answer: "insignificant", chinese_answer: "无关紧要的", chinese_romanization: "wúguān jǐn yào de" },
            { option: "C", answer: "monumental", chinese_answer: "重大的", chinese_romanization: "zhòngdà de" },
            { option: "D", answer: "trivial", chinese_answer: "微不足道的", chinese_romanization: "wēibùzúdào de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'monumental' means great in importance, extent, or size." +
            "<br><br>" +
            "(A) 'minor' means lesser in importance, seriousness, or significance." +
            "<br><br>" +
            "(B) 'insignificant' means too small or unimportant to be worth consideration." +
            "<br><br>" +
            "(D) 'trivial' means of little value or importance.",
        chinese_explanation: "(C) '重大的'一词意味着在重要性、范围或规模上非常大的。" +
            "<br><br>" +
            "(A) '次要的' 意味着在重要性、严重性或意义上较小的。" +
            "<br><br>" +
            "(B) '无关紧要的' 意味着太小或不重要，不值得考虑的。" +
            "<br><br>" +
            "(D) '微不足道的' 意味着价值或重要性很小的。"
    },
    {
        id: 4,
        question: "The teacher's __________ attitude helped create a classroom environment where all students felt respected and valued.",
        chinese_question: "老师的 __________ 态度帮助创造了一个所有学生都感到被尊重和重视的课堂环境。",
        answers: [
            { option: "A", answer: "intolerant", chinese_answer: "不宽容", chinese_romanization: "bù kuānróng" },
            { option: "B", answer: "indifferent", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "C", answer: "tolerant", chinese_answer: "宽容", chinese_romanization: "kuānróng" },
            { option: "D", answer: "impatient", chinese_answer: "不耐烦", chinese_romanization: "bù nàifán" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'tolerant' means showing willingness to allow the existence of opinions or behavior that one does not necessarily agree with." +
            "<br><br>" +
            "(A) 'intolerant' means not showing willingness to allow the existence of opinions or behavior that one does not necessarily agree with." +
            "<br><br>" +
            "(B) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(D) 'impatient' means having or showing a tendency to be quickly irritated or provoked.",
        chinese_explanation: "(C) '宽容' 意味着愿意允许存在自己不一定同意的意见或行为。" +
            "<br><br>" +
            "(A) '不宽容' 意味着不愿意允许存在自己不一定同意的意见或行为。" +
            "<br><br>" +
            "(B) '冷漠' 意味着没有特别的兴趣或同情；不关心。" +
            "<br><br>" +
            "(D) '不耐烦' 意味着表现出或倾向于迅速感到恼怒或激动。"
    },
    {
        id: 5,
        question: "The __________ look in his eyes suggested he was lost in his own world.",
        chinese_question: "他眼中 __________ 的神情表明他沉浸在自己的世界里。",
        answers: [
            { option: "A", answer: "alert", chinese_answer: "警觉的", chinese_romanization: "jǐngjué de" },
            { option: "B", answer: "preoccupied", chinese_answer: "心不在焉的", chinese_romanization: "xīn bù zài yān de" },
            { option: "C", answer: "aware", chinese_answer: "知道的", chinese_romanization: "zhīdào de" },
            { option: "D", answer: "attentive", chinese_answer: "注意的", chinese_romanization: "zhùyì de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'preoccupied' means engrossed in thought; distracted." +
            "<br><br>" +
            "(A) 'alert' means quick to notice any unusual and potentially dangerous or difficult circumstances." +
            "<br><br>" +
            "(C) 'aware' means having knowledge or perception of a situation or fact." +
            "<br><br>" +
            "(D) 'attentive' means paying close attention to something.",
        chinese_explanation: "(B) '心不在焉的' 意味着沉浸在思考中；心不在焉的。" +
            "<br><br>" +
            "(A) '警觉的' 意味着迅速注意到任何不寻常和潜在危险或困难的情况。" +
            "<br><br>" +
            "(C) '知道的' 意味着对某个情况或事实有知识或感知。" +
            "<br><br>" +
            "(D) '注意的' 意味着密切注意某事。"
    },
    {
        id: 6,
        question: "The __________ car sped down the highway with remarkable speed.",
        chinese_question: "那辆__________的汽车以惊人的速度在高速公路上飞驰。",
        answers: [
            { option: "A", answer: "sluggish", chinese_answer: "缓慢的", chinese_romanization: "huǎnmàn de" },
            { option: "B", answer: "zippy", chinese_answer: "迅捷的", chinese_romanization: "xùnjié de" },
            { option: "C", answer: "slow", chinese_answer: "慢的", chinese_romanization: "màn de" },
            { option: "D", answer: "lethargic", chinese_answer: "昏昏欲睡的", chinese_romanization: "hūnhūnyùshuì de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'zippy' means bright, fresh, or lively; fast." +
            "<br><br>" +
            "(A) 'sluggish' means slow-moving or inactive." +
            "<br><br>" +
            "(C) 'slow' means moving or operating, or designed to do so, only at a low speed; not quick or fast." +
            "<br><br>" +
            "(D) 'lethargic' means affected by lethargy; sluggish and apathetic.",
        chinese_explanation: "(B) '迅捷的'一词意味着明亮、新鲜或活泼的；快速的。" +
            "<br><br>" +
            "(A) '缓慢的' 意味着动作缓慢或不活跃的。" +
            "<br><br>" +
            "(C) '慢的' 意味着动作或操作缓慢，或设计成这样，速度不快。" +
            "<br><br>" +
            "(D) '昏昏欲睡的' 意味着受嗜睡影响的；迟缓和冷漠的。"
    },
    {
        id: 7,
        question: "Her talent for singing was __________, even to those who didn’t know her well.",
        chinese_question: "她的歌唱才华是__________的，即使对那些不太了解她的人来说也是如此。",
        answers: [
            { option: "A", answer: "hidden", chinese_answer: "隐藏的", chinese_romanization: "yǐncáng de" },
            { option: "B", answer: "undeniable", chinese_answer: "无可否认的", chinese_romanization: "wú kě fǒurèn de" },
            { option: "C", answer: "obscure", chinese_answer: "模糊的", chinese_romanization: "móhú de" },
            { option: "D", answer: "uncertain", chinese_answer: "不确定的", chinese_romanization: "bù quèdìng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'undeniable' means unable to be denied or disputed." +
            "<br><br>" +
            "(A) 'hidden' means kept out of sight; concealed." +
            "<br><br>" +
            "(C) 'obscure' means not discovered or known about; uncertain." +
            "<br><br>" +
            "(D) 'uncertain' means not able to be relied on; not known or definite.",
        chinese_explanation: "(B) '无可否认的'一词意味着无法否认或争辩的。" +
            "<br><br>" +
            "(A) '隐藏的' 意味着隐藏的；隐蔽的。" +
            "<br><br>" +
            "(C) '模糊的' 意味着未被发现或未知的；不确定的。" +
            "<br><br>" +
            "(D) '不确定的' 意味着无法依赖的；不确定的或不明确的。"
    },
    {
        id: 8,
        question: "The child's __________ refusal to eat vegetables frustrated his parents.",
        chinese_question: "孩子__________地拒绝吃蔬菜，这让他的父母很沮丧。",
        answers: [
            { option: "A", answer: "compliant", chinese_answer: "顺从的", chinese_romanization: "shùncóng de" },
            { option: "B", answer: "stubborn", chinese_answer: "固执的", chinese_romanization: "gùzhí de" },
            { option: "C", answer: "agreeable", chinese_answer: "令人愉快的", chinese_romanization: "lìng rén yúkuài de" },
            { option: "D", answer: "flexible", chinese_answer: "灵活的", chinese_romanization: "línghuó de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'stubborn' means having or showing dogged determination not to change one's attitude or position on something." +
            "<br><br>" +
            "(A) 'compliant' means inclined to agree with others or obey rules, especially to an excessive degree; acquiescent." +
            "<br><br>" +
            "(C) 'agreeable' means enjoyable and pleasurable; pleasant." +
            "<br><br>" +
            "(D) 'flexible' means capable of bending easily without breaking; able to be easily modified to respond to altered circumstances or conditions.",
        chinese_explanation: "(B) '固执的'一词意味着顽固地决定不改变自己的态度或立场。" +
            "<br><br>" +
            "(A) '顺从的' 意味着倾向于同意他人或遵守规则，尤其是过度的程度；默认的。" +
            "<br><br>" +
            "(C) '令人愉快的' 意味着令人愉快和快乐的；愉快的。" +
            "<br><br>" +
            "(D) '灵活的' 意味着能够轻松弯曲而不会折断；能够轻松修改以应对改变的情况或条件。"
    },
    {
        id: 9,
        question: "Her __________ dedication to her work earned her the respect and admiration of her colleagues.",
        chinese_question: "她对工作的 __________ 奉献赢得了同事们的尊敬和钦佩。",
        answers: [
            { option: "A", answer: "casual", chinese_answer: "随意的", chinese_romanization: "suíyì de" },
            { option: "B", answer: "half-hearted", chinese_answer: "不热情的", chinese_romanization: "bù rèqíng de" },
            { option: "C", answer: "fervent", chinese_answer: "热情的", chinese_romanization: "rèqíng de" },
            { option: "D", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mòbùguānxīn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'fervent' means having or displaying a passionate intensity." +
            "<br><br>" +
            "(A) 'casual' means relaxed and unconcerned." +
            "<br><br>" +
            "(B) 'half-hearted' means without enthusiasm or energy." +
            "<br><br>" +
            "(D) 'indifferent' means having no particular interest or sympathy; unconcerned.",
        chinese_explanation: "(C) '热情的' 意味着有或表现出强烈的激情。" +
            "<br><br>" +
            "(A) '随意的' 意味着放松和不担忧的。" +
            "<br><br>" +
            "(B) '不热情的' 意味着没有热情或精力的。" +
            "<br><br>" +
            "(D) '漠不关心的' 意味着没有特别兴趣或同情的；不关心的。"
    },
    {
        id: 10,
        question: "The professor criticized the student's __________ analysis of the complex novel for oversimplifying its themes.",
        chinese_question: "教授批评学生对复杂小说的 __________ 分析，认为它过于简化了主题。",
        answers: [
            { option: "A", answer: "comprehensive", chinese_answer: "全面的", chinese_romanization: "quánmiàn de" },
            { option: "B", answer: "insightful", chinese_answer: "有见地的", chinese_romanization: "yǒu jiàndì de" },
            { option: "C", answer: "reductive", chinese_answer: "简化的", chinese_romanization: "jiǎnhuà de" },
            { option: "D", answer: "thorough", chinese_answer: "彻底的", chinese_romanization: "chèdǐ de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'reductive' means overly simplifying complex ideas." +
            "<br><br>" +
            "(A) 'comprehensive' means complete and thorough." +
            "<br><br>" +
            "(B) 'insightful' means showing a deep understanding." +
            "<br><br>" +
            "(D) 'thorough' means detailed and complete.",
        chinese_explanation: "(C) '简化的' 意味着过度简化复杂的想法。" +
            "<br><br>" +
            "(A) '全面的' 意味着完整和彻底的。" +
            "<br><br>" +
            "(B) '有见地的' 意味着显示出深刻理解的。" +
            "<br><br>" +
            "(D) '彻底的' 意味着详细和完整的。",
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

// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The __________ decorations in the restaurant included neon lights and plastic flowers, making the place look cheap rather than stylish.",
        chinese_question: "餐厅里的 __________ 装饰包括霓虹灯和塑料花，使得这个地方看起来便宜而不是时尚。",
        answers: [
            { option: "A", answer: "tasteful", chinese_answer: "有品味的", chinese_romanization: "yǒu pǐnwèi de" },
            { option: "B", answer: "gaudy", chinese_answer: "俗丽的", chinese_romanization: "súlì de" },
            { option: "C", answer: "sophisticated", chinese_answer: "复杂的", chinese_romanization: "fùzá de" },
            { option: "D", answer: "modest", chinese_answer: "谦虚的", chinese_romanization: "qiānxū de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'gaudy' means extravagantly bright or showy, typically so as to be tasteless." +
            "<br><br>" +
            "(A) 'tasteful' means showing good aesthetic judgment or appropriate behavior." +
            "<br><br>" +
            "(C) 'sophisticated' means having, revealing, or proceeding from a great deal of worldly experience and knowledge of fashion and culture." +
            "<br><br>" +
            "(D) 'modest' means unassuming in the estimation of one's abilities or achievements.",
        chinese_explanation: "(B) '俗丽的' 意味着华而不实的亮丽或炫耀，通常显得没有品味。" +
            "<br><br>" +
            "(A) '有品味的' 意味着表现出良好的审美判断或适当的行为。" +
            "<br><br>" +
            "(C) '复杂的' 意味着具有、揭示或源于大量的世俗经验和对时尚和文化的了解。" +
            "<br><br>" +
            "(D) '谦虚的' 意味着对自己的能力或成就不自负的。"
    },
    {
        id: 2,
        question: "Her __________ response to the criticism surprised everyone, as she quickly turned the remark into a playful joke.",
        chinese_question: "她对批评的 __________ 回应让所有人都感到惊讶，因为她迅速把这句话变成了一个俏皮的玩笑。",
        answers: [
            { option: "A", answer: "serious", chinese_answer: "严肃的", chinese_romanization: "yánsù de" },
            { option: "B", answer: "sassy", chinese_answer: "活泼大胆的", chinese_romanization: "huópō dàdǎn de" },
            { option: "C", answer: "stern", chinese_answer: "严厉的", chinese_romanization: "yánlì de" },
            { option: "D", answer: "formal", chinese_answer: "正式的", chinese_romanization: "zhèngshì de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'sassy' means lively, bold, and full of spirit; cheeky." +
            "<br><br>" +
            "(A) 'serious' means solemn or thoughtful in character or manner." +
            "<br><br>" +
            "(C) 'stern' means serious and unrelenting, especially in the assertion of authority and exercise of discipline." +
            "<br><br>" +
            "(D) 'formal' means done in accordance with convention or etiquette; suitable for or constituting an official or important situation or occasion.",
        chinese_explanation: "(B) '活泼大胆的' 意味着活泼、大胆和充满精神的；无礼的。" +
            "<br><br>" +
            "(A) '严肃的' 意味着性格或举止庄重或严肃的。" +
            "<br><br>" +
            "(C) '严厉的' 意味着严肃和不屈不挠的，特别是在主张权威和行使纪律方面。" +
            "<br><br>" +
            "(D) '正式的' 意味着按照惯例或礼仪进行的；适合或构成正式或重要的情况或场合。"
    },
    {
        id: 3,
        question: "She was __________ to find out that her favorite restaurant had closed down unexpectedly.",
        chinese_question: "她得知她最喜欢的餐馆突然关门时感到非常 __________。",
        answers: [
            { option: "A", answer: "delighted", chinese_answer: "高兴的", chinese_romanization: "gāoxìng de" },
            { option: "B", answer: "dismayed", chinese_answer: "沮丧的", chinese_romanization: "jǔsàng de" },
            { option: "C", answer: "thrilled", chinese_answer: "兴奋的", chinese_romanization: "xīngfèn de" },
            { option: "D", answer: "overjoyed", chinese_answer: "喜出望外的", chinese_romanization: "xǐchūwàngwài de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'dismayed' means feeling distress or alarm." +
            "<br><br>" +
            "(A) 'delighted' means feeling or showing great pleasure." +
            "<br><br>" +
            "(C) 'thrilled' means feeling intense excitement." +
            "<br><br>" +
            "(D) 'overjoyed' means extremely happy.",
        chinese_explanation: "(B) '沮丧的' 意味着感到困扰或惊慌。" +
            "<br><br>" +
            "(A) '高兴的' 意味着感到或表现出极大的快乐。" +
            "<br><br>" +
            "(C) '兴奋的' 意味着感到强烈的兴奋。" +
            "<br><br>" +
            "(D) '喜出望外的' 意味着极其高兴。"
    },
    {
        id: 4,
        question: "The accident was __________, resulting in the loss of several lives and leaving the community in shock.",
        chinese_question: "这起事故是 __________ 的，导致数人丧生，使整个社区陷入震惊。",
        answers: [
            { option: "A", answer: "minor", chinese_answer: "次要的", chinese_romanization: "cìyào de" },
            { option: "B", answer: "harmless", chinese_answer: "无害的", chinese_romanization: "wúhài de" },
            { option: "C", answer: "fatal", chinese_answer: "致命的", chinese_romanization: "zhìmìng de" },
            { option: "D", answer: "insignificant", chinese_answer: "无关紧要的", chinese_romanization: "wúguān jǐnyào de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'fatal' means causing death." +
            "<br><br>" +
            "(A) 'minor' means lesser in importance, seriousness, or significance." +
            "<br><br>" +
            "(B) 'harmless' means not likely to cause harm." +
            "<br><br>" +
            "(D) 'insignificant' means too small or unimportant to be worth consideration.",
        chinese_explanation: "(C) '致命的' 意味着导致死亡的。" +
            "<br><br>" +
            "(A) '次要的' 意味着重要性、严重性或意义较小的。" +
            "<br><br>" +
            "(B) '无害的' 意味着不太可能造成伤害的。" +
            "<br><br>" +
            "(D) '无关紧要的' 意味着太小或不重要而不值得考虑的。"
    },
    {
        id: 5,
        question: "Her __________ led her to trust people too easily, often resulting in disappointment.",
        chinese_question: "她的 __________ 使她太容易信任他人，往往导致失望。",
        answers: [
            { option: "A", answer: "skepticism", chinese_answer: "怀疑", chinese_romanization: "huáiyí" },
            { option: "B", answer: "wisdom", chinese_answer: "智慧", chinese_romanization: "zhìhuì" },
            { option: "C", answer: "naïveté", chinese_answer: "天真", chinese_romanization: "tiānzhēn" },
            { option: "D", answer: "cynicism", chinese_answer: "愤世嫉俗", chinese_romanization: "fènshìjísú" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'naïveté' means lack of experience, wisdom, or judgment." +
            "<br><br>" +
            "(A) 'skepticism' means doubt as to the truth of something." +
            "<br><br>" +
            "(B) 'wisdom' means the quality of having experience, knowledge, and good judgment." +
            "<br><br>" +
            "(D) 'cynicism' means an inclination to believe that people are motivated purely by self-interest.",
        chinese_explanation: "(C) '天真' 意味着缺乏经验、智慧或判断。" +
            "<br><br>" +
            "(A) '怀疑' 意味着对某事的真实性表示怀疑。" +
            "<br><br>" +
            "(B) '智慧' 意味着具有经验、知识和良好判断力的品质。" +
            "<br><br>" +
            "(D) '愤世嫉俗' 意味着倾向于相信人们纯粹出于自利动机。"
    },
    {
        id: 6,
    question: "Her __________ remarks during the cultural festival were seen as disrespectful and inappropriate.",
    chinese_question: "她在文化节上的 __________ 言论被认为是不尊重和不恰当的。",
    answers: [
        { option: "A", answer: "respectful", chinese_answer: "尊敬的", chinese_romanization: "zūnjìng de" },
        { option: "B", answer: "reverent", chinese_answer: "虔诚的", chinese_romanization: "qiánchéng de" },
        { option: "C", answer: "admiring", chinese_answer: "钦佩的", chinese_romanization: "qīnpèi de" },
        { option: "D", answer: "profane", chinese_answer: "亵渎的", chinese_romanization: "xièdú de" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'profane' means showing contempt toward sacred things; irreverent." +
        "<br><br>" +
        "(A) 'respectful' means feeling or showing deference and respect." +
        "<br><br>" +
        "(B) 'reverent' means feeling or showing deep and solemn respect." +
        "<br><br>" +
        "(C) 'admiring' means regarding with respect or warm approval.",
    chinese_explanation: "(D) '亵渎的' 意味着对神圣事物表现出蔑视；不敬的。" +
        "<br><br>" +
        "(A) '尊敬的' 意味着感到或表现出敬意和尊重的。" +
        "<br><br>" +
        "(B) '虔诚的' 意味着感到或表现出深刻和庄重的尊敬。" +
        "<br><br>" +
        "(C) '钦佩的' 意味着以尊敬或热情的批准看待。"
    },
    {
        id: 7,
        question: "In an __________ plea for help, the villagers gathered to discuss the approaching storm.",
        chinese_question: "在 __________ 的求助中，村民们聚集在一起讨论即将到来的风暴。",
        answers: [
            { option: "A", answer: "relaxed", chinese_answer: "放松的", chinese_romanization: "fàngsōng de" },
            { option: "B", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mòbùguānxīn de" },
            { option: "C", answer: "urgent", chinese_answer: "紧急的", chinese_romanization: "jǐnjí de" },
            { option: "D", answer: "mild", chinese_answer: "温和的", chinese_romanization: "wēnhé de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'urgent' means requiring immediate action or attention." +
            "<br><br>" +
            "(A) 'relaxed' means free from tension and anxiety." +
            "<br><br>" +
            "(B) 'indifferent' means having no particular interest or sympathy." +
            "<br><br>" +
            "(D) 'mild' means not severe, serious, or harsh.",
        chinese_explanation: "(C) '紧急的' 意味着需要立即行动或关注的。" +
            "<br><br>" +
            "(A) '放松的' 意味着没有紧张和焦虑的。" +
            "<br><br>" +
            "(B) '漠不关心的' 意味着没有特别的兴趣或同情的。" +
            "<br><br>" +
            "(D) '温和的' 意味着不严重、不激烈或不苛刻的。"
    },
    {
        id: 8,
        question: "The __________ storm caused widespread damage and left many areas without power.",
        chinese_question: "这场__________的风暴造成了广泛的破坏，许多地区断电。",
        answers: [
            { option: "A", answer: "mild", chinese_answer: "温和的", chinese_romanization: "wēnhé de" },
            { option: "B", answer: "gentle", chinese_answer: "温柔的", chinese_romanization: "wēnróu de" },
            { option: "C", answer: "severe", chinese_answer: "严重的", chinese_romanization: "yánzhòng de" },
            { option: "D", answer: "weak", chinese_answer: "虚弱的", chinese_romanization: "xūruò de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'severe' means (of something bad or undesirable) very great; intense." +
            "<br><br>" +
            "(A) 'mild' means not severe, serious, or harsh." +
            "<br><br>" +
            "(B) 'gentle' means having or showing a mild, kind, or tender temperament or character." +
            "<br><br>" +
            "(D) 'weak' means lacking the power to perform physically demanding tasks; lacking physical strength and energy.",
        chinese_explanation: "(C) '严重的'一词意味着（某事坏的或不受欢迎的）非常大的；强烈的。" +
            "<br><br>" +
            "(A) '温和的' 意味着不严重、严重或严厉的。" +
            "<br><br>" +
            "(B) '温柔的' 意味着具有或表现出温和、善良或温柔的性格。" +
            "<br><br>" +
            "(D) '虚弱的' 意味着缺乏执行体力任务的力量；缺乏体力和精力。"
    },
    {
        id: 9,
        question: "The __________ structure of the tent couldn't withstand the strong winds and collapsed quickly.",
        chinese_question: "帐篷的 __________ 结构无法承受强风，很快倒塌了。",
        answers: [
            { option: "A", answer: "sturdy", chinese_answer: "结实", chinese_romanization: "jiēshi" },
            { option: "B", answer: "solid", chinese_answer: "坚固", chinese_romanization: "jiāngù" },
            { option: "C", answer: "flimsy", chinese_answer: "脆弱", chinese_romanization: "cuìruò" },
            { option: "D", answer: "durable", chinese_answer: "耐用", chinese_romanization: "nàiyòng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'flimsy' means comparatively light and insubstantial; easily damaged." +
            "<br><br>" +
            "(A) 'sturdy' means strongly and solidly built." +
            "<br><br>" +
            "(B) 'solid' means firm and stable in shape; not liquid or fluid." +
            "<br><br>" +
            "(D) 'durable' means able to withstand wear, pressure, or damage; hard-wearing.",
        chinese_explanation: "(C) '脆弱' 意味着比较轻和不重要；容易损坏。" +
            "<br><br>" +
            "(A) '结实' 意味着坚固而牢固地建造。" +
            "<br><br>" +
            "(B) '坚固' 意味着形状牢固和稳定；不是液体或流体。" +
            "<br><br>" +
            "(D) '耐用' 意味着能够承受磨损、压力或损坏；耐磨的。"
    },
    {
        id: 10,
    question: "His __________ gesture of donating a large sum to the charity earned him widespread admiration.",
    chinese_question: "他 __________ 的捐赠巨款给慈善机构的举动赢得了广泛的赞赏。",
    answers: [
        { option: "A", answer: "selfish", chinese_answer: "自私的", chinese_romanization: "zìsī de" },
        { option: "B", answer: "magnanimous", chinese_answer: "宽宏大量的", chinese_romanization: "kuānhóngdàliàng de" },
        { option: "C", answer: "stingy", chinese_answer: "吝啬的", chinese_romanization: "lìnsè de" },
        { option: "D", answer: "greedy", chinese_answer: "贪婪的", chinese_romanization: "tānlán de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'magnanimous' means very generous or forgiving, especially toward a rival or someone less powerful." +
        "<br><br>" +
        "(A) 'selfish' means lacking consideration for others; concerned chiefly with one's own personal profit or pleasure." +
        "<br><br>" +
        "(C) 'stingy' means unwilling to give or spend; ungenerous." +
        "<br><br>" +
        "(D) 'greedy' means having an excessive desire or appetite for food, wealth, or power.",
    chinese_explanation: "(B) '宽宏大量的' 意味着非常慷慨或宽容的，尤其是对竞争对手或权力较小的人。" +
        "<br><br>" +
        "(A) '自私的' 意味着缺乏对他人的考虑；主要关心自己的个人利益或快乐。" +
        "<br><br>" +
        "(C) '吝啬的' 意味着不愿给予或花费；不慷慨的。" +
        "<br><br>" +
        "(D) '贪婪的' 意味着对食物、财富或权力有过度的渴望或欲望。"
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

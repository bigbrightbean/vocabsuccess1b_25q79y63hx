// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The rare bird was so __________ that even experienced birdwatchers had trouble spotting it.",
    chinese_question: "这种稀有的鸟非常__________，即使是有经验的观鸟者也很难发现它。",
    answers: [
        { option: "A", answer: "obvious", chinese_answer: "明显的", chinese_romanization: "míngxiǎn de" },
        { option: "B", answer: "clear", chinese_answer: "清楚的", chinese_romanization: "qīngchǔ de" },
        { option: "C", answer: "elusive", chinese_answer: "难以捉摸的", chinese_romanization: "nányǐ zhuōmō de" },
        { option: "D", answer: "evident", chinese_answer: "明显的", chinese_romanization: "míngxiǎn de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'elusive' means difficult to find, catch, or achieve." +
        "<br><br>" +
        "(A) 'obvious' means easily perceived or understood; clear, self-evident, or apparent." +
        "<br><br>" +
        "(B) 'clear' means easy to perceive, understand, or interpret." +
        "<br><br>" +
        "(D) 'evident' means clearly seen or understood; obvious.",
    chinese_explanation: "(C) '难以捉摸的' 一词意味着难以找到、捕捉或实现的。" +
        "<br><br>" +
        "(A) '明显的' 意味着容易被感知或理解的；清晰的，自明的或显而易见的。" +
        "<br><br>" +
        "(B) '清楚的' 意味着容易感知、理解或解释的。" +
        "<br><br>" +
        "(D) '明显的' 意味着清楚地看到或理解的；明显的。"
    },
    {
        id: 2,
    question: "The __________ divide in opinions has made it hard to reach a consensus.",
    chinese_question: "意见之间的__________分歧使得达成共识变得困难。",
    answers: [
        { option: "A", answer: "narrowing", chinese_answer: "缩小的", chinese_romanization: "suōxiǎo de" },
        { option: "B", answer: "widening", chinese_answer: "扩大的", chinese_romanization: "kuòdà de" },
        { option: "C", answer: "reducing", chinese_answer: "减少的", chinese_romanization: "jiǎnshǎo de" },
        { option: "D", answer: "closing", chinese_answer: "结束的", chinese_romanization: "jiéshù de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'widening' means becoming larger in distance from side to side; expanding." +
        "<br><br>" +
        "(A) 'narrowing' means becoming smaller in width or extent." +
        "<br><br>" +
        "(C) 'reducing' means making smaller or less in amount, degree, or size." +
        "<br><br>" +
        "(D) 'closing' means bringing or coming to an end.",
    chinese_explanation: "(B) '扩大的' 一词意味着从一侧到另一侧的距离变大；扩展的。" +
        "<br><br>" +
        "(A) '缩小的' 意味着在宽度或范围上变小的。" +
        "<br><br>" +
        "(C) '减少的' 意味着在数量、程度或大小上变小的。" +
        "<br><br>" +
        "(D) '结束的' 意味着使结束或走到尽头。"
    },
    {
        id: 3,
        question: "The __________ package was difficult to carry through the narrow hallway.",
        chinese_question: "这个 __________ 的包裹很难通过狭窄的走廊。",
        answers: [
            { option: "A", answer: "light", chinese_answer: "轻", chinese_romanization: "qīng" },
            { option: "B", answer: "compact", chinese_answer: "紧凑", chinese_romanization: "jǐncòu" },
            { option: "C", answer: "bulky", chinese_answer: "笨重", chinese_romanization: "bènzhòng" },
            { option: "D", answer: "small", chinese_answer: "小", chinese_romanization: "xiǎo" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'bulky' means taking up much space, typically large and unwieldy." +
            "<br><br>" +
            "(A) 'light' means not heavy." +
            "<br><br>" +
            "(B) 'compact' means small and efficiently arranged." +
            "<br><br>" +
            "(D) 'small' means of a size that is less than normal or usual.",
        chinese_explanation: "(C) '笨重' 意味着占用很多空间，通常是大而笨拙的。" +
            "<br><br>" +
            "(A) '轻' 意味着不重。" +
            "<br><br>" +
            "(B) '紧凑' 意味着小而布局紧凑。" +
            "<br><br>" +
            "(D) '小' 意味着大小小于正常或通常。"
    },
    {
        id: 4,
        question: "The factory had to recall the batch of toys because they were found to be __________.",
        chinese_question: "工厂不得不召回这一批玩具，因为发现它们是 __________ 的。",
        answers: [
            { option: "A", answer: "perfect", chinese_answer: "完美", chinese_romanization: "wánměi" },
            { option: "B", answer: "innovative", chinese_answer: "创新", chinese_romanization: "chuàngxīn" },
            { option: "C", answer: "defective", chinese_answer: "有缺陷", chinese_romanization: "yǒu quēxiàn" },
            { option: "D", answer: "popular", chinese_answer: "受欢迎", chinese_romanization: "shòu huānyíng" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'defective' means having a flaw or weakness; imperfect." +
            "<br><br>" +
            "(A) 'perfect' means having all the required elements, qualities, or characteristics." +
            "<br><br>" +
            "(B) 'innovative' means featuring new methods; advanced and original." +
            "<br><br>" +
            "(D) 'popular' means liked or admired by many people.",
        chinese_explanation: "(C) '有缺陷' 意味着有缺陷或弱点；不完美。" +
            "<br><br>" +
            "(A) '完美' 意味着具有所有必需的元素、品质或特征。" +
            "<br><br>" +
            "(B) '创新' 意味着采用新方法；先进和原始。" +
            "<br><br>" +
            "(D) '受欢迎' 意味着被许多人喜欢或钦佩。"
    },
    {
        id: 5,
        question: "The chef's new dish was __________ to all the guests, receiving compliments throughout the evening.",
        chinese_question: "厨师的新菜肴让所有的客人都感到 __________ ，整晚都收到了赞美。",
        answers: [
            { option: "A", answer: "palatable", chinese_answer: "美味", chinese_romanization: "měiwèi" },
            { option: "B", answer: "bland", chinese_answer: "平淡", chinese_romanization: "píngdàn" },
            { option: "C", answer: "unappetizing", chinese_answer: "不可口", chinese_romanization: "bù kěkǒu" },
            { option: "D", answer: "repulsive", chinese_answer: "令人厌恶", chinese_romanization: "lìng rén yànwù" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'palatable' means pleasant to taste." +
            "<br><br>" +
            "(B) 'bland' means lacking strong features or characteristics and therefore uninteresting." +
            "<br><br>" +
            "(C) 'unappetizing' means not inviting or attractive; unappealing." +
            "<br><br>" +
            "(D) 'repulsive' means arousing intense distaste or disgust.",
        chinese_explanation: "(A) '美味' 意味着令人愉快的味道。" +
            "<br><br>" +
            "(B) '平淡' 意味着缺乏强烈特征或特点，因此没有趣。" +
            "<br><br>" +
            "(C) '不可口' 意味着不吸引人或不吸引人；不吸引人。" +
            "<br><br>" +
            "(D) '令人厌恶' 意味着引起强烈的反感或厌恶。"
    },
    {
        id: 6,
        question: "He felt __________ during the meeting because he didn't know anyone and didn't understand the topic.",
        chinese_question: "在会议上，他感到很 __________，因为他不认识任何人，也不理解主题。",
        answers: [
            { option: "A", answer: "comfortable", chinese_answer: "舒服的", chinese_romanization: "shūfú de" },
            { option: "B", answer: "relaxed", chinese_answer: "放松的", chinese_romanization: "fàngsōng de" },
            { option: "C", answer: "awkward", chinese_answer: "尴尬的", chinese_romanization: "gāngà de" },
            { option: "D", answer: "confident", chinese_answer: "自信的", chinese_romanization: "zìxìn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'awkward' means causing difficulty; hard to deal with; uncomfortable." +
            "<br><br>" +
            "(A) 'comfortable' means providing physical ease and relaxation." +
            "<br><br>" +
            "(B) 'relaxed' means free from tension and anxiety." +
            "<br><br>" +
            "(D) 'confident' means feeling or showing confidence in oneself; self-assured.",
        chinese_explanation: "(C) '尴尬的' 意味着造成困难；难以处理；不舒服的。" +
            "<br><br>" +
            "(A) '舒服的' 意味着提供身体上的舒适和放松。" +
            "<br><br>" +
            "(B) '放松的' 意味着没有紧张和焦虑。" +
            "<br><br>" +
            "(D) '自信的' 意味着对自己有信心或表现出自信；自信的。"
    },
    {
        id: 7,
        question: "She was __________ for planning the entire event and making sure everything was perfect.",
        chinese_question: "她 __________ 计划整个活动，并确保一切都完美无缺。",
        answers: [
            { option: "A", answer: "uninterested", chinese_answer: "不感兴趣的", chinese_romanization: "bù gǎn xìngqù de" },
            { option: "B", answer: "responsible", chinese_answer: "负责的", chinese_romanization: "fùzé de" },
            { option: "C", answer: "distracted", chinese_answer: "分心的", chinese_romanization: "fēn xīn de" },
            { option: "D", answer: "negligent", chinese_answer: "疏忽的", chinese_romanization: "shūhū de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'responsible' means having an obligation to do something, or having control over or care for someone, as part of one's job or role." +
            "<br><br>" +
            "(A) 'uninterested' means not interested in or concerned about something or someone." +
            "<br><br>" +
            "(C) 'distracted' means unable to concentrate because one is preoccupied by something worrying or unpleasant." +
            "<br><br>" +
            "(D) 'negligent' means failing to take proper care in doing something.",
        chinese_explanation: "(B) '负责的' 意味着有义务做某事，或在工作或角色的一部分中控制或照顾某人。" +
            "<br><br>" +
            "(A) '不感兴趣的' 意味着对某事或某人不感兴趣或不关心。" +
            "<br><br>" +
            "(C) '分心的' 意味着无法集中注意力，因为某件令人担忧或不愉快的事情使人分心。" +
            "<br><br>" +
            "(D) '疏忽的' 意味着未能适当照顾。"
    },
    {
        id: 8,
        question: "The book provides __________ commentary on the social issues of our time, by analyzing the root causes and offering solutions that nobody else had considered.",
        chinese_question: "这本书通过分析根本原因并提出其他人未曾考虑过的解决方案，对当代社会问题提供了 __________ 的评论。",
        answers: [
            { option: "A", answer: "shallow", chinese_answer: "浅显", chinese_romanization: "qiǎnxiǎn" },
            { option: "B", answer: "dull", chinese_answer: "无聊", chinese_romanization: "wúliáo" },
            { option: "C", answer: "insightful", chinese_answer: "深刻", chinese_romanization: "shēnkè" },
            { option: "D", answer: "irrelevant", chinese_answer: "无关", chinese_romanization: "wúguān" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'insightful' means having or showing an accurate and deep understanding." +
            "<br><br>" +
            "(A) 'shallow' means not deep; lacking depth of understanding." +
            "<br><br>" +
            "(B) 'dull' means lacking interest or excitement." +
            "<br><br>" +
            "(D) 'irrelevant' means not connected with or relevant to something.",
        chinese_explanation: "(C) '深刻' 意味着具有或表现出准确而深刻的理解。" +
            "<br><br>" +
            "(A) '浅显' 意味着不深入；缺乏深度理解。" +
            "<br><br>" +
            "(B) '无聊' 意味着缺乏兴趣或兴奋。" +
            "<br><br>" +
            "(D) '无关' 意味着与某事无关。"
    },
    {
        id: 9,
    question: "The complex instructions left the students __________ and unsure of what to do next.",
    chinese_question: "复杂的指示让学生们感到__________，不确定接下来该做什么。",
    answers: [
        { option: "A", answer: "clear", chinese_answer: "清晰的", chinese_romanization: "qīngxī de" },
        { option: "B", answer: "befuddled", chinese_answer: "困惑的", chinese_romanization: "kùnhuò de" },
        { option: "C", answer: "understanding", chinese_answer: "理解的", chinese_romanization: "lǐjiě de" },
        { option: "D", answer: "knowledgeable", chinese_answer: "知识渊博的", chinese_romanization: "zhīshí yuānbó de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'befuddled' means unable to think clearly; confused." +
        "<br><br>" +
        "(A) 'clear' means easy to perceive, understand, or interpret." +
        "<br><br>" +
        "(C) 'understanding' means sympathetically aware of other people's feelings; tolerant and forgiving." +
        "<br><br>" +
        "(D) 'knowledgeable' means intelligent and well informed.",
    chinese_explanation: "(B) '困惑的' 一词意味着无法清晰思考；困惑的。" +
        "<br><br>" +
        "(A) '清晰的' 意味着容易感知、理解或解释。" +
        "<br><br>" +
        "(C) '理解的' 意味着同情地意识到他人的感受；宽容和原谅的。" +
        "<br><br>" +
        "(D) '知识渊博的' 意味着聪明且知识渊博的。"
    },
    {
        id: 10,
        question: "The comedian's jokes about the national anthem were seen as __________ by many.",
        chinese_question: "许多人认为那位喜剧演员关于国歌的笑话是 __________ 的。",
        answers: [
            { option: "A", answer: "reverent", chinese_answer: "虔诚的", chinese_romanization: "qiánchéng de" },
            { option: "B", answer: "sacrilegious", chinese_answer: "亵渎的", chinese_romanization: "xièdú de" },
            { option: "C", answer: "respectful", chinese_answer: "尊敬的", chinese_romanization: "zūnjìng de" },
            { option: "D", answer: "honorable", chinese_answer: "可敬的", chinese_romanization: "kě jìng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'sacrilegious' means showing disrespect or violation of something considered sacred." +
            "<br><br>" +
            "(A) 'reverent' means feeling or showing deep and solemn respect." +
            "<br><br>" +
            "(C) 'respectful' means feeling or showing deference and respect." +
            "<br><br>" +
            "(D) 'honorable' means bringing or worthy of honor.",
        chinese_explanation: "(B) '亵渎的' 意味着对被视为神圣的事物表现出不尊重或侵犯。" +
            "<br><br>" +
            "(A) '虔诚的' 意味着感到或表现出深刻和庄严的尊重。" +
            "<br><br>" +
            "(C) '尊敬的' 意味着感到或表现出敬意和尊重的。" +
            "<br><br>" +
            "(D) '可敬的' 意味着带来或值得尊重的。"
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

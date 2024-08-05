// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The new policy is __________ and may cause more issues than it solves.",
        chinese_question: "新政策是 __________ 的，可能会引发更多问题而不是解决问题。",
        answers: [
            { option: "A", answer: "effective", chinese_answer: "有效的", chinese_romanization: "yǒuxiào de" },
            { option: "B", answer: "clear", chinese_answer: "清晰的", chinese_romanization: "qīngxī de" },
            { option: "C", answer: "problematic", chinese_answer: "有问题的", chinese_romanization: "yǒu wèntí de" },
            { option: "D", answer: "simple", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'problematic' means constituting or presenting a problem or difficulty." +
            "<br><br>" +
            "(A) 'effective' means successful in producing a desired or intended result." +
            "<br><br>" +
            "(B) 'clear' means easy to perceive, understand, or interpret." +
            "<br><br>" +
            "(D) 'simple' means easily understood or done; presenting no difficulty.",
        chinese_explanation: "(C) '有问题的' 意味着构成或呈现问题或困难的。" +
            "<br><br>" +
            "(A) '有效的' 意味着成功地产生预期或意图的结果的。" +
            "<br><br>" +
            "(B) '清晰的' 意味着容易感知、理解或解释的。" +
            "<br><br>" +
            "(D) '简单的' 意味着容易理解或完成的；没有难度的。"
    },
    {
        id: 2,
        question: "The construction of the Great Wall of China was a __________ achievement, requiring the efforts of thousands of workers over many years.",
        chinese_question: "建造中国的长城是一项 __________ 的成就，需要成千上万工人多年的努力。",
        answers: [
            { option: "A", answer: "trivial", chinese_answer: "微不足道的", chinese_romanization: "wēibùzúdào de" },
            { option: "B", answer: "minor", chinese_answer: "次要的", chinese_romanization: "cìyào de" },
            { option: "C", answer: "monumental", chinese_answer: "巨大的", chinese_romanization: "jùdà de" },
            { option: "D", answer: "insignificant", chinese_answer: "不重要的", chinese_romanization: "bù zhòngyào de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'monumental' means great in importance, extent, or size." +
            "<br><br>" +
            "(A) 'trivial' means of little value or importance." +
            "<br><br>" +
            "(B) 'minor' means lesser in importance, seriousness, or significance." +
            "<br><br>" +
            "(D) 'insignificant' means too small or unimportant to be worth consideration.",
        chinese_explanation: "(C) '巨大的' 意味着在重要性、范围或规模上非常大的。" +
            "<br><br>" +
            "(A) '微不足道的' 意味着价值或重要性很小的。" +
            "<br><br>" +
            "(B) '次要的' 意味着重要性、严重性或意义较小的。" +
            "<br><br>" +
            "(D) '不重要的' 意味着太小或不重要而不值得考虑的。"
    },
    {
        id: 3,
        question: "Despite the festive atmosphere, he remained __________, unable to shake off his worries.",
        chinese_question: "尽管气氛欢快，他依然 __________，无法摆脱心中的忧虑。",
        answers: [
            { option: "A", answer: "elated", chinese_answer: "兴高采烈的", chinese_romanization: "xìnggāocǎiliè de" },
            { option: "B", answer: "glum", chinese_answer: "闷闷不乐的", chinese_romanization: "mènmènbùlè de" },
            { option: "C", answer: "upbeat", chinese_answer: "乐观的", chinese_romanization: "lèguān de" },
            { option: "D", answer: "jovial", chinese_answer: "快乐的", chinese_romanization: "kuàilè de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'glum' means looking or feeling dejected; morose." +
            "<br><br>" +
            "(A) 'elated' means very happy or proud; in high spirits." +
            "<br><br>" +
            "(C) 'upbeat' means cheerful and optimistic." +
            "<br><br>" +
            "(D) 'jovial' means cheerful and friendly.",
        chinese_explanation: "(B) '闷闷不乐的' 意味着看起来或感觉沮丧；郁郁寡欢的。" +
            "<br><br>" +
            "(A) '兴高采烈的' 意味着非常快乐或自豪；精神振奋的。" +
            "<br><br>" +
            "(C) '乐观的' 意味着快乐和乐观的。" +
            "<br><br>" +
            "(D) '快乐的' 意味着愉快和友好的。",
    },
    {
        id: 4,
        question: "The weather was perfect for a picnic, with clear blue skies and __________, warm rays that made everyone feel cheerful.",
        chinese_question: "天气非常适合野餐，天空湛蓝，阳光 __________，温暖的阳光让每个人都感到愉快。",
        answers: [
            { option: "A", answer: "sunny", chinese_answer: "晴朗的", chinese_romanization: "qínglǎng de" },
            { option: "B", answer: "cloudy", chinese_answer: "多云的", chinese_romanization: "duōyún de" },
            { option: "C", answer: "rainy", chinese_answer: "下雨的", chinese_romanization: "xiàyǔ de" },
            { option: "D", answer: "overcast", chinese_answer: "阴天的", chinese_romanization: "yīntiān de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'sunny' means bright with sunlight." +
            "<br><br>" +
            "(B) 'cloudy' means covered with or characterized by clouds." +
            "<br><br>" +
            "(C) 'rainy' means marked by or having frequent rain." +
            "<br><br>" +
            "(D) 'overcast' means covered with clouds; dull.",
        chinese_explanation: "(A) '晴朗的' 意味着阳光明媚的。" +
            "<br><br>" +
            "(B) '多云的' 意味着被云覆盖或具有云层特征的。" +
            "<br><br>" +
            "(C) '下雨的' 意味着频繁下雨的。" +
            "<br><br>" +
            "(D) '阴天的' 意味着被云层覆盖的；阴沉的。",
    },
    {
        id: 5,
        question: "The garden was filled with __________ flowers of various colors, attracting many visitors.",
        chinese_question: "花园里满是各种颜色的 __________ 花，吸引了许多游客。",
        answers: [
            { option: "A", answer: "unattractive", chinese_answer: "不吸引人的", chinese_romanization: "bù xīyǐn rén de" },
            { option: "B", answer: "plain", chinese_answer: "朴素的", chinese_romanization: "pǔsù de" },
            { option: "C", answer: "dull", chinese_answer: "无趣的", chinese_romanization: "wúqù de" },
            { option: "D", answer: "attractive", chinese_answer: "吸引人的", chinese_romanization: "xīyǐn rén de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'attractive' means pleasing or appealing to the senses." +
            "<br><br>" +
            "(A) 'unattractive' means not pleasing or appealing to look at." +
            "<br><br>" +
            "(B) 'plain' means simple or ordinary in character." +
            "<br><br>" +
            "(C) 'dull' means lacking interest or excitement.",
        chinese_explanation: "(D) '吸引人的' 意味着让感官愉悦或吸引人的。" +
            "<br><br>" +
            "(A) '不吸引人的' 意味着看起来不悦目或没有吸引力。" +
            "<br><br>" +
            "(B) '朴素的' 意味着简单或普通的。" +
            "<br><br>" +
            "(C) '无趣的' 意味着缺乏兴趣或兴奋。"
    },
    {
        id: 6,
    question: "The old photographs were __________ of their childhood summers spent by the lake.",
    chinese_question: "这些旧照片让人__________起他们在湖边度过的童年夏天。",
    answers: [
        { option: "A", answer: "forgetful", chinese_answer: "健忘的", chinese_romanization: "jiànwàng de" },
        { option: "B", answer: "reminiscent", chinese_answer: "怀旧的", chinese_romanization: "huáijiù de" },
        { option: "C", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
        { option: "D", answer: "oblivious", chinese_answer: "无意识的", chinese_romanization: "wú yìshí de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'reminiscent' means tending to remind one of something." +
        "<br><br>" +
        "(A) 'forgetful' means apt or likely to forget." +
        "<br><br>" +
        "(C) 'indifferent' means having no particular interest or sympathy; unconcerned." +
        "<br><br>" +
        "(D) 'oblivious' means not aware of or not concerned about what is happening around one.",
    chinese_explanation: "(B) '怀旧的' 一词意味着让人想起某事。" +
        "<br><br>" +
        "(A) '健忘的' 意味着容易或可能忘记的。" +
        "<br><br>" +
        "(C) '冷漠的' 意味着没有特别的兴趣或同情；不关心的。" +
        "<br><br>" +
        "(D) '无意识的' 意味着没有意识到或不关心周围发生的事情。"
    },
    {
        id: 7,
        question: "In literature, the name Shakespeare is __________ with great storytelling and masterful use of language.",
        chinese_question: "在文学中，莎士比亚这个名字与伟大的故事讲述和精湛的语言运用 __________ 。",
        answers: [
            { option: "A", answer: "synonymous", chinese_answer: "同义的", chinese_romanization: "tóngyì de" },
            { option: "B", answer: "unfamiliar", chinese_answer: "不熟悉的", chinese_romanization: "bù shúxī de" },
            { option: "C", answer: "obscure", chinese_answer: "模糊的", chinese_romanization: "móhú de" },
            { option: "D", answer: "anonymous", chinese_answer: "匿名的", chinese_romanization: "nìmíng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'synonymous' means having the same meaning as another word or phrase, often used to indicate that two things are so closely related that one suggests the other." +
            "<br><br>" +
            "(B) 'unfamiliar' means not known or recognized, something that is new or strange to someone." +
            "<br><br>" +
            "(C) 'obscure' means not clearly seen or understood; something that is hidden or hard to find out about." +
            "<br><br>" +
            "(D) 'anonymous' means not identified by name; someone whose name is not known.",
        chinese_explanation: "(A) '同义的' 意味着与另一个词或短语具有相同的意思，通常用来表示两者之间关系密切，以至于一个词可以联想到另一个。" +
            "<br><br>" +
            "(B) '不熟悉的' 意味着不被知道或认出的，某些东西对某人来说是新奇或陌生的。" +
            "<br><br>" +
            "(C) '模糊的' 意味着不清楚或难以理解的；一些隐藏或难以找到的东西。" +
            "<br><br>" +
            "(D) '匿名的' 意味着没有被名字识别的；名字不为人知的。"
    },
    {
        id: 8,
    question: "His __________ fashion sense made him stand out in any crowd, always wearing bright colors and unique accessories.",
    chinese_question: "他 __________ 的时尚品味使他在人群中脱颖而出，总是穿着亮丽的颜色和独特的配饰。",
    answers: [
        { option: "A", answer: "conventional", chinese_answer: "传统的", chinese_romanization: "chuántǒng de" },
        { option: "B", answer: "traditional", chinese_answer: "传统的", chinese_romanization: "chuántǒng de" },
        { option: "C", answer: "eccentric", chinese_answer: "古怪的", chinese_romanization: "gǔguài de" },
        { option: "D", answer: "normal", chinese_answer: "正常的", chinese_romanization: "zhèngcháng de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'eccentric' means (of a person or their behavior) unconventional and slightly strange." +
        "<br><br>" +
        "(A) 'conventional' means based on or in accordance with what is generally done or believed." +
        "<br><br>" +
        "(B) 'traditional' means existing in or as part of a tradition; long-established." +
        "<br><br>" +
        "(D) 'normal' means conforming to a standard; usual, typical, or expected.",
    chinese_explanation: "(C) '古怪的' 意味着（一个人或他们的行为）不寻常和略微奇怪的。" +
        "<br><br>" +
        "(A) '传统的' 意味着根据或符合通常的做法或信仰的。" +
        "<br><br>" +
        "(B) '传统的' 意味着作为传统存在的；长期建立的。" +
        "<br><br>" +
        "(D) '正常的' 意味着符合标准的；通常的、典型的或预期的。"
    },
    {
        id: 9,
    question: "She was highly __________, holding multiple degrees from prestigious universities.",
    chinese_question: "她受过高等__________，拥有多所著名大学的学位。",
    answers: [
        { option: "A", answer: "ignorant", chinese_answer: "无知的", chinese_romanization: "wúzhī de" },
        { option: "B", answer: "educated", chinese_answer: "受过教育的", chinese_romanization: "shòuguò jiàoyù de" },
        { option: "C", answer: "unlearned", chinese_answer: "无学识的", chinese_romanization: "wú xuéshí de" },
        { option: "D", answer: "uninformed", chinese_answer: "不知情的", chinese_romanization: "bù zhīqíng de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'educated' means having received education, especially to a high level." +
        "<br><br>" +
        "(A) 'ignorant' means lacking knowledge or awareness in general; uneducated or unsophisticated." +
        "<br><br>" +
        "(C) 'unlearned' means not educated; unschooled." +
        "<br><br>" +
        "(D) 'uninformed' means not having or showing awareness or understanding of the facts.",
    chinese_explanation: "(B) '受过教育的' 一词意味着接受过教育，尤其是高等教育。" +
        "<br><br>" +
        "(A) '无知的' 意味着普遍缺乏知识或意识；未受教育或不成熟的。" +
        "<br><br>" +
        "(C) '无学识的' 意味着未受教育的；未上学的。" +
        "<br><br>" +
        "(D) '不知情的' 意味着没有或未表现出事实的意识或理解。"
    },
    {
        id: 10,
        question: "After careful analysis, the scientists concluded that it was __________ to develop a vaccine within a year, and that they could achieve this by leveraging existing research and technologies.",
        chinese_question: "经过仔细分析，科学家们得出结论，在一年内开发出疫苗是__________的，并且他们可以通过利用现有的研究和技术来实现这一目标。",
        answers: [
            { option: "A", answer: "impractical", chinese_answer: "不切实际的", chinese_romanization: "bù qiè shíjì de" },
            { option: "B", answer: "feasible", chinese_answer: "可行的", chinese_romanization: "kěxíng de" },
            { option: "C", answer: "unlikely", chinese_answer: "不大可能的", chinese_romanization: "bù dà kěnéng de" },
            { option: "D", answer: "impossible", chinese_answer: "不可能的", chinese_romanization: "bù kěnéng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'feasible' means possible to do easily or conveniently." +
            "<br><br>" +
            "(A) 'impractical' means not adapted for use or action; not sensible." +
            "<br><br>" +
            "(C) 'unlikely' means not likely to happen, be done, or be true." +
            "<br><br>" +
            "(D) 'impossible' means not able to occur, exist, or be done.",
        chinese_explanation: "(B) '可行的' 意味着容易或方便地完成的。" +
            "<br><br>" +
            "(A) '不切实际的' 意味着不适合使用或行动的；不明智的。" +
            "<br><br>" +
            "(C) '不大可能的' 意味着不可能发生、完成或是真实的。" +
            "<br><br>" +
            "(D) '不可能的' 意味着不能发生、存在或完成的。"
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

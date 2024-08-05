// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The students were __________ during the ceremony, listening quietly and attentively to the speakers.",
        chinese_question: "学生们在仪式上表现得很 __________，安静而专心地听着演讲者。",
        answers: [
            { option: "A", answer: "disrespectful", chinese_answer: "无礼的", chinese_romanization: "wúlǐ de" },
            { option: "B", answer: "rowdy", chinese_answer: "吵闹的", chinese_romanization: "chǎonào de" },
            { option: "C", answer: "respectful", chinese_answer: "尊敬的", chinese_romanization: "zūnjìng de" },
            { option: "D", answer: "noisy", chinese_answer: "喧闹的", chinese_romanization: "xuānnào de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'respectful' means feeling or showing deference and respect." +
            "<br><br>" +
            "(A) 'disrespectful' means showing a lack of respect or courtesy." +
            "<br><br>" +
            "(B) 'rowdy' means noisy and disorderly." +
            "<br><br>" +
            "(D) 'noisy' means making or given to making a lot of noise.",
        chinese_explanation: "(C) '尊敬的' 意味着感到或表现出敬意和尊重的。" +
            "<br><br>" +
            "(A) '无礼的' 意味着表现出缺乏尊重或礼貌的。" +
            "<br><br>" +
            "(B) '吵闹的' 意味着喧闹和无序的。" +
            "<br><br>" +
            "(D) '喧闹的' 意味着制造很多噪音的。"
    },
    {
        id: 2,
        question: "His __________ attitude made it difficult for him to forgive those who had wronged him.",
        chinese_question: "他的 __________ 态度使他难以原谅那些伤害过他的人。",
        answers: [
            { option: "A", answer: "forgiving", chinese_answer: "宽恕的", chinese_romanization: "kuānshù de" },
            { option: "B", answer: "kind", chinese_answer: "善良的", chinese_romanization: "shànliáng de" },
            { option: "C", answer: "vindictive", chinese_answer: "报复性的", chinese_romanization: "bàofù xìng de" },
            { option: "D", answer: "compassionate", chinese_answer: "有同情心的", chinese_romanization: "yǒu tóngqíng xīn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'vindictive' means having or showing a strong or unreasoning desire for revenge." +
            "<br><br>" +
            "(A) 'forgiving' means ready and willing to forgive." +
            "<br><br>" +
            "(B) 'kind' means having or showing a friendly, generous, and considerate nature." +
            "<br><br>" +
            "(D) 'compassionate' means feeling or showing sympathy and concern for others.",
        chinese_explanation: "(C) '报复性的' 意味着有或表现出强烈或不理智的复仇欲望的。" +
            "<br><br>" +
            "(A) '宽恕的' 意味着准备好并愿意宽恕的。" +
            "<br><br>" +
            "(B) '善良的' 意味着有或表现出友好、慷慨和体贴的性格。" +
            "<br><br>" +
            "(D) '有同情心的' 意味着感到或表现出对他人的同情和关心。"
    },
    {
        id: 3,
        question: "He enjoyed taking __________ walks in the woods, finding peace in the quiet surroundings.",
        chinese_question: "他喜欢在森林中 __________ 散步，在安静的环境中找到宁静。",
        answers: [
            { option: "A", answer: "crowded", chinese_answer: "拥挤的", chinese_romanization: "yǒngjǐ de" },
            { option: "B", answer: "social", chinese_answer: "社交的", chinese_romanization: "shèjiāo de" },
            { option: "C", answer: "solitary", chinese_answer: "独自的", chinese_romanization: "dúzì de" },
            { option: "D", answer: "noisy", chinese_answer: "吵闹的", chinese_romanization: "chǎonào de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'solitary' means done or existing alone." +
            "<br><br>" +
            "(A) 'crowded' means full of people, leaving little or no room for movement." +
            "<br><br>" +
            "(B) 'social' means relating to society or its organization." +
            "<br><br>" +
            "(D) 'noisy' means making or given to making a lot of noise.",
        chinese_explanation: "(C) '独自的' 意味着独自进行或存在的。" +
            "<br><br>" +
            "(A) '拥挤的' 意味着充满人的，几乎没有或没有活动空间的。" +
            "<br><br>" +
            "(B) '社交的' 意味着与社会或其组织有关的。" +
            "<br><br>" +
            "(D) '吵闹的' 意味着制造或习惯制造很多噪音的。"
    },
    {
        id: 4,
        question: "His performance was __________, showing a deep understanding of the character's subtleties.",
        chinese_question: "他的表演很__________，展示了对角色细微之处的深刻理解。",
        answers: [
            { option: "A", answer: "simple", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" },
            { option: "B", answer: "straightforward", chinese_answer: "直截了当的", chinese_romanization: "zhíjiéle dàng de" },
            { option: "C", answer: "nuanced", chinese_answer: "微妙的", chinese_romanization: "wéimiào de" },
            { option: "D", answer: "clear-cut", chinese_answer: "清晰的", chinese_romanization: "qīngxī de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'nuanced' means characterized by subtle shades of meaning or expression. Figuratively, it can mean being detailed and showing depth." +
            "<br><br>" +
            "(A) 'simple' means easily understood or done; presenting no difficulty." +
            "<br><br>" +
            "(B) 'straightforward' means uncomplicated and easy to do or understand." +
            "<br><br>" +
            "(D) 'clear-cut' means sharply defined; easy to perceive or understand.",
        chinese_explanation: "(C) '微妙的'一词意味着以细微的意义或表达为特征的。比喻地，它可以表示详细并显示深度。" +
            "<br><br>" +
            "(A) '简单的' 意味着容易理解或完成的；没有困难的。" +
            "<br><br>" +
            "(B) '直截了当的' 意味着不复杂且易于完成或理解的。" +
            "<br><br>" +
            "(D) '清晰的' 意味着清晰定义的；容易察觉或理解的。"
    },
    {
        id: 5,
        question: "Every __________ creature on Earth will eventually face death, as it is an unavoidable part of life.",
        chinese_question: "地球上每一个 __________ 的生物最终都会面临死亡，因为这是生命中不可避免的一部分。",
        answers: [
            { option: "A", answer: "immortal", chinese_answer: "不朽的", chinese_romanization: "bùxiǔ de" },
            { option: "B", answer: "infinite", chinese_answer: "无限的", chinese_romanization: "wúxiàn de" },
            { option: "C", answer: "eternal", chinese_answer: "永恒的", chinese_romanization: "yǒnghéng de" },
            { option: "D", answer: "mortal", chinese_answer: "会死的", chinese_romanization: "huì sǐ de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'mortal' means subject to death." +
            "<br><br>" +
            "(A) 'immortal' means living forever; not subject to death." +
            "<br><br>" +
            "(B) 'infinite' means limitless or endless in space, extent, or size." +
            "<br><br>" +
            "(C) 'eternal' means lasting or existing forever; without end or beginning.",
        chinese_explanation: "(D) '会死的' 意味着注定会死亡的。" +
            "<br><br>" +
            "(A) '不朽的' 意味着永生的；不会死亡的。" +
            "<br><br>" +
            "(B) '无限的' 意味着在空间、范围或大小上没有限制的。" +
            "<br><br>" +
            "(C) '永恒的' 意味着永远存在或持续的；没有结束或开始的。"
    },
    {
        id: 6,
        question: "His __________ attitude at work affected everyone, making the atmosphere tense and uncomfortable.",
        chinese_question: "他在工作中的 __________ 态度影响了每个人，使气氛变得紧张和不舒服。",
        answers: [
            { option: "A", answer: "upbeat", chinese_answer: "乐观的", chinese_romanization: "lèguān de" },
            { option: "B", answer: "positive", chinese_answer: "积极的", chinese_romanization: "jījí de" },
            { option: "C", answer: "morose", chinese_answer: "忧郁的", chinese_romanization: "yōuyù de" },
            { option: "D", answer: "optimistic", chinese_answer: "乐观的", chinese_romanization: "lèguān de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'morose' means sullen and ill-tempered." +
            "<br><br>" +
            "(A) 'upbeat' means cheerful; optimistic." +
            "<br><br>" +
            "(B) 'positive' means consisting in or characterized by the presence or possession of features or qualities rather than their absence." +
            "<br><br>" +
            "(D) 'optimistic' means hopeful and confident about the future.",
        chinese_explanation: "(C) '忧郁的' 意味着闷闷不乐的和脾气暴躁的。" +
            "<br><br>" +
            "(A) '乐观的' 意味着充满希望的；乐观的。" +
            "<br><br>" +
            "(B) '积极的' 意味着由存在或拥有特征或品质而不是它们的缺乏所组成或特征的。" +
            "<br><br>" +
            "(D) '乐观的' 意味着对未来充满希望和信心的。"
    },
    {
        id: 7,
        question: "The __________ statue stood at the entrance of the park, towering over the trees.",
        chinese_question: "这座__________的雕像矗立在公园入口，耸立在树木之上。",
        answers: [
            { option: "A", answer: "tiny", chinese_answer: "微小的", chinese_romanization: "wēixiǎo de" },
            { option: "B", answer: "miniature", chinese_answer: "微型的", chinese_romanization: "wēixíng de" },
            { option: "C", answer: "gigantic", chinese_answer: "巨大的", chinese_romanization: "jùdà de" },
            { option: "D", answer: "small", chinese_answer: "小的", chinese_romanization: "xiǎo de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'gigantic' means of very great size or extent; huge or enormous." +
            "<br><br>" +
            "(A) 'tiny' means very small." +
            "<br><br>" +
            "(B) 'miniature' means very small of its kind." +
            "<br><br>" +
            "(D) 'small' means of a size that is less than normal or usual.",
        chinese_explanation: "(C) '巨大的'一词意味着非常大的或巨大的。" +
            "<br><br>" +
            "(A) '微小的' 意味着非常小的。" +
            "<br><br>" +
            "(B) '微型的' 意味着同类中非常小的。" +
            "<br><br>" +
            "(D) '小的' 意味着尺寸小于正常或通常的。"
    },
    {
        id: 8,
        question: "The professor's __________ lecture was difficult to follow, as he used too many words to explain simple concepts.",
        chinese_question: "教授的 __________ 讲座很难跟上，因为他用太多的词来解释简单的概念。",
        answers: [
            { option: "A", answer: "concise", chinese_answer: "简洁的", chinese_romanization: "jiǎnjié de" },
            { option: "B", answer: "terse", chinese_answer: "简短的", chinese_romanization: "jiǎnduǎn de" },
            { option: "C", answer: "verbose", chinese_answer: "冗长的", chinese_romanization: "rǒngcháng de" },
            { option: "D", answer: "succinct", chinese_answer: "精炼的", chinese_romanization: "jīngliàn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'verbose' means using or expressed in more words than are needed." +
            "<br><br>" +
            "(A) 'concise' means giving a lot of information clearly and in a few words; brief but comprehensive." +
            "<br><br>" +
            "(B) 'terse' means sparing in the use of words; abrupt." +
            "<br><br>" +
            "(D) 'succinct' means briefly and clearly expressed.",
        chinese_explanation: "(C) '冗长的' 意味着使用或表达的词比需要的多。" +
            "<br><br>" +
            "(A) '简洁的' 意味着清晰而简明地提供大量信息；简明但全面的。" +
            "<br><br>" +
            "(B) '简短的' 意味着用词节俭；简短而生硬的。" +
            "<br><br>" +
            "(D) '精炼的' 意味着简明扼要地表达。"
    },
    {
        id: 9,
    question: "Store the __________ items in the refrigerator to keep them from spoiling quickly.",
    chinese_question: "将 __________ 物品存放在冰箱里，以防它们很快变质。",
    answers: [
        { option: "A", answer: "durable", chinese_answer: "耐用的", chinese_romanization: "nàiyòng de" },
        { option: "B", answer: "sturdy", chinese_answer: "结实的", chinese_romanization: "jiēshi de" },
        { option: "C", answer: "perishable", chinese_answer: "易腐烂的", chinese_romanization: "yì fǔlàn de" },
        { option: "D", answer: "long-lasting", chinese_answer: "长久的", chinese_romanization: "chángjiǔ de" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'perishable' means likely to decay or go bad quickly." +
        "<br><br>" +
        "(A) 'durable' means able to withstand wear, pressure, or damage; hard-wearing." +
        "<br><br>" +
        "(B) 'sturdy' means strongly and solidly built." +
        "<br><br>" +
        "(D) 'long-lasting' means enduring or existing for a long time.",
    chinese_explanation: "(C) '易腐烂的' 意味着容易腐烂或很快变质。" +
        "<br><br>" +
        "(A) '耐用的' 意味着能够承受磨损、压力或损坏；耐用的。" +
        "<br><br>" +
        "(B) '结实的' 意味着坚固且牢固地建造的。" +
        "<br><br>" +
        "(D) '长久的' 意味着持久或存在很长时间的。"
    },
    {
        id: 10,
    question: "The meeting focused on __________ issues that needed immediate attention rather than minor details.",
    chinese_question: "会议集中讨论需要立即关注的 __________ 问题，而不是细枝末节。",
    answers: [
        { option: "A", answer: "trivial", chinese_answer: "琐碎的", chinese_romanization: "suǒsuì de" },
        { option: "B", answer: "substantive", chinese_answer: "实质性的", chinese_romanization: "shízhìxìng de" },
        { option: "C", answer: "irrelevant", chinese_answer: "无关的", chinese_romanization: "wúguān de" },
        { option: "D", answer: "superficial", chinese_answer: "表面的", chinese_romanization: "biǎomiàn de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'substantive' means having a firm basis in reality and therefore important, meaningful, or considerable." +
        "<br><br>" +
        "(A) 'trivial' means of little value or importance." +
        "<br><br>" +
        "(C) 'irrelevant' means not connected with or relevant to something." +
        "<br><br>" +
        "(D) 'superficial' means existing or occurring at the surface.",
    chinese_explanation: "(B) '实质性的' 意味着在现实中有坚实基础的，因此是重要、有意义或相当大的。" +
        "<br><br>" +
        "(A) '琐碎的' 意味着价值或重要性很小的。" +
        "<br><br>" +
        "(C) '无关的' 意味着与某事无关的。" +
        "<br><br>" +
        "(D) '表面的' 意味着存在或发生在表面的。"
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

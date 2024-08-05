// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The team's __________ performance was surprising, given their usual high energy and enthusiasm.",
        chinese_question: "考虑到他们平时的高能量和热情，团队的__________表现令人惊讶。",
        answers: [
            { option: "A", answer: "energetic", chinese_answer: "精力充沛的", chinese_romanization: "jīnglì chōngpèi de" },
            { option: "B", answer: "lively", chinese_answer: "活跃的", chinese_romanization: "huóyuè de" },
            { option: "C", answer: "listless", chinese_answer: "无精打采的", chinese_romanization: "wújīngdǎcǎi de" },
            { option: "D", answer: "animated", chinese_answer: "生动的", chinese_romanization: "shēngdòng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'listless' means lacking energy or enthusiasm. Figuratively, it can mean being unmotivated or indifferent." +
            "<br><br>" +
            "(A) 'energetic' means showing or involving great activity or vitality." +
            "<br><br>" +
            "(B) 'lively' means full of life and energy; active and outgoing." +
            "<br><br>" +
            "(D) 'animated' means full of life or excitement; lively.",
        chinese_explanation: "(C) '无精打采的'一词意味着缺乏能量或热情的。比喻地，它可以表示缺乏动力或漠不关心。" +
            "<br><br>" +
            "(A) '精力充沛的' 意味着表现出或涉及大量活动或活力的。" +
            "<br><br>" +
            "(B) '活跃的' 意味着充满活力和能量的；积极和外向的。" +
            "<br><br>" +
            "(D) '生动的' 意味着充满生命或兴奋的；活跃的。"
    },
    {
        id: 2,
    question: "She felt __________ to have such supportive friends and family.",
    chinese_question: "她感到 __________，因为她有如此支持的朋友和家人。",
    answers: [
        { option: "A", answer: "cursed", chinese_answer: "诅咒", chinese_romanization: "zǔzhòu" },
        { option: "B", answer: "blessed", chinese_answer: "幸运", chinese_romanization: "xìngyùn" },
        { option: "C", answer: "unfortunate", chinese_answer: "不幸", chinese_romanization: "bùxìng" },
        { option: "D", answer: "miserable", chinese_answer: "痛苦", chinese_romanization: "tòngkǔ" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'blessed' means endowed with divine favor and protection, often used figuratively to mean fortunate." +
        "<br><br>" +
        "(A) 'cursed' means afflicted with evil or bad luck." +
        "<br><br>" +
        "(C) 'unfortunate' means having or marked by bad fortune; unlucky." +
        "<br><br>" +
        "(D) 'miserable' means wretchedly unhappy or uncomfortable.",
    chinese_explanation: "(B) '幸运' 意味着受到神的恩宠和保护，通常比喻为幸运的。" +
        "<br><br>" +
        "(A) '诅咒' 意味着受到邪恶或坏运气的折磨。" +
        "<br><br>" +
        "(C) '不幸' 意味着有或标志着坏运气；不幸的。" +
        "<br><br>" +
        "(D) '痛苦' 意味着极度不快乐或不舒服。"
    },
    {
        id: 3,
        question: "The damage to the ancient artifact was __________, leaving historians and archaeologists devastated.",
        chinese_question: "对古代文物的损害是 __________ 的，让历史学家和考古学家感到沮丧。",
        answers: [
            { option: "A", answer: "fixable", chinese_answer: "可修复的", chinese_romanization: "kě xiūfù de" },
            { option: "B", answer: "irreparable", chinese_answer: "无法修复的", chinese_romanization: "wúfǎ xiūfù de" },
            { option: "C", answer: "minor", chinese_answer: "次要的", chinese_romanization: "cìyào de" },
            { option: "D", answer: "superficial", chinese_answer: "表面的", chinese_romanization: "biǎomiàn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'irreparable' means (of an injury or loss) impossible to rectify or repair." +
            "<br><br>" +
            "(A) 'fixable' means able to be fixed or repaired." +
            "<br><br>" +
            "(C) 'minor' means lesser in importance, seriousness, or significance." +
            "<br><br>" +
            "(D) 'superficial' means existing or occurring at or on the surface.",
        chinese_explanation: "(B) '无法修复的' 意味着（受伤或损失）无法修复或弥补的。" +
            "<br><br>" +
            "(A) '可修复的' 意味着能够修理或修复的。" +
            "<br><br>" +
            "(C) '次要的' 意味着在重要性、严重性或意义上较小的。" +
            "<br><br>" +
            "(D) '表面的' 意味着存在或发生在表面上的。"
    },
    {
        id: 4,
        question: "The artist used __________ colors to give the painting a calm and serene effect.",
        chinese_question: "艺术家使用 __________ 的颜色，使画作呈现出宁静的效果。",
        answers: [
            { option: "A", answer: "bright", chinese_answer: "明亮的", chinese_romanization: "míngliàng de" },
            { option: "B", answer: "dark", chinese_answer: "深色的", chinese_romanization: "shēnsè de" },
            { option: "C", answer: "pale", chinese_answer: "淡色的", chinese_romanization: "dàn sè de" },
            { option: "D", answer: "vivid", chinese_answer: "鲜艳的", chinese_romanization: "xiānyàn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'pale' means light in color or having less color than usual." +
            "<br><br>" +
            "(A) 'bright' means full of light; shining." +
            "<br><br>" +
            "(B) 'dark' means having very little light, not light in color." +
            "<br><br>" +
            "(D) 'vivid' means producing powerful feelings or strong, clear images in the mind.",
        chinese_explanation: "(C) '淡色的' 意味着颜色浅或比平时颜色淡。" +
            "<br><br>" +
            "(A) '明亮的' 意味着充满光亮；发光的。" +
            "<br><br>" +
            "(B) '深色的' 意味着光线很少，不是浅色的。" +
            "<br><br>" +
            "(D) '鲜艳的' 意味着产生强烈感觉或强烈、清晰的图像。"
    },
    {
        id: 5,
        question: "The old table was __________ and unsteady, making it difficult to place anything on it securely.",
        chinese_question: "这张旧桌子很 __________，不稳固，难以安全地放置任何物品。",
        answers: [
            { option: "A", answer: "stable", chinese_answer: "稳定的", chinese_romanization: "wěndìng de" },
            { option: "B", answer: "firm", chinese_answer: "牢固的", chinese_romanization: "láogù de" },
            { option: "C", answer: "wobbly", chinese_answer: "摇晃的", chinese_romanization: "yáohuàng de" },
            { option: "D", answer: "steady", chinese_answer: "稳固的", chinese_romanization: "wěngù de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'wobbly' means tending to move unsteadily from side to side." +
            "<br><br>" +
            "(A) 'stable' means not likely to change or fail; firmly established." +
            "<br><br>" +
            "(B) 'firm' means having a solid, almost unyielding surface or structure." +
            "<br><br>" +
            "(D) 'steady' means firmly fixed, supported, or balanced.",
        chinese_explanation: "(C) '摇晃的' 意味着倾向于从一侧到另一侧不稳地移动。" +
            "<br><br>" +
            "(A) '稳定的' 意味着不太可能改变或失败的；牢固确立的。" +
            "<br><br>" +
            "(B) '牢固的' 意味着具有坚固、几乎不屈不挠的表面或结构的。" +
            "<br><br>" +
            "(D) '稳固的' 意味着牢固固定、支持或平衡的。"
    },
    {
        id: 6,
        question: "The __________ support from her fans gave her the confidence to pursue her dreams.",
        chinese_question: "她的粉丝们的 __________ 支持给了她追求梦想的信心。",
        answers: [
            { option: "A", answer: "lukewarm", chinese_answer: "冷淡的", chinese_romanization: "lěngdàn de" },
            { option: "B", answer: "mild", chinese_answer: "温和的", chinese_romanization: "wēnhé de" },
            { option: "C", answer: "fervent", chinese_answer: "热情的", chinese_romanization: "rèqíng de" },
            { option: "D", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mòbùguānxīn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'fervent' means having or displaying a passionate intensity." +
            "<br><br>" +
            "(A) 'lukewarm' means showing little enthusiasm." +
            "<br><br>" +
            "(B) 'mild' means not severe, serious, or harsh." +
            "<br><br>" +
            "(D) 'indifferent' means having no particular interest or sympathy; unconcerned.",
        chinese_explanation: "(C) '热情的' 意味着有或表现出强烈的激情。" +
            "<br><br>" +
            "(A) '冷淡的' 意味着表现出很少的热情。" +
            "<br><br>" +
            "(B) '温和的' 意味着不严厉、严重或苛刻的。" +
            "<br><br>" +
            "(D) '漠不关心的' 意味着没有特别兴趣或同情的；不关心的。"
    },
    {
        id: 7,
    question: "His __________ behavior towards the teacher got him sent to the principal's office.",
    chinese_question: "他对老师的__________行为让他被送到了校长办公室。",
    answers: [
        { option: "A", answer: "respectful", chinese_answer: "尊敬的", chinese_romanization: "zūnjìng de" },
        { option: "B", answer: "insolent", chinese_answer: "无礼的", chinese_romanization: "wúlǐ de" },
        { option: "C", answer: "polite", chinese_answer: "有礼貌的", chinese_romanization: "yǒu lǐmào de" },
        { option: "D", answer: "courteous", chinese_answer: "礼貌的", chinese_romanization: "lǐmào de" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'insolent' means showing a rude and arrogant lack of respect." +
        "<br><br>" +
        "(A) 'respectful' means feeling or showing deference and respect." +
        "<br><br>" +
        "(C) 'polite' means having or showing behavior that is respectful and considerate of other people." +
        "<br><br>" +
        "(D) 'courteous' means polite, respectful, or considerate in manner.",
    chinese_explanation: "(B) '无礼的' 一词意味着表现出粗鲁和傲慢的缺乏尊重。" +
        "<br><br>" +
        "(A) '尊敬的' 意味着感到或表现出敬意和尊重。" +
        "<br><br>" +
        "(C) '有礼貌的' 意味着表现出尊重和体谅他人的行为。" +
        "<br><br>" +
        "(D) '礼貌的' 意味着礼貌的、尊重的或体贴的行为。"
    },
    {
        id: 8,
        question: "The trail became __________ as it wound deeper into the dense forest, making it easy to lose one’s way.",
        chinese_question: "小径在深入密林时变得 __________，很容易迷路。",
        answers: [
            { option: "A", answer: "clear", chinese_answer: "清晰的", chinese_romanization: "qīngxī de" },
            { option: "B", answer: "direct", chinese_answer: "直接的", chinese_romanization: "zhíjiē de" },
            { option: "C", answer: "obvious", chinese_answer: "明显的", chinese_romanization: "míngxiǎn de" },
            { option: "D", answer: "obscure", chinese_answer: "模糊的", chinese_romanization: "móhu de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'obscure' means not discovered or known about; uncertain, or not clearly expressed or easily understood." +
            "<br><br>" +
            "(A) 'clear' means easy to perceive, understand, or interpret." +
            "<br><br>" +
            "(B) 'direct' means extending or moving from one place to another by the shortest way without changing direction or stopping." +
            "<br><br>" +
            "(C) 'obvious' means easily perceived or understood; clear.",
        chinese_explanation: "(D) '模糊的' 意味着没有被发现或不知道的；不确定的，或没有清晰地表达或容易理解的。" +
            "<br><br>" +
            "(A) '清晰的' 意味着容易感知、理解或解释的。" +
            "<br><br>" +
            "(B) '直接的' 意味着通过最短的路径从一个地方延伸或移动到另一个地方，不改变方向或停止。" +
            "<br><br>" +
            "(C) '明显的' 意味着容易感知或理解的；清楚的。"
    },
    {
        id: 9,
        question: "The __________ guard ensured no one entered the building without proper identification.",
        chinese_question: "__________的警卫确保没有人未经适当身份证明进入大楼。",
        answers: [
            { option: "A", answer: "careless", chinese_answer: "粗心的", chinese_romanization: "cūxīn de" },
            { option: "B", answer: "vigilant", chinese_answer: "警惕的", chinese_romanization: "jǐngtì de" },
            { option: "C", answer: "negligent", chinese_answer: "疏忽的", chinese_romanization: "shūhū de" },
            { option: "D", answer: "inattentive", chinese_answer: "不专心的", chinese_romanization: "bù zhuānxīn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'vigilant' means keeping careful watch for possible danger or difficulties." +
            "<br><br>" +
            "(A) 'careless' means not giving sufficient attention or thought to avoiding harm or errors." +
            "<br><br>" +
            "(C) 'negligent' means failing to take proper care in doing something." +
            "<br><br>" +
            "(D) 'inattentive' means not paying attention to something.",
        chinese_explanation: "(B) '警惕的'一词意味着对可能的危险或困难保持小心的监视。" +
            "<br><br>" +
            "(A) '粗心的' 意味着没有给予足够的注意或考虑以避免伤害或错误。" +
            "<br><br>" +
            "(C) '疏忽的' 意味着在做某事时未能采取适当的措施。" +
            "<br><br>" +
            "(D) '不专心的' 意味着对某事不注意的。"
    },
    {
        id: 10,
        question: "The __________ design of the new sports car attracted many potential buyers.",
        chinese_question: "新跑车的 __________ 设计吸引了许多潜在买家。",
        answers: [
            { option: "A", answer: "bulky", chinese_answer: "笨重的", chinese_romanization: "bènzhòng de" },
            { option: "B", answer: "old-fashioned", chinese_answer: "过时的", chinese_romanization: "guòshí de" },
            { option: "C", answer: "sleek", chinese_answer: "光滑的", chinese_romanization: "guānghuá de" },
            { option: "D", answer: "rough", chinese_answer: "粗糙的", chinese_romanization: "cūcāo de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'sleek' means smooth and glossy; having an elegant, streamlined shape." +
            "<br><br>" +
            "(A) 'bulky' means taking up much space, typically inconveniently; large and unwieldy." +
            "<br><br>" +
            "(B) 'old-fashioned' means in or according to styles or types no longer current or common; not modern." +
            "<br><br>" +
            "(D) 'rough' means having an uneven or irregular surface; not smooth or level.",
        chinese_explanation: "(C) '光滑的' 意味着光滑和有光泽的；具有优雅的流线型外形。" +
            "<br><br>" +
            "(A) '笨重的' 意味着占用很大空间，通常是不方便的；大而笨重的。" +
            "<br><br>" +
            "(B) '过时的' 意味着不再流行或常见的款式或类型；不现代的。" +
            "<br><br>" +
            "(D) '粗糙的' 意味着表面不平整的；不光滑或不平的。"
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

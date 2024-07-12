// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The __________ hills stretched out before us, their gentle waves creating a soothing landscape.",
        chinese_question: "__________ 的山丘在我们面前延展开来，它们的柔和波浪形成了一个令人舒缓的景观。",
        answers: [
            { option: "A", answer: "flat", chinese_answer: "平坦", chinese_romanization: "píngtǎn" },
            { option: "B", answer: "undulating", chinese_answer: "起伏", chinese_romanization: "qǐfú" },
            { option: "C", answer: "jagged", chinese_answer: "锯齿状", chinese_romanization: "jùchǐzhuàng" },
            { option: "D", answer: "steep", chinese_answer: "陡峭", chinese_romanization: "dǒuqiào" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'undulating' means having a smoothly rising and falling form or outline." +
            "<br><br>" +
            "(A) 'flat' means having a level surface without raised areas or indentations." +
            "<br><br>" +
            "(C) 'jagged' means having rough, sharp points protruding." +
            "<br><br>" +
            "(D) 'steep' means rising or falling sharply; nearly perpendicular.",
        chinese_explanation: "(B) '起伏' 意味着具有平滑的起伏形态或轮廓。" +
            "<br><br>" +
            "(A) '平坦' 意味着有一个没有隆起或凹陷的水平表面。" +
            "<br><br>" +
            "(C) '锯齿状' 意味着有粗糙、尖锐的突起。" +
            "<br><br>" +
            "(D) '陡峭' 意味着急剧上升或下降；几乎垂直。"
    },
    {
        id: 2,
        question: "The __________ man rarely spoke, keeping his thoughts to himself.",
        chinese_question: "这名__________的男人很少说话，保持自己的想法。",
        answers: [
            { option: "A", answer: "talkative", chinese_answer: "健谈的", chinese_romanization: "jiàntán de" },
            { option: "B", answer: "taciturn", chinese_answer: "沉默寡言的", chinese_romanization: "chénmò guǎyán de" },
            { option: "C", answer: "gregarious", chinese_answer: "合群的", chinese_romanization: "héqún de" },
            { option: "D", answer: "verbose", chinese_answer: "啰嗦的", chinese_romanization: "luōsuo de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'taciturn' means reserved or uncommunicative in speech; saying little." +
            "<br><br>" +
            "(A) 'talkative' means fond of or given to talking." +
            "<br><br>" +
            "(C) 'gregarious' means fond of company; sociable." +
            "<br><br>" +
            "(D) 'verbose' means using or expressed in more words than are needed.",
        chinese_explanation: "(B) '沉默寡言的'一词意味着在言语上保留或不健谈；说得很少。" +
            "<br><br>" +
            "(A) '健谈的' 意味着喜欢或习惯于说话。" +
            "<br><br>" +
            "(C) '合群的' 意味着喜欢与人相处；社交的。" +
            "<br><br>" +
            "(D) '啰嗦的' 意味着使用或表达的词比需要的多。"
    },
    {
        id: 3,
        question: "The journalist was fired for his __________ practices, which included fabricating stories and sources.",
        chinese_question: "这位记者因其 __________ 的行为而被解雇，这些行为包括捏造故事和来源。",
        answers: [
            { option: "A", answer: "honest", chinese_answer: "诚实的", chinese_romanization: "chéngshí de" },
            { option: "B", answer: "ethical", chinese_answer: "合乎道德的", chinese_romanization: "hé hū dàodé de" },
            { option: "C", answer: "commendable", chinese_answer: "值得称赞的", chinese_romanization: "zhídé chēngzàn de" },
            { option: "D", answer: "unethical", chinese_answer: "不道德的", chinese_romanization: "bù dàodé de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'unethical' means not morally correct." +
            "<br><br>" +
            "(A) 'honest' means free of deceit; truthful and sincere." +
            "<br><br>" +
            "(B) 'ethical' means relating to moral principles or the branch of knowledge dealing with these." +
            "<br><br>" +
            "(C) 'commendable' means deserving praise.",
        chinese_explanation: "(D) '不道德的' 意味着在道德上不正确的。" +
            "<br><br>" +
            "(A) '诚实的' 意味着没有欺骗；真实和真诚的。" +
            "<br><br>" +
            "(B) '合乎道德的' 意味着与道德原则或处理这些知识的分支有关的。" +
            "<br><br>" +
            "(C) '值得称赞的' 意味着值得称赞的。"
    },
    {
        id: 4,
    question: "The organization's __________ nature made it difficult for outsiders to learn about its activities.",
    chinese_question: "该组织的 __________ 性质使得外界难以了解其活动。",
    answers: [
        { option: "A", answer: "transparent", chinese_answer: "透明的", chinese_romanization: "tòumíng de" },
        { option: "B", answer: "open", chinese_answer: "开放的", chinese_romanization: "kāifàng de" },
        { option: "C", answer: "communicative", chinese_answer: "交流的", chinese_romanization: "jiāoliú de" },
        { option: "D", answer: "secretive", chinese_answer: "秘密的", chinese_romanization: "mìmì de" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'secretive' means (of a person or an organization) inclined to conceal feelings and intentions or not to disclose information." +
        "<br><br>" +
        "(A) 'transparent' means (of a material or article) allowing light to pass through so that objects behind can be distinctly seen." +
        "<br><br>" +
        "(B) 'open' means allowing access, passage, or a view through an empty space; not closed or blocked up." +
        "<br><br>" +
        "(C) 'communicative' means willing, eager, or able to talk or impart information.",
    chinese_explanation: "(D) '秘密的' 意味着（指人或组织）倾向于隐瞒感情和意图或不披露信息的。" +
        "<br><br>" +
        "(A) '透明的' 意味着（指材料或物品）允许光通过，以便后面的物体可以清晰看到的。" +
        "<br><br>" +
        "(B) '开放的' 意味着允许通过一个空的空间进行访问、通过或观看的；未关闭或未堵塞的。" +
        "<br><br>" +
        "(C) '交流的' 意味着愿意、渴望或能够交谈或传达信息的。"
    },
    {
        id: 5,
        question: "She often took a __________ walk by the lake to clear her mind and think about her day.",
        chinese_question: "她经常在湖边散步 __________ 以清理思绪并思考自己的一天。",
        answers: [
            { option: "A", answer: "hurried", chinese_answer: "匆忙的", chinese_romanization: "cōngmáng de" },
            { option: "B", answer: "reflective", chinese_answer: "沉思的", chinese_romanization: "chénsī de" },
            { option: "C", answer: "rushed", chinese_answer: "仓促的", chinese_romanization: "cāngcù de" },
            { option: "D", answer: "distracted", chinese_answer: "分心的", chinese_romanization: "fēnxīn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'reflective' means relating to or characterized by deep thought; thoughtful." +
            "<br><br>" +
            "(A) 'hurried' means done in a hurry; rushed." +
            "<br><br>" +
            "(C) 'rushed' means done or completed too hurriedly; hasty." +
            "<br><br>" +
            "(D) 'distracted' means unable to concentrate because one's mind is preoccupied.",
        chinese_explanation: "(B) '沉思的' 意味着与深思熟虑有关的或具有深思熟虑特点的；深思的。" +
            "<br><br>" +
            "(A) '匆忙的' 意味着在匆忙中完成的；仓促的。" +
            "<br><br>" +
            "(C) '仓促的' 意味着做得太匆忙；仓促的。" +
            "<br><br>" +
            "(D) '分心的' 意味着无法集中注意力，因为思想被其他事情占据了。"
    },
    {
        id: 6,
        question: "Her __________ personality made her the life of the party, as she effortlessly charmed everyone she met.",
        chinese_question: "她 __________ 的个性让她成为聚会的灵魂，因为她轻松地迷倒了每一个遇到的人。",
        answers: [
            { option: "A", answer: "dull", chinese_answer: "无聊的", chinese_romanization: "wúliáo de" },
            { option: "B", answer: "gloomy", chinese_answer: "忧郁的", chinese_romanization: "yōuyù de" },
            { option: "C", answer: "vivacious", chinese_answer: "活泼的", chinese_romanization: "huópō de" },
            { option: "D", answer: "lethargic", chinese_answer: "昏昏欲睡的", chinese_romanization: "hūnhūn yù shuì de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'vivacious' means attractively lively and animated." +
            "<br><br>" +
            "(A) 'dull' means lacking interest or excitement." +
            "<br><br>" +
            "(B) 'gloomy' means dark or poorly lit, especially so as to appear depressing or frightening." +
            "<br><br>" +
            "(D) 'lethargic' means affected by lethargy; sluggish and apathetic.",
        chinese_explanation: "(C) '活泼的' 意味着有吸引力的活泼和生动。" +
            "<br><br>" +
            "(A) '无聊的' 意味着缺乏兴趣或兴奋。" +
            "<br><br>" +
            "(B) '忧郁的' 意味着黑暗或光线不足，尤其是看起来令人沮丧或可怕的。" +
            "<br><br>" +
            "(D) '昏昏欲睡的' 意味着受到昏睡的影响；懒洋洋的。"
    },
    {
        id: 7,
        question: "The __________ design of the building failed to attract any attention from passersby.",
        chinese_question: "这座建筑的__________设计未能吸引路人的注意。",
        answers: [
            { option: "A", answer: "innovative", chinese_answer: "创新的", chinese_romanization: "chuàngxīn de" },
            { option: "B", answer: "pedestrian", chinese_answer: "平凡的", chinese_romanization: "píngfán de" },
            { option: "C", answer: "unique", chinese_answer: "独特的", chinese_romanization: "dútè de" },
            { option: "D", answer: "extraordinary", chinese_answer: "非凡的", chinese_romanization: "fēifán de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'pedestrian' means lacking inspiration or excitement; dull." +
            "<br><br>" +
            "(A) 'innovative' means (of a product, idea, etc.) featuring new methods; advanced and original." +
            "<br><br>" +
            "(C) 'unique' means being the only one of its kind; unlike anything else." +
            "<br><br>" +
            "(D) 'extraordinary' means very unusual or remarkable.",
        chinese_explanation: "(B) '平凡的'一词意味着缺乏灵感或兴奋的；无聊的。" +
            "<br><br>" +
            "(A) '创新的' 意味着（产品、想法等）采用新方法的；先进的和原创的。" +
            "<br><br>" +
            "(C) '独特的' 意味着独一无二的；与其他任何事物不同的。" +
            "<br><br>" +
            "(D) '非凡的' 意味着非常不寻常或非凡的。"
    },
    {
        id: 8,
        question: "The librarian ensured that the books were always arranged in an __________ manner, making it easy for patrons to find what they needed.",
        chinese_question: "图书管理员确保书籍总是以一种 __________ 的方式排列，使读者能轻松找到他们需要的书。",
        answers: [
            { option: "A", answer: "chaotic", chinese_answer: "混乱的", chinese_romanization: "hùnluàn de" },
            { option: "B", answer: "disorderly", chinese_answer: "无序的", chinese_romanization: "wúxù de" },
            { option: "C", answer: "orderly", chinese_answer: "有序的", chinese_romanization: "yǒuxù de" },
            { option: "D", answer: "messy", chinese_answer: "杂乱的", chinese_romanization: "záluàn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'orderly' means neatly and methodically arranged." +
            "<br><br>" +
            "(A) 'chaotic' means in a state of complete confusion and disorder." +
            "<br><br>" +
            "(B) 'disorderly' means lacking organization; untidy." +
            "<br><br>" +
            "(D) 'messy' means untidy or dirty.",
        chinese_explanation: "(C) '有序的' 意味着整齐和有条理地排列的。" +
            "<br><br>" +
            "(A) '混乱的' 意味着处于完全混乱和无序的状态。" +
            "<br><br>" +
            "(B) '无序的' 意味着缺乏组织的；不整齐的。" +
            "<br><br>" +
            "(D) '杂乱的' 意味着不整齐或脏的。"
    },
    {
        id: 9,
        question: "Her __________ response to the criticism suggested that she didn't take the comments seriously.",
        chinese_question: "她对批评的 __________ 反应表明她并不认真对待这些评论。",
        answers: [
            { option: "A", answer: "concerned", chinese_answer: "担心的", chinese_romanization: "dānxīn de" },
            { option: "B", answer: "emotional", chinese_answer: "情绪化的", chinese_romanization: "qíngxù huà de" },
            { option: "C", answer: "nonchalant", chinese_answer: "漠不关心的", chinese_romanization: "mòbùguānxīn de" },
            { option: "D", answer: "passionate", chinese_answer: "充满激情的", chinese_romanization: "chōngmǎn jīqíng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'nonchalant' means feeling or appearing casually calm and relaxed; not displaying anxiety, interest, or enthusiasm." +
            "<br><br>" +
            "(A) 'concerned' means worried, troubled, or anxious." +
            "<br><br>" +
            "(B) 'emotional' means showing strong feelings." +
            "<br><br>" +
            "(D) 'passionate' means showing or caused by strong feelings or a strong belief.",
        chinese_explanation: "(C) '漠不关心的' 意味着感觉或表现得漫不经心、冷静和放松；不表现出焦虑、兴趣或热情。" +
            "<br><br>" +
            "(A) '担心的' 意味着担忧、烦恼或焦虑的。" +
            "<br><br>" +
            "(B) '情绪化的' 意味着表现出强烈的感情的。" +
            "<br><br>" +
            "(D) '充满激情的' 意味着表现出或引起强烈的感情或信念的。"
    },
    {
        id: 10,
        question: "Her __________ approach to public speaking prevented her from fully expressing her ideas.",
        chinese_question: "她对公众演讲的 __________ 态度使她无法充分表达自己的想法。",
        answers: [
            { option: "A", answer: "assertive", chinese_answer: "坚定自信的", chinese_romanization: "jiāndìng zìxìn de" },
            { option: "B", answer: "bold", chinese_answer: "大胆的", chinese_romanization: "dàdǎn de" },
            { option: "C", answer: "timid", chinese_answer: "胆小的", chinese_romanization: "dǎnxiǎo de" },
            { option: "D", answer: "confident", chinese_answer: "自信的", chinese_romanization: "zìxìn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'timid' means showing a lack of courage or confidence." +
            "<br><br>" +
            "(A) 'assertive' means having or showing a confident and forceful personality." +
            "<br><br>" +
            "(B) 'bold' means showing an ability to take risks." +
            "<br><br>" +
            "(D) 'confident' means feeling or showing confidence in oneself.",
        chinese_explanation: "(C) '胆小的' 意味着表现出缺乏勇气或信心的。" +
            "<br><br>" +
            "(A) '坚定自信的' 意味着表现出自信和坚定个性的。" +
            "<br><br>" +
            "(B) '大胆的' 意味着表现出冒险的能力。" +
            "<br><br>" +
            "(D) '自信的' 意味着对自己充满信心的。"
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

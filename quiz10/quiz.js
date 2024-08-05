// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The writer preferred a __________ lifestyle, spending most of his time alone in a quiet cabin in the woods, far from the distractions of city life.",
        chinese_question: "这位作家喜欢 __________ 的生活方式，大部分时间独自一人在森林中的一个安静小屋里，远离城市生活的干扰。",
        answers: [
            { option: "A", answer: "solitary", chinese_answer: "孤独的", chinese_romanization: "gūdú de" },
            { option: "B", answer: "sociable", chinese_answer: "好交际的", chinese_romanization: "hào jiāojì de" },
            { option: "C", answer: "crowded", chinese_answer: "拥挤的", chinese_romanization: "yōngjǐ de" },
            { option: "D", answer: "communal", chinese_answer: "公共的", chinese_romanization: "gōnggòng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'solitary' means done or existing alone." +
            "<br><br>" +
            "(B) 'sociable' means willing to talk and engage in activities with other people; friendly." +
            "<br><br>" +
            "(C) 'crowded' means full of people, leaving little or no room for movement; packed." +
            "<br><br>" +
            "(D) 'communal' means shared by all members of a community; for common use.",
        chinese_explanation: "(A) '孤独的' 意味着独自完成或存在的。" +
            "<br><br>" +
            "(B) '好交际的' 意味着愿意与他人交谈并参与活动的；友好的。" +
            "<br><br>" +
            "(C) '拥挤的' 意味着挤满了人，几乎没有或没有活动空间的。" +
            "<br><br>" +
            "(D) '公共的' 意味着由社区所有成员共享的；供共同使用的。"
    },
    {
        id: 2,
        question: "The __________ crowd at the concert made it hard for the security to maintain order.",
        chinese_question: "演唱会上的__________人群使得安保人员难以维持秩序。",
        answers: [
            { option: "A", answer: "disciplined", chinese_answer: "纪律严明的", chinese_romanization: "jìlǜ yánmíng de" },
            { option: "B", answer: "unruly", chinese_answer: "不守规矩的", chinese_romanization: "bù shǒu guījǔ de" },
            { option: "C", answer: "orderly", chinese_answer: "有序的", chinese_romanization: "yǒuxù de" },
            { option: "D", answer: "well-behaved", chinese_answer: "行为良好的", chinese_romanization: "xíngwéi liánghǎo de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'unruly' means disorderly and disruptive and not amenable to discipline or control." +
            "<br><br>" +
            "(A) 'disciplined' means showing a controlled form of behavior or way of working." +
            "<br><br>" +
            "(C) 'orderly' means neatly and methodically arranged." +
            "<br><br>" +
            "(D) 'well-behaved' means conducting oneself in an appropriate manner.",
        chinese_explanation: "(B) '不守规矩的'一词意味着无纪律的和破坏性的，不服从纪律或控制的。" +
            "<br><br>" +
            "(A) '有序的' 意味着整齐且有条理地排列的。" +
            "<br><br>" +
            "(D) '行为良好的' 意味着行为得当的。"
    },
    {
        id: 3,
    question: "The journalist's __________ analysis of the political situation provided readers with a clear and deep understanding of the complexities involved.",
    chinese_question: "这位记者对政治局势的 __________ 分析让读者对所涉及的复杂情况有了清晰而深入的理解。",
    answers: [
        { option: "A", answer: "vague", chinese_answer: "模糊的", chinese_romanization: "móhú de" },
        { option: "B", answer: "superficial", chinese_answer: "肤浅的", chinese_romanization: "fūqiǎn de" },
        { option: "C", answer: "confusing", chinese_answer: "令人困惑的", chinese_romanization: "lìng rén kùnhuò de" },
        { option: "D", answer: "incisive", chinese_answer: "深刻的", chinese_romanization: "shēnkè de" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'incisive' means intelligently analytical and clear-thinking." +
        "<br><br>" +
        "(A) 'vague' means unclear or ill-defined." +
        "<br><br>" +
        "(B) 'superficial' means not thorough or deep; lacking depth." +
        "<br><br>" +
        "(C) 'confusing' means bewildering or perplexing.",
    chinese_explanation: "(D) '深刻的' 意味着有智慧的分析和清晰的思维。" +
        "<br><br>" +
        "(A) '模糊的' 意味着不清楚或定义不明确。" +
        "<br><br>" +
        "(B) '肤浅的' 意味着不深入或不深；缺乏深度。" +
        "<br><br>" +
        "(C) '令人困惑的' 意味着使人困惑或使人迷惑。"
    },
    {
        id: 4,
        question: "She felt __________ by the complex instructions on the assembly manual.",
        chinese_question: "她觉得被组装手册上复杂的说明 __________ 了。",
        answers: [
            { option: "A", answer: "aided", chinese_answer: "帮助", chinese_romanization: "bāngzhù" },
            { option: "B", answer: "enlightened", chinese_answer: "启发", chinese_romanization: "qǐfā" },
            { option: "C", answer: "bamboozled", chinese_answer: "困惑", chinese_romanization: "kùnhuò" },
            { option: "D", answer: "assisted", chinese_answer: "协助", chinese_romanization: "xiézhù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'bamboozled' means to be confused or perplexed by something." +
            "<br><br>" +
            "(A) 'aided' means to provide support or help." +
            "<br><br>" +
            "(B) 'enlightened' means to give someone greater knowledge and understanding about a subject or situation." +
            "<br><br>" +
            "(D) 'assisted' means to help someone.",
        chinese_explanation: "(C) '困惑' 意味着被某事弄得困惑或迷惑。" +
            "<br><br>" +
            "(A) '帮助' 意味着提供支持或帮助。" +
            "<br><br>" +
            "(B) '启发' 意味着给某人更大的知识和理解关于一个主题或情况。" +
            "<br><br>" +
            "(D) '协助' 意味着帮助某人。"
    },
    {
        id: 5,
        question: "The cliff face was __________, making it a challenging climb for even experienced climbers.",
        chinese_question: "悬崖峭壁 __________ ，即使是经验丰富的攀登者也面临挑战。",
        answers: [
            { option: "A", answer: "jagged", chinese_answer: "锯齿状", chinese_romanization: "jùchǐ zhuàng" },
            { option: "B", answer: "smooth", chinese_answer: "光滑", chinese_romanization: "guānghuá" },
            { option: "C", answer: "straight", chinese_answer: "直", chinese_romanization: "zhí" },
            { option: "D", answer: "level", chinese_answer: "平坦", chinese_romanization: "píngtǎn" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'jagged' means having rough, sharp points protruding." +
            "<br><br>" +
            "(B) 'smooth' means having an even and regular surface." +
            "<br><br>" +
            "(C) 'straight' means extending or moving uniformly in one direction only." +
            "<br><br>" +
            "(D) 'level' means having a flat, even surface.",
        chinese_explanation: "(A) '锯齿状' 意味着有粗糙、锋利的突起点。" +
            "<br><br>" +
            "(B) '光滑' 意味着表面均匀平整。" +
            "<br><br>" +
            "(C) '直' 意味着仅向一个方向均匀延伸或移动。" +
            "<br><br>" +
            "(D) '平坦' 意味着有平坦、均匀的表面。"
    },
    {
        id: 6,
        question: "His personality was very __________, drawing people to him naturally.",
        chinese_question: "他的性格非常 __________，自然地吸引了人们。",
        answers: [
            { option: "A", answer: "repellent", chinese_answer: "令人厌恶的", chinese_romanization: "lìng rén yànwù de" },
            { option: "B", answer: "attractive", chinese_answer: "吸引人的", chinese_romanization: "xīyǐn rén de" },
            { option: "C", answer: "boring", chinese_answer: "无聊的", chinese_romanization: "wúliáo de" },
            { option: "D", answer: "uninteresting", chinese_answer: "不有趣的", chinese_romanization: "bù yǒuqùde" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'attractive' means pleasing or appealing to the senses." +
            "<br><br>" +
            "(A) 'repellent' means causing disgust or distaste." +
            "<br><br>" +
            "(C) 'boring' means not interesting; tedious." +
            "<br><br>" +
            "(D) 'uninteresting' means not arousing curiosity or interest.",
        chinese_explanation: "(B) '吸引人的' 意味着让感官愉悦或吸引人的。" +
            "<br><br>" +
            "(A) '令人厌恶的' 意味着引起厌恶或反感的。" +
            "<br><br>" +
            "(C) '无聊的' 意味着没有趣的；乏味的。" +
            "<br><br>" +
            "(D) '不有趣的' 意味着不引起好奇或兴趣的。"
    },
    {
        id: 7,
    question: "She was __________ to learn that her project had been rejected after all her hard work.",
    chinese_question: "得知她的项目在所有辛勤工作之后被拒绝了，她感到__________。",
    answers: [
        { option: "A", answer: "pleased", chinese_answer: "高兴", chinese_romanization: "gāoxìng" },
        { option: "B", answer: "dismayed", chinese_answer: "沮丧", chinese_romanization: "jǔsàng" },
        { option: "C", answer: "excited", chinese_answer: "兴奋", chinese_romanization: "xīngfèn" },
        { option: "D", answer: "satisfied", chinese_answer: "满意", chinese_romanization: "mǎnyì" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'dismayed' means feeling distressed or shocked." +
        "<br><br>" +
        "(A) 'pleased' means feeling or showing pleasure and satisfaction, especially at an event or a situation." +
        "<br><br>" +
        "(C) 'excited' means very enthusiastic and eager." +
        "<br><br>" +
        "(D) 'satisfied' means contented; pleased.",
    chinese_explanation: "(B) '沮丧' 一词意味着感到痛苦或震惊。" +
        "<br><br>" +
        "(A) '高兴' 意味着感到或表现出愉快和满意，特别是在事件或情况发生时。" +
        "<br><br>" +
        "(C) '兴奋' 意味着非常热情和渴望的。" +
        "<br><br>" +
        "(D) '满意' 意味着满意的；高兴的。"
    },
    {
        id: 8,
        question: "The celebrity's __________ outfit turned heads at the event, drawing everyone's attention.",
        chinese_question: "那位名人的 __________ 服装在活动上引人注目，吸引了所有人的注意。",
        answers: [
            { option: "A", answer: "plain", chinese_answer: "朴素", chinese_romanization: "pǔsù" },
            { option: "B", answer: "subdued", chinese_answer: "低调", chinese_romanization: "dīdiào" },
            { option: "C", answer: "flamboyant", chinese_answer: "华丽", chinese_romanization: "huálì" },
            { option: "D", answer: "simple", chinese_answer: "简单", chinese_romanization: "jiǎndān" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'flamboyant' means tending to attract attention because of their exuberance, confidence, and stylishness." +
            "<br><br>" +
            "(A) 'plain' means not decorated or elaborate; simple or ordinary in character." +
            "<br><br>" +
            "(B) 'subdued' means quiet and rather reflective or depressed." +
            "<br><br>" +
            "(D) 'simple' means easily understood or done; presenting no difficulty.",
        chinese_explanation: "(C) '华丽' 意味着由于其丰富、自信和时尚而倾向于引起注意。" +
            "<br><br>" +
            "(A) '朴素' 意味着不装饰或不复杂；简单或普通的性格。" +
            "<br><br>" +
            "(B) '低调' 意味着安静而相当反思或抑郁。" +
            "<br><br>" +
            "(D) '简单' 意味着容易理解或完成；没有困难。"
    },
    {
        id: 9,
        question: "She was __________ with her spending, always looking for discounts and avoiding unnecessary purchases.",
        chinese_question: "她在花钱方面很 __________，总是寻找折扣并避免不必要的购买。",
        answers: [
            { option: "A", answer: "extravagant", chinese_answer: "奢侈的", chinese_romanization: "shēchǐ de" },
            { option: "B", answer: "lavish", chinese_answer: "豪华的", chinese_romanization: "háohuá de" },
            { option: "C", answer: "frugal", chinese_answer: "节俭的", chinese_romanization: "jiéjiǎn de" },
            { option: "D", answer: "wasteful", chinese_answer: "浪费的", chinese_romanization: "làngfèi de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'frugal' means sparing or economical with regard to money or food." +
            "<br><br>" +
            "(A) 'extravagant' means lacking restraint in spending money or using resources." +
            "<br><br>" +
            "(B) 'lavish' means sumptuously rich, elaborate, or luxurious." +
            "<br><br>" +
            "(D) 'wasteful' means using or expending something of value carelessly, extravagantly, or to no purpose.",
        chinese_explanation: "(C) '节俭的' 意味着对金钱或食物方面节约或经济的。" +
            "<br><br>" +
            "(A) '奢侈的' 意味着在花钱或使用资源方面缺乏约束的。" +
            "<br><br>" +
            "(B) '豪华的' 意味着极其丰富、精美或奢华的。" +
            "<br><br>" +
            "(D) '浪费的' 意味着对有价值的东西使用不慎、挥霍或毫无目的的。"
    },
    {
        id: 10,
        question: "His __________ manners at the dinner table embarrassed his family.",
        chinese_question: "他在餐桌上的 __________ 举止让家人感到尴尬。",
        answers: [
            { option: "A", answer: "polite", chinese_answer: "礼貌的", chinese_romanization: "lǐmào de" },
            { option: "B", answer: "refined", chinese_answer: "文雅的", chinese_romanization: "wényǎ de" },
            { option: "C", answer: "uncouth", chinese_answer: "粗鲁的", chinese_romanization: "cūlǔ de" },
            { option: "D", answer: "sophisticated", chinese_answer: "老练的", chinese_romanization: "lǎoliàn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'uncouth' means lacking good manners, refinement, or grace." +
            "<br><br>" +
            "(A) 'polite' means having or showing behavior that is respectful and considerate of other people." +
            "<br><br>" +
            "(B) 'refined' means elegant and cultured in appearance, manner, or taste." +
            "<br><br>" +
            "(D) 'sophisticated' means having, revealing, or involving a great deal of worldly experience and knowledge.",
        chinese_explanation: "(C) '粗鲁的' 意味着缺乏良好礼貌、修养或优雅的。" +
            "<br><br>" +
            "(A) '礼貌的' 意味着表现出对他人的尊重和体贴的行为。" +
            "<br><br>" +
            "(B) '文雅的' 意味着外表、举止或品味优雅和有教养的。" +
            "<br><br>" +
            "(D) '老练的' 意味着具有、展示或涉及大量世俗经验和知识的。"
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

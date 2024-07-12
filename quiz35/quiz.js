// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "He was __________ for the second chance he received and vowed not to waste it.",
        chinese_question: "他对得到的第二次机会心存 __________，并发誓不再浪费它。",
        answers: [
            { option: "A", answer: "ungrateful", chinese_answer: "忘恩负义", chinese_romanization: "wàng'ēn fùyì" },
            { option: "B", answer: "unappreciative", chinese_answer: "不感激", chinese_romanization: "bù gǎnjī" },
            { option: "C", answer: "grateful", chinese_answer: "感激", chinese_romanization: "gǎnjī" },
            { option: "D", answer: "dismissive", chinese_answer: "不屑一顾", chinese_romanization: "bùxiè yīgù" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'grateful' means feeling or showing an appreciation of kindness; thankful." +
            "<br><br>" +
            "(A) 'ungrateful' means not feeling or showing gratitude." +
            "<br><br>" +
            "(B) 'unappreciative' means not feeling or showing appreciation." +
            "<br><br>" +
            "(D) 'dismissive' means feeling or showing that something is unworthy of consideration.",
        chinese_explanation: "(C) '感激' 意味着感到或表现出对善意的感激；感恩。" +
            "<br><br>" +
            "(A) '忘恩负义' 意味着没有感激之情或不表现出感激之情。" +
            "<br><br>" +
            "(B) '不感激' 意味着不感到或表现出感激。" +
            "<br><br>" +
            "(D) '不屑一顾' 意味着感到或表现出某事不值得考虑。"
    },
    {
        id: 2,
    question: "He was __________ to finally meet his favorite author at the book signing event.",
    chinese_question: "在签书活动上终于见到他最喜欢的作家，他感到非常 __________。",
    answers: [
        { option: "A", answer: "bored", chinese_answer: "无聊的", chinese_romanization: "wúliáo de" },
        { option: "B", answer: "uninterested", chinese_answer: "不感兴趣的", chinese_romanization: "bù gǎnxìngqù de" },
        { option: "C", answer: "apathetic", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
        { option: "D", answer: "elated", chinese_answer: "兴高采烈的", chinese_romanization: "xìnggāo cǎiliè de" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'elated' means very happy or proud; in high spirits." +
        "<br><br>" +
        "(A) 'bored' means feeling weary and impatient because one is unoccupied or lacks interest in one's current activity." +
        "<br><br>" +
        "(B) 'uninterested' means not interested." +
        "<br><br>" +
        "(C) 'apathetic' means showing or feeling no interest, enthusiasm, or concern.",
    chinese_explanation: "(D) '兴高采烈的' 意味着非常高兴或自豪；情绪高涨。" +
        "<br><br>" +
        "(A) '无聊的' 意味着因为无所事事或对当前活动缺乏兴趣而感到厌倦和不耐烦的。" +
        "<br><br>" +
        "(B) '不感兴趣的' 意味着不感兴趣的。" +
        "<br><br>" +
        "(C) '冷漠的' 意味着表现出或感到没有兴趣、热情或关心的。"
    },
    {
        id: 3,
        question: "At the formal dinner, everyone was expected to behave in a __________ manner, following all the proper etiquettes.",
        chinese_question: "在正式晚宴上，大家都要以 __________ 的方式行事，遵守所有适当的礼节。",
        answers: [
            { option: "A", answer: "rude", chinese_answer: "无礼的", chinese_romanization: "wúlǐ de" },
            { option: "B", answer: "decorous", chinese_answer: "端庄的", chinese_romanization: "duānzhuāng de" },
            { option: "C", answer: "inappropriate", chinese_answer: "不适当的", chinese_romanization: "bù shìdàng de" },
            { option: "D", answer: "boisterous", chinese_answer: "喧闹的", chinese_romanization: "xuānnào de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'decorous' means in keeping with good taste and propriety; polite and restrained." +
            "<br><br>" +
            "(A) 'rude' means offensively impolite or ill-mannered." +
            "<br><br>" +
            "(C) 'inappropriate' means not suitable or proper in the circumstances." +
            "<br><br>" +
            "(D) 'boisterous' means noisy, energetic, and cheerful; rowdy.",
        chinese_explanation: "(B) '端庄的' 意味着符合良好的品味和礼仪；礼貌和克制的。" +
            "<br><br>" +
            "(A) '无礼的' 意味着冒犯性的不礼貌或粗鲁。" +
            "<br><br>" +
            "(C) '不适当的' 意味着在情况下不适合或不恰当。" +
            "<br><br>" +
            "(D) '喧闹的' 意味着吵闹、充满活力和欢快；喧嚣的。"
    },
    {
        id: 4,
        question: "The river becomes __________ during the dry season, making it difficult for boats to navigate.",
        chinese_question: "旱季时河水变得 __________，使得船只难以航行。",
        answers: [
            { option: "A", answer: "deep", chinese_answer: "深的", chinese_romanization: "shēn de" },
            { option: "B", answer: "shallow", chinese_answer: "浅的", chinese_romanization: "qiǎn de" },
            { option: "C", answer: "turbulent", chinese_answer: "湍急的", chinese_romanization: "tuānjí de" },
            { option: "D", answer: "wide", chinese_answer: "宽的", chinese_romanization: "kuān de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'shallow' means of little depth." +
            "<br><br>" +
            "(A) 'deep' means extending far down from the top or surface." +
            "<br><br>" +
            "(C) 'turbulent' means characterized by conflict, disorder, or confusion." +
            "<br><br>" +
            "(D) 'wide' means of great or more than average width.",
        chinese_explanation: "(B) '浅的' 意味着深度很小。" +
            "<br><br>" +
            "(A) '深的' 意味着从顶部或表面向下延伸很远。" +
            "<br><br>" +
            "(C) '湍急的' 意味着以冲突、混乱或混乱为特征。" +
            "<br><br>" +
            "(D) '宽的' 意味着宽度大于平均宽度。"
    },
    {
        id: 5,
        question: "The __________ artist's work was displayed in the most prestigious galleries around the world.",
        chinese_question: "这位 __________ 艺术家的作品在世界上最负盛名的画廊展出。",
        answers: [
            { option: "A", answer: "eminent", chinese_answer: "杰出", chinese_romanization: "jiéchū" },
            { option: "B", answer: "insignificant", chinese_answer: "无关紧要", chinese_romanization: "wúguān jǐn yào" },
            { option: "C", answer: "hidden", chinese_answer: "隐藏", chinese_romanization: "yǐncáng" },
            { option: "D", answer: "forgotten", chinese_answer: "被遗忘", chinese_romanization: "bèi yíwàng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'eminent' means famous and respected within a particular sphere or profession." +
            "<br><br>" +
            "(B) 'insignificant' means too small or unimportant to be worth consideration." +
            "<br><br>" +
            "(C) 'hidden' means kept out of sight; concealed." +
            "<br><br>" +
            "(D) 'forgotten' means not remembered.",
        chinese_explanation: "(A) '杰出' 意味着在某个领域或职业中著名且受人尊敬。" +
            "<br><br>" +
            "(B) '无关紧要' 意味着太小或不重要而不值得考虑。" +
            "<br><br>" +
            "(C) '隐藏' 意味着保持在视线之外；隐藏的。" +
            "<br><br>" +
            "(D) '被遗忘' 意味着不被记住。"
    },
    {
        id: 6,
        question: "The __________ appeal of classic literature continues to captivate readers of all ages.",
        chinese_question: "经典文学的 __________ 魅力继续吸引着各个年龄段的读者。",
        answers: [
            { option: "A", answer: "momentary", chinese_answer: "短暂的", chinese_romanization: "duǎnzàn de" },
            { option: "B", answer: "enduring", chinese_answer: "持久的", chinese_romanization: "chíjiǔ de" },
            { option: "C", answer: "passing", chinese_answer: "暂时的", chinese_romanization: "zànshí de" },
            { option: "D", answer: "fragile", chinese_answer: "脆弱的", chinese_romanization: "cuìruò de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'enduring' means lasting over a long period of time; durable." +
            "<br><br>" +
            "(A) 'momentary' means lasting for a very short time; brief." +
            "<br><br>" +
            "(C) 'passing' means lasting for only a short period of time; fleeting." +
            "<br><br>" +
            "(D) 'fragile' means easily broken or damaged.",
        chinese_explanation: "(B) '持久的' 意味着持续很长时间的；耐用的。" +
            "<br><br>" +
            "(A) '短暂的' 意味着持续时间非常短；简短的。" +
            "<br><br>" +
            "(C) '暂时的' 意味着只持续短时间；短暂的。" +
            "<br><br>" +
            "(D) '脆弱的' 意味着容易破碎或损坏。"
    },
    {
        id: 7,
        question: "The __________ details of the horror movie left the audience feeling disturbed and uneasy.",
        chinese_question: "恐怖电影的 __________ 细节让观众感到不安和紧张。",
        answers: [
            { option: "A", answer: "uplifting", chinese_answer: "振奋人心的", chinese_romanization: "zhènfèn rénxīn de" },
            { option: "B", answer: "inspiring", chinese_answer: "激励的", chinese_romanization: "jīlì de" },
            { option: "C", answer: "ghoulish", chinese_answer: "恐怖的", chinese_romanization: "kǒngbù de" },
            { option: "D", answer: "motivating", chinese_answer: "激励的", chinese_romanization: "jīlì de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'ghoulish' means morbidly interested in death or disaster; gruesome." +
            "<br><br>" +
            "(A) 'uplifting' means morally or spiritually elevating; inspiring happiness or hope." +
            "<br><br>" +
            "(B) 'inspiring' means having the effect of inspiring someone." +
            "<br><br>" +
            "(D) 'motivating' means providing someone with a reason for doing something.",
        chinese_explanation: "(C) '恐怖的' 意味着对死亡或灾难有病态兴趣的；可怕的。" +
            "<br><br>" +
            "(A) '振奋人心的' 意味着在道德或精神上提升的；激发幸福或希望的。" +
            "<br><br>" +
            "(B) '激励的' 意味着产生激励某人效果的。" +
            "<br><br>" +
            "(D) '激励的' 意味着为某人提供做某事的理由的。"
    },
    {
        id: 8,
        question: "Her __________ dedication to the cause inspired everyone around her to keep fighting for change.",
        chinese_question: "她对这项事业的 __________ 奉献激励了周围的每一个人继续为改变而奋斗。",
        answers: [
            { option: "A", answer: "fluctuating", chinese_answer: "波动的", chinese_romanization: "bōdòng de" },
            { option: "B", answer: "wavering", chinese_answer: "动摇的", chinese_romanization: "dòngyáo de" },
            { option: "C", answer: "unwavering", chinese_answer: "坚定的", chinese_romanization: "jiāndìng de" },
            { option: "D", answer: "inconsistent", chinese_answer: "不一致的", chinese_romanization: "bù yīzhì de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'unwavering' means steady or resolute; not wavering." +
            "<br><br>" +
            "(A) 'fluctuating' means rising and falling irregularly in number or amount." +
            "<br><br>" +
            "(B) 'wavering' means hesitating between two choices." +
            "<br><br>" +
            "(D) 'inconsistent' means not staying the same throughout.",
        chinese_explanation: "(C) '坚定的' 意味着稳固或坚定；不动摇的。" +
            "<br><br>" +
            "(A) '波动的' 意味着数量或金额不规则地上升和下降的。" +
            "<br><br>" +
            "(B) '动摇的' 意味着在两个选择之间犹豫的。" +
            "<br><br>" +
            "(D) '不一致的' 意味着在整个过程中不保持一致的。"
    },
    {
        id: 9,
        question: "He made a __________ comment about her work, intended to belittle her efforts in front of their colleagues.",
        chinese_question: "他对她的工作做了一个 __________ 的评论，意图在同事面前贬低她的努力。",
        answers: [
            { option: "A", answer: "snide", chinese_answer: "挖苦的", chinese_romanization: "wākǔ de" },
            { option: "B", answer: "complimentary", chinese_answer: "赞美的", chinese_romanization: "zànměi de" },
            { option: "C", answer: "respectful", chinese_answer: "尊敬的", chinese_romanization: "zūnjìng de" },
            { option: "D", answer: "sincere", chinese_answer: "真诚的", chinese_romanization: "zhēnchéng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'snide' means derogatory or mocking in an indirect way." +
            "<br><br>" +
            "(B) 'complimentary' means expressing a compliment; praising or approving." +
            "<br><br>" +
            "(C) 'respectful' means feeling or showing deference and respect." +
            "<br><br>" +
            "(D) 'sincere' means free from pretense or deceit; proceeding from genuine feelings.",
        chinese_explanation: "(A) '挖苦的' 意味着以间接方式贬低或嘲讽的。" +
            "<br><br>" +
            "(B) '赞美的' 意味着表达称赞的；赞扬或认可的。" +
            "<br><br>" +
            "(C) '尊敬的' 意味着感到或表现出尊重和敬意的。" +
            "<br><br>" +
            "(D) '真诚的' 意味着没有伪装或欺骗的；出于真挚的感情。"
    },
    {
        id: 10,
        question: "Her __________ shopping habits allowed her to save money and still live comfortably.",
        chinese_question: "她 __________ 的购物习惯使她既能省钱又能舒适地生活。",
        answers: [
            { option: "A", answer: "extravagant", chinese_answer: "奢侈的", chinese_romanization: "shēchǐ de" },
            { option: "B", answer: "wasteful", chinese_answer: "浪费的", chinese_romanization: "làngfèi de" },
            { option: "C", answer: "thrifty", chinese_answer: "节俭的", chinese_romanization: "jiéjiǎn de" },
            { option: "D", answer: "lavish", chinese_answer: "奢华的", chinese_romanization: "shēhuá de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'thrifty' means using money and other resources carefully and not wastefully." +
            "<br><br>" +
            "(A) 'extravagant' means lacking restraint in spending money or using resources." +
            "<br><br>" +
            "(B) 'wasteful' means using or expending something of value carelessly, extravagantly, or to no purpose." +
            "<br><br>" +
            "(D) 'lavish' means sumptuously rich, elaborate, or luxurious.",
        chinese_explanation: "(C) '节俭的' 意味着小心和不浪费地使用金钱和其他资源。" +
            "<br><br>" +
            "(A) '奢侈的' 意味着在花钱或使用资源方面缺乏节制。" +
            "<br><br>" +
            "(B) '浪费的' 意味着不小心、奢侈地或无目的地使用或花费有价值的东西。" +
            "<br><br>" +
            "(D) '奢华的' 意味着华丽的、精致的或奢侈的。"
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

// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "After hearing the bad news, he became __________ and uncommunicative.",
        chinese_question: "听到坏消息后，他变得__________，不愿意交流。",
        answers: [
            { option: "A", answer: "cheerful", chinese_answer: "愉快的", chinese_romanization: "yúkuài de" },
            { option: "B", answer: "upbeat", chinese_answer: "乐观的", chinese_romanization: "lèguān de" },
            { option: "C", answer: "morose", chinese_answer: "忧郁的", chinese_romanization: "yōuyù de" },
            { option: "D", answer: "happy", chinese_answer: "高兴的", chinese_romanization: "gāoxìng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'morose' means sullen and ill-tempered." +
            "<br><br>" +
            "(A) 'cheerful' means noticeably happy and optimistic." +
            "<br><br>" +
            "(B) 'upbeat' means cheerful; optimistic." +
            "<br><br>" +
            "(D) 'happy' means feeling or showing pleasure or contentment.",
        chinese_explanation: "(C) '忧郁的'一词意味着阴沉和脾气暴躁的。" +
            "<br><br>" +
            "(A) '愉快的' 意味着明显快乐和乐观的。" +
            "<br><br>" +
            "(B) '乐观的' 意味着乐观的；乐观的。" +
            "<br><br>" +
            "(D) '高兴的' 意味着感到或表现出快乐或满足。"
    },
    {
        id: 2,
        question: "He adopted a __________ attitude toward his boss, always agreeing with her, fetching her coffee without being asked, and never expressing his own opinions, even when he had better ideas.",
        chinese_question: "他对老板采取了一种 __________ 的态度，总是同意她的意见，主动为她端咖啡，从不表达自己的看法，即使他有更好的主意。",
        answers: [
            { option: "A", answer: "servile", chinese_answer: "奴性的", chinese_romanization: "núxìng de" },
            { option: "B", answer: "assertive", chinese_answer: "坚定自信的", chinese_romanization: "jiāndìng zìxìn de" },
            { option: "C", answer: "independent", chinese_answer: "独立的", chinese_romanization: "dúlì de" },
            { option: "D", answer: "defiant", chinese_answer: "挑衅的", chinese_romanization: "tiǎoxìn de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'servile' means having or showing an excessive willingness to serve or please others." +
            "<br><br>" +
            "(B) 'assertive' means having or showing a confident and forceful personality." +
            "<br><br>" +
            "(C) 'independent' means free from outside control; not depending on another's authority." +
            "<br><br>" +
            "(D) 'defiant' means showing open resistance or bold disobedience.",
        chinese_explanation: "(A) '奴性的' 意味着表现出过度愿意服务或取悦他人的。" +
            "<br><br>" +
            "(B) '坚定自信的' 意味着表现出自信和有力的个性。" +
            "<br><br>" +
            "(C) '独立的' 意味着不受外部控制的；不依赖于他人的权威的。" +
            "<br><br>" +
            "(D) '挑衅的' 意味着表现出公开的抵抗或大胆的不服从的。"
    },
    {
        id: 3,
        question: "The villain's __________ behaviour made him the most hated character in the story.",
        chinese_question: "反派的__________行为使他成为故事中最令人憎恨的角色。",
        answers: [
            { option: "A", answer: "admirable", chinese_answer: "令人钦佩的", chinese_romanization: "lìng rén qīnpèi de" },
            { option: "B", answer: "loathsome", chinese_answer: "令人憎恶的", chinese_romanization: "lìng rén zēngwù de" },
            { option: "C", answer: "commendable", chinese_answer: "值得称赞的", chinese_romanization: "zhíde chēngzàn de" },
            { option: "D", answer: "likable", chinese_answer: "讨人喜欢的", chinese_romanization: "tǎo rén xǐhuān de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'loathsome' means causing hatred or disgust; repulsive." +
            "<br><br>" +
            "(A) 'admirable' means arousing or deserving respect and approval." +
            "<br><br>" +
            "(C) 'commendable' means deserving praise." +
            "<br><br>" +
            "(D) 'likable' means (especially of a person) pleasant, friendly, and easy to like.",
        chinese_explanation: "(B) '令人憎恶的'一词意味着引起憎恨或厌恶的；令人厌恶的。" +
            "<br><br>" +
            "(A) '令人钦佩的' 意味着引起或值得尊重和认可的。" +
            "<br><br>" +
            "(C) '值得称赞的' 意味着值得称赞的。" +
            "<br><br>" +
            "(D) '讨人喜欢的' 意味着（尤指人）令人愉快、友好和容易喜欢的。"
    },
    {
        id: 4,
        question: "His __________ behavior at the party made everyone want to leave early.",
        chinese_question: "他在聚会上的 __________ 行为让每个人都想早早离开。",
        answers: [
            { option: "A", answer: "pleasant", chinese_answer: "愉快的", chinese_romanization: "yúkuài de" },
            { option: "B", answer: "charming", chinese_answer: "迷人的", chinese_romanization: "mírén de" },
            { option: "C", answer: "obnoxious", chinese_answer: "讨厌的", chinese_romanization: "tǎoyàn de" },
            { option: "D", answer: "delightful", chinese_answer: "令人高兴的", chinese_romanization: "lìng rén gāoxìng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'obnoxious' means extremely unpleasant." +
            "<br><br>" +
            "(A) 'pleasant' means giving a sense of happy satisfaction or enjoyment." +
            "<br><br>" +
            "(B) 'charming' means very pleasant or attractive." +
            "<br><br>" +
            "(D) 'delightful' means causing delight; charming.",
        chinese_explanation: "(C) '讨厌的' 意味着极其令人不快的。" +
            "<br><br>" +
            "(A) '愉快的' 意味着带来快乐满意或享受的感觉。" +
            "<br><br>" +
            "(B) '迷人的' 意味着非常愉快或有吸引力的。" +
            "<br><br>" +
            "(D) '令人高兴的' 意味着引起愉快的；迷人的。"
    },
    {
        id: 5,
        question: "The __________ garden was a favorite spot for visitors, blooming beautifully every year.",
        chinese_question: "这座 __________ 花园是游客最喜欢的地方，每年都开得很美。",
        answers: [
            { option: "A", answer: "annual", chinese_answer: "每年的", chinese_romanization: "měinián de" },
            { option: "B", answer: "perennial", chinese_answer: "多年的", chinese_romanization: "duōnián de" },
            { option: "C", answer: "temporary", chinese_answer: "临时的", chinese_romanization: "línshí de" },
            { option: "D", answer: "fleeting", chinese_answer: "短暂的", chinese_romanization: "duǎnzàn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'perennial' means lasting or existing for a long or apparently infinite time; enduring or continually recurring." +
            "<br><br>" +
            "(A) 'annual' means occurring once every year." +
            "<br><br>" +
            "(C) 'temporary' means lasting for only a limited period of time; not permanent." +
            "<br><br>" +
            "(D) 'fleeting' means lasting for a very short time.",
        chinese_explanation: "(B) '多年的' 意味着持续或存在很长时间或看似无限时间的；持久的或不断重复的。" +
            "<br><br>" +
            "(A) '每年的' 意味着每年发生一次的。" +
            "<br><br>" +
            "(C) '临时的' 意味着只持续有限时间的；不永久的。" +
            "<br><br>" +
            "(D) '短暂的' 意味着持续时间非常短的。"
    },
    {
        id: 6,
        question: "His __________ behaviour at the party, such as making personal remarks to strangers, made everyone uncomfortable.",
        chinese_question: "他在聚会上 __________ 的行为，例如对陌生人发表个人言论，让每个人都感到不舒服。",
        answers: [
            { option: "A", answer: "presumptuous", chinese_answer: "放肆的", chinese_romanization: "fàngsì de" },
            { option: "B", answer: "considerate", chinese_answer: "体贴的", chinese_romanization: "tǐtiē de" },
            { option: "C", answer: "modest", chinese_answer: "谦虚的", chinese_romanization: "qiānxū de" },
            { option: "D", answer: "timid", chinese_answer: "胆小的", chinese_romanization: "dǎnxiǎo de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'presumptuous' means failing to observe the limits of what is permitted or appropriate; overconfident or arrogant." +
            "<br><br>" +
            "(B) 'considerate' means careful not to cause inconvenience or hurt to others." +
            "<br><br>" +
            "(C) 'modest' means unassuming in the estimation of one's abilities or achievements." +
            "<br><br>" +
            "(D) 'timid' means showing a lack of courage or confidence; easily frightened.",
        chinese_explanation: "(A) '放肆的' 意味着未能遵守许可或适当的限度；过于自信或傲慢的。" +
            "<br><br>" +
            "(B) '体贴的' 意味着小心不引起别人不便或伤害的。" +
            "<br><br>" +
            "(C) '谦虚的' 意味着对自己能力或成就的估计谦逊的。" +
            "<br><br>" +
            "(D) '胆小的' 意味着表现出缺乏勇气或信心的；容易受惊的。"
    },
    {
        id: 7,
        question: "The __________ feature of the mountain was its sharp, jagged peak that stood out against the skyline.",
        chinese_question: "那座山的 __________ 特征是它尖锐、锯齿状的山峰，与天际线形成鲜明对比。",
        answers: [
            { option: "A", answer: "hidden", chinese_answer: "隐藏的", chinese_romanization: "yǐncáng de" },
            { option: "B", answer: "inconspicuous", chinese_answer: "不显眼的", chinese_romanization: "bù xiǎnyǎn de" },
            { option: "C", answer: "salient", chinese_answer: "显著的", chinese_romanization: "xiǎnzhù de" },
            { option: "D", answer: "subtle", chinese_answer: "微妙的", chinese_romanization: "wéimiào de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'salient' means most noticeable or important." +
            "<br><br>" +
            "(A) 'hidden' means kept out of sight; concealed." +
            "<br><br>" +
            "(B) 'inconspicuous' means not clearly visible or attracting attention." +
            "<br><br>" +
            "(D) 'subtle' means so delicate or precise as to be difficult to analyze or describe.",
        chinese_explanation: "(C) '显著的' 意味着最显眼或最重要的。" +
            "<br><br>" +
            "(A) '隐藏的' 意味着隐藏的；隐藏的。" +
            "<br><br>" +
            "(B) '不显眼的' 意味着不明显或不引人注意的。" +
            "<br><br>" +
            "(D) '微妙的' 意味着如此精细或精确，以至于难以分析或描述的。"
    },
    {
        id: 8,
    question: "The __________ man laughed heartily, his round belly shaking with each burst of laughter.",
    chinese_question: "那位 __________ 的男人开怀大笑，每笑一次，他圆滚滚的肚子就会跟着抖动。",
    answers: [
        { option: "A", answer: "emaciated", chinese_answer: "瘦弱的", chinese_romanization: "shòuruò de" },
        { option: "B", answer: "gaunt", chinese_answer: "憔悴的", chinese_romanization: "qiáocuì de" },
        { option: "C", answer: "slender", chinese_answer: "苗条的", chinese_romanization: "miáotiáo de" },
        { option: "D", answer: "rotund", chinese_answer: "圆胖的", chinese_romanization: "yuánpàng de" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'rotund' means plump or rounded in shape." +
        "<br><br>" +
        "(A) 'emaciated' means abnormally thin or weak, especially because of illness or a lack of food." +
        "<br><br>" +
        "(B) 'gaunt' means lean and haggard, especially because of suffering, hunger, or age." +
        "<br><br>" +
        "(C) 'slender' means gracefully thin.",
    chinese_explanation: "(D) '圆胖的' 意味着丰满或圆形的。" +
        "<br><br>" +
        "(A) '瘦弱的' 意味着异常瘦弱，尤其是因为疾病或缺乏食物。" +
        "<br><br>" +
        "(B) '憔悴的' 意味着瘦弱和憔悴，尤其是因为痛苦、饥饿或年龄。" +
        "<br><br>" +
        "(C) '苗条的' 意味着优雅地瘦。"
    },
    {
        id: 9,
        question: "Opportunities for advancement in the company were __________, leading to high employee turnover.",
        chinese_question: "公司内的晋升机会很 __________，导致员工流动率高。",
        answers: [
            { option: "A", answer: "common", chinese_answer: "常见的", chinese_romanization: "chángjiàn de" },
            { option: "B", answer: "frequent", chinese_answer: "频繁的", chinese_romanization: "pínfán de" },
            { option: "C", answer: "scarce", chinese_answer: "稀少的", chinese_romanization: "xīshǎo de" },
            { option: "D", answer: "regular", chinese_answer: "定期的", chinese_romanization: "dìngqī de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'scarce' means insufficient for the demand." +
            "<br><br>" +
            "(A) 'common' means occurring, found, or done often; prevalent." +
            "<br><br>" +
            "(B) 'frequent' means occurring or done on many occasions, in many cases, or in quick succession." +
            "<br><br>" +
            "(D) 'regular' means arranged in or constituting a constant or definite pattern, especially with the same space between individual instances.",
        chinese_explanation: "(C) '稀少的' 意味着供不应求的。" +
            "<br><br>" +
            "(A) '常见的' 意味着经常发生的；普遍的。" +
            "<br><br>" +
            "(B) '频繁的' 意味着在许多场合或许多情况下发生或进行的，或快速连续发生的。" +
            "<br><br>" +
            "(D) '定期的' 意味着安排成或构成一个恒定或明确的模式，尤其是个体实例之间有相同的空间。"
    },
    {
        id: 10,
        question: "Her __________ attitude after losing the game made it difficult for anyone to cheer her up.",
        chinese_question: "在输掉比赛后，她的 __________ 态度让任何人都很难让她高兴起来。",
        answers: [
            { option: "A", answer: "joyful", chinese_answer: "快乐的", chinese_romanization: "kuàilè de" },
            { option: "B", answer: "sulky", chinese_answer: "闷闷不乐的", chinese_romanization: "mènmènbùlè de" },
            { option: "C", answer: "elated", chinese_answer: "兴高采烈的", chinese_romanization: "xìnggāocǎiliè de" },
            { option: "D", answer: "enthusiastic", chinese_answer: "热情的", chinese_romanization: "rèqíng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'sulky' means morose, bad-tempered, and resentful." +
            "<br><br>" +
            "(A) 'joyful' means feeling, expressing, or causing great pleasure and happiness." +
            "<br><br>" +
            "(C) 'elated' means ecstatically happy." +
            "<br><br>" +
            "(D) 'enthusiastic' means having or showing intense and eager enjoyment.",
        chinese_explanation: "(B) '闷闷不乐的' 意味着愁眉苦脸、脾气暴躁和怨恨的。" +
            "<br><br>" +
            "(A) '快乐的' 意味着感到、表达或引起极大愉悦和幸福的。" +
            "<br><br>" +
            "(C) '兴高采烈的' 意味着欣喜若狂的。" +
            "<br><br>" +
            "(D) '热情的' 意味着表现出强烈和热切享受的。"
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

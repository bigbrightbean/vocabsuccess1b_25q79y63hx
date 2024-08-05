// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "The judge must remain __________ and not let personal beliefs influence the court's decision.",
    chinese_question: "法官必须保持 __________，不能让个人信仰影响法庭的决定。",
    answers: [
        { option: "A", answer: "partisan", chinese_answer: "偏袒", chinese_romanization: "piāntǎn" },
        { option: "B", answer: "biased", chinese_answer: "有偏见", chinese_romanization: "yǒu piānjiàn" },
        { option: "C", answer: "prejudiced", chinese_answer: "有成见", chinese_romanization: "yǒu chéngjiàn" },
        { option: "D", answer: "impartial", chinese_answer: "公正", chinese_romanization: "gōngzhèng" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'impartial' means treating all rivals or disputants equally; fair and just." +
        "<br><br>" +
        "(A) 'partisan' means showing strong, and sometimes blind, adherence to a particular party, faction, cause, or person." +
        "<br><br>" +
        "(B) 'biased' means unfairly prejudiced for or against someone or something." +
        "<br><br>" +
        "(C) 'prejudiced' means having or showing a dislike or distrust that is derived from prejudice; bigoted.",
    chinese_explanation: "(D) '公正' 意味着对所有对手或争执者一视同仁；公平和正义。" +
        "<br><br>" +
        "(A) '偏袒' 意味着对某个党派、派系、事业或个人表现出强烈的（有时是盲目的）支持。" +
        "<br><br>" +
        "(B) '有偏见' 意味着对某人或某事有不公平的偏见。" +
        "<br><br>" +
        "(C) '有成见' 意味着源自偏见的不喜欢或不信任；顽固。"
    },
    {
        id: 2,
        question: "The __________ beauty of the old town continues to attract tourists from around the world.",
        chinese_question: "老城的 __________ 美丽继续吸引着来自世界各地的游客。",
        answers: [
            { option: "A", answer: "fleeting", chinese_answer: "短暂的", chinese_romanization: "duǎnzàn de" },
            { option: "B", answer: "temporary", chinese_answer: "暂时的", chinese_romanization: "zànshí de" },
            { option: "C", answer: "superficial", chinese_answer: "表面的", chinese_romanization: "biǎomiàn de" },
            { option: "D", answer: "enduring", chinese_answer: "持久的", chinese_romanization: "chíjiǔ de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'enduring' means lasting over a long period of time; durable." +
            "<br><br>" +
            "(A) 'fleeting' means lasting for a very short time." +
            "<br><br>" +
            "(B) 'temporary' means lasting for only a limited period of time; not permanent." +
            "<br><br>" +
            "(C) 'superficial' means existing or occurring at or on the surface.",
        chinese_explanation: "(D) '持久的' 意味着持续很长时间的；耐用的。" +
            "<br><br>" +
            "(A) '短暂的' 意味着持续时间非常短。" +
            "<br><br>" +
            "(B) '暂时的' 意味着只持续有限的时间；非永久的。" +
            "<br><br>" +
            "(C) '表面的' 意味着存在或发生在表面上。"
    },
    {
        id: 3,
        question: "The speaker discussed the importance of living in the __________ moment and to appreciate the here and now, without worrying about the past or future.",
        chinese_question: "演讲者讨论了活在 __________ 时刻的重要性，珍惜当下，不担心过去或未来。",
        answers: [
            { option: "A", answer: "present", chinese_answer: "现在", chinese_romanization: "xiànzài" },
            { option: "B", answer: "past", chinese_answer: "过去", chinese_romanization: "guòqù" },
            { option: "C", answer: "future", chinese_answer: "未来", chinese_romanization: "wèilái" },
            { option: "D", answer: "imminent", chinese_answer: "即将发生", chinese_romanization: "jíjiāng fāshēng" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'present' means existing or occurring now." +
            "<br><br>" +
            "(B) 'past' means having happened or existed before now." +
            "<br><br>" +
            "(C) 'future' means the time or a period of time following the moment of speaking or writing." +
            "<br><br>" +
            "(D) 'imminent' means about to happen.",
        chinese_explanation: "(A) '现在' 意味着现在存在或发生。" +
            "<br><br>" +
            "(B) '过去' 意味着在现在之前发生或存在。" +
            "<br><br>" +
            "(C) '未来' 意味着在说话或写作时之后的时间或一段时间。" +
            "<br><br>" +
            "(D) '即将发生' 意味着即将发生。"
    },
    {
        id: 4,
        question: "His arrival was perfectly __________, coming just as we were about to leave for the airport, and offering us a much-needed ride.",
        chinese_question: "他的到来非常 __________，恰好在我们准备去机场的时候，他提出要载我们一程。",
        answers: [
            { option: "A", answer: "inopportune", chinese_answer: "不合时宜的", chinese_romanization: "bù hé shíyí de" },
            { option: "B", answer: "opportune", chinese_answer: "恰当的", chinese_romanization: "qiàdàng de" },
            { option: "C", answer: "awkward", chinese_answer: "尴尬的", chinese_romanization: "gāngà de" },
            { option: "D", answer: "untimely", chinese_answer: "不合时宜的", chinese_romanization: "bù hé shíyí de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'opportune' means well-chosen or particularly favorable or appropriate." +
            "<br><br>" +
            "(A) 'inopportune' means occurring at an inconvenient or inappropriate time." +
            "<br><br>" +
            "(C) 'awkward' means causing difficulty; hard to do or deal with." +
            "<br><br>" +
            "(D) 'untimely' means happening at a time that is not suitable or convenient.",
        chinese_explanation: "(B) '恰当的' 意味着选择得好或特别有利或适当的。" +
            "<br><br>" +
            "(A) '不合时宜的' 意味着在不合适或不方便的时间发生的。" +
            "<br><br>" +
            "(C) '尴尬的' 意味着引起困难的；难以处理的。" +
            "<br><br>" +
            "(D) '不合时宜的' 意味着在不合适或不方便的时间发生的。"
    },
    {
        id: 5,
        question: "She has a very __________ personality, always enjoying parties and making new friends.",
        chinese_question: "她有一个非常 __________ 的个性，总是喜欢参加聚会和结交新朋友。",
        answers: [
            { option: "A", answer: "antisocial", chinese_answer: "反社会的", chinese_romanization: "fǎn shèhuì de" },
            { option: "B", answer: "reclusive", chinese_answer: "隐居的", chinese_romanization: "yǐnjū de" },
            { option: "C", answer: "social", chinese_answer: "社交的", chinese_romanization: "shèjiāo de" },
            { option: "D", answer: "introverted", chinese_answer: "内向的", chinese_romanization: "nèixiàng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'social' means seeking or enjoying the companionship of others; friendly; sociable." +
            "<br><br>" +
            "(A) 'antisocial' means not sociable; not wanting the company of others." +
            "<br><br>" +
            "(B) 'reclusive' means avoiding the company of other people; solitary." +
            "<br><br>" +
            "(D) 'introverted' means shy, reticent, and typically concerned with one's own thoughts and feelings rather than with external things.",
        chinese_explanation: "(C) '社交的' 意味着寻求或享受他人陪伴的；友好的；善于交际的。" +
            "<br><br>" +
            "(A) '反社会的' 意味着不善于社交；不想要他人陪伴的。" +
            "<br><br>" +
            "(B) '隐居的' 意味着避免与他人交往的；孤独的。" +
            "<br><br>" +
            "(D) '内向的' 意味着害羞、沉默寡言，通常关注自己的思想和感觉而不是外部事物的。",
    },
    {
        id: 6,
        question: "The soldier's __________ actions in the battle earned him a medal of honor.",
        chinese_question: "士兵在战斗中的 __________ 行动为他赢得了一枚荣誉勋章。",
        answers: [
            { option: "A", answer: "cowardly", chinese_answer: "胆小的", chinese_romanization: "dǎnxiǎo de" },
            { option: "B", answer: "timid", chinese_answer: "胆怯的", chinese_romanization: "dǎnqiè de" },
            { option: "C", answer: "valorous", chinese_answer: "英勇的", chinese_romanization: "yīngyǒng de" },
            { option: "D", answer: "fearful", chinese_answer: "恐惧的", chinese_romanization: "kǒngjù de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'valorous' means showing great courage in the face of danger." +
            "<br><br>" +
            "(A) 'cowardly' means lacking courage." +
            "<br><br>" +
            "(B) 'timid' means showing a lack of courage or confidence." +
            "<br><br>" +
            "(D) 'fearful' means feeling or showing fear.",
        chinese_explanation: "(C) '英勇的' 意味着在面对危险时表现出巨大的勇气。" +
            "<br><br>" +
            "(A) '胆小的' 意味着缺乏勇气的。" +
            "<br><br>" +
            "(B) '胆怯的' 意味着表现出缺乏勇气或信心的。" +
            "<br><br>" +
            "(D) '恐惧的' 意味着感到或表现出恐惧的。"
    },
    {
        id: 7,
        question: "She was known for her __________ behavior, always choosing to do what was right.",
        chinese_question: "她以 __________ 的行为著称，总是选择做正确的事情。",
        answers: [
            { option: "A", answer: "dishonest", chinese_answer: "不诚实的", chinese_romanization: "bù chéngshí de" },
            { option: "B", answer: "corrupt", chinese_answer: "腐败的", chinese_romanization: "fǔbài de" },
            { option: "C", answer: "virtuous", chinese_answer: "高尚的", chinese_romanization: "gāoshàng de" },
            { option: "D", answer: "immoral", chinese_answer: "不道德的", chinese_romanization: "bù dàodé de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'virtuous' means having or showing high moral standards." +
            "<br><br>" +
            "(A) 'dishonest' means behaving or prone to behave in an untrustworthy or fraudulent way." +
            "<br><br>" +
            "(B) 'corrupt' means having or showing a willingness to act dishonestly in return for money or personal gain." +
            "<br><br>" +
            "(D) 'immoral' means not conforming to accepted standards of morality.",
        chinese_explanation: "(C) '高尚的' 意味着有或表现出高道德标准的。" +
            "<br><br>" +
            "(A) '不诚实的' 意味着行为不可信或欺骗的。" +
            "<br><br>" +
            "(B) '腐败的' 意味着愿意为了金钱或个人利益而表现出不诚实的行为。" +
            "<br><br>" +
            "(D) '不道德的' 意味着不符合接受的道德标准的。"
    },
    {
        id: 8,
        question: "The old man pointed to the distant hills and said, \"Our destination lies __________, beyond those peaks.\"",
        chinese_question: "老人指着远处的山丘说：“我们的目的地就在 __________，在那些山峰的那边。”",
        answers: [
            { option: "A", answer: "nearby", chinese_answer: "附近", chinese_romanization: "fùjìn" },
            { option: "B", answer: "here", chinese_answer: "这里", chinese_romanization: "zhèlǐ" },
            { option: "C", answer: "yonder", chinese_answer: "那边", chinese_romanization: "nàbiān" },
            { option: "D", answer: "adjacent", chinese_answer: "相邻", chinese_romanization: "xiānglín" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'yonder' means at some distance in the direction indicated; over there." +
            "<br><br>" +
            "(A) 'nearby' means close at hand; not far away." +
            "<br><br>" +
            "(B) 'here' means in, at, or to this place or position." +
            "<br><br>" +
            "(D) 'adjacent' means next to or adjoining something else.",
        chinese_explanation: "(C) '那边' 意味着在指示的方向上有一段距离；在那边。" +
            "<br><br>" +
            "(A) '附近' 意味着在近处；不远。" +
            "<br><br>" +
            "(B) '这里' 意味着在这个地方或位置。" +
            "<br><br>" +
            "(D) '相邻' 意味着紧挨着或毗邻某物。"
    },
    {
        id: 9,
        question: "The __________ snow covered the entire landscape, untouched and pure.",
        chinese_question: "__________ 的雪覆盖了整个景观，未被触动，纯净无瑕。",
        answers: [
            { option: "A", answer: "dirty", chinese_answer: "肮脏的", chinese_romanization: "āngzāng de" },
            { option: "B", answer: "polluted", chinese_answer: "污染的", chinese_romanization: "wūrǎn de" },
            { option: "C", answer: "pristine", chinese_answer: "原始的", chinese_romanization: "yuánshǐ de" },
            { option: "D", answer: "murky", chinese_answer: "昏暗的", chinese_romanization: "hūn'àn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'pristine' means in its original condition; unspoiled." +
            "<br><br>" +
            "(A) 'dirty' means covered or marked with an unclean substance." +
            "<br><br>" +
            "(B) 'polluted' means contaminated with harmful or poisonous substances." +
            "<br><br>" +
            "(D) 'murky' means dark and gloomy, especially due to thick mist.",
        chinese_explanation: "(C) '原始的' 意味着处于原始状态的；未被破坏的。" +
            "<br><br>" +
            "(A) '肮脏的' 意味着被不洁的物质覆盖或标记的。" +
            "<br><br>" +
            "(B) '污染的' 意味着被有害或有毒物质污染的。" +
            "<br><br>" +
            "(D) '昏暗的' 意味着由于浓雾而变得黑暗和阴沉的。"
    },
    {
        id: 10,
        question: "His __________ lifestyle, which included living in a tiny house and traveling the world on a bicycle, fascinated many.",
        chinese_question: "他 __________ 的生活方式，包括住在小房子里并骑自行车环游世界，吸引了许多人的兴趣。",
        answers: [
            { option: "A", answer: "conventional", chinese_answer: "常规", chinese_romanization: "chángguī" },
            { option: "B", answer: "routine", chinese_answer: "日常", chinese_romanization: "rìcháng" },
            { option: "C", answer: "ordinary", chinese_answer: "普通", chinese_romanization: "pǔtōng" },
            { option: "D", answer: "unconventional", chinese_answer: "非传统", chinese_romanization: "fēi chuántǒng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'unconventional' means not based on or conforming to what is generally done or believed." +
            "<br><br>" +
            "(A) 'conventional' means based on or in accordance with what is generally done or believed." +
            "<br><br>" +
            "(B) 'routine' means performed as part of a regular procedure rather than for a special reason." +
            "<br><br>" +
            "(C) 'ordinary' means with no special or distinctive features; normal.",
        chinese_explanation: "(D) '非传统' 意味着不基于或不符合通常的做法或信仰。" +
            "<br><br>" +
            "(A) '常规' 意味着基于或符合通常的做法或信仰。" +
            "<br><br>" +
            "(B) '日常' 意味着作为常规程序的一部分执行，而不是因为特殊原因。" +
            "<br><br>" +
            "(C) '普通' 意味着没有特殊或独特的特征；正常的。"
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

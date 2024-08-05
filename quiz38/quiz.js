// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
            question: "He gave a __________ shrug when asked about his plans, as if he didn't care much.",
            chinese_question: "当被问及他的计划时，他 __________ 地耸了耸肩，似乎并不在意。",
            answers: [
                { option: "A", answer: "concerned", chinese_answer: "关心的", chinese_romanization: "guānxīn de" },
                { option: "B", answer: "anxious", chinese_answer: "焦虑的", chinese_romanization: "jiāolǜ de" },
                { option: "C", answer: "worried", chinese_answer: "担心的", chinese_romanization: "dānxīn de" },
                { option: "D", answer: "nonchalant", chinese_answer: "漠不关心的", chinese_romanization: "mò bù guān xīn de" }
            ],
            correctAnswer: "D",
            explanation: "(D) 'nonchalant' means feeling or appearing casually calm and relaxed; not displaying anxiety, interest, or enthusiasm." +
                "<br><br>" +
                "(A) 'concerned' means worried, troubled, or anxious." +
                "<br><br>" +
                "(B) 'anxious' means experiencing worry, unease, or nervousness." +
                "<br><br>" +
                "(C) 'worried' means anxious or troubled about actual or potential problems.",
            chinese_explanation: "(D) '漠不关心的' 意味着表现出或显得随意冷静和放松；不显示焦虑、兴趣或热情的。" +
                "<br><br>" +
                "(A) '关心的' 意味着担心的、困扰的或焦虑的。" +
                "<br><br>" +
                "(B) '焦虑的' 意味着经历担忧、不安或紧张的。" +
                "<br><br>" +
                "(C) '担心的' 意味着对实际或潜在问题感到焦虑或困扰的。"
    },
    {
        id: 2,
    question: "The storm was __________, battering the coast with heavy rains and strong winds for days on end.",
    chinese_question: "风暴是 __________ 的，连续几天用暴雨和强风袭击海岸。",
    answers: [
        { option: "A", answer: "gentle", chinese_answer: "温和的", chinese_romanization: "wēnhé de" },
        { option: "B", answer: "brief", chinese_answer: "短暂的", chinese_romanization: "duǎnzàn de" },
        { option: "C", answer: "sporadic", chinese_answer: "零星的", chinese_romanization: "língxīng de" },
        { option: "D", answer: "unrelenting", chinese_answer: "无情的", chinese_romanization: "wúqíng de" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'unrelenting' means not yielding in strength, severity, or determination." +
        "<br><br>" +
        "(A) 'gentle' means mild in temperament or behavior; kind or tender." +
        "<br><br>" +
        "(B) 'brief' means of short duration." +
        "<br><br>" +
        "(C) 'sporadic' means occurring at irregular intervals or only in a few places; scattered or isolated.",
    chinese_explanation: "(D) '无情的' 意味着在强度、严重性或决心上不屈服的。" +
        "<br><br>" +
        "(A) '温和的' 意味着性情温和或行为温和；善良或温柔的。" +
        "<br><br>" +
        "(B) '短暂的' 意味着持续时间短的。" +
        "<br><br>" +
        "(C) '零星的' 意味着不定期发生的或仅在少数地方发生的；分散的或孤立的。"
    },
    {
        id: 3,
        question: "The __________ change in temperature caught everyone by surprise, forcing them to quickly adapt.",
        chinese_question: "温度的 __________ 变化让所有人措手不及，迫使他们迅速适应。",
        answers: [
            { option: "A", answer: "gradual", chinese_answer: "逐渐的", chinese_romanization: "zhújiàn de" },
            { option: "B", answer: "predictable", chinese_answer: "可预测的", chinese_romanization: "kě yùcè de" },
            { option: "C", answer: "sudden", chinese_answer: "突然的", chinese_romanization: "túrán de" },
            { option: "D", answer: "steady", chinese_answer: "稳定的", chinese_romanization: "wěndìng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'sudden' means occurring or done quickly and unexpectedly." +
            "<br><br>" +
            "(A) 'gradual' means taking place or progressing slowly or by degrees." +
            "<br><br>" +
            "(B) 'predictable' means able to be predicted." +
            "<br><br>" +
            "(D) 'steady' means firmly fixed, supported, or balanced.",
        chinese_explanation: "(C) '突然的' 意味着迅速且出乎意料地发生的。" +
            "<br><br>" +
            "(A) '逐渐的' 意味着缓慢或逐步发生的。" +
            "<br><br>" +
            "(B) '可预测的' 意味着可以预测的。" +
            "<br><br>" +
            "(D) '稳定的' 意味着牢固地固定、支持或平衡的。"
    },
    {
        id: 4,
        question: "The floor became __________ after the spill, making it dangerous to walk on.",
        chinese_question: "洒出液体后，地板变得 __________，走起来很危险。",
        answers: [
            { option: "A", answer: "rough", chinese_answer: "粗糙的", chinese_romanization: "cūcāo de" },
            { option: "B", answer: "sticky", chinese_answer: "粘的", chinese_romanization: "nián de" },
            { option: "C", answer: "slippery", chinese_answer: "滑的", chinese_romanization: "huá de" },
            { option: "D", answer: "stable", chinese_answer: "稳定的", chinese_romanization: "wěndìng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'slippery' means difficult to hold firmly or stand on because it is smooth, wet, or slimy." +
            "<br><br>" +
            "(A) 'rough' means having an uneven or irregular surface; not smooth or level." +
            "<br><br>" +
            "(B) 'sticky' means tending or designed to stick to things on contact." +
            "<br><br>" +
            "(D) 'stable' means firmly fixed; not likely to move, fall, or change.",
        chinese_explanation: "(C) '滑的' 意味着因为表面光滑、湿或粘而难以牢固地抓住或站住。" +
            "<br><br>" +
            "(A) '粗糙的' 意味着表面不平整的；不光滑或不平的。" +
            "<br><br>" +
            "(B) '粘的' 意味着倾向于或设计成在接触时粘附于物体的。" +
            "<br><br>" +
            "(D) '稳定的' 意味着牢固固定的；不容易移动、掉落或改变的。"
    },
    {
        id: 5,
        question: "The doctor informed him that his diet was __________ in essential vitamins, which was affecting his overall health.",
        chinese_question: "医生告诉他，他的饮食中 __________ 必需的维生素，这影响了他的整体健康。",
        answers: [
            { option: "A", answer: "rich", chinese_answer: "丰富的", chinese_romanization: "fēngfù de" },
            { option: "B", answer: "deficient", chinese_answer: "缺乏的", chinese_romanization: "quēfá de" },
            { option: "C", answer: "abundant", chinese_answer: "大量的", chinese_romanization: "dàliàng de" },
            { option: "D", answer: "sufficient", chinese_answer: "足够的", chinese_romanization: "zúgòu de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'deficient' means not having enough of a specified quality or ingredient." +
            "<br><br>" +
            "(A) 'rich' means having a lot of something." +
            "<br><br>" +
            "(C) 'abundant' means existing or available in large quantities." +
            "<br><br>" +
            "(D) 'sufficient' means enough; adequate.",
        chinese_explanation: "(B) '缺乏的' 意味着没有足够的特定质量或成分。" +
            "<br><br>" +
            "(A) '丰富的' 意味着有很多的。" +
            "<br><br>" +
            "(C) '大量的' 意味着存在或可用的大量。" +
            "<br><br>" +
            "(D) '足够的' 意味着足够的；充足的。"
    },
    {
        id: 6,
    question: "The businessman made a __________ decision that saved the company millions.",
    chinese_question: "这位商人做出了一个 __________ 的决定，为公司节省了数百万。",
    answers: [
        { option: "A", answer: "naive", chinese_answer: "天真", chinese_romanization: "tiānzhēn" },
        { option: "B", answer: "careless", chinese_answer: "粗心", chinese_romanization: "cūxīn" },
        { option: "C", answer: "foolish", chinese_answer: "愚蠢", chinese_romanization: "yúchǔn" },
        { option: "D", answer: "shrewd", chinese_answer: "精明", chinese_romanization: "jīngmíng" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'shrewd' means having or showing sharp powers of judgment; astute." +
        "<br><br>" +
        "(A) 'naive' means showing a lack of experience, wisdom, or judgment." +
        "<br><br>" +
        "(B) 'careless' means not giving sufficient attention or thought to avoiding harm or errors." +
        "<br><br>" +
        "(C) 'foolish' means lacking good sense or judgment.",
    chinese_explanation: "(D) '精明' 意味着拥有或表现出敏锐的判断力；精明。" +
        "<br><br>" +
        "(A) '天真' 意味着缺乏经验、智慧或判断。" +
        "<br><br>" +
        "(B) '粗心' 意味着没有足够的关注或考虑避免伤害或错误。" +
        "<br><br>" +
        "(C) '愚蠢' 意味着缺乏良好的判断力或判断力。"
    },
    {
        id: 7,
        question: "The __________ smell coming from the kitchen made everyone curious about what was cooking, as it was an odd and unexpected mix of aromas, unlike anything they had smelled before.",
        chinese_question: "从厨房传来的 __________ 气味让每个人都对正在烹饪的东西感到好奇，因为那是一种奇怪且意想不到的香味组合，与他们以前闻到的任何东西都不同。",
        answers: [
            { option: "A", answer: "redolent", chinese_answer: "芬芳的", chinese_romanization: "fēnfāng de" },
            { option: "B", answer: "peculiar", chinese_answer: "奇怪的", chinese_romanization: "qíguài de" },
            { option: "C", answer: "common", chinese_answer: "常见的", chinese_romanization: "chángjiàn de" },
            { option: "D", answer: "ordinary", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'peculiar' means strange or unusual." +
            "<br><br>" +
            "(A) 'redolent' means strongly reminiscent or suggestive of something, often associated with pleasant smells." +
            "<br><br>" +
            "(C) 'common' means occurring, found, or done often; prevalent." +
            "<br><br>" +
            "(D) 'ordinary' means with no special or distinctive features; normal.",
        chinese_explanation: "(B) '奇怪的' 意味着奇怪或不寻常。" +
            "<br><br>" +
            "(A) '芬芳的' 意味着强烈地让人联想起某物，通常与愉快的气味有关。" +
            "<br><br>" +
            "(C) '常见的' 意味着经常发生、发现或完成的；普遍的。" +
            "<br><br>" +
            "(D) '普通的' 意味着没有特殊或独特的特征；正常的。"
    },
    {
        id: 8,
        question: "Her __________ remarks during the meeting offended many of her colleagues.",
        chinese_question: "她在会议上的 __________ 言论冒犯了许多同事。",
        answers: [
            { option: "A", answer: "tactful", chinese_answer: "圆滑的", chinese_romanization: "yuánhuá de" },
            { option: "B", answer: "reckless", chinese_answer: "鲁莽的", chinese_romanization: "lǔmǎng de" },
            { option: "C", answer: "diplomatic", chinese_answer: "外交的", chinese_romanization: "wàijiāo de" },
            { option: "D", answer: "thoughtful", chinese_answer: "体贴的", chinese_romanization: "tǐtiē de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'reckless' means without thinking or caring about the consequences of an action." +
            "<br><br>" +
            "(A) 'tactful' means having or showing skill and sensitivity in dealing with others or with difficult issues." +
            "<br><br>" +
            "(C) 'diplomatic' means having or showing an ability to deal with people in a sensitive and effective way." +
            "<br><br>" +
            "(D) 'thoughtful' means showing consideration for the needs of other people.",
        chinese_explanation: "(B) '鲁莽的' 意味着不考虑或不在乎行为的后果。" +
            "<br><br>" +
            "(A) '圆滑的' 意味着在处理他人或困难问题时有技巧和敏感性。" +
            "<br><br>" +
            "(C) '外交的' 意味着表现出处理人际关系敏感和有效的方法的。" +
            "<br><br>" +
            "(D) '体贴的' 意味着表现出对他人需要的关心。"
    },
    {
        id: 9,
        question: "The inspector found __________ conditions in the factory, with waste materials scattered all over the floor.",
        chinese_question: "检查员在工厂发现了 __________ 的条件，废料散落在地板上。",
        answers: [
            { option: "A", answer: "pristine", chinese_answer: "原始的", chinese_romanization: "yuánshǐ de" },
            { option: "B", answer: "clean", chinese_answer: "干净的", chinese_romanization: "gānjìng de" },
            { option: "C", answer: "unsanitary", chinese_answer: "不卫生的", chinese_romanization: "bù wèishēng de" },
            { option: "D", answer: "orderly", chinese_answer: "整齐的", chinese_romanization: "zhěngqí de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'unsanitary' means not clean or sterile; likely to cause disease." +
            "<br><br>" +
            "(A) 'pristine' means in its original condition; unspoiled." +
            "<br><br>" +
            "(B) 'clean' means free from dirt, marks, or stains." +
            "<br><br>" +
            "(D) 'orderly' means neatly and methodically arranged.",
        chinese_explanation: "(C) '不卫生的' 意味着不干净或无菌；可能导致疾病的。" +
            "<br><br>" +
            "(A) '原始的' 意味着处于原始状态的；未被破坏的。" +
            "<br><br>" +
            "(B) '干净的' 意味着没有污垢、痕迹或污渍的。" +
            "<br><br>" +
            "(D) '整齐的' 意味着整齐和有条理地安排的。"
    },
    {
        id: 10,
        question: "It was __________ to see someone else take credit for her hard work.",
        chinese_question: "看到别人为她的辛勤工作而获得荣誉，这令人 __________。",
        answers: [
            { option: "A", answer: "pleasing", chinese_answer: "愉快", chinese_romanization: "yúkuài" },
            { option: "B", answer: "galling", chinese_answer: "令人恼火", chinese_romanization: "lìng rén nǎohuǒ" },
            { option: "C", answer: "satisfying", chinese_answer: "满足", chinese_romanization: "mǎnzú" },
            { option: "D", answer: "comforting", chinese_answer: "安慰", chinese_romanization: "ānwèi" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'galling' means annoying; humiliating." +
            "<br><br>" +
            "(A) 'pleasing' means giving pleasure; satisfying." +
            "<br><br>" +
            "(C) 'satisfying' means giving fulfillment or the pleasure associated with this." +
            "<br><br>" +
            "(D) 'comforting' means serving to alleviate a person's feelings of grief or distress.",
        chinese_explanation: "(B) '令人恼火' 意味着令人恼火的；羞辱的。" +
            "<br><br>" +
            "(A) '愉快' 意味着带来愉悦；令人满意的。" +
            "<br><br>" +
            "(C) '满足' 意味着带来满足感或与此相关的愉悦。" +
            "<br><br>" +
            "(D) '安慰' 意味着缓解一个人的悲伤或痛苦。"
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

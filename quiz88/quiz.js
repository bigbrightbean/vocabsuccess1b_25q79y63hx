// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
    question: "Despite his fear, he managed to __________ the strength to confront his boss.",
    chinese_question: "尽管害怕，他还是设法 __________ 勇气去面对他的老板。",
    answers: [
        { option: "A", answer: "squander", chinese_answer: "浪费", chinese_romanization: "làngfèi" },
        { option: "B", answer: "muster", chinese_answer: "鼓起", chinese_romanization: "gǔqǐ" },
        { option: "C", answer: "abandon", chinese_answer: "放弃", chinese_romanization: "fàngqì" },
        { option: "D", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'muster' means to gather or summon, especially strength or courage." +
        "<br><br>" +
        "(A) 'squander' means to waste in a reckless or foolish manner." +
        "<br><br>" +
        "(C) 'abandon' means to give up completely." +
        "<br><br>" +
        "(D) 'ignore' means to refuse to take notice of.",
    chinese_explanation: "(B) '鼓起' 意味着聚集或召集，特别是力量或勇气。" +
        "<br><br>" +
        "(A) '浪费' 意味着以鲁莽或愚蠢的方式浪费。" +
        "<br><br>" +
        "(C) '放弃' 意味着完全放弃。" +
        "<br><br>" +
        "(D) '忽视' 意味着拒绝注意。"
    },
    {
        id: 2,
    question: "He had to __________ before his boss to keep his job after making a huge mistake.",
    chinese_question: "他不得不在老板面前 __________，以保住工作，因为他犯了一个大错误。",
    answers: [
        { option: "A", answer: "resist", chinese_answer: "抵抗", chinese_romanization: "dǐkàng" },
        { option: "B", answer: "grovel", chinese_answer: "卑躬屈膝", chinese_romanization: "bēigōngqūxī" },
        { option: "C", answer: "laugh", chinese_answer: "笑", chinese_romanization: "xiào" },
        { option: "D", answer: "boast", chinese_answer: "吹嘘", chinese_romanization: "chuīxū" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'grovel' means to lie or crawl abjectly on the ground with one's face downward, often to beg for forgiveness or favor." +
        "<br><br>" +
        "(A) 'resist' means to withstand the action or effect of." +
        "<br><br>" +
        "(C) 'laugh' means to make the spontaneous sounds and movements of the face and body that are the instinctive expressions of lively amusement." +
        "<br><br>" +
        "(D) 'boast' means to talk with excessive pride and self-satisfaction about one's achievements, possessions, or abilities.",
    chinese_explanation: "(B) '卑躬屈膝' 意味着俯卧或匍匐在地，脸朝下，通常是为了乞求原谅或恩惠。" +
        "<br><br>" +
        "(A) '抵抗' 意味着承受某事物的作用或影响。" +
        "<br><br>" +
        "(C) '笑' 意味着做出自发的声音和面部和身体的动作，这些是生动娱乐的本能表达。" +
        "<br><br>" +
        "(D) '吹嘘' 意味着以过分的骄傲和自满谈论自己的成就、财产或能力。"
    },
    {
        id: 3,
    question: "The villagers __________ the king to provide more food during the famine.",
    chinese_question: "村民们 __________ 国王在饥荒期间提供更多的食物。",
    answers: [
        { option: "A", answer: "entreated", chinese_answer: "恳求", chinese_romanization: "kěnqiú" },
        { option: "B", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "C", answer: "commanded", chinese_answer: "命令", chinese_romanization: "mìnglìng" },
        { option: "D", answer: "punished", chinese_answer: "惩罚", chinese_romanization: "chéngfá" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'entreated' means to ask someone earnestly or anxiously to do something." +
        "<br><br>" + 
        "(B) 'ignored' means to refuse to take notice of or acknowledge." +
        "<br><br>" + 
        "(C) 'commanded' means to give an authoritative order." +
        "<br><br>" + 
        "(D) 'punished' means to inflict a penalty or sanction on someone.",
    chinese_explanation: "(A) '恳求' 意味着诚恳或焦急地请求某人做某事。" +
        "<br><br>" + 
        "(B) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" + 
        "(C) '命令' 意味着发布权威性的指示。" +
        "<br><br>" + 
        "(D) '惩罚' 意味着对某人施加处罚或制裁。"
    },
    {
        id: 4,
        question: "With heavy hearts, the community __________ the closure of the local library, a cherished institution, by writing letters of protest and organizing rallies.",
        chinese_question: "社区怀着沉重的心情通过写抗议信和组织集会来 __________ 本地图书馆的关闭，这是一所备受珍爱的机构。",
        answers: [
            { option: "A", answer: "ignored", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "B", answer: "celebrated", chinese_answer: "庆祝", chinese_romanization: "qìngzhù" },
            { option: "C", answer: "assisted", chinese_answer: "帮助", chinese_romanization: "bāngzhù" },
            { option: "D", answer: "lamented", chinese_answer: "哀叹", chinese_romanization: "āitàn" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'lamented' means to express sorrow, mourning, or regret, used figuratively here." +
            "<br><br>" +
            "(A) 'ignored' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(B) 'celebrated' means to acknowledge a significant or happy day or event with a social gathering or enjoyable activity." +
            "<br><br>" +
            "(C) 'assisted' means to help someone.",
        chinese_explanation: "(D) '哀叹' 意味着表达悲伤、哀悼或遗憾，这里是比喻用法。" +
            "<br><br>" +
            "(A) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(B) '庆祝' 意味着通过社交聚会或愉快的活动来承认一个重要或快乐的日子或事件。" +
            "<br><br>" +
            "(C) '帮助' 意味着帮助某人。"
    },
    {
        id: 5,
    question: "The way he chews his food loudly __________ everyone at the dinner table.",
    chinese_question: "他大声咀嚼食物的方式让餐桌上的每个人都感到 __________。",
    answers: [
        { option: "A", answer: "delights", chinese_answer: "高兴", chinese_romanization: "gāoxìng" },
        { option: "B", answer: "irks", chinese_answer: "激怒", chinese_romanization: "jīnù" },
        { option: "C", answer: "comforts", chinese_answer: "安慰", chinese_romanization: "ānwèi" },
        { option: "D", answer: "praises", chinese_answer: "赞扬", chinese_romanization: "zànyáng" }
    ],
    correctAnswer: "B",
    explanation: "(B) 'irks' used figuratively means to irritate or annoy." +
        "<br><br>" +
        "(A) 'delights' means to please greatly." +
        "<br><br>" +
        "(C) 'comforts' means to ease the grief or distress of someone." +
        "<br><br>" +
        "(D) 'praises' means to express warm approval or admiration of.",
    chinese_explanation: "(B) '激怒' 在比喻意义上指刺激或惹恼。" +
        "<br><br>" +
        "(A) '高兴' 意味着让某人感到极大的愉悦。" +
        "<br><br>" +
        "(C) '安慰' 意味着减轻某人的悲伤或痛苦。" +
        "<br><br>" +
        "(D) '赞扬' 意味着表达热烈的认可或钦佩。"
    },
    {
        id: 6,
    question: "The difficult question during the interview seemed to __________ the candidate, making him stammer and fidget nervously.",
    chinese_question: "面试中的这个难题似乎让这位候选人感到 __________，让他结结巴巴并紧张地动来动去。",
    answers: [
        { option: "A", answer: "fluster", chinese_answer: "慌乱", chinese_romanization: "huāngluàn" },
        { option: "B", answer: "calm", chinese_answer: "平静", chinese_romanization: "píngjìng" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "reassure", chinese_answer: "安慰", chinese_romanization: "ānwèi" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'fluster' means to make someone agitated or confused." +
        "<br><br>" + 
        "(B) 'calm' means to make someone peaceful and free from disturbance." +
        "<br><br>" + 
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" + 
        "(D) 'reassure' means to say or do something to remove the doubts and fears of someone.",
    chinese_explanation: "(A) '慌乱' 意味着使某人感到不安或困惑。" +
        "<br><br>" + 
        "(B) '平静' 意味着使某人平静和远离干扰。" +
        "<br><br>" + 
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" + 
        "(D) '安慰' 意味着说或做某事以消除某人的疑虑和恐惧。"
    },
    {
        id: 7,
        question: "Instead of studying, he decided to __________ around the city all day.",
        chinese_question: "他决定整天在城市里 __________ ，而不是学习。",
        answers: [
            { option: "A", answer: "focus", chinese_answer: "专注", chinese_romanization: "zhuānzhù" },
            { option: "B", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
            { option: "C", answer: "rest", chinese_answer: "休息", chinese_romanization: "xiūxí" },
            { option: "D", answer: "gallivant", chinese_answer: "闲逛", chinese_romanization: "xiánguàng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'gallivant' means to go around from one place to another in the pursuit of pleasure or entertainment." +
            "<br><br>" +
            "(A) 'focus' means to concentrate attention or effort." +
            "<br><br>" +
            "(B) 'ignore' means to refuse to take notice of or acknowledge." +
            "<br><br>" +
            "(C) 'rest' means to cease work or movement in order to relax, refresh oneself, or recover strength.",
        chinese_explanation: "(D) '闲逛' 意味着为了追求娱乐或享受而到处闲逛。" +
            "<br><br>" +
            "(A) '专注' 意味着集中注意力或努力。" +
            "<br><br>" +
            "(B) '忽视' 意味着拒绝注意或承认。" +
            "<br><br>" +
            "(C) '休息' 意味着停止工作或活动以放松、恢复自己或恢复体力。"
    },
    {
        id: 8,
    question: "The sudden loud noise did not __________ the experienced musician during the performance.",
    chinese_question: "突如其来的巨响并没有在表演过程中 __________ 经验丰富的音乐家。",
    answers: [
        { option: "A", answer: "faze", chinese_answer: "使慌乱", chinese_romanization: "shǐ huāngluàn" },
        { option: "B", answer: "please", chinese_answer: "取悦", chinese_romanization: "qǔyuè" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "soothe", chinese_answer: "安抚", chinese_romanization: "ānfǔ" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'faze' means to disturb or disconcert someone." +
        "<br><br>" + 
        "(B) 'please' means to cause someone to feel happy and satisfied." +
        "<br><br>" + 
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" + 
        "(D) 'soothe' means to gently calm someone.",
    chinese_explanation: "(A) '使慌乱' 意味着使某人不安或困扰。" +
        "<br><br>" + 
        "(B) '取悦' 意味着让某人感到高兴和满意。" +
        "<br><br>" + 
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" + 
        "(D) '安抚' 意味着温柔地安抚某人。"
    },
    {
        id: 9,
    question: "The small streams eventually __________ to form a mighty river.",
    chinese_question: "这些小溪最终 __________ 成一条大河。",
    answers: [
        { option: "A", answer: "coalesce", chinese_answer: "合并", chinese_romanization: "hébìng" },
        { option: "B", answer: "disperse", chinese_answer: "分散", chinese_romanization: "fēnsàn" },
        { option: "C", answer: "ignore", chinese_answer: "忽视", chinese_romanization: "hūshì" },
        { option: "D", answer: "dry", chinese_answer: "干涸", chinese_romanization: "gānhé" }
    ],
    correctAnswer: "A",
    explanation: "(A) 'coalesce' means to come together to form one mass or whole." +
        "<br><br>" + 
        "(B) 'disperse' means to distribute or spread over a wide area." +
        "<br><br>" + 
        "(C) 'ignore' means to refuse to take notice of or acknowledge." +
        "<br><br>" + 
        "(D) 'dry' means to become free of moisture.",
    chinese_explanation: "(A) '合并' 意味着聚集在一起形成一个整体。" +
        "<br><br>" + 
        "(B) '分散' 意味着分布或传播到广泛区域。" +
        "<br><br>" + 
        "(C) '忽视' 意味着拒绝注意或承认。" +
        "<br><br>" + 
        "(D) '干涸' 意味着变得没有水分。"
    },
    {
        id: 10,
    question: "The charity event turned into a __________ when the caterer failed to show up, the sound system broke, and hardly anyone attended.",
    chinese_question: "慈善活动变成了一场 __________，当餐饮服务商未能出现，音响系统坏了，几乎没有人参加。",
    answers: [
        { option: "A", answer: "success", chinese_answer: "成功", chinese_romanization: "chénggōng" },
        { option: "B", answer: "triumph", chinese_answer: "胜利", chinese_romanization: "shènglì" },
        { option: "C", answer: "achievement", chinese_answer: "成就", chinese_romanization: "chéngjiù" },
        { option: "D", answer: "fiasco", chinese_answer: "惨败", chinese_romanization: "cǎnbài" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'fiasco' means a complete and humiliating failure." +
        "<br><br>" +
        "(A) 'success' means the accomplishment of an aim or purpose." +
        "<br><br>" +
        "(B) 'triumph' means a great victory or achievement." +
        "<br><br>" +
        "(C) 'achievement' means a thing done successfully, typically by effort, courage, or skill.",
    chinese_explanation: "(D) '惨败' 意味着完全和羞辱性的失败。" +
        "<br><br>" +
        "(A) '成功' 意味着目标或目的的实现。" +
        "<br><br>" +
        "(B) '胜利' 意味着伟大的胜利或成就。" +
        "<br><br>" +
        "(C) '成就' 意味着通常通过努力、勇气或技巧成功完成的事情。"
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

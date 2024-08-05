// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The company's growth was __________, doubling its profits every year.",
        chinese_question: "公司的增长是 __________ 的，每年利润翻倍。",
        answers: [
            { option: "A", answer: "linear", chinese_answer: "线性的", chinese_romanization: "xiànxìng de" },
            { option: "B", answer: "slow", chinese_answer: "缓慢的", chinese_romanization: "huǎnmàn de" },
            { option: "C", answer: "exponential", chinese_answer: "指数的", chinese_romanization: "zhǐshù de" },
            { option: "D", answer: "gradual", chinese_answer: "逐渐的", chinese_romanization: "zhújiàn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'exponential' means increasing very quickly at a constant rate." +
            "<br><br>" +
            "(A) 'linear' means increasing or changing at the same rate, like moving in a straight line." +
            "<br><br>" +
            "(B) 'slow' means taking a long time to increase or change, not fast." +
            "<br><br>" +
            "(D) 'gradual' means happening slowly over a period of time, step by step.",
        chinese_explanation: "(C) '指数的' 意味着以非常快的速度增长。" +
            "<br><br>" +
            "(A) '线性的' 意味着以相同的速度增长或变化，就像沿直线移动一样。" +
            "<br><br>" +
            "(B) '缓慢的' 意味着需要很长时间增长或变化，不快。" +
            "<br><br>" +
            "(D) '逐渐的' 意味着在一段时间内慢慢发生，一步一步地。"
    },
    {
        id: 2,
        question: "Her __________ skills allowed her to adapt to various roles within the company.",
        chinese_question: "她的__________技能使她能够适应公司内的各种角色。",
        answers: [
            { option: "A", answer: "limited", chinese_answer: "有限的", chinese_romanization: "yǒuxiàn de" },
            { option: "B", answer: "versatile", chinese_answer: "多才多艺的", chinese_romanization: "duōcáiduōyì de" },
            { option: "C", answer: "narrow", chinese_answer: "狭窄的", chinese_romanization: "xiázhǎi de" },
            { option: "D", answer: "specialized", chinese_answer: "专门的", chinese_romanization: "zhuānmén de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'versatile' means able to do many different things well or adapt to different situations easily." +
            "<br><br>" +
            "(A) 'limited' means not very much or not enough." +
            "<br><br>" +
            "(C) 'narrow' means small or not wide, with a limited range." +
            "<br><br>" +
            "(D) 'specialized' means having a lot of knowledge or skill in one particular area.",
        chinese_explanation: "(B) '多才多艺的' 意味着能够很好地做许多不同的事情或轻松适应不同的情况。" +
            "<br><br>" +
            "(A) '有限的' 意味着不多或不够。" +
            "<br><br>" +
            "(C) '狭窄的' 意味着小或不宽，范围有限。" +
            "<br><br>" +
            "(D) '专门的' 意味着在一个特定领域有很多知识或技能。"
    },
    {
        id: 3,
        question: "She felt __________ after hearing the bad news, her face reflecting her sadness.",
        chinese_question: "听到坏消息后，她感到 __________，脸上显露出她的悲伤。",
        answers: [
            { option: "A", answer: "joyful", chinese_answer: "高兴", chinese_romanization: "gāoxìng" },
            { option: "B", answer: "cheerful", chinese_answer: "快乐", chinese_romanization: "kuàilè" },
            { option: "C", answer: "glum", chinese_answer: "忧郁", chinese_romanization: "yōuyù" },
            { option: "D", answer: "happy", chinese_answer: "开心", chinese_romanization: "kāixīn" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'glum' means looking or feeling dejected; morose." +
            "<br><br>" +
            "(A) 'joyful' means feeling, expressing, or causing great pleasure and happiness." +
            "<br><br>" +
            "(B) 'cheerful' means noticeably happy and optimistic." +
            "<br><br>" +
            "(D) 'happy' means feeling or showing pleasure or contentment.",
        chinese_explanation: "(C) '忧郁' 意味着看起来或感到沮丧；阴郁的。" +
            "<br><br>" +
            "(A) '高兴' 意味着感到、表达或引起极大的快乐和幸福。" +
            "<br><br>" +
            "(B) '快乐' 意味着显著地快乐和乐观。" +
            "<br><br>" +
            "(D) '开心' 意味着感到或表现出快乐或满足。"
    },
    {
        id: 4,
        question: "The movie's __________ scenes left the audience feeling uneasy and disturbed.",
        chinese_question: "电影的 __________ 场景让观众感到不安和困扰。",
        answers: [
            { option: "A", answer: "calming", chinese_answer: "镇静的", chinese_romanization: "zhènjìng de" },
            { option: "B", answer: "soothing", chinese_answer: "安抚的", chinese_romanization: "ānfǔ de" },
            { option: "C", answer: "unsettling", chinese_answer: "令人不安的", chinese_romanization: "lìng rén bù'ān de" },
            { option: "D", answer: "reassuring", chinese_answer: "令人安心的", chinese_romanization: "lìng rén ānxīn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'unsettling' means causing anxiety or uneasiness." +
            "<br><br>" +
            "(A) 'calming' means reducing stress or anxiety." +
            "<br><br>" +
            "(B) 'soothing' means having a calming effect." +
            "<br><br>" +
            "(D) 'reassuring' means giving comfort or confidence.",
        chinese_explanation: "(C) '令人不安的' 意味着引起焦虑或不安的。" +
            "<br><br>" +
            "(A) '镇静的' 意味着减少压力或焦虑的。" +
            "<br><br>" +
            "(B) '安抚的' 意味着具有镇静效果的。" +
            "<br><br>" +
            "(D) '令人安心的' 意味着提供安慰或信心的。"
    },
    {
        id: 5,
        question: "The meal was both delicious and __________, providing all the essential vitamins and minerals.",
        chinese_question: "这顿饭既美味又__________，提供了所有必需的维生素和矿物质。",
        answers: [
            { option: "A", answer: "unhealthy", chinese_answer: "不健康的", chinese_romanization: "bù jiànkāng de" },
            { option: "B", answer: "bland", chinese_answer: "平淡的", chinese_romanization: "píngdàn de" },
            { option: "C", answer: "nutritious", chinese_answer: "有营养的", chinese_romanization: "yǒu yíngyǎng de" },
            { option: "D", answer: "tasteless", chinese_answer: "无味的", chinese_romanization: "wúwèi de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'nutritious' means efficient as food; nourishing." +
            "<br><br>" +
            "(A) 'unhealthy' means harmful to health." +
            "<br><br>" +
            "(B) 'bland' means lacking strong features or characteristics and therefore uninteresting." +
            "<br><br>" +
            "(D) 'tasteless' means lacking flavor.",
        chinese_explanation: "(C) '有营养的'一词意味着作为食物有效的；滋养的。" +
            "<br><br>" +
            "(A) '不健康的' 意味着对健康有害的。" +
            "<br><br>" +
            "(B) '平淡的' 意味着缺乏强烈特征或特点的，因此无趣的。" +
            "<br><br>" +
            "(D) '无味的' 意味着缺乏味道的。"
    },
    {
        id: 6,
        question: "His __________ enthusiasm for the project sometimes annoyed his coworkers, because he often interrupted their work with unnecessary updates.",
        chinese_question: "他对项目的__________热情有时会惹恼同事，因为他经常用不必要的更新打断他们的工作。",
        answers: [
            { option: "A", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mò bù guānxīn de" },
            { option: "B", answer: "apathetic", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
            { option: "C", answer: "overzealous", chinese_answer: "过于热心的", chinese_romanization: "guòyú rèxīn de" },
            { option: "D", answer: "uninterested", chinese_answer: "不感兴趣的", chinese_romanization: "bù gǎn xìngqù de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'overzealous' means too zealous in attitude or behavior." +
            "<br><br>" +
            "(A) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(B) 'apathetic' means showing or feeling no interest, enthusiasm, or concern." +
            "<br><br>" +
            "(D) 'uninterested' means not interested in or concerned about something or someone.",
        chinese_explanation: "(C) '过于热心的'一词意味着在态度或行为上过于热心的。" +
            "<br><br>" +
            "(A) '漠不关心的' 意味着没有特别的兴趣或同情；不关心的。" +
            "<br><br>" +
            "(B) '冷漠的' 意味着表现出或感受不到兴趣、热情或关心的。" +
            "<br><br>" +
            "(D) '不感兴趣的' 意味着对某事或某人不感兴趣或不关心的。"
    },
    {
        id: 7,
        question: "The new software is very __________, with an intuitive interface that even beginners can navigate easily.",
        chinese_question: "这款新软件非常 __________，界面直观，即使是初学者也能轻松使用。",
        answers: [
            { option: "A", answer: "user-friendly", chinese_answer: "用户友好的", chinese_romanization: "yònghù yǒuhǎo de" },
            { option: "B", answer: "complicated", chinese_answer: "复杂的", chinese_romanization: "fùzá de" },
            { option: "C", answer: "confusing", chinese_answer: "令人困惑的", chinese_romanization: "lìng rén kùnhuò de" },
            { option: "D", answer: "cumbersome", chinese_answer: "笨重的", chinese_romanization: "bènzhòng de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'user-friendly' means easy to use or understand." +
            "<br><br>" +
            "(B) 'complicated' means consisting of many interconnecting parts or elements; intricate." +
            "<br><br>" +
            "(C) 'confusing' means bewildering or perplexing." +
            "<br><br>" +
            "(D) 'cumbersome' means large or heavy and therefore difficult to carry or use; unwieldy.",
        chinese_explanation: "(A) '用户友好的' 意味着易于使用或理解的。" +
            "<br><br>" +
            "(B) '复杂的' 意味着由许多相互连接的部分或元素组成的；复杂的。" +
            "<br><br>" +
            "(C) '令人困惑的' 意味着使人困惑或迷惑的。" +
            "<br><br>" +
            "(D) '笨重的' 意味着大或重，因此难以携带或使用的；笨拙的。"
    },
    {
        id: 8,
        question: "Their opinions on the matter were __________ opposites, making it difficult to reach a consensus.",
        chinese_question: "他们在这个问题上的意见是__________的对立，使得达成共识变得困难。",
        answers: [
            { option: "A", answer: "similar", chinese_answer: "相似的", chinese_romanization: "xiāngsì de" },
            { option: "B", answer: "polar", chinese_answer: "极端的", chinese_romanization: "jíduān de" },
            { option: "C", answer: "aligned", chinese_answer: "一致的", chinese_romanization: "yīzhì de" },
            { option: "D", answer: "congruent", chinese_answer: "和谐的", chinese_romanization: "héxié de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'polar' means relating to the North or South Pole; characterized by complete or almost complete opposition." +
            "<br><br>" +
            "(A) 'similar' means resembling without being identical." +
            "<br><br>" +
            "(C) 'aligned' means arranged in a straight line or in correct relative positions." +
            "<br><br>" +
            "(D) 'congruent' means in agreement or harmony.",
        chinese_explanation: "(B) '极端的'一词意味着与北极或南极有关的；具有完全或几乎完全的对立性。" +
            "<br><br>" +
            "(A) '相似的' 意味着相似但不完全相同。" +
            "<br><br>" +
            "(C) '一致的' 意味着排列成一条直线或在正确的相对位置上。" +
            "<br><br>" +
            "(D) '和谐的' 意味着一致或和谐。"
    },
    {
        id: 9,
        question: "The young pianist showed __________ talent, wowing audiences with her incredible skill.",
        chinese_question: "这位年轻的钢琴家展示了__________的才华，以令人难以置信的技巧让观众赞叹不已。",
        answers: [
            { option: "A", answer: "mediocre", chinese_answer: "平庸的", chinese_romanization: "píngyōng de" },
            { option: "B", answer: "ordinary", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" },
            { option: "C", answer: "prodigious", chinese_answer: "惊人的", chinese_romanization: "jīngrén de" },
            { option: "D", answer: "average", chinese_answer: "平均的", chinese_romanization: "píngjūn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'prodigious' means remarkably or impressively great in extent, size, or degree." +
            "<br><br>" +
            "(A) 'mediocre' means of only moderate quality; not very good." +
            "<br><br>" +
            "(B) 'ordinary' means with no special or distinctive features; normal." +
            "<br><br>" +
            "(D) 'average' means having qualities that are seen as typical of a particular person or thing.",
        chinese_explanation: "(C) '惊人的'一词意味着在范围、大小或程度上显著或令人印象深刻的。" +
            "<br><br>" +
            "(A) '平庸的' 意味着质量只是一般的；不太好的。" +
            "<br><br>" +
            "(B) '普通的' 意味着没有特殊或显著特征的；正常的。" +
            "<br><br>" +
            "(D) '平均的' 意味着具有被视为某人或某事典型的特质的。"
    },
    {
        id: 10,
        question: "His __________ driving caused several near-accidents on the highway.",
        chinese_question: "他的__________驾驶在高速公路上造成了几次险些发生的事故。",
        answers: [
            { option: "A", answer: "cautious", chinese_answer: "谨慎的", chinese_romanization: "jǐnshèn de" },
            { option: "B", answer: "careful", chinese_answer: "小心的", chinese_romanization: "xiǎoxīn de" },
            { option: "C", answer: "reckless", chinese_answer: "鲁莽的", chinese_romanization: "lǔmǎng de" },
            { option: "D", answer: "prudent", chinese_answer: "慎重的", chinese_romanization: "shènzhòng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'reckless' means heedless of danger or the consequences of one's actions; rash or impetuous." +
            "<br><br>" +
            "(A) 'cautious' means careful to avoid potential problems or dangers." +
            "<br><br>" +
            "(B) 'careful' means making sure of avoiding potential danger, mishap, or harm; cautious." +
            "<br><br>" +
            "(D) 'prudent' means acting with or showing care and thought for the future.",
        chinese_explanation: "(C) '鲁莽的'一词意味着对危险或后果不顾；轻率或鲁莽的。" +
            "<br><br>" +
            "(A) '谨慎的' 意味着小心避免潜在的问题或危险的。" +
            "<br><br>" +
            "(B) '小心的' 意味着确保避免潜在的危险、意外或伤害的；谨慎的。" +
            "<br><br>" +
            "(D) '慎重的' 意味着为未来表现出谨慎和深思熟虑的行动的。"
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

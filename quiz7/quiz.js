// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The gala was an __________ affair, with extravagant decorations and gourmet food.",
        chinese_question: "这场盛会是一场 __________ 的盛事，装饰华丽，食品精致。",
        answers: [
            { option: "A", answer: "austere", chinese_answer: "简朴的", chinese_romanization: "jiǎnpǔ de" },
            { option: "B", answer: "frugal", chinese_answer: "节俭的", chinese_romanization: "jiéjiǎn de" },
            { option: "C", answer: "opulent", chinese_answer: "奢华的", chinese_romanization: "shēhuá de" },
            { option: "D", answer: "thrifty", chinese_answer: "节约的", chinese_romanization: "jiéyuē de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'opulent' means ostentatiously rich and luxurious or lavish." +
            "<br><br>" +
            "(A) 'austere' means severe or strict in manner, attitude, or appearance." +
            "<br><br>" +
            "(B) 'frugal' means sparing or economical with regard to money or food." +
            "<br><br>" +
            "(D) 'thrifty' means using money and other resources carefully and not wastefully.",
        chinese_explanation: "(C) '奢华的' 意味着显然富裕和豪华的或奢侈的。" +
            "<br><br>" +
            "(A) '简朴的' 意味着在方式、态度或外表上严厉的或严格的。" +
            "<br><br>" +
            "(B) '节俭的' 意味着在钱或食物方面节省或经济的。" +
            "<br><br>" +
            "(D) '节约的' 意味着小心和不浪费地使用金钱和其他资源的。"
    },
    {
        id: 2,
        question: "The climbers faced a __________ journey as they ascended the steep, icy mountain.",
        chinese_question: "登山者在攀登陡峭冰冷的山峰时面临着 __________ 的旅程。",
        answers: [
            { option: "A", answer: "safe", chinese_answer: "安全的", chinese_romanization: "ānquán de" },
            { option: "B", answer: "secure", chinese_answer: "可靠的", chinese_romanization: "kěkào de" },
            { option: "C", answer: "perilous", chinese_answer: "危险的", chinese_romanization: "wēixiǎn de" },
            { option: "D", answer: "easy", chinese_answer: "容易的", chinese_romanization: "róngyì de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'perilous' means full of danger or risk." +
            "<br><br>" +
            "(A) 'safe' means protected from or not exposed to danger or risk; not likely to be harmed or lost." +
            "<br><br>" +
            "(B) 'secure' means fixed or fastened so as not to give way, become loose, or be lost." +
            "<br><br>" +
            "(D) 'easy' means achieved without great effort; presenting few difficulties.",
        chinese_explanation: "(C) '危险的' 意味着充满危险或风险的。" +
            "<br><br>" +
            "(A) '安全的' 意味着受到保护或不暴露于危险或风险中；不太可能受到伤害或丢失的。" +
            "<br><br>" +
            "(B) '可靠的' 意味着固定或牢固，以至于不会让步、变松或丢失的。" +
            "<br><br>" +
            "(D) '容易的' 意味着无需太多努力就能实现的；呈现出很少困难的。"
    },
    {
        id: 3,
        question: "Her __________ personality always drew attention in social gatherings.",
        chinese_question: "她__________的个性总是在社交聚会上引起注意。",
        answers: [
            { option: "A", answer: "reserved", chinese_answer: "矜持的", chinese_romanization: "jīnchí de" },
            { option: "B", answer: "flamboyant", chinese_answer: "华丽的", chinese_romanization: "huálì de" },
            { option: "C", answer: "subdued", chinese_answer: "柔和的", chinese_romanization: "róuhé de" },
            { option: "D", answer: "modest", chinese_answer: "谦虚的", chinese_romanization: "qiānxū de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'flamboyant' means tending to attract attention because of their exuberance, confidence, and stylishness." +
            "<br><br>" +
            "(A) 'reserved' means slow to reveal emotion or opinions." +
            "<br><br>" +
            "(C) 'subdued' means quiet and rather reflective or depressed." +
            "<br><br>" +
            "(D) 'modest' means unassuming or moderate in the estimation of one's abilities or achievements.",
        chinese_explanation: "(B) '华丽的'一词意味着因其热情、自信和时尚而倾向于吸引注意力的。" +
            "<br><br>" +
            "(A) '矜持的' 意味着慢慢地透露情感或意见的。" +
            "<br><br>" +
            "(C) '柔和的' 意味着安静而且相当反思或抑郁的。" +
            "<br><br>" +
            "(D) '谦虚的' 意味着对自己的能力或成就估计上不张扬或适度的。"
    },
    {
        id: 4,
        question: "Despite the dire circumstances, she remained __________, always believing that things would get better.",
        chinese_question: "尽管情况严峻，她仍然保持 __________，始终相信事情会好转。",
        answers: [
            { option: "A", answer: "pessimistic", chinese_answer: "悲观的", chinese_romanization: "bēiguān de" },
            { option: "B", answer: "gloomy", chinese_answer: "阴郁的", chinese_romanization: "yīnyù de" },
            { option: "C", answer: "sanguine", chinese_answer: "乐观的", chinese_romanization: "lèguān de" },
            { option: "D", answer: "doubtful", chinese_answer: "怀疑的", chinese_romanization: "huáiyí de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'sanguine' means optimistic or positive, especially in an apparently bad or difficult situation." +
            "<br><br>" +
            "(A) 'pessimistic' means tending to see the worst aspect of things or believe that the worst will happen." +
            "<br><br>" +
            "(B) 'gloomy' means feeling distressed or pessimistic." +
            "<br><br>" +
            "(D) 'doubtful' means feeling uncertain about something.",
        chinese_explanation: "(C) '乐观的' 意味着在看似糟糕或困难的情况下，仍保持乐观或积极。" +
            "<br><br>" +
            "(A) '悲观的' 意味着倾向于看到事物的最坏方面或相信最坏的事情会发生。" +
            "<br><br>" +
            "(B) '阴郁的' 意味着感到沮丧或悲观的。" +
            "<br><br>" +
            "(D) '怀疑的' 意味着对某事感到不确定的。"
    },
    {
        id: 5,
        question: "Her __________ efforts to help others earned her widespread admiration.",
        chinese_question: "她__________的助人努力赢得了广泛的钦佩。",
        answers: [
            { option: "A", answer: "selfish", chinese_answer: "自私", chinese_romanization: "zìsī" },
            { option: "B", answer: "gallant", chinese_answer: "勇敢", chinese_romanization: "yǒnggǎn" },
            { option: "C", answer: "lazy", chinese_answer: "懒惰", chinese_romanization: "lǎnduò" },
            { option: "D", answer: "indifferent", chinese_answer: "漠不关心", chinese_romanization: "mòbùguānxīn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'gallant' means brave or heroic." +
            "<br><br>" +
            "(A) 'selfish' means lacking consideration for others." +
            "<br><br>" +
            "(C) 'lazy' means unwilling to work or use energy." +
            "<br><br>" +
            "(D) 'indifferent' means having no particular interest or sympathy; unconcerned.",
        chinese_explanation: "(B) '勇敢'一词意味着勇敢或英勇。" +
            "<br><br>" +
            "(A) '自私' 意味着缺乏对他人的考虑。" +
            "<br><br>" +
            "(C) '懒惰' 意味着不愿工作或使用能量。" +
            "<br><br>" +
            "(D) '漠不关心' 意味着没有特别的兴趣或同情；漠不关心。"
    },
    {
        id: 6,
        question: "He found the __________ task of filing paperwork to be extremely boring.",
        chinese_question: "他觉得整理文件的 __________ 任务非常无聊。",
        answers: [
            { option: "A", answer: "exciting", chinese_answer: "激动人心的", chinese_romanization: "jīdòng rénxīn de" },
            { option: "B", answer: "mundane", chinese_answer: "平凡的", chinese_romanization: "píngfán de" },
            { option: "C", answer: "thrilling", chinese_answer: "刺激的", chinese_romanization: "cìjī de" },
            { option: "D", answer: "exhilarating", chinese_answer: "令人振奋的", chinese_romanization: "lìngrén zhènfèn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'mundane' means lacking interest or excitement; dull." +
            "<br><br>" +
            "(A) 'exciting' means causing great enthusiasm and eagerness." +
            "<br><br>" +
            "(C) 'thrilling' means causing excitement and pleasure." +
            "<br><br>" +
            "(D) 'exhilarating' means making one feel very happy, animated, or elated.",
        chinese_explanation: "(B) '平凡的' 意味着缺乏兴趣或兴奋；乏味的。" +
            "<br><br>" +
            "(A) '激动人心的' 意味着引起极大热情和渴望的。" +
            "<br><br>" +
            "(C) '刺激的' 意味着引起兴奋和愉快的。" +
            "<br><br>" +
            "(D) '令人振奋的' 意味着使人感到非常快乐、激动或高兴的。"
    },
    {
        id: 7,
        question: "Despite their best efforts, their attempts to fix the old car proved __________, as it broke down again just a few miles down the road.",
        chinese_question: "尽管他们尽了最大努力，但修理旧车的尝试仍然是 __________ 的，因为车在刚开出几英里后又坏了。",
        answers: [
            { option: "A", answer: "successful", chinese_answer: "成功的", chinese_romanization: "chénggōng de" },
            { option: "B", answer: "easy", chinese_answer: "容易的", chinese_romanization: "róngyì de" },
            { option: "C", answer: "futile", chinese_answer: "无用的", chinese_romanization: "wúyòng de" },
            { option: "D", answer: "effective", chinese_answer: "有效的", chinese_romanization: "yǒuxiào de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'futile' means incapable of producing any useful result; pointless." +
            "<br><br>" +
            "(A) 'successful' means accomplishing an aim or purpose." +
            "<br><br>" +
            "(B) 'easy' means achieved without great effort; presenting few difficulties." +
            "<br><br>" +
            "(D) 'effective' means successful in producing a desired or intended result.",
        chinese_explanation: "(C) '无用的' 意味着不能产生任何有用的结果；无意义的。" +
            "<br><br>" +
            "(A) '成功的' 意味着完成了一个目标或目的。" +
            "<br><br>" +
            "(B) '容易的' 意味着不需要很大的努力就能实现；呈现出很少的困难。" +
            "<br><br>" +
            "(D) '有效的' 意味着成功地产生预期的结果。"
    },
    {
        id: 8,
        question: "The student's __________ behavior during the lecture shocked the teacher, as he openly mocked her instructions.",
        chinese_question: "学生在讲座上的 __________ 行为让老师震惊，因为他公然嘲笑她的指示。",
        answers: [
            { option: "A", answer: "respectful", chinese_answer: "尊重的", chinese_romanization: "zūnzhòng de" },
            { option: "B", answer: "insolent", chinese_answer: "无礼的", chinese_romanization: "wúlǐ de" },
            { option: "C", answer: "polite", chinese_answer: "礼貌的", chinese_romanization: "lǐmào de" },
            { option: "D", answer: "courteous", chinese_answer: "有礼貌的", chinese_romanization: "yǒu lǐmào de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'insolent' means showing a rude and arrogant lack of respect." +
            "<br><br>" +
            "(A) 'respectful' means feeling or showing deference and respect." +
            "<br><br>" +
            "(C) 'polite' means having or showing behavior that is respectful and considerate of other people." +
            "<br><br>" +
            "(D) 'courteous' means polite, respectful, or considerate in manner.",
        chinese_explanation: "(B) '无礼的' 意味着表现出粗鲁和傲慢的缺乏尊重。" +
            "<br><br>" +
            "(A) '尊重的' 意味着感到或表现出敬意和尊重。" +
            "<br><br>" +
            "(C) '礼貌的' 意味着表现出尊重和体贴他人的行为。" +
            "<br><br>" +
            "(D) '有礼貌的' 意味着在行为上礼貌、尊重或体贴的。",
    },
    {
        id: 9,
        question: "The __________ path through the forest twisted and turned, making it a challenging hike.",
        chinese_question: "穿过森林的__________小径曲折蜿蜒，使徒步旅行充满挑战。",
        answers: [
            { option: "A", answer: "straight", chinese_answer: "直的", chinese_romanization: "zhí de" },
            { option: "B", answer: "direct", chinese_answer: "直接的", chinese_romanization: "zhíjiē de" },
            { option: "C", answer: "serpentine", chinese_answer: "曲折的", chinese_romanization: "qūzhé de" },
            { option: "D", answer: "linear", chinese_answer: "线性的", chinese_romanization: "xiànxìng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'serpentine' means of or like a serpent or snake; winding and twisting like a snake." +
            "<br><br>" +
            "(A) 'straight' means extending or moving uniformly in one direction only; without a curve or bend." +
            "<br><br>" +
            "(B) 'direct' means extending or moving from one place to another by the shortest way without changing direction or stopping." +
            "<br><br>" +
            "(D) 'linear' means arranged in or extending along a straight or nearly straight line.",
        chinese_explanation: "(C) '曲折的'一词意味着像蛇或蛇一样的；像蛇一样蜿蜒和扭曲的。" +
            "<br><br>" +
            "(A) '直的' 意味着只朝一个方向延伸或移动；没有弯曲或弯曲的。" +
            "<br><br>" +
            "(B) '直接的' 意味着通过最短的方式从一个地方延伸或移动到另一个地方，没有改变方向或停下来。" +
            "<br><br>" +
            "(D) '线性的' 意味着排列在或沿着一条直线或近乎直线延伸的。"
    },
    {
        id: 10,
        question: "The __________ path through the forest twisted and turned, making it a challenging hike.",
        chinese_question: "穿过森林的__________小径曲折蜿蜒，使徒步旅行充满挑战。",
        answers: [
            { option: "A", answer: "straight", chinese_answer: "直的", chinese_romanization: "zhí de" },
            { option: "B", answer: "direct", chinese_answer: "直接的", chinese_romanization: "zhíjiē de" },
            { option: "C", answer: "serpentine", chinese_answer: "曲折的", chinese_romanization: "qūzhé de" },
            { option: "D", answer: "linear", chinese_answer: "线性的", chinese_romanization: "xiànxìng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'serpentine' means of or like a serpent or snake; winding and twisting like a snake." +
            "<br><br>" +
            "(A) 'straight' means extending or moving uniformly in one direction only; without a curve or bend." +
            "<br><br>" +
            "(B) 'direct' means extending or moving from one place to another by the shortest way without changing direction or stopping." +
            "<br><br>" +
            "(D) 'linear' means arranged in or extending along a straight or nearly straight line.",
        chinese_explanation: "(C) '曲折的'一词意味着像蛇或蛇一样的；像蛇一样蜿蜒和扭曲的。" +
            "<br><br>" +
            "(A) '直的' 意味着只朝一个方向延伸或移动；没有弯曲或弯曲的。" +
            "<br><br>" +
            "(B) '直接的' 意味着通过最短的方式从一个地方延伸或移动到另一个地方，没有改变方向或停下来。" +
            "<br><br>" +
            "(D) '线性的' 意味着排列在或沿着一条直线或近乎直线延伸的。"
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

// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The __________ water of the mountain stream was so clear that you could see the pebbles at the bottom.",
        chinese_question: "山间小溪的 __________ 水如此清澈，以至于你可以看到底部的鹅卵石。",
        answers: [
            { option: "A", answer: "murky", chinese_answer: "昏暗的", chinese_romanization: "hūn'àn de" },
            { option: "B", answer: "cloudy", chinese_answer: "浑浊的", chinese_romanization: "húnzhuó de" },
            { option: "C", answer: "limpid", chinese_answer: "清澈的", chinese_romanization: "qīngchè de" },
            { option: "D", answer: "opaque", chinese_answer: "不透明的", chinese_romanization: "bù tòumíng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'limpid' means clear and transparent." +
            "<br><br>" +
            "(A) 'murky' means dark and gloomy, especially due to thick mist." +
            "<br><br>" +
            "(B) 'cloudy' means (of a liquid) not transparent." +
            "<br><br>" +
            "(D) 'opaque' means not able to be seen through; not transparent.",
        chinese_explanation: "(C) '清澈的' 意味着清晰透明的。" +
            "<br><br>" +
            "(A) '昏暗的' 意味着黑暗和阴沉的，特别是由于浓雾。" +
            "<br><br>" +
            "(B) '浑浊的' 意味着（液体）不透明的。" +
            "<br><br>" +
            "(D) '不透明的' 意味着不能透过看的；不透明的。"
    },
    {
        id: 2,
        question: "The waiter was very __________, making sure that we had everything we needed throughout the meal.",
        chinese_question: "服务员非常 __________，确保我们在用餐期间有我们需要的一切。",
        answers: [
            { option: "A", answer: "inattentive", chinese_answer: "不注意的", chinese_romanization: "bù zhùyì de" },
            { option: "B", answer: "attentive", chinese_answer: "注意的", chinese_romanization: "zhùyì de" },
            { option: "C", answer: "forgetful", chinese_answer: "健忘的", chinese_romanization: "jiànwàng de" },
            { option: "D", answer: "rude", chinese_answer: "粗鲁的", chinese_romanization: "cūlǔ de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'attentive' means paying close attention to something." +
            "<br><br>" +
            "(A) 'inattentive' means not paying attention to something." +
            "<br><br>" +
            "(C) 'forgetful' means apt or likely not to remember." +
            "<br><br>" +
            "(D) 'rude' means offensively impolite or ill-mannered.",
        chinese_explanation: "(B) '注意的' 意味着密切注意某事。" +
            "<br><br>" +
            "(A) '不注意的' 意味着不注意某事。" +
            "<br><br>" +
            "(C) '健忘的' 意味着容易或可能不记得。" +
            "<br><br>" +
            "(D) '粗鲁的' 意味着冒犯性的不礼貌或粗鲁的。"
    },
    {
        id: 3,
        question: "The child's __________ spirit lifted the mood of everyone around him, making the day brighter.",
        chinese_question: "孩子 __________ 的精神提振了周围每个人的情绪，让这一天变得更加明亮。",
        answers: [
            { option: "A", answer: "buoyant", chinese_answer: "欢快的", chinese_romanization: "huānkuài de" },
            { option: "B", answer: "melancholic", chinese_answer: "忧郁的", chinese_romanization: "yōuyù de" },
            { option: "C", answer: "subdued", chinese_answer: "压抑的", chinese_romanization: "yāyì de" },
            { option: "D", answer: "apathetic", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'buoyant' means cheerful and optimistic." +
            "<br><br>" +
            "(B) 'melancholic' means feeling or expressing sadness." +
            "<br><br>" +
            "(C) 'subdued' means quiet and rather reflective." +
            "<br><br>" +
            "(D) 'apathetic' means showing no interest or enthusiasm.",
        chinese_explanation: "(A) '欢快的' 意味着愉快和乐观的。" +
            "<br><br>" +
            "(B) '忧郁的' 意味着感到或表达悲伤的。" +
            "<br><br>" +
            "(C) '压抑的' 意味着安静而反思的。" +
            "<br><br>" +
            "(D) '冷漠的' 意味着没有兴趣或热情的。"
    },
    {
        id: 4,
        question: "The room was filled with a __________ atmosphere as the mourners gathered to pay their respects.",
        chinese_question: "当哀悼者聚集在一起致敬时，房间里充满了 __________ 的气氛。",
        answers: [
            { option: "A", answer: "lively", chinese_answer: "活泼的", chinese_romanization: "huópō de" },
            { option: "B", answer: "somber", chinese_answer: "阴沉的", chinese_romanization: "yīnchén de" },
            { option: "C", answer: "cheerful", chinese_answer: "愉快的", chinese_romanization: "yúkuài de" },
            { option: "D", answer: "jubilant", chinese_answer: "欢腾的", chinese_romanization: "huānténg de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'somber' means dark or dull in color or tone; gloomy." +
            "<br><br>" +
            "(A) 'lively' means full of life and energy." +
            "<br><br>" +
            "(C) 'cheerful' means noticeably happy and optimistic." +
            "<br><br>" +
            "(D) 'jubilant' means feeling or expressing great happiness and triumph.",
        chinese_explanation: "(B) '阴沉的' 意味着颜色或音调暗淡的；阴郁的。" +
            "<br><br>" +
            "(A) '活泼的' 意味着充满生命和能量的。" +
            "<br><br>" +
            "(C) '愉快的' 意味着明显感到高兴和乐观的。" +
            "<br><br>" +
            "(D) '欢腾的' 意味着感到或表达巨大幸福和胜利的。"
    },
    {
        id: 5,
        question: "He was __________ about his plans, refusing to share any details with his friends.",
        chinese_question: "他对自己的计划很 __________，拒绝与朋友分享任何细节。",
        answers: [
            { option: "A", answer: "open", chinese_answer: "公开的", chinese_romanization: "gōngkāi de" },
            { option: "B", answer: "secretive", chinese_answer: "秘密的", chinese_romanization: "mìmì de" },
            { option: "C", answer: "candid", chinese_answer: "坦率的", chinese_romanization: "tǎnshuài de" },
            { option: "D", answer: "transparent", chinese_answer: "透明的", chinese_romanization: "tòumíng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'secretive' means inclined to conceal feelings and intentions or not to disclose information." +
            "<br><br>" +
            "(A) 'open' means ready and willing to talk candidly." +
            "<br><br>" +
            "(C) 'candid' means truthful and straightforward; frank." +
            "<br><br>" +
            "(D) 'transparent' means easy to perceive or detect; having thoughts, feelings, or motives that are easily perceived.",
        chinese_explanation: "(B) '秘密的' 意味着倾向于隐藏情感和意图或不透露信息的。" +
            "<br><br>" +
            "(A) '公开的' 意味着准备和愿意坦诚交谈的。" +
            "<br><br>" +
            "(C) '坦率的' 意味着真实和直率的。" +
            "<br><br>" +
            "(D) '透明的' 意味着容易感知或察觉的；想法、感觉或动机容易被感知的。"
    },
    {
        id: 6,
        question: "The gangster was __________ for his ruthless tactics and numerous crimes.",
        chinese_question: "这名黑帮分子因其残忍的手段和众多罪行而__________。",
        answers: [
            { option: "A", answer: "unknown", chinese_answer: "不为人知的", chinese_romanization: "bù wéi rén zhī de" },
            { option: "B", answer: "reputable", chinese_answer: "有声望的", chinese_romanization: "yǒu shēngwàng de" },
            { option: "C", answer: "notorious", chinese_answer: "臭名昭著的", chinese_romanization: "chòumíng zhāozhù de" },
            { option: "D", answer: "honorable", chinese_answer: "可敬的", chinese_romanization: "kějìng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'notorious' means famous or well known, typically for some bad quality or deed." +
            "<br><br>" +
            "(A) 'unknown' means not known or familiar." +
            "<br><br>" +
            "(B) 'reputable' means having a good reputation." +
            "<br><br>" +
            "(D) 'honorable' means bringing or worthy of honor.",
        chinese_explanation: "(C) '臭名昭著的'一词意味着因某些不良品质或行为而著名的。" +
            "<br><br>" +
            "(A) '不为人知的' 意味着不知名或不熟悉的。" +
            "<br><br>" +
            "(B) '有声望的' 意味着有良好声誉的。" +
            "<br><br>" +
            "(D) '可敬的' 意味着带来或值得荣誉的。"
    },
    {
        id: 7,
        question: "The dress she wore to the party was so __________ that it attracted more stares than compliments, with its bright colors and excessive sequins.",
        chinese_question: "她穿到派对的裙子太 __________ 了，吸引了更多的注视而不是赞美，因为它的颜色太亮，亮片太多。",
        answers: [
            { option: "A", answer: "elegant", chinese_answer: "优雅的", chinese_romanization: "yōuyǎ de" },
            { option: "B", answer: "subtle", chinese_answer: "低调的", chinese_romanization: "dīdiào de" },
            { option: "C", answer: "gaudy", chinese_answer: "俗丽的", chinese_romanization: "súlì de" },
            { option: "D", answer: "plain", chinese_answer: "朴素的", chinese_romanization: "pǔsù de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'gaudy' means extravagantly bright or showy, typically so as to be tasteless." +
            "<br><br>" +
            "(A) 'elegant' means pleasingly graceful and stylish in appearance or manner." +
            "<br><br>" +
            "(B) 'subtle' means so delicate or precise as to be difficult to analyze or describe." +
            "<br><br>" +
            "(D) 'plain' means not decorated or elaborate; simple or ordinary in character.",
        chinese_explanation: "(C) '俗丽的' 意味着华而不实的亮丽或炫耀，通常显得没有品味。" +
            "<br><br>" +
            "(A) '优雅的' 意味着外表或举止上令人愉悦的优美和时尚。" +
            "<br><br>" +
            "(B) '低调的' 意味着如此微妙或精确以至于难以分析或描述的。" +
            "<br><br>" +
            "(D) '朴素的' 意味着不装饰或精致的；简单或普通的。"
    },
    {
        id: 8,
        question: "The teacher reminded the students to use __________ language in their essays.",
        chinese_question: "老师提醒学生在作文中使用 __________ 的语言。",
        answers: [
            { option: "A", answer: "informal", chinese_answer: "非正式的", chinese_romanization: "fēi zhèngshì de" },
            { option: "B", answer: "rude", chinese_answer: "粗鲁的", chinese_romanization: "cūlǔ de" },
            { option: "C", answer: "appropriate", chinese_answer: "合适的", chinese_romanization: "héshì de" },
            { option: "D", answer: "casual", chinese_answer: "随便的", chinese_romanization: "suíbiàn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'appropriate' means suitable or proper in the circumstances." +
            "<br><br>" +
            "(A) 'informal' means having a relaxed, friendly, or unofficial style, manner, or nature." +
            "<br><br>" +
            "(B) 'rude' means offensively impolite or ill-mannered." +
            "<br><br>" +
            "(D) 'casual' means relaxed and unconcerned.",
        chinese_explanation: "(C) '合适的' 意味着在情况下适当或合适的。" +
            "<br><br>" +
            "(A) '非正式的' 意味着具有轻松、友好或非正式的风格、态度或性质。" +
            "<br><br>" +
            "(B) '粗鲁的' 意味着冒犯性的不礼貌或粗鲁的。" +
            "<br><br>" +
            "(D) '随便的' 意味着放松和不关心的。"
    },
    {
        id: 9,
        question: "The drought caused __________ damage to the crops, leading to a food shortage.",
        chinese_question: "干旱对农作物造成了 __________ 的损害，导致了食物短缺。",
        answers: [
            { option: "A", answer: "mild", chinese_answer: "轻微的", chinese_romanization: "qīngwēi de" },
            { option: "B", answer: "severe", chinese_answer: "严重的", chinese_romanization: "yánzhòng de" },
            { option: "C", answer: "minor", chinese_answer: "次要的", chinese_romanization: "cìyào de" },
            { option: "D", answer: "slight", chinese_answer: "轻微的", chinese_romanization: "qīngwēi de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'severe' means very great; intense." +
            "<br><br>" +
            "(A) 'mild' means not severe, serious, or harsh." +
            "<br><br>" +
            "(C) 'minor' means lesser in importance, seriousness, or significance." +
            "<br><br>" +
            "(D) 'slight' means small in degree; inconsiderable.",
        chinese_explanation: "(B) '严重的' 意味着非常大的；强烈的。" +
            "<br><br>" +
            "(A) '轻微的' 意味着不严重、严厉或苛刻。" +
            "<br><br>" +
            "(C) '次要的' 意味着重要性、严重性或意义较小。" +
            "<br><br>" +
            "(D) '轻微的' 意味着程度小；微不足道。"
    },
    {
        id: 10,
        question: "His __________ understanding of the topic led to many mistakes in his report.",
        chinese_question: "他对该主题的 __________ 了解导致了他报告中的许多错误。",
        answers: [
            { option: "A", answer: "thorough", chinese_answer: "彻底的", chinese_romanization: "chèdǐ de" },
            { option: "B", answer: "detailed", chinese_answer: "详细的", chinese_romanization: "xiángxì de" },
            { option: "C", answer: "shallow", chinese_answer: "浅薄的", chinese_romanization: "qiǎnbó de" },
            { option: "D", answer: "comprehensive", chinese_answer: "全面的", chinese_romanization: "quánmiàn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'shallow' means not exhibiting, requiring, or capable of serious thought." +
            "<br><br>" +
            "(A) 'thorough' means complete with regard to every detail; not superficial or partial." +
            "<br><br>" +
            "(B) 'detailed' means having many details or facts; showing attention to detail." +
            "<br><br>" +
            "(D) 'comprehensive' means complete; including all or nearly all elements or aspects.",
        chinese_explanation: "(C) '浅薄的' 意味着没有表现出、要求或能够进行认真思考。" +
            "<br><br>" +
            "(A) '彻底的' 意味着在每一个细节上都很完整；不是表面或部分的。" +
            "<br><br>" +
            "(B) '详细的' 意味着有很多细节或事实；显示出对细节的关注。" +
            "<br><br>" +
            "(D) '全面的' 意味着完整的；包括所有或几乎所有元素或方面。"
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

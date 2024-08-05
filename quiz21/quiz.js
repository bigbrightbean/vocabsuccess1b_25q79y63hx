// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "Her __________ attitude always lifted the spirits of those around her, even on the toughest days.",
        chinese_question: "她的 __________ 态度总是能在最艰难的日子里提升周围人的精神。",
        answers: [
            { option: "A", answer: "pessimistic", chinese_answer: "悲观的", chinese_romanization: "bēiguān de" },
            { option: "B", answer: "gloomy", chinese_answer: "阴郁的", chinese_romanization: "yīnyù de" },
            { option: "C", answer: "upbeat", chinese_answer: "乐观的", chinese_romanization: "lèguān de" },
            { option: "D", answer: "negative", chinese_answer: "消极的", chinese_romanization: "xiāojí de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'upbeat' means cheerful and optimistic." +
            "<br><br>" +
            "(A) 'pessimistic' means tending to see the worst aspect of things or believe that the worst will happen." +
            "<br><br>" +
            "(B) 'gloomy' means causing or feeling depression or despondency." +
            "<br><br>" +
            "(D) 'negative' means consisting in or characterized by the absence rather than the presence of distinguishing features.",
        chinese_explanation: "(C) '乐观的' 意味着愉快和乐观的。" +
            "<br><br>" +
            "(A) '悲观的' 意味着倾向于看到事物的最坏方面或相信最坏的事情会发生的。" +
            "<br><br>" +
            "(B) '阴郁的' 意味着引起或感到沮丧或失望的。" +
            "<br><br>" +
            "(D) '消极的' 意味着由特征的缺乏而不是存在来表示的。"
    },
    {
        id: 2,
        question: "The cake she baked was so __________ that everyone at the party asked for a second slice.",
        chinese_question: "她烤的蛋糕非常 __________，聚会上的每个人都要求再来一块。",
        answers: [
            { option: "A", answer: "bland", chinese_answer: "平淡无味的", chinese_romanization: "píngdàn wúwèi de" },
            { option: "B", answer: "scrumptious", chinese_answer: "美味的", chinese_romanization: "měiwèi de" },
            { option: "C", answer: "unappetizing", chinese_answer: "不可口的", chinese_romanization: "bù kěkǒu de" },
            { option: "D", answer: "tasteless", chinese_answer: "无味的", chinese_romanization: "wúwèi de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'scrumptious' means extremely appetizing or delicious." +
            "<br><br>" +
            "(A) 'bland' means lacking strong features or characteristics and therefore uninteresting." +
            "<br><br>" +
            "(C) 'unappetizing' means not inviting or attractive; not likely to be pleasing or acceptable." +
            "<br><br>" +
            "(D) 'tasteless' means lacking flavor.",
        chinese_explanation: "(B) '美味的' 意味着极具食欲或美味。" +
            "<br><br>" +
            "(A) '平淡无味的' 意味着缺乏强烈特点或特征，因此无趣的。" +
            "<br><br>" +
            "(C) '不可口的' 意味着不吸引人或不具吸引力；不可能令人愉快或接受的。" +
            "<br><br>" +
            "(D) '无味的' 意味着缺乏风味的。"
    },
    {
        id: 3,
        question: "She was hired for the job because she is __________ and can fluently communicate with clients in both English and Spanish, helping bridge the language gap.",
        chinese_question: "她因为 __________ 而被雇佣，可以流利地用英语和西班牙语与客户交流，帮助弥合语言差距。",
        answers: [
            { option: "A", answer: "monolingual", chinese_answer: "单语的", chinese_romanization: "dānyǔ de" },
            { option: "B", answer: "unilingual", chinese_answer: "单语言的", chinese_romanization: "dān yǔyán de" },
            { option: "C", answer: "bilingual", chinese_answer: "双语的", chinese_romanization: "shuāngyǔ de" },
            { option: "D", answer: "linguistically-challenged", chinese_answer: "语言能力受限的", chinese_romanization: "yǔyán nénglì shòuxiàn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'bilingual' means able to speak two languages fluently." +
            "<br><br>" +
            "(A) 'monolingual' means speaking only one language." +
            "<br><br>" +
            "(B) 'unilingual' means of, relating to, or involving only one language." +
            "<br><br>" +
            "(D) 'linguistically-challenged' means having difficulty with language skills.",
        chinese_explanation: "(C) '双语的' 意味着能够流利地说两种语言。" +
            "<br><br>" +
            "(A) '单语的' 意味着只说一种语言。" +
            "<br><br>" +
            "(B) '单语言的' 意味着与仅涉及一种语言有关的。" +
            "<br><br>" +
            "(D) '语言能力受限的' 意味着在语言技能上有困难的。"
    },
    {
        id: 4,
        question: "The __________ mansion was filled with lavish decorations and expensive furniture.",
        chinese_question: "这座 __________ 的豪宅充满了奢华的装饰和昂贵的家具。",
        answers: [
            { option: "A", answer: "modest", chinese_answer: "谦虚的", chinese_romanization: "qiānxū de" },
            { option: "B", answer: "grandiose", chinese_answer: "宏伟的", chinese_romanization: "hóngwěi de" },
            { option: "C", answer: "humble", chinese_answer: "卑微的", chinese_romanization: "bēiwēi de" },
            { option: "D", answer: "simple", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'grandiose' means impressive or magnificent in appearance or style, especially pretentiously so." +
            "<br><br>" +
            "(A) 'modest' means unassuming in the estimation of one's abilities or achievements." +
            "<br><br>" +
            "(C) 'humble' means having or showing a modest or low estimate of one's importance." +
            "<br><br>" +
            "(D) 'simple' means easily understood or done; presenting no difficulty.",
        chinese_explanation: "(B) '宏伟的' 意味着外观或风格上令人印象深刻或壮丽，特别是自命不凡的。" +
            "<br><br>" +
            "(A) '谦虚的' 意味着对自己能力或成就的估计不过高的。" +
            "<br><br>" +
            "(C) '卑微的' 意味着对自己重要性的估计或表现较低的。" +
            "<br><br>" +
            "(D) '简单的' 意味着容易理解或完成的；没有难度的。"
    },
    {
        id: 5,
        question: "The __________ waters made it difficult for the boat to sail smoothly.",
        chinese_question: "__________的水使得船难以平稳航行。",
        answers: [
            { option: "A", answer: "calm", chinese_answer: "平静的", chinese_romanization: "píngjìng de" },
            { option: "B", answer: "turbulent", chinese_answer: "动荡的", chinese_romanization: "dòngdàng de" },
            { option: "C", answer: "serene", chinese_answer: "宁静的", chinese_romanization: "níngjìng de" },
            { option: "D", answer: "tranquil", chinese_answer: "安静的", chinese_romanization: "ānjìng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'turbulent' means characterized by conflict, disorder, or confusion; not controlled or calm." +
            "<br><br>" +
            "(A) 'calm' means not showing or feeling nervousness, anger, or other strong emotions." +
            "<br><br>" +
            "(C) 'serene' means calm, peaceful, and untroubled; tranquil." +
            "<br><br>" +
            "(D) 'tranquil' means free from disturbance; calm.",
        chinese_explanation: "(B) '动荡的'一词意味着以冲突、混乱或困惑为特征的；不受控制或不平静的。" +
            "<br><br>" +
            "(A) '平静的' 意味着不表现或感到紧张、愤怒或其他强烈的情感。" +
            "<br><br>" +
            "(C) '宁静的' 意味着平静、和平和不受干扰的；宁静的。" +
            "<br><br>" +
            "(D) '安静的' 意味着没有干扰的；平静的。"
    },
    {
        id: 6,
        question: "His __________ guidance helped shape the young athlete's career.",
        chinese_question: "他的__________指导帮助塑造了这位年轻运动员的职业生涯。",
        answers: [
            { option: "A", answer: "maternal", chinese_answer: "母亲的", chinese_romanization: "mǔqīn de" },
            { option: "B", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
            { option: "C", answer: "paternal", chinese_answer: "父亲的", chinese_romanization: "fùqīn de" },
            { option: "D", answer: "uncaring", chinese_answer: "不关心的", chinese_romanization: "bù guānxīn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'paternal' means of or appropriate to a father. Figuratively, it can mean providing fatherly support or guidance." +
            "<br><br>" +
            "(A) 'maternal' means of or relating to a mother, especially during pregnancy or shortly after childbirth." +
            "<br><br>" +
            "(B) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(D) 'uncaring' means not displaying sympathy or concern for others.",
        chinese_explanation: "(C) '父亲的'一词意味着与父亲相关的或适合父亲的。比喻地，它可以表示提供父亲般的支持或指导。" +
            "<br><br>" +
            "(A) '母亲的' 意味着与母亲有关的，尤其是在怀孕期间或产后不久。" +
            "<br><br>" +
            "(B) '冷漠的' 意味着没有特别的兴趣或同情；不关心的。" +
            "<br><br>" +
            "(D) '不关心的' 意味着不表现出同情或对他人的关心。"
    },
    {
        id: 7,
        question: "The difference in price was so __________ that it didn't affect her decision to buy the dress.",
        chinese_question: "价格差异是如此 __________，以至于它没有影响她买那条裙子的决定。",
        answers: [
            { option: "A", answer: "significant", chinese_answer: "显著", chinese_romanization: "xiǎnzhù" },
            { option: "B", answer: "substantial", chinese_answer: "重大", chinese_romanization: "zhòngdà" },
            { option: "C", answer: "negligible", chinese_answer: "微不足道", chinese_romanization: "wēi bù zú dào" },
            { option: "D", answer: "major", chinese_answer: "主要", chinese_romanization: "zhǔyào" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'negligible' means so small or unimportant as to be not worth considering; insignificant." +
            "<br><br>" +
            "(A) 'significant' means sufficiently great or important to be worthy of attention." +
            "<br><br>" +
            "(B) 'substantial' means of considerable importance, size, or worth." +
            "<br><br>" +
            "(D) 'major' means important, serious, or significant.",
        chinese_explanation: "(C) '微不足道' 意味着如此小或不重要，不值得考虑的；不重要的。" +
            "<br><br>" +
            "(A) '显著' 意味着足够大或重要，值得注意的。" +
            "<br><br>" +
            "(B) '重大' 意味着相当重要、规模或价值的。" +
            "<br><br>" +
            "(D) '主要' 意味着重要、严重或显著的。"
    },
    {
        id: 8,
        question: "She was known for her __________ manner, always speaking her mind clearly and honestly.",
        chinese_question: "她以__________的态度著称，总是清楚而诚实地表达自己的想法。",
        answers: [
            { option: "A", answer: "evasive", chinese_answer: "回避的", chinese_romanization: "huíbì de" },
            { option: "B", answer: "forthright", chinese_answer: "直率的", chinese_romanization: "zhíshuài de" },
            { option: "C", answer: "indirect", chinese_answer: "间接的", chinese_romanization: "jiànjiē de" },
            { option: "D", answer: "secretive", chinese_answer: "秘密的", chinese_romanization: "mìmì de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'forthright' means direct and outspoken; straightforward and honest." +
            "<br><br>" +
            "(A) 'evasive' means tending to avoid commitment or self-revelation, especially by responding only indirectly." +
            "<br><br>" +
            "(C) 'indirect' means not directly caused by or resulting from something." +
            "<br><br>" +
            "(D) 'secretive' means inclined to conceal feelings and intentions or not to disclose information.",
        chinese_explanation: "(B) '直率的'一词意味着直接和直言不讳的；坦率和诚实的。" +
            "<br><br>" +
            "(A) '回避的' 意味着倾向于避免承诺或自我揭示，尤其是通过只间接回答。" +
            "<br><br>" +
            "(C) '间接的' 意味着不是直接由某事引起或导致的。" +
            "<br><br>" +
            "(D) '秘密的' 意味着倾向于隐瞒感情和意图或不透露信息的。"
    },
    {
        id: 9,
        question: "Despite the harsh criticism, he remained __________, choosing to forgive rather than retaliate.",
        chinese_question: "尽管受到了严厉的批评，他仍然保持 __________，选择原谅而不是报复。",
        answers: [
            { option: "A", answer: "petty", chinese_answer: "小气", chinese_romanization: "xiǎoqì" },
            { option: "B", answer: "magnanimous", chinese_answer: "宽宏大量", chinese_romanization: "kuānhóng dàliàng" },
            { option: "C", answer: "vengeful", chinese_answer: "复仇", chinese_romanization: "fùchóu" },
            { option: "D", answer: "spiteful", chinese_answer: "恶意", chinese_romanization: "èyì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'magnanimous' means very generous or forgiving, especially toward a rival or someone less powerful than oneself." +
            "<br><br>" +
            "(A) 'petty' means of little importance; trivial." +
            "<br><br>" +
            "(C) 'vengeful' means seeking to harm someone in return for a perceived injury." +
            "<br><br>" +
            "(D) 'spiteful' means showing or caused by malice.",
        chinese_explanation: "(B) '宽宏大量' 意味着非常慷慨或宽恕，尤其是对竞争对手或比自己权力小的人。" +
            "<br><br>" +
            "(A) '小气' 意味着不重要的；琐碎的。" +
            "<br><br>" +
            "(C) '复仇' 意味着寻求伤害某人以报复被认为的伤害。" +
            "<br><br>" +
            "(D) '恶意' 意味着表现出或由恶意引起的。"
    },
    {
        id: 10,
        question: "The __________ imagination of the author allowed her to create an entire fantasy world filled with intricate details and compelling characters.",
        chinese_question: "作者 __________ 的想象力使她能够创造出一个充满复杂细节和引人入胜角色的幻想世界。",
        answers: [
            { option: "A", answer: "limited", chinese_answer: "有限的", chinese_romanization: "yǒuxiàn de" },
            { option: "B", answer: "restricted", chinese_answer: "受限的", chinese_romanization: "shòu xiàn de" },
            { option: "C", answer: "fertile", chinese_answer: "丰富的", chinese_romanization: "fēngfù de" },
            { option: "D", answer: "mundane", chinese_answer: "平凡的", chinese_romanization: "píngfán de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'fertile' means producing many new and inventive ideas." +
            "<br><br>" +
            "(A) 'limited' means restricted in size, amount, or extent." +
            "<br><br>" +
            "(B) 'restricted' means limited in extent, number, scope, or action." +
            "<br><br>" +
            "(D) 'mundane' means lacking interest or excitement; dull.",
        chinese_explanation: "(C) '丰富的' 意味着产生许多新的和有创造性的想法。" +
            "<br><br>" +
            "(A) '有限的' 意味着在大小、数量或范围上受到限制的。" +
            "<br><br>" +
            "(B) '受限的' 意味着在范围、数量、范围或行动上受到限制的。" +
            "<br><br>" +
            "(D) '平凡的' 意味着缺乏兴趣或兴奋的；无聊的。"
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

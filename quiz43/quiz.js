// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The chef prepared a __________ steak that was juicy and tender, leaving the diners extremely satisfied.",
        chinese_question: "厨师准备了一块 __________ 牛排，多汁嫩滑，让食客们非常满意。",
        answers: [
            { option: "A", answer: "bland", chinese_answer: "平淡无味的", chinese_romanization: "píngdàn wúwèi de" },
            { option: "B", answer: "insipid", chinese_answer: "乏味的", chinese_romanization: "fáwèi de" },
            { option: "C", answer: "stringy", chinese_answer: "筋多的", chinese_romanization: "jīn duō de" },
            { option: "D", answer: "succulent", chinese_answer: "多汁的", chinese_romanization: "duōzhī de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'succulent' means tender, juicy, and tasty, often describing food." +
            "<br><br>" +
            "(A) 'bland' means lacking strong features or characteristics and therefore uninteresting." +
            "<br><br>" +
            "(B) 'insipid' means lacking flavor." +
            "<br><br>" +
            "(C) 'stringy' means containing tough, fibrous tissue that is difficult to chew.",
        chinese_explanation: "(D) '多汁的' 意味着嫩滑多汁，通常用来形容食物。" +
            "<br><br>" +
            "(A) '平淡无味的' 意味着缺乏鲜明特征或特点，因此没有趣味的。" +
            "<br><br>" +
            "(B) '乏味的' 意味着没有味道的。" +
            "<br><br>" +
            "(C) '筋多的' 意味着含有难以咀嚼的韧性纤维组织。"
    },
    {
        id: 2,
        question: "The __________ performance by the orchestra left the audience in awe, with many calling it the highlight of the evening.",
        chinese_question: "管弦乐队 __________ 的表演让观众惊叹，许多人称之为当晚的亮点。",
        answers: [
            { option: "A", answer: "lackluster", chinese_answer: "平淡的", chinese_romanization: "píngdàn de" },
            { option: "B", answer: "mediocre", chinese_answer: "普通的", chinese_romanization: "pǔtōng de" },
            { option: "C", answer: "stellar", chinese_answer: "出色的", chinese_romanization: "chūsè de" },
            { option: "D", answer: "uninspired", chinese_answer: "缺乏灵感的", chinese_romanization: "quēfá línggǎn de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'stellar' means outstanding or excellent." +
            "<br><br>" +
            "(A) 'lackluster' means lacking in vitality, force, or conviction." +
            "<br><br>" +
            "(B) 'mediocre' means of only moderate quality." +
            "<br><br>" +
            "(D) 'uninspired' means lacking in imagination or originality.",
        chinese_explanation: "(C) '出色的' 意味着杰出的或优秀的。" +
            "<br><br>" +
            "(A) '平淡的' 意味着缺乏活力、力量或信念的。" +
            "<br><br>" +
            "(B) '普通的' 意味着质量一般的。" +
            "<br><br>" +
            "(D) '缺乏灵感的' 意味着缺乏想象力或独创性的。"
    },
    {
        id: 3,
        question: "The __________ exchange between the two colleagues during the meeting was filled with personal attacks and harsh criticisms.",
        chinese_question: "会议期间两位同事之间的 __________ 交流充满了人身攻击和严厉的批评。",
        answers: [
            { option: "A", answer: "genial", chinese_answer: "和蔼的", chinese_romanization: "héǎi de" },
            { option: "B", answer: "cordial", chinese_answer: "友好的", chinese_romanization: "yǒuhǎo de" },
            { option: "C", answer: "amicable", chinese_answer: "友善的", chinese_romanization: "yǒushàn de" },
            { option: "D", answer: "acrimonious", chinese_answer: "尖刻的", chinese_romanization: "jiānkè de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'acrimonious' means angry and bitter, typically describing a debate or argument." +
            "<br><br>" +
            "(A) 'genial' means friendly and cheerful." +
            "<br><br>" +
            "(B) 'cordial' means warm and friendly." +
            "<br><br>" +
            "(C) 'amicable' means having a spirit of friendliness without serious disagreement.",
        chinese_explanation: "(D) '尖刻的' 意味着愤怒和苦涩，通常形容辩论或争论。" +
            "<br><br>" +
            "(A) '和蔼的' 意味着友好和快乐的。" +
            "<br><br>" +
            "(B) '友好的' 意味着热情和友好的。" +
            "<br><br>" +
            "(C) '友善的' 意味着具有友好精神，没有严重的分歧。"
    },
    {
        id: 4,
        question: "The __________ meals provided by the health retreat ensured guests had just enough to feel satisfied without overindulging.",
        chinese_question: "健康疗养院提供的 __________ 餐点确保客人吃得刚刚好，不会过度放纵。",
        answers: [
            { option: "A", answer: "gluttonous", chinese_answer: "贪吃的", chinese_romanization: "tānchī de" },
            { option: "B", answer: "opulent", chinese_answer: "奢华的", chinese_romanization: "shēhuá de" },
            { option: "C", answer: "indulgent", chinese_answer: "纵容的", chinese_romanization: "zòngróng de" },
            { option: "D", answer: "abstemious", chinese_answer: "节制的", chinese_romanization: "jiézhì de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'abstemious' means not self-indulgent, especially when eating and drinking." +
            "<br><br>" +
            "(A) 'gluttonous' means excessively greedy about eating." +
            "<br><br>" +
            "(B) 'opulent' means ostentatiously rich and luxurious or lavish." +
            "<br><br>" +
            "(C) 'indulgent' means having a tendency to be overly generous to or lenient with someone.",
        chinese_explanation: "(D) '节制的' 意味着不纵容自己，尤其是在饮食方面。" +
            "<br><br>" +
            "(A) '贪吃的' 意味着对吃东西过度贪婪的。" +
            "<br><br>" +
            "(B) '奢华的' 意味着极其富有和奢侈的。" +
            "<br><br>" +
            "(C) '纵容的' 意味着倾向于对某人过于慷慨或宽容的。"
    },
    {
        id: 5,
        question: "The environmentalist's passionate and __________ speech inspired many people to take action against climate change.",
        chinese_question: "环保主义者充满激情和 __________ 的演讲激励了许多人采取行动应对气候变化。",
        answers: [
            { option: "A", answer: "monotonous", chinese_answer: "单调的", chinese_romanization: "dāndiào de" },
            { option: "B", answer: "eloquent", chinese_answer: "雄辩的", chinese_romanization: "xióngbiàn de" },
            { option: "C", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mòbùguānxīn de" },
            { option: "D", answer: "irrelevant", chinese_answer: "不相关的", chinese_romanization: "bù xiāngguān de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'eloquent' means fluent or persuasive in speaking or writing." +
            "<br><br>" +
            "(A) 'monotonous' means dull, tedious, and repetitious." +
            "<br><br>" +
            "(C) 'indifferent' means having no particular interest or sympathy." +
            "<br><br>" +
            "(D) 'irrelevant' means not connected with or relevant to something.",
        chinese_explanation: "(B) '雄辩的' 意味着讲话或写作流利或有说服力的。" +
            "<br><br>" +
            "(A) '单调的' 意味着沉闷、乏味和重复的。" +
            "<br><br>" +
            "(C) '漠不关心的' 意味着没有特别的兴趣或同情心。" +
            "<br><br>" +
            "(D) '不相关的' 意味着与某事无关或不相关的。"
    },
    {
        id: 6,
        question: "Their opinions on the best way to handle the crisis were __________ opposites.",
        chinese_question: "他们对处理危机的最佳方式的意见是 __________ 相反的。",
        answers: [
            { option: "A", answer: "compatible", chinese_answer: "兼容的", chinese_romanization: "jiānróng de" },
            { option: "B", answer: "congruent", chinese_answer: "一致的", chinese_romanization: "yīzhì de" },
            { option: "C", answer: "polar", chinese_answer: "对立的", chinese_romanization: "duìlì de" },
            { option: "D", answer: "harmonized", chinese_answer: "协调的", chinese_romanization: "xiétiáo de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'polar' means completely opposite in character or direction." +
            "<br><br>" +
            "(A) 'compatible' means able to exist or occur together without conflict." +
            "<br><br>" +
            "(B) 'congruent' means in agreement or harmony." +
            "<br><br>" +
            "(D) 'harmonized' means to bring into harmony.",
        chinese_explanation: "(C) '对立的' 意味着性格或方向上完全相反的。" +
            "<br><br>" +
            "(A) '兼容的' 意味着能够一起存在或发生而不发生冲突的。" +
            "<br><br>" +
            "(B) '一致的' 意味着在协议或和谐中。" +
            "<br><br>" +
            "(D) '协调的' 意味着使之和谐。"
    },
    {
        id: 7,
        question: "Her __________ objection to the proposal surprised everyone, as she was usually calm and agreeable.",
        chinese_question: "她对提案的 __________ 反对让大家感到惊讶，因为她通常是冷静而随和的。",
        answers: [
            { option: "A", answer: "mild", chinese_answer: "温和的", chinese_romanization: "wēnhé de" },
            { option: "B", answer: "indifferent", chinese_answer: "冷漠的", chinese_romanization: "lěngmò de" },
            { option: "C", answer: "vehement", chinese_answer: "激烈的", chinese_romanization: "jīliè de" },
            { option: "D", answer: "passive", chinese_answer: "被动的", chinese_romanization: "bèidòng de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'vehement' means showing strong feeling; forceful, passionate, or intense." +
            "<br><br>" +
            "(A) 'mild' means gentle and not easily provoked." +
            "<br><br>" +
            "(B) 'indifferent' means having no particular interest or sympathy; unconcerned." +
            "<br><br>" +
            "(D) 'passive' means accepting or allowing what happens or what others do, without active response or resistance.",
        chinese_explanation: "(C) '激烈的' 意味着表现出强烈的情感；有力的、热情的或强烈的。" +
            "<br><br>" +
            "(A) '温和的' 意味着温柔且不易激动的。" +
            "<br><br>" +
            "(B) '冷漠的' 意味着没有特别的兴趣或同情；不关心的。" +
            "<br><br>" +
            "(D) '被动的' 意味着接受或允许发生的事情或他人的行为，而没有积极的反应或抵抗。"
    },
    {
        id: 8,
        question: "The project became __________ when the team discovered several unexpected obstacles that delayed the timeline.",
        chinese_question: "当团队发现几个意想不到的障碍导致时间表延误时，项目变得 __________。",
        answers: [
            { option: "A", answer: "smooth", chinese_answer: "顺利的", chinese_romanization: "shùnlì de" },
            { option: "B", answer: "straightforward", chinese_answer: "简单的", chinese_romanization: "jiǎndān de" },
            { option: "C", answer: "problematic", chinese_answer: "有问题的", chinese_romanization: "yǒu wèntí de" },
            { option: "D", answer: "easy", chinese_answer: "容易的", chinese_romanization: "róngyì de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'problematic' means presenting a problem or difficulty." +
            "<br><br>" +
            "(A) 'smooth' means having an even and regular surface or consistency; free from difficulties." +
            "<br><br>" +
            "(B) 'straightforward' means uncomplicated and easy to do or understand." +
            "<br><br>" +
            "(D) 'easy' means achieved without great effort; presenting few difficulties.",
        chinese_explanation: "(C) '有问题的' 意味着提出一个问题或困难。" +
            "<br><br>" +
            "(A) '顺利的' 意味着表面或一致性平整和规则的；没有困难的。" +
            "<br><br>" +
            "(B) '简单的' 意味着不复杂且容易做或理解的。" +
            "<br><br>" +
            "(D) '容易的' 意味着无需很大努力即可实现的；呈现很少困难的。"
    },
    {
        id: 9,
        question: "The mother's __________ love for her children was evident in everything she did, always putting their needs above her own.",
        chinese_question: "母亲对孩子的 __________ 爱在她所做的一切中都显而易见，总是将他们的需要置于自己的需要之上。",
        answers: [
            { option: "A", answer: "conditional", chinese_answer: "有条件的", chinese_romanization: "yǒu tiáojiàn de" },
            { option: "B", answer: "temporary", chinese_answer: "暂时的", chinese_romanization: "zànshí de" },
            { option: "C", answer: "intermittent", chinese_answer: "间歇的", chinese_romanization: "jiànxiē de" },
            { option: "D", answer: "unconditional", chinese_answer: "无条件的", chinese_romanization: "wú tiáojiàn de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'unconditional' means not subject to any conditions." +
            "<br><br>" +
            "(A) 'conditional' means subject to one or more conditions or requirements being met." +
            "<br><br>" +
            "(B) 'temporary' means lasting for only a limited period of time; not permanent." +
            "<br><br>" +
            "(C) 'intermittent' means occurring at irregular intervals; not continuous or steady.",
        chinese_explanation: "(D) '无条件的' 意味着不受任何条件限制的。" +
            "<br><br>" +
            "(A) '有条件的' 意味着受一个或多个条件或要求的约束。" +
            "<br><br>" +
            "(B) '暂时的' 意味着只持续有限的一段时间；不永久的。" +
            "<br><br>" +
            "(C) '间歇的' 意味着不规则间隔发生的；不连续或不稳定的。"
    },
    {
        id: 10,
        question: "He noticed that the __________ line on the fishing pole indicated there was no catch yet.",
        chinese_question: "他注意到钓竿上的线 __________，表明还没有鱼上钩。",
        answers: [
            { option: "A", answer: "taut", chinese_answer: "拉紧的", chinese_romanization: "lā jǐn de" },
            { option: "B", answer: "rigid", chinese_answer: "僵硬的", chinese_romanization: "jiāngyìng de" },
            { option: "C", answer: "stiff", chinese_answer: "硬的", chinese_romanization: "yìng de" },
            { option: "D", answer: "slack", chinese_answer: "松弛的", chinese_romanization: "sōngchí de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'slack' means not tight or taut; loose." +
            "<br><br>" +
            "(A) 'taut' means stretched or pulled tight; not slack." +
            "<br><br>" +
            "(B) 'rigid' means unable to bend or be forced out of shape; not flexible." +
            "<br><br>" +
            "(C) 'stiff' means not easily bent or changed in shape; rigid.",
        chinese_explanation: "(D) '松弛的' 意味着不紧或不绷紧；松的。" +
            "<br><br>" +
            "(A) '拉紧的' 意味着拉紧或拉紧的；不松弛的。" +
            "<br><br>" +
            "(B) '僵硬的' 意味着不能弯曲或被迫变形的；不灵活的。" +
            "<br><br>" +
            "(C) '硬的' 意味着不易弯曲或改变形状的；僵硬的。"
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

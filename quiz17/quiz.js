// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "The judge remained __________ throughout the trial, ensuring that personal feelings did not influence the verdict.",
        chinese_question: "法官在整个审判过程中保持 __________，确保个人情感不会影响判决。",
        answers: [
            { option: "A", answer: "biased", chinese_answer: "有偏见的", chinese_romanization: "yǒu piānjiàn de" },
            { option: "B", answer: "neutral", chinese_answer: "中立的", chinese_romanization: "zhōnglì de" },
            { option: "C", answer: "opinionated", chinese_answer: "固执己见的", chinese_romanization: "gùzhí jǐjiàn de" },
            { option: "D", answer: "partial", chinese_answer: "偏袒的", chinese_romanization: "piāntǎn de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'neutral' means not supporting or helping either side in a conflict or disagreement; impartial." +
            "<br><br>" +
            "(A) 'biased' means unfairly prejudiced for or against someone or something." +
            "<br><br>" +
            "(C) 'opinionated' means conceitedly assertive and dogmatic in one's opinions." +
            "<br><br>" +
            "(D) 'partial' means favoring one side in a dispute above the other; biased.",
        chinese_explanation: "(B) '中立的' 意味着不支持或帮助冲突或争执中的任何一方；公正的。" +
            "<br><br>" +
            "(A) '有偏见的' 意味着对某人或某事不公平地偏爱或反对的。" +
            "<br><br>" +
            "(C) '固执己见的' 意味着自负地断言和教条地表达自己的意见。" +
            "<br><br>" +
            "(D) '偏袒的' 意味着在争议中偏袒一方而反对另一方的；有偏见的。"
    },
    {
        id: 2,
        question: "The museum's __________ exhibits included artifacts from ancient civilizations and documents from significant events in history.",
        chinese_question: "博物馆的 __________ 展览包括古代文明的文物和历史重大事件的文件。",
        answers: [
            { option: "A", answer: "fictional", chinese_answer: "虚构的", chinese_romanization: "xūgòu de" },
            { option: "B", answer: "contemporary", chinese_answer: "当代的", chinese_romanization: "dāngdài de" },
            { option: "C", answer: "historical", chinese_answer: "历史的", chinese_romanization: "lìshǐ de" },
            { option: "D", answer: "futuristic", chinese_answer: "未来的", chinese_romanization: "wèilái de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'historical' means relating to the study or representation of past events." +
            "<br><br>" +
            "(A) 'fictional' means relating to fiction; not real." +
            "<br><br>" +
            "(B) 'contemporary' means living or occurring at the same time." +
            "<br><br>" +
            "(D) 'futuristic' means having or involving very modern technology or design.",
        chinese_explanation: "(C) '历史的' 意味着与过去事件的研究或表现有关的。" +
            "<br><br>" +
            "(A) '虚构的' 意味着与虚构有关的；不真实的。" +
            "<br><br>" +
            "(B) '当代的' 意味着同时期的。" +
            "<br><br>" +
            "(D) '未来的' 意味着具有或涉及非常现代的技术或设计的。",
    },
    {
        id: 3,
        question: "His __________ lifestyle, sitting at a desk all day, led to various health issues.",
        chinese_question: "他那整天坐在桌前的__________生活方式导致了各种健康问题。",
        answers: [
            { option: "A", answer: "active", chinese_answer: "活跃的", chinese_romanization: "huóyuè de" },
            { option: "B", answer: "energetic", chinese_answer: "精力充沛的", chinese_romanization: "jīnglì chōngpèi de" },
            { option: "C", answer: "sedentary", chinese_answer: "久坐的", chinese_romanization: "jiǔ zuò de" },
            { option: "D", answer: "dynamic", chinese_answer: "动态的", chinese_romanization: "dòngtài de" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'sedentary' means tending to spend much time seated; somewhat inactive." +
            "<br><br>" +
            "(A) 'active' means engaging or ready to engage in physically energetic pursuits." +
            "<br><br>" +
            "(B) 'energetic' means showing or involving great activity or vitality." +
            "<br><br>" +
            "(D) 'dynamic' means characterized by constant change, activity, or progress.",
        chinese_explanation: "(C) '久坐的'一词意味着花费大量时间坐着的；有些不活跃的。" +
            "<br><br>" +
            "(A) '活跃的' 意味着参与或准备参与体力活动的。" +
            "<br><br>" +
            "(B) '精力充沛的' 意味着表现出或涉及大量活动或活力的。" +
            "<br><br>" +
            "(D) '动态的' 意味着不断变化、活动或进步的特征。"
    },
    {
        id: 4,
    question: "The __________ ocean was calm and serene, reflecting the clear blue sky above.",
    chinese_question: "那片 __________ 的海洋平静而宁静，映射着上方清澈的蓝天。",
    answers: [
        { option: "A", answer: "stormy", chinese_answer: "风暴的", chinese_romanization: "fēngbào de" },
        { option: "B", answer: "turbulent", chinese_answer: "动荡的", chinese_romanization: "dòngdàng de" },
        { option: "C", answer: "rough", chinese_answer: "粗糙的", chinese_romanization: "cūcāo de" },
        { option: "D", answer: "pacific", chinese_answer: "平静的", chinese_romanization: "píngjìng de" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'pacific' means peaceful in character or intent." +
        "<br><br>" +
        "(A) 'stormy' means characterized by strong winds and usually rain, thunder, lightning, or snow." +
        "<br><br>" +
        "(B) 'turbulent' means characterized by conflict, disorder, or confusion; not stable or calm." +
        "<br><br>" +
        "(C) 'rough' means having an uneven or irregular surface; not smooth or level.",
    chinese_explanation: "(D) '平静的' 意味着性格或意图和平的。" +
        "<br><br>" +
        "(A) '风暴的' 意味着以强风和通常伴有雨、雷、电或雪为特征的。" +
        "<br><br>" +
        "(B) '动荡的' 意味着以冲突、混乱或困惑为特征的；不稳定或不平静的。" +
        "<br><br>" +
        "(C) '粗糙的' 意味着表面不平整的；不光滑或不平坦的。"
    },
    {
        id: 5,
        question: "The white dove is __________ of peace and is often seen in various art forms promoting harmony.",
        chinese_question: "白鸽是和平的 __________ 象征，经常出现在各种艺术形式中，促进和谐。",
        answers: [
            { option: "A", answer: "literal", chinese_answer: "字面的", chinese_romanization: "zìmiàn de" },
            { option: "B", answer: "symbolic", chinese_answer: "象征性的", chinese_romanization: "xiàngzhēng xìng de" },
            { option: "C", answer: "factual", chinese_answer: "事实的", chinese_romanization: "shìshí de" },
            { option: "D", answer: "realistic", chinese_answer: "现实的", chinese_romanization: "xiànshí de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'symbolic' means serving as a symbol." +
            "<br><br>" +
            "(A) 'literal' means taking words in their usual or most basic sense without metaphor or allegory." +
            "<br><br>" +
            "(C) 'factual' means concerned with what is actually the case." +
            "<br><br>" +
            "(D) 'realistic' means representing things in a way that is accurate and true to life.",
        chinese_explanation: "(B) '象征性的' 意味着作为象征的。" +
            "<br><br>" +
            "(A) '字面的' 意味着以其通常或最基本的意义理解词语，没有隐喻或寓言的。" +
            "<br><br>" +
            "(C) '事实的' 意味着关注实际情况的。" +
            "<br><br>" +
            "(D) '现实的' 意味着以准确和真实的方式表现事物的。"
    },
    {
        id: 6,
    question: "The __________ old man still enjoyed hiking and outdoor activities despite his age.",
    chinese_question: "这位 __________ 的老人尽管年纪大了，仍然喜欢徒步旅行和户外活动。",
    answers: [
        { option: "A", answer: "weak", chinese_answer: "虚弱的", chinese_romanization: "xūruò de" },
        { option: "B", answer: "fragile", chinese_answer: "脆弱的", chinese_romanization: "cuìruò de" },
        { option: "C", answer: "delicate", chinese_answer: "精致的", chinese_romanization: "jīngzhì de" },
        { option: "D", answer: "robust", chinese_answer: "强壮的", chinese_romanization: "qiángzhuàng de" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'robust' means strong and healthy; vigorous." +
        "<br><br>" +
        "(A) 'weak' means lacking the power to perform physically demanding tasks; lacking physical strength and energy." +
        "<br><br>" +
        "(B) 'fragile' means (of an object) easily broken or damaged." +
        "<br><br>" +
        "(C) 'delicate' means very fine in texture or structure; easily broken or damaged.",
    chinese_explanation: "(D) '强壮的' 意味着强壮和健康的；精力充沛的。" +
        "<br><br>" +
        "(A) '虚弱的' 意味着缺乏执行体力任务的力量；缺乏体力和精力的。" +
        "<br><br>" +
        "(B) '脆弱的' 意味着（物体）容易破碎或损坏的。" +
        "<br><br>" +
        "(C) '精致的' 意味着质地或结构非常精细的；容易破碎或损坏的。"
    },
    {
        id: 7,
        question: "The __________ breeze from the ocean made the hot summer day much more bearable.",
        chinese_question: "来自海洋的 __________ 微风使炎热的夏日变得更容易忍受。",
        answers: [
            { option: "A", answer: "stifling", chinese_answer: "令人窒息的", chinese_romanization: "lìng rén zhìxī de" },
            { option: "B", answer: "refreshing", chinese_answer: "清爽的", chinese_romanization: "qīngshuǎng de" },
            { option: "C", answer: "oppressive", chinese_answer: "压抑的", chinese_romanization: "yāyì de" },
            { option: "D", answer: "humid", chinese_answer: "潮湿的", chinese_romanization: "cháoshī de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'refreshing' means serving to refresh or reinvigorate someone." +
            "<br><br>" +
            "(A) 'stifling' means very hot and causing difficulties in breathing; suffocating." +
            "<br><br>" +
            "(C) 'oppressive' means weighing heavily on the mind or spirits." +
            "<br><br>" +
            "(D) 'humid' means marked by a relatively high level of water vapor in the atmosphere.",
        chinese_explanation: "(B) '清爽的' 意味着用来使人焕然一新或振作的。" +
            "<br><br>" +
            "(A) '令人窒息的' 意味着非常热并导致呼吸困难的；令人窒息的。" +
            "<br><br>" +
            "(C) '压抑的' 意味着在心灵或精神上沉重的。" +
            "<br><br>" +
            "(D) '潮湿的' 意味着大气中水蒸气含量较高的。"
    },
    {
        id: 8,
        question: "Her __________ belief in the power of education drove her to volunteer at the local school every weekend.",
        chinese_question: "她对教育力量的 __________ 信念驱使她每个周末在当地学校做志愿者。",
        answers: [
            { option: "A", answer: "skeptical", chinese_answer: "怀疑的", chinese_romanization: "huáiyí de" },
            { option: "B", answer: "pious", chinese_answer: "虔诚的", chinese_romanization: "qiánchéng de" },
            { option: "C", answer: "indifferent", chinese_answer: "漠不关心的", chinese_romanization: "mòbùguānxīn de" },
            { option: "D", answer: "disinterested", chinese_answer: "无私的", chinese_romanization: "wúsī de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'pious' means showing strong religious or moral beliefs, often demonstrated through actions and a deep sense of duty." +
            "<br><br>" +
            "(A) 'skeptical' means having doubts or not easily believing something." +
            "<br><br>" +
            "(C) 'indifferent' means not caring about something or not interested." +
            "<br><br>" +
            "(D) 'disinterested' means not influenced by personal interest or advantage.",
        chinese_explanation: "(B) '虔诚的' 意味着表现出强烈的宗教或道德信仰，通常通过行动和强烈的责任感来体现。" +
            "<br><br>" +
            "(A) '怀疑的' 意味着有疑问或不容易相信某事。" +
            "<br><br>" +
            "(C) '漠不关心的' 意味着不关心某事或不感兴趣。" +
            "<br><br>" +
            "(D) '无私的' 意味着不受个人兴趣或利益影响的。"
    },
    {
        id: 9,
        question: "His __________ attitudes made him avoid anyone from different cultures.",
        chinese_question: "他的__________态度使他避开任何来自不同文化的人。",
        answers: [
            { option: "A", answer: "inclusive", chinese_answer: "包容的", chinese_romanization: "bāoróng de" },
            { option: "B", answer: "xenophobic", chinese_answer: "排外的", chinese_romanization: "páiwài de" },
            { option: "C", answer: "tolerant", chinese_answer: "容忍的", chinese_romanization: "róngrěn de" },
            { option: "D", answer: "open-minded", chinese_answer: "思想开放的", chinese_romanization: "sīxiǎng kāifàng de" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'xenophobic' means having or showing a dislike of or prejudice against people from other countries." +
            "<br><br>" +
            "(A) 'inclusive' means not excluding any of the parties or groups involved in something." +
            "<br><br>" +
            "(C) 'tolerant' means showing willingness to allow the existence of opinions or behavior that one does not necessarily agree with." +
            "<br><br>" +
            "(D) 'open-minded' means willing to consider new ideas; unprejudiced.",
        chinese_explanation: "(B) '排外的'一词意味着对来自其他国家的人有或表现出不喜欢或偏见。" +
            "<br><br>" +
            "(A) '包容的' 意味着不排除参与某事的任何一方或群体。" +
            "<br><br>" +
            "(C) '容忍的' 意味着表现出允许存在自己不一定同意的意见或行为的意愿。" +
            "<br><br>" +
            "(D) '思想开放的' 意味着愿意考虑新的想法；没有偏见的。"
    },
    {
        id: 10,
        question: "The company's financial losses were attributed to the __________ management that overlooked crucial details and failed to enforce critical policies.",
        chinese_question: "公司的财务损失归因于 __________ 的管理，忽视了关键细节，并未能执行关键政策。",
        answers: [
            { option: "A", answer: "efficient", chinese_answer: "高效的", chinese_romanization: "gāoxiào de" },
            { option: "B", answer: "competent", chinese_answer: "胜任的", chinese_romanization: "shèngrèn de" },
            { option: "C", answer: "meticulous", chinese_answer: "细致的", chinese_romanization: "xìzhì de" },
            { option: "D", answer: "slack", chinese_answer: "松懈的", chinese_romanization: "sōngxiè de" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'slack' means showing a lack of activity or diligence; negligent." +
            "<br><br>" +
            "(A) 'efficient' means achieving maximum productivity with minimum wasted effort or expense." +
            "<br><br>" +
            "(B) 'competent' means having the necessary ability, knowledge, or skill to do something successfully." +
            "<br><br>" +
            "(C) 'meticulous' means showing great attention to detail; very careful and precise.",
        chinese_explanation: "(D) '松懈的' 意味着表现出缺乏活动或勤奋；疏忽的。" +
            "<br><br>" +
            "(A) '高效的' 意味着以最少的浪费努力或费用实现最大的生产力。" +
            "<br><br>" +
            "(B) '胜任的' 意味着具有成功地做某事所需的能力、知识或技能。" +
            "<br><br>" +
            "(C) '细致的' 意味着非常注重细节；非常小心和精确的。"
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

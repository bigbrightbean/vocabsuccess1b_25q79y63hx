// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "During the festival, an enormous __________ of the dragon was paraded through the streets, to the delight of the crowd.",
        chinese_question: "在节日期间，一只巨大的龙的 __________ 被游行展示在街道上，令观众们非常高兴。",
        answers: [
            { option: "A", answer: "effigy", chinese_answer: "塑像", chinese_romanization: "sùxiàng" },
            { option: "B", answer: "illustration", chinese_answer: "插图", chinese_romanization: "chātú" },
            { option: "C", answer: "manuscript", chinese_answer: "手稿", chinese_romanization: "shǒugǎo" },
            { option: "D", answer: "diagram", chinese_answer: "图表", chinese_romanization: "túbiǎo" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'effigy' figuratively means a roughly made model of a particular person or thing, often made to be damaged or destroyed as a protest or expression of anger." +
            "<br><br>" +
            "(B) 'illustration' means a picture illustrating a book, newspaper, etc." +
            "<br><br>" +
            "(C) 'manuscript' means a book, document, or piece of music written by hand rather than typed or printed." +
            "<br><br>" +
            "(D) 'diagram' means a simplified drawing showing the appearance, structure, or workings of something; a schematic representation.",
        chinese_explanation: "(A) '塑像' 在此语境下意指为了抗议或表达愤怒而制作并破坏的某个人或事物的粗糙模型。" +
            "<br><br>" +
            "(B) '插图' 意味着一本书、报纸等的插图。" +
            "<br><br>" +
            "(C) '手稿' 意味着手写而不是打印或印刷的书、文件或音乐作品。" +
            "<br><br>" +
            "(D) '图表' 意味着显示某物外观、结构或工作原理的简化图；示意图。"
    },
    {
        id: 2,
        question: "The scientist proudly displayed his latest __________, a machine designed to automate household chores.",
        chinese_question: "科学家自豪地展示了他的最新 __________，一台设计用于自动执行家务的机器。",
        answers: [
            { option: "A", answer: "apparatus", chinese_answer: "装置", chinese_romanization: "zhuāngzhì" },
            { option: "B", answer: "mechanism", chinese_answer: "机械", chinese_romanization: "jīxiè" },
            { option: "C", answer: "device", chinese_answer: "设备", chinese_romanization: "shèbèi" },
            { option: "D", answer: "contraption", chinese_answer: "奇妙装置", chinese_romanization: "qímiào zhuāngzhì" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'contraption' means a machine or device that appears strange or unnecessarily complicated." +
            "<br><br>" +
            "(A) 'apparatus' means a complex structure within an organization or system." +
            "<br><br>" +
            "(B) 'mechanism' means a system of parts working together in a machine." +
            "<br><br>" +
            "(C) 'device' means a thing made or adapted for a particular purpose.",
        chinese_explanation: "(D) '奇妙装置'一词意味着看起来奇怪或不必要复杂的机器或装置。" +
            "<br><br>" +
            "(A) '装置' 意味着一个组织或系统内的复杂结构。" +
            "<br><br>" +
            "(B) '机械' 意味着机器中的一组零件共同工作。" +
            "<br><br>" +
            "(C) '设备' 意味着为特定目的制造或改装的东西。"
    },
    {
        id: 3,
        question: "The vandals defaced the public property with apparent __________, knowing they wouldn't be caught.",
        chinese_question: "这些破坏者肆意损坏公共财产，自认为不会被抓到。",
        answers: [
            { option: "A", answer: "impunity", chinese_answer: "免罚", chinese_romanization: "miǎnfá" },
            { option: "B", answer: "hesitation", chinese_answer: "犹豫", chinese_romanization: "yóuyù" },
            { option: "C", answer: "accountability", chinese_answer: "责任", chinese_romanization: "zérèn" },
            { option: "D", answer: "regret", chinese_answer: "后悔", chinese_romanization: "hòuhuǐ" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'impunity' means exemption from punishment or freedom from the injurious consequences of an action." +
            "<br><br>" +
            "(B) 'hesitation' means the action of pausing before saying or doing something." +
            "<br><br>" +
            "(C) 'accountability' means the fact or condition of being accountable; responsibility." +
            "<br><br>" +
            "(D) 'regret' means a feeling of sadness, repentance, or disappointment over something that has happened or been done.",
        chinese_explanation: "(A) '免罚' 意味着免受惩罚或免于行为带来的伤害性后果。" +
            "<br><br>" +
            "(B) '犹豫' 意味着在说或做某事之前的停顿行为。" +
            "<br><br>" +
            "(C) '责任' 意味着负责的事实或条件。" +
            "<br><br>" +
            "(D) '后悔' 意味着对发生的或已经做的事感到悲伤、悔恨或失望的感觉。"
    },
    {
        id: 4,
        question: "The __________ of the advertisement made it more effective, as it conveyed the message in just a few words.",
        chinese_question: "广告的 __________ 使其更加有效，因为它只用几个词就传达了信息。",
        answers: [
            { option: "A", answer: "wordiness", chinese_answer: "冗长", chinese_romanization: "rǒngcháng" },
            { option: "B", answer: "brevity", chinese_answer: "简洁", chinese_romanization: "jiǎnjié" },
            { option: "C", answer: "confusion", chinese_answer: "混乱", chinese_romanization: "hùnluàn" },
            { option: "D", answer: "length", chinese_answer: "长度", chinese_romanization: "chángdù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'brevity' means concise and exact use of words in writing or speech." +
            "<br><br>" +
            "(A) 'wordiness' means the quality of using more words than needed; verbosity." +
            "<br><br>" +
            "(C) 'confusion' means lack of understanding; uncertainty." +
            "<br><br>" +
            "(D) 'length' means the measurement or extent of something from end to end.",
        chinese_explanation: "(B) '简洁'一词意味着在写作或讲话中使用简明准确的词语。" +
            "<br><br>" +
            "(A) '冗长' 意味着使用比需要更多的词；多话。" +
            "<br><br>" +
            "(C) '混乱' 意味着缺乏理解；不确定性。" +
            "<br><br>" +
            "(D) '长度' 意味着从一端到另一端的测量或范围。"
    },
    {
        id: 5,
        question: "The essay was written in clear, concise __________, making complex ideas accessible to all readers.",
        chinese_question: "这篇文章以清晰、简洁的 __________ 写成，使复杂的思想对所有读者都易于理解。",
        answers: [
            { option: "A", answer: "verse", chinese_answer: "诗", chinese_romanization: "shī" },
            { option: "B", answer: "prose", chinese_answer: "散文", chinese_romanization: "sǎnwén" },
            { option: "C", answer: "poetry", chinese_answer: "诗歌", chinese_romanization: "shīgē" },
            { option: "D", answer: "song", chinese_answer: "歌曲", chinese_romanization: "gēqǔ" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'prose' means written or spoken language in its ordinary form, without metrical structure." +
            "<br><br>" +
            "(A) 'verse' means writing arranged with a metrical rhythm, typically having a rhyme." +
            "<br><br>" +
            "(C) 'poetry' means literary work in which special intensity is given to the expression of feelings and ideas by the use of distinctive style and rhythm." +
            "<br><br>" +
            "(D) 'song' means a short poem or other set of words set to music or meant to be sung.",
        chinese_explanation: "(B) '散文'一词意味着以普通形式书写或口头表达的语言，没有韵律结构。" +
            "<br><br>" +
            "(A) '诗' 意味着按韵律节奏安排的写作，通常有押韵。" +
            "<br><br>" +
            "(C) '诗歌' 意味着通过使用独特的风格和节奏来表达感情和思想的文学作品。" +
            "<br><br>" +
            "(D) '歌曲' 意味着一首短诗或其他设定为音乐或旨在演唱的词。"
    },
    {
        id: 6,
        question: "The government implemented several __________ to improve the education system and provide better opportunities for students.",
        chinese_question: "政府实施了几项 __________ 以改善教育系统，并为学生提供更好的机会。",
        answers: [
            { option: "A", answer: "reforms", chinese_answer: "改革", chinese_romanization: "gǎigé" },
            { option: "B", answer: "declines", chinese_answer: "衰退", chinese_romanization: "shuāituì" },
            { option: "C", answer: "setbacks", chinese_answer: "挫折", chinese_romanization: "cuòzhé" },
            { option: "D", answer: "obstacles", chinese_answer: "障碍", chinese_romanization: "zhàng'ài" }
        ],
        correctAnswer: "A",
        explanation: "(A) 'reforms' means changes made to improve a system, organization, or law." +
            "<br><br>" +
            "(B) 'declines' means gradual and continuous loss of strength, numbers, quality, or value." +
            "<br><br>" +
            "(C) 'setbacks' means reversals or checks in progress." +
            "<br><br>" +
            "(D) 'obstacles' means things that block one's way or prevent or hinder progress.",
        chinese_explanation: "(A) '改革' 意味着对系统、组织或法律进行改进的变化。" +
            "<br><br>" +
            "(B) '衰退' 意味着力量、数量、质量或价值的逐渐和持续的损失。" +
            "<br><br>" +
            "(C) '挫折' 意味着进步中的逆转或检查。" +
            "<br><br>" +
            "(D) '障碍' 意味着阻挡道路或防止或阻碍进步的东西。"
    },
    {
        id: 7,
        question: "The leader spoke with such __________ that he inspired confidence in his followers.",
        chinese_question: "这位领导人以如此坚定的 __________ 讲话，激发了追随者的信心。",
        answers: [
            { option: "A", answer: "uncertainty", chinese_answer: "不确定", chinese_romanization: "bù quèdìng" },
            { option: "B", answer: "conviction", chinese_answer: "信念", chinese_romanization: "xìnniàn" },
            { option: "C", answer: "hesitation", chinese_answer: "犹豫", chinese_romanization: "yóuyù" },
            { option: "D", answer: "doubt", chinese_answer: "怀疑", chinese_romanization: "huáiyí" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'conviction' means a firmly held belief or opinion." +
            "<br><br>" +
            "(A) 'uncertainty' means the state of being unsure of something." +
            "<br><br>" +
            "(C) 'hesitation' means the action of pausing or hesitating before saying or doing something." +
            "<br><br>" +
            "(D) 'doubt' means a feeling of uncertainty or lack of conviction.",
        chinese_explanation: "(B) '信念'一词意味着坚定的信仰或意见。" +
            "<br><br>" +
            "(A) '不确定' 意味着对某事不确定的状态。" +
            "<br><br>" +
            "(C) '犹豫' 意味着在说或做某事前暂停或犹豫的动作。" +
            "<br><br>" +
            "(D) '怀疑' 意味着不确定的感觉或缺乏信念。"
    },
    {
        id: 8,
        question: "The constant __________ of traffic outside her window made it difficult for her to concentrate on her studies.",
        chinese_question: "窗外不断的交通 __________ 使她难以集中精力学习。",
        answers: [
            { option: "A", answer: "silence", chinese_answer: "安静", chinese_romanization: "ānjìng" },
            { option: "B", answer: "din", chinese_answer: "喧闹", chinese_romanization: "xuānnào" },
            { option: "C", answer: "tranquility", chinese_answer: "平静", chinese_romanization: "píngjìng" },
            { option: "D", answer: "hush", chinese_answer: "寂静", chinese_romanization: "jìjìng" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'din' means a loud, unpleasant, and prolonged noise." +
            "<br><br>" +
            "(A) 'silence' means the absence of sound." +
            "<br><br>" +
            "(C) 'tranquility' means the quality or state of being tranquil; calm." +
            "<br><br>" +
            "(D) 'hush' means a silence or stillness, especially after noise.",
        chinese_explanation: "(B) '喧闹'一词意味着嘈杂、令人不愉快且持续的噪音。" +
            "<br><br>" +
            "(A) '安静' 意味着没有声音。" +
            "<br><br>" +
            "(C) '平静' 意味着平静的状态或品质；宁静。" +
            "<br><br>" +
            "(D) '寂静' 意味着一种沉默或静止，尤其是在喧闹之后。"
    },
    {
        id: 9,
        question: "She discovered, much to her __________, that she had been left out of the important meeting.",
        chinese_question: "她发现自己被排除在重要会议之外，这让她非常 __________。",
        answers: [
            { option: "A", answer: "satisfaction", chinese_answer: "满足", chinese_romanization: "mǎnzú" },
            { option: "B", answer: "chagrin", chinese_answer: "懊恼", chinese_romanization: "àonǎo" },
            { option: "C", answer: "excitement", chinese_answer: "兴奋", chinese_romanization: "xīngfèn" },
            { option: "D", answer: "indifference", chinese_answer: "冷漠", chinese_romanization: "lěngmò" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'chagrin' means distress or embarrassment at having failed or been humiliated." +
            "<br><br>" +
            "(A) 'satisfaction' means fulfillment of one's wishes, expectations, or needs." +
            "<br><br>" +
            "(C) 'excitement' means a feeling of great enthusiasm and eagerness." +
            "<br><br>" +
            "(D) 'indifference' means lack of interest, concern, or sympathy.",
        chinese_explanation: "(B) '懊恼' 意味着因失败或受到羞辱而产生的苦恼或尴尬。" +
            "<br><br>" +
            "(A) '满足' 意味着实现自己的愿望、期望或需要的状态。" +
            "<br><br>" +
            "(C) '兴奋' 意味着极大的热情和渴望的感觉。" +
            "<br><br>" +
            "(D) '冷漠' 意味着缺乏兴趣、关心或同情。"
    },
    {
        id: 10,
        question: "The celebrity behaved with __________, knowing that her fame would shield her from any real backlash.",
        chinese_question: "这位名人行为肆无忌惮，因为她知道她的名气会保护她免受任何真正的反对。",
        answers: [
            { option: "A", answer: "humility", chinese_answer: "谦逊", chinese_romanization: "qiānxùn" },
            { option: "B", answer: "modesty", chinese_answer: "谦虚", chinese_romanization: "qiānxū" },
            { option: "C", answer: "reverence", chinese_answer: "敬仰", chinese_romanization: "jìngyǎng" },
            { option: "D", answer: "impunity", chinese_answer: "免罚", chinese_romanization: "miǎnfá" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'impunity' figuratively means being free from the negative consequences of actions, often due to one's status or influence." +
            "<br><br>" +
            "(A) 'humility' means a modest or low view of one's own importance." +
            "<br><br>" +
            "(B) 'modesty' means the quality or state of being unassuming or moderate in the estimation of one's abilities." +
            "<br><br>" +
            "(C) 'reverence' means deep respect for someone or something.",
        chinese_explanation: "(D) '免罚' 在此语境下意指由于某人的地位或影响而免于行为带来的负面后果。" +
            "<br><br>" +
            "(A) '谦逊' 意味着对自己重要性持谦虚或低调的看法。" +
            "<br><br>" +
            "(B) '谦虚' 意味着在评价自己的能力时不自大的质量或状态。" +
            "<br><br>" +
            "(C) '敬仰' 意味着对某人或某事的深深尊敬。"
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

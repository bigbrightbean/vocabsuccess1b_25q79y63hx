// Define an array to hold all the questions, answers, and explanations
var questions = [
    {
        id: 1,
        question: "In the stillness of the night, the abandoned puppy's __________ was heartbreaking.",
        chinese_question: "在夜晚的寂静中，被遗弃的小狗的 __________ 声让人心碎。",
        answers: [
            { option: "A", answer: "bark", chinese_answer: "吠叫", chinese_romanization: "fèijiào" },
            { option: "B", answer: "growl", chinese_answer: "咆哮", chinese_romanization: "páoxiào" },
            { option: "C", answer: "mewl", chinese_answer: "喵喵叫", chinese_romanization: "miāomiāo jiào" },
            { option: "D", answer: "roar", chinese_answer: "吼叫", chinese_romanization: "hǒujiào" }
        ],
        correctAnswer: "C",
        explanation: "(C) 'mewl' means to cry feebly or querulously like a kitten." +
            "<br><br>" +
            "(A) 'bark' means to make a sharp, loud sound, like a dog." +
            "<br><br>" +
            "(B) 'growl' means to make a low, guttural sound, typically as a sign of hostility." +
            "<br><br>" +
            "(D) 'roar' means to make a loud, deep sound, typically like a lion.",
        chinese_explanation: "(C) '喵喵叫' 一词意味着像小猫一样微弱或抱怨地哭泣。" +
            "<br><br>" +
            "(A) '吠叫' 意味着像狗一样发出尖锐而响亮的声音。" +
            "<br><br>" +
            "(B) '咆哮' 意味着发出低沉的声音，通常表示敌意。" +
            "<br><br>" +
            "(D) '吼叫' 意味着发出响亮而深沉的声音，通常像狮子一样。"
    },
    {
        id: 2,
        question: "The politician's __________ during the campaign was full of promises and grand statements, but lacked specific details.",
        chinese_question: "这位政治家在竞选期间的 __________ 充满了承诺和豪言壮语，但缺乏具体细节。",
        answers: [
            { option: "A", answer: "action", chinese_answer: "行动", chinese_romanization: "xíngdòng" },
            { option: "B", answer: "rhetoric", chinese_answer: "修辞", chinese_romanization: "xiūcí" },
            { option: "C", answer: "silence", chinese_answer: "沉默", chinese_romanization: "chénmò" },
            { option: "D", answer: "simplicity", chinese_answer: "简单", chinese_romanization: "jiǎndān" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'rhetoric' means the art of effective or persuasive speaking or writing, especially the use of figures of speech and other compositional techniques." +
            "<br><br>" +
            "(A) 'action' means the fact or process of doing something, typically to achieve an aim." +
            "<br><br>" +
            "(C) 'silence' means complete absence of sound." +
            "<br><br>" +
            "(D) 'simplicity' means the quality or condition of being easy to understand or do.",
        chinese_explanation: "(B) '修辞' 意味着有效或有说服力的演讲或写作艺术，尤其是使用修辞手法和其他构图技巧。" +
            "<br><br>" +
            "(A) '行动' 意味着做某事的事实或过程，通常是为了实现一个目标。" +
            "<br><br>" +
            "(C) '沉默' 意味着完全没有声音。" +
            "<br><br>" +
            "(D) '简单' 意味着易于理解或做的质量或条件。"
    },
    {
        id: 3,
        question: "Her __________ that regular exercise was essential for good health led her to jog every morning without fail.",
        chinese_question: "她坚定地相信定期锻炼对健康至关重要，因此她每天早晨坚持跑步。",
        answers: [
            { option: "A", answer: "doubt", chinese_answer: "怀疑", chinese_romanization: "huáiyí" },
            { option: "B", answer: "conviction", chinese_answer: "信念", chinese_romanization: "xìnniàn" },
            { option: "C", answer: "apathy", chinese_answer: "冷漠", chinese_romanization: "lěngmò" },
            { option: "D", answer: "indecision", chinese_answer: "犹豫", chinese_romanization: "yóuyù" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'conviction' means a firmly held belief or opinion." +
            "<br><br>" +
            "(A) 'doubt' means a feeling of uncertainty or lack of conviction." +
            "<br><br>" +
            "(C) 'apathy' means lack of interest, enthusiasm, or concern." +
            "<br><br>" +
            "(D) 'indecision' means inability to decide.",
        chinese_explanation: "(B) '信念'一词意味着坚定的信仰或意见。" +
            "<br><br>" +
            "(A) '怀疑' 意味着不确定的感觉或缺乏信念。" +
            "<br><br>" +
            "(C) '冷漠' 意味着缺乏兴趣、热情或关心。" +
            "<br><br>" +
            "(D) '犹豫' 意味着无法决定。"
    },
    {
        id: 4,
        question: "The new __________ in the city center is a marvel of modern architecture, featuring glass walls and a rooftop garden.",
        chinese_question: "市中心的新 __________ 是现代建筑的奇迹，拥有玻璃墙和屋顶花园。",
        answers: [
            { option: "A", answer: "cabin", chinese_answer: "小屋", chinese_romanization: "xiǎowū" },
            { option: "B", answer: "edifice", chinese_answer: "大厦", chinese_romanization: "dàshà" },
            { option: "C", answer: "bungalow", chinese_answer: "平房", chinese_romanization: "píngfáng" },
            { option: "D", answer: "hut", chinese_answer: "棚屋", chinese_romanization: "péngwū" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'edifice' means a large, imposing building." +
            "<br><br>" +
            "(A) 'cabin' means a small wooden shelter or house in a wild or remote area." +
            "<br><br>" +
            "(C) 'bungalow' means a low house having only one story or, in some cases, upper rooms set in the roof, typically with dormer windows." +
            "<br><br>" +
            "(D) 'hut' means a small, simple, single-story house or shelter.",
        chinese_explanation: "(B) '大厦'一词意味着一座大型、宏伟的建筑物。" +
            "<br><br>" +
            "(A) '小屋' 意味着一个小的木制庇护所或房子，通常位于野外或偏远地区。" +
            "<br><br>" +
            "(C) '平房' 意味着只有一层的低矮房子，或者在某些情况下，上层房间设置在屋顶，通常带有老虎窗。" +
            "<br><br>" +
            "(D) '棚屋' 意味着一个小的、简单的单层房子或住所。"
    },
    {
        id: 5,
    question: "The coach gave a __________ to the players to start the game.",
    chinese_question: "教练给球员们发出了开始比赛的 __________。",
    answers: [
        { option: "A", answer: "whisper", chinese_answer: "低语", chinese_romanization: "dīyǔ" },
        { option: "B", answer: "scream", chinese_answer: "尖叫", chinese_romanization: "jiānjiào" },
        { option: "C", answer: "signal", chinese_answer: "信号", chinese_romanization: "xìnhào" },
        { option: "D", answer: "cheer", chinese_answer: "欢呼", chinese_romanization: "huānhū" }
    ],
    correctAnswer: "C",
    explanation: "(C) 'signal' means a gesture, action, or sound that is used to convey information or instructions." +
        "<br><br>" +
        "(A) 'whisper' means to speak very softly using one's breath without one's vocal cords, especially for the sake of privacy." +
        "<br><br>" +
        "(B) 'scream' means to give a long, loud, piercing cry or cries expressing excitement, great emotion, or pain." +
        "<br><br>" +
        "(D) 'cheer' means a shout of encouragement, praise, or joy.",
    chinese_explanation: "(C) '信号' 意味着用来传达信息或指示的手势、动作或声音。" +
        "<br><br>" +
        "(A) '低语' 意味着用气息轻声说话而不使用声带，尤其是为了隐私的目的。" +
        "<br><br>" +
        "(B) '尖叫' 意味着发出长而响亮的尖锐叫声，表达兴奋、强烈情感或疼痛。" +
        "<br><br>" +
        "(D) '欢呼' 意味着鼓励、赞美或喜悦的叫喊。"
    },
    {
        id: 6,
        question: "The medication provided a quick __________ to relieve her symptoms.",
        chinese_question: "药物提供了迅速缓解她症状的 __________。",
        answers: [
            { option: "A", answer: "question", chinese_answer: "问题", chinese_romanization: "wèntí" },
            { option: "B", answer: "mistake", chinese_answer: "错误", chinese_romanization: "cuòwù" },
            { option: "C", answer: "problem", chinese_answer: "问题", chinese_romanization: "wèntí" },
            { option: "D", answer: "solution", chinese_answer: "解决方案", chinese_romanization: "jiějué fāng'àn" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'solution' means a means of solving a problem or dealing with a difficult situation." +
            "<br><br>" +
            "(A) 'question' means a sentence worded or expressed so as to elicit information." +
            "<br><br>" +
            "(B) 'mistake' means an action or judgment that is misguided or wrong." +
            "<br><br>" +
            "(C) 'problem' means a matter or situation regarded as unwelcome or harmful and needing to be dealt with and overcome.",
        chinese_explanation: "(D) '解决方案' 意味着解决问题或处理困难情况的方法。" +
            "<br><br>" +
            "(A) '问题' 意味着以引出信息为目的的句子。" +
            "<br><br>" +
            "(B) '错误' 意味着误导或错误的行为或判断。" +
            "<br><br>" +
            "(C) '问题' 意味着被认为是不受欢迎或有害且需要处理和克服的事项或情况。"
    },
    {
        id: 7,
        question: "His speech __________ made it difficult for him to communicate effectively in public.",
        chinese_question: "他的语言 __________ 使他在公共场合有效沟通变得困难。",
        answers: [
            { option: "A", answer: "fluency", chinese_answer: "流利", chinese_romanization: "liúlì" },
            { option: "B", answer: "impediment", chinese_answer: "障碍", chinese_romanization: "zhàng'ài" },
            { option: "C", answer: "eloquence", chinese_answer: "雄辩", chinese_romanization: "xióngbiàn" },
            { option: "D", answer: "proficiency", chinese_answer: "熟练", chinese_romanization: "shúliàn" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'impediment' means a hindrance or obstruction in doing something." +
            "<br><br>" +
            "(A) 'fluency' means the ability to express oneself easily and articulately." +
            "<br><br>" +
            "(C) 'eloquence' means fluent or persuasive speaking or writing." +
            "<br><br>" +
            "(D) 'proficiency' means a high degree of skill; expertise.",
        chinese_explanation: "(B) '障碍'一词意味着做某事的障碍或阻碍。" +
            "<br><br>" +
            "(A) '流利' 意味着能够轻松和清楚地表达自己。" +
            "<br><br>" +
            "(C) '雄辩' 意味着流利或有说服力的讲话或写作。" +
            "<br><br>" +
            "(D) '熟练' 意味着高超的技能；专业知识。"
    },
    {
        id: 8,
        question: "Her __________ led her to trust everyone she met, often resulting in disappointment and betrayal.",
        chinese_question: "她的 __________ 导致她信任每一个遇到的人，往往结果是失望和背叛。",
        answers: [
            { option: "A", answer: "cynicism", chinese_answer: "愤世嫉俗", chinese_romanization: "fènshì jísú" },
            { option: "B", answer: "naivete", chinese_answer: "天真", chinese_romanization: "tiānzhēn" },
            { option: "C", answer: "insight", chinese_answer: "洞察力", chinese_romanization: "dòngchá lì" },
            { option: "D", answer: "acumen", chinese_answer: "敏锐", chinese_romanization: "mǐnruì" }
        ],
        correctAnswer: "B",
        explanation: "(B) 'naivete' means a lack of experience, wisdom, or judgment; innocence or gullibility." +
            "<br><br>" +
            "(A) 'cynicism' means an inclination to believe that people are motivated purely by self-interest; skepticism." +
            "<br><br>" +
            "(C) 'insight' means the capacity to gain an accurate and deep understanding of someone or something." +
            "<br><br>" +
            "(D) 'acumen' means the ability to make good judgments and quick decisions, typically in a particular domain.",
        chinese_explanation: "(B) '天真'一词意味着缺乏经验、智慧或判断；天真或轻信。" +
            "<br><br>" +
            "(A) '愤世嫉俗' 意味着倾向于相信人纯粹是出于自身利益的动机；怀疑主义。" +
            "<br><br>" +
            "(C) '洞察力' 意味着获得对某人或某事准确和深入理解的能力。" +
            "<br><br>" +
            "(D) '敏锐' 意味着在特定领域做出良好判断和快速决策的能力。"
    },
    {
        id: 9,
        question: "The criminal’s actions brought __________ upon him, making him a notorious figure in the community.",
        chinese_question: "这名罪犯的行为使他声名狼藉，成为社区的恶名人物。",
        answers: [
            { option: "A", answer: "honor", chinese_answer: "荣誉", chinese_romanization: "róngyù" },
            { option: "B", answer: "respect", chinese_answer: "尊敬", chinese_romanization: "zūnjìng" },
            { option: "C", answer: "praise", chinese_answer: "赞美", chinese_romanization: "zànměi" },
            { option: "D", answer: "infamy", chinese_answer: "恶名", chinese_romanization: "èmíng" }
        ],
        correctAnswer: "D",
        explanation: "(D) 'infamy' means the state of being well known for some bad quality or deed." +
            "<br><br>" +
            "(A) 'honor' means high respect or esteem." +
            "<br><br>" +
            "(B) 'respect' means a feeling of deep admiration for someone or something elicited by their abilities, qualities, or achievements." +
            "<br><br>" +
            "(C) 'praise' means the expression of approval or admiration for someone or something.",
        chinese_explanation: "(D) '恶名'一词意味着因某种坏品质或行为而众所周知的状态。" +
            "<br><br>" +
            "(A) '荣誉' 意味着高度的尊重或敬仰。" +
            "<br><br>" +
            "(B) '尊敬' 意味着对某人或某事因其能力、品质或成就而产生的深深钦佩。" +
            "<br><br>" +
            "(C) '赞美' 意味着对某人或某事表示赞许或钦佩。"
    },
    {
        id: 10,
    question: "His daring __________ in the mountains, where he climbed the highest peaks without any equipment, made him a local legend.",
    chinese_question: "他在山中的大胆 __________，在没有任何装备的情况下攀登最高的山峰，使他成为当地的传奇。",
    answers: [
        { option: "A", answer: "failure", chinese_answer: "失败", chinese_romanization: "shībài" },
        { option: "B", answer: "defeat", chinese_answer: "挫败", chinese_romanization: "cuòbài" },
        { option: "C", answer: "misstep", chinese_answer: "失误", chinese_romanization: "shīwù" },
        { option: "D", answer: "exploit", chinese_answer: "功绩", chinese_romanization: "gōngjì" }
    ],
    correctAnswer: "D",
    explanation: "(D) 'exploit' means a bold or daring feat or accomplishment." +
        "<br><br>" +
        "(A) 'failure' means lack of success." +
        "<br><br>" +
        "(B) 'defeat' means an instance of being beaten or overcoming in a contest." +
        "<br><br>" +
        "(C) 'misstep' means a mistake or wrong step.",
    chinese_explanation: "(D) '功绩' 意味着大胆或英勇的壮举或成就。" +
        "<br><br>" +
        "(A) '失败' 意味着缺乏成功。" +
        "<br><br>" +
        "(B) '挫败' 意味着在比赛中被击败或克服的实例。" +
        "<br><br>" +
        "(C) '失误' 意味着错误或错误的步骤。"
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

<template>
 

      <section class="quizz-vutify" v-if="!quizCompleted">
		<v-progress-linear
  :model-value="progressValue"
  color="light-blue"
  height="15"
  width="50"
  striped
>{{ progressValue }}</v-progress-linear>
			<div class="quiz-info">
				<span class="question">{{ getCurrentQuestion.question }}</span>
				<span class="score">Score {{ score }}/{{ questions.length }}</span>
			</div>
			
			<div class="options">
			<label  v-for="(option, index) in getCurrentQuestion.options" :key="index" class="option" :class="{
          correct: getCurrentQuestion.selected == index && getCurrentQuestion.answer == index,
          wrong: getCurrentQuestion.selected == index && getCurrentQuestion.answer != index,
          disabled: getCurrentQuestion.selected != null && getCurrentQuestion.selected != index
        }">
	  
					<input 
						type="radio" 
						:id="'option' + index" 
						:name="getCurrentQuestion.index" 
						:value="index" 
						v-model="getCurrentQuestion.selected" 
						:disabled="getCurrentQuestion.selected"
						@change="SetAnswer" 
					/>
					<span>{{ option }}</span>
				</label>
			</div>
			
			<button 
				@click="NextQuestion" 
				:disabled="!getCurrentQuestion.selected">
				{{ 
					getCurrentQuestion.index == questions.length - 1 
						? 'Finish' 
						: getCurrentQuestion.selected == null
							? 'Select an option'
							: 'Next question'
				}}
			</button>
		</section>

		<section v-else>
			<h2>termine !</h2>
			<p>Your score is {{ score }}/{{ questions.length }}</p>
		</section>
  
</template>
<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Montserrat', sans-serif;
}

body {
	background-color: #000000;
	color: #ededed;
}

.app {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 2rem;
	height: 100vh;
}

h1 {
	font-size: 2rem;
	margin-bottom: 2rem;
}

.quiz {
	background-color: #ffffff;
	padding: 1rem;
	width: 100%;
}

.quiz-info {
	display: flex;
	justify-content: space-between;
	margin-bottom: 1rem;
}

.quiz-info .question {
	color: #8F8F8F;
	font-size: 1.25rem;
}

.quiz-info.score {
	color: #760404;
	font-size: 1.25rem;
}

.options {
	margin-bottom: 1rem;
}

.option {
	padding: 1rem;
	display: block;
	background-color: #ff006f;
	margin-bottom: 0.5rem;
	border-radius: 0.5rem;
	cursor: pointer;
}

.option:hover {
	background-color: #6000f1;
}

.option.correct {
	background-color: #2cce7d;
}

.option.wrong {
	background-color: #b9b9b9;
}

.option:last-of-type {
	margin-bottom: 0;
}

.option.disabled {
	opacity: 0.5;
}

.option input {
	display: none;
}

button {
	appearance: none;
	outline: none;
	border: none;
	cursor: pointer;
	padding: 0.5rem 1rem;
	background-color: #2cce7d;
	color: #6300f7;
	font-weight: 700;
	text-transform: uppercase;
	font-size: 1.2rem;
	border-radius: 0.5rem;
}

button:disabled {
	opacity: 0.5;
}

h2 {
	font-size: 2rem;
	margin-bottom: 2rem;
	text-align: center;
}

p {
	color: #8F8F8F;
	font-size: 1.5rem;
	text-align: center;
}
</style>

	<script setup>
	import { ref, computed } from 'vue'
	const progressValue = ref(0);

	const shuffle = (array) => {
	let currentIndex = array.length,  randomIndex

	while (currentIndex != 0) {
	randomIndex = Math.floor(Math.random() * currentIndex)
	currentIndex--

	[array[currentIndex], array[randomIndex]] = [
		array[randomIndex], array[currentIndex]]
	}

	return array
	}

	const questions = ref(shuffle([
	{
    question: 'Why is AWS more economical than traditional data centers for applications with varying compute workloads?',
    answer: 1,
    options: [
      'Amazon EC2 costs are billed on a monthly basis.',
      'Amazon EC2 instances can be launched on demand when needed.',
      'Users retain full administrative access to their Amazon EC2 instances.',
      'Users can permanently run enough instances to handle peak workloads.'
    ],
    selected: null
  },
  {
    question: 'Which AWS service would simplify the migration of a database to AWS?',
    answer: 1,
    options: [
      'AWS Storage Gateway',
      'AWS Database Migration Service (AWS DMS)',
      'Amazon EC2',
      'Amazon AppStream 2.0'
    ],
    selected: null
  },
  {
    question: 'Which AWS offering enables users to find, buy, and immediately start using software solutions in their AWS environment?',
    answer: 3,
    options: [
      'AWS Config',
      'AWS OpsWorks',
      'AWS SDK',
      'AWS Marketplace'
    ],
    selected: null
  },
  {
    question: 'Which of the following is an AWS responsibility under the AWS shared responsibility model?',
    answer: 1,
    options: [
      'Configuring third-party applications',
      'Maintaining physical hardware',
      "Securing application access and data",
      'Managing guest operating systems'
    ],
    selected: null
  },
  {
    question: 'Which component of the AWS global infrastructure does Amazon CloudFront use to ensure low-latency delivery?',
    answer: 1,
    options: [
      'AWS Regions',
      'Edge locations',
      'Availability Zones',
      'Virtual Private Cloud (VPC)'
    ],
    selected: null
  },
  {
    question: 'How would a system administrator add an additional layer of login security to a user s AWS Management Console?',
    answer: 2,
    options: [
      'Use Amazon Cloud Directory',
      'Audit AWS Identity and Access Management (IAM) roles',
      'Enable multi-factor authentication',
      'Enable AWS CloudTrail'
    ],
    selected: null
  },
  {
    question: 'Which service can identify the user that made the API call when an Amazon EC2 instance is terminated?',
    answer: 1,
    options: [
      'AWS Trusted Advisor',
      'AWS CloudTrail',
      'AWS X-Ray',
      'AWS Identity and Access Management (AWS IAM)'
    ],
    selected: null
  },
  {
    question: 'Which service can identify the user that made the API call when an Amazon EC2 instance is terminated?',
    answer: 1,
    options: [
      'AWS Trusted Advisor',
      'AWS CloudTrail',
      'AWS X-Ray',
      'AWS Identity and Access Management (AWS IAM)'
    ],
    selected: null
  },
  {
	question: 'Where can a user find information about prohibited actions on the AWS infrastructure?',
	answer: 3,
	options: [
		'AWS Trusted Advisor',
		'AWS Identity and Access Management (IAM)',
		'AWS Billing Console',
		'AWS Acceptable Use Policy'
	],
	selected: null
  },
]))

const quizCompleted = ref(false)
const currentQuestion = ref(0)
const score = computed(() => {
	let value = 0
	questions.value.map(q => {
		if (q.selected != null && q.answer == q.selected) {
			value++
		}
	})
	return value
})



const getCurrentQuestion = computed(() => {
	let question = questions.value[currentQuestion.value]
	question.index = currentQuestion.value
	return question
})

const SetAnswer = (e) => {
	questions.value[currentQuestion.value].selected = e.target.value
	e.target.value = null
}

const NextQuestion = () => {
	if (currentQuestion.value < questions.value.length - 1) {
    currentQuestion.value++;
    progressValue.value += 10;
    console.log(progressValue.value);
  } else {
    quizCompleted.value = true;
  }
}




</script>

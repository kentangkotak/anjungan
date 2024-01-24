<template>
  <div  class="clock">
    <div ref="hoursContainer" class="hours txt-shadow">
      <div class="first">
        <div class="number">0</div>
      </div>
      <div class="second">
        <div class="number">0</div>
      </div>
    </div>
    <div class="tick">:</div>
    <div ref="minutesContainer" class="minutes txt-shadow">
      <div class="first">
        <div class="number">0</div>
      </div>
      <div class="second">
        <div class="number">0</div>
      </div>
    </div>
    <div class="tick">:</div>
    <div ref="secondsContainer"  class="seconds txt-shadow">
      <div class="first">
        <div class="number">0</div>
      </div>
      <div class="second infinite">
        <div class="number">0</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const hoursContainer = ref(null)
const minutesContainer = ref(null)
const secondsContainer = ref(null)
const tickElements = ref(null)
const last = ref(new Date(0))

// const tickState = ref(true)

const observer = new IntersectionObserver((entries, observer) => {
  console.log(entries)
})
onMounted(() => {
  observ()
  init()
})

const timerId = setInterval(() => {
  updateTime()
}, 100)

onUnmounted(() => {
  observer.disconnect()
  clearInterval(timerId)
})

const observ = () => {
  const tick = document.querySelector('.tick')
  tickElements.value = tick

  // observer.observe(clock)
  observer.observe(hoursContainer.value)
  observer.observe(minutesContainer.value)
  observer.observe(secondsContainer.value)
  observer.observe(tick)
}

function init () {
  last.value.setUTCHours(-1)
  // console.log('last', last.value)

  updateTime()
}

const updateTime = () => {
  const now = new Date()

  const lastHours = last.value.getHours().toString()
  const nowHours = now.getHours().toString()
  if (lastHours !== nowHours) {
    updateContainer(hoursContainer.value, nowHours)
  }

  const lastMinutes = last.value.getMinutes().toString()
  const nowMinutes = now.getMinutes().toString()
  if (lastMinutes !== nowMinutes) {
    updateContainer(minutesContainer.value, nowMinutes)
  }

  const lastSeconds = last.value.getSeconds().toString()
  const nowSeconds = now.getSeconds().toString()
  if (lastSeconds !== nowSeconds) {
    // tick()
    updateContainer(secondsContainer.value, nowSeconds)
  }
  // console.log('lastSeconds', nowSeconds)

  last.value = now
}

function updateContainer (container, newTime) {
  const time = newTime.split('')

  if (time.length === 1) {
    time.unshift('0')
  }

  const first = container.firstElementChild
  // console.log('firs', first)
  if (first.lastElementChild.textContent !== time[0]) {
    updateNumber(first, time[0])
  }

  const last = container.lastElementChild
  if (last.lastElementChild.textContent !== time[1]) {
    updateNumber(last, time[1])
  }
}

function updateNumber (element, number) {
  // element.lastElementChild.textContent = number
  const second = element.lastElementChild.cloneNode(true)
  second.textContent = number

  element.appendChild(second)
  // console.log('element', element)
  element.classList.add('move')

  setTimeout(() => {
    element.classList.remove('move')
  }, 990)
  setTimeout(() => {
    element.removeChild(element.firstElementChild)
  }, 990)
}

</script>

<style lang="scss" scoped>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.txt-shadow{
  text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
}
.clock {
  height: 5vh;
  color: white;
  font-size: 6vh;
  font-family: sans-serif;
  line-height: 5.4vh;
  display: flex;
  position: relative;
  /*background: green;*/
  overflow: hidden;
}

.clock::before, .clock::after {
  content: '';
  width: 7ch;
  height: 3vh;
  background: linear-gradient(to top, transparent, rgba(0, 0, 0, 0));
  position: absolute;
  z-index: 2;
}

.clock::after {
  bottom: 0;
  background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0));
}

.clock > div {
  display: flex;
}

.tick {
  line-height: 4vh;
}

.tick-hidden {
  opacity: 0;
}

.move {
  animation: move linear 1s infinite;
}

@keyframes move {
  from {
    transform: translateY(0vh);
    // opacity:1;
  }
  to {
    transform: translateY(20vh);
    // opacity:0.5;
  }
}

</style>

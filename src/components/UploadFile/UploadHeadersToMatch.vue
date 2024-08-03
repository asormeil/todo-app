<script setup>
import { ref, onMounted, onUnmounted } from "vue"

const formData = ref({
  input: "",
  response: null
})
let worker = ref(null)
let onMessageReceived = () => {}

onMounted(() => {
  console.log("onmounted is called")
  // Create a reference to the worker object.
  worker = ref(null)
  if (!worker.current) {
    // Create the worker if it does not yet exist.
    worker.current = new Worker(new URL("./../../libs/pipeline.js", import.meta.url), {
      type: "module"
    })
  }

  // Create a callback function for messages from the worker thread.
  onMessageReceived = (e) => {
    // const { sequence, labels, scores } = e.data.output
    console.log("eeee", e)
  }

  // Attach the callback function as an event listener.
  worker.current.addEventListener("message", onMessageReceived)
})

onUnmounted(() => {
  console.log("UNNNonmounted is called")
  worker.current.removeEventListener("message", onMessageReceived)
})
const classify = (text, labels) => {
  worker.current.postMessage({
    text,
    labels
  })
}
</script>

<template>
  <div class="bg-grey w-100 p-3">
    <file-pond
      ref="pond"
      name="filepond"
      label-idle="Drag & Drop your files or <span class='filepond--label-action'>Browse</span>"
      @init="handleInit"
      @processfile="handleProcessFile"
      :server="serverConfig"
    />
  </div>
</template>

<style scoped>
.container {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 5px auto;
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-group {
  margin-bottom: 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-group label {
  margin-bottom: 5px;
  font-size: 1.1em;
  color: #2c3e50;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1em;
}

select {
  padding: 5px;
  text-align: center;
}
textarea {
  resize: vertical;
  min-height: 100px;
}

button {
  border: none;
  background-color: #2c3e50;
  color: #fff;
  padding: 10px 15px;
  border-radius: 5px;
  font-size: 1.1em;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #34495e;
}
</style>

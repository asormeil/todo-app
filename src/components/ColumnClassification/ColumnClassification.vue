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

const handleSubmit = async () => {
  try {
    const inputColumns = formData.value.input.replace(" ", "").trim().split(",")
    if (!Array.isArray(inputColumns)) {
      formData.value.response = "Please enter an array of strings."
      return // Exit the function if input is not an array
    }
    console.log("inputColumns", inputColumns)
    // Define your custom labels (classes)
    const labels = [
      "name",
      "tag",
      "producer",
      "type",
      "subtype",
      "style",
      "vintage",
      "country",
      "region",
      "subregion",
      "appellation",
      "bin",
      "size_value",
      "size_units",
      "size_container",
      "units_per_case",
      "sku",
      "par",
      "cost",
      "quantity",
      "vendor"
    ]
    classify(inputColumns, labels)

    //const classifier = await pipeline("text-classification", "Xenova/toxic-bert")
    //const output = await classifier("I hate you!", { topk: null })
    console.log("results", "classifier")

    // const predictions = await Promise.all(
    //   inputColumns.map(async (text) => {
    //     const results = await classifier(text, { labels })
    //     return console.log("results", results)
    //     return { text, label: results.label } // Return text and predicted label
    //   })
    // )

    //formData.value.response = predictions // Update response with predictions
  } catch (error) {
    console.error("Error during classification:", error)
    formData.value.response = "Error classifying input"
  }
}
</script>

<template>
  <form class="container" @submit.prevent="handleSubmit">
    <label for="input">Column Classification</label>
    <div class="form-group">
      <label for="input">Input Column</label>
      <input required min="3" type="text" name="input" v-model="formData.input" />
    </div>
    <div class="form-group">
      <label for="response">Response</label>
      <textarea name="response" v-model="formData.response"></textarea>
    </div>

    <button type="submit">Match Column</button>
    <p v-if="formData.response">Response: {{ formData.response }}</p>
  </form>
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

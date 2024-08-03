<script setup>
import { ref } from "vue"
import axios from "axios"

const formData = ref({
  input: "",
  response: null
})

const handleSubmit = async () => {
  const apiKey = import.meta.env.VITE_OPEN_AI_KEY // Replace with your OpenAI API key
  console.log("import.meta.env.VUE_APP_OPEN_AI_KEY", import.meta.env.VUE_APP_OPEN_AI_KEY)
  const prompt = `The following is a product property: ${formData.value.input}. My goal is to match the product property name to one of our database columns which are:
   (name, tag, producer, type, subtype, style, vintage, country, region, subregion, appellation, bin, size_value, size_units, size_container, units_per_case, sku, par, cost, quantity, vendor
   ). Do not write any information in your response, just return the column name from the list. Also, if you are not sure if the column match is 100% accurate, offer two to four column names in order of their possibility being the correct one.`

  try {
    const start_time = Date.now()
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`
        }
      }
    )

    const response_time = (Date.now() - start_time) / 1000
    console.log(`Full response received ${response_time.toFixed(2)} seconds after request`)
    formData.value.response = response.data.choices[0].message.content.trim()
  } catch (error) {
    console.error("Error fetching response from OpenAI:", error)
    formData.value.response = "Error fetching response"
  }
}
</script>

<template>
  <form class="container" @submit.prevent="handleSubmit">
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

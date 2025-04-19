'''from transformers import AutoTokenizer, AutoModelForCausalLM
import torch

tokenizer = AutoTokenizer.from_pretrained("TheBloke/gemma-2b-it-GGUF", trust_remote_code=True)
model = AutoModelForCausalLM.from_pretrained("TheBloke/gemma-2b-it-GGUF", trust_remote_code=True, device_map="auto")

def rephrase_question(prompt):
    inputs = tokenizer(prompt, return_tensors="pt").to("cuda")
    outputs = model.generate(**inputs, max_new_tokens=100)
    return tokenizer.decode(outputs[0], skip_special_tokens=True)'''

from langchain_community.llms import Ollama
def rephrase_question(prompt):
    llm = Ollama(model = "llama3.2:latest")
    response = llm.invoke(prompt)
    return response
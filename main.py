from google import genai
import os
from dotenv import load_dotenv

load_dotenv()  # This loads variables from the .env file

api_key = os.getenv('GEMINI_API_KEY')

client = genai.Client(api_key=api_key)
prompt = "List 5 fruits that are bitter"

response = client.models.generate_content(
    model="gemini-2.5-flash", 
    contents=prompt
)
print(response.text)
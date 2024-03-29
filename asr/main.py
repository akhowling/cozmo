import os
import time
import playsound
import speech_recognition as sr
from gtts import gTTS


def speak(text):
    tts = gTTS(text=text, lang="en")
    filename = "voice.mp3"
    tts.save(filename)
    playsound.playsound(filename)


def get_audio():
    r = sr.Recognizer()
    with sr.Microphone() as source:
        audio = r.listen(source)
        said = ""

        try:
            said = r.recognize_google(audio)
            print(said)
        except Exception as e:
            print("Exception: " + str(e))

    return said

# text = get_audio()

WAKE = "Cosmo"
EXIT="exit"
while True:
    print("Listening")
    text = get_audio()

    if text.count(WAKE) > 0:
        speak("I am ready")
        # text = get_audio()
    elif text.count(EXIT) > 0:
        speak("Goodbye")
        break

# if "hello" in text:
#     speak("hello, how are you?")
# elif "what is your name" in text:
#     speak("My name is Tim")
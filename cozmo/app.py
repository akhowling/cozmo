# Importing flask module in the project is mandatory
# An object of Flask class is our WSGI application.
from flask import Flask, render_template, jsonify, request
import speech_recognition as sr
from gtts import gTTS
import os
import time
import playsound

import sys
from morseapi import MorseRobot


# Flask constructor takes the name of
# current module (__name__) as argument.
app = Flask(__name__)

# The route() function of the Flask class is a decorator,
# which tells the application which URL should call
# the associated function.
@app.route('/voweltoword')
def voweltoword():
    return render_template('voweltoword.html')
@app.route('/wordtophrase')
def wordtophrase():
    return render_template('wordtophrase.html')
@app.route('/conversation')
def conversation():
    return render_template('conversation.html')
@app.route('/home')
def home():
   return render_template('home.html')

# @app.route('/hi')
# def hi():
#     def hi(bot):
#         # return bot.say('hi')
#         return hi_actions(bot)
#
#     def hi_actions(bot):
#         bot.say("hi")
#         bot.ear_color("purple")
#         bot.drive(100)
#         bot.say("hi")
#         bot.stop()
#         bot.reset()
#
#     if __name__ == "__main__":
#         hi(bot)
#
#     return ('', 204)
#
# @app.route('/dance')
# def dance():
#     def dance(bot):
#         return dance_actions(bot)
#
#     def dance_actions(bot):
#         bot.say("charge")
#         bot.spin(540)
#         bot.ear_color("green")
#         bot.neck_color("green")
#         bot.ear_color("red")
#         bot.neck_color("red")
#         bot.ear_color("blue")
#         bot.neck_color("blue")
#         bot.ear_color("yellow")
#         bot.neck_color("yellow")
#         bot.ear_color("green")
#         bot.neck_color("green")
#         bot.ear_color("red")
#         bot.neck_color("red")
#         bot.ear_color("blue")
#         bot.neck_color("blue")
#         bot.ear_color("yellow")
#         bot.neck_color("yellow")
#         bot.say("charge")
#         bot.reset()
#
#
#
#     if __name__ == "__main__":
#         dance(bot)
#
#     return ('', 204)

@app.route('/imfine')
def imfine():


    def speak(text):
        tts = gTTS(text=text, lang='en')
        filename = 'voice.mp3'
        tts.save(filename)
        playsound.playsound(filename)

    speak("I am fine! How are you?")
    return ('', 204)

@app.route('/question')
def question():


    def speak(text):
        tts = gTTS(text=text, lang='en')
        filename = 'voice.mp3'
        tts.save(filename)
        playsound.playsound(filename)

    speak("hello")
    return ('', 204)



# @app.route('/tick')
# def tick():
#     def tick(bot):
#         return tick_actions(bot)
#
#     def tick_actions(bot):
#         bot.say("confused2")
#         bot.ear_color("green")
#         bot.neck_color("green")
#         bot.move(100)
#         bot.head_pitch(-10)
#         bot.head_pitch(10)
#         bot.head_pitch(-10)
#         bot.head_pitch(10)
#         bot.head_pitch(-10)
#         bot.head_pitch(10)
#         bot.head_pitch(-10)
#         bot.head_pitch(10)
#         bot.spin(360)
#         bot.reset()
#         bot.move(-100)
#
#
#
#     if __name__ == "__main__":
#         tick(bot)
#
#     return ('', 204)
#
#
# @app.route('/cross')
# def cross():
#     def cross(bot):
#         # return bot.say('hi')
#         return cross_actions(bot)
#
#     def cross_actions(bot):
#         bot.say("ohno")
#         bot.ear_color("red")
#         bot.neck_color("red")
#         bot.eye_brightness(0)
#         bot.move(-100)
#         bot.head_yaw(-10)
#         bot.head_yaw(10)
#         bot.head_yaw(-10)
#         bot.head_yaw(10)
#         bot.head_yaw(-10)
#         bot.head_yaw(10)
#         bot.head_yaw(-10)
#         bot.head_yaw(10)
#         bot.reset()
#         bot.move(100)
#
#
#     if __name__ == "__main__":
#         cross(bot)
#
#     return ('', 204)
#
#
# @app.route('/dnd')
# def dnd():
#     def dnd(bot):
#         # return bot.say('hi')
#         return dnd_actions(bot)
#
#     def dnd_actions(bot):
#         bot.say("brrp")
#         bot.ear_color("yellow")
#         bot.neck_color("yellow")
#         bot.turn(360)
#         bot.reset()
#
#
#     if __name__ == "__main__":
#         dnd(bot)
#
#     return ('', 204)
#
#
# # main driver function
# if __name__ == '__main__':
#     bot = MorseRobot("F7:42:25:A5:30:3B")
#     bot.reset()
#     bot.connect()
#     app.run()

#
if __name__ == '__main__':
    app.run()

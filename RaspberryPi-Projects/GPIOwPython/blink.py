import RPi.GPIO as GPIO   ## Import GPIO Library
import time               ## Import time library for 'sleep'

pin = 3                   ## Working with pin 3
GPIO.setmode(GPIO.BOARD)  ## Use BOARD pin numbering
GPIO.setup(pin, GPIO.OUT) ## Set pin 3 ro OUTPUT

for i in range(0,20):    ## Repeat 20 times
        GPIO.output(pin, GPIO.HIGH)   ## Turn on GPIO pin
        time.sleep(1)                 ## Wait 1 second
        GPIO.output(pin, GPIO.LOW)    ## Turn off GPIO pin (LOW)
        time.sleep(1)                 ## Wait 1 second

GPIO.cleanup()

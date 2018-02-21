# Make LED Blink with Raspberry PI and Python

Setup Python on Raspberry PI

Install python development tools ::
* apt-get install python-dev  

Install virtual environment package ::
* apt-get install python-virtualenv  

Setup directory to experiment in ::
* cd /var/  
* mkdir working
* cd  working   

Install Python virtual environment ::
* virtualenv venv  


Activate working directory ::
* venv/bin/activate  

Notice the new command line addition  
 (venv)root@minibian:/var/working#  

To deactivate just type deactivate


_______________________________________________________________________________

GPIO Resources
https://www.raspberrypi.org/documentation/usage/gpio-plus-and-raspi2/README.md  
http://pinout.xyz/pinout/pin3_gpio2  


See images for wiring setup  

PI and Breadboard together -  LEDLightPi_BreadboardSetup.jpg  
![](https://github.com/jslnriot/RaspberryPi-Projects/blob/master/GPIOwPython/LEDLightPi_BreadboardSetup.jpg)

Zoom on Breadboard - LEDLightBreadboardSetup.jpg    
![](https://github.com/jslnriot/RaspberryPi-Projects/blob/master/GPIOwPython/LEDLightBreadboardSetup.jpg)


 To Run  
 ```sh
 python blink.py
 ```

 The light will blink 20 times and then return to command prompt

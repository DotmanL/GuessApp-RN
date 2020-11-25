
start-adb:
	adb start-server
	
stop-adb:
	adb kill-server

start-emulator:
	emulator -avd Pixel_2_API_29

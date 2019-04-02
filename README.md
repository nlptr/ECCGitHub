# ECCGitHub
# ECC Calculator
This code is written in Angular 4.4 
Download this repository and add this as a project to your visual studio solution.
 
Follow the below instructions :
1.you need to have npm v 6.0.0
2. and node v8.11.1 installed on your machines
3. After the verification has been done. We need to install webpack3.11.0. To do that you have to be in Windows:-System 32 folder, open up a command prompt and run this command. npm install -g webpack@3.11.0 
4. After step 3 is done, navigate to the Web Project of your application and open a command prompt from there and run the command npm install webpack@3.11.0 
5. Remove the node_modules from web project folder. Run “npm install” from this folder. This should recreate node_modules in web directory and pull in all the required libraries . 
6. For the path variable to be reflected correctly, close the command prompt and reopen again. 
7. After Step 6 is done, run this command in your web directory Webpack --config webpack.config.vendor.js . This will compile all the vendor libraries. 
8. After step 7 is done, just run this command in your web directory … webpack. This will compile your angular app. 
UI screen is also attached for your reference.

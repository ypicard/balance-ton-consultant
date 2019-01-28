These are Cordova resources. You can replace icon.png and splash.png and run
`ionic cordova resources` to generate custom icons and splash screens for your
app. See `ionic cordova resources --help` for details.

Cordova reference documentation:

- Icons: https://cordova.apache.org/docs/en/latest/config_ref/images.html
- Splash Screens: https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-splashscreen/

# Question image backgrounds
- Add your pictures in folder `/src/assets/question-backgrounds`
- Respect file naming: **q-{number}.jpeg**
- Update `question.component.ts file` function `getRandomBackgorundImage()` by incrementing the range of the random int generator to the number of possible pictures.
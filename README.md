## Installing

To install this app, git clone it
and write commands:
```
cd cards_front
npm install
```
And command for running app:
```
npm start
```

And you need to install:
* nodejs

This repository is second half of app.
And if you want to use app, please
install first half - cards_back

## About

This app helps in learning english.
Main conception is cards and piles.
Card has original and translated value.
You can make cards that store only this words.
But more efficient way is to make cards,
that in translated values store context -
some meaningful sentence, with original word.
This sentence you can encounter in book,
film etc. Or you can think of your own sentence.
In this sentence you can mark original word making
him bold or italic. For this app supports markdown.
[There](https://www.markdowntutorial.com/)
you can read about markdown

You can create, edit and delete cards and piles.
But piles form can be unobvious. When you have added new pile,
you must click "save" button. The same action with editing.
If you want to close form, click out the form.
About cards - every new card creates with "default" pile

Game mode is the second conception.
When you write cards, you need to memorize them.
If you understand that you have already remembered,
you can move this word to pile "long time" for example
to get back to this word in month.
Also you can move cards to other piles in main page.
You can change current pile
(this pile will be selected also in main page),
cards of this pile will be randomly output.
And you can watch translate (or context)

And last - import. To import you must create
xlsx file with to columns. First column stores original words
and second column store translated words.
Drag and drop this file to import 
form and cards will created for you, with default pile
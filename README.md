# Pretty Box
A simple tool, which prints a sweet boxes with text to your console

- [PrettyBox](#pretty-box)
    - [Installation](#installation)
    - [Usage](#usage)
      - [Configure Output](#configure-output)
      - [Usage with TypeScript](#usage-with-typescript)
      - [Colored output](#colored-output)
    - [Examples](#examples)
    - [Note about emojis](#note-about-emojis)
    
## Installation
Using NPM
```bash
npm install pretty-box
```
Or using Yarn
```bash
yarn add pretty-box
```

## Usage
___
>In the examples below, the `print` method will output the configured box in the console

If you're using a ES5 (CommonJS) syntax, you can use this tool, by adding a `.default` to the `require('pretty-box')`

![carbon](https://user-images.githubusercontent.com/36232649/106245175-1cb30500-621d-11eb-9cd9-880f3ab78294.png)

Otherwise, you're familiar with ES6 Import syntax (which is highly recommended nowadays), fell free to use it

![carbon (1)](https://user-images.githubusercontent.com/36232649/106245357-5edc4680-621d-11eb-9735-6f7f58f92163.png)

### Configure Output
You can simply configure the default look of a printed box, by calling the following methods:
- `setVerticalPadding(value: number): void`
  
  By calling the following method of a PrettyBox instance, you can set the amount of empty lines, which will be printed **before** the first line of text and **after** the last line of text (default is 1).

- `setHorizontalPadding(value: number): void`
  
  By calling the following method of a PrettyBox instance, you can set the amount of empty spaces, which will be printed **BEFORE** and **AFTER** every line of a text (default is 4).

- `print(): void`

  Output configured box to the console.

### Usage with TypeScript

This library initially was written with TypeScript, so it comes with the built-in typings. Feel free to use this library with that beautiful language. 😁

### Colored output

Pretty Box does not have any built-in methods for setting up color and/or styles of a text, but you can use a [chalk](https://www.npmjs.com/package/chalk) library to add color and styles to the text of a printed box.

>You can use any printable characters (like an Emoji) too. The string length would be calculated correctly.

![carbon (2)](https://user-images.githubusercontent.com/36232649/106247384-81239380-6220-11eb-89d0-dd8e678c2abd.png)

## Examples
> The font used in this example is "Fira Code Retina".

![image](https://user-images.githubusercontent.com/36232649/106248187-b086d000-6221-11eb-9704-50c2ab305016.png)

## Note about emojis
Please, note that printed emojis can sometimes breaks a spacing after the Emoji symbol. It's highly recommended using a two spaces after an emoji symbol rather than one. 

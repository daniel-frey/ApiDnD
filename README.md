![DND](assets/dnd.png) ApiDnD ![travis build status](https://travis-ci.com/fncreative/ApiDnD.svg?branch=master)
===


## Overview

A command line Dungeons and Dragons text adventure! Immerse yourself in the Tomb of Horrors, a vast and terrible crypt full of treasure and traps. If you're brave and lucky, you may leave a rich man. If not, you'll be dead. 
#### The user can:
 * Create a character with an associated account
 * Level up your character as you succeed and more and more difficult trials
 * Traverse a vast text landscape
 * Obtain weapons, potions, and spells
 * Obtain treasures and other loot
 * Battle creatures that vary in difficulty and scale with the progression of the character
 * Save the game and access your character and progress later on
 
The game utilizes the [Dungeons and Dragons api](http://www.dnd5eapi.co/), along with character input to generate a DnD style dungeon complete with random enemy encounters, boss battles, skill rolls, and character progression.



## Usage

Below are some example commands to kickoff and control your adventure:
```
Open APIdnd
>> Welcome to Dungeons and Dragons! Would you like to start a new game or resume an existing game?
```
```
>> There are chairs, windows, boxes, bales, doors, chests, birds, bats, spiders, and all manner of things shown on the walls. You see a doorway to your right with a plaque labeled The Arch of Mist and another doorway further down the leads to what appears to be a Wizardly work room. Where do you go? 
    >> The Arch of Mist
    >> Wizardly work room
    >> Search the room for traps
Search the room for traps
>> You fail to make a saving throw on disarming the Poison dart trap. You are hit for 2 damage. Your health is currently 8.
```
```
>> You've encountered a kobold! Get ready to fight...
Battle tactics: magic-missile(2), use-potion(20)
    >> You cast magic missile
    >> Kobold take 2 damage from missile
    >> Kobold attacks
    >> Kobold gets a critical hit for 4 damage
        >> Your health is 6
```

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You must have **NodeJS** installed along with either **NPM** or **Yarn**. 

### Installing

Copy the link from the github repository
In the command line, navigate to the parent directory where you want to store this project
In the command line, type:
```
git clone <repository url>
```
Once the project files are there, navigate to **/lambda/custom** and type:
```
npm install
```
or
```
yarn i
```

## Running the tests

* Test case example
```
TEST EXAMPLE
```

## ERD

![edr-diagram](placeholder.jpg)

## Built With

* [NodeJS](https://nodejs.org) - The javascript runtime used
* [Jest](https://jestjs.io/) - Testing platform used
* [Eslint](https://eslint.org/) - Coding style linter
* [Superagent](https://visionmedia.github.io/superagent/) - AJAX with less suck!
* [Winston](https://www.npmjs.com/package/winston) - One seriously awesome logging tool
* [Express](https://www.npmjs.com/package/express) - A robust and versatile tool for creating servers
* [Faker](https://www.npmjs.com/package/faker) - A useful package for generating fake test data
* [Body Parser](https://www.npmjs.com/package/body-parser) - A middleware tool for parsing requests
* [MongoDB](https://www.mongodb.com/) - A dynamic database
* [Mongoosejs](https://www.npmjs.com/package/mongoose) - An asynchronous object modeling tool
* [Jsonwebtoken](https://jwt.io/) - Tool for industry standard method for securely representing claims between two parties
* [Bcrypt](https://www.npmjs.com/package/bcrypt) - A useful tool for hashing passwords


## Authors

[**Tyler Anyan**](http://tyleranyan.com/) # [**Tom North**]() # [**Diego Ramos**]() # [**Daniel Frey**]() # [**Wyatt Peffley**]()

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

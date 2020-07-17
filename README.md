```There are 100 passengers about to board a plane with 100 seats. Each passenger is assigned a distinct seat on the plane. The first passenger who boards has forgotten his seat number and sits in a randomly selected seat on the plane. Each passenger who boards after him either sits in his or her assigned seat if it is empty or sits in a randomly selected seat from the unoccupied seats. What is the probability that the last passenger to board the plane sits in her assigned seat?```


## My Thought Process
I confirmed with Syed that because we aren't thinking about this as a statistics problem, a sufficient "happy path" is that this returns true if the final passenger ends up in their assigned seat.

The solution to this problem ended up closer to a simulation. I knew that I would need a way to track the available seats as "passengers" occupied them. After that it was simply a matter of placing the passengers in their assigned seats when I could, and selecting from whatever available seats were left.

## How to Run
You will need Node installed on your system (I used v12.4.0) and an IDE of your choosing that can execute Node/JavaScript.

Clone the respository to your local system.

Navigate to the top level directory in the repository on the command line/terminal.

Run `yarn install` to get the packages used for testing.

Run `node index.js` to run the program and see the output printed to the command line/terminal.

Run `yarn test index.test.js` to run the tests and see the output printed to the command line/terminal.
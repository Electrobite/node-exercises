# Description

In this repository I have implemented three different ways to generate a `.txt` file with the multiplication table of a given number.

For this purpose I have used three dependencies:

-   fs/promises
-   yargs
-   path

## Example 1

This is the simplest example. Just modify the base in `app.js` and execute this file from the terminal with:

```bash
node example-1/app.js
```

The tables created will be stored in the `tables` directory.

## Example 2

The second example works in a similar way but instead of modifying the base manually in `app.js` we will do it through an argument each time we call `app.js`. For example, if we want to get the multiplication table of number 6:

```bash
node example-2/app.js 6
```

> It is important to use numerical values, otherwise we will get an error.

## Example 3

In the last example we use the `yargs` dependency to create two new options:

-   `base (-b)`: a numeric base.
-   `limit (-l)`: 10 by default.

And two new commands:

-   `list`: display the multiplication table of a number `x` on the terminal.
-   `create`: generates a `.txt` file containing the multiplication table of a number `x`.

Both commands require a `base` and a `limit` (optional).

Let's see an example of how we can list by terminal the table of 7 from 1 to 15. In this case, 7 is the base and 15 is the limit:

```bash
node example-3/app.js list -b=7 -l=15

7 * 1 = 7
7 * 2 = 14
7 * 3 = 21
7 * 4 = 28
7 * 5 = 35
7 * 6 = 42
7 * 7 = 49
7 * 8 = 56
7 * 9 = 63
7 * 10 = 70
7 * 11 = 77
7 * 12 = 84
7 * 13 = 91
7 * 14 = 98
7 * 15 = 105
```

If we do not indicate a default limit it will be 10:

```bash
node example-3/app.js list -b=7

7 * 1 = 7
7 * 2 = 14
7 * 3 = 21
7 * 4 = 28
7 * 5 = 35
7 * 6 = 42
7 * 7 = 49
7 * 8 = 56
7 * 9 = 63
7 * 10 = 70
```

The list command will only display the table in the terminal but will not save it to a text file. For this purpose we must use the create command:

```bash
node example-3/app.js create -b=2
```

Remember that created tables will be stored in the `tables` directory. You can use the limit option too.

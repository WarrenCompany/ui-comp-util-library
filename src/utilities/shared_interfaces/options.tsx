export default interface Options {
    colors?: 'greyscale' | 'red' | 'orange' | 'yellow' | 'green' | 'indigo' | 'blue' | 'violet',
    hundreds?: 0 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 1000,
    fives?: 0 | 5 | 10 | 15 | 20 | 25 | 30 | 35 | 40 | 45 | 50,
    quarters?: 0 | 25 | 50 | 75 | 100,
    sizes?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl',
    sides?: 'x' | 'y' | 't' | 'b' | 'l' | 'r' | 'full',
  }
// =====
// 1. what is context
// 2. when context is lost
// 3. how to fix context

// function getName() {
//   console.log(this);
//   return 'James';
// }
// getName();

export const timer = {
  secondsPassed: 0,
  minsPassed: 0,
  myInterval: 0,

  startTimer() {
    // input: callback, number
    // output: ID
    // const callback = function () {
    //   console.log('calback context', this);
    //   this.secondsPassed += 1;
    // };
    // const bindedCallback = callback.bind(this);
    // setInterval(bindedCallback, 1000);

    this.myInterval = setInterval(() => {
      this.secondsPassed += 1;
      if (this.secondsPassed === 60) {
        this.minsPassed += 1;
        this.secondsPassed = 0;
      }
      console.log(`${this.minsPassed}:${this.secondsPassed.toString().padStart(2, '0')}`);
    }, 1000);
  },

  getTime() {
    return `${this.minsPassed}:${this.secondsPassed.toString().padStart(2, '0')}`;
  },
  stopTimer() {
    clearInterval(this.myInterval);
  },
  resetTimer() {
    this.minsPassed = 0;
    this.secondsPassed = 0;
  },
};
// test Data
// timer.startTimer(); // context*

// 1  func called separately
// const func = timer.startTimer;
// func(); // context undefined

// 2 callback func (context undefined) !!!
// 3 nested function
// кто вызывает функцию тот является ее контекстом
// console.log(timer.startTimer());
// timer.startTimer();
// timer.stopTimer();
// timer.getTime();

/* eslint-disable */

// GLOBAL LEX ENV
//   'enviromentRecord': {
//     'message': 'Test',
//     'weight': 55,
//     'run': function,
//      'createMessenger': fn,
//      'messanger1': {...},
//      'messanger2': {...},
//      'messanger3': {...},
//   },
//   'outherLexicalEnv': null
// }
// messanger LEX ENV
//   'enviromentRecord': {
//     'sendmessage': func,
//     'setsender': func,
//     'setmessage': func,
//     'message': '...',
//     'sender':'...' ,
//   },
//   'outherLexicalEnv':  GLOBAL LEX ENV
// }

const message = 'Test';
const weight = 55;

function run() {
  console.log('RUN');
}

function createMessenger() {
  let message = 'Just learn it';
  let sender = 'Gromcode';

  if (sender === 'Gromcode') {
    sender = 'Any message';
  }

  function sendMessage(name) {
    console.log(`${name}, ${message}! Your ${sender}`);
  }

  function setSender(newSender) {
    sender = newSender;
  }

  function setMessage(text) {
    message = text;
  }

  return {
    sendMessage,
    setMessage,
    setSender,
  };
}

const messanger1 = createMessenger();
const messanger2 = createMessenger();
messanger2.sendMessage('James');
const messanger3 = createMessenger();
run();

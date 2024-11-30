const Quotes = [
    {'author': 'Oscar Wilde', 
     'quote': 'Be yourself; everyone else is already taken'
    },
    {'author': 'Frank Zappa', 
     'quote': 'So many books, so little time.'
    },
    {'author': 'Marcus Tullius Cicero', 
     'quote': 'A room without books is like a body without a soul.'
    },
    {'author': 'Nelson Mandela', 
        'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
    },
    {'author': 'Mae West', 
     'quote': 'You only live once, but if you do it right, once is enough.'
    },
    {'author': 'Elbert Hubbard', 
     'quote': 'Do not take life too seriously. You will not get out alive.'
    },
    {'author': 'Mark Twain', 
     'quote': 'If you tell the truth, you don\'t have to remember anything.'
    }
];

let previousRandom = -1; 
function Generate_Qoute(){

    let random
    do {
        random = Math.floor(Math.random() * Quotes.length); // Generate a random index
    } while (random === previousRandom); // Loop until the random number is different from previousRandom
    
    previousRandom = random;

    document.querySelector('#qoute').textContent = `\"${Quotes[random].quote}\"`;
    document.querySelector('#author').textContent = `--${Quotes[random].author}`;
    
}

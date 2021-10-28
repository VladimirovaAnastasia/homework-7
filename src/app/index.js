import {BOARD_HEIGHT, BOARD_WIDTH, LETTER_SIZE, LETTER_SPACE, COLORS, defaultText, SQUARE_SIZE} from './const';
import Counter from './js/send';
import {detectBrowser} from "./js/detect";
import './styles.css';

let counter = new Counter();

counter.init('D9F99E50-3339-11EC-9EDF-9F93090795B7', String(Math.random()).substr(2, 12), 'game');
counter.setAdditionalParams({
    platform: navigator.platform,
    browser: detectBrowser()
});

const getRandomColor = () => {
    const index = Math.floor(Math.random() * COLORS.length);
    return COLORS[index]
};

const setColor = (el) => {
    const color = getRandomColor();
    el.style.backgroundColor = color;
    el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
};

const removeColor = (el) => {
    el.style.backgroundColor = '#1D1D1D';
    el.style.boxShadow = '0 0 2px #1D1D1D'
};

const drawLetter = (letter, offsetX, offsetY = 0) => {
    // offsetX, offsetY - отступы от начала координат (верхний левый угол)
    // xSize - длина буквы; ySize - высота буквы;
    let xSize = letter[0].length;
    let ySize = letter.length;

    for (let y = 0; y < ySize; y++) {
        for (let x = 0; x < xSize; x++) {
            let index = BOARD_LENGTH * (y + offsetY) + (x + offsetX);
            letter[y][x] && setColor(board.children[index])
        }
    }
};

const paintLetters = (text) => {
    const letters = Object.values(text);
    letters.forEach((letter, index) => {
        drawLetter(letter, LETTER_SIZE * index + LETTER_SIZE, LETTER_SPACE + LETTER_SIZE)
    });
};

const initBoard = () => {
    let drawStart = Date.now();

    for (let i = 0; i < SQUARES_NUMBER; i++) {
        const square = document.createElement('div');

        square.setAttribute('data-id', String(i));
        square.classList.add('square');

        square.addEventListener('mouseover', (e) => setColor(e.target));
        square.addEventListener('mouseleave', (e) => removeColor(e.target));

        board.appendChild(square);
    }

    requestAnimationFrame(function () {
        counter.send('ttfmp', Date.now() - drawStart);
    });
};

if (window.performance) {
    let performance = window.performance;
    let navigation = performance.getEntriesByType("navigation")[0];
    counter.send('ttfb', navigation.responseEnd - navigation.requestStart);
    counter.send('connect', navigation.connectEnd - navigation.connectStart);
}

window.addEventListener("load", () => {
    let paintMetrics = performance.getEntriesByType("paint");

    if (paintMetrics !== undefined && paintMetrics.length > 0) {
        paintMetrics.forEach((paintMetric) => {
            if (paintMetric.name === 'first-contentful-paint') {
                counter.send('ttfcp', paintMetric.startTime);
            }
        });
    }
});

console.log(navigator.geolocation)
const board = document.querySelector('#board');
const button = document.querySelector('#surprise-button');

board.style.width = BOARD_WIDTH + 'px';
const SQUARES_NUMBER = BOARD_WIDTH * BOARD_HEIGHT / (SQUARE_SIZE * SQUARE_SIZE);
const BOARD_LENGTH = BOARD_WIDTH / SQUARE_SIZE;

initBoard();
button.addEventListener('click', () => paintLetters(defaultText));

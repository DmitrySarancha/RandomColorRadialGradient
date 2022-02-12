const btn = document.querySelector('button');
const value = document.querySelector('.value');

const hslValue = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'b',
    'e',
    'f',
];

const direction = [
    'ellipse at ',
    'closest-side at ',
    'closest-corner at ',
    'farthest-side at ',
    'farthest-corner at ',
];

const generate = () => {
    // генерируем случайное направление
    const directionValue = () => {
        const navigate = Math.floor(Math.random() * direction.length);
        const value = direction[navigate];

        let percent = Math.round(Math.random() * 100);
        let percent2 = Math.round(Math.random() * 100);
        const percentValue = percent + '%'; // неявное преобразование в строку!
        const percentValue2 = percent2 + '%';
        const sum = value + percentValue + ' ' + percentValue2; // конкатенация

        return sum;
    };

    // генерирует случайное значение hls
    const hslColorGenerate = (hash) => {
        for (let i = 0; i < 6; i++) {
            const a = Math.round(Math.random() * 15);
            const b = hslValue[a];
            hash += b;
        }
        return hash;
    };

    const newColor1 = hslColorGenerate('#');
    const newColor2 = hslColorGenerate('#');
    const newColor3 = hslColorGenerate('#');
    const newColor4 = hslColorGenerate('#');

    const navigate = directionValue();

    const radialGradient = `radial-gradient(${navigate}, ${newColor1}, ${newColor2}, ${newColor3}, ${newColor4})`;

    document.body.style.background = radialGradient;

    value.innerHTML = `<span>${radialGradient}</span>`;
};

btn.addEventListener('click', generate);

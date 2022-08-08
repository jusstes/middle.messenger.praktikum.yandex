import ejs from 'ejs';

const string = `
<svg viewBox="0 0 2006.5 2500"
     xmlns="http://www.w3.org/2000/svg">
    <path d="m1003.3 0c696.1 0 1034.1 1528.1 1001 1825.6-22.5 205.6-630.6 674.4-1001 674.4s-978.6-468.8-1001.1-674.4c-33-297.5 305-1825.6 1001.1-1825.6zm0 2280c317.5 0 731-543.1 623.1-951.9-13.1-65-155.9-314.4-443.5-68.8-103.5 88.7-256.3 88.1-359.9 0-286.9-245.6-429.7 3.7-443.5 68.8-107.2 408.8 306.3 951.9 623.8 951.9zm0-624.4c226.4 0 280.7 157.5 245.1 303.1-64.9 272.5-425.4 271.9-490.2 0-35.6-145.6 18-303.1 245.1-303.1z"/>
</svg>
`;

const template = ejs.compile(string);

export default template;
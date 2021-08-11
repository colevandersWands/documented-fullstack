import { hello } from '../api-calls/hello.js';
import { header } from '../components/header.js';

hello().then((greeting) => {
  const renderedGreeting = header(greeting);
  document.body.appendChild(renderedGreeting);
});

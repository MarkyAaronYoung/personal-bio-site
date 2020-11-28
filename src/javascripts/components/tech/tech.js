import utils from '../../helpers/utils';
import './tech.scss';

const buildTech = () => {
  const domString = `
  <div id="tech-page">
    <div class="tech">
      <h2 id="tech-title" class="text-center">Technologies Learned</h2>
      <ul class="mt-4" id="techList">
        <li class="techItem">Javascript</li>
        <li class="techItem">React</li>
        <li class="techItem">Python</li>
        <li class="techItem">Django</li>
        <li class="techItem">SQL</li>
        <li class="techItem">HTML</li>
        <li class="techItem">CSS / SCSS</li>
        <li class="techItem">Webpack</li>
        <li class="techItem">NPM</li>
        <li class="techItem">Firebase</li>
        <li class="techItem">Axios</li>
        <li class="techItem">Version Control with Github Projects</li>
      </ul>
    </div>
  </div>
`;

  utils.printToDom('#website', domString);
};

export default { buildTech };

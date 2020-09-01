import utils from '../../helpers/utils';
import 'bootstrap';

const buildBio = () => {
  const domString = `
    <div class="home">
      <a id="go-home"><i class="fas fa-arrow-left"></i></a>
    </div>
  
  `;
  utils.printToDom('#website', domString);
  $('body').on('click', '#go-home', utils.goHome);
};

export default { buildBio };

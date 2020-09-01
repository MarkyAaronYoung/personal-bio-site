import utils from '../../helpers/utils';
import 'bootstrap';

const buildBio = () => {
  const domString = `
    <div class="home">
      <a id="go-home"><i class="fas fa-arrow-left"></i></a>
      <p>Mark Aaron Young graduated from James Madison University in Harrisonburg, Virginia where he majored in Psychology and Anthropology. 
         There, he was a manager at the school’s animal laboratory on behavior analysis. 
         He studied abroad in Kenya and Pakistan, focusing on cultural differences in child discipline. 
         After graduating, Mark went on to become a behavior specialist for children with developmental disabilities, a residential counselor at a group home, 
         and an outpatient admissions coordinator for a nationwide network of substance abuse/mental health treatment centers. 
        Mark moved to Nashville in February of 2013 and succumbed to its friendly-faced, neighborly charm. 
        After buying his home in 2019 with his now wife he made the decision to strike down a different career path. ..
    </div>
  
  `;
  utils.printToDom('#website', domString);
  $('body').on('click', '#go-home', utils.goHome);
};

export default { buildBio };

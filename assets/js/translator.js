var switchLangButton = document.getElementById('switch-lang');
var titleElement = document.getElementById('title');
var hobbiesElement = document.getElementById('hobbies');
var trainingElement = document.getElementById('training');
var projectsElement = document.getElementById('projects');
var contactElement = document.getElementById('contact');
var aboutElement = document.getElementById('about');
var skillsElement = document.getElementById('skills');

var currentLang = 'es';

switchLangButton.addEventListener('click', function() {
  if (currentLang === 'es') {
    currentLang = 'en';
    titleElement.textContent = 'Hello!, my name is Walter and I do web development.';
    hobbiesElement.textContent = 'Hobbies';
    trainingElement.textContent = 'Training';
    aboutElement.textContent = 'About me';
    projectsElement.textContent = 'Projects';
    contactElement.textContent = 'Contact';
    skillsElement.textContent = 'Skills';

    switchLangButton.textContent = 'Cambiar Idioma';
  } else {
    currentLang = 'es';
    titleElement.textContent = 'Hola!, mi nombre es Walter y hago desarrollo web.';
    aboutElement.textContent = 'Acerca de mi';
    hobbiesElement.textContent = 'Pasatiempos';
    projectsElement.textContent = 'Proyectos';
    trainingElement.textContent = 'Formación';
    contactElement.textContent = 'Contacto';
    skillsElement.textContent = 'Habilidades';

    switchLangButton.textContent = 'Switch Language';
  }
});

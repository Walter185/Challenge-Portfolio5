var switchLangButton = document.getElementById('switch-lang');
var titleElement = document.getElementById('title');
var hobbiesElement = document.getElementById('hobbies');
var hobbies2Element = document.getElementById('hobbies2');
var projects2Element = document.getElementById('projects2'); 
var trainingElement = document.getElementById('training');
var training2Element = document.getElementById('training2');

var projectsElement = document.getElementById('projects');
var contactElement = document.getElementById('contact');
var aboutElement = document.getElementById('about');
var skillsElement = document.getElementById('skills');
var skills2Element = document.getElementById('skills2');

var downloadElement = document.getElementById('download');
var presentacionElement = document.getElementById('presentacion');
var about2Element = document.getElementById('about2');
var about3Element = document.getElementById('about3');
var about4Element = document.getElementById('about4');

var currentLang = 'es';

switchLangButton.addEventListener('click', function() {
  if (currentLang === 'es') {
    currentLang = 'en';
    titleElement.textContent = 'Hello!, my name is Walter and I do web development.';
    hobbiesElement.textContent = 'Hobbies';
    hobbies2Element.textContent = 'Hobbies';
    trainingElement.textContent = 'Training';
    aboutElement.textContent = 'About me';
    projectsElement.textContent = 'Projects';
    contactElement.textContent = 'Contact';
    skillsElement.textContent = 'Skills';
    skills2Element.textContent = 'Skills';
    training2Element.textContent = 'Academic Training';
    projects2Element.textContent = 'Projects';

    downloadElement.textContent = 'Download CV';
    presentacionElement.textContent = 'I am Full-Stack and currently participating in Alura s Oracle ONE project. In addition, I am specializing in Cybersecurity with IBM SkillSBuild.';
    about2Element.textContent = 'About me';
    about3Element.textContent = 'Passionate about technology and everything that one can create with it. Unstoppable in the search for new tools that can make my work more appreciable for my clients.';
    about4Element.textContent = 'I am currently working freelance, but I am open to a part-time or full-time asynchronous position.';

    switchLangButton.textContent = 'Cambiar Idioma';
  } else {
    currentLang = 'es';
    titleElement.textContent = 'Hola!, mi nombre es Walter y hago desarrollo web.';
    aboutElement.textContent = 'Acerca de mi';
    hobbiesElement.textContent = 'Pasatiempos';
    hobbies2Element.textContent = 'Pasatiempos';
    projectsElement.textContent = 'Proyectos';
    trainingElement.textContent = 'Formación';
    contactElement.textContent = 'Contacto';
    skillsElement.textContent = 'Habilidades';
    training2Element.textContent = 'Formación Académica';
    projects2Element.textContent = 'Proyectos';

    skills2Element.textContent = 'Habilidades';
    downloadElement.textContent = 'Descargar CV';
    presentacionElement.textContent = 'Soy Full-Stack y actualmente participando del proyecto Oracle ONE de Alura. Además, me estoy especializando en CyberSeguridad con IBM SkillSBuild.';
    about2Element.textContent = 'Acerca de mi';
    about3Element.textContent = 'Apasionado por la tecnologia y todo lo que uno puede llegar a crear con ella. Imparable en la búsqueda de nuevas herramientas que puedan hacer mi labor más apreciable por mis clientes.';
    about4Element.textContent = 'Actualmente me encuentro trabajando con forma freelance, pero me encuentro abierto a un puesto part-time o full-time asincrono.'
    switchLangButton.textContent = 'Switch Language';
  }
});

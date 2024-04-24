import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../static/css/Card.css';

interface ProjectProps {
    title: string;
    description: string;
    img: string;
}

function ProjectCard ({title, description, img}: ProjectProps){
    var isLightMode = document.body.classList.contains('light-mode');

    return (
        <div className='col'>
            <div className={isLightMode ? 'card lightmode' : 'card'}>
                <img src={img} className='card-img-top'></img>
                <div className='card-body'>
                    <h5 className='card-title'>{title}</h5>
                    <p className='card-text'>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;
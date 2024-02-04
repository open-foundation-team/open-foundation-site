// Style imports
import './styles.scss';

// Component props
export interface ProjectProps {
    icon?: string;
    title: string;
    description: string;
    href: string;
}


// Component declaration
export const Project = ({ icon, title, description, href }: ProjectProps) => {

    return (
        <a className="project-styled" href={href}>
            <div className="icon">
                {icon ?
                    <img src={icon} alt={`${title} logo / icon.`} />
                    :
                    <div className="no-icon">{title.split('')[0]}</div>
                }
            </div>
            <div className="text">
                <p className="title">{title}</p>
                <p className="description">{description}</p>
            </div>
        </a>
    );
};

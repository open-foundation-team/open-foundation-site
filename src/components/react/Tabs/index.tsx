// React imports
import { useState } from "react";

// Style imports
import './styles.scss';
import { Project, type ProjectProps } from "../Project";

interface Tab {
    text: string;
    icon: string;
    content: ProjectProps[];
}

// Component props
interface TabsProps {
    tabs: Tab[];
}

// Component declaration
export const Tabs = ({ tabs }: TabsProps) => {

    const [selected, setSelected] = useState(0);

    return (
        <>
            <div className="tabs-styled">
                {
                    tabs.map((tab, idx) => {

                        const selectedClass = selected === idx ? 'active' : null;

                        return (
                            <div
                                className={["tab", selectedClass].join(' ')}
                                onClick={() => setSelected(idx)}
                                key={idx}
                            >
                                <img src={tab.icon} alt="" />
                                <p>{tab.text}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div className="project-container">
                {tabs[selected].content.map((project, idx) => (
                    <Project {...project} key={idx} />
                ))}
            </div>
        </>
    )
}
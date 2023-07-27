import React, { useEffect, useState } from 'react';
import { DownArrowImage, DownArrowWhiteImage, UpArrowImage } from '../../assets';
import "./pm-expandable-menu.scss";
import PMIconButton from '../icon-button/PMIconButton';

interface IExpandableMenuProps {
    chosenProject: string;
    projects: string[];
    expanded: boolean;
    selectedName: string;
    setExpanded: (expanded: boolean) => void
    setProjectName: (tabValue: any) => void
}

const ExpandableMenu = (props: IExpandableMenuProps) => {
    // const [isExpanded, setIsExpanded] = useState(false);
    // const [selectedName, setSelectedName] = useState(props.chosenProject);
    const themeColor = localStorage.getItem('globalTheme');

    // const toggleExpand = () => {
    //     setIsExpanded((prevExpanded) => !prevExpanded);
    // };

    // const handleNameClick = (name: string) => {
    //     setIsExpanded(false);
    //     setSelectedName(name);
    // };


    return (
        <div className='pm-expandable-menu'>
            <button onClick={() => props.setExpanded(!props.expanded)} className='pm-expandable-menu__button'>
                {props.selectedName}
                {themeColor === 'light' ?
                    (<img alt="Down" src={DownArrowImage} className='pm-expandable-menu__arrow' />) :
                    (<img alt="Down" src={DownArrowWhiteImage} className='pm-expandable-menu__arrow' />)}
            </button>
            {props.expanded && (
                <ul className='pm-expandable-menu__list'>
                    {props.projects.map((name) => (
                        <li key={name} onClick={() => props.setProjectName(name)}>
                            {name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ExpandableMenu;

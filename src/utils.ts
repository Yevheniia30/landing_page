import HTMLAnchorElement, {MouseEvent} from 'react';

export const scrollToSection = (e: MouseEvent<HTMLAnchorElement>, text: string) => {
    const target = document.getElementById(text);
    e.preventDefault();
    target && target.scrollIntoView({behavior: 'smooth', block: 'start'});
};

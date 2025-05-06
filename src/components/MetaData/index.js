import { useEffect } from "react";
import metadata from './metadata.json'

const Meta = () => {
    useEffect(() => {
        document.title = metadata.title;

        /* Array.from(document.head.querySelectorAll('[property^="og:"]')).forEach((meta) => meta.remove()); */

        const metaDescription = document.head.querySelector('meta[property="description"]');
        if (!metaDescription) {
            const newMetaDescription = document.createElement('meta');
            newMetaDescription.setAttribute('property', 'og:description');
            newMetaDescription.content = metadata.description;
            document.head.appendChild(newMetaDescription);
        } else {
            metaDescription.content = metadata.description;
        }

        const metaKeywords = document.head.querySelector('meta[property="keywords"]');
        if (!metaKeywords) {
            const newMetaKeywords = document.createElement('meta');
            newMetaKeywords.setAttribute('property', 'og:keywords');
            newMetaKeywords.content = metadata.keywords;
            document.head.appendChild(newMetaKeywords);
        } else {
            metaKeywords.content = metadata.keywords;
        }

        const metaOgTitle = document.head.querySelector('meta[property="og:title"]');
        if (!metaOgTitle) {
            const newMetaOgTitle = document.createElement('meta');
            newMetaOgTitle.setAttribute('property', 'og:title');
            newMetaOgTitle.content = metadata.title;
            document.head.appendChild(newMetaOgTitle);
        } else {
            metaOgTitle.content = metadata.title;
        }

        const metaOgDescription = document.head.querySelector('meta[property="og:description"]');
        if (!metaOgDescription) {
            const newMetaOgDescription = document.createElement('meta');
            newMetaOgDescription.setAttribute('property', 'og:description');
            newMetaOgDescription.content = metadata.description;
            document.head.appendChild(newMetaOgDescription);
        } else {
            metaOgDescription.content = metadata.description;
        }

        const metaOgImage = document.head.querySelector('meta[property="og:image"]');
        if (!metaOgImage) {
            const newMetaOgImage = document.createElement('meta');
            newMetaOgImage.setAttribute('property', 'og:image');
            newMetaOgImage.content = metadata.image;
            document.head.appendChild(newMetaOgImage);
        } else {
            metaOgImage.content = metadata.image;
        }
    }, []);

    return null;
};

export default Meta;

/*         document.querySelector('meta[property="description"]').setAttribute('content', metadata.description);
        document.querySelector('meta[property="image"]').setAttribute('content', metadata.image);
        document.querySelector('meta[property="keywords"]').setAttribute("content", metadata.keywords);

        document.querySelector('meta[property="og:title"]').setAttribute('content', metadata.og.title);
        document.querySelector('meta[property="og:description"]').setAttribute('content', metadata.og.description);
        document.querySelector('meta[property="og:image"]').setAttribute('content', metadata.og.image); 
        
        <meta property="og:description" content="Luzyla | Transforming ideas into seamless web experiences | Transformando ideas en experiencias web impactantes">
<meta property="og:image" content="https://luzyla.dev/assets/og-image.jpg">
<meta property="og:url" content="https://luzyla.dev/">
<meta property="og:type" content="website">
        
        */
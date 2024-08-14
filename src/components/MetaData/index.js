import { useEffect } from "react";
import metadata from './metadata.json'

const Meta = () => {
    useEffect(() => {
        document.title = metadata.title;

        /* Array.from(document.head.querySelectorAll('[property^="og:"]')).forEach((meta) => meta.remove()); */

        const metaDescription = document.head.querySelector('meta[name="description"]');
        if (!metaDescription) {
            const newMetaDescription = document.createElement('meta');
            newMetaDescription.name = 'description';
            newMetaDescription.content = metadata.description;
            document.head.appendChild(newMetaDescription);
        } else {
            metaDescription.content = metadata.description;
        }

        const metaKeywords = document.head.querySelector('meta[name="keywords"]');
        if (!metaKeywords) {
            const newMetaKeywords = document.createElement('meta');
            newMetaKeywords.name = 'keywords';
            newMetaKeywords.content = metadata.keywords;
            document.head.appendChild(newMetaKeywords);
        } else {
            metaKeywords.content = metadata.keywords;
        }

        const metaOgTitle = document.head.querySelector('meta[name="og:title"]');
        if (!metaOgTitle) {
            const newMetaOgTitle = document.createElement('meta');
            newMetaOgTitle.name = 'og:title';
            newMetaOgTitle.content = metadata.title;
            document.head.appendChild(newMetaOgTitle);
        } else {
            metaOgTitle.content = metadata.title;
        }

        const metaOgDescription = document.head.querySelector('meta[name="og:description"]');
        if (!metaOgDescription) {
            const newMetaOgDescription = document.createElement('meta');
            newMetaOgDescription.name = 'og:description';
            newMetaOgDescription.content = metadata.description;
            document.head.appendChild(newMetaOgDescription);
        } else {
            metaOgDescription.content = metadata.description;
        }

        const metaOgImage = document.head.querySelector('meta[name="og:image"]');
        if (!metaOgImage) {
            const newMetaOgImage = document.createElement('meta');
            newMetaOgImage.name = 'og:image';
            newMetaOgImage.content = metadata.image;
            document.head.appendChild(newMetaOgImage);
        } else {
            metaOgImage.content = metadata.image;
        }
    }, []);

    return null;
};

export default Meta;

/*         document.querySelector('meta[name="description"]').setAttribute('content', metadata.description);
        document.querySelector('meta[name="image"]').setAttribute('content', metadata.image);
        document.querySelector('meta[name="keywords"]').setAttribute("content", metadata.keywords);

        document.querySelector('meta[property="og:title"]').setAttribute('content', metadata.og.title);
        document.querySelector('meta[property="og:description"]').setAttribute('content', metadata.og.description);
        document.querySelector('meta[property="og:image"]').setAttribute('content', metadata.og.image); */
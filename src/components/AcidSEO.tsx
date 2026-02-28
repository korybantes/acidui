import { useEffect } from 'react';

export interface AcidSEOProps {
    title: string;
    description: string;
    keywords?: string;
}

export function AcidSEO({ title, description, keywords }: AcidSEOProps) {
    useEffect(() => {
        // Update title
        document.title = `${title} | AcidUI Core`;

        // Update or create Description meta tag
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.setAttribute('name', 'description');
            document.head.appendChild(metaDescription);
        }
        metaDescription.setAttribute('content', description);

        // Update or create Keywords meta tag if provided
        if (keywords) {
            let metaKeywords = document.querySelector('meta[name="keywords"]');
            if (!metaKeywords) {
                metaKeywords = document.createElement('meta');
                metaKeywords.setAttribute('name', 'keywords');
                document.head.appendChild(metaKeywords);
            }
            metaKeywords.setAttribute('content', keywords);
        }
    }, [title, description, keywords]);

    return null;
}

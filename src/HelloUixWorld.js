import { useState, useEffect } from 'react';

import {
    Wrapper,
    useUiExtension,
    FieldExtensionType,
    FieldExtensionFeature
} from '@graphcms/uix-react-sdk'

const HelloUixWorld = () => {
    const { isTableCell, extension, sidebarConfig, form } = useUiExtension();
    const [ message, setMessage ] = useState('');

    useEffect(() => {
        setMessage('Hello UIX World!');
    }, [setMessage]);
    
    // Field UI Extension only
    // if (isTableCell) {
    //     return null;
    // }

    return (
        <>{message}</>
    );
};

const declaration = {
    name: 'Your UI Extension name',
    description: 'Your UI Extension description',
    extensionType: 'field', // Options: `field` or `formSidebar`
    // Field UI Extension only
    fieldType: FieldExtensionType.STRING,
    features: [
        FieldExtensionFeature.FieldRenderer
    ],
    // Global configuration
    config: {
        WEBSITE_URL: {
            type: 'string',
            displayName: 'Preview URL',
            description: 'Your website base URL',
            required: true,
        }
    },
    // Sidebar UI Extension only
    // This is an instance configuration
    // sidebarConfig: {
    //     API_KEY: {
    //         type: 'string',
    //         displayName: 'API Key',
    //         description: 'Enter your API Key',
    //         required: true,
    //     }
    // }
};

const HelloUixWorldExtension = () => {
    return (
        <Wrapper declaration={declaration}>
            <HelloUixWorld />
        </Wrapper>
    )
}

export default HelloUixWorldExtension;
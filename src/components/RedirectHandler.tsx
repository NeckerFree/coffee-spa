import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const RedirectHandler: React.FC = () =>
{
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() =>
    {
        const queryParams = new URLSearchParams(location.search);
        const redirectPath = queryParams.get('redirect');
        if (redirectPath)
        {
            navigate(redirectPath, { replace: true });
        }
    }, [location, navigate]);

    return null;
};

export default RedirectHandler;
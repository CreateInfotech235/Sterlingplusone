import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router';

function Protected() {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/auth/sign-in');
        }
    }, [navigate]);

    return (
        <div className="protected-wrapper">
            <Outlet />
        </div>
    );
}

export default Protected;

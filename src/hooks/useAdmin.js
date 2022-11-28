import { useEffect, useState } from 'react';

const useAdmin = () => {
    const [isAdmin, setIsAdmin] = useState(false)
    const [isAdminLoading, setAdminLoading] = useState(true)
    useEffect(() => {
        fetch('https://resala-server.vercel.app/admin')
            .then(res => res.json())
            .then(data => {
                setIsAdmin(data[0].role === 'admin');
                setAdminLoading(false)
            })
    },)
    return [isAdmin, isAdminLoading]
};

export default useAdmin;
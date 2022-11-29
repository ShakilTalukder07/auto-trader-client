import { useEffect, useState } from "react"

const useSeller = email => {
    const [isSeller, setIsSeller] = useState(false)
    const [isSellerLoading, setSellerLoading] = useState(true)
    useEffect(() => {
        if (email) {
            fetch(`https://resala-server.vercel.app/users/${email}`)
                .then(res => res.json())
                .then(data => {
                    // console.log(data.isSeller);
                    setIsSeller(data.isSeller)
                    setSellerLoading(false)
                })
        }
    }, [email])
    return [isSeller, isSellerLoading]
}

export default useSeller;
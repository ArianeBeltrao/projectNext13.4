'use client'

import { useEffect, useState } from "react"
import { getUsers } from "../../services/get-users"
import Link from "next/link"

type Props = {
    currentUserId: string
}

export default function OtherUsers({currentUserId}: Props) {
    const [otherUsers, setOtherUsers] = useState([])
    
    useEffect(() => {
            const users = () => {
                getUsers().then(users => {
                    setOtherUsers(
                        users.filter((user: any) => user.id !== parseInt(currentUserId))
                    )
                })
            }
            users()
    }, [currentUserId])

    return <>
        <ul>
            {otherUsers.map((user: any) =>
                <li key={user.id}>
                    <Link href={`/users/${user.id}`}>
                        {user.first_name} {user.last_name}
                    </Link>
                </li>
            )}
        </ul>
    </>
}
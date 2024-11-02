"use client"
import Header from "@/components/layouts/Header";
import Sidebar from "@/components/layouts/Sidebar";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

interface UserData {
    id: number;
    username: string;
    email: string;
    password: string;
}

export default function UserList() {
    
    const router = useRouter()
    const [users, setUsers] = useState<UserData[]>([])
    const [error, setError] = useState<string | null>()

    useEffect(() => {
        const fetchUsers = async () => {
            const url = 'https://profandresouza.pythonanywhere.com/api/users/'
            const token = localStorage.getItem('token')
            await axios.get(
                url, {
                    headers: {
                        'Accept': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                }
            ).then((response) => {
                setUsers(response.data)
            }).catch((error) => {
                router.push('/login')
                setError(JSON.stringify(error.response.data))
            })
        };

        fetchUsers();
    }, [])

    return (
        <div className="flex">
          <Sidebar />
          <div className="flex-1">
            <Header title="Usuários" username="André Souza" />
            <main>
                <div className="flex items-start justify-center min-h-screen bg-gray-100 p-6">
                    <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
                        <h2 className="text-2xl font-bold mb-6 text-gray-800">Lista de Usuários</h2>
                        {error ? (
                            <p className="text-red-500 text-sm mb-4">{error}</p>
                        ) : (
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr>
                                    <th className="border-b p-4 text-gray-600 font-semibold">Nome</th>
                                    <th className="border-b p-4 text-gray-600 font-semibold">Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((user) => (
                                    <tr key={user.id} className="hover:bg-gray-100">
                                        <td className="border-b p-4">{user.username}</td>
                                        <td className="border-b p-4">{user.email}</td>
                                    </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>

            </main>
          </div>
        </div>
    );
}

// React Router-DOM
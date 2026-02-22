import { PlusIcon } from "lucide-react"
import { useEffect, useState } from "react"
import {Link} from "react-router"
import axios from "axios"

const Navbar = () => {

    const [user, setUser] = useState(null)
    
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await axios.get(`/api/auth/current_user`, {withCredentials: true})
                //console.log(res)
                console.log("Server says user is:", res.data)
                setUser(res.data || null)
            } catch (err){
                console.log(err)
                setUser(null)
            }
        }

        fetchUser()
    }, [])

    return (
        <header className="w-full bg-base-300 border-b border-base-content/10">
            <div className="p-4 sm:px-6 lg:px-8 py-4">
                <div className="flex items-center justify-between gap-8">
                    <h1 className="text-3xl font-bold text-primary font-mono tracking-tighter">
                        Notesapp
                    </h1>

                    <div className="flex gap-4">
                        <Link to={"/create"} className="btn btn-primary ">
                            <PlusIcon className="size-5"/>
                            <span>New Note</span>
                        </Link>
                    
                        {!user ? (
                                <Link to={"/login"} className="btn btn-primary">
                                    <span>Login/Sign up</span>
                                </Link>
                        ) : (
                                <a href={`/api/auth/logout`} className="btn btn-primary">
                                    Logout
                                </a>
                        )}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar
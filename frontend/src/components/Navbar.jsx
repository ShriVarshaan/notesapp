import { PlusIcon } from "lucide-react"
import {Link} from "react-router"

const Navbar = () => {
    return (
        <header className="w-full bg-base-300 border-b border-base-content/10">
            <div className="p-4 sm:px-6 lg:px-8 py-4">
                <div className="flex items-center justify-between gap-8">
                    <h1 className="text-3xl font-bold text-primary font-mono tracking-tighter">
                        Notesapp
                    </h1>
                    <div className="flex items-center gap-4">
                        <Link to={"/create"} className="btn btn-primary">
                            <PlusIcon className="size-5"/>
                            <span>New Note</span>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar
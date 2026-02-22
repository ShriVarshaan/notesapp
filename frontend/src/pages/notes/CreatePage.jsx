import {Link, useNavigate} from "react-router"
import {useState} from "react"
import {ArrowLeftIcon} from "lucide-react"
import axios from "axios"
import toast from "react-hot-toast"
import API from '../../api/axiosInstance.js'

const CreatePage = () => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!title.trim() || !content){
            toast.error("All fields are required")
            return
        }
        setLoading(true)

        try{
            await API.post("/api/notes", {title, content})
            toast.success("Note created successfully!")
            navigate("/")
        }catch (err){
            if(err.response.status == 429){
                toast.error("Too many requests")
            }else{
                toast.error("Failed to create note!")
            }
        }finally{
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-base-200">
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-lg mx-auto"> 
                    
                    <Link to={"/"} className="btn btn-ghost mb-6">
                        <ArrowLeftIcon className="size-5" />
                        Back to notes
                    </Link>

                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title text-2xl mb-4">
                                Create new note
                            </h2>
                            <form onSubmit={handleSubmit}>
                                <div className="form-control mb-4">
                                    <label className="label">
                                        <span className="label-text">Title</span>
                                    </label>
                                    <input 
                                        type="text" 
                                        placeholder="Note Title"
                                        className="input input-bordered w-full" 
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                </div>

                                <div className="form-control mb-4">
                                    <label className="label">
                                        <span className="label-text">Content</span>
                                    </label>
                                    <textarea 
                                        placeholder="Note Content"
                                        className="textarea textarea-bordered w-full h-32" 
                                        value={content}
                                        onChange={(e) => setContent(e.target.value)}
                                    />
                                </div>

                                <div className="card-actions justify-end">
                                    <button type="submit" className="btn btn-primary" disabled={loading}>
                                        {loading ? "Creating...." : "Create note"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreatePage
import axios from "axios"
import {useState} from "react"
import { useNavigate, useParams } from "react-router"
import { LoaderIcon, ArrowLeftIcon, Trash2Icon } from "lucide-react"
import { useEffect } from "react"
import { Link } from "react-router"
import toast from "react-hot-toast"

const NoteDetailPage = () => {
    const [note, setNote] = useState(null)
    const [loading, setLoading] = useState(true)
    const [saving, setSaving] = useState(false)

    const navigate = useNavigate()
    const {id} = useParams()

    useEffect(() => {
        const fetchNote = async () => {
            try{
                const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/notes/${id}`)
                console.log(res.data.message)
                setNote(res.data.message)
            }catch(err){
                toast.error("Failed to fetch the note")
            }finally{
                setLoading(false)
            }
        }

        fetchNote()
    }, [id])

    const handleDelete = async (e, id) => {
        e.preventDefault()
        if (!window.confirm("Are you sure you want to delete")){
            return
        }

        try{
            await axios.delete(`${import.meta.env.VITE_API_URL}/api/notes/${id}`)
            toast.success("note delete successfully")
            navigate("/")
        }catch (err){
            toast.error("couldn't delete note")
        }
    }

    const handleSave = async (e) =>{

        e.preventDefault()

        if (!note.title.trim() || !note.content) {
            toast.error("All fields are required")
            return
        }

        setSaving(true)

        try{
            await axios.put(`${import.meta.env.VITE_API_URL}/api/notes/${id}`, {title: note.title, content: note.content})
            toast.success("saved changes")
        }catch(err){
            toast.error("couldn't save")
            console.log(err)
        }finally{
            setSaving(false)
        }
    }

    if (loading){
        return (
            <div className="min-h-screen bg-base-200 flex items-center justify-center">
                <LoaderIcon className="animate-spin size-10" />
            </div>
        )
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
                                Notes details
                            </h2>
                            <form>
                                <div className="form-control mb-4">
                                    <label className="label">
                                        <span className="label-text">Title</span>
                                    </label>
                                    <input 
                                        type="text" 
                                        placeholder="Note Title"
                                        className="input input-bordered w-full" 
                                        value={note.title}
                                        onChange={(e) => setNote({...note, title: e.target.value})}
                                    />
                                </div>

                                <div className="form-control mb-4">
                                    <label className="label">
                                        <span className="label-text">Content</span>
                                    </label>
                                    <textarea 
                                        placeholder="Note Content"
                                        className="textarea textarea-bordered w-full h-32" 
                                        value={note.content}
                                        onChange={(e) => setNote({...note, content: e.target.value})}
                                    />
                                </div>

                                <div className="card-actions justify-between">

                                    <button onClick={(e) => handleDelete(e, note._id)} className="btn btn-ghost text-error">
                                        <Trash2Icon className="size-4" />
                                    </button>

                                    <button type="submit" className="btn btn-primary" disabled={saving} onClick={handleSave}>
                                        {saving? "Saving..." : "Save changes"}
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

export default NoteDetailPage
import { FilePlus2, Search } from "lucide-react";
import { Link } from "react-router";

const NoNotes = ({ isSearching = false }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      {/* Icon Container */}
      <div className="bg-base-200 p-6 rounded-full mb-6">
        {isSearching ? (
          <Search className="size-12 text-base-content/50" />
        ) : (
          <FilePlus2 className="size-12 text-[#00FF9D]" />
        )}
      </div>

      {/* Text Content */}
      <h2 className="text-2xl font-bold text-base-content mb-2">
        {isSearching ? "No matches found" : "No notes yet"}
      </h2>
      <p className="text-base-content/70 max-w-sm mb-8">
        {isSearching 
          ? "We couldn't find what you're looking for. Try a different keyword." 
          : "Your collection is empty. Start capturing your thoughts and ideas today!"}
      </p>

      {/* Action Button */}
      {!isSearching && (
        <Link 
          to="/create" 
          className="btn bg-[#00FF9D] hover:bg-[#00e68e] text-black border-none px-8"
        >
          Create First Note
        </Link>
      )}
    </div>
  );
};

export default NoNotes;
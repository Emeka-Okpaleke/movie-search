import type { Movie } from "@/lib/types"
import { Loader2 } from "lucide-react"

interface SearchPreviewProps {
  movies: Movie[]
  loading: boolean
  onSelect: (movie: Movie) => void
  query: string
}

export function SearchPreview({ movies, loading, onSelect, query }: SearchPreviewProps) {
  if (!query.trim()) return null

  return (
    <div className="absolute z-10 mt-1 w-full bg-white rounded-md shadow-lg border border-gray-200 max-h-80 overflow-auto">
      {loading ? (
        <div className="flex items-center justify-center p-4">
          <Loader2 className="h-5 w-5 animate-spin text-gray-400" />
          <span className="ml-2 text-sm text-gray-500">Searching...</span>
        </div>
      ) : movies.length > 0 ? (
        <ul className="py-1">
          {movies.map((movie) => (
            <li
              key={movie.imdbID}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-3"
              onClick={() => onSelect(movie)}
            >
              <div className="h-12 w-8 flex-shrink-0 bg-gray-200 rounded overflow-hidden">
                {movie.Poster && movie.Poster !== "N/A" ? (
                  <img
                    src={movie.Poster || "/placeholder.svg"}
                    alt={movie.Title}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="h-full w-full flex items-center justify-center text-gray-400 text-xs">No image</div>
                )}
              </div>
              <div>
                <p className="text-sm font-medium">{movie.Title}</p>
                <p className="text-xs text-gray-500">{movie.Year}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="p-4 text-sm text-gray-500 text-center">No movies found for "{query}"</div>
      )}
    </div>
  )
}


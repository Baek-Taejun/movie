import { useEffect } from "react";

const List_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function Group() {
  const { group, page } = useParams();
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovie = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?page=${page}&${group}&sort_by=rating`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getMovies();
    return;
  }, [group, page]);

  return (
    <div className={Styles.container}>
      {loding ? (
        <Load />
      ) : (
        <div className={styles.movies}>
          {movies.map((movie) => (
            <MovieGroup
              key={movie.id}
              id={movie.id}
              title={movie.title}
              coverImg={movie.medium_cover_image}
              rating={movie.rating}
              runtime={movie.runtime}
              summary={movie.summary}
              year={movie.year}
            />
          ))}
        </div>
      )}
      {loading ? null : (
        <div className={styles.footer}>
          <div className={styles.list}>
            {List_arr.map((lst) => {
              return (
                <Link key={lst} to={`/page/${group}/${lst}`}>
                  {lst}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Group;

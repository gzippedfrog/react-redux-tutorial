export function FetchedPosts({ posts }) {
    if (!posts.length) {
        return <button className="btn btn-primary">Download</button>;
    }

    return (
        <div>
            <h1>Fetched Posts</h1>
        </div>
    );
}

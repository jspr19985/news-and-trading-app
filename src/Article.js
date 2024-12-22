import './Article.css';

const articleArray = new Array(50).fill("");

function Article() {
    return (
        articleArray.map((article, index) => {
            return (
                <div className="articleContainer" key={`article-${index}`}>
                    {`News article: ${index}`}
                </div >
            )
        })

    );
}

export default Article;

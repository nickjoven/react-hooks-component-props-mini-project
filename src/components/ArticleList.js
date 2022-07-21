import Article from './Article'


const ArticleList = ({posts}) => {
    const getArticles = posts.map((element) => {
        return (
            <Article
            key={element.id} 
            title={element.title} 
            date={element.date} 
            preview={element.preview} 
            minutes={element.minutes} 
            />
        )
    })

    return (
        <main>
            {getArticles}
        </main>
    )
}

export default ArticleList
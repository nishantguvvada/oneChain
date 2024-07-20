export const NewsTemplate = (props) => {
    return <div>
        { props.news.map((data, i) =>
    <main key={i} className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white">
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
            <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue">
                <header className="mb-4 lg:mb-6 not-format">
                    <address className="flex items-center mb-6 not-italic">
                        <div className="inline-flex items-center mr-3 text-sm text-gray-900">
                            <img className="mr-4 w-16 h-16 rounded-full" src={`https://flowbite.com/docs/images/people/profile-picture-${i+1}.jpg`} alt="Jese Leos"/>
                            <div>
                                <a href="#" rel="author" className="text-xl font-bold text-gray-900">{data.author}</a>
                                <p className="text-base text-gray-500">Correspondent</p>
                                <p className="text-base text-gray-500">{data.publishedAt}</p>
                            </div>
                        </div>
                    </address>
                    <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl">{data.title}</h1>
                </header>
                <p className="lead mb-4">{data.content}</p>
                <figure><img src={data.urlToImage} alt=""/>
                    <figcaption>Read the entire article <a href={data.url}>here.</a></figcaption>
                </figure>
            </article>
        </div>
    </main>
    )
    }
</div>

}